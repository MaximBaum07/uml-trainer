// Zentrale Datenmodelle für den AP2-Trainer.
// Ein Themenbereich (z.B. "SQL") bündelt mehrere Themen (z.B. "SELECT-Basics", "JOINs").
// Jedes Thema kann Theorie, Quiz-Übungen und/oder Karteikarten enthalten.

export type Kategorie = 'fachlich' | 'wiso' | 'englisch';

export type ThemenbereichId = string;   // z.B. 'uml', 'sql', 'wiso-arbeitsrecht'
export type ThemaId = string;           // z.B. 'uml-klassendiagramm', 'sql-joins'

export interface Themenbereich {
  id: ThemenbereichId;
  name: string;
  beschreibung: string;
  icon: string;
  farbe: string;
  kategorie: Kategorie;
  themenIds: ThemaId[];
}

export interface ThemaInfo {
  id: ThemaId;
  bereichId: ThemenbereichId;
  name: string;
  beschreibung: string;
  icon: string;
  farbe: string;
  hatTheorie: boolean;
  hatQuiz: boolean;
  hatKarteikarten: boolean;
}

// ------- Theorie -------

export interface TheorieAbschnitt {
  titel: string;
  inhalt: string;
  svgDiagramm?: string;
}

export interface TheorieInhalt {
  themaId: ThemaId;
  titel: string;
  einleitung: string;
  abschnitte: TheorieAbschnitt[];
  pruefungsTipps: string[];
}

// ------- Übungstypen -------

export type UebungTyp =
  | 'multiple-choice'
  | 'wahr-falsch'
  | 'lueckentext'
  | 'zuordnung'
  | 'freitext';

export interface MultipleChoiceUebung {
  typ: 'multiple-choice';
  frage: string;
  svgDiagramm?: string;
  optionen: string[];
  korrekteAntwort: number;
  erklaerung: string;
}

export interface WahrFalschUebung {
  typ: 'wahr-falsch';
  aussage: string;
  svgDiagramm?: string;
  korrekt: boolean;
  erklaerung: string;
}

export interface LueckentextUebung {
  typ: 'lueckentext';
  frage: string;
  svgDiagramm?: string;
  antwort: string;
  antworten?: string[];  // for multi-blank questions; overrides antwort if present
  erklaerung: string;
}

export interface ZuordnungPaar {
  begriff: string;
  definition: string;
}

export interface ZuordnungUebung {
  typ: 'zuordnung';
  frage: string;
  paare: ZuordnungPaar[];
  erklaerung: string;
}

// Freitext: User tippt Antwort, vergleicht selbst mit Musterlösung, bewertet sich.
export interface FreitextUebung {
  typ: 'freitext';
  frage: string;
  svgDiagramm?: string;
  musterloesung: string;
  erklaerung: string;
  // Für einfache automatische Plausibilitätsprüfung — Schlüsselwörter die
  // in der Antwort vorkommen sollten. Optional; UI zeigt Self-Assessment-Buttons.
  stichwoerter?: string[];
}

export type Uebung =
  | MultipleChoiceUebung
  | WahrFalschUebung
  | LueckentextUebung
  | ZuordnungUebung
  | FreitextUebung;

export interface UebungsSet {
  themaId: ThemaId;
  uebungen: Uebung[];
}

// ------- Karteikarten (für WiSo & Definitionen) -------

export interface Karteikarte {
  id: string;
  frage: string;
  antwort: string;
  erklaerung?: string;
}

export interface KarteikartenSet {
  themaId: ThemaId;
  karten: Karteikarte[];
}

// ------- Fortschritt -------

export interface QuizErgebnis {
  richtig: number;
  gesamt: number;
  antworten: boolean[];
  zeitstempel?: number;
}

export interface KarteikartenFortschritt {
  // karten-id -> Status: 'gewusst' | 'unsicher' | 'nichtgewusst'
  status: Record<string, 'gewusst' | 'unsicher' | 'nichtgewusst'>;
}

