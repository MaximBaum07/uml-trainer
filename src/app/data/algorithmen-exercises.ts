import { UebungsSet } from '../models/app.models';

export const ALGO_UEBUNGEN: UebungsSet[] = [
  {
    themaId: 'algo-grundlagen',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welches Element gehört NICHT zu den drei Grundstrukturen strukturierter Programmierung?',
        optionen: ['Sequenz', 'Verzweigung', 'Schleife', 'GOTO'],
        korrekteAntwort: 3,
        erklaerung: 'Die drei Grundstrukturen sind Sequenz, Verzweigung (Selektion) und Schleife (Iteration). GOTO widerspricht dem Prinzip.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die PAP-Symbole (DIN 66001) ihrer Bedeutung zu.',
        paare: [
          { begriff: 'Oval', definition: 'Start / Ende' },
          { begriff: 'Rechteck', definition: 'Verarbeitung' },
          { begriff: 'Raute', definition: 'Verzweigung (Entscheidung)' },
          { begriff: 'Parallelogramm', definition: 'Ein- oder Ausgabe' }
        ],
        erklaerung: 'PAP-Standard nach DIN 66001. Pfeile verbinden die Elemente in Leserichtung.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Ein Struktogramm kann ein GOTO enthalten.',
        korrekt: false,
        erklaerung: 'Struktogramme (Nassi-Shneiderman) erzwingen strukturierte Programmierung – kein GOTO möglich.'
      },
      {
        typ: 'freitext',
        frage: 'Schreibe in Pseudocode eine Funktion summiere(liste: Integer[]): Integer, die alle Elemente aufsummiert.',
        musterloesung: `FUNKTION summiere(liste: Integer[]): Integer
  summe: Integer := 0
  FUER i VON 0 BIS länge(liste)-1 TUE
    summe := summe + liste[i]
  ENDE FUER
  RUECKGABE summe
ENDE FUNKTION`,
        erklaerung: 'Akkumulator-Muster: Startwert 0, in der Schleife aufaddieren. Randfall leere Liste → Rückgabe 0 passt automatisch.',
        stichwoerter: ['FUNKTION', 'FUER', 'RUECKGABE', 'summe']
      },
      {
        typ: 'freitext',
        frage: 'Pseudocode-Funktion zaehleNegative(zahlen: Integer[]): Integer, die die Anzahl der negativen Werte zurückgibt.',
        musterloesung: `FUNKTION zaehleNegative(zahlen: Integer[]): Integer
  anzahl: Integer := 0
  FUER jede z IN zahlen TUE
    WENN z < 0 DANN
      anzahl := anzahl + 1
    ENDE WENN
  ENDE FUER
  RUECKGABE anzahl
ENDE FUNKTION`,
        erklaerung: 'Zähler-Muster mit Bedingung. Alternativ mit Index-Schleife. Wichtig: Rückgabetyp Integer, explizite Null-Initialisierung.',
        stichwoerter: ['FUNKTION', 'WENN', 'anzahl']
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Schleife ist fußgesteuert (prüft Bedingung nach dem Durchlauf)?',
        optionen: ['WHILE', 'FOR', 'DO-WHILE (wiederhole … solange)', 'FOR EACH'],
        korrekteAntwort: 2,
        erklaerung: 'DO-WHILE / WIEDERHOLE-BIS läuft mindestens einmal. WHILE und FOR prüfen am Anfang.'
      }
    ]
  },
  {
    themaId: 'algo-sortieren',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche Komplexität hat Bubble Sort im Worst-Case?',
        optionen: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
        korrekteAntwort: 2,
        erklaerung: 'Zwei verschachtelte Schleifen über n Elemente → O(n²). Best-Case mit Optimierung: O(n).'
      },
      {
        typ: 'freitext',
        frage: 'Schreibe Bubble Sort in Pseudocode für ein Integer-Array a[].',
        musterloesung: `FUNKTION bubbleSort(a: Integer[])
  n := länge(a)
  FUER i VON 0 BIS n-1 TUE
    FUER j VON 0 BIS n-2-i TUE
      WENN a[j] > a[j+1] DANN
        tausche(a[j], a[j+1])
      ENDE WENN
    ENDE FUER
  ENDE FUER
ENDE FUNKTION`,
        erklaerung: 'Innere Schleife läuft in jedem Durchgang um 1 kürzer, weil das letzte Element bereits sortiert ist. Das spart ca. die Hälfte der Vergleiche.',
        stichwoerter: ['FUER', 'tausche', 'a[j]', 'a[j+1]']
      },
      {
        typ: 'freitext',
        frage: 'Mache Bubble Sort generisch: schreibe ihn so, dass eine Vergleichsfunktion vergleiche(x, y) übergeben wird (Rückgabe >0 wenn x>y).',
        musterloesung: `FUNKTION sortiere(a: T[], vergleiche: Function)
  n := länge(a)
  FUER i VON 0 BIS n-1 TUE
    FUER j VON 0 BIS n-2-i TUE
      WENN vergleiche(a[j], a[j+1]) > 0 DANN
        tausche(a[j], a[j+1])
      ENDE WENN
    ENDE FUER
  ENDE FUER
ENDE FUNKTION`,
        erklaerung: 'Generische Sortierung ist ein wiederkehrendes AP2-Muster. Statt direktem Vergleich wird eine Funktion aufgerufen – funktioniert dann für beliebige Typen.',
        stichwoerter: ['vergleiche', 'Function', 'tausche']
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Selection Sort ist ein stabiles Sortierverfahren.',
        korrekt: false,
        erklaerung: 'Selection Sort ist instabil, weil das Minimum mit einem beliebigen Element getauscht wird und die relative Reihenfolge gleicher Elemente geändert werden kann.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Verfahren hat GARANTIERT (auch Worst-Case) O(n log n)?',
        optionen: ['Bubble Sort', 'Quicksort', 'Merge Sort', 'Insertion Sort'],
        korrekteAntwort: 2,
        erklaerung: 'Merge Sort ist immer O(n log n). Quicksort ist nur im Average O(n log n), im Worst-Case O(n²).'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Sortieralgorithmen ihrer typischen Komplexität zu.',
        paare: [
          { begriff: 'Bubble Sort', definition: 'O(n²) – einfach, nicht für große Datenmengen' },
          { begriff: 'Merge Sort', definition: 'O(n log n) – stabil, benötigt Extra-Speicher' },
          { begriff: 'Quicksort', definition: 'O(n log n) avg, O(n²) worst – in-place' },
          { begriff: 'Insertion Sort', definition: 'O(n²), aber O(n) bei fast sortiert' }
        ],
        erklaerung: 'In der Praxis wird Quicksort am häufigsten eingesetzt, Merge Sort dort wo Stabilität und Worst-Case-Garantie wichtig sind.'
      }
    ]
  },
  {
    themaId: 'algo-suchen',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche Voraussetzung hat die binäre Suche?',
        optionen: [
          'Array muss sortiert sein',
          'Array darf nur Zahlen enthalten',
          'Array muss gerade Länge haben',
          'Keine Voraussetzung'
        ],
        korrekteAntwort: 0,
        erklaerung: 'Ohne Sortierung funktioniert die Halbierungsstrategie nicht. Auf unsortierten Daten muss man lineare Suche verwenden (oder erst sortieren).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Bei 1 Million sortierter Einträge – wie viele Vergleiche braucht die binäre Suche im Worst-Case?',
        optionen: ['ca. 10', 'ca. 20', 'ca. 1.000', 'ca. 500.000'],
        korrekteAntwort: 1,
        erklaerung: 'log₂(1.000.000) ≈ 20. Das ist einer der Hauptgründe warum binäre Suche so mächtig ist.'
      },
      {
        typ: 'freitext',
        frage: 'Schreibe binäre Suche in Pseudocode. Rückgabe: Index oder -1 wenn nicht gefunden.',
        musterloesung: `FUNKTION binaereSuche(a: Integer[], ziel: Integer): Integer
  links := 0
  rechts := länge(a) - 1
  SOLANGE links <= rechts TUE
    mitte := (links + rechts) DIV 2
    WENN a[mitte] == ziel DANN
      RUECKGABE mitte
    SONST WENN a[mitte] < ziel DANN
      links := mitte + 1
    SONST
      rechts := mitte - 1
    ENDE WENN
  ENDE SOLANGE
  RUECKGABE -1
ENDE FUNKTION`,
        erklaerung: 'Abbruch bei links > rechts (Intervall leer). DIV ist die Ganzzahldivision (abrunden). Klassische Falle: <= vergessen → last element wird nicht geprüft.',
        stichwoerter: ['SOLANGE', 'mitte', 'links', 'rechts', 'DIV']
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Lineare Suche ist auf großen Datenmengen schneller als binäre Suche.',
        korrekt: false,
        erklaerung: 'Bei großen Daten ist binäre Suche viel schneller (O(log n) vs O(n)). Lineare Suche ist nur bei sehr kleinen oder unsortierten Arrays sinnvoll.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die binäre Suche hat eine Laufzeitkomplexität von O(_______).',
        antwort: 'log n',
        erklaerung: 'Genauer: O(log₂ n), aber Basen werden in der O-Notation weggelassen.'
      }
    ]
  },
  {
    themaId: 'algo-komplexitaet',
    uebungen: [
      {
        typ: 'zuordnung',
        frage: 'Ordne die Komplexitätsklassen ihren Namen zu.',
        paare: [
          { begriff: 'O(1)', definition: 'konstant' },
          { begriff: 'O(log n)', definition: 'logarithmisch' },
          { begriff: 'O(n)', definition: 'linear' },
          { begriff: 'O(n log n)', definition: 'linearithmisch' },
          { begriff: 'O(n²)', definition: 'quadratisch' },
          { begriff: 'O(2ⁿ)', definition: 'exponentiell' }
        ],
        erklaerung: 'Wachstumsreihenfolge von langsam zu schnell: 1 < log n < n < n log n < n² < 2ⁿ.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist die Komplexität von zwei verschachtelten Schleifen, die je über n Elemente laufen?',
        optionen: ['O(n)', 'O(2n)', 'O(n²)', 'O(log n)'],
        korrekteAntwort: 2,
        erklaerung: 'Innere Schleife läuft n-mal pro äußerer Iteration – insgesamt n · n = n² Operationen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welcher der folgenden Algorithmen ist am schnellsten für große n?',
        optionen: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
        korrekteAntwort: 3,
        erklaerung: 'log n wächst am langsamsten. Für n=1 Mio: log n ≈ 20, n = 1M, n log n = 20M, n² = 10¹² – riesiger Unterschied.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'O(3n² + 100n + 50) = O(n²).',
        korrekt: true,
        erklaerung: 'Konstanten und niedrigere Terme werden weggelassen. Für große n dominiert der höchste Term.'
      },
      {
        typ: 'freitext',
        frage: 'Gegeben folgender Pseudocode. Gib die Komplexität in O-Notation an und begründe.\n\nFUER i VON 0 BIS n-1 TUE\n  FUER j VON i+1 BIS n-1 TUE\n    verarbeite(a[i], a[j])\n  ENDE FUER\nENDE FUER',
        musterloesung: `O(n²)

Begründung: Die äußere Schleife läuft n-mal. Die innere Schleife
läuft durchschnittlich n/2-mal (von i+1 bis n). Zusammen:
n · n/2 = n²/2 Operationen.
Konstante 1/2 wird weggelassen → O(n²).

Hinweis: Das Muster (alle Paare) taucht z.B. bei Bubble Sort
oder beim Vergleich jedes Elements mit jedem auf.`,
        erklaerung: 'Auch wenn die innere Schleife nicht voll durchläuft – sobald beide Schleifen von n abhängen, ist es O(n²).',
        stichwoerter: ['O(n²)', 'quadratisch', 'Schleife']
      }
    ]
  }
];
