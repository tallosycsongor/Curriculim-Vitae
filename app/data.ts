import type { Locale } from './i18n';

export const profile = {
  name: 'Csongor Tallósy',
  role: 'DevOps / Cloud-Native Engineer & Application Administrator',
  email: 'tallosy.csongor@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tallosycsongor/',
  github: '',
};

const languageNames: Record<Locale, [string, string]> = {
  en: ['English', 'German'],
  hu: ['Angol', 'Német'],
  de: ['Englisch', 'Deutsch'],
};
const languageLevel: Record<Locale, string> = { en: 'Intermediate', hu: 'Középfok', de: 'Mittelstufe' };
export function getLanguages(locale: Locale) {
  return languageNames[locale].map((name) => ({ name, level: languageLevel[locale] }));
}

const hobbiesByLocale: Record<Locale, { title: string; text: string }[]> = {
  en: [
    { title: 'Music & synthesis', text: 'Exploring sound and small ideas with an MPK mini synthesizer.' },
    { title: 'Brewing', text: 'Learning through the process, from recipe to a well-timed result.' },
    { title: 'Running', text: 'A simple way to stay consistent, clear-headed and moving forward.' },
    { title: 'Organic gardening', text: 'Growing food in my own garden and learning from the seasons.' },
  ],
  hu: [
    { title: 'Zene és szintézis', text: 'Hangokkal és apró ötletekkel kísérletezem egy MPK mini szintetizátoron.' },
    { title: 'Sörfőzés', text: 'Tanulás a folyamaton keresztül, a recepttől a jól időzített eredményig.' },
    { title: 'Futás', text: 'Egyszerű módja annak, hogy kitartó, tiszta fejű maradjak és haladjak előre.' },
    { title: 'Biokertészkedés', text: 'Zöldségtermesztés a saját kertemben, tanulás az évszakokból.' },
  ],
  de: [
    { title: 'Musik & Synthese', text: 'Klänge und kleine Ideen mit einem MPK-Mini-Synthesizer erkunden.' },
    { title: 'Bierbrauen', text: 'Lernen durch den Prozess, vom Rezept bis zum richtig getimten Ergebnis.' },
    { title: 'Laufen', text: 'Eine einfache Art, konsequent, klar im Kopf zu bleiben und voranzukommen.' },
    { title: 'Bio-Gärtnern', text: 'Lebensmittel im eigenen Garten anbauen und von den Jahreszeiten lernen.' },
  ],
};
export function getHobbies(locale: Locale) {
  return hobbiesByLocale[locale];
}

const skillLabels: Record<Locale, string[]> = {
  en: ['Containers', 'Delivery', 'Observability', 'Networking', 'Data & middleware', 'Security & systems'],
  hu: ['Konténerek', 'Delivery', 'Observability', 'Hálózat', 'Adat és middleware', 'Biztonság és rendszerek'],
  de: ['Container', 'Delivery', 'Observability', 'Netzwerk', 'Daten & Middleware', 'Sicherheit & Systeme'],
};
const skillIcons = ['box', 'git', 'pulse', 'network', 'database', 'shield'] as const;
const skillItems = [
  ['Kubernetes', 'kubectl', 'k9s', 'OpenLens', 'Helm', 'Gardener', 'Kyma', 'Docker concepts', 'Deployments', 'Ingress', 'Resource management'],
  ['Argo CD', 'Jenkins', 'Git', 'Deployment pipelines', 'GitOps', 'Release troubleshooting'],
  ['Prometheus', 'Grafana', 'Mimir', 'Alertmanager', 'OpenSearch', 'Jaeger', 'OpenTelemetry', 'Fluent Bit'],
  ['Istio', 'mTLS', 'DNS', 'HTTP', 'TCP/IP', 'VPN fundamentals', 'Reverse proxy', 'Load balancing'],
  ['MariaDB', 'MaxScale', 'Redis', 'HAProxy', 'Kafka', 'OpenSearch'],
  ['Keycloak', 'Certificates', 'Secrets', 'Thales HSM', 'SCONE CAS', 'Linux', 'Ubuntu', 'Debian', 'Rocky Linux', 'Bash', 'Windows'],
];
export function getSkillGroups(locale: Locale) {
  return skillLabels[locale].map((label, index) => ({ label, icon: skillIcons[index], items: skillItems[index] }));
}

