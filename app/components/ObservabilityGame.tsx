'use client';

import { Activity, CircleAlert, Route, RotateCcw, ScrollText } from 'lucide-react';
import { useState } from 'react';

const lessons = [
  {
    title: 'Prometheus metric',
    label: '01 / DETECT',
    icon: Activity,
    value: '3.8 s',
    detail: 'p95 http_request_duration_seconds',
    explanation: 'A Prometheus metrika jelzi, hogy a 95. percentilis válaszidő megugrott. Tudjuk, hogy baj van, de még nem azt, melyik kérés okozza.',
  },
  {
    title: 'Trace',
    label: '02 / LOCATE',
    icon: Route,
    value: '2.6 s',
    detail: 'POST /checkout -> payment-service',
    explanation: 'A trace egyetlen kérés útját mutatja végig. Itt kiderül, hogy a fizetési szolgáltatásban töltődik el 2.6 másodperc.',
  },
  {
    title: 'Log',
    label: '03 / EXPLAIN',
    icon: ScrollText,
    value: 'timeout',
    detail: 'payment provider deadline exceeded',
    explanation: 'A strukturált log adja meg a konkrét okot: a külső payment provider határidőn túl válaszol. Innen már célzottan javítható az incidens.',
  },
];

export function ObservabilityGame() {
  const [step, setStep] = useState(-1);
  const activeLesson = step >= 0 ? lessons[step] : null;
  const nextStep = step + 1;

  return (
    <aside className="architecture observability-game" aria-label="Interaktív observability oktatójáték">
      <div className="arch-label"><span>INCIDENT LAB / CHECKOUT SLOW</span><span>{step === 2 ? 'RESOLVED' : step < 0 ? 'READY' : 'INVESTIGATING'}</span></div>
      <div className="game-brief">
        <CircleAlert size={18} />
        <div><b>Mission: checkout lassulás</b><span>Derítsd ki az okot a három jel összekapcsolásával.</span></div>
        <strong>{Math.max(step + 1, 0)} / 3</strong>
      </div>
      <div className="game-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="game-steps">
        {lessons.map((lesson, index) => {
          const Icon = lesson.icon;
          const available = index === nextStep;
          const completed = index <= step;
          return <button className={`game-step ${completed ? 'is-complete' : ''} ${available ? 'is-next' : ''}`} disabled={!available && !completed} key={lesson.title} onClick={() => setStep(index)}>
            <Icon size={18} /><span><small>{lesson.label}</small><b>{lesson.title}</b><em>{completed ? 'Megnyitva' : available ? 'Vizsgáld meg' : 'Előbb az előző jelet'}</em></span><strong>{completed ? 'OK' : String(index + 1).padStart(2, '0')}</strong>
          </button>;
        })}
      </div>
      <div className={`game-explanation ${activeLesson ? 'is-visible' : ''}`} aria-live="polite">
        {activeLesson ? <><div><small>{activeLesson.label}</small><strong>{activeLesson.value}</strong><code>{activeLesson.detail}</code></div><p>{activeLesson.explanation}</p></> : <p>Indítsd a vizsgálatot a <b>Prometheus metric</b> jelével.</p>}
      </div>
      <div className="game-footer"><span>{step === 2 ? 'ROOT CAUSE IDENTIFIED / FIX THE PROVIDER INTEGRATION' : 'METRIC -> TRACE -> LOG'}</span>{step === 2 && <button onClick={() => setStep(-1)} aria-label="Játék újraindítása"><RotateCcw size={15} /></button>}</div>
    </aside>
  );
}