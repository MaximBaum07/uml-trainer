import { ThemaInfo } from '../models/app.models';

/**
 * Zentrale Liste aller Themen (Unterbereiche eines Themenbereichs).
 * Jedes Thema hat optional Theorie, Quiz und/oder Karteikarten.
 * Die Flags geben an, was in der App verfügbar ist — die eigentlichen
 * Inhalte liegen in den content/exercises/karteikarten-Datendateien.
 */
export const THEMEN: ThemaInfo[] = [
  // ============== UML ==============
  {
    id: 'uml-klassendiagramm',
    bereichId: 'uml',
    name: 'Klassendiagramm',
    beschreibung: 'Klassen, Attribute, Methoden und Beziehungen modellieren',
    icon: 'pi pi-th-large',
    farbe: '#3B82F6',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'uml-anwendungsfall',
    bereichId: 'uml',
    name: 'Anwendungsfalldiagramm',
    beschreibung: 'Akteure und Use Cases darstellen',
    icon: 'pi pi-users',
    farbe: '#10B981',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'uml-sequenzdiagramm',
    bereichId: 'uml',
    name: 'Sequenzdiagramm',
    beschreibung: 'Zeitliche Abfolge von Nachrichten zwischen Objekten',
    icon: 'pi pi-arrows-v',
    farbe: '#F59E0B',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'uml-aktivitaetsdiagramm',
    bereichId: 'uml',
    name: 'Aktivitätsdiagramm',
    beschreibung: 'Abläufe, Entscheidungen und parallele Prozesse',
    icon: 'pi pi-sitemap',
    farbe: '#EF4444',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'uml-zustandsdiagramm',
    bereichId: 'uml',
    name: 'Zustandsdiagramm',
    beschreibung: 'Zustände eines Objekts und Übergänge',
    icon: 'pi pi-circle',
    farbe: '#8B5CF6',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },

  // ============== SQL ==============
  {
    id: 'sql-grundlagen',
    bereichId: 'sql',
    name: 'SQL-Grundlagen (SELECT)',
    beschreibung: 'SELECT, WHERE, ORDER BY, LIKE, IN, BETWEEN',
    icon: 'pi pi-search',
    farbe: '#10B981',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'sql-joins',
    bereichId: 'sql',
    name: 'JOINs',
    beschreibung: 'INNER, LEFT, RIGHT, FULL JOIN richtig einsetzen',
    icon: 'pi pi-link',
    farbe: '#059669',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'sql-aggregation',
    bereichId: 'sql',
    name: 'GROUP BY & Aggregatfunktionen',
    beschreibung: 'COUNT, SUM, AVG, MIN, MAX, HAVING',
    icon: 'pi pi-chart-bar',
    farbe: '#047857',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'sql-ddl',
    bereichId: 'sql',
    name: 'DDL & DML',
    beschreibung: 'CREATE, ALTER, DROP, INSERT, UPDATE, DELETE',
    icon: 'pi pi-wrench',
    farbe: '#065F46',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'sql-er-modell',
    bereichId: 'sql',
    name: 'ER-Modell',
    beschreibung: 'Entitäten, Beziehungen, Kardinalitäten',
    icon: 'pi pi-share-alt',
    farbe: '#34D399',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'sql-normalisierung',
    bereichId: 'sql',
    name: 'Normalisierung',
    beschreibung: '1., 2. und 3. Normalform',
    icon: 'pi pi-sort',
    farbe: '#6EE7B7',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },

  // ============== Netzwerk ==============
  {
    id: 'netz-osi',
    bereichId: 'netzwerk',
    name: 'OSI-Modell',
    beschreibung: 'Die 7 Schichten und ihre Aufgaben',
    icon: 'pi pi-server',
    farbe: '#F59E0B',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'netz-tcpip',
    bereichId: 'netzwerk',
    name: 'TCP/IP & Protokolle',
    beschreibung: 'TCP vs. UDP, IP, ICMP, Handshake',
    icon: 'pi pi-send',
    farbe: '#D97706',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'netz-subnetting',
    bereichId: 'netzwerk',
    name: 'Subnetting & IP-Adressen',
    beschreibung: 'IPv4/IPv6, Subnetzmaske, CIDR, Broadcast',
    icon: 'pi pi-calculator',
    farbe: '#B45309',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'netz-protokolle',
    bereichId: 'netzwerk',
    name: 'Anwendungsprotokolle',
    beschreibung: 'HTTP/HTTPS, DNS, DHCP, SMTP, SSH, FTP',
    icon: 'pi pi-globe',
    farbe: '#92400E',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },

  // ============== IT-Sicherheit ==============
  {
    id: 'sec-grundlagen',
    bereichId: 'it-sicherheit',
    name: 'Schutzziele & Grundlagen',
    beschreibung: 'Vertraulichkeit, Integrität, Verfügbarkeit',
    icon: 'pi pi-lock',
    farbe: '#EF4444',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'sec-kryptographie',
    bereichId: 'it-sicherheit',
    name: 'Kryptographie',
    beschreibung: 'Symmetrisch, asymmetrisch, Hashing, TLS, Zertifikate',
    icon: 'pi pi-key',
    farbe: '#DC2626',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'sec-angriffe',
    bereichId: 'it-sicherheit',
    name: 'Angriffsarten & Schutzmaßnahmen',
    beschreibung: 'SQL-Injection, XSS, DoS, Phishing, Ransomware',
    icon: 'pi pi-exclamation-triangle',
    farbe: '#B91C1C',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'sec-dsgvo',
    bereichId: 'it-sicherheit',
    name: 'DSGVO & Datenschutz',
    beschreibung: 'Grundprinzipien, Rechte der Betroffenen, TOMs',
    icon: 'pi pi-id-card',
    farbe: '#991B1B',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },

  // ============== Algorithmen ==============
  {
    id: 'algo-grundlagen',
    bereichId: 'algorithmen',
    name: 'Pseudocode & Struktogramme',
    beschreibung: 'Kontrollstrukturen, Schleifen, Verzweigungen',
    icon: 'pi pi-code',
    farbe: '#8B5CF6',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'algo-sortieren',
    bereichId: 'algorithmen',
    name: 'Sortieralgorithmen',
    beschreibung: 'Bubble-, Selection-, Insertion-, Merge-, Quicksort',
    icon: 'pi pi-sort-numeric-down',
    farbe: '#7C3AED',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'algo-suchen',
    bereichId: 'algorithmen',
    name: 'Suchalgorithmen',
    beschreibung: 'Lineare und binäre Suche',
    icon: 'pi pi-search-plus',
    farbe: '#6D28D9',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'algo-komplexitaet',
    bereichId: 'algorithmen',
    name: 'Komplexität (O-Notation)',
    beschreibung: 'Laufzeitanalyse, Best-/Worst-Case',
    icon: 'pi pi-chart-line',
    farbe: '#5B21B6',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },

  // ============== Projektmanagement ==============
  {
    id: 'pm-vorgehensmodelle',
    bereichId: 'projektmanagement',
    name: 'Vorgehensmodelle',
    beschreibung: 'Wasserfall, V-Modell, Scrum, Kanban',
    icon: 'pi pi-list',
    farbe: '#06B6D4',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'pm-lastenheft',
    bereichId: 'projektmanagement',
    name: 'Lastenheft & Pflichtenheft',
    beschreibung: 'Anforderungen dokumentieren: funktional vs. nichtfunktional',
    icon: 'pi pi-file-edit',
    farbe: '#0891B2',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'pm-aufwand',
    bereichId: 'projektmanagement',
    name: 'Aufwandsschätzung & Risiko',
    beschreibung: 'Schätzverfahren, Risikoanalyse, Make-or-Buy',
    icon: 'pi pi-clock',
    farbe: '#0E7490',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'pm-agil',
    bereichId: 'projektmanagement',
    name: 'Agile Methoden (Scrum)',
    beschreibung: 'Rollen, Events, Artefakte im Scrum',
    icon: 'pi pi-sync',
    farbe: '#155E75',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },

  // ============== Qualitätssicherung ==============
  {
    id: 'qs-testverfahren',
    bereichId: 'qualitaetssicherung',
    name: 'Testverfahren',
    beschreibung: 'Black-/White-Box, Unit-, Integrations-, System-, Abnahmetest',
    icon: 'pi pi-check-square',
    farbe: '#EC4899',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'qs-testfaelle',
    bereichId: 'qualitaetssicherung',
    name: 'Testfallermittlung',
    beschreibung: 'Äquivalenzklassen, Grenzwertanalyse, Entscheidungstabellen',
    icon: 'pi pi-table',
    farbe: '#DB2777',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },
  {
    id: 'qs-review',
    bereichId: 'qualitaetssicherung',
    name: 'Code-Reviews & Metriken',
    beschreibung: 'Review-Arten, Coverage, Clean Code',
    icon: 'pi pi-eye',
    farbe: '#BE185D',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: false
  },

  // ============== WiSo ==============
  {
    id: 'wiso-berufsausbildung',
    bereichId: 'wiso',
    name: 'Berufsausbildung',
    beschreibung: 'BBiG, Ausbildungsvertrag, Rechte & Pflichten',
    icon: 'pi pi-graduation-cap',
    farbe: '#64748B',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-arbeitsrecht',
    bereichId: 'wiso',
    name: 'Arbeitsrecht',
    beschreibung: 'Arbeitsvertrag, Kündigung, Urlaub, Arbeitszeit',
    icon: 'pi pi-file',
    farbe: '#475569',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-sozialversicherung',
    bereichId: 'wiso',
    name: 'Sozialversicherung',
    beschreibung: 'Die fünf Säulen der deutschen Sozialversicherung',
    icon: 'pi pi-heart',
    farbe: '#334155',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-tarif-mitbestimmung',
    bereichId: 'wiso',
    name: 'Tarif & Mitbestimmung',
    beschreibung: 'Tarifvertrag, Betriebsrat, Gewerkschaften',
    icon: 'pi pi-users',
    farbe: '#1E293B',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-wirtschaftsordnung',
    bereichId: 'wiso',
    name: 'Wirtschaftsordnung',
    beschreibung: 'Markt, Angebot & Nachfrage, Wirtschaftskreislauf',
    icon: 'pi pi-chart-line',
    farbe: '#0F172A',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-rechtsformen',
    bereichId: 'wiso',
    name: 'Rechtsformen',
    beschreibung: 'GmbH, AG, OHG, KG, GbR, Einzelunternehmen',
    icon: 'pi pi-building',
    farbe: '#64748B',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-betrieb',
    bereichId: 'wiso',
    name: 'Betriebliche Organisation',
    beschreibung: 'Aufbau-/Ablauforganisation, Produktionsfaktoren',
    icon: 'pi pi-sitemap',
    farbe: '#475569',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-politik-konjunktur',
    bereichId: 'wiso',
    name: 'Wirtschaftspolitik & Konjunktur',
    beschreibung: 'Konjunkturzyklus, Inflation, EZB, Magisches Viereck',
    icon: 'pi pi-refresh',
    farbe: '#334155',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-steuern',
    bereichId: 'wiso',
    name: 'Steuern & Abgaben',
    beschreibung: 'Direkte/indirekte Steuern, Steuerarten, Steuerpflicht',
    icon: 'pi pi-euro',
    farbe: '#1E293B',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  },
  {
    id: 'wiso-nachhaltigkeit',
    bereichId: 'wiso',
    name: 'Nachhaltigkeit & EU',
    beschreibung: 'Nachhaltige Entwicklung, Europäische Union, Globalisierung',
    icon: 'pi pi-globe',
    farbe: '#0F172A',
    hatTheorie: true,
    hatQuiz: true,
    hatKarteikarten: true
  }
];

export function getThema(id: string): ThemaInfo | undefined {
  return THEMEN.find(t => t.id === id);
}

export function getThemenFuerBereich(bereichId: string): ThemaInfo[] {
  return THEMEN.filter(t => t.bereichId === bereichId);
}
