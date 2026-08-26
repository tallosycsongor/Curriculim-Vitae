'use client';

import { Box, Database, GitBranch, Network, Activity, ShieldCheck } from 'lucide-react';
import { getSkillGroups } from '../data';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '../LocaleProvider';

const icons = { box: Box, git: GitBranch, pulse: Activity, network: Network, database: Database, shield: ShieldCheck };
export function Skills() { const { locale, t } = useLocale(); return <section className="content-section section-shell" id="skills"><SectionHeading index="03" eyebrow={t('technology')} title={t('toolsSignal')} intro={t('practicalStack')} /><div className="skills-grid">{getSkillGroups(locale).map((group) => { const Icon = icons[group.icon as keyof typeof icons]; return <article className="skill-card" key={group.label}><Icon size={19} strokeWidth={1.6} /><h3>{group.label}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>; })}</div></section>; }

