'use client';

import { profile } from '../data';
import { useLocale } from '../LocaleProvider';

export function Footer() { const { t } = useLocale(); return <footer className="footer section-shell"><span>© {new Date().getFullYear()} {profile.name}</span><span>{t('footerTagline')}</span><a href="#top">{t('backTop')} ↑</a></footer>; }
