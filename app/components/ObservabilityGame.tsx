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
      <GrafanaChart recovered={step === 2} />
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

function GrafanaChart({ recovered }: { recovered: boolean }) {
  return <section className={`grafana-chart ${recovered ? 'is-recovered' : ''}`} aria-label="Grafana latency chart">
    <header><span><i /> p95 latency / checkout-api</span><small>LAST 15 MINUTES</small></header>
    <div className="grafana-plot">
      <svg viewBox="0 0 560 170" preserveAspectRatio="none" role="img" aria-label={recovered ? 'Latency returned below the service level objective' : 'Latency exceeds the service level objective'}>
        <g className="grafana-grid"><path d="M0 34H560M0 85H560M0 136H560M112 0V170M224 0V170M336 0V170M448 0V170" /></g>
        <path className="grafana-threshold" d="M0 57H560" />
        <path className="grafana-area" d={recovered ? 'M0 138 L0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 28 323 61 S369 142 401 121 S450 83 480 106 S528 122 560 130 L560 170 L0 170 Z' : 'M0 138 L0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 18 323 42 S369 130 401 108 S450 38 480 61 S528 109 560 89 L560 170 L0 170 Z'} />
        <path className="grafana-line" d={recovered ? 'M0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 28 323 61 S369 142 401 121 S450 83 480 106 S528 122 560 130' : 'M0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 18 323 42 S369 130 401 108 S450 38 480 61 S528 109 560 89'} />
        <circle className="grafana-point" cx="307" cy={recovered ? '37' : '20'} r="5" />
      </svg>
      <div className="grafana-y-label top">4.0s</div><div className="grafana-y-label slo">SLO 2.0s</div><div className="grafana-y-label bottom">0ms</div>
      <div className="grafana-annotation"><b>{recovered ? 'RECOVERY' : 'ANOMALY'}</b><span>{recovered ? 'fallback active' : 'payment provider'}</span></div>
    </div>
    <footer><span><b>{recovered ? '1.1s' : '3.8s'}</b> p95</span><span><b>{recovered ? '99.95%' : '98.2%'}</b> success</span><span className={recovered ? 'chart-good' : 'chart-alert'}>{recovered ? 'SLO restored' : 'SLO breached'}</span></footer>
  </section>;
}