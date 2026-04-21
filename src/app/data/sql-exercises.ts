import { UebungsSet } from '../models/app.models';

export const SQL_UEBUNGEN: UebungsSet[] = [
  // ========== sql-grundlagen ==========
  {
    themaId: 'sql-grundlagen',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche SQL-Klausel filtert Zeilen aufgrund einer Bedingung?',
        optionen: ['SELECT', 'WHERE', 'HAVING', 'ORDER BY'],
        korrekteAntwort: 1,
        erklaerung: 'WHERE filtert einzelne Zeilen vor der Gruppierung. HAVING filtert nach der Gruppierung (Gruppen).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was gibt <code>SELECT DISTINCT abteilung FROM mitarbeiter</code> zurück?',
        optionen: [
          'Alle Zeilen der Tabelle',
          'Nur die Zeilen mit eindeutiger abteilung',
          'Eine Liste aller in der Tabelle vorkommenden Abteilungen ohne Duplikate',
          'Einen Fehler, weil kein WHERE'
        ],
        korrekteAntwort: 2,
        erklaerung: 'DISTINCT entfernt Duplikate im Ergebnis. Man erhält jede Abteilung genau einmal.'
      },
      {
        typ: 'lueckentext',
        frage: 'Um nur Zeilen zu finden, bei denen das Feld name mit "Mü" beginnt, verwendet man: WHERE name ___ \'Mü%\'',
        antwort: 'LIKE',
        erklaerung: 'LIKE + Platzhalter (% = beliebig viele Zeichen, _ = genau ein Zeichen) für Mustersuche.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'ORDER BY gehalt DESC sortiert aufsteigend nach Gehalt.',
        korrekt: false,
        erklaerung: 'DESC sortiert absteigend (größte Werte zuerst). Aufsteigend wäre ASC (Default).'
      },
      {
        typ: 'freitext',
        frage: 'Schreibe eine SQL-Abfrage, die alle Mitarbeiter aus der Tabelle mitarbeiter liefert, deren Gehalt zwischen 40000 und 60000 liegt, sortiert nach Gehalt absteigend.',
        musterloesung: `SELECT *
FROM mitarbeiter
WHERE gehalt BETWEEN 40000 AND 60000
ORDER BY gehalt DESC;`,
        erklaerung: 'BETWEEN ist inklusiv (beide Grenzen sind enthalten). Alternativ: gehalt >= 40000 AND gehalt <= 60000.',
        stichwoerter: ['SELECT', 'WHERE', 'BETWEEN', 'ORDER BY', 'DESC']
      },
      {
        typ: 'freitext',
        frage: 'Gib alle Kunden (Tabelle kunde mit Spalten id, name, ort) aus, die in München oder Berlin wohnen.',
        musterloesung: `SELECT *
FROM kunde
WHERE ort IN ('München', 'Berlin');`,
        erklaerung: 'IN (...) ist äquivalent zu ort = \'München\' OR ort = \'Berlin\', aber kürzer und bei vielen Werten übersichtlicher.',
        stichwoerter: ['SELECT', 'WHERE', 'IN']
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Ergebnis liefert <code>SELECT name FROM artikel WHERE preis IS NULL</code>?',
        optionen: [
          'Artikel mit Preis = 0',
          'Artikel bei denen kein Preis eingetragen ist',
          'Einen Fehler',
          'Alle Artikel'
        ],
        korrekteAntwort: 1,
        erklaerung: 'IS NULL prüft auf fehlende Werte. <code>preis = NULL</code> liefert dagegen niemals true (NULL-Vergleich ist immer unknown).'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die SQL-Operatoren ihrer Bedeutung zu.',
        paare: [
          { begriff: 'LIKE', definition: 'Mustersuche mit Wildcards % und _' },
          { begriff: 'IN', definition: 'Wert in einer Liste enthalten' },
          { begriff: 'BETWEEN', definition: 'Wert in einem Intervall (inklusiv)' },
          { begriff: 'IS NULL', definition: 'Prüft auf fehlenden Wert' }
        ],
        erklaerung: 'Diese vier Operatoren tauchen in fast jeder AP2-SQL-Aufgabe auf.'
      },
      {
        typ: 'freitext',
        frage: 'Tabelle bestellung(id, kunden_id, datum, betrag). Gib alle Bestellungen aus dem Jahr 2024 aus, sortiert nach Datum (neueste zuerst).',
        musterloesung: `SELECT *
FROM bestellung
WHERE datum >= '2024-01-01' AND datum <= '2024-12-31'
ORDER BY datum DESC;`,
        erklaerung: 'Alternative: WHERE YEAR(datum) = 2024 (MySQL). Die explizite Grenze ist meist schneller, weil sie einen Index auf datum nutzen kann.',
        stichwoerter: ['SELECT', 'WHERE', 'datum', 'ORDER BY', 'DESC']
      },
      {
        typ: 'freitext',
        frage: 'Tabelle produkt(id, bezeichnung, preis, bestand). Finde alle Produkte, deren Bezeichnung "Schrau" enthält (an beliebiger Position) und deren Bestand 0 ist.',
        musterloesung: `SELECT *
FROM produkt
WHERE bezeichnung LIKE '%Schrau%'
  AND bestand = 0;`,
        erklaerung: '%Schrau% findet "Schraube", "Metallschraube", "Schrauben-Set" usw. Ohne Platzhalter sucht LIKE exakt wie =.',
        stichwoerter: ['SELECT', 'WHERE', 'LIKE', '%']
      },
      {
        typ: 'freitext',
        frage: 'Tabelle mitarbeiter(id, name, vorgesetzter_id, abteilung_id). Liste die Namen aller Mitarbeiter OHNE Vorgesetzten, alphabetisch sortiert.',
        musterloesung: `SELECT name
FROM mitarbeiter
WHERE vorgesetzter_id IS NULL
ORDER BY name;`,
        erklaerung: 'NULL bedeutet "nicht gesetzt". Niemals vorgesetzter_id = NULL schreiben – der Vergleich ist immer unknown. Immer IS NULL / IS NOT NULL.',
        stichwoerter: ['SELECT', 'WHERE', 'IS NULL', 'ORDER BY']
      }
    ]
  },

  // ========== sql-joins ==========
  {
    themaId: 'sql-joins',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was liefert ein INNER JOIN?',
        optionen: [
          'Alle Zeilen beider Tabellen',
          'Nur Zeilen, bei denen in beiden Tabellen ein Treffer existiert',
          'Alle Zeilen der linken Tabelle plus Matches rechts',
          'Das Kartesische Produkt'
        ],
        korrekteAntwort: 1,
        erklaerung: 'INNER JOIN liefert nur die Schnittmenge – Zeilen mit passendem Schlüssel in beiden Tabellen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welcher JOIN liefert ALLE Kunden, auch solche ohne Bestellung?',
        optionen: [
          'INNER JOIN bestellung ON kunde.id = bestellung.kunde_id',
          'LEFT JOIN bestellung ON kunde.id = bestellung.kunde_id',
          'RIGHT JOIN bestellung ON kunde.id = bestellung.kunde_id',
          'CROSS JOIN bestellung'
        ],
        korrekteAntwort: 1,
        erklaerung: 'LEFT JOIN behält alle Zeilen der linken Tabelle (kunde) bei; fehlende Bestellungen erscheinen als NULL-Werte.'
      },
      {
        typ: 'freitext',
        frage: 'Tabellen: mitarbeiter(id, name, abteilung_id), abteilung(id, bezeichnung). Schreibe eine Abfrage, die Name des Mitarbeiters und Bezeichnung seiner Abteilung zurückgibt.',
        musterloesung: `SELECT m.name, a.bezeichnung
FROM mitarbeiter m
INNER JOIN abteilung a ON m.abteilung_id = a.id;`,
        erklaerung: 'Tabellen-Aliase (m, a) machen die Abfrage lesbar. INNER JOIN, weil wir nur Mitarbeiter mit Abteilung sehen wollen.',
        stichwoerter: ['SELECT', 'JOIN', 'ON']
      },
      {
        typ: 'freitext',
        frage: 'Tabellen: kunde(id, name), bestellung(id, kunde_id, datum). Liste ALLE Kunden mit ihren Bestellungen; Kunden ohne Bestellung sollen trotzdem erscheinen.',
        musterloesung: `SELECT k.name, b.id, b.datum
FROM kunde k
LEFT JOIN bestellung b ON k.id = b.kunde_id;`,
        erklaerung: 'LEFT JOIN behält alle Kunden; b.id und b.datum sind NULL, wenn der Kunde noch nicht bestellt hat.',
        stichwoerter: ['LEFT JOIN', 'ON']
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Ein CROSS JOIN ohne WHERE-Bedingung erzeugt das kartesische Produkt beider Tabellen.',
        korrekt: true,
        erklaerung: 'Bei CROSS JOIN wird jede Zeile links mit jeder Zeile rechts kombiniert. Bei 100×1000 Zeilen sind das 100.000 Ergebniszeilen.'
      },
      {
        typ: 'lueckentext',
        frage: 'Der _______ JOIN liefert alle Zeilen beider Tabellen – auch wenn auf einer Seite kein Partner existiert.',
        antwort: 'FULL OUTER',
        erklaerung: 'FULL OUTER JOIN = LEFT OUTER JOIN ∪ RIGHT OUTER JOIN. Wird in MySQL nicht nativ unterstützt (dort per UNION).'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die JOIN-Arten dem Ergebnis zu.',
        paare: [
          { begriff: 'INNER JOIN', definition: 'Nur Zeilen mit Match in beiden Tabellen' },
          { begriff: 'LEFT JOIN', definition: 'Alle Zeilen links + Matches rechts (NULL wenn keine)' },
          { begriff: 'RIGHT JOIN', definition: 'Alle Zeilen rechts + Matches links' },
          { begriff: 'FULL JOIN', definition: 'Alle Zeilen beider Seiten' }
        ],
        erklaerung: 'Faustregel: LEFT und RIGHT sind äquivalent wenn man die Tabellen vertauscht.'
      },
      {
        typ: 'freitext',
        frage: 'Tabellen: kunde(id, name), bestellung(id, kunde_id, datum), position(bestell_id, artikel_id, menge), artikel(id, bezeichnung, preis). Liste Name des Kunden, Bestelldatum und Bezeichnung des Artikels für alle Bestellpositionen.',
        musterloesung: `SELECT k.name, b.datum, a.bezeichnung
FROM kunde k
INNER JOIN bestellung b ON k.id = b.kunde_id
INNER JOIN position p ON b.id = p.bestell_id
INNER JOIN artikel a ON p.artikel_id = a.id;`,
        erklaerung: 'Mehrere JOINs werden einfach hintereinander geschrieben. Tabellen-Aliase (k, b, p, a) halten die Abfrage lesbar. Typische AP2-Aufgabe mit 3-4 Tabellen.',
        stichwoerter: ['INNER JOIN', 'ON', 'kunde', 'bestellung', 'position', 'artikel']
      },
      {
        typ: 'freitext',
        frage: 'Tabellen: kunde(id, name), bestellung(id, kunde_id, datum). Finde alle Kunden, die NOCH NIE eine Bestellung aufgegeben haben.',
        musterloesung: `SELECT k.name
FROM kunde k
LEFT JOIN bestellung b ON k.id = b.kunde_id
WHERE b.id IS NULL;`,
        erklaerung: 'Klassischer "Anti-Join"-Trick: LEFT JOIN + IS NULL auf der rechten Seite. Alternativen: NOT EXISTS (moderner) oder NOT IN (Vorsicht bei NULLs).',
        stichwoerter: ['LEFT JOIN', 'IS NULL', 'name']
      },
      {
        typ: 'freitext',
        frage: 'Tabelle mitarbeiter(id, name, vorgesetzter_id). Liste jeden Mitarbeiter zusammen mit dem Namen seines Vorgesetzten; Mitarbeiter ohne Vorgesetzten sollen trotzdem erscheinen.',
        musterloesung: `SELECT m.name AS mitarbeiter, v.name AS vorgesetzter
FROM mitarbeiter m
LEFT JOIN mitarbeiter v ON m.vorgesetzter_id = v.id;`,
        erklaerung: 'Self-Join: dieselbe Tabelle zweimal unter verschiedenen Aliasen (m, v). LEFT JOIN, damit Top-Ebenen-Mitarbeiter nicht aus dem Ergebnis fliegen.',
        stichwoerter: ['LEFT JOIN', 'AS', 'mitarbeiter', 'vorgesetzter_id']
      }
    ]
  },

  // ========== sql-aggregation ==========
  {
    themaId: 'sql-aggregation',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was ist der Unterschied zwischen WHERE und HAVING?',
        optionen: [
          'Kein Unterschied',
          'WHERE filtert vor, HAVING nach der Gruppierung',
          'HAVING ist schneller',
          'WHERE funktioniert nur mit Aggregaten'
        ],
        korrekteAntwort: 1,
        erklaerung: 'WHERE arbeitet auf einzelnen Zeilen (vor GROUP BY). HAVING filtert bereits aggregierte Gruppen – nur dort sind COUNT, SUM etc. erlaubt.'
      },
      {
        typ: 'freitext',
        frage: 'Tabelle bestellung(id, kunde_id, betrag). Wie viele Bestellungen hat jeder Kunde getätigt und wie hoch ist sein Gesamtumsatz?',
        musterloesung: `SELECT kunde_id, COUNT(*) AS anzahl, SUM(betrag) AS gesamt
FROM bestellung
GROUP BY kunde_id;`,
        erklaerung: 'GROUP BY bildet pro Kunde eine Gruppe. COUNT(*) zählt Zeilen, SUM summiert die Beträge. Aliase (AS) verbessern Lesbarkeit.',
        stichwoerter: ['GROUP BY', 'COUNT', 'SUM']
      },
      {
        typ: 'freitext',
        frage: 'Gleiche Tabelle. Zeige nur Kunden, die bereits mehr als 5 Bestellungen haben.',
        musterloesung: `SELECT kunde_id, COUNT(*) AS anzahl
FROM bestellung
GROUP BY kunde_id
HAVING COUNT(*) > 5;`,
        erklaerung: 'HAVING wird immer mit Aggregatfunktionen kombiniert. WHERE COUNT(*) > 5 wäre ein Fehler.',
        stichwoerter: ['GROUP BY', 'HAVING', 'COUNT']
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist der Unterschied zwischen COUNT(*) und COUNT(spalte)?',
        optionen: [
          'Kein Unterschied',
          'COUNT(*) zählt alle Zeilen, COUNT(spalte) nur Zeilen mit NULL',
          'COUNT(*) zählt alle Zeilen, COUNT(spalte) nur Zeilen in denen spalte NICHT NULL ist',
          'COUNT(spalte) ist schneller'
        ],
        korrekteAntwort: 2,
        erklaerung: 'COUNT(spalte) ignoriert NULL-Werte. COUNT(*) zählt jede Zeile unabhängig davon. Für DISTINCT-Werte: COUNT(DISTINCT spalte).'
      },
      {
        typ: 'lueckentext',
        frage: 'Um den Durchschnitt einer Spalte zu berechnen, verwendet man _______(spalte).',
        antwort: 'AVG',
        erklaerung: 'AVG ignoriert NULL-Werte. Formel: AVG(x) = SUM(x) / COUNT(x).'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'GROUP BY muss alle Nicht-Aggregat-Spalten aus der SELECT-Liste enthalten.',
        korrekt: true,
        erklaerung: 'Sonst wäre nicht eindeutig, welcher Wert aus welcher Zeile gezeigt wird. Einige DBs (MySQL im Nicht-Strict-Modus) erlauben es trotzdem – in AP2 aber immer korrekt gruppieren.'
      },
      {
        typ: 'freitext',
        frage: 'Tabelle artikel(id, kategorie, preis). Finde für jede Kategorie den teuersten Artikel-Preis.',
        musterloesung: `SELECT kategorie, MAX(preis) AS max_preis
FROM artikel
GROUP BY kategorie;`,
        erklaerung: 'MAX pro Gruppe. Wenn man auch den Artikelnamen braucht, ist ein Subquery oder Window Function nötig.',
        stichwoerter: ['GROUP BY', 'MAX']
      },
      {
        typ: 'freitext',
        frage: 'Tabelle bestellung(id, kunde_id, datum, betrag). Zeige pro Kunde die Gesamtsumme seiner Bestellungen – aber nur für Kunden mit einer Gesamtsumme über 1000 €, absteigend sortiert.',
        musterloesung: `SELECT kunde_id, SUM(betrag) AS gesamt
FROM bestellung
GROUP BY kunde_id
HAVING SUM(betrag) > 1000
ORDER BY gesamt DESC;`,
        erklaerung: 'HAVING filtert GRUPPEN (nach Aggregation), WHERE filtert einzelne Zeilen (vor Aggregation). Wichtigste AP2-Unterscheidung in diesem Themenbereich.',
        stichwoerter: ['SUM', 'GROUP BY', 'HAVING', 'ORDER BY']
      },
      {
        typ: 'freitext',
        frage: 'Tabelle artikel(id, kategorie, preis). Ermittle die Anzahl der unterschiedlichen Kategorien.',
        musterloesung: `SELECT COUNT(DISTINCT kategorie) AS anzahl_kategorien
FROM artikel;`,
        erklaerung: 'DISTINCT innerhalb von COUNT zählt eindeutige Werte. COUNT(*) oder COUNT(kategorie) zählt dagegen alle (bzw. nicht-NULL-) Zeilen.',
        stichwoerter: ['COUNT', 'DISTINCT', 'kategorie']
      },
      {
        typ: 'freitext',
        frage: 'Tabellen: abteilung(id, name), mitarbeiter(id, name, abteilung_id, gehalt). Gib pro Abteilung den Abteilungsnamen und das Durchschnittsgehalt aus, absteigend sortiert.',
        musterloesung: `SELECT a.name, AVG(m.gehalt) AS durchschnitt
FROM abteilung a
INNER JOIN mitarbeiter m ON a.id = m.abteilung_id
GROUP BY a.id, a.name
ORDER BY durchschnitt DESC;`,
        erklaerung: 'Im GROUP BY alle Nicht-Aggregat-Spalten aufführen. Strikte DBMS (PostgreSQL, Oracle) verlangen das; MySQL ist toleranter, aber das ist schlechter Stil.',
        stichwoerter: ['AVG', 'GROUP BY', 'INNER JOIN', 'ORDER BY', 'DESC']
      }
    ]
  },

  // ========== sql-ddl ==========
  {
    themaId: 'sql-ddl',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche SQL-Kategorie enthält CREATE, ALTER und DROP?',
        optionen: ['DML', 'DDL', 'DCL', 'TCL'],
        korrekteAntwort: 1,
        erklaerung: 'DDL = Data Definition Language (Struktur). DML = Data Manipulation (INSERT/UPDATE/DELETE). DCL = Data Control (GRANT/REVOKE).'
      },
      {
        typ: 'freitext',
        frage: 'Schreibe eine CREATE TABLE-Anweisung für eine Tabelle "kunde" mit: id (Primärschlüssel, auto), name (Text, max 100, nicht leer), email (Text, eindeutig), geburtsdatum (Datum).',
        musterloesung: `CREATE TABLE kunde (
  id         INT PRIMARY KEY AUTO_INCREMENT,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(255) UNIQUE,
  geburtsdatum DATE
);`,
        erklaerung: 'PRIMARY KEY ist automatisch NOT NULL und UNIQUE. AUTO_INCREMENT ist MySQL; in PostgreSQL SERIAL, in Oracle SEQUENCE.',
        stichwoerter: ['CREATE TABLE', 'PRIMARY KEY', 'NOT NULL', 'UNIQUE', 'VARCHAR']
      },
      {
        typ: 'freitext',
        frage: 'Füge der Tabelle mitarbeiter eine neue Spalte "telefon" vom Typ VARCHAR(20) hinzu.',
        musterloesung: `ALTER TABLE mitarbeiter
ADD COLUMN telefon VARCHAR(20);`,
        erklaerung: 'ALTER TABLE ändert die Struktur einer bestehenden Tabelle. Weitere Varianten: DROP COLUMN, MODIFY, RENAME.',
        stichwoerter: ['ALTER TABLE', 'ADD', 'VARCHAR']
      },
      {
        typ: 'freitext',
        frage: 'Erhöhe in der Tabelle mitarbeiter das Gehalt aller Mitarbeiter der Abteilung 3 um 5 Prozent.',
        musterloesung: `UPDATE mitarbeiter
SET gehalt = gehalt * 1.05
WHERE abteilung_id = 3;`,
        erklaerung: 'UPDATE ohne WHERE ändert ALLE Zeilen – gefährlich! In AP2 immer die WHERE-Bedingung prüfen.',
        stichwoerter: ['UPDATE', 'SET', 'WHERE']
      },
      {
        typ: 'wahr-falsch',
        aussage: 'DELETE FROM kunde löscht die Tabelle.',
        korrekt: false,
        erklaerung: 'DELETE löscht Zeilen, nicht die Tabellen-Struktur. Für die Tabelle selbst: DROP TABLE kunde. Um alle Zeilen schnell zu löschen: TRUNCATE TABLE kunde.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was bewirkt ON DELETE CASCADE bei einem Fremdschlüssel?',
        optionen: [
          'Verhindert das Löschen',
          'Setzt den Fremdschlüssel auf NULL',
          'Löscht abhängige Zeilen automatisch mit',
          'Wirft einen Fehler beim Löschen'
        ],
        korrekteAntwort: 2,
        erklaerung: 'CASCADE "pflanzt sich fort": Löscht man den Kunden, werden auch alle seine Bestellungen gelöscht. Alternativen: SET NULL, RESTRICT (Default), NO ACTION.'
      },
      {
        typ: 'freitext',
        frage: 'Schreibe ein INSERT um einen neuen Kunden mit name="Anna Müller" und email="anna@test.de" einzufügen (id wird automatisch vergeben).',
        musterloesung: `INSERT INTO kunde (name, email)
VALUES ('Anna Müller', 'anna@test.de');`,
        erklaerung: 'Spaltenliste sollte angegeben werden – sonst muss die Reihenfolge exakt der Tabellendefinition entsprechen. Für Mehrfach-Insert: VALUES (...), (...), (...).',
        stichwoerter: ['INSERT INTO', 'VALUES']
      },
      {
        typ: 'freitext',
        frage: 'Erstelle die Tabelle "bestellung" mit: id (PK, auto), kunde_id (Fremdschlüssel zu kunde.id), datum (Datum, Default = heute), status (Text max. 20, Default = "offen").',
        musterloesung: `CREATE TABLE bestellung (
  id       INT PRIMARY KEY AUTO_INCREMENT,
  kunde_id INT NOT NULL,
  datum    DATE DEFAULT CURRENT_DATE,
  status   VARCHAR(20) DEFAULT 'offen',
  FOREIGN KEY (kunde_id) REFERENCES kunde(id)
);`,
        erklaerung: 'FOREIGN KEY deklariert die Referenz. Ohne ON DELETE/ON UPDATE greift die Default-Regel RESTRICT: Löschen eines Kunden, zu dem Bestellungen existieren, wird abgelehnt.',
        stichwoerter: ['CREATE TABLE', 'FOREIGN KEY', 'REFERENCES', 'DEFAULT', 'VARCHAR']
      },
      {
        typ: 'freitext',
        frage: 'Tabelle bestellung(id, status, datum). Lösche alle Bestellungen mit Status "storniert", die älter als ein Jahr sind.',
        musterloesung: `DELETE FROM bestellung
WHERE status = 'storniert'
  AND datum < CURRENT_DATE - INTERVAL 1 YEAR;`,
        erklaerung: 'Datums-Arithmetik ist DB-spezifisch (MySQL: DATE_SUB(NOW(), INTERVAL 1 YEAR); PostgreSQL: NOW() - INTERVAL \'1 year\'). Prinzip in AP2: WHERE-Bedingung genau prüfen – ein DELETE ohne WHERE löscht alles.',
        stichwoerter: ['DELETE', 'FROM', 'WHERE', 'status', 'datum']
      }
    ]
  },

  // ========== sql-er-modell ==========
  {
    themaId: 'sql-er-modell',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was stellt eine Raute in einem ER-Diagramm nach Chen-Notation dar?',
        optionen: ['Entität', 'Attribut', 'Beziehung', 'Schlüssel'],
        korrekteAntwort: 2,
        erklaerung: 'Chen: Rechteck = Entität, Ellipse = Attribut, Raute = Beziehung, unterstrichenes Attribut = Primärschlüssel.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie wird eine n:m-Beziehung im relationalen Modell umgesetzt?',
        optionen: [
          'Fremdschlüssel in einer der beiden Tabellen',
          'Fremdschlüssel in beiden Tabellen',
          'Separate Verknüpfungstabelle mit beiden Fremdschlüsseln',
          'Gar nicht – muss in 1:n umgewandelt werden'
        ],
        korrekteAntwort: 2,
        erklaerung: 'n:m wird über eine Zwischentabelle (auch "Assoziationstabelle") aufgelöst. Die beiden FKs bilden dort meist zusammen den zusammengesetzten Primärschlüssel.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Eine Kardinalität (1,n) bedeutet: mindestens eine, höchstens beliebig viele.',
        korrekt: true,
        erklaerung: 'Min-Max-Notation: (min, max). (1,n) = mindestens 1, unbegrenzt. (0,1) = optional und höchstens 1.'
      },
      {
        typ: 'freitext',
        frage: 'Beschreibe, wie eine n:m-Beziehung "Student belegt Kurs" in 3 Tabellen umgesetzt wird (nur Tabellennamen + Schlüssel).',
        musterloesung: `Student(student_id PK, name, ...)
Kurs(kurs_id PK, titel, ...)
Belegung(student_id FK, kurs_id FK, PRIMARY KEY(student_id, kurs_id), note)

Die Belegung-Tabelle löst die n:m-Beziehung auf.
Zusätzliche Beziehungsattribute (z.B. note, datum) kommen in die Verknüpfungstabelle.`,
        erklaerung: 'Wichtig: zusammengesetzter Primärschlüssel aus beiden Fremdschlüsseln. Beziehungsattribute gehören in die Zwischentabelle.',
        stichwoerter: ['Belegung', 'student_id', 'kurs_id', 'PRIMARY KEY', 'FK']
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die ER-Elemente der Chen-Notation zu.',
        paare: [
          { begriff: 'Entität', definition: 'Rechteck' },
          { begriff: 'Attribut', definition: 'Ellipse' },
          { begriff: 'Beziehung', definition: 'Raute' },
          { begriff: 'Primärschlüssel', definition: 'Unterstrichenes Attribut' }
        ],
        erklaerung: 'Alternative Notationen: Krähenfuß (Crow\'s Foot), UML-Klassendiagramm. AP2 prüft oft Chen oder vereinfachte Min-Max-Notation.'
      },
      {
        typ: 'lueckentext',
        frage: 'Ein Attribut, das eine Entität eindeutig identifiziert, nennt man _______.',
        antwort: 'Primärschlüssel',
        erklaerung: 'Auch "Primary Key" oder kurz PK. Er muss eindeutig und nicht leer (NOT NULL) sein. Ein zusammengesetzter Primärschlüssel besteht aus mehreren Spalten.'
      },
      {
        typ: 'freitext',
        frage: 'Setze folgende 1:n-Beziehung als CREATE TABLE um: Eine Abteilung hat mehrere Mitarbeiter. Jeder Mitarbeiter gehört zu genau einer Abteilung und hat ein Gehalt.',
        musterloesung: `CREATE TABLE abteilung (
  id          INT PRIMARY KEY AUTO_INCREMENT,
  bezeichnung VARCHAR(100) NOT NULL
);

CREATE TABLE mitarbeiter (
  id           INT PRIMARY KEY AUTO_INCREMENT,
  name         VARCHAR(100) NOT NULL,
  gehalt       DECIMAL(10,2),
  abteilung_id INT NOT NULL,
  FOREIGN KEY (abteilung_id) REFERENCES abteilung(id)
);`,
        erklaerung: '1:n wird durch EINEN Fremdschlüssel auf der n-Seite umgesetzt (hier abteilung_id in mitarbeiter). Keine Zwischentabelle nötig – nur bei n:m.',
        stichwoerter: ['CREATE TABLE', 'FOREIGN KEY', 'REFERENCES', 'abteilung_id']
      },
      {
        typ: 'freitext',
        frage: 'Skizziere das ER-Modell für eine Bibliothek: Leser können Bücher ausleihen (mit Ausleih- und Rückgabedatum). Welche Entitäten, welche Beziehungen, welche Kardinalitäten?',
        musterloesung: `Entitäten:
- Buch (buch_id, titel, autor, isbn)
- Leser (leser_id, name, adresse)

Beziehung "Ausleihe" zwischen Buch und Leser: n:m
  (ein Buch kann im Lauf der Zeit mehrfach ausgeliehen werden,
   ein Leser kann mehrere Bücher ausleihen)

Relationale Umsetzung:
  Ausleihe(leser_id FK, buch_id FK, ausleihdatum, rueckgabedatum,
           PRIMARY KEY(leser_id, buch_id, ausleihdatum))

Die Beziehungsattribute (ausleihdatum, rueckgabedatum) gehören in die Zwischentabelle.
ausleihdatum muss in den PK, damit derselbe Leser dasselbe Buch später erneut ausleihen darf.`,
        erklaerung: 'Klassische AP2-Aufgabe. Wer ausleihdatum nicht in den PK aufnimmt, erzeugt einen Fehler bei wiederholter Ausleihe.',
        stichwoerter: ['Entität', 'Beziehung', 'n:m', 'Ausleihe', 'FK', 'PRIMARY KEY']
      }
    ]
  },

  // ========== sql-normalisierung ==========
  {
    themaId: 'sql-normalisierung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche Bedingung gilt für die 1. Normalform (1NF)?',
        optionen: [
          'Alle Attribute sind atomar (keine Mehrfachwerte)',
          'Keine funktionalen Abhängigkeiten',
          'Der Primärschlüssel besteht aus einer Spalte',
          'Alle Werte sind Zahlen'
        ],
        korrekteAntwort: 0,
        erklaerung: 'In 1NF darf keine Zelle mehrere Werte enthalten (z.B. "Telefon: 123, 456" ist verboten). Mehrfachwerte werden in eigene Zeilen/Tabellen ausgelagert.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wann ist eine Tabelle in 2NF?',
        optionen: [
          'Sie ist in 1NF und hat keine NULL-Werte',
          'Sie ist in 1NF und jedes Nicht-Schlüsselattribut hängt vom GESAMTEN Primärschlüssel ab',
          'Sie ist in 1NF und alle Attribute sind Zahlen',
          'Sie ist in 3NF'
        ],
        korrekteAntwort: 1,
        erklaerung: '2NF verlangt: bei zusammengesetztem Primärschlüssel hängen alle Nicht-Schlüssel-Attribute vom vollen Schlüssel ab. Bei einspaltigem PK ist 2NF automatisch erfüllt (wenn 1NF gilt).'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Eine Tabelle in 3NF ist automatisch auch in 1NF und 2NF.',
        korrekt: true,
        erklaerung: 'Die Normalformen bauen aufeinander auf: 3NF ⊃ 2NF ⊃ 1NF. Umgekehrt gilt das nicht.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Regel verletzt die 3NF?',
        optionen: [
          'Mehrfachwerte in einer Zelle',
          'Transitive Abhängigkeit: Nicht-Schlüssel → Nicht-Schlüssel',
          'Zusammengesetzter Primärschlüssel',
          'Fremdschlüssel'
        ],
        korrekteAntwort: 1,
        erklaerung: '3NF verbietet transitive Abhängigkeiten. Beispiel: mitarbeiter(id, name, plz, ort) – plz → ort ist transitiv. Lösung: Tabelle ort(plz, ort) auslagern.'
      },
      {
        typ: 'freitext',
        frage: 'Gegeben: bestellung(bestell_nr, kunden_nr, kunden_name, artikel_nr, artikel_bez, menge). Bringe diese Tabelle in die 3. Normalform (nur Tabellen + Schlüssel, keine Werte).',
        musterloesung: `1NF: bereits atomar (OK).

2NF (bei PK=(bestell_nr, artikel_nr)):
  artikel_bez hängt nur von artikel_nr ab → auslagern.
  kunden_nr und kunden_name hängen nur von bestell_nr ab → auslagern.

3NF:
  Bestellung(bestell_nr PK, kunden_nr FK)
  Bestellposition(bestell_nr FK, artikel_nr FK, menge, PK(bestell_nr, artikel_nr))
  Kunde(kunden_nr PK, kunden_name)
  Artikel(artikel_nr PK, artikel_bez)`,
        erklaerung: 'Klassisches AP2-Muster: eine flache Bestellungs-Tabelle in 4 Tabellen auflösen. Wichtig: FKs richtig setzen, keine Redundanz.',
        stichwoerter: ['Bestellung', 'Bestellposition', 'Kunde', 'Artikel', 'PRIMARY KEY']
      },
      {
        typ: 'lueckentext',
        frage: 'Eine _______ Abhängigkeit liegt vor, wenn A → B und B → C gilt (und damit indirekt A → C).',
        antwort: 'transitive',
        erklaerung: 'Diese transitive Abhängigkeit verletzt die 3NF und führt zu Redundanz, wenn sie nicht aufgelöst wird.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die drei Datenbank-Anomalien ihrer Auswirkung zu (AP2 Winter 2025).',
        paare: [
          { begriff: 'Änderungsanomalie', definition: 'Bei Änderung eines Attributs müssen evtl. mehrere Datensätze angepasst werden' },
          { begriff: 'Einfügeanomalie', definition: 'Beim Einfügen neuer Daten entstehen leere/NULL-Felder oder man kann gar nicht einfügen' },
          { begriff: 'Löschanomalie', definition: 'Beim Löschen gehen auch andere, nur dort gespeicherte Informationen verloren' }
        ],
        erklaerung: 'Die drei klassischen Anomalien entstehen durch Redundanz in nicht-normalisierten Tabellen. Normalisierung (2NF/3NF) löst sie auf.'
      },
      {
        typ: 'freitext',
        frage: 'Erkläre den Begriff "Redundanz" im Datenbank-Kontext und gib ein konkretes Beispiel.',
        musterloesung: `Redundanz = mehrfache Abspeicherung derselben Information in einer Datenbank.

Beispiel: In einer Tabelle bestellung sind Name, Adresse und Telefon des Kunden in JEDER Bestellzeile gespeichert – obwohl der Kunde eindeutig identifizierbar ist.

Folgen:
- Speicherplatz wird verschwendet
- Inkonsistenzen möglich (Adresse in einer Zeile aktualisiert, in anderen nicht)
- Anomalien (Änderung/Einfügen/Löschen)

Lösung: Normalisierung – Kundendaten in eine eigene Tabelle auslagern, nur Kunden-ID referenzieren.`,
        erklaerung: 'Wortwörtlich AP2 Winter 2025, Aufgabe 4a. Redundanz ist das Grundproblem, das Normalisierung löst.',
        stichwoerter: ['mehrfach', 'Information', 'Normalisierung', 'Inkonsistenz']
      },
      {
        typ: 'freitext',
        frage: 'Gegeben: rechnung(rechnung_nr, kunde_id, kunde_name, kunde_plz, kunde_ort, datum, betrag). Welche Normalform liegt vor, welche Regel wird verletzt, und wie korrigierst du die Struktur (3NF)?',
        musterloesung: `Liegt in 2NF vor (einspaltiger PK rechnung_nr, 1NF erfüllt).

3NF ist verletzt – transitive Abhängigkeiten:
  rechnung_nr → kunde_id → kunde_name, kunde_plz
  kunde_plz → kunde_ort

Korrektur (3NF):
  Rechnung(rechnung_nr PK, kunde_id FK, datum, betrag)
  Kunde(kunde_id PK, kunde_name, kunde_plz FK)
  Ort(kunde_plz PK, kunde_ort)`,
        erklaerung: 'plz → ort ist der klassische AP2-Stolperstein. Zwei Auslagerungen nötig: Kunde und Ort als eigenständige Tabellen.',
        stichwoerter: ['3NF', 'transitiv', 'kunde', 'plz', 'ort', 'Rechnung']
      },
      {
        typ: 'freitext',
        frage: 'Erkläre den Begriff "Denormalisierung" und nenne einen Grund, warum sie trotz Normalformen sinnvoll sein kann.',
        musterloesung: `Denormalisierung = bewusste Rückkehr von einer höheren Normalform zu einer niedrigeren (z.B. 3NF → 2NF).

Konkret: Redundanz wird absichtlich wieder eingeführt, meist um Lese-Performance zu verbessern (weniger JOINs nötig).

Gründe:
- Komplexe JOINs werden bei sehr großen Tabellen langsam
- Analyse-/Reporting-Datenbanken (Data Warehouse) brauchen schnelle Lesezugriffe
- Caching von berechneten Werten (z.B. Gesamtbetrag in der Bestellung)

Nachteil: Inkonsistenz-Risiko steigt, Updates werden aufwendiger (dieselbe Information muss an mehreren Stellen gepflegt werden).`,
        erklaerung: 'Normalisierung optimiert auf Konsistenz, Denormalisierung auf Lese-Performance. In OLTP (tägliches Geschäft) wird normalisiert, in OLAP (Analyse/Reporting) oft denormalisiert.',
        stichwoerter: ['Redundanz', 'Performance', 'JOIN', 'Lese', 'Inkonsistenz', 'Data Warehouse']
      }
    ]
  }
];
