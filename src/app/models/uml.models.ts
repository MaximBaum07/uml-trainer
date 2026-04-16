export type DiagramType = 'klassendiagramm' | 'anwendungsfall' | 'sequenzdiagramm' | 'aktivitaetsdiagramm' | 'zustandsdiagramm';

export interface DiagramInfo {
  id: DiagramType;
  name: string;
  beschreibung: string;
  icon: string;
  farbe: string;
}

export interface TheorieAbschnitt {
  titel: string;
  inhalt: string;
  svgDiagramm?: string;
}

export interface TheorieInhalt {
  diagrammTyp: DiagramType;
  titel: string;
  einleitung: string;
  abschnitte: TheorieAbschnitt[];
  pruefungsTipps: string[];
}

export type UebungTyp = 'multiple-choice' | 'wahr-falsch' | 'lueckentext' | 'zuordnung';

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

export type Uebung = MultipleChoiceUebung | WahrFalschUebung | LueckentextUebung | ZuordnungUebung;

export interface UebungsSet {
  diagrammTyp: DiagramType;
  uebungen: Uebung[];
}

export interface QuizErgebnis {
  richtig: number;
  gesamt: number;
  antworten: boolean[];
}

export interface Fortschritt {
  diagrammTyp: DiagramType;
  theorieGelesen: boolean;
  quizErgebnisse: QuizErgebnis[];
  besteNote: number;
}
