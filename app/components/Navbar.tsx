'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '../LocaleProvider';

const links = [['Experience', 'experience'], ['Projects', 'projects'], ['Skills', 'skills'], ['Lab', 'lab'], ['Education', 'education'], ['Hobbies', 'hobbies'], ['Services', 'services'], ['Contact', 'contact']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const labels = [t('experience'), t('projectsNav'), t('skillsNav'), t('labNav'), t('educationNav'), t('hobbiesNav'), t('servicesNav'), t('contactNav')];
  return <header className="navbar"><a className="brand" href="#top" onClick={() => setOpen(false)}><span className="brand-mark">CT</span><span>Csongor Tallósy</span></a><button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button><nav className={open ? 'nav-links is-open' : 'nav-links'}>{links.map(([, href], index) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)}>{labels[index]}</a>)}<div className="language-switcher" aria-label="Language selection">{(['en', 'hu', 'de'] as const).map((option) => <button className={locale === option ? 'language-active' : ''} key={option} onClick={() => setLocale(option)}>{option.toUpperCase()}</button>)}</div><a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>{t('letsTalk')} <span>↗</span></a></nav></header>;
}
