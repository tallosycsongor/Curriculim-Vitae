'use client';

import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';
import { SectionHeading } from './SectionHeading';
import { useLocale } from '../LocaleProvider';

export function Contact() { const { t } = useLocale(); return <section className="contact-section section-shell" id="contact"><SectionHeading index="08" eyebrow={t('contact')} title={t('contactTitle')} intro={t('contactIntro')} /><div className="contact-grid"><a className="contact-card contact-email" href={`mailto:${profile.email}`}><Mail size={21} /><span><small>{t('email')}</small><strong>{profile.email}</strong></span><ArrowUpRight size={19} /></a><a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={21} /><span><small>{t('linkedin')}</small><strong>{t('connect')}</strong></span><ArrowUpRight size={19} /></a><div className="contact-card contact-muted"><Github size={21} /><span><small>{t('github')}</small><strong>{t('repos')}</strong></span></div></div></section>; }
