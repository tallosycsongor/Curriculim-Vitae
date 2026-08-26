'use client';

import { ArrowUpRight } from 'lucide-react';
import { getProjects } from '../data';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '../LocaleProvider';

export function Projects() { const { locale, t } = useLocale(); return <section className="content-section section-shell" id="projects"><SectionHeading index="02" eyebrow={t('selectedExperience')} title={t('workBehind')} intro={t('anonymised')} /><div className="project-list">{getProjects(locale).map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-meta"><span>{project.type}</span><span className="meta-line" /></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p>{project.challenge && <div className="case-grid"><div><b>{t('challenge')}</b><p>{project.challenge}</p></div><div><b>{t('work')}</b><p>{project.work}</p></div><div><b>{t('outcome')}</b><p>{project.outcome}</p></div></div>}{project.details && <ul className="detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}<div className="tech-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><ArrowUpRight className="project-arrow" size={22} /></article>)}</div></section>; }