export interface LaufenderVersuch {
  /** Index der Frage, bei der der User aktuell steht (noch nicht beantwortet). */
  aktuelleFrageIndex: number;
  /** Richtig/falsch pro bereits beantworteter Frage (Länge = Anzahl bereits beantwortet). */
  antworten: boolean[];
  /** Anzahl richtig beantworteter Fragen (entspricht Anzahl true in antworten). */
  richtig: number;
  gespeichertAm: number;
}

export interface Fortschritt {
  themaId: ThemaId;
  theorieGelesen: boolean;
  quizErgebnisse: QuizErgebnis[];
  besteNote: number;                  // 0..1
  karteikarten?: KarteikartenFortschritt;
  /** Indizes in uebungen[] die zuletzt falsch beantwortet wurden.
   *  Werden bei späterer richtiger Antwort automatisch wieder entfernt. */
  falscheIndices?: number[];
  /** Vom User explizit gemerkte Fragen. Bleiben bis manuell entfernt. */
  gemerkteIndices?: number[];
  /** Unterbrochener Quiz-Versuch, um ihn später fortzusetzen. */
  laufenderVersuch?: LaufenderVersuch;
}

// ------- Testprüfung -------

export interface ExamAntwortDetail {
  typ: UebungTyp;
  mcGewaehlterText?: string;
  wfGewaehlterWert?: boolean;
  lueckentextEingabe?: string;
  lueckentextEingaben?: string[];  // for multi-blank questions
  zuordnungen?: { begriff: string; definition: string }[];
  freitextEingabe?: string;
}

export interface PruefungsConfig {
  id: string;
  name: string;
  beschreibung: string;
  fragenAnzahl: number;
  zeitlimitMinuten: number;
  icon: string;
  farbe: string;
  kategorie?: Kategorie;
}

export interface PruefungsFrage {
  uebung: Uebung;
  themaId: ThemaId;
  themaName: string;
  bereichName: string;
}

// ------- IHK-Prüfungsbogen (realistische Handlungsschritt-Aufgaben) -------

export interface IhkTeilaufgabe {
  /** Kennung wie 'a', 'b', 'ba', 'bb', 'c' – IHK-Schema */
  id: string;
  punkte: number;
  text: string;
  /** Optionaler Anlagen-Hinweis (z.B. "Siehe Anlage 2"). */
  anlage?: string;
  /** Zeilen für die handschriftliche Antwort (Standard: passend zu Punkten). */
  antwortZeilen?: number;
  /** Optional – Musterlösung, wird im PDF-Bogen NICHT gedruckt. */
  loesungshinweis?: string;
}

export interface IhkAufgabe {
  nummer: number;
  titel: string;
  /** Einleitender Text / Handlungsschritt-Beschreibung. HTML erlaubt. */
  einleitung: string;
  /** Gesamtpunkte dieser Aufgabe (Summe der Teilaufgaben). */
  punkte: number;
  teilaufgaben: IhkTeilaufgabe[];
}

export interface IhkPruefungsBogen {
  /** Zuordnung zu einer PruefungsConfig-ID, z.B. 'ap2-fachaufgabe-1'. */
  configId: string;
  /** Nummer auf der Deckseite: 1 = Teil 1 (Planen), 2 = Teil 2 (Algorithmen), 3 = WiSo. */
  teilNummer: 1 | 2 | 3;
  /** Titel wie "Planen eines Softwareproduktes". */
  titel: string;
  /** Untertitel wie "Teil 2 der Abschlussprüfung". */
  untertitel: string;
  /** Saison-Kennung wie "Sommer 2026". */
  saison: string;
  /** Simulierter Prüfungstermin. */
  termin: string;
  zeitMinuten: number;
  gesamtpunkte: number;
  /** Ausgangssituation / Unternehmenskontext (eingerahmt oben im Aufgabenteil). HTML erlaubt. */
  belegsatz: string;
  aufgaben: IhkAufgabe[];
}

export interface PruefungsErgebnisState {
  configName: string;
  fragen: PruefungsFrage[];
  antwortDetails: (ExamAntwortDetail | null)[];
  richtig: boolean[];
  zeitGebrauchtSek: number;
  zeitlimitSek: number;
}
