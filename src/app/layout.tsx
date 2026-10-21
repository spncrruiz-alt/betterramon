import type { Metadata, Viewport } from 'next';
import HotlineBar from '@/components/layout/HotlineBar';
import Header from '@/components/layout/Header';
import InfoBar from '@/components/layout/InfoBar';
import Footer from '@/components/layout/Footer';
import PWAManager from '@/components/PWAManager';
import BackToTop from '@/components/BackToTop';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { lgu } from '@/data/ramon';

export const viewport: Viewport = {
  themeColor: '#1d3f9e',
};

export const metadata: Metadata = {
  metadataBase: new URL(lgu.site),
  title: {
    default: 'BetterRamon.org | Community Portal for Ramon, Isabela',
    template: '%s | BetterRamon.org',
  },
  description: 'BetterRamon.org - Your digital gateway to LGU Ramon services.',
  keywords: ['BetterRamon', 'Ramon Isabela', 'LGU Ramon', 'municipal services'],
  authors: [{ name: 'BetterRamon contributors' }],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: '/',
    images: [
      {
        url: '/assets/images/banners/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BetterRamon.org',
      },
    ],
    siteName: 'BetterRamon.org',
    title: 'BetterRamon.org | Community Portal for Ramon, Isabela',
    description: 'Empowering the people of Ramon with transparent access to services.',
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/assets/images/logo/ramon-favicon.svg',
    apple: '/assets/images/logo/ramon-favicon.svg',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'BetterRamon',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/accessibility.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
      </head>
      <body>
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <HotlineBar />
          <Header />
          <InfoBar />
          <main id="main-content">{children}</main>
          <Footer />
          <PWAManager />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
