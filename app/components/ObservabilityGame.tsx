'use client';

import { Activity, CircleAlert, Route, RotateCcw, ScrollText } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '../LocaleProvider';
import type { Locale } from '../i18n';

const gameCopy = {
  en: { incident: 'INCIDENT MISSION / CHECKOUT', onCall: 'ON CALL', inProgress: 'IN PROGRESS', recovered: 'RECOVERED', restore: 'Restore checkout', brief: 'The queue is growing. Find the signal, follow the request, catch the culprit.', metric: 'Spot the spike', trace: 'Follow the request', log: 'Find the culprit', captured: 'Signal captured', move: 'Make your move', locked: 'Locked', metricOutcome: 'Latency spike found', traceOutcome: 'Bottleneck located', logOutcome: 'Root cause confirmed', evidence: 'LIVE EVIDENCE', timeline: 'REQUEST TIMELINE', idleLabel: 'YOUR MOVE', idleTitle: 'Open the first signal', idleText: 'Three clues. One fast recovery.', complete: 'MISSION COMPLETE', routeRecovered: 'Checkout route recovered', points: '+300 incident points', stable: 'STATUS / CUSTOMER CHECKOUT STABLE', flow: 'SIGNAL -> REQUEST -> CAUSE', restart: 'Restart mission', chartTitle: 'p95 latency / checkout-api', lastMinutes: 'LAST 15 MINUTES', recovery: 'RECOVERY', anomaly: 'ANOMALY', fallback: 'fallback active', provider: 'payment provider', success: 'success', sloRestored: 'SLO restored', sloBreached: 'SLO breached', requestRate: 'REQUEST RATE', errorRate: 'ERROR RATE', sloTarget: 'SLO TARGET', event: 'EVENT', providerLabel: 'PROVIDER' },
  hu: { incident: 'INCIDENS KULDETÉS / CHECKOUT', onCall: 'UGYELETBEN', inProgress: 'FOLYAMATBAN', recovered: 'HELYREÁLLT', restore: 'Checkout helyreállítása', brief: 'Nő a várakozási sor. Találd meg a jelet, kövesd a kérést, kapd el az okot.', metric: 'Vedd észre a kiugrást', trace: 'Kövesd a kérést', log: 'Találd meg az okot', captured: 'Jel rögzítve', move: 'Te jössz', locked: 'Zárolva', metricOutcome: 'Válaszidő-kiugrás megtalálva', traceOutcome: 'Szűk keresztmetszet lokalizálva', logOutcome: 'Gyökérok megerősítve', evidence: 'ÉLŐ BIZONYÍTÉK', timeline: 'KÉRÉS IDŐVONAL', idleLabel: 'TE KÖVETKEZEL', idleTitle: 'Nyisd meg az első jelet', idleText: 'Három nyom. Egy gyors helyreállítás.', complete: 'KÜLDETÉS TELJESÍTVE', routeRecovered: 'Checkout útvonal helyreállt', points: '+300 incidenspont', stable: 'ÁLLAPOT / STABIL CHECKOUT', flow: 'JEL -> KÉRÉS -> OK', restart: 'Küldetés újraindítása', chartTitle: 'p95 késleltetés / checkout-api', lastMinutes: 'UTOLSÓ 15 PERC', recovery: 'HELYREÁLLÁS', anomaly: 'ANOMÁLIA', fallback: 'fallback aktív', provider: 'payment provider', success: 'sikeres', sloRestored: 'SLO helyreállt', sloBreached: 'SLO sérült', requestRate: 'KÉRÉSI RÁTA', errorRate: 'HIBARÁTA', sloTarget: 'SLO CÉL', event: 'ESEMÉNY', providerLabel: 'PROVIDER' },
  de: { incident: 'INCIDENT MISSION / CHECKOUT', onCall: 'BEREITSCHAFT', inProgress: 'IN ARBEIT', recovered: 'WIEDERHERGESTELLT', restore: 'Checkout wiederherstellen', brief: 'Die Warteschlange wächst. Finde das Signal, verfolge die Anfrage, entdecke die Ursache.', metric: 'Spitze erkennen', trace: 'Anfrage verfolgen', log: 'Verursacher finden', captured: 'Signal erfasst', move: 'Dein Zug', locked: 'Gesperrt', metricOutcome: 'Latenzspitze gefunden', traceOutcome: 'Engpass lokalisiert', logOutcome: 'Ursache bestätigt', evidence: 'LIVE-NACHWEIS', timeline: 'ANFRAGE-ZEITLINIE', idleLabel: 'DEIN ZUG', idleTitle: 'Öffne das erste Signal', idleText: 'Drei Hinweise. Eine schnelle Wiederherstellung.', complete: 'MISSION ERFÜLLT', routeRecovered: 'Checkout-Route wiederhergestellt', points: '+300 Incident-Punkte', stable: 'STATUS / CHECKOUT STABIL', flow: 'SIGNAL -> ANFRAGE -> URSACHE', restart: 'Mission neu starten', chartTitle: 'p95 Latenz / checkout-api', lastMinutes: 'LETZTE 15 MINUTEN', recovery: 'WIEDERHERSTELLUNG', anomaly: 'ANOMALIE', fallback: 'Fallback aktiv', provider: 'Payment Provider', success: 'Erfolg', sloRestored: 'SLO wiederhergestellt', sloBreached: 'SLO verletzt', requestRate: 'ANFRAGERATE', errorRate: 'FEHLERRATE', sloTarget: 'SLO-ZIEL', event: 'EREIGNIS', providerLabel: 'PROVIDER' },
} satisfies Record<Locale, Record<string, string>>;

