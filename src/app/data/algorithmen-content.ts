import { TheorieInhalt } from '../models/app.models';

export const ALGO_THEORIE: TheorieInhalt[] = [
  {
    themaId: 'algo-grundlagen',
    titel: 'Pseudocode & Struktogramme',
    einleitung: 'Algorithmen werden in der AP2 fast immer in Pseudocode, manchmal als Struktogramm (Nassi-Shneiderman) oder als Programmablaufplan (PAP) erwartet. Pseudocode ist am schnellsten und am wenigsten fehleranfällig – wenn nichts vorgegeben ist, nimm ihn.',
    abschnitte: [
      {
        titel: 'Pseudocode – Konventionen',
        inhalt: `
          <p>Es gibt keinen offiziellen Standard, aber IHK-typisch sind:</p>
          <ul>
            <li><code>BEGINN</code> / <code>ENDE</code> (oder <code>START</code>/<code>STOP</code>)</li>
            <li><code>WENN … DANN … SONST … ENDE WENN</code></li>
            <li><code>FUER i VON 0 BIS n-1 TUE … ENDE FUER</code></li>
            <li><code>SOLANGE bedingung TUE … ENDE SOLANGE</code></li>
            <li>Variablen mit Typ deklarieren: <code>zaehler: Integer := 0</code></li>
            <li>Methodenkopf: <code>FUNKTION name(param: Typ): Rückgabetyp</code></li>
          </ul>
          <p><strong>Tipp:</strong> Formatiere mit Einrückung. Die Prüfer zählen Stil nicht, aber sie können lesen wollen.</p>
        `
      },
      {
        titel: 'Struktogramm (NSD)',
        inhalt: `
          <p>Nassi-Shneiderman-Diagramm – Struktur aus verschachtelten Rechtecken.</p>
          <ul>
            <li><strong>Sequenz:</strong> rechteckige Anweisungen untereinander</li>
            <li><strong>Verzweigung:</strong> Rechteck mit diagonalem Trennstrich, oben die Bedingung, links "ja"/rechts "nein"</li>
            <li><strong>Schleife:</strong> umrandetes Rechteck, Bedingung oben (kopfgesteuert) oder unten (fußgesteuert)</li>
          </ul>
          <p>Struktogramme zwingen zur strukturierten Programmierung – kein GOTO möglich.</p>
        `
      },
      {
        titel: 'Programmablaufplan (PAP)',
        inhalt: `
          <p>Klassisches Flussdiagramm (DIN 66001):</p>
          <ul>
            <li>Oval: <strong>Start / Ende</strong></li>
            <li>Rechteck: <strong>Verarbeitung</strong></li>
            <li>Raute: <strong>Verzweigung</strong> (Ja/Nein)</li>
            <li>Parallelogramm: <strong>Ein-/Ausgabe</strong></li>
            <li>Pfeile verbinden die Elemente</li>
          </ul>
          <p>PAPs sind visuell leicht verständlich, aber bei komplexen Algorithmen schnell unübersichtlich.</p>
        `
      },
      {
        titel: 'Typische Bausteine',
        inhalt: `
          <p><strong>Iteration über Array:</strong></p>
          <pre><code>FUER i VON 0 BIS länge(liste)-1 TUE
  verarbeite(liste[i])
ENDE FUER</code></pre>

          <p><strong>Zähler/Akkumulator:</strong></p>
          <pre><code>summe: Integer := 0
FUER jedes element IN liste TUE
  summe := summe + element
ENDE FUER</code></pre>

          <p><strong>Filter in neue Liste:</strong></p>
          <pre><code>ergebnis: Liste := neue Liste
FUER jedes x IN eingabe TUE
  WENN x > schwelle DANN
    ergebnis.hinzufuegen(x)
  ENDE WENN
ENDE FUER
RUECKGABE ergebnis</code></pre>
        `
      }
    ],
    pruefungsTipps: [
      'Lies die Aufgabe ZWEIMAL. Oft werden Randfälle (leere Liste, ein Element, letzter Index) gewertet.',
      'Variablentypen sichtbar machen – vor allem bei DTO-Rückgaben.',
      'Bei 2D-Arrays: Zeile vs. Spalte explizit klären (<code>feld[zeile][spalte]</code>).',
      'Bei „Wahl frei" (Pseudocode/Struktogramm/PAP): Pseudocode nehmen – schneller, weniger Fehler.'
    ]
  },
  {
    themaId: 'algo-sortieren',
    titel: 'Sortieralgorithmen',
    einleitung: 'In AP2-Prüfungen taucht Sortieren regelmäßig auf – entweder als Implementierung in Pseudocode oder als Analyse (welcher Algorithmus, welche Komplexität?). Bubble-, Selection- und Insertion-Sort musst du kennen; Merge- und Quicksort konzeptionell verstehen.',
    abschnitte: [
      {
        titel: 'Bubble Sort',
        inhalt: `
          <p>Idee: Benachbarte Elemente paarweise vergleichen und tauschen. Nach jedem Durchlauf „blubbert" das größte Element ans Ende.</p>
          <pre><code>FUER i VON 0 BIS n-1 TUE
  FUER j VON 0 BIS n-2-i TUE
    WENN a[j] > a[j+1] DANN
      tausche(a[j], a[j+1])
    ENDE WENN
  ENDE FUER
ENDE FUER</code></pre>
          <p><strong>Komplexität:</strong> O(n²) im Worst- und Average-Case, O(n) im Best-Case (bereits sortiert, mit Flag-Optimierung).</p>
        `
      },
      {
        titel: 'Selection Sort',
        inhalt: `
          <p>Idee: Finde das kleinste Element im unsortierten Bereich und tausche es an die richtige Stelle.</p>
          <pre><code>FUER i VON 0 BIS n-2 TUE
  min := i
  FUER j VON i+1 BIS n-1 TUE
    WENN a[j] < a[min] DANN min := j
  ENDE FUER
  tausche(a[i], a[min])
ENDE FUER</code></pre>
          <p><strong>Komplexität:</strong> O(n²) – immer, auch im Best-Case. Dafür wenige Tausch-Operationen.</p>
        `
      },
      {
        titel: 'Insertion Sort',
        inhalt: `
          <p>Idee: Baue die sortierte Folge Schritt für Schritt auf, indem jedes neue Element an die richtige Stelle einsortiert wird.</p>
          <ul>
            <li>Best-Case: O(n) bei fast sortierten Daten</li>
            <li>Worst-Case: O(n²)</li>
            <li>In der Praxis oft schneller als Bubble Sort für kleine Arrays</li>
          </ul>
        `
      },
      {
        titel: 'Merge Sort & Quicksort (konzeptionell)',
        inhalt: `
          <ul>
            <li><strong>Merge Sort:</strong> Teilen und Herrschen. Array halbieren, rekursiv sortieren, mergen. <em>Immer O(n log n)</em>, aber zusätzlicher Speicher.</li>
            <li><strong>Quicksort:</strong> Pivot wählen, partitionieren (kleiner/größer), rekursiv sortieren. <em>Average O(n log n)</em>, Worst-Case O(n²) bei schlechter Pivotwahl. In-place.</li>
          </ul>
          <p>Quicksort ist in der Praxis meist am schnellsten; Merge Sort ist stabil und hat garantierte O(n log n).</p>
        `
      }
    ],
    pruefungsTipps: [
      'Bubble Sort wird in AP2 am häufigsten abgefragt – auswendig können.',
      'Schreibtischtest vorbereiten: Array [5,2,8,1] durch deinen Algo durchspielen und pro Durchlauf den Zustand aufschreiben.',
      'Wenn generisch gefragt: Function oder Comparator als Parameter übergeben und <code>vergleiche(a,b) > 0</code> statt <code>a > b</code>.',
      'Stabilität: Gleiche Werte behalten ihre relative Reihenfolge? Bubble/Merge/Insertion = stabil. Selection/Quick = instabil.'
    ]
  },
  {
    themaId: 'algo-suchen',
    titel: 'Suchalgorithmen',
    einleitung: 'Zwei Verfahren solltest du sicher beherrschen: lineare Suche (einfach, aber langsam) und binäre Suche (schnell, aber Voraussetzung: sortierte Daten).',
    abschnitte: [
      {
        titel: 'Lineare Suche',
        inhalt: `
          <p>Von vorn nach hinten durchlaufen, bis das gesuchte Element gefunden wird oder das Ende erreicht ist.</p>
          <pre><code>FUNKTION lineareSuche(liste: Integer[], ziel: Integer): Integer
  FUER i VON 0 BIS länge(liste)-1 TUE
    WENN liste[i] == ziel DANN RUECKGABE i
  ENDE FUER
  RUECKGABE -1
ENDE FUNKTION</code></pre>
          <p><strong>Komplexität:</strong> O(n). Funktioniert auf unsortierten Daten.</p>
        `
      },
      {
        titel: 'Binäre Suche',
        inhalt: `
          <p><strong>Voraussetzung:</strong> die Liste muss sortiert sein. Das Suchintervall wird in jedem Schritt halbiert.</p>
          <pre><code>FUNKTION binaereSuche(liste: Integer[], ziel: Integer): Integer
  links := 0
  rechts := länge(liste) - 1
  SOLANGE links <= rechts TUE
    mitte := (links + rechts) DIV 2
    WENN liste[mitte] == ziel DANN RUECKGABE mitte
    SONST WENN liste[mitte] < ziel DANN links := mitte + 1
    SONST rechts := mitte - 1
  ENDE SOLANGE
  RUECKGABE -1
ENDE FUNKTION</code></pre>
          <p><strong>Komplexität:</strong> O(log n). Bei 1 Mio Elementen ~20 Vergleiche (statt 1 Mio bei linearer Suche).</p>
        `
      }
    ],
    pruefungsTipps: [
      'Binäre Suche erfordert IMMER sortierte Daten – in der Prüfung oft übersehen.',
      'Bei rekursiver Variante: Abbruchbedingung <code>links > rechts</code> nicht vergessen.',
      'Overflow vermeiden: <code>mitte = links + (rechts - links) DIV 2</code> statt <code>(links+rechts)/2</code>.',
      'Lineare Suche lohnt sich bei < ~50 Elementen, weil sie cachefreundlicher ist.'
    ]
  },
  {
    themaId: 'algo-komplexitaet',
    titel: 'Komplexität (O-Notation)',
    einleitung: 'Die O-Notation beschreibt, wie sich die Laufzeit eines Algorithmus mit wachsender Eingabegröße n verhält. In der AP2 musst du Algorithmen klassifizieren können und wissen, welche Klasse schneller wächst.',
    abschnitte: [
      {
        titel: 'Die wichtigsten Klassen',
        inhalt: `
          <table style="border-collapse: collapse; width: 100%;">
            <thead>
              <tr style="background: #f1f5f9;">
                <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: left;">Klasse</th>
                <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: left;">Name</th>
                <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: left;">Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="border: 1px solid #cbd5e1; padding: 8px;"><code>O(1)</code></td><td style="border: 1px solid #cbd5e1; padding: 8px;">konstant</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Array-Zugriff per Index</td></tr>
              <tr><td style="border: 1px solid #cbd5e1; padding: 8px;"><code>O(log n)</code></td><td style="border: 1px solid #cbd5e1; padding: 8px;">logarithmisch</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Binäre Suche</td></tr>
              <tr><td style="border: 1px solid #cbd5e1; padding: 8px;"><code>O(n)</code></td><td style="border: 1px solid #cbd5e1; padding: 8px;">linear</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Lineare Suche, Summe</td></tr>
              <tr><td style="border: 1px solid #cbd5e1; padding: 8px;"><code>O(n log n)</code></td><td style="border: 1px solid #cbd5e1; padding: 8px;">linearithmisch</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Merge Sort, Quicksort (avg)</td></tr>
              <tr><td style="border: 1px solid #cbd5e1; padding: 8px;"><code>O(n²)</code></td><td style="border: 1px solid #cbd5e1; padding: 8px;">quadratisch</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Bubble Sort, verschachtelte Schleifen</td></tr>
              <tr><td style="border: 1px solid #cbd5e1; padding: 8px;"><code>O(2ⁿ)</code></td><td style="border: 1px solid #cbd5e1; padding: 8px;">exponentiell</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Naive Rekursion (Fibonacci)</td></tr>
            </tbody>
          </table>
        `
      },
      {
        titel: 'So ermittelst du die Klasse',
        inhalt: `
          <ol>
            <li>Konstanten weglassen: <code>3n + 5</code> → <code>O(n)</code></li>
            <li>Niedrigere Terme weglassen: <code>n² + 100n</code> → <code>O(n²)</code></li>
            <li>Faktoren weglassen: <code>5n²</code> → <code>O(n²)</code></li>
          </ol>
          <p>Faustregeln:</p>
          <ul>
            <li>Eine Schleife über n Elemente → meist O(n)</li>
            <li>Verschachtelte Schleife → O(n²)</li>
            <li>Halbierung bei jedem Schritt → O(log n)</li>
            <li>Rekursion + Halbierung mit linearer Arbeit → O(n log n)</li>
          </ul>
        `
      },
      {
        titel: 'Best/Worst/Average-Case',
        inhalt: `
          <ul>
            <li><strong>Best-Case:</strong> bestmögliche Eingabe (z.B. schon sortiert).</li>
            <li><strong>Worst-Case:</strong> schlechtestmögliche Eingabe. Meist die relevante Größe für Garantien.</li>
            <li><strong>Average-Case:</strong> erwarteter Durchschnitt. Aufwändiger zu berechnen, oft identisch mit Worst.</li>
          </ul>
          <p>Beispiel Bubble Sort: Best O(n) (bereits sortiert + Flag), Average O(n²), Worst O(n²).</p>
        `
      }
    ],
    pruefungsTipps: [
      'Tabelle der Klassen auswendig lernen – kommt sehr oft.',
      'Bei „Welcher ist schneller"-Fragen: log n << n << n log n << n² << 2ⁿ.',
      'Rekursion analysieren: Wie oft wird die Methode aufgerufen? Pro Aufruf wie viel Arbeit?',
      'O(1) ist NICHT „schnell", sondern „unabhängig von n". Eine konstante mit 10s ist langsamer als O(n) mit n=3.'
    ]
  }
];
