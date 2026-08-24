'use client';

import { createContext, useContext, useState } from 'react';
import type { Locale } from './i18n';
import { translate } from './i18n';

const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void; t: (key: Parameters<typeof translate>[1]) => string } | null>(null);

export function LocaleProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [locale, setLocale] = useState<Locale>('en');
  return <LocaleContext.Provider value={{ locale, setLocale, t: (key) => translate(locale, key) }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside LocaleProvider');
  return context;
}