type GameCopy = typeof gameCopy.en;

function createLessons(copy: GameCopy) { return [
  {
    title: copy.metric,
    label: '01 / PROMETHEUS',
    icon: Activity,
    value: '3.8 s',
    detail: 'p95 http_request_duration_seconds',
    outcome: copy.metricOutcome,
    evidence: [[copy.requestRate, '1,284 rpm'], [copy.errorRate, '4.2%'], [copy.sloTarget, '< 2.0 s']],
  },
  {
    title: copy.trace,
    label: '02 / TRACE',
    icon: Route,
    value: '2.6 s',
    detail: 'POST /checkout -> payment-service',
    outcome: copy.traceOutcome,
    evidence: [['gateway', '120 ms'], ['checkout-api', '180 ms'], ['payment-service', '2.6 s']],
  },
  {
    title: copy.log,
    label: '03 / LOG',
    icon: ScrollText,
    value: 'timeout',
    detail: 'payment provider deadline exceeded',
    outcome: copy.logOutcome,
    evidence: [[copy.event, 'DEADLINE_EXCEEDED'], ['TRACE ID', '7f3a-8cd2-e114'], [copy.providerLabel, 'payment-eu-01']],
  },
]; }

export function ObservabilityGame() {
  const [step, setStep] = useState(-1);
  const { locale } = useLocale();
  const copy = gameCopy[locale];
  const lessons = createLessons(copy);
  const activeLesson = step >= 0 ? lessons[step] : null;
  const nextStep = step + 1;

  return (
    <aside className="architecture observability-game" aria-label="Interaktív observability oktatójáték">
      <div className="arch-label"><span>{copy.incident}</span><span>{step === 2 ? copy.recovered : step < 0 ? copy.onCall : copy.inProgress}</span></div>
      <div className="game-brief">
        <CircleAlert size={18} />
        <div><b>{copy.restore}</b><span>{copy.brief}</span></div>
        <strong>{Math.max(step + 1, 0)} / 3</strong>
      </div>
      <GrafanaChart recovered={step === 2} copy={copy} />
      <div className="game-steps">
        {lessons.map((lesson, index) => {
          const Icon = lesson.icon;
          const available = index === nextStep;
          const completed = index <= step;
          return <button className={`game-step ${completed ? 'is-complete' : ''} ${available ? 'is-next' : ''}`} disabled={!available && !completed} key={lesson.title} onClick={() => setStep(index)}>
            <Icon size={18} /><span><small>{lesson.label}</small><b>{lesson.title}</b><em>{completed ? copy.captured : available ? copy.move : copy.locked}</em></span><strong>{completed ? 'OK' : String(index + 1).padStart(2, '0')}</strong>
          </button>;
        })}
      </div>
      <div className={`game-explanation ${activeLesson ? 'is-visible' : ''}`} aria-live="polite">
        {activeLesson ? <><div><small>{activeLesson.label}</small><strong>{activeLesson.value}</strong><code>{activeLesson.detail}</code></div><p className="game-outcome">{activeLesson.outcome}</p><div className={`game-evidence evidence-step-${step}`}><small>{step === 1 ? copy.timeline : copy.evidence}</small><div>{activeLesson.evidence.map(([label, value]) => <span key={label}><i /><b>{label}</b><strong>{value}</strong></span>)}</div></div>{step === 2 && <div className="game-solution"><small>{copy.complete}</small><strong>{copy.routeRecovered}</strong><span>{copy.points}</span></div>}</> : <div className="game-idle"><small>{copy.idleLabel}</small><strong>{copy.idleTitle}</strong><span>{copy.idleText}</span></div>}
      </div>
      <div className="game-footer"><span>{step === 2 ? copy.stable : copy.flow}</span>{step === 2 && <button onClick={() => setStep(-1)} aria-label={copy.restart}><RotateCcw size={15} /></button>}</div>
    </aside>
  );
}

