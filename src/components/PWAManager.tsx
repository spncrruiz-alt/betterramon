'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAManager() {
  const [showInstall, setShowInstall] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    await deferredPrompt.current.userChoice;
    deferredPrompt.current = null;
    setShowInstall(false);
  }, []);

  useEffect(() => {
    // Install prompt
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (navigator as unknown as { standalone?: boolean }).standalone;
      if (!isStandalone && !sessionStorage.getItem('pwa-install-dismissed')) {
        setShowInstall(true);
      }
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);

    // Service worker registration. sw.js activates new versions on its own.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((reg) => {
        setInterval(() => reg.update(), 30 * 60 * 1000);
      });

      // A new version took over: reload quietly once the tab is in the
      // background, so nobody loses their place while reading.
      let refreshing = false;
      const reloadWhenHidden = () => {
        if (refreshing || !document.hidden) return;
        refreshing = true;
        window.location.reload();
      };
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        reloadWhenHidden();
        document.addEventListener('visibilitychange', reloadWhenHidden);
      });
    }

    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstall);
  }, []);

  return (
    <>
      {showInstall && (
        <div className="pwa-install-banner" role="alert" aria-live="polite">
          <div className="pwa-install-content">
            <i className="bi bi-download" aria-hidden="true"></i>
            <span>Install BetterRamon for quick access to services.</span>
          </div>
          <div className="pwa-install-actions">
            <button
              className="pwa-install-btn"
              onClick={handleInstall}
              aria-label="Install BetterRamon app"
            >
              Install
            </button>
            <button
              className="pwa-install-dismiss"
              onClick={() => {
                sessionStorage.setItem('pwa-install-dismissed', '1');
                setShowInstall(false);
              }}
              aria-label="Dismiss install prompt"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
