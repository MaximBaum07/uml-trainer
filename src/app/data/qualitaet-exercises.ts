import { UebungsSet } from '../models/app.models';

export const QS_UEBUNGEN: UebungsSet[] = [
  {
    themaId: 'qs-testverfahren',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was prüft ein Black-Box-Test?',
        optionen: [
          'Den internen Aufbau des Codes',
          'Das Verhalten gegen die Spezifikation, ohne Code zu kennen',
          'Die Laufzeit des Algorithmus',
          'Die Einhaltung von Namenskonventionen'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Black-Box: Eingabe → Ausgabe. Der Tester braucht die Spec, nicht den Code.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Teststufen ihrem Prüfgegenstand zu.',
        paare: [
          { begriff: 'Unit-Test', definition: 'Einzelne Methode/Klasse' },
          { begriff: 'Integrationstest', definition: 'Zusammenspiel mehrerer Module' },
          { begriff: 'Systemtest', definition: 'Gesamtsystem gegen Spezifikation' },
          { begriff: 'Abnahmetest', definition: 'Gesamtsystem gegen Kundenanforderung' }
        ],
        erklaerung: 'Die Stufen entsprechen dem rechten Ast im V-Modell.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welcher Test wird nach Code-Änderungen wiederholt, um Nebenwirkungen zu finden?',
        optionen: ['Lasttest', 'Regressionstest', 'Smoke-Test', 'Unit-Test'],
        korrekteAntwort: 1,
        erklaerung: 'Regressionstest = bereits laufende Tests nach Änderung erneut ausführen, um Verschlechterungen zu finden.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Ein White-Box-Test testet ohne Kenntnis des Quellcodes.',
        korrekt: false,
        erklaerung: 'White-Box nutzt den Quellcode – z.B. für Branch-Coverage. Black-Box ist ohne Code.'
      },
      {
        typ: 'freitext',
        frage: 'Nenne drei nicht-funktionale Tests mit kurzer Beschreibung.',
        musterloesung: `1. Lasttest: System unter erwarteter Nutzungs-Last testen (z.B. 1000 gleichzeitige Nutzer).
2. Stresstest: Last über Spezifikation hinaus bis zum Versagen.
3. Usability-Test: Benutzerfreundlichkeit aus Nutzersicht prüfen.
Weitere Möglichkeiten: Sicherheitstest, Performancetest, Kompatibilitätstest.`,
        erklaerung: 'Nicht-funktionale Tests prüfen Qualitätsmerkmale (Performance, Sicherheit, Usability) statt Fachlichkeit.',
        stichwoerter: ['Lasttest', 'Stresstest', 'Usability']
      }
    ]
  },
  {
    themaId: 'qs-testfaelle',
    uebungen: [
      {
        typ: 'freitext',
        frage: 'Eine Methode akzeptiert ein Alter als Integer im Bereich 18–67 (gültig). Bilde die Äquivalenzklassen und gib die Grenzwerte an.',
        musterloesung: `Äquivalenzklassen:
- Gültig: 18 <= alter <= 67
- Ungültig zu klein: alter < 18
- Ungültig zu groß: alter > 67

Grenzwerte:
- 17 (ungültig, Grenze unten)
- 18 (gültig, Grenze unten)
- 67 (gültig, Grenze oben)
- 68 (ungültig, Grenze oben)

Testfälle (Minimum): 17, 18, 67, 68 + ein Wert aus dem Inneren (z.B. 40).`,
        erklaerung: 'Klassisches AP2-Muster. Immer daran denken: 1 gültige Klasse + 2 ungültige Klassen + 4 Grenzwerte.',
        stichwoerter: ['Äquivalenz', 'Grenzwert', '17', '18', '67', '68']
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie viele Testfälle ergeben sich aus einer Entscheidungstabelle mit 3 unabhängigen binären Bedingungen maximal?',
        optionen: ['3', '6', '8', '9'],
        korrekteAntwort: 2,
        erklaerung: '2³ = 8 Kombinationen. Einige können ggf. zusammengefasst werden, wenn die Aktion gleich ist.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Bei Äquivalenzklassenbildung genügt ein Testfall pro Klasse.',
        korrekt: true,
        erklaerung: 'Das ist gerade der Sinn: Klassen gruppieren Inputs mit gleichem Systemverhalten, daher reicht ein repräsentativer Wert.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die _______-Analyse prüft die Ränder gültiger/ungültiger Bereiche, weil dort die meisten Fehler auftreten.',
        antwort: 'Grenzwert',
        erklaerung: 'Grenzwertanalyse ist eine Black-Box-Technik und ergänzt die Äquivalenzklassenbildung.'
      },
      {
        typ: 'freitext',
        frage: 'Erstelle eine Entscheidungstabelle für: Kunde erhält 10% Rabatt wenn Stammkunde UND Bestellwert > 50€, 5% wenn nur Bestellwert > 50€, sonst 0%.',
        musterloesung: `| Bedingung        | TF1 | TF2 | TF3 | TF4 |
|------------------|-----|-----|-----|-----|
| Stammkunde       |  J  |  J  |  N  |  N  |
| Wert > 50€       |  J  |  N  |  J  |  N  |
|------------------|-----|-----|-----|-----|
| Aktion: Rabatt   | 10% |  0% |  5% |  0% |

TF1: 10% (beide Bedingungen erfüllt)
TF2: 0% (Stammkunde, aber zu wenig Wert)
TF3: 5% (kein Stammkunde, aber > 50€)
TF4: 0% (keine Bedingung erfüllt)`,
        erklaerung: '4 Testfälle (2² Bedingungen). Spalten = Testfälle, oben die Bedingungen, unten die Aktion.',
        stichwoerter: ['Stammkunde', 'Bestellwert', 'Rabatt', 'TF']
      }
    ]
  },
  {
    themaId: 'qs-review',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche Review-Art ist die formalste mit fest definierten Rollen?',
        optionen: ['Walkthrough', 'Inspektion', 'Pair Programming', 'Smoke-Test'],
        korrekteAntwort: 1,
        erklaerung: 'Die Inspektion hat Rollen (Moderator, Autor, Leser, Protokollant) und findet erfahrungsgemäß die meisten Defekte.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Coverage-Maße ihrer Bedeutung zu.',
        paare: [
          { begriff: 'Statement Coverage (C0)', definition: 'Anteil der ausgeführten Anweisungen' },
          { begriff: 'Branch Coverage (C1)', definition: 'Anteil der ausgeführten Zweige (Ja/Nein)' },
          { begriff: 'Path Coverage (C2)', definition: 'Anteil der ausgeführten Pfade' }
        ],
        erklaerung: 'Branch Coverage ist in der Praxis der Industriestandard. Path Coverage wird schnell unpraktisch.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wofür steht "DRY" im Clean Code?',
        optionen: [
          'Don\'t Repeat Yourself',
          'Design Review Yield',
          'Document, Refactor, Yield',
          'Dynamic Refactoring Yet'
        ],
        korrekteAntwort: 0,
        erklaerung: 'DRY: Wiederholungen vermeiden. Bekannte Geschwister: KISS (Keep It Simple) und YAGNI (You Aren\'t Gonna Need It).'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Statische Code-Analyse ersetzt manuelle Code-Reviews vollständig.',
        korrekt: false,
        erklaerung: 'Statische Analyse findet Muster-Probleme, aber kein fachliches Verständnis und kein Design-Feedback. Sie ergänzt Reviews, ersetzt sie nicht.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die zyklomatische Komplexität nach _______ misst die Anzahl unabhängiger Pfade in einer Funktion.',
        antwort: 'McCabe',
        erklaerung: 'Werte > 10 sind Warnzeichen. Berechnung: 1 + Anzahl der binären Verzweigungen.'
      }
    ]
  }
];