const projectTechnologies = [
  ['Kubernetes', 'Helm', 'Argo CD', 'Jenkins', 'Istio', 'Prometheus', 'Grafana', 'OpenSearch', 'Jaeger'],
  ['Kubernetes', 'Prometheus', 'Mimir', 'Grafana', 'Alertmanager', 'Istio'],
  ['Linux', 'VPN', 'SSH', 'DNS', 'NAT', 'KMS', 'Object storage'],
];
const projectsByLocale: Record<Locale, { number: string; title: string; type: string; summary: string; details?: string[]; challenge?: string; work?: string; outcome?: string }[]> = {
  en: [
    { number: '01', title: 'Enterprise Kubernetes Application Operations', type: 'Professional experience', summary: 'Operating business applications in Kubernetes environments, with a focus on reliable deployments and practical incident resolution.', details: ['Deployment and configuration checks', 'Pod and application troubleshooting', 'Log, metric and trace analysis', 'Localising application versus infrastructure issues', 'Incident handling and developer support'] },
    { number: '02', title: 'Observability / Monitoring Migration', type: 'Case study', summary: 'Contributing to the modernisation of monitoring for a distributed, cloud-native environment.', challenge: 'A distributed cloud-native environment needed clearer, more actionable observability.', work: 'Managing and improving monitoring rules, metrics, alerting and dashboards across Kubernetes / Kyma workloads.', outcome: 'Better visibility into application health and a more direct path to troubleshooting.' },
    { number: '03', title: 'Secure Linux VM Platform', type: 'Platform / infrastructure', summary: 'A secure infrastructure practice project centred on controlled access, segmented networks and dependable Linux operations.', details: ['Linux virtual machines in isolated network environments', 'VPN access and SSH jump host patterns', 'Default-deny network thinking, NAT and DNS', 'KMS and object storage integration', 'Controlled access for GPU workloads'] },
  ],
  hu: [
    { number: '01', title: 'Enterprise Kubernetes alkalmazásüzemeltetés', type: 'Szakmai tapasztalat', summary: 'Üzleti alkalmazások üzemeltetése Kubernetes környezetekben, megbízható deploymentekre és gyakorlatias incidenskezelésre fókuszálva.', details: ['Deployment és konfiguráció ellenőrzése', 'Pod és alkalmazás hibaelhárítás', 'Log, metrika és trace elemzés', 'Alkalmazás- vs. infrastruktúra-szintű hibák elkülönítése', 'Incidenskezelés és fejlesztői támogatás'] },
    { number: '02', title: 'Observability / monitoring migráció', type: 'Esettanulmány', summary: 'Közreműködés egy elosztott, cloud-native környezet monitoringjának modernizálásában.', challenge: 'Egy elosztott cloud-native környezetnek egyértelműbb, jobban hasznosítható observabilityre volt szüksége.', work: 'Monitoring szabályok, metrikák, riasztások és dashboardok kezelése és fejlesztése Kubernetes / Kyma workloadokon.', outcome: 'Jobb rálátás az alkalmazások állapotára és közvetlenebb út a hibaelhárításhoz.' },
    { number: '03', title: 'Biztonságos Linux VM platform', type: 'Platform / infrastruktúra', summary: 'Biztonságos infrastruktúra gyakorlati projekt, kontrollált hozzáférésre, szegmentált hálózatokra és megbízható Linux üzemeltetésre fókuszálva.', details: ['Linux virtuális gépek izolált hálózati környezetekben', 'VPN hozzáférés és SSH jump host minták', 'Default-deny hálózati szemlélet, NAT és DNS', 'KMS és object storage integráció', 'Kontrollált hozzáférés GPU workloadokhoz'] },
  ],
  de: [
    { number: '01', title: 'Enterprise-Kubernetes-Anwendungsbetrieb', type: 'Berufserfahrung', summary: 'Betrieb von Geschäftsanwendungen in Kubernetes-Umgebungen mit Fokus auf zuverlässige Deployments und praktische Incident-Lösung.', details: ['Prüfung von Deployment und Konfiguration', 'Pod- und Anwendungs-Troubleshooting', 'Log-, Metrik- und Trace-Analyse', 'Abgrenzung von Anwendungs- vs. Infrastrukturproblemen', 'Incident-Handling und Entwickler-Support'] },
    { number: '02', title: 'Observability-/Monitoring-Migration', type: 'Fallstudie', summary: 'Mitwirkung an der Modernisierung des Monitorings für eine verteilte, cloud-native Umgebung.', challenge: 'Eine verteilte cloud-native Umgebung brauchte klarere, handlungsrelevantere Observability.', work: 'Verwaltung und Verbesserung von Monitoring-Regeln, Metriken, Alerting und Dashboards über Kubernetes-/Kyma-Workloads hinweg.', outcome: 'Bessere Sichtbarkeit des Anwendungszustands und ein direkterer Weg zur Fehlerbehebung.' },
    { number: '03', title: 'Sichere Linux-VM-Plattform', type: 'Plattform / Infrastruktur', summary: 'Ein Praxisprojekt für sichere Infrastruktur mit Fokus auf kontrollierten Zugriff, segmentierte Netzwerke und verlässlichen Linux-Betrieb.', details: ['Linux-VMs in isolierten Netzwerkumgebungen', 'VPN-Zugriff und SSH-Jump-Host-Muster', 'Default-Deny-Netzwerkdenken, NAT und DNS', 'KMS- und Object-Storage-Integration', 'Kontrollierter Zugriff für GPU-Workloads'] },
  ],
};
export function getProjects(locale: Locale) {
  return projectsByLocale[locale].map((project, index) => ({ ...project, technologies: projectTechnologies[index] }));
}

