import { TheorieInhalt } from '../models/app.models';

export const SQL_THEORIE: TheorieInhalt[] = [
  // ============================================================
  // SQL-GRUNDLAGEN
  // ============================================================
  {
    themaId: 'sql-grundlagen',
    titel: 'SQL-Grundlagen: SELECT, WHERE, ORDER BY',
    einleitung: 'SQL (Structured Query Language) ist die Standardsprache für relationale Datenbanken. In der AP2-Prüfung für Fachinformatiker Anwendungsentwicklung wird in fast jeder Prüfung eine vollständige SQL-Aufgabe (20-30 Punkte) gestellt. Die Grundlage jeder Abfrage bildet das SELECT-Statement mit seinen Filter- und Sortieroptionen. Wer diese Klauseln sicher beherrscht, kann die meisten Teilaufgaben korrekt lösen.',
    abschnitte: [
      {
        titel: 'Aufbau eines SELECT-Statements',
        inhalt: `
          <p>Ein vollständiges <strong>SELECT</strong>-Statement folgt einer festen Reihenfolge der Klauseln. Diese Reihenfolge ist prüfungsrelevant, da sie auch die logische Auswertungsreihenfolge bestimmt:</p>
          <ol>
            <li><code>SELECT</code> &ndash; welche Spalten sollen ausgegeben werden?</li>
            <li><code>FROM</code> &ndash; aus welcher Tabelle?</li>
            <li><code>JOIN ... ON</code> &ndash; mit welchen weiteren Tabellen verknüpft?</li>
            <li><code>WHERE</code> &ndash; welche Zeilen filtern (vor Gruppierung)?</li>
            <li><code>GROUP BY</code> &ndash; wie gruppieren?</li>
            <li><code>HAVING</code> &ndash; Filter auf Gruppen (nach Aggregation)</li>
            <li><code>ORDER BY</code> &ndash; Sortierung</li>
          </ol>
          <p>Merksatz: <strong>SFW-GHO</strong> &ndash; Select, From, Where, Group by, Having, Order by.</p>
          <p>Beispiel:</p>
          <pre><code>SELECT Name, Preis
FROM Artikel
WHERE Kategorie = 'Elektronik'
ORDER BY Preis DESC;</code></pre>
        `
      },
      {
        titel: 'WHERE-Klausel und Operatoren',
        inhalt: `
          <p>Die <code>WHERE</code>-Klausel filtert Zeilen <strong>vor</strong> einer möglichen Gruppierung. Wichtige Operatoren:</p>
          <ul>
            <li><code>=</code>, <code>&lt;&gt;</code> (ungleich), <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code></li>
            <li><code>AND</code>, <code>OR</code>, <code>NOT</code> &ndash; logische Verknüpfungen</li>
            <li><code>BETWEEN a AND b</code> &ndash; Wertebereich, einschliesslich der Grenzen</li>
            <li><code>IN (wert1, wert2, ...)</code> &ndash; Menge erlaubter Werte</li>
            <li><code>LIKE</code> &ndash; Textsuche mit Platzhaltern (<code>%</code> = beliebig viele Zeichen, <code>_</code> = genau ein Zeichen)</li>
            <li><code>IS NULL</code> / <code>IS NOT NULL</code> &ndash; Prüfung auf NULL (NIE mit <code>= NULL</code>!)</li>
          </ul>
          <p>Beispiele aus Prüfungskontext:</p>
          <pre><code>-- Wirkstoff 'Y34', Menge 100 oder 200 (W21 T2)
SELECT * FROM Arzneimittel
WHERE Wirkstoff = 'Y34' AND Menge IN (100, 200);

-- Alle Namen die mit 'M' beginnen
SELECT * FROM Mitarbeiter WHERE Name LIKE 'M%';

-- Datum zwischen zwei Werten
SELECT * FROM Buchung WHERE Datum BETWEEN '2023-06-19' AND '2023-06-30';</code></pre>
        `
      },
      {
        titel: 'ORDER BY und DISTINCT',
        inhalt: `
          <p><code>ORDER BY</code> sortiert das Ergebnis. Standard ist aufsteigend (<code>ASC</code>). Für absteigend muss <code>DESC</code> explizit stehen. Mehrere Spalten werden durch Komma getrennt:</p>
          <pre><code>-- Sortierung mehrspaltig (W21 T2): Menge absteigend, bei Gleichstand Preis aufsteigend
SELECT * FROM Arzneimittel
WHERE Wirkstoff = 'Y34'
ORDER BY Menge DESC, Preis ASC;</code></pre>
          <p><strong>DISTINCT</strong> entfernt Duplikate aus dem Ergebnis. Es bezieht sich auf die gesamte Zeile, nicht nur auf eine Spalte:</p>
          <pre><code>-- Liefert jeden Wirkstoff nur einmal
SELECT DISTINCT Wirkstoff FROM Arzneimittel;</code></pre>
          <p>Achtung: <code>SELECT DISTINCT a, b</code> liefert alle eindeutigen Kombinationen aus a und b.</p>
        `
      },
      {
        titel: 'LIKE mit Platzhaltern',
        inhalt: `
          <p>Der <code>LIKE</code>-Operator sucht nach Textmustern. Zwei Platzhalter sind prüfungsrelevant:</p>
          <ul>
            <li><code>%</code> &ndash; null, ein oder beliebig viele Zeichen</li>
            <li><code>_</code> &ndash; genau ein beliebiges Zeichen</li>
          </ul>
          <p>Beispiele:</p>
          <ul>
            <li><code>LIKE 'M%'</code> &ndash; beginnt mit M (Meier, Müller, M)</li>
            <li><code>LIKE '%er'</code> &ndash; endet auf 'er' (Maier, Schneider)</li>
            <li><code>LIKE '%haus%'</code> &ndash; enthält 'haus' irgendwo</li>
            <li><code>LIKE 'M_ier'</code> &ndash; M, ein beliebiges Zeichen, dann ier (Maier, Meier)</li>
          </ul>
          <p>Soll ein echtes Prozentzeichen gefunden werden, wird es mit <code>ESCAPE</code> maskiert.</p>
        `
      },
      {
        titel: 'NULL-Werte korrekt behandeln',
        inhalt: `
          <p>NULL bedeutet <strong>&bdquo;unbekannt&ldquo;</strong>, nicht 0 und nicht leerer String. Jeder Vergleich mit NULL ergibt wieder NULL (unbekannt), niemals TRUE.</p>
          <ul>
            <li>Falsch: <code>WHERE Datum_Abschluss = NULL</code> &ndash; liefert nie etwas!</li>
            <li>Richtig: <code>WHERE Datum_Abschluss IS NULL</code></li>
            <li>Richtig: <code>WHERE Datum_Abschluss IS NOT NULL</code></li>
          </ul>
          <p>Typische Prüfungsaufgabe (S23 T2): <em>&bdquo;Zähle alle nicht abgeschlossenen Pflegearbeiten in 2023.&ldquo;</em></p>
          <pre><code>SELECT COUNT(*) FROM Pflegearbeit
WHERE YEAR(Datum_Soll) = 2023
  AND Datum_Abschluss IS NULL;</code></pre>
          <p>Aggregatfunktionen wie <code>COUNT(spalte)</code>, <code>SUM</code>, <code>AVG</code> ignorieren NULL-Werte. <code>COUNT(*)</code> dagegen zählt alle Zeilen.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Die Klauselreihenfolge SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY muss immer eingehalten werden — ein falsches Schlüsselwort am falschen Platz kostet Punkte.',
      'Bei Mehrfachsortierung IMMER explizit ASC oder DESC pro Spalte angeben (Prüfungstipp direkt aus der Analyse).',
      'Textvergleiche mit einfachen Anführungszeichen: WHERE Name = \'Meier\', nicht "Meier".',
      'Für Mengen von erlaubten Werten IN(...) statt vieler OR-Verknüpfungen nutzen — kürzer und klarer.',
      'NULL immer mit IS NULL / IS NOT NULL prüfen, niemals mit = oder <>. Das ist ein Klassiker für Punktabzug.'
    ]
  },

  // ============================================================
  // JOINS
  // ============================================================
  {
    themaId: 'sql-joins',
    titel: 'JOINs: Tabellen verknüpfen',
    einleitung: 'JOINs sind in der AP2-Prüfung Pflichtstoff. Fast jede SQL-Aufgabe enthält mindestens einen JOIN, häufig auch mehrere Tabellen oder einen Self-Join. Besonders die Unterscheidung zwischen INNER JOIN und LEFT JOIN ist ein Klassiker — bei Aufgaben wie &bdquo;Liste aller Haushalte mit Anzahl ihrer Zähler, inkl. Haushalten ohne Zähler&ldquo; ist ein LEFT JOIN zwingend erforderlich.',
    abschnitte: [
      {
        titel: 'Was ist ein JOIN?',
        inhalt: `
          <p>Ein <strong>JOIN</strong> verknüpft zwei (oder mehr) Tabellen über eine gemeinsame Spalte &ndash; meist die Fremdschlüssel-Beziehung. Die Verknüpfungsbedingung steht hinter <code>ON</code>:</p>
          <pre><code>SELECT Kunde.Name, Bestellung.Datum
FROM Kunde
JOIN Bestellung ON Kunde.KundenID = Bestellung.Kunde_FK;</code></pre>
          <p>Ohne JOIN-Bedingung entsteht ein <strong>Kreuzprodukt</strong> (Kartesisches Produkt) &ndash; jede Zeile links mit jeder Zeile rechts kombiniert. Das ist fast nie gewollt und ein typischer Prüfungsfehler.</p>
        `
      },
      {
        titel: 'INNER JOIN',
        inhalt: `
          <p>Der <code>INNER JOIN</code> (oder einfach <code>JOIN</code>) liefert nur Zeilen, für die in <strong>beiden</strong> Tabellen ein passender Datensatz existiert. Alle Kunden <em>mit</em> Bestellungen, keine &bdquo;Karteileichen&ldquo;:</p>
          <pre><code>SELECT k.Name, b.BestellNr
FROM Kunde k
INNER JOIN Bestellung b ON k.KundenID = b.Kunde_FK;</code></pre>
          <p>Ein Kunde ohne Bestellung erscheint hier <strong>nicht</strong> im Ergebnis.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">INNER JOIN</text>
          <circle cx="150" cy="110" r="55" fill="#90caf9" fill-opacity="0.5" stroke="#1976d2" stroke-width="2"/>
          <circle cx="220" cy="110" r="55" fill="#ef9a9a" fill-opacity="0.5" stroke="#d32f2f" stroke-width="2"/>
          <path d="M 185,60 A 55 55 0 0 1 185,160 A 55 55 0 0 1 185,60" fill="#7e57c2" fill-opacity="0.7"/>
          <text x="115" y="115" font-size="12" text-anchor="middle">A</text>
          <text x="255" y="115" font-size="12" text-anchor="middle">B</text>
          <text x="185" y="185" font-size="11" text-anchor="middle">nur Schnittmenge</text>
        </svg>`
      },
      {
        titel: 'LEFT JOIN (LEFT OUTER JOIN)',
        inhalt: `
          <p>Der <code>LEFT JOIN</code> liefert <strong>alle</strong> Zeilen der linken Tabelle, auch wenn rechts kein passender Datensatz existiert. Fehlt ein Partner, stehen die rechten Spalten auf NULL.</p>
          <p>Klassischer Prüfungsfall (S22 T2): <em>&bdquo;Liste aller Haushalte mit Anzahl ihrer Zähler, aufsteigend nach Anzahl&ldquo;</em> &ndash; Haushalte ohne Zähler müssen mit 0 erscheinen.</p>
          <pre><code>SELECT h.HH_ID, COUNT(z.Z_ID) AS AnzahlZaehler
FROM Haushalt h
LEFT JOIN Zaehler z ON h.HH_ID = z.Z_HHID
GROUP BY h.HH_ID
ORDER BY AnzahlZaehler ASC;</code></pre>
          <p>Wichtig: <code>COUNT(z.Z_ID)</code> statt <code>COUNT(*)</code> &ndash; bei NULL-Einträgen würde COUNT(*) fälschlicherweise 1 zählen.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">LEFT JOIN</text>
          <circle cx="150" cy="110" r="55" fill="#7e57c2" fill-opacity="0.7" stroke="#1976d2" stroke-width="2"/>
          <circle cx="220" cy="110" r="55" fill="#ef9a9a" fill-opacity="0.5" stroke="#d32f2f" stroke-width="2"/>
          <text x="115" y="115" font-size="12" text-anchor="middle" fill="white">A</text>
          <text x="255" y="115" font-size="12" text-anchor="middle">B</text>
          <text x="200" y="185" font-size="11" text-anchor="middle">alle A + passende B</text>
        </svg>`
      },
      {
        titel: 'RIGHT JOIN und FULL JOIN',
        inhalt: `
          <p>Der <code>RIGHT JOIN</code> ist das Spiegelbild: alle Zeilen der rechten Tabelle erscheinen, auch ohne Partner links. In der Praxis wird er selten verwendet &ndash; jeder RIGHT JOIN lässt sich in einen LEFT JOIN umschreiben, indem die Tabellen getauscht werden.</p>
          <p>Der <code>FULL OUTER JOIN</code> liefert <strong>alle</strong> Zeilen beider Tabellen. Wo kein Partner existiert, werden die Spalten der anderen Seite mit NULL gefüllt. MySQL unterstützt FULL JOIN nicht direkt &ndash; dort wird er über UNION von LEFT und RIGHT JOIN simuliert.</p>
          <pre><code>SELECT * FROM A LEFT JOIN B ON A.id = B.a_id
UNION
SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id;</code></pre>
        `
      },
      {
        titel: 'Self-Join',
        inhalt: `
          <p>Ein <strong>Self-Join</strong> verknüpft eine Tabelle mit sich selbst. Unverzichtbar bei hierarchischen Daten (Mitarbeiter &rarr; Vorgesetzter) oder beim Vergleich zweier Zeilen der gleichen Tabelle.</p>
          <p>Prüfungsbeispiel (S22 T2): Verbrauchsberechnung zwischen zwei Ablesungen &ndash; jede Ablesung muss mit der Vorjahresablesung desselben Zählers verknüpft werden:</p>
          <pre><code>SELECT a.Z_HHID,
       a.Zaehlerstand - b.Zaehlerstand AS Verbrauch
FROM Zaehlerstand a
JOIN Zaehlerstand b ON a.Z_ID = b.Z_ID
WHERE YEAR(a.ZSt_Datum) = 2022
  AND YEAR(b.ZSt_Datum) = 2021;</code></pre>
          <p>Alias-Namen (<code>a</code>, <code>b</code>) sind beim Self-Join zwingend, sonst ist die Spaltenzuordnung mehrdeutig.</p>
        `
      },
      {
        titel: 'ON vs. USING',
        inhalt: `
          <p>Die Verknüpfungsbedingung kann zwei Formen haben:</p>
          <ul>
            <li><code>ON</code>: flexibel, beliebige Ausdrücke, Spaltennamen dürfen unterschiedlich sein.<br><code>JOIN B ON A.KundenID = B.Kunde_FK</code></li>
            <li><code>USING(spalte)</code>: nur möglich, wenn beide Tabellen eine Spalte <em>mit gleichem Namen</em> haben. Die Spalte taucht im Ergebnis nur einmal auf.<br><code>JOIN B USING(KundenID)</code></li>
          </ul>
          <p>In der Prüfung wird fast immer <code>ON</code> verwendet, weil die Fremdschlüssel-Spalten meistens anders benannt sind (z.B. <code>Kunde_FK</code> vs. <code>KundenID</code>).</p>
        `
      }
    ],
    pruefungsTipps: [
      'Signalwort „inklusive Nullwerte/ohne passende Einträge" → LEFT JOIN. Wer hier INNER JOIN schreibt, verliert sichere Punkte.',
      'Bei mehreren JOINs konsequent Tabellen-Aliase vergeben (FROM Kunde k JOIN Bestellung b ...) — verbessert Lesbarkeit und vermeidet Mehrdeutigkeiten.',
      'COUNT(fk_spalte) statt COUNT(*) nutzen, wenn bei LEFT JOIN Zeilen mit NULL nicht mitgezählt werden sollen.',
      'Für Self-Joins unbedingt zwei verschiedene Aliase setzen (a, b) — sonst Syntax- oder Logikfehler.',
      'JOIN-Bedingung gehört nach ON, weitere Filter nach WHERE. Vermischung ist ein häufiger Fehler, vor allem bei LEFT JOIN (Filter auf rechte Tabelle im WHERE macht daraus faktisch einen INNER JOIN).'
    ]
  },

  // ============================================================
  // AGGREGATION
  // ============================================================
  {
    themaId: 'sql-aggregation',
    titel: 'GROUP BY und Aggregatfunktionen',
    einleitung: 'Aggregationen fassen mehrere Zeilen zu einem Ergebniswert zusammen. In der AP2-Prüfung gehört fast jede SQL-Aufgabe mit &bdquo;Anzahl&ldquo;, &bdquo;Summe&ldquo;, &bdquo;Durchschnitt pro...&ldquo; oder &bdquo;mehr als X&ldquo; zu diesem Themenfeld. Der korrekte Umgang mit GROUP BY und die Unterscheidung zwischen WHERE und HAVING entscheidet oft über mehrere Punkte.',
    abschnitte: [
      {
        titel: 'Die fünf Aggregatfunktionen',
        inhalt: `
          <p>Standard-SQL kennt fünf Aggregatfunktionen, alle prüfungsrelevant:</p>
          <ul>
            <li><code>COUNT(*)</code> &ndash; Anzahl aller Zeilen, inkl. NULL</li>
            <li><code>COUNT(spalte)</code> &ndash; Anzahl der Zeilen, bei denen <em>spalte</em> nicht NULL ist</li>
            <li><code>COUNT(DISTINCT spalte)</code> &ndash; Anzahl unterschiedlicher Werte</li>
            <li><code>SUM(spalte)</code> &ndash; Summe (nur für numerische Spalten)</li>
            <li><code>AVG(spalte)</code> &ndash; Mittelwert (ignoriert NULL)</li>
            <li><code>MIN(spalte)</code> / <code>MAX(spalte)</code> &ndash; kleinster / größter Wert</li>
          </ul>
          <p>Alle Aggregate außer <code>COUNT(*)</code> ignorieren NULL-Werte!</p>
          <pre><code>-- Min, Max, Durchschnitt + Anzahl Transaktionen je Boerse (S24 T2)
SELECT Boerse_ID,
       MIN(Kurs) AS MinKurs,
       MAX(Kurs) AS MaxKurs,
       AVG(Kurs) AS AvgKurs,
       COUNT(*) AS Anzahl
FROM Aktienkurs
GROUP BY Boerse_ID;</code></pre>
        `
      },
      {
        titel: 'GROUP BY: Zeilen zu Gruppen zusammenfassen',
        inhalt: `
          <p><code>GROUP BY</code> fasst Zeilen mit gleichem Wert in der/den angegebenen Spalte(n) zu einer Gruppe zusammen. Aggregatfunktionen werden dann <em>pro Gruppe</em> berechnet.</p>
          <p><strong>Goldene Regel:</strong> Jede Spalte im <code>SELECT</code>, die <em>nicht</em> in einer Aggregatfunktion steht, muss auch im <code>GROUP BY</code> stehen.</p>
          <pre><code>-- Durchschnittliche Tätigkeiten pro Monat je Mitarbeiter (S23 T2)
SELECT MA_ID, MONTH(Datum) AS Monat, COUNT(*) AS Anzahl
FROM Pflegearbeit
GROUP BY MA_ID, MONTH(Datum);</code></pre>
          <p>Ein SELECT ohne GROUP BY mit gemischten Spalten und Aggregaten ist ein Syntaxfehler (bzw. gibt in MySQL undefinierte Ergebnisse).</p>
        `
      },
      {
        titel: 'HAVING: Filter auf Aggregatergebnisse',
        inhalt: `
          <p><code>WHERE</code> filtert <strong>einzelne Zeilen</strong> vor der Gruppierung. <code>HAVING</code> filtert <strong>Gruppen</strong> nach der Aggregation. Beide werden oft kombiniert.</p>
          <pre><code>-- Hersteller mit mehr als 50 nicht rezeptpflichtigen Arzneimitteln (W21 T2)
SELECT h.Name, COUNT(*) AS Anzahl
FROM Arzneimittel a
JOIN Hersteller h ON a.Hersteller_FK = h.ID
WHERE a.rezeptpflichtig = FALSE    -- Einzelzeilen-Filter
GROUP BY h.Name
HAVING COUNT(*) > 50;              -- Gruppen-Filter</code></pre>
          <p>Faustregel: Bedingungen auf <em>Aggregate</em> (COUNT, SUM, ...) immer in HAVING. Bedingungen auf <em>einzelne Spaltenwerte</em> gehören in WHERE.</p>
        `
      },
      {
        titel: 'Auswertungsreihenfolge',
        inhalt: `
          <p>Für die Prüfung wichtig: SQL wertet ein Statement in dieser logischen Reihenfolge aus:</p>
          <ol>
            <li><code>FROM</code> + <code>JOIN</code> &ndash; Tabellen kombinieren</li>
            <li><code>WHERE</code> &ndash; einzelne Zeilen filtern</li>
            <li><code>GROUP BY</code> &ndash; Gruppen bilden</li>
            <li>Aggregatfunktionen berechnen</li>
            <li><code>HAVING</code> &ndash; Gruppen filtern</li>
            <li><code>SELECT</code> &ndash; Spalten auswählen, Aliase definieren</li>
            <li><code>ORDER BY</code> &ndash; Ergebnis sortieren</li>
          </ol>
          <p>Deshalb gilt: in <code>WHERE</code> stehen <em>Originalspalten</em>, Aggregate oder im SELECT definierte Aliase funktionieren dort <strong>nicht</strong>.</p>
        `
      },
      {
        titel: 'CASE WHEN in Aggregaten',
        inhalt: `
          <p>Um bedingt zu summieren (z.B. &bdquo;Summiere nur Urlaubstage&ldquo;), kombiniert man <code>SUM</code> mit <code>CASE WHEN</code>:</p>
          <pre><code>-- Nur Urlaubstage summieren (W22 T2)
SELECT m.MA_ID, m.Name,
       SUM(CASE WHEN f.FzAID = 2 THEN f.FehltageSum ELSE 0 END) AS Urlaubstage,
       COUNT(f.FID) AS AnzahlEintraege
FROM Mitarbeiter m
LEFT JOIN Fehlzeit f ON m.MA_ID = f.MA_FK AND YEAR(f.Datum) = 2022
GROUP BY m.MA_ID, m.Name;</code></pre>
          <p>Die CASE-Konstruktion liefert pro Zeile entweder den Wert oder 0, und das Aggregat summiert daraus.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Prüfungstipp aus der Analyse: HAVING nur für Aggregatbedingungen — Filter auf Einzelwerte gehören IMMER ins WHERE.',
      'Alle SELECT-Spalten, die kein Aggregat sind, müssen im GROUP BY stehen — sonst Punktabzug oder Syntaxfehler.',
      'Bei „Anzahl pro..." oder „Summe je..." ist GROUP BY immer das Signalwort.',
      'Spaltenalias im ORDER BY geht, im WHERE aber nicht — Grund ist die Auswertungsreihenfolge.',
      'COUNT(*) zählt Zeilen inkl. NULL, COUNT(spalte) zählt Non-NULL. Das ist bei LEFT JOINs wichtig.'
    ]
  },

  // ============================================================
  // DDL & DML
  // ============================================================
  {
    themaId: 'sql-ddl',
    titel: 'DDL & DML: Tabellen anlegen und Daten verändern',
    einleitung: 'SQL gliedert sich in drei Sprachteile: DDL (Data Definition Language) für Strukturänderungen, DML (Data Manipulation Language) für Dateninhalte und DCL (Data Control Language) für Rechte. Die AP2-Prüfung verlangt fast jährlich ein CREATE TABLE mit Constraints, mindestens ein INSERT/UPDATE/DELETE und oft ein &bdquo;Archivieren&ldquo; (INSERT...SELECT + DELETE).',
    abschnitte: [
      {
        titel: 'CREATE TABLE mit Constraints',
        inhalt: `
          <p>Mit <code>CREATE TABLE</code> wird eine neue Tabelle angelegt. Jede Spalte bekommt einen <strong>Datentyp</strong> und optional <strong>Constraints</strong> (Regeln):</p>
          <pre><code>CREATE TABLE Hersteller (
    ID        INT          NOT NULL AUTO_INCREMENT,
    Name      VARCHAR(100) NOT NULL,
    Land      VARCHAR(50),
    Gegruendet DATE,
    PRIMARY KEY (ID),
    UNIQUE (Name)
);</code></pre>
          <p>Wichtige Constraints:</p>
          <ul>
            <li><code>PRIMARY KEY</code> &ndash; eindeutiger Schlüssel, nie NULL</li>
            <li><code>FOREIGN KEY ... REFERENCES ...</code> &ndash; Fremdschlüssel</li>
            <li><code>NOT NULL</code> &ndash; Pflichtfeld</li>
            <li><code>UNIQUE</code> &ndash; Wert darf nur einmal vorkommen</li>
            <li><code>DEFAULT wert</code> &ndash; Standardwert</li>
            <li><code>CHECK (bedingung)</code> &ndash; eigene Prüfregel</li>
          </ul>
          <p>Häufige Datentypen: <code>INT</code>, <code>VARCHAR(n)</code>, <code>CHAR(n)</code>, <code>DECIMAL(p,s)</code>, <code>DATE</code>, <code>DATETIME</code>, <code>BOOLEAN</code>, <code>TEXT</code>.</p>
        `
      },
      {
        titel: 'Fremdschlüssel und CASCADE',
        inhalt: `
          <p>Ein <code>FOREIGN KEY</code> stellt sicher, dass ein Verweis auf einen Datensatz einer anderen Tabelle gültig ist. Was beim Löschen oder Ändern des referenzierten Datensatzes passiert, steuert die <strong>Referenzielle Aktion</strong>:</p>
          <pre><code>CREATE TABLE Bestellung (
    ID         INT PRIMARY KEY,
    Kunde_FK   INT NOT NULL,
    Datum      DATE,
    FOREIGN KEY (Kunde_FK) REFERENCES Kunde(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);</code></pre>
          <ul>
            <li><code>CASCADE</code> &ndash; Änderung/Löschung wird weitergegeben</li>
            <li><code>SET NULL</code> &ndash; FK-Spalte wird auf NULL gesetzt</li>
            <li><code>RESTRICT</code> / <code>NO ACTION</code> &ndash; Löschen wird verhindert, solange abhängige Zeilen existieren (Default)</li>
          </ul>
          <p>Prüfungsfrage-Klassiker: &bdquo;Was passiert beim Löschen eines Kunden mit ON DELETE CASCADE?&ldquo; &ndash; Antwort: alle Bestellungen dieses Kunden werden automatisch mitgelöscht.</p>
        `
      },
      {
        titel: 'ALTER TABLE und DROP',
        inhalt: `
          <p>Strukturänderungen an bestehenden Tabellen:</p>
          <pre><code>-- Spalte hinzufügen
ALTER TABLE Kunde ADD COLUMN Email VARCHAR(120);

-- Spalte ändern (MySQL)
ALTER TABLE Kunde MODIFY COLUMN Name VARCHAR(150) NOT NULL;

-- Spalte löschen
ALTER TABLE Kunde DROP COLUMN Email;

-- Fremdschlüssel nachträglich anlegen
ALTER TABLE Bestellung
    ADD CONSTRAINT fk_kunde FOREIGN KEY (Kunde_FK) REFERENCES Kunde(ID);

-- Ganze Tabelle löschen (inkl. Struktur und Daten!)
DROP TABLE Bestellung;

-- Nur Inhalt leeren, Struktur behalten
TRUNCATE TABLE Bestellung;</code></pre>
          <p>Wichtig: <code>DROP</code> entfernt die Tabelle komplett, <code>DELETE</code> löscht Daten zeilenweise, <code>TRUNCATE</code> leert schnell &ndash; ohne WHERE.</p>
        `
      },
      {
        titel: 'INSERT, UPDATE, DELETE',
        inhalt: `
          <p><strong>INSERT</strong> &ndash; neue Zeile einfügen:</p>
          <pre><code>INSERT INTO Hersteller (Name, Land) VALUES ('Bayer', 'DE');
-- mehrere Zeilen auf einmal
INSERT INTO Hersteller (Name, Land) VALUES ('Pfizer', 'US'), ('Roche', 'CH');</code></pre>
          <p><strong>UPDATE</strong> &ndash; vorhandene Zeilen ändern. <em>WHERE nicht vergessen</em>, sonst werden alle Zeilen geändert!</p>
          <pre><code>-- Preis um 5% erhöhen für Hersteller 'CCC' (W21 T2)
UPDATE Arzneimittel
SET Preis = Preis * 1.05
WHERE Hersteller_FK = (SELECT ID FROM Hersteller WHERE Name = 'CCC');</code></pre>
          <p><strong>DELETE</strong> &ndash; Zeilen entfernen:</p>
          <pre><code>-- Haushalte ohne Zähler löschen (S22 T2)
DELETE FROM Haushalt
WHERE HH_ID NOT IN (SELECT Z_HHID FROM Zaehler);</code></pre>
        `
      },
      {
        titel: 'Archivieren: INSERT ... SELECT + DELETE',
        inhalt: `
          <p>Ein typisches Prüfungsmuster (W22 T2, S24 T2) ist <em>&bdquo;Datensätze in eine Archiv-Tabelle verschieben&ldquo;</em>. Das erfordert <strong>zwei</strong> Statements:</p>
          <pre><code>-- 1. Kopieren ins Archiv
INSERT INTO AktienkursArchiv
SELECT * FROM Aktienkurs
WHERE YEAR(AK_DatumZeit) &lt; YEAR(CURDATE());

-- 2. Aus Quelltabelle löschen
DELETE FROM Aktienkurs
WHERE YEAR(AK_DatumZeit) &lt; YEAR(CURDATE());</code></pre>
          <p>Reihenfolge beachten: erst kopieren, dann löschen! Umgekehrt wären die Daten weg.</p>
        `
      },
      {
        titel: 'DCL: Nutzer und Rechte',
        inhalt: `
          <p>Die <strong>Data Control Language</strong> regelt Benutzer und Zugriffsrechte:</p>
          <pre><code>-- Nutzer anlegen + nur Lesen auf Tabelle 'Objekt' (S23 T2)
CREATE USER 'Maier' IDENTIFIED BY '5jk2T?';
GRANT SELECT ON Objekt TO 'Maier';

-- Weitere Rechte
GRANT INSERT, UPDATE ON Bestellung TO 'admin';

-- Rechte entziehen
REVOKE INSERT ON Bestellung FROM 'admin';</code></pre>
          <p>In der Prüfung reicht meist die einfache Form mit <code>CREATE USER</code> + <code>GRANT SELECT ON tabelle TO 'nutzer'</code>.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Beim „Kopieren und Löschen" in Archiv-Tabellen IMMER zwei Statements: INSERT INTO ... SELECT gefolgt von DELETE. Reihenfolge nicht vertauschen (Tipp direkt aus der Analyse).',
      'Jedes UPDATE und DELETE ohne WHERE betrifft die gesamte Tabelle — in der Prüfung markierte Musterlösungen haben IMMER eine WHERE-Klausel.',
      'Datentypen sinnvoll wählen: DECIMAL(p,s) für Geldbeträge (nicht FLOAT), VARCHAR mit realistischer Länge, DATE statt VARCHAR für Daten (W22 T2 verlangt explizit sinnvolle Typen).',
      'PRIMARY KEY und FOREIGN KEY explizit im CREATE TABLE angeben — fehlende Constraints sind typische Punktverluste.',
      'ON DELETE CASCADE nur verwenden, wenn das Mitlöschen fachlich korrekt ist (z.B. Bestellpositionen bei Bestellung). Bei Kunden-Bestellung wäre RESTRICT sicherer.'
    ]
  },

  // ============================================================
  // ER-MODELL
  // ============================================================
  {
    themaId: 'sql-er-modell',
    titel: 'ER-Modell: Entitäten, Beziehungen, Kardinalitäten',
    einleitung: 'Das Entity-Relationship-Modell (ER-Modell) ist das Werkzeug zur fachlichen Datenmodellierung. In der AP2-Prüfung muss in fast jeder Klausur aus einem Anforderungstext oder einer Beispieltabelle ein ER- oder Relationenmodell abgeleitet werden (8-12% der Gesamtpunkte). Besonders wichtig: Kardinalitäten aus Schlüsselwörtern im Text ableiten und n:m-Beziehungen über Zwischentabellen auflösen.',
    abschnitte: [
      {
        titel: 'Grundelemente: Entitäten, Attribute, Beziehungen',
        inhalt: `
          <p>Ein <strong>ER-Modell</strong> beschreibt den Ausschnitt der realen Welt, der in der Datenbank abgebildet werden soll. Drei Bausteine:</p>
          <ul>
            <li><strong>Entitätstyp</strong> (Rechteck) &ndash; ein Ding der realen Welt, z.B. Kunde, Bestellung, Produkt</li>
            <li><strong>Attribut</strong> (Oval) &ndash; Eigenschaft eines Entitätstyps, z.B. Name, Preis, Datum</li>
            <li><strong>Beziehung</strong> (Raute) &ndash; wie Entitäten zusammenhängen, z.B. &bdquo;Kunde bestellt Produkt&ldquo;</li>
          </ul>
          <p>Das Schlüsselattribut (Primärschlüssel) wird unterstrichen. Eine <em>Entität</em> ist eine konkrete Ausprägung (&bdquo;Kunde Maier&ldquo;), der <em>Entitätstyp</em> der Bauplan (&bdquo;Kunde&ldquo;).</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="400" height="220">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold">ER-Notation (Chen)</text>
          <!-- Entity -->
          <rect x="30" y="90" width="90" height="45" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
          <text x="75" y="117" text-anchor="middle" font-size="13">Kunde</text>
          <!-- Relation -->
          <polygon points="200,90 250,112 200,135 150,112" fill="#fff3e0" stroke="#f57c00" stroke-width="2"/>
          <text x="200" y="117" text-anchor="middle" font-size="12">bestellt</text>
          <!-- Entity 2 -->
          <rect x="280" y="90" width="90" height="45" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
          <text x="325" y="117" text-anchor="middle" font-size="13">Produkt</text>
          <!-- Lines -->
          <line x1="120" y1="112" x2="150" y2="112" stroke="black" stroke-width="1.5"/>
          <line x1="250" y1="112" x2="280" y2="112" stroke="black" stroke-width="1.5"/>
          <text x="135" y="106" font-size="11">n</text>
          <text x="265" y="106" font-size="11">m</text>
          <!-- Attribute -->
          <ellipse cx="75" cy="175" rx="40" ry="18" fill="#e8f5e9" stroke="#388e3c" stroke-width="1.5"/>
          <text x="75" y="180" text-anchor="middle" font-size="11" text-decoration="underline">KundenID</text>
          <line x1="75" y1="135" x2="75" y2="157" stroke="black" stroke-width="1.5"/>
          <ellipse cx="325" cy="175" rx="40" ry="18" fill="#e8f5e9" stroke="#388e3c" stroke-width="1.5"/>
          <text x="325" y="180" text-anchor="middle" font-size="11">Preis</text>
          <line x1="325" y1="135" x2="325" y2="157" stroke="black" stroke-width="1.5"/>
        </svg>`
      },
      {
        titel: 'Kardinalitäten: 1:1, 1:n, n:m',
        inhalt: `
          <p>Die <strong>Kardinalität</strong> legt fest, wie viele Entitäten einer Seite mit einer Entität der anderen Seite in Beziehung stehen können. Drei Grundtypen:</p>
          <ul>
            <li><strong>1:1</strong> &ndash; Ein Mitarbeiter hat genau einen Dienstwagen. Selten; oft zusammengelegt.</li>
            <li><strong>1:n</strong> &ndash; Ein Kunde hat mehrere Bestellungen, aber jede Bestellung gehört zu <em>einem</em> Kunden.</li>
            <li><strong>n:m</strong> &ndash; Ein Student besucht mehrere Kurse, jeder Kurs hat mehrere Studenten. Muss aufgelöst werden!</li>
          </ul>
          <p><strong>Signalwörter im Anforderungstext</strong> (direkter Prüfungstipp):</p>
          <ul>
            <li>&bdquo;genau ein&ldquo; &rarr; 1</li>
            <li>&bdquo;mindestens ein&ldquo; &rarr; 1..n (Min = 1)</li>
            <li>&bdquo;beliebig viele&ldquo; / &bdquo;mehrere&ldquo; &rarr; n oder m</li>
            <li>&bdquo;optional&ldquo; / &bdquo;kann&ldquo; &rarr; 0..1 oder 0..n</li>
          </ul>
        `
      },
      {
        titel: 'n:m-Beziehungen auflösen',
        inhalt: `
          <p>Im Relationenmodell (also der fertigen Tabellenstruktur) kann keine direkte n:m-Beziehung existieren. Sie wird immer über eine <strong>Zwischentabelle</strong> (Assoziationstabelle) aufgelöst:</p>
          <p>Beispiel: <em>Student belegt Kurs</em> (n:m) &rarr;</p>
          <ul>
            <li><code>Student(<u>StudentID</u>, Name)</code></li>
            <li><code>Kurs(<u>KursID</u>, Titel)</code></li>
            <li><code>Belegt(<u>StudentID, KursID</u>, Note)</code> &ndash; Zwischentabelle mit zusammengesetztem PK und zwei FKs</li>
          </ul>
          <p>Der Primärschlüssel der Zwischentabelle ist meist zusammengesetzt aus den beiden Fremdschlüsseln. Zusätzliche Attribute der Beziehung (hier: Note) gehören ebenfalls in die Zwischentabelle.</p>
          <p>Merksatz aus der Analyse: <strong>&bdquo;Bei m:n IMMER Zwischentabelle einzeichnen &ndash; typischer Punktverlust.&ldquo;</strong></p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="400" height="220">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold">Auflösung n:m über Zwischentabelle</text>
          <!-- Student -->
          <rect x="20" y="95" width="90" height="45" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
          <text x="65" y="122" text-anchor="middle" font-size="12">Student</text>
          <!-- Belegung -->
          <rect x="155" y="85" width="90" height="65" fill="#fff3e0" stroke="#f57c00" stroke-width="2"/>
          <text x="200" y="108" text-anchor="middle" font-size="12">Belegung</text>
          <line x1="160" y1="115" x2="240" y2="115" stroke="#f57c00" stroke-width="1"/>
          <text x="200" y="128" text-anchor="middle" font-size="10">StudentID(FK)</text>
          <text x="200" y="142" text-anchor="middle" font-size="10">KursID(FK)</text>
          <!-- Kurs -->
          <rect x="290" y="95" width="90" height="45" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
          <text x="335" y="122" text-anchor="middle" font-size="12">Kurs</text>
          <!-- Lines + kardinality -->
          <line x1="110" y1="117" x2="155" y2="117" stroke="black" stroke-width="1.5"/>
          <line x1="245" y1="117" x2="290" y2="117" stroke="black" stroke-width="1.5"/>
          <text x="120" y="110" font-size="11">1</text>
          <text x="143" y="110" font-size="11">n</text>
          <text x="255" y="110" font-size="11">m</text>
          <text x="278" y="110" font-size="11">1</text>
          <text x="200" y="180" text-anchor="middle" font-size="11" fill="#555">n:m wird zu zwei 1:n-Beziehungen</text>
        </svg>`
      },
      {
        titel: 'Vom ER-Modell zum Relationenmodell',
        inhalt: `
          <p>Das <strong>Relationenmodell</strong> notiert Tabellen in Textform:</p>
          <p><code>Tabellenname(<u>Primärschlüssel</u>, Attribut1, Attribut2, <em>Fremdschlüssel</em>)</code></p>
          <p>Konventionen:</p>
          <ul>
            <li>Primärschlüssel unterstrichen</li>
            <li>Fremdschlüssel mit FK gekennzeichnet oder kursiv</li>
            <li>1:n-Beziehung: FK auf der <em>n</em>-Seite einfügen</li>
            <li>n:m: eigene Zwischentabelle</li>
            <li>1:1: FK auf einer Seite (oder ganz zusammenlegen)</li>
          </ul>
          <p>Beispiel Kunde &harr; Bestellung (1:n):</p>
          <ul>
            <li><code>Kunde(<u>KundenID</u>, Name, Adresse)</code></li>
            <li><code>Bestellung(<u>BestellNr</u>, Datum, <em>Kunde_FK</em>)</code></li>
          </ul>
        `
      },
      {
        titel: 'Anomalien',
        inhalt: `
          <p>Ein schlecht modelliertes Schema führt zu drei typischen <strong>Anomalien</strong> &ndash; in der Prüfung regelmäßig abgefragt (S23 T1):</p>
          <ul>
            <li><strong>Einfügeanomalie:</strong> Neue Daten können nicht eingefügt werden, ohne andere Daten zu kennen. (z.B. Ein neuer Kurs kann nicht gespeichert werden, solange kein Student eingeschrieben ist.)</li>
            <li><strong>Änderungsanomalie:</strong> Eine Information steht redundant in vielen Zeilen. Bei Änderung muss jede Zeile angepasst werden &ndash; sonst Inkonsistenz. (z.B. Adresse des Herstellers steht bei jedem Arzneimittel &ndash; Umzug erfordert viele Updates.)</li>
            <li><strong>Löschanomalie:</strong> Beim Löschen einer Zeile gehen Informationen verloren, die man eigentlich behalten wollte. (z.B. Letzten Studenten eines Kurses löschen &rarr; Kurs weg.)</li>
          </ul>
          <p>Alle drei Anomalien werden durch korrekte Normalisierung (mindestens 3. NF) vermieden.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Schlüsselwörter im Aufgabentext direkt markieren: „jeder", „mehrere", „genau ein", „beliebig" → Kardinalitäten daraus ableiten.',
      'n:m-Beziehungen IMMER über Zwischentabelle auflösen, auch wenn sie nicht explizit gefordert wird. Typischer Punktverlust laut Analyse.',
      'PK und FK im Relationenmodell explizit kennzeichnen (unterstreichen bzw. FK-Markierung) — fehlende Kennzeichnung kostet Punkte.',
      'Bei 1:n die FK-Spalte IMMER auf der n-Seite einfügen — nie umgekehrt.',
      'Sinnvolle Datentypen angeben, wenn die Aufgabe es verlangt (W22 T2): VARCHAR für Namen/PLZ, DATE für Datumsfelder, DECIMAL für Beträge, INT für IDs.'
    ]
  },

  // ============================================================
  // NORMALISIERUNG
  // ============================================================
  {
    themaId: 'sql-normalisierung',
    titel: 'Normalisierung: 1NF, 2NF, 3NF',
    einleitung: 'Die Normalisierung überführt ein fehleranfälliges Datenschema Schritt für Schritt in eine redundanzfreie Struktur. In der AP2-Prüfung heißt die Aufgabe fast immer: &bdquo;Erstellen Sie ein relationales Modell in 3. Normalform.&ldquo; Wer die drei Normalformen systematisch anwendet, vermeidet Anomalien und sichert sich die vollen 16-25 Punkte.',
    abschnitte: [
      {
        titel: 'Warum normalisieren?',
        inhalt: `
          <p>Eine nicht normalisierte Tabelle speichert alles in einer einzigen breiten Tabelle. Das führt zu:</p>
          <ul>
            <li><strong>Redundanz</strong> &ndash; gleiche Werte stehen mehrfach</li>
            <li><strong>Anomalien</strong> beim Einfügen, Ändern, Löschen</li>
            <li><strong>Inkonsistenz</strong> &ndash; bei Fehlern auseinanderlaufende Daten</li>
          </ul>
          <p>Ziel der Normalisierung: jede Information nur an <em>einer</em> Stelle speichern.</p>
        `
      },
      {
        titel: '1. Normalform (1NF): Atomarität',
        inhalt: `
          <p><strong>Definition:</strong> Eine Relation ist in 1NF, wenn alle Attribute <strong>atomare</strong> (unteilbare) Werte enthalten und es keine Wiederholungsgruppen gibt.</p>
          <p><strong>Verletzung:</strong></p>
          <table style="width:100%; border-collapse:collapse; margin: 10px 0; font-size:12px;">
            <tr style="background:#ffebee;">
              <th style="border:1px solid #ccc; padding:6px;">KundenID</th>
              <th style="border:1px solid #ccc; padding:6px;">Name</th>
              <th style="border:1px solid #ccc; padding:6px;">Telefonnummern</th>
            </tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">1</td><td style="border:1px solid #ccc; padding:6px;">Maier</td><td style="border:1px solid #ccc; padding:6px;">030-111, 0170-222</td></tr>
          </table>
          <p><strong>Lösung (1NF):</strong> Mehrere Telefonnummern in eigene Zeilen oder eigene Tabelle auslagern:</p>
          <ul>
            <li><code>Kunde(<u>KundenID</u>, Name)</code></li>
            <li><code>Telefon(<u>KundenID, Nr</u>)</code></li>
          </ul>
          <p>Auch zusammengesetzte Adressfelder (&bdquo;Hauptstr. 5, 10115 Berlin&ldquo;) verletzen 1NF &ndash; besser in Straße, PLZ, Ort splitten.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold">1NF: atomare Werte</text>
          <!-- Bad -->
          <rect x="10" y="35" width="175" height="70" fill="#ffebee" stroke="#d32f2f" stroke-width="1.5"/>
          <text x="97" y="52" text-anchor="middle" font-size="11" font-weight="bold">nicht 1NF</text>
          <text x="20" y="72" font-size="10">1 | Maier | 030-111, 0170-22</text>
          <text x="20" y="88" font-size="10">2 | Schmidt | 089-333</text>
          <text x="97" y="100" text-anchor="middle" font-size="9" fill="#b71c1c">Mehrwert in einer Zelle</text>
          <!-- Arrow -->
          <line x1="190" y1="70" x2="215" y2="70" stroke="#666" stroke-width="1.5" marker-end="url(#ar1)"/>
          <defs><marker id="ar1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6" fill="none" stroke="#666" stroke-width="1.5"/></marker></defs>
          <!-- Good -->
          <rect x="220" y="35" width="170" height="105" fill="#e8f5e9" stroke="#388e3c" stroke-width="1.5"/>
          <text x="305" y="52" text-anchor="middle" font-size="11" font-weight="bold">1NF</text>
          <text x="230" y="70" font-size="10">Kunde: 1 | Maier</text>
          <text x="230" y="84" font-size="10">Kunde: 2 | Schmidt</text>
          <text x="230" y="105" font-size="10">Tel: 1 | 030-111</text>
          <text x="230" y="118" font-size="10">Tel: 1 | 0170-22</text>
          <text x="230" y="131" font-size="10">Tel: 2 | 089-333</text>
        </svg>`
      },
      {
        titel: '2. Normalform (2NF): volle Abhängigkeit vom PK',
        inhalt: `
          <p><strong>Definition:</strong> Eine Relation ist in 2NF, wenn sie in 1NF ist <strong>und</strong> jedes Nichtschlüsselattribut <em>voll</em> funktional vom gesamten Primärschlüssel abhängt (nicht nur von einem Teil).</p>
          <p>2NF ist nur bei <strong>zusammengesetzten Primärschlüsseln</strong> relevant. Bei einem einzelnen PK ist 1NF &rarr; 2NF automatisch gegeben.</p>
          <p><strong>Beispiel (verletzt 2NF):</strong> Zwischentabelle Bestellposition:</p>
          <p><code>Bestellposition(<u>BestellNr, ArtikelNr</u>, Menge, Artikelname, Einzelpreis)</code></p>
          <p>Hier hängen <em>Artikelname</em> und <em>Einzelpreis</em> nur von <em>ArtikelNr</em> ab, nicht vom gesamten PK. <strong>Lösung:</strong> in eigene Tabelle auslagern:</p>
          <ul>
            <li><code>Bestellposition(<u>BestellNr, ArtikelNr</u>, Menge)</code></li>
            <li><code>Artikel(<u>ArtikelNr</u>, Artikelname, Einzelpreis)</code></li>
          </ul>
        `
      },
      {
        titel: '3. Normalform (3NF): keine transitiven Abhängigkeiten',
        inhalt: `
          <p><strong>Definition:</strong> Eine Relation ist in 3NF, wenn sie in 2NF ist <strong>und</strong> kein Nichtschlüsselattribut von einem anderen Nichtschlüsselattribut abhängt (keine <em>transitive</em> Abhängigkeit).</p>
          <p><strong>Beispiel (verletzt 3NF):</strong></p>
          <p><code>Mitarbeiter(<u>MA_ID</u>, Name, AbteilungsNr, Abteilungsname, AbteilungsLeiter)</code></p>
          <p>Abteilungsname und -leiter hängen nicht direkt von MA_ID ab, sondern von AbteilungsNr, und diese wiederum von MA_ID. Das ist transitiv.</p>
          <p><strong>Lösung:</strong> Abteilung in eigene Tabelle auslagern:</p>
          <ul>
            <li><code>Mitarbeiter(<u>MA_ID</u>, Name, <em>AbteilungsNr_FK</em>)</code></li>
            <li><code>Abteilung(<u>AbteilungsNr</u>, Name, Leiter)</code></li>
          </ul>
          <p>Vorteil: Ändert sich der Abteilungsleiter, muss nur <em>eine</em> Zeile in <em>Abteilung</em> geändert werden &ndash; keine Änderungsanomalie.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="400" height="220">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold">3NF: transitive Abhängigkeit auflösen</text>
          <!-- Nicht 3NF -->
          <rect x="20" y="40" width="360" height="50" fill="#ffebee" stroke="#d32f2f" stroke-width="1.5"/>
          <text x="200" y="58" text-anchor="middle" font-size="11" font-weight="bold">Nicht 3NF</text>
          <text x="200" y="78" text-anchor="middle" font-size="11">Mitarbeiter(MA_ID, Name, AbtNr, AbtName, Leiter)</text>
          <!-- Arrow -->
          <line x1="200" y1="95" x2="200" y2="115" stroke="#666" stroke-width="1.5" marker-end="url(#ar2)"/>
          <defs><marker id="ar2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6" fill="none" stroke="#666" stroke-width="1.5"/></marker></defs>
          <!-- 3NF -->
          <rect x="20" y="120" width="175" height="60" fill="#e8f5e9" stroke="#388e3c" stroke-width="1.5"/>
          <text x="107" y="138" text-anchor="middle" font-size="11" font-weight="bold">3NF — Mitarbeiter</text>
          <text x="107" y="158" text-anchor="middle" font-size="10">(MA_ID, Name, AbtNr_FK)</text>
          <rect x="205" y="120" width="175" height="60" fill="#e8f5e9" stroke="#388e3c" stroke-width="1.5"/>
          <text x="292" y="138" text-anchor="middle" font-size="11" font-weight="bold">3NF — Abteilung</text>
          <text x="292" y="158" text-anchor="middle" font-size="10">(AbtNr, AbtName, Leiter)</text>
          <text x="200" y="200" text-anchor="middle" font-size="10" fill="#555">Jedes Attribut hängt direkt und nur vom PK ab</text>
        </svg>`
      },
      {
        titel: 'Systematisches Vorgehen in der Prüfung',
        inhalt: `
          <p>Wenn eine Aufgabe &bdquo;Überführen Sie in 3. Normalform&ldquo; verlangt, bietet sich dieses Schema an:</p>
          <ol>
            <li><strong>1NF prüfen:</strong> Gibt es Spalten mit Listen/Mehrfachwerten? &rarr; Auslagern in eigene Tabelle.</li>
            <li><strong>2NF prüfen:</strong> Ist der PK zusammengesetzt? Gibt es Attribute, die nur von einem Teil des PK abhängen? &rarr; In neue Tabelle mit diesem Teil-PK.</li>
            <li><strong>3NF prüfen:</strong> Hängt ein Nichtschlüsselattribut von einem anderen Nichtschlüsselattribut ab? &rarr; In neue Tabelle auslagern, FK zurückverweisen.</li>
            <li><strong>PK/FK markieren,</strong> Datentypen angeben, Kardinalitäten prüfen.</li>
          </ol>
          <p>Konkretes Beispiel aus S23 T1 (Pflanzen/Beete/Sensoren):</p>
          <ul>
            <li><code>Beet(<u>BeetID</u>, Name, Koordinaten)</code></li>
            <li><code>Pflanze(<u>Kuerzel</u>, Name)</code></li>
            <li><code>Pflanzung(<u>PflanzID</u>, BeetID_FK, Kuerzel_FK, Datum, Anzahl)</code></li>
            <li><code>Sensor(<u>SensorID</u>, BeetID_FK)</code></li>
            <li><code>Messwert(<u>MessID</u>, SensorID_FK, Timestamp, Wert)</code></li>
          </ul>
          <p>Die Änderungsanomalie lässt sich konkret beschreiben: Wenn BeetKoordinaten in jeder Messwert-Zeile stünden, müssten beim Umsetzen eines Beetes alle Messwerte angepasst werden &ndash; ein Fehler führt zu inkonsistenten Koordinaten.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Die Definition der drei Normalformen auswendig können: 1NF = atomare Werte, 2NF = volle Abhängigkeit vom gesamten PK, 3NF = keine transitive Abhängigkeit.',
      'Aufgaben mit „in 3. Normalform überführen" IMMER systematisch abarbeiten — 1NF, dann 2NF, dann 3NF. Sprungprüfung führt oft zu übersehenen Verletzungen.',
      'Bei der Begründung einer Anomalie ein konkretes Beispiel aus der Aufgabe nennen (S23 T1 verlangt das explizit), nicht nur die Definition wiederholen.',
      'Der PK der Zwischentabelle bei n:m ist fast immer zusammengesetzt aus den beiden FKs — einzeln reichen sie nicht.',
      'BCNF wird in AP2 meist nicht verlangt, aber falls eine Aufgabe „weitestgehend redundanzfrei" fordert, reicht 3NF immer aus.'
    ]
  }
];
