import { TheorieInhalt } from '../models/app.models';

export const QS_THEORIE: TheorieInhalt[] = [
  {
    themaId: 'qs-testverfahren',
    titel: 'Testverfahren',
    einleitung: 'Qualitätssicherung ist in fast jeder AP2-Prüfung enthalten. Die Kernfrage: Welche Testart wird wann eingesetzt? Der Unterschied Black-Box vs White-Box und die Testpyramide sollten sitzen.',
    abschnitte: [
      {
        titel: 'Black-Box vs White-Box',
        inhalt: `
          <p><strong>Black-Box-Test:</strong> Interne Struktur ist unbekannt. Getestet wird nur Input → Output gegen die Spezifikation.</p>
          <ul>
            <li>Perspektive des Nutzers / der Fachlichkeit</li>
            <li>Verfahren: Äquivalenzklassen, Grenzwertanalyse, Entscheidungstabelle</li>
          </ul>
          <p><strong>White-Box-Test (Glass-Box):</strong> Quellcode wird berücksichtigt. Ziel: alle Pfade, Zweige, Anweisungen abdecken.</p>
          <ul>
            <li>Perspektive des Entwicklers</li>
            <li>Verfahren: Statement-/Branch-/Path-Coverage</li>
          </ul>
          <p><strong>Grey-Box:</strong> Mischung – grobe Kenntnis der Struktur, aber Test auf Verhalten.</p>
        `
      },
      {
        titel: 'Teststufen (V-Modell)',
        inhalt: `
          <table style="border-collapse: collapse; width: 100%;">
            <thead><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">Stufe</th><th style="border:1px solid #cbd5e1; padding:6px;">Testet</th><th style="border:1px solid #cbd5e1; padding:6px;">Wer</th></tr></thead>
            <tbody>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;">Unit-Test</td><td style="border:1px solid #cbd5e1; padding:6px;">Einzelne Klasse/Methode</td><td style="border:1px solid #cbd5e1; padding:6px;">Entwickler</td></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;">Integrationstest</td><td style="border:1px solid #cbd5e1; padding:6px;">Zusammenspiel mehrerer Module</td><td style="border:1px solid #cbd5e1; padding:6px;">Entwickler/QA</td></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;">Systemtest</td><td style="border:1px solid #cbd5e1; padding:6px;">Gesamtes System gegen Spezifikation</td><td style="border:1px solid #cbd5e1; padding:6px;">QA</td></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;">Abnahmetest</td><td style="border:1px solid #cbd5e1; padding:6px;">System gegen Kundenanforderung</td><td style="border:1px solid #cbd5e1; padding:6px;">Kunde</td></tr>
            </tbody>
          </table>
        `
      },
      {
        titel: 'Weitere Testarten',
        inhalt: `
          <ul>
            <li><strong>Regressionstest:</strong> Nach Änderungen prüfen, dass bestehende Funktionen noch laufen (alte Tests erneut ausführen).</li>
            <li><strong>Smoke-Test:</strong> Schnelle Grundfunktions-Prüfung ("brennt nichts?").</li>
            <li><strong>Lasttest / Stresstest:</strong> Nicht-funktionale Tests: Performance unter Last bzw. bis zum Versagen.</li>
            <li><strong>Usability-Test:</strong> Bedienbarkeit aus Nutzersicht.</li>
            <li><strong>Sicherheitstest / Penetrationstest:</strong> Finden von Schwachstellen.</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Unterschied Verifikation („Bauen wir das Produkt richtig?") vs Validierung („Bauen wir das richtige Produkt?") kennen.',
      'Regressionstest wird OFT abgefragt – Stichwort automatisierte Tests nach Refactoring.',
      'V-Modell-Pendants: Anforderungen ↔ Abnahmetest, Grobdesign ↔ Systemtest, Feindesign ↔ Integrationstest, Code ↔ Unit-Test.',
      'Nicht-funktionale Anforderungen werden meist in Last-, Performance- oder Usability-Tests geprüft.'
    ]
  },
  {
    themaId: 'qs-testfaelle',
    titel: 'Testfallermittlung',
    einleitung: 'Für AP2 besonders wichtig: Äquivalenzklassenbildung und Grenzwertanalyse. Hier werden systematisch Testfälle aus den Anforderungen abgeleitet, statt nur „irgendwas" zu testen.',
    abschnitte: [
      {
        titel: 'Äquivalenzklassenbildung',
        inhalt: `
          <p>Idee: Teile den Eingabebereich in Klassen, bei denen das System sich gleich verhält. Ein Test pro Klasse reicht.</p>
          <p>Beispiel: Alter (Integer, 0–120):</p>
          <ul>
            <li><strong>Gültige Klasse:</strong> 0–120</li>
            <li><strong>Ungültig zu klein:</strong> &lt; 0</li>
            <li><strong>Ungültig zu groß:</strong> &gt; 120</li>
            <li><strong>Ungültig Typ:</strong> z.B. "abc" (wenn Parsing erlaubt ist)</li>
          </ul>
          <p>Pro Klasse ein Testfall. Mehr bringen bei gleicher Systemreaktion keinen Mehrwert.</p>
        `
      },
      {
        titel: 'Grenzwertanalyse',
        inhalt: `
          <p>Erfahrungsgemäß passieren Fehler an den Rändern. Daher testet man zusätzlich zur Äquivalenzklasse noch die Grenzwerte.</p>
          <p>Für Alter 0–120 sind die relevanten Grenzwerte:</p>
          <ul>
            <li>-1 (Grenze ungültig), 0 (Grenze gültig unten)</li>
            <li>120 (Grenze gültig oben), 121 (Grenze ungültig oben)</li>
          </ul>
          <p>In Summe: 4 Grenzwert-Tests pro Intervall. Kombiniert mit Äquivalenzklassen-Mitte erhält man eine systematische Testbasis.</p>
        `
      },
      {
        titel: 'Entscheidungstabelle',
        inhalt: `
          <p>Für komplexe Kombinationen von Bedingungen. Beispiel Rabatt-Regel:</p>
          <table style="border-collapse: collapse;">
            <thead><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">Bedingung</th><th style="border:1px solid #cbd5e1; padding:6px;">TF1</th><th style="border:1px solid #cbd5e1; padding:6px;">TF2</th><th style="border:1px solid #cbd5e1; padding:6px;">TF3</th><th style="border:1px solid #cbd5e1; padding:6px;">TF4</th></tr></thead>
            <tbody>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;">Stammkunde?</td><td style="border:1px solid #cbd5e1; padding:6px;">J</td><td style="border:1px solid #cbd5e1; padding:6px;">J</td><td style="border:1px solid #cbd5e1; padding:6px;">N</td><td style="border:1px solid #cbd5e1; padding:6px;">N</td></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;">Bestellwert > 100€?</td><td style="border:1px solid #cbd5e1; padding:6px;">J</td><td style="border:1px solid #cbd5e1; padding:6px;">N</td><td style="border:1px solid #cbd5e1; padding:6px;">J</td><td style="border:1px solid #cbd5e1; padding:6px;">N</td></tr>
              <tr><td style="border:1px solid #cbd5e1; padding:6px;"><strong>Rabatt</strong></td><td style="border:1px solid #cbd5e1; padding:6px;">10%</td><td style="border:1px solid #cbd5e1; padding:6px;">5%</td><td style="border:1px solid #cbd5e1; padding:6px;">3%</td><td style="border:1px solid #cbd5e1; padding:6px;">0%</td></tr>
            </tbody>
          </table>
          <p>Für n binäre Bedingungen ergeben sich maximal 2ⁿ Kombinationen. Testfälle entsprechen den Spalten.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Prüfungsaufgabe „Gib Äquivalenzklassen an" → immer mindestens 1 gültige + 2 ungültige Klassen.',
      'Grenzwertanalyse: Bei Intervall [a, b] immer a-1, a, b, b+1 testen.',
      'Entscheidungstabelle: Spalten = Testfälle. Gleiche Aktionen können zusammengefasst werden ("−" für egal).',
      'Kombinatorische Explosion: Bei vielen Bedingungen pairwise testing verwenden statt alle 2ⁿ.'
    ]
  },
  {
    themaId: 'qs-review',
    titel: 'Code-Reviews & Metriken',
    einleitung: 'Reviews ergänzen dynamische Tests: Sie finden Fehler, die zur Laufzeit schwer reproduzierbar sind, und verbessern die Codequalität. Metriken geben objektive Maße für Codequalität.',
    abschnitte: [
      {
        titel: 'Review-Arten',
        inhalt: `
          <ul>
            <li><strong>Walkthrough:</strong> Autor führt informell durch den Code.</li>
            <li><strong>Inspektion:</strong> Formal, mit Rollen (Moderator, Autor, Leser, Protokollant). Findet die meisten Defekte.</li>
            <li><strong>Pair Programming:</strong> Zwei Entwickler am Rechner, kontinuierliches Review.</li>
            <li><strong>Pull-Request-Review:</strong> Schriftlich in Tool (GitHub, GitLab). Heute Standard.</li>
            <li><strong>Static Code Analysis:</strong> Automatisch durch Tools (SonarQube, ESLint). Nicht ersetzend, aber ergänzend.</li>
          </ul>
        `
      },
      {
        titel: 'Code-Coverage',
        inhalt: `
          <p>Maße für Testabdeckung auf Codeebene:</p>
          <ul>
            <li><strong>Statement Coverage (C0):</strong> Anteil der ausgeführten Anweisungen.</li>
            <li><strong>Branch Coverage (C1):</strong> Anteil der ausgeführten Verzweigungszweige (Ja/Nein).</li>
            <li><strong>Path Coverage (C2):</strong> Anteil der möglichen Pfade. Schnell unpraktisch wegen Kombinatorik.</li>
          </ul>
          <p>Faustregel Industrie: Branch-Coverage ≥ 80% ist guter Wert. 100% ist theoretisch möglich, aber Aufwand &gt; Nutzen.</p>
        `
      },
      {
        titel: 'Weitere Metriken & Prinzipien',
        inhalt: `
          <ul>
            <li><strong>Zyklomatische Komplexität (McCabe):</strong> Zahl der unabhängigen Pfade in einer Funktion. &gt; 10 ist Warnzeichen.</li>
            <li><strong>Lines of Code (LOC):</strong> Grobes Maß für Umfang, sagt wenig über Qualität.</li>
            <li><strong>DRY</strong> – Don't Repeat Yourself.</li>
            <li><strong>KISS</strong> – Keep It Simple, Stupid.</li>
            <li><strong>YAGNI</strong> – You Aren't Gonna Need It.</li>
            <li><strong>SOLID</strong> – 5 OO-Designprinzipien (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion).</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Review-Arten vs. Testarten abgrenzen: Reviews sind statisch (Code wird gelesen), Tests sind dynamisch (Code wird ausgeführt).',
      'Branch-Coverage wird häufiger abgefragt als Path-Coverage.',
      'SOLID-Prinzipien in der OOP-Frage gerne mal einordnen können.',
      'Bei „Maßnahme zur Qualitätssicherung": Code-Review, Unit-Tests, CI-Pipeline sind sichere Antworten.'
    ]
  }
];
