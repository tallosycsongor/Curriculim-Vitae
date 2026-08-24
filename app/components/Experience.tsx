'use client';

import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '../LocaleProvider';

export function Experience() { const { t } = useLocale(); return <section className="content-section section-shell" id="experience"><SectionHeading index="01" eyebrow={t('experience')} title={t('operationsContext')} intro={t('experienceIntro')} /><div className="timeline"><div className="timeline-marker"><BriefcaseBusiness size={18} /></div><div className="timeline-content"><div className="timeline-top"><div><h3>Deutsche Telekom TSI Hungary</h3><p className="role">{t('role')}</p></div><span className="date">2022 — Present</span></div><p>{t('operating')}</p><div className="tag-list"><span>{t('enterprise')}</span><span>Kubernetes</span><span>CI/CD</span><span>Monitoring & observability</span><span>Linux</span><span>Incident troubleshooting</span><span>Cross-team collaboration</span></div><a className="text-link" href="#projects">{t('seeProjects')} <ArrowUpRight size={16} /></a></div></div></section>; }
