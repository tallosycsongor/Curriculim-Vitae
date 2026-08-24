'use client';

import { Activity, CircleAlert, Route, RotateCcw, ScrollText } from 'lucide-react';
import { useState } from 'react';

const lessons = [
  {
    title: 'Spot the spike',
    label: '01 / PROMETHEUS',
    icon: Activity,
    value: '3.8 s',
    detail: 'p95 http_request_duration_seconds',
    outcome: 'Latency spike found',
  },
  {
    title: 'Follow the request',
    label: '02 / TRACE',
    icon: Route,
    value: '2.6 s',
    detail: 'POST /checkout -> payment-service',
    outcome: 'Bottleneck located',
  },
  {
    title: 'Find the culprit',
    label: '03 / LOG',
    icon: ScrollText,
    value: 'timeout',
    detail: 'payment provider deadline exceeded',
    outcome: 'Root cause confirmed',
  },
];

export function ObservabilityGame() {
  const [step, setStep] = useState(-1);
  const activeLesson = step >= 0 ? lessons[step] : null;
  const nextStep = step + 1;

  return (
    <aside className="architecture observability-game" aria-label="Interaktív observability oktatójáték">
      <div className="arch-label"><span>INCIDENT MISSION / CHECKOUT</span><span>{step === 2 ? 'RECOVERED' : step < 0 ? 'ON CALL' : 'IN PROGRESS'}</span></div>
      <div className="game-brief">
        <CircleAlert size={18} />
        <div><b>Restore checkout</b><span>The queue is growing. Find the signal, follow the request, catch the culprit.</span></div>
        <strong>{Math.max(step + 1, 0)} / 3</strong>
      </div>
      <div className="game-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="game-steps">
        {lessons.map((lesson, index) => {
          const Icon = lesson.icon;
          const available = index === nextStep;
          const completed = index <= step;
          return <button className={`game-step ${completed ? 'is-complete' : ''} ${available ? 'is-next' : ''}`} disabled={!available && !completed} key={lesson.title} onClick={() => setStep(index)}>
            <Icon size={18} /><span><small>{lesson.label}</small><b>{lesson.title}</b><em>{completed ? 'Signal captured' : available ? 'Make your move' : 'Locked'}</em></span><strong>{completed ? 'OK' : String(index + 1).padStart(2, '0')}</strong>
          </button>;
        })}
      </div>
      <div className={`game-explanation ${activeLesson ? 'is-visible' : ''}`} aria-live="polite">
        {activeLesson ? <><div><small>{activeLesson.label}</small><strong>{activeLesson.value}</strong><code>{activeLesson.detail}</code></div><p className="game-outcome">{activeLesson.outcome}</p>{step === 2 && <div className="game-solution"><small>MISSION COMPLETE</small><strong>Checkout route recovered</strong><span>+300 incident points</span></div>}</> : <div className="game-idle"><small>YOUR MOVE</small><strong>Open the first signal</strong><span>Three clues. One fast recovery.</span></div>}
      </div>
      <div className="game-footer"><span>{step === 2 ? 'STATUS / CUSTOMER CHECKOUT STABLE' : 'SIGNAL -> REQUEST -> CAUSE'}</span>{step === 2 && <button onClick={() => setStep(-1)} aria-label="Restart mission"><RotateCcw size={15} /></button>}</div>
    </aside>
  );
}