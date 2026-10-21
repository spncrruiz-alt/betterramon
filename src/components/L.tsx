'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Shows the content for the selected language; falls back to English.
export default function L({ en, fil, ilo }: { en: ReactNode; fil?: ReactNode; ilo?: ReactNode }) {
  const { language } = useLanguage();
  return <>{(language === 'fil' && fil) || (language === 'ilo' && ilo) || en}</>;
}

export function Tbv() {
  return <L en="To be verified" fil="Hindi pa beripikado" ilo="Saan pay a naberipika" />;
}