const servicesByLocale: Record<Locale, { title: string; text: string }[]> = {
  en: [
    { title: 'IT Infrastructure Assessment', text: 'A practical review of SME infrastructure, network, users, access, backups and basic security risks.' },
    { title: 'Linux / Server Administration', text: 'Installation, configuration, maintenance and troubleshooting for Linux servers.' },
    { title: 'Monitoring', text: 'Prometheus / Grafana based monitoring foundations for systems and applications.' },
    { title: 'Container & Kubernetes Support', text: 'Support for containerised applications and Kubernetes environments.' },
    { title: 'Microsoft 365 / General IT Support', text: 'Hands-on foundational IT support for smaller businesses.' },
    { title: 'Automation', text: 'Turning repetitive IT tasks into reliable, repeatable scripts and workflows.' },
  ],
  hu: [
    { title: 'IT infrastruktúra felmérés', text: 'Kkv-k infrastruktúrájának, hálózatának, felhasználóinak, hozzáféréseinek, mentéseinek és alapvető biztonsági kockázatainak gyakorlati áttekintése.' },
    { title: 'Linux / szerver adminisztráció', text: 'Linux szerverek telepítése, konfigurálása, karbantartása és hibaelhárítása.' },
    { title: 'Monitoring', text: 'Prometheus / Grafana alapú monitoring alapok rendszerekhez és alkalmazásokhoz.' },
    { title: 'Konténer és Kubernetes támogatás', text: 'Konténerizált alkalmazások és Kubernetes környezetek támogatása.' },
    { title: 'Microsoft 365 / általános IT support', text: 'Gyakorlati, alapszintű IT támogatás kisebb vállalkozásoknak.' },
    { title: 'Automatizálás', text: 'Ismétlődő IT feladatok megbízható, ismételhető szkriptekké és folyamatokká alakítása.' },
  ],
  de: [
    { title: 'IT-Infrastruktur-Bewertung', text: 'Eine praktische Überprüfung von KMU-Infrastruktur, Netzwerk, Nutzern, Zugriffen, Backups und grundlegenden Sicherheitsrisiken.' },
    { title: 'Linux- / Serveradministration', text: 'Installation, Konfiguration, Wartung und Fehlerbehebung für Linux-Server.' },
    { title: 'Monitoring', text: 'Prometheus-/Grafana-basierte Monitoring-Grundlagen für Systeme und Anwendungen.' },
    { title: 'Container- & Kubernetes-Support', text: 'Unterstützung für containerisierte Anwendungen und Kubernetes-Umgebungen.' },
    { title: 'Microsoft 365 / Allgemeiner IT-Support', text: 'Praktischer grundlegender IT-Support für kleinere Unternehmen.' },
    { title: 'Automatisierung', text: 'Wiederkehrende IT-Aufgaben in verlässliche, wiederholbare Skripte und Workflows verwandeln.' },
  ],
};
export function getServices(locale: Locale) {
  return servicesByLocale[locale];
}
