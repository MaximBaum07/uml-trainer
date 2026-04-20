import { Themenbereich } from '../models/app.models';

/**
 * Top-Level Themenbereiche des AP2-Trainers.
 * `kategorie: 'fachlich'` = Teil 1/2 der AP2 (fachlicher Teil)
 * `kategorie: 'wiso'`     = WiSo-Teil (Wirtschafts- und Sozialkunde)
 */
export const THEMENBEREICHE: Themenbereich[] = [
  {
    id: 'uml',
    name: 'UML-Diagramme',
    beschreibung: 'Klassen-, Anwendungsfall-, Sequenz-, Aktivitäts- und Zustandsdiagramme',
    icon: 'pi pi-sitemap',
    farbe: '#3B82F6',
    kategorie: 'fachlich',
    themenIds: [
      'uml-klassendiagramm',
      'uml-anwendungsfall',
      'uml-sequenzdiagramm',
      'uml-aktivitaetsdiagramm',
      'uml-zustandsdiagramm'
    ]
  },
  {
    id: 'sql',
    name: 'Datenbanken & SQL',
    beschreibung: 'ER-Modell, Normalisierung, SELECT/JOIN/GROUP BY, DDL/DML',
    icon: 'pi pi-database',
    farbe: '#10B981',
    kategorie: 'fachlich',
    themenIds: [
      'sql-grundlagen',
      'sql-joins',
      'sql-aggregation',
      'sql-ddl',
      'sql-er-modell',
      'sql-normalisierung'
    ]
  },
  {
    id: 'netzwerk',
    name: 'Netzwerke',
    beschreibung: 'OSI-Modell, TCP/IP, Subnetting, Ports, DNS, HTTP/HTTPS',
    icon: 'pi pi-wifi',
    farbe: '#F59E0B',
    kategorie: 'fachlich',
    themenIds: [
      'netz-osi',
      'netz-tcpip',
      'netz-subnetting',
      'netz-protokolle'
    ]
  },
  {
    id: 'it-sicherheit',
    name: 'IT-Sicherheit',
    beschreibung: 'Kryptographie, Hashing, TLS, Angriffsarten, Schutzziele',
    icon: 'pi pi-shield',
    farbe: '#EF4444',
    kategorie: 'fachlich',
    themenIds: [
      'sec-grundlagen',
      'sec-kryptographie',
      'sec-angriffe',
      'sec-dsgvo'
    ]
  },
  {
    id: 'algorithmen',
    name: 'Algorithmen',
    beschreibung: 'Pseudocode, Struktogramme, Sortier-/Suchverfahren, O-Notation',
    icon: 'pi pi-code',
    farbe: '#8B5CF6',
    kategorie: 'fachlich',
    themenIds: [
      'algo-grundlagen',
      'algo-sortieren',
      'algo-suchen',
      'algo-komplexitaet'
    ]
  },
  {
    id: 'projektmanagement',
    name: 'Projektmanagement',
    beschreibung: 'Vorgehensmodelle, Lastenheft/Pflichtenheft, Aufwandsschätzung, agile Methoden',
    icon: 'pi pi-briefcase',
    farbe: '#06B6D4',
    kategorie: 'fachlich',
    themenIds: [
      'pm-vorgehensmodelle',
      'pm-lastenheft',
      'pm-aufwand',
      'pm-agil'
    ]
  },
  {
    id: 'qualitaetssicherung',
    name: 'Qualitätssicherung',
    beschreibung: 'Testverfahren, Testfälle, Äquivalenzklassen, Code-Reviews',
    icon: 'pi pi-check-square',
    farbe: '#EC4899',
    kategorie: 'fachlich',
    themenIds: [
      'qs-testverfahren',
      'qs-testfaelle',
      'qs-review'
    ]
  },
  // ---------------- WiSo ----------------
  {
    id: 'wiso',
    name: 'WiSo',
    beschreibung: 'Wirtschafts- und Sozialkunde: Arbeitsrecht, Sozialversicherung, Wirtschaftsordnung',
    icon: 'pi pi-building',
    farbe: '#64748B',
    kategorie: 'wiso',
    themenIds: [
      'wiso-berufsausbildung',
      'wiso-arbeitsrecht',
      'wiso-sozialversicherung',
      'wiso-tarif-mitbestimmung',
      'wiso-wirtschaftsordnung',
      'wiso-rechtsformen',
      'wiso-betrieb',
      'wiso-politik-konjunktur',
      'wiso-steuern',
      'wiso-nachhaltigkeit'
    ]
  }
];

export function getBereich(id: string): Themenbereich | undefined {
  return THEMENBEREICHE.find(b => b.id === id);
}