function GrafanaChart({ recovered, copy }: { recovered: boolean; copy: GameCopy }) {
  return <section className={`grafana-chart ${recovered ? 'is-recovered' : ''}`} aria-label="Grafana latency chart">
    <header><span><i /> {copy.chartTitle}</span><small>{copy.lastMinutes}</small></header>
    <div className="grafana-plot">
      <svg viewBox="0 0 560 170" preserveAspectRatio="none" role="img" aria-label={recovered ? 'Latency returned below the service level objective' : 'Latency exceeds the service level objective'}>
        <g className="grafana-grid"><path d="M0 34H560M0 85H560M0 136H560M112 0V170M224 0V170M336 0V170M448 0V170" /></g>
        <path className="grafana-threshold" d="M0 57H560" />
        <path className="grafana-area" d={recovered ? 'M0 138 L0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 28 323 61 S369 142 401 121 S450 83 480 106 S528 122 560 130 L560 170 L0 170 Z' : 'M0 138 L0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 18 323 42 S369 130 401 108 S450 38 480 61 S528 109 560 89 L560 170 L0 170 Z'} />
        <path className="grafana-line" d={recovered ? 'M0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 28 323 61 S369 142 401 121 S450 83 480 106 S528 122 560 130' : 'M0 123 C35 113 57 129 87 118 S139 92 166 109 S215 125 243 91 S292 18 323 42 S369 130 401 108 S450 38 480 61 S528 109 560 89'} />
        <circle className="grafana-point" cx="307" cy={recovered ? '37' : '20'} r="5" />
      </svg>
      <div className="grafana-y-label top">4.0s</div><div className="grafana-y-label slo">SLO 2.0s</div><div className="grafana-y-label bottom">0ms</div>
      <div className="grafana-annotation"><b>{recovered ? copy.recovery : copy.anomaly}</b><span>{recovered ? copy.fallback : copy.provider}</span></div>
    </div>
    <footer><span><b>{recovered ? '1.1s' : '3.8s'}</b> p95</span><span><b>{recovered ? '99.95%' : '98.2%'}</b> {copy.success}</span><span className={recovered ? 'chart-good' : 'chart-alert'}>{recovered ? copy.sloRestored : copy.sloBreached}</span></footer>
  </section>;
}