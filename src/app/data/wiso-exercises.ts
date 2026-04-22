import { UebungsSet } from '../models/app.models';

// WiSo-Übungen basieren auf IHK AP2 WiSo Sommer 2019 – Winter 2024/25 (ZPA Nord-West).
// Format: 30 Aufgaben, 60 Min., 100 Punkte.
// Aufgabentypen: ~60% Single-Choice (1 aus 5), ~10% Zuordnung, ~5% Freitext-Rechenaufgabe.
// Wahr-Falsch kommt im echten WiSo-Bogen praktisch nicht vor → hier entfernt.

export const WISO_UEBUNGEN: UebungsSet[] = [

  // ========= wiso-berufsausbildung =========
  {
    themaId: 'wiso-berufsausbildung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Aussagen zur Probezeit in der Berufsausbildung trifft zu?',
        optionen: [
          'Die Probezeit beträgt mindestens 3 Monate und maximal 6 Monate.',
          'In der Probezeit kann nur der Ausbildungsbetrieb das Ausbildungsverhältnis kündigen.',
          'Die Probezeit beträgt mindestens 1 Monat und maximal 4 Monate.',
          'In der Probezeit ist eine Kündigung nur mit Angabe von Gründen möglich.',
          'Die Probezeit ist im Arbeitszeitgesetz (ArbZG) geregelt.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 20 BBiG: Probezeit mindestens 1 Monat, maximal 4 Monate. Beide Seiten können in der Probezeit jederzeit, ohne Frist und ohne Angabe von Gründen kündigen – aber schriftlich.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie viele Werktage Urlaub stehen einem 17-jährigen Auszubildenden laut Jugendarbeitsschutzgesetz (JArbSchG) mindestens zu?',
        optionen: [
          '20 Werktage',
          '23 Werktage',
          '24 Werktage',
          '25 Werktage',
          '30 Werktage'
        ],
        korrekteAntwort: 3,
        erklaerung: '§ 19 JArbSchG: Wer zu Beginn des Kalenderjahres noch nicht 17 Jahre alt ist → 27 Werktage; wer noch nicht 18 Jahre alt ist → 25 Werktage. Für einen 17-Jährigen gelten 25 Werktage.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Angaben muss zwingend im Berufsausbildungsvertrag enthalten sein?',
        optionen: [
          'Die vereinbarte Gleitzeitregelung',
          'Das Recht des Auszubildenden auf Homeoffice',
          'Die Dauer der täglichen Ausbildungszeit',
          'Die private Handynummer des Ausbilders',
          'Die monatliche Fahrtkostenerstattung'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 11 BBiG: Pflichtinhalte u. a.: Art und Ziel der Ausbildung, Beginn und Dauer, tägliche Ausbildungszeit, Probezeit, Vergütung, Urlaub. Gleitzeit und Homeoffice sind keine Pflichtangaben.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches der folgenden Sachverhalte ist eine berufliche Fortbildung?',
        optionen: [
          'Max nimmt nach seiner Kündigung als Fachinformatiker an einer Umschulung zum Buchhalter teil.',
          'Lena schließt nach ihrer Ausbildung als Kauffrau im E-Commerce einen Fernlehrgang „Business English" ab.',
          'Tim wechselt von der Fachinformatiker-Ausbildung in eine Ausbildung zum Kaufmann für IT-System-Management.',
          'Selin absolviert nach dem Hauptschulabschluss eine Ausbildung zur Köchin.',
          'Kai beendet sein Studium und beginnt eine Ausbildung als Fachinformatiker.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Fortbildung vertieft oder erweitert Kenntnisse im bestehenden Beruf (z. B. Sprachkurs nach der Ausbildung). Umschulung qualifiziert für einen neuen Beruf.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was beschreibt den Europass korrekt?',
        optionen: [
          'Ein europäisches Reisedokument für Auszubildende mit Auslandsaufenthalt.',
          'Ein kostenpflichtiges Zertifikat der IHK für internationale Abschlüsse.',
          'Ein staatlich vorgeschriebenes Berichtsheft für Auszubildende.',
          'Ein kostenfreies EU-Instrument zur einheitlichen Darstellung von Qualifikationen und Kompetenzen.',
          'Ein Arbeitsvertrag nach EU-Mindeststandard.'
        ],
        korrekteAntwort: 3,
        erklaerung: 'Europass: kostenfreies EU-Dokumentationsset (Lebenslauf, Sprachenpass, Zeugniserläuterungen), das Qualifikationen europaweit verständlich macht. Nicht verpflichtend.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ein Auszubildender möchte sein Ausbildungsverhältnis nach der Probezeit kündigen. Welche Aussage trifft zu?',
        optionen: [
          'Er kann jederzeit fristlos kündigen, ohne einen Grund zu nennen.',
          'Er kann mit einer Frist von 4 Wochen kündigen, wenn er die Ausbildung aufgeben möchte.',
          'Er benötigt die Zustimmung des Betriebsrats.',
          'Eine Kündigung ist nach der Probezeit grundsätzlich nicht mehr möglich.',
          'Er muss die Kündigung mindestens 3 Monate vorher schriftlich ankündigen.'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 22 Abs. 2 BBiG: Nach der Probezeit kann der Auszubildende mit einer Frist von 4 Wochen kündigen, wenn er die Ausbildung aufgeben oder eine andere Ausbildung beginnen möchte. Schriftform ist vorgeschrieben.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist der Unterschied zwischen einem einfachen und einem qualifizierten Ausbildungszeugnis?',
        optionen: [
          'Das einfache Zeugnis wird nur auf Antrag ausgestellt, das qualifizierte immer.',
          'Das qualifizierte Zeugnis enthält zusätzlich eine Beurteilung von Leistung und Verhalten.',
          'Das einfache Zeugnis darf nur digital ausgestellt werden.',
          'Das qualifizierte Zeugnis wird ausschließlich von der IHK ausgestellt.',
          'Das einfache Zeugnis enthält mehr Details als das qualifizierte.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Einfaches Zeugnis: nur Daten, Ausbildungsberuf und Dauer. Qualifiziertes Zeugnis: enthält zusätzlich eine Beurteilung von Führung und Leistung. Auszubildende haben Anspruch auf ein Zeugnis, auf Wunsch auf ein qualifiziertes.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Voraussetzungen muss ein Ausbilder nach BBiG erfüllen?',
        optionen: [
          'Er muss mindestens 30 Jahre alt und seit 5 Jahren im Betrieb tätig sein.',
          'Er braucht lediglich den Berufsabschluss im Ausbildungsberuf.',
          'Er muss persönlich und fachlich geeignet sein, i. d. R. nachgewiesen durch die AEVO-Prüfung.',
          'Die Eignung wird ausschließlich durch die Berufsschule geprüft.',
          'Er muss einen staatlich anerkannten Hochschulabschluss besitzen.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§§ 28–30 BBiG: Ausbilder müssen persönlich (Zuverlässigkeit, keine Vorstrafen) und fachlich (AdA-Schein nach AEVO) geeignet sein. Berufsabschluss allein reicht nicht.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Begriffe dem jeweiligen Sachverhalt zu.',
        paare: [
          { begriff: 'Fortbildung', definition: 'Kauffrau nimmt nach Ausbildungsende an Kurs „Projektmanagement-Zertifizierung" teil' },
          { begriff: 'Umschulung', definition: 'Fachinformatiker wird nach Kündigung zum Kaufmann für Versicherungen ausgebildet' },
          { begriff: 'Berufsausbildung', definition: 'Abiturient beginnt 3-jährige Ausbildung zum Kaufmann im E-Commerce' },
          { begriff: 'Probezeit', definition: 'Erste 3 Monate des Ausbildungsverhältnisses, in denen beide Seiten ohne Frist kündigen dürfen' }
        ],
        erklaerung: 'Fortbildung = gleicher Beruf, neue Kompetenzen. Umschulung = neuer Beruf. Berufsausbildung = Erstausbildung. Probezeit = § 20 BBiG, max. 4 Monate.'
      }
    ]
  },

  // ========= wiso-arbeitsrecht =========
  {
    themaId: 'wiso-arbeitsrecht',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Aussagen zum Arbeitszeitgesetz (ArbZG) trifft zu?',
        optionen: [
          'Die werktägliche Arbeitszeit darf 8 Stunden niemals überschreiten.',
          'Eine tägliche Arbeitszeit von 10 Stunden ist zulässig, wenn innerhalb von 6 Monaten der Durchschnitt von 8 Stunden nicht überschritten wird.',
          'Arbeitnehmer dürfen täglich maximal 12 Stunden arbeiten, wenn sie dafür eine bezahlte Pause erhalten.',
          'Das ArbZG gilt gleichermaßen für Auszubildende wie für Vollzeitbeschäftigte ab 18 Jahren.',
          'Die Regelarbeitszeit von 8 Stunden kann durch Betriebsvereinbarung auf 11 Stunden erhöht werden.'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 3 ArbZG: Grundregel 8 Stunden/Werktag; Verlängerung auf bis zu 10 Stunden zulässig, wenn der Ausgleich innerhalb von 6 Kalendermonaten/24 Wochen erfolgt. Für Jugendliche gilt das strengere JArbSchG.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ein Arbeitnehmer erkrankt während seines Erholungsurlaubs und legt dem Arbeitgeber ein ärztliches Attest vor. Was gilt nach dem Bundesurlaubsgesetz (BUrlG)?',
        optionen: [
          'Die Urlaubstage verfallen, da der Urlaub bereits begonnen hatte.',
          'Der Arbeitnehmer erhält die nachgewiesenen Krankheitstage auf seinen Jahresurlaub gutgeschrieben.',
          'Der Arbeitnehmer muss den Urlaub sofort antreten, sobald er wieder gesund ist.',
          'Der Arbeitgeber kann verlangen, dass der Urlaub neu beantragt wird.',
          'Die Krankheitstage werden nur gutgeschrieben, wenn die Erkrankung mindestens 3 Tage dauert.'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 9 BUrlG: Krankheitstage, die durch ärztliches Zeugnis nachgewiesen werden, werden nicht auf den Jahresurlaub angerechnet. Es genügt ein Attest; eine Mindestdauer ist nicht vorgeschrieben.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Fragen darf ein Arbeitgeber im Vorstellungsgespräch NICHT stellen?',
        optionen: [
          'Welche Erfahrungen haben Sie mit agiler Softwareentwicklung?',
          'Sind Sie bereit, gelegentlich Überstunden zu leisten?',
          'Planen Sie in den nächsten zwei Jahren eine Schwangerschaft?',
          'Wann könnten Sie frühestens die Stelle antreten?',
          'Haben Sie Erfahrung mit dem genannten Technologie-Stack?'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Fragen nach Schwangerschaft, Familienplanung, Religion oder Gewerkschaftszugehörigkeit sind unzulässig (AGG). Bei unzulässigen Fragen hat der Bewerber das „Recht zur Lüge".'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Aussagen zum Kündigungsschutzgesetz (KSchG) ist korrekt?',
        optionen: [
          'Der KSchG gilt ab dem ersten Beschäftigungstag für alle Arbeitnehmer.',
          'Arbeitnehmer können innerhalb von 3 Monaten nach Kündigung Klage beim Arbeitsgericht einreichen.',
          'Der KSchG gilt nur für Arbeitnehmer in Betrieben mit mehr als 10 Beschäftigten nach mehr als 6 Monaten Betriebszugehörigkeit.',
          'Betriebsbedingte Kündigungen sind nach dem KSchG grundsätzlich unzulässig.',
          'Während der Probezeit gilt der KSchG uneingeschränkt.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 23 KSchG: Gilt in Betrieben mit mehr als 10 AN. § 1 KSchG: Kündigung muss sozial gerechtfertigt sein. § 4 KSchG: Klage innerhalb von 3 Wochen (nicht 3 Monaten!) nach Zugang der Kündigung.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ein Arbeitnehmer soll eine verhaltensbedingte Kündigung erhalten. Welcher Sachverhalt rechtfertigt diese Art der Kündigung?',
        optionen: [
          'Schließung des Standorts, an dem der Arbeitnehmer tätig ist.',
          'Der Arbeitnehmer ist seit 18 Monaten dauerhaft krank und kann seine Arbeit nicht mehr ausüben.',
          'Der Arbeitnehmer stiehlt wiederholt Firmeneigentum, obwohl er bereits abgemahnt wurde.',
          'Das Unternehmen führt eine neue Technologie ein, für die der Arbeitnehmer nicht qualifiziert ist.',
          'Der Arbeitnehmer hat Insolvenz angemeldet.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Verhaltensbedingte Kündigung: schuldhaftes Verhalten des AN (z. B. Diebstahl, wiederholte Arbeitsverweigerung). Standortschließung = betriebsbedingt, dauerhafte Krankheit = personenbedingt.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Schutzfrist gilt für Mütter nach der Entbindung gemäß Mutterschutzgesetz (MuSchG)?',
        optionen: [
          '4 Wochen nach der Entbindung.',
          '6 Wochen nach der Entbindung.',
          '8 Wochen nach der Entbindung (bei Früh- oder Mehrlingsgeburt: 12 Wochen).',
          '12 Wochen nach der Entbindung in jedem Fall.',
          '6 Monate nach der Entbindung.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 3 Abs. 2 MuSchG: 8 Wochen Beschäftigungsverbot nach der Entbindung (Schutzfrist). Bei Früh- und Mehrlingsgeburt: 12 Wochen. Davor: 6 Wochen vor der Entbindung.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Eine Bürokauffrau arbeitet auf Basis eines befristeten Arbeitsvertrags. Was gilt zum Ende des Vertrags?',
        optionen: [
          'Das Arbeitsverhältnis endet automatisch mit Ablauf der Frist, ohne dass eine Kündigung ausgesprochen werden muss.',
          'Der Arbeitgeber muss 4 Wochen vor Fristablauf schriftlich kündigen.',
          'Nach 6-monatiger Laufzeit wandelt sich der Vertrag automatisch in ein unbefristetes Verhältnis um.',
          'Die Arbeitnehmerin hat Anspruch auf eine Abfindung in Höhe eines Monatsgehalts.',
          'Der Betriebsrat muss der Beendigung zustimmen.'
        ],
        korrekteAntwort: 0,
        erklaerung: '§ 15 TzBfG: Befristete Arbeitsverträge enden automatisch mit Fristablauf – ohne Kündigung. Voraussetzung: Schriftform. Ohne Sachgrund max. 2 Jahre zulässig (§ 14 Abs. 2 TzBfG).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Das Allgemeine Gleichbehandlungsgesetz (AGG) verbietet Benachteiligungen aufgrund bestimmter Merkmale. Welche der folgenden Merkmale nennt das AGG?',
        optionen: [
          'Schulabschluss, Wohnort und Gehalt.',
          'Rasse/ethnische Herkunft, Geschlecht, Religion, Behinderung, Alter und sexuelle Identität.',
          'Aussehen, Schuhgröße und Freizeitverhalten.',
          'Nationalität, Berufsstand und Familienstand.',
          'Einkommen, Vermögen und politische Überzeugung.'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 1 AGG: Benachteiligungen wegen der ethnischen Herkunft, des Geschlechts, der Religion oder Weltanschauung, einer Behinderung, des Alters oder der sexuellen Identität sind verboten.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Aussage zum Günstigkeitsprinzip im Arbeitsrecht trifft zu?',
        optionen: [
          'Tarifvertragliche Regelungen dürfen durch Einzelverträge niemals verändert werden.',
          'Einzelvertragliche Regelungen, die für den Arbeitnehmer günstiger sind als der Tarifvertrag, sind zulässig.',
          'Der Betriebsrat kann das Günstigkeitsprinzip außer Kraft setzen.',
          'Das Günstigkeitsprinzip gilt nur für Vollzeitbeschäftigte.',
          'Günstigere Regelungen bedürfen stets der Zustimmung der Gewerkschaft.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Günstigkeitsprinzip: Individualvertragliche Regelungen, die für den AN besser sind als der Tarifvertrag, sind wirksam (z. B. höheres Gehalt, mehr Urlaub). Schlechtere Regelungen sind dagegen unwirksam.'
      },
      {
        typ: 'freitext',
        frage: 'Eine Auszubildende wird am 15. März eingestellt. Die Probezeit beträgt die gesetzlich vorgeschriebene Mindestdauer. An welchem Tag endet die Probezeit?',
        musterloesung: '15. April (nach 1 Monat Probezeit). Die gesetzliche Mindestprobezeit laut § 20 BBiG beträgt 1 Monat.',
        erklaerung: '§ 20 BBiG: Probezeit mindestens 1 Monat. Beginn 15. März → Ende nach einem Monat am 15. April.',
        stichwoerter: ['15. April', 'April', '1 Monat']
      }
    ]
  },

  // ========= wiso-sozialversicherung =========
  {
    themaId: 'wiso-sozialversicherung',
    uebungen: [
      {
        typ: 'zuordnung',
        frage: 'Ordne den Sachverhalt dem zuständigen Sozialversicherungsträger zu.',
        paare: [
          { begriff: 'Mitarbeiter erkrankt an Grippe und geht zum Arzt', definition: 'Gesetzliche Krankenversicherung (GKV)' },
          { begriff: 'Mitarbeiterin stürzt auf dem direkten Weg zur Arbeit', definition: 'Gesetzliche Unfallversicherung / Berufsgenossenschaft' },
          { begriff: 'Mitarbeiter wird nach Kündigung arbeitslos', definition: 'Bundesagentur für Arbeit (Arbeitslosenversicherung)' },
          { begriff: 'Mitarbeiterin tritt in den Ruhestand', definition: 'Deutsche Rentenversicherung (GRV)' },
          { begriff: 'Großvater wird pflegebedürftig und zieht ins Pflegeheim', definition: 'Soziale Pflegeversicherung (GPV)' }
        ],
        erklaerung: 'Merkhilfe: KRAP+U (Kranken, Renten, Arbeitslosen, Pflege, Unfall). Wegeunfall = direkter Weg zur Arbeit → GUV (Berufsgenossenschaft), nicht GKV.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wer trägt die Beiträge zur gesetzlichen Unfallversicherung?',
        optionen: [
          'Arbeitnehmer und Arbeitgeber je zur Hälfte.',
          'Ausschließlich der Arbeitnehmer.',
          'Ausschließlich der Arbeitgeber.',
          'Der Staat übernimmt zwei Drittel, der Arbeitgeber ein Drittel.',
          'Der Arbeitnehmer zahlt den Grundbeitrag, der Arbeitgeber den Zusatzbeitrag.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Die gesetzliche Unfallversicherung wird zu 100 % vom Arbeitgeber getragen. Träger sind die Berufsgenossenschaften. Sie deckt Arbeitsunfälle, Wegeunfälle und Berufskrankheiten ab.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ein Mitarbeiter ist nach einem Freizeitunfall im Wochenende drei Wochen arbeitsunfähig. Wer zahlt die Heilbehandlungskosten?',
        optionen: [
          'Die Berufsgenossenschaft, da jeder Unfall versichert ist.',
          'Der Arbeitgeber, da er Fürsorgepflicht hat.',
          'Die gesetzliche Krankenversicherung, da es sich um einen privaten Unfall handelt.',
          'Die Arbeitslosenversicherung, da der Mitarbeiter ausfällt.',
          'Das Sozialamt, bei privaten Unfällen am Wochenende.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Die gesetzliche Unfallversicherung (Berufsgenossenschaft) deckt nur Arbeitsunfälle, Wegeunfälle (direkter Weg) und Berufskrankheiten. Ein privater Freizeitunfall ist Sache der GKV.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie lange zahlt der Arbeitgeber bei Erkrankung des Arbeitnehmers Entgelt fort, bevor die Krankenkasse das Krankengeld übernimmt?',
        optionen: [
          '2 Wochen',
          '4 Wochen',
          '6 Wochen',
          '8 Wochen',
          '12 Wochen'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 3 EFZG: Arbeitgeber zahlt 6 Wochen vollen Lohn fort. Ab der 7. Woche übernimmt die GKV Krankengeld (ca. 70 % des Brutto, max. 90 % des Netto, max. 78 Wochen).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was bedeutet die Beitragsbemessungsgrenze (BBG) in der Sozialversicherung?',
        optionen: [
          'Unterhalb dieser Grenze ist man von der Sozialversicherungspflicht befreit.',
          'Oberhalb dieser Grenze darf man in eine private Krankenversicherung wechseln.',
          'Bis zu dieser Einkommenshöhe werden Sozialversicherungsbeiträge berechnet; darüber nicht.',
          'Es handelt sich um die Mindestbeitragsgrundlage für Selbstständige.',
          'Sie bestimmt, wie viel der Arbeitgeber maximal an Beiträgen zahlen muss.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'BBG: Einkommensteil oberhalb der Grenze ist beitragsfrei. Beispiel: Verdient jemand mehr als die BBG der GRV, zahlt er Rentenversicherungsbeiträge nur auf den Teil bis zur BBG. Versicherungspflichtgrenze (JAEG) ist davon zu unterscheiden.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist das Solidarprinzip in der gesetzlichen Sozialversicherung?',
        optionen: [
          'Jeder zahlt denselben festen Beitrag, unabhängig vom Einkommen.',
          'Die Leistungen richten sich nach der Höhe der eingezahlten Beiträge.',
          'Die Beiträge richten sich nach dem Einkommen, die Leistungen nach dem Bedarf.',
          'Nur Arbeitnehmer leisten Beiträge; Unternehmer sind ausgenommen.',
          'Leistungen werden nur an Mitglieder mit lückenlosem Beitragsverlauf gewährt.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Solidarprinzip: Wer mehr verdient, zahlt mehr (einkommensabhängig), erhält aber dieselbe Leistung wie jemand mit niedrigem Einkommen. Gegensatz: Äquivalenzprinzip (PKV: Beitrag nach Risiko).'
      },
      {
        typ: 'freitext',
        frage: 'Eine Mitarbeiterin hat ein Bruttogehalt von 3.200 € pro Monat. Der allgemeine Beitragssatz der GKV beträgt 14,6 % plus ein Zusatzbeitrag von 1,6 %. Berechnen Sie den Arbeitnehmer-Anteil zur gesetzlichen Krankenversicherung.',
        musterloesung: '3.200 € × (14,6 % + 1,6 %) / 2 = 3.200 € × 16,2 % / 2 = 518,40 € / 2 = 259,20 € (AN-Anteil)',
        erklaerung: 'GKV-Beitrag: Gesamtbeitrag = Brutto × (Beitragssatz + Zusatzbeitrag). Paritätische Aufteilung: AN und AG zahlen je die Hälfte.',
        stichwoerter: ['259', '259,20']
      }
    ]
  },

  // ========= wiso-tarif-mitbestimmung =========
  {
    themaId: 'wiso-tarif-mitbestimmung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'In welchen der folgenden Angelegenheiten hat der Betriebsrat ein zwingendes Mitbestimmungsrecht?',
        optionen: [
          'Eröffnung einer neuen Filiale im Ausland.',
          'Einführung eines technischen Zeiterfassungssystems.',
          'Festlegung des Unternehmensbudgets für das Folgejahr.',
          'Erwerb von Betriebsgrundstücken.',
          'Wahl des Logistikpartners für die Lieferkette.'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 87 BetrVG: Zwingende Mitbestimmung bei sozialen Angelegenheiten, u. a. technische Überwachungseinrichtungen (Zeiterfassung), Beginn/Ende der Arbeitszeit, Urlaubsgrundsätze. KEIN Mitbestimmungsrecht bei unternehmerischen Entscheidungen wie Filialgründung oder Budgetplanung.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Aussage zur Kündigung im Zusammenhang mit dem Betriebsrat ist korrekt?',
        optionen: [
          'Der Betriebsrat kann jede Kündigung verhindern, wenn er ihr widerspricht.',
          'Bei Betrieben mit weniger als 50 Mitarbeitern muss der Betriebsrat nicht angehört werden.',
          'Jede Kündigung ist unwirksam, wenn der Betriebsrat vorher nicht angehört wurde.',
          'Der Betriebsrat muss nur bei betriebsbedingten Kündigungen informiert werden.',
          'Die Anhörung des Betriebsrats ist eine Kann-Vorschrift, keine Pflicht.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 102 BetrVG: Vor jeder Kündigung muss der Betriebsrat angehört werden. Eine ohne Anhörung ausgesprochene Kündigung ist unwirksam – unabhängig von der Betriebsgröße. Der BR kann widersprechen, nicht aber vetieren.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wer schließt Betriebsvereinbarungen ab?',
        optionen: [
          'Gewerkschaft und Arbeitgeberverband',
          'Geschäftsleitung und Gewerkschaft',
          'IHK und Betriebsrat',
          'Geschäftsleitung und Betriebsrat',
          'Betriebsrat und Belegschaft'
        ],
        korrekteAntwort: 3,
        erklaerung: '§ 77 BetrVG: Betriebsvereinbarungen werden zwischen Arbeitgeber (Geschäftsleitung) und Betriebsrat geschlossen. Nicht zu verwechseln mit dem Tarifvertrag (Gewerkschaft + Arbeitgeberverband).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist eine Aussperrung im Arbeitskampf?',
        optionen: [
          'Die Verweigerung der Lohnzahlung während des Streiks.',
          'Die vorübergehende Freistellung von Arbeitnehmern durch den Arbeitgeber als Gegenmittel zum Streik.',
          'Das Fernbleiben der Arbeitnehmer von der Arbeit ohne Streikbeschluss.',
          'Das Verbot, neue Arbeitnehmer einzustellen.',
          'Die Kündigung aller streikenden Arbeitnehmer.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Aussperrung ist das Arbeitskampfmittel des Arbeitgebers: Er schließt Arbeitnehmer vorübergehend vom Betrieb aus und zahlt keinen Lohn. Pendant zum Streik (AN-Seite). Beide sind Ultima Ratio.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Voraussetzungen müssen erfüllt sein, damit eine Jugend- und Auszubildendenvertretung (JAV) gewählt werden kann?',
        optionen: [
          'Im Betrieb müssen mindestens 10 Auszubildende beschäftigt sein.',
          'Eine JAV kann auch ohne Betriebsrat gewählt werden.',
          'Es müssen mindestens 5 Arbeitnehmer unter 18 Jahren oder Auszubildende unter 25 Jahren beschäftigt sein und ein Betriebsrat muss bestehen.',
          'Die JAV-Wahl wird von der IHK organisiert.',
          'Alle Auszubildenden eines Unternehmens wählen gemeinsam – auch wenn es mehrere Betriebe gibt.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 60 BetrVG: JAV kann gewählt werden, wenn mindestens 5 jugendliche AN (unter 18) oder Azubis (unter 25) im Betrieb beschäftigt sind UND bereits ein Betriebsrat besteht. Ohne BR keine JAV.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was regelt ein Manteltarifvertrag typischerweise?',
        optionen: [
          'Monatliche Gehaltssätze und Lohngruppen.',
          'Ausschließlich Urlaubsansprüche.',
          'Länger gültige Rahmenbedingungen wie Arbeitszeit, Urlaub, Kündigungsfristen und Zuschläge.',
          'Die Zusammensetzung des Betriebsrats.',
          'Sozialversicherungsbeiträge und deren Aufteilung.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Manteltarifvertrag (= Rahmentarifvertrag): langfristig gültige allgemeine Arbeitsbedingungen (Urlaub, Arbeitszeit, Kündigungsfristen). Entgelt-/Lohntarifvertrag: aktuelle Gehaltssätze, meist kürzer laufend.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Aussage zu den Sozialpartnern trifft zu?',
        optionen: [
          'Sozialpartner sind das Bundesarbeitsministerium und die IHK.',
          'Sozialpartner sind Gewerkschaften auf Arbeitnehmerseite und Arbeitgeberverbände auf Arbeitgeberseite.',
          'Sozialpartner sind Betriebsrat und Geschäftsführung.',
          'Sozialpartner sind die Bundesagentur für Arbeit und die Deutsche Rentenversicherung.',
          'Sozialpartner sind ausschließlich staatliche Institutionen.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Tarifautonomie (Art. 9 Abs. 3 GG): Sozialpartner = Gewerkschaften (AN-Seite) + Arbeitgeberverbände (AG-Seite). Sie verhandeln Tarifverträge ohne staatliche Einflussnahme.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Sachverhalte dem jeweiligen Begriff aus dem Betriebsverfassungsrecht zu.',
        paare: [
          { begriff: 'Zwingende Mitbestimmung (§ 87 BetrVG)', definition: 'Betriebsrat muss der Einführung von Gleitzeit zustimmen' },
          { begriff: 'Anhörungsrecht (§ 102 BetrVG)', definition: 'Arbeitgeber muss Betriebsrat vor jeder Kündigung informieren' },
          { begriff: 'Keine Mitbestimmung', definition: 'Unternehmen eröffnet eine neue Niederlassung in München' },
          { begriff: 'Betriebsvereinbarung (§ 77 BetrVG)', definition: 'Geschäftsleitung und Betriebsrat einigen sich auf Regelung zur mobilen Arbeit' }
        ],
        erklaerung: 'Mitbestimmung nur bei sozialen Angelegenheiten (§ 87). Unternehmerische Entscheidungen (Filialgründung, Investitionen) unterliegen keiner Mitbestimmung.'
      }
    ]
  },

  // ========= wiso-wirtschaftsordnung =========
  {
    themaId: 'wiso-wirtschaftsordnung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was beschreibt die soziale Marktwirtschaft in Deutschland korrekt?',
        optionen: [
          'Der Staat legt Preise und Produktionsmengen zentral fest.',
          'Es gibt freien Wettbewerb ohne staatliche Eingriffe.',
          'Der freie Markt wird durch staatliche Sozialgesetzgebung ergänzt, um negative Auswirkungen des Marktes abzufedern.',
          'Alle Produktionsmittel befinden sich im Staatsbesitz.',
          'Unternehmen müssen ihre Preise mit dem Staat abstimmen.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Soziale Marktwirtschaft (Ludwig Erhard): Marktwirtschaft + soziale Absicherung. Der Staat setzt Rahmenbedingungen (Gesetze, Sozialversicherung), greift aber nicht direkt in die Preisbildung ein.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Aussagen zur Nachfrage trifft zu?',
        optionen: [
          'Nachfrage entsteht allein durch Bedürfnisse, unabhängig von der Kaufkraft.',
          'Nachfrage ist identisch mit Bedürfnis.',
          'Nachfrage entsteht, wenn ein Bedürfnis auf Kaufkraft trifft und am Markt wirksam wird.',
          'Bei höherem Preis steigt die Nachfrage nach normalen Gütern.',
          'Nachfrage kann nur durch den Staat beeinflusst werden.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Bedürfnis → Bedarf (mit Kaufkraft) → Nachfrage (am Markt). Nachfrage setzt Zahlungsbereitschaft und -fähigkeit voraus. Bei höherem Preis sinkt die Nachfrage nach normalen Gütern.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Die Infotec GmbH stellt fest, dass auf dem IT-Dienstleistungsmarkt sehr viele Anbieter und viele Nachfrager tätig sind. Welche Marktform liegt vor?',
        optionen: [
          'Angebotsmonopol',
          'Angebotsoligopol',
          'Polypol',
          'Nachfragemonopol',
          'Nachfrageoligopol'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Polypol: viele Anbieter, viele Nachfrager. Monopol: ein Anbieter (oder Nachfrager). Oligopol: wenige Anbieter (oder Nachfrager).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Aussagen beschreibt einen Käufermarkt?',
        optionen: [
          'Nachfrage übersteigt das Angebot; Preise steigen tendenziell.',
          'Angebot und Nachfrage halten sich die Waage; der Preis ist stabil.',
          'Das Angebot übersteigt die Nachfrage; Preise sinken tendenziell.',
          'Nur ein einziger Anbieter bestimmt den Marktpreis.',
          'Der Staat greift regulierend in das Marktgeschehen ein.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Käufermarkt = Angebotsüberhang: Angebot > Nachfrage → Preiswettbewerb, Preise sinken. Verkäufermarkt = Nachfrageüberhang: Nachfrage > Angebot → Preissteigerungen möglich.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welchem Wirtschaftssektor ist die IT-Dienstleistungsbranche zuzuordnen?',
        optionen: [
          'Primärer Sektor (Urproduktion)',
          'Sekundärer Sektor (Produktion/Industrie)',
          'Tertiärer Sektor (Dienstleistungen)',
          'Quartärer Sektor (Energieversorgung)',
          'Öffentlicher Sektor (Staatsbetriebe)'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Tertiärer Sektor: alle Dienstleistungen (IT, Handel, Finanz, Transport). Primär: Landwirtschaft, Bergbau. Sekundär: verarbeitendes Gewerbe, Industrie, Handwerk.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Die Sachs-IT GmbH möchte durch eine intensive Mitarbeiterschulung die Qualität ihrer Produkte steigern. Welche Art von Zielen liegt hier vor?',
        optionen: [
          'Konkurrierende Ziele, da Schulungskosten den Gewinn senken.',
          'Komplementäre Ziele, da Mitarbeiterqualifikation und Produktqualität sich gegenseitig fördern.',
          'Indifferente Ziele ohne Wechselwirkung.',
          'Antagonistische Ziele, da Personal- und Qualitätsziele sich ausschließen.',
          'Strategische Ziele ohne operativen Bezug.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Komplementäre Ziele fördern sich gegenseitig (Mitarbeiterqualifikation ↔ Produktqualität ↔ Kundenzufriedenheit). Konkurrierende Ziele stehen im Konflikt (z. B. Kostensenkung ↔ Lohnerhöhung).'
      }
    ]
  },

  // ========= wiso-rechtsformen =========
  {
    themaId: 'wiso-rechtsformen',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Wann erlangt eine GmbH ihre Rechtsfähigkeit?',
        optionen: [
          'Mit der Unterzeichnung des Gesellschaftsvertrags durch alle Gesellschafter.',
          'Nach Einzahlung des gesamten Stammkapitals.',
          'Mit der Eintragung in das Handelsregister.',
          'Nach Ablauf von 6 Wochen seit der Gründungsversammlung.',
          'Sobald die erste Rechnung ausgestellt wird.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 11 GmbHG: Die GmbH entsteht als juristische Person mit der Eintragung in das Handelsregister (konstitutive Wirkung). Davor besteht eine Vor-GmbH, bei der die Gründer persönlich haften.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was darf ein Prokurist NICHT ohne besondere Ermächtigung?',
        optionen: [
          'Verträge mit Kunden abschließen.',
          'Das Unternehmen gegenüber Banken vertreten.',
          'Grundstücke des Unternehmens verkaufen oder belasten.',
          'Personal einstellen und entlassen.',
          'Bestellungen bei Lieferanten aufgeben.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 49 Abs. 2 HGB: Prokura umfasst alle gerichtlichen und außergerichtlichen Geschäfte, AUSGENOMMEN Veräußerung und Belastung von Grundstücken. Ebenso: keine Prokura erteilen, keine Bilanz unterschreiben.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Beschreibung der passenden Rechtsform zu.',
        paare: [
          { begriff: 'GmbH', definition: 'Kapitalgesellschaft, Stammkapital mind. 25.000 €, Haftung auf Gesellschaftsvermögen beschränkt' },
          { begriff: 'OHG', definition: 'Personengesellschaft, alle Gesellschafter haften unbeschränkt mit Privatvermögen' },
          { begriff: 'AG', definition: 'Kapitalgesellschaft, Grundkapital mind. 50.000 €, Organe: Vorstand, Aufsichtsrat, Hauptversammlung' },
          { begriff: 'Einzelunternehmen', definition: 'Eine natürliche Person, unbeschränkte Haftung mit gesamtem Privatvermögen' }
        ],
        erklaerung: 'Faustregel: Kapitalgesellschaften (GmbH, AG, UG) haften mit Gesellschaftsvermögen. Personengesellschaften (OHG, KG, GbR) und Einzelunternehmen haften persönlich.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Die EcoTec GmbH wird von einem anderen Unternehmen aufgekauft und als eigenständige GmbH weitergeführt. Welcher Begriff beschreibt diesen Zusammenschluss?',
        optionen: [
          'Fusion (Verschmelzung)',
          'Kartell',
          'ARGE (Arbeitsgemeinschaft)',
          'Konzern',
          'Kooperation'
        ],
        korrekteAntwort: 3,
        erklaerung: 'Konzern: Unternehmen bleiben rechtlich selbstständig, werden aber wirtschaftlich einheitlich geleitet. Fusion: Unternehmen verlieren Identität. Kartell: Absprachen ohne Zusammenschluss. ARGE: für einen begrenzten Auftrag.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche natürlichen Personen sind an einem Rechtsgeschäft beteiligt?',
        optionen: [
          'Die Städtische Werke GmbH und die Staatlichen Museen Berlin.',
          'Die Bundesrepublik Deutschland und die Stadt Hamburg.',
          'Die Softwareentwicklerin Lena Heine und der Steuerberater Jonas Müller.',
          'Die Infotec GmbH & Co. KG und die MarSi-IT AG.',
          'Der Deutsche Fußball-Bund e. V. und der FC Bayern München e. V.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Natürliche Personen sind einzelne Menschen (z. B. Lena Heine, Jonas Müller). Juristische Personen sind Organisationen (GmbH, AG, Verein, Stadt, Bundesrepublik).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Aussagen zur GmbH ist korrekt?',
        optionen: [
          'Gesellschafter einer GmbH haften unbeschränkt mit ihrem Privatvermögen.',
          'Das Mindeststammkapital einer GmbH beträgt 50.000 €.',
          'Eine GmbH kann von einer einzigen Person gegründet werden.',
          'Die Organe der GmbH sind Vorstand, Aufsichtsrat und Hauptversammlung.',
          'Die Haftung des Geschäftsführers ist auf seinen Jahresgehalt begrenzt.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Eine GmbH kann als Ein-Personen-GmbH gegründet werden. Stammkapital: 25.000 € (AG: 50.000 €). Haftung der Gesellschafter: nur mit Einlage. Organe: Geschäftsführer + Gesellschafterversammlung (+ ggf. Aufsichtsrat ab 500 AN).'
      }
    ]
  },

  // ========= wiso-betrieb =========
  {
    themaId: 'wiso-betrieb',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was ist eine Stabsstelle im Unternehmen?',
        optionen: [
          'Eine Abteilung mit besonders vielen Mitarbeitern und hohem Weisungsrecht.',
          'Eine beratende Stelle ohne Weisungsbefugnis gegenüber anderen Abteilungen.',
          'Eine Stelle, die direkt dem Betriebsrat untersteht.',
          'Eine temporäre Stelle für Saisonkräfte.',
          'Die Stelle des unmittelbaren Vorgesetzten in der Linienhierarchie.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Stabsstellen (z. B. Rechtsabteilung, Controlling, Unternehmenskommunikation) beraten die Leitung, haben aber KEIN Weisungsrecht gegenüber Linienstellen. Typisch für das Stab-Linien-System.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Die GreenByte GmbH teilt die Programmierung eines neuen Systems in Teilaufgaben auf, die von verschiedenen Entwicklern bearbeitet werden. Welches Prinzip liegt vor?',
        optionen: [
          'Outsourcing an externe Dienstleister.',
          'Betriebliche Arbeitsteilung (Arbeitszerlegung).',
          'Vertikale Integration der Wertschöpfungskette.',
          'Matrixorganisation.',
          'Offshoring in ein Niedriglohnland.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Betriebliche Arbeitsteilung (Arbeitszerlegung): Ein Prozess wird in mehrere Teilschritte gegliedert, die von verschiedenen Arbeitskräften innerhalb des Betriebs ausgeführt werden.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ein 16-jähriger Schüler kauft ein E-Bike für 2.799 € auf Raten, ohne seine Eltern zu fragen. Welche rechtliche Wirkung hat dieses Rechtsgeschäft?',
        optionen: [
          'Das Rechtsgeschäft ist von Anfang an nichtig, da Minderjährige keine Verträge abschließen dürfen.',
          'Das Rechtsgeschäft ist sofort wirksam, da er mit eigenem Taschengeld zahlt.',
          'Das Rechtsgeschäft ist schwebend unwirksam und wird erst mit Genehmigung der gesetzlichen Vertreter wirksam.',
          'Das Rechtsgeschäft ist wirksam, da er 16 Jahre alt und damit geschäftsfähig ist.',
          'Das Rechtsgeschäft ist anfechtbar, da er sich im Irrtum über den Preis befunden hat.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§§ 106, 108 BGB: Beschränkt Geschäftsfähige (7–17 Jahre) können ohne Zustimmung der Eltern kein verpflichtendes Rechtsgeschäft abschließen. Es ist schwebend unwirksam – wirksam erst mit Genehmigung der gesetzlichen Vertreter.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Organisationsformen ist durch das Merkmal gekennzeichnet, dass jeder Mitarbeiter genau einen Vorgesetzten hat?',
        optionen: [
          'Matrixorganisation',
          'Mehrliniensystem',
          'Einliniensystem',
          'Stab-Linien-System',
          'Projektorganisation'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Einliniensystem: klare Hierarchie, jede Stelle hat genau einen direkten Vorgesetzten (Prinzip der Einheit der Auftragserteilung). Vorteil: klare Zuständigkeiten. Nachteil: lange Dienstwege.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Eine 18-jährige Auszubildende kauft ein Smartphone für 1.200 € auf Raten. Welche rechtliche Wirkung hat dieses Rechtsgeschäft?',
        optionen: [
          'Das Rechtsgeschäft ist schwebend unwirksam, da sie noch Auszubildende ist.',
          'Das Rechtsgeschäft ist nichtig, da Auszubildende keine Ratenkäufe abschließen dürfen.',
          'Das Rechtsgeschäft ist wirksam, da sie mit 18 Jahren voll geschäftsfähig ist.',
          'Das Rechtsgeschäft bedarf der Zustimmung des Ausbildungsbetriebs.',
          'Das Rechtsgeschäft ist anfechtbar, wenn der Arbeitgeber dagegen Einspruch erhebt.'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 2 BGB: Volljährigkeit mit Vollendung des 18. Lebensjahres → volle Geschäftsfähigkeit. Ab 18 darf sie unbeschränkt Verträge eingehen, unabhängig von ihrer Eigenschaft als Auszubildende.'
      }
    ]
  },

  // ========= wiso-politik-konjunktur =========
  {
    themaId: 'wiso-politik-konjunktur',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche vier Ziele bilden das „Magische Viereck" der Wirtschaftspolitik?',
        optionen: [
          'Wachstum, Preisstabilität, Beschäftigung, außenwirtschaftliches Gleichgewicht.',
          'Export, Import, Inflation, Arbeitslosigkeit.',
          'Nachhaltigkeit, Gerechtigkeit, Wohlstand, Umweltschutz.',
          'Bildung, Gesundheit, Sicherheit, Mobilität.',
          'Steuern, Zinsen, Wechselkurse, Subventionen.'
        ],
        korrekteAntwort: 0,
        erklaerung: '§ 1 StabWG (Stabilitätsgesetz 1967): Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wirtschaftswachstum. Das „Magische Sechseck" ergänzt: Einkommensverteilung + Umweltschutz.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die wirtschaftlichen Kennzahlen dem jeweiligen Ziel des Magischen Vierecks zu.',
        paare: [
          { begriff: 'Preisstabilität', definition: 'Verbraucherpreisindex (VPI) / Inflationsrate' },
          { begriff: 'Hoher Beschäftigungsstand', definition: 'Arbeitslosenquote' },
          { begriff: 'Wirtschaftswachstum', definition: 'Zuwachsrate des realen Bruttoinlandsprodukts (BIP)' },
          { begriff: 'Außenwirtschaftliches Gleichgewicht', definition: 'Außenbeitrag (Saldo aus Exporten und Importen)' }
        ],
        erklaerung: 'Jedes Ziel des Magischen Vierecks hat einen spezifischen Indikator. EZB misst Preisstabilität über den HVPI (Harmonisierter Verbraucherpreisindex).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Aussage beschreibt eine Rezession korrekt?',
        optionen: [
          'Das BIP wächst kräftig, die Arbeitslosenquote sinkt.',
          'Das Preisniveau sinkt deutlich, die Wirtschaft boomt.',
          'Das BIP geht zurück (negatives Wachstum) und die Arbeitslosenquote steigt.',
          'Die Zinsen steigen stark, während die Nachfrage anzieht.',
          'Außenhandel bricht ein, während die Binnennachfrage stabil bleibt.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Rezession (Abschwung): BIP-Rückgang, steigende Arbeitslosigkeit, sinkende Investitionen. Technisch: zwei aufeinanderfolgende Quartale mit negativem BIP-Wachstum.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Maßnahmen erhöht die Kaufkraft der Bevölkerung?',
        optionen: [
          'Erhöhung der Mehrwertsteuer von 19 % auf 21 %.',
          'Erhöhung von Einfuhrzöllen auf Importgüter.',
          'Erhöhung der Sozialversicherungsbeiträge um 1 Prozentpunkt.',
          'Erhöhung des Wohngeldes für einkommensschwache Haushalte.',
          'Kürzung von Transferleistungen im Rahmen der Haushaltskonsolidierung.'
        ],
        korrekteAntwort: 3,
        erklaerung: 'Wohngeld ist eine staatliche Transferleistung, die direkt die Kaufkraft erhöht. MwSt-Erhöhung, Zölle und höhere Sozialabgaben verringern die verfügbare Kaufkraft.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Maßnahme fördert die Globalisierung des Welthandels?',
        optionen: [
          'Einführung von Importzöllen auf ausländische IT-Produkte.',
          'Abschluss von Freihandelsabkommen zwischen Ländern.',
          'Verschärfung der Einreisebestimmungen für ausländische Fachkräfte.',
          'Aufbau nationaler Produktionskapazitäten zur Importsubstitution.',
          'Verbot des Exports sensibler Technologien.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Globalisierung wird gefördert durch Abbau von Handelshemmnissen (Zölle ↓, Freihandelsabkommen), internationale Niederlassungen und Arbeitsteilung. Zölle, Einreisebeschränkungen und Exportverbote hemmen die Globalisierung.'
      }
    ]
  },

  // ========= wiso-steuern =========
  {
    themaId: 'wiso-steuern',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was ist eine direkte Steuer?',
        optionen: [
          'Eine Steuer, die vom Käufer über den Preis getragen wird.',
          'Eine Steuer, bei der Steuerschuldner und Steuerträger dieselbe Person sind.',
          'Eine Steuer, die nur einmal im Leben anfällt.',
          'Eine Steuer, die ausschließlich von Unternehmen gezahlt wird.',
          'Eine Steuer, deren Höhe staatlich festgelegt und nicht verhandelbar ist.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Direkte Steuer: Steuerschuldner = Steuerträger (z. B. Einkommensteuer, Körperschaftsteuer, Gewerbesteuer). Indirekte Steuer: Steuerschuldner (Unternehmen) ≠ Steuerträger (Endverbraucher), z. B. Umsatzsteuer.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Steuerart dem passenden Begriff zu.',
        paare: [
          { begriff: 'Einkommensteuer', definition: 'Direkte Steuer, progressiv, Steuerschuldner = Steuerträger' },
          { begriff: 'Umsatzsteuer (MwSt)', definition: 'Indirekte Steuer, Regelsteuersatz 19 %, vom Endverbraucher getragen' },
          { begriff: 'Gewerbesteuer', definition: 'Direkte Gemeindesteuer auf Gewerbeerträge, Hebesatz variiert je Gemeinde' },
          { begriff: 'Körperschaftsteuer', definition: 'Direkte Steuer auf Gewinne juristischer Personen (GmbH, AG), Satz 15 %' }
        ],
        erklaerung: 'Indirekte Steuern werden vom Unternehmer ans Finanzamt abgeführt, wirtschaftlich aber vom Verbraucher getragen. Direkte Steuern belasten denjenigen, der sie zahlt.'
      },
      {
        typ: 'freitext',
        frage: 'Die Gramberg GmbH erwirtschaftet in einem Geschäftsjahr einen Umsatz von 480.000 € und einen Gewinn von 33.600 €. Berechnen Sie die Umsatzrentabilität.',
        musterloesung: 'Umsatzrentabilität = Gewinn / Umsatz × 100 = 33.600 € / 480.000 € × 100 = 7,0 %',
        erklaerung: 'Formel: Umsatzrentabilität = Gewinn / Umsatz × 100. Je höher die Umsatzrentabilität, desto mehr Gewinn erzielt das Unternehmen pro Euro Umsatz.',
        stichwoerter: ['7', '7,0', '7,0%']
      },
      {
        typ: 'freitext',
        frage: 'Die Sachs-IT GmbH hat ein Eigenkapital von 1.250.000 € und erzielt einen Jahresgewinn von 112.500 €. Berechnen Sie die Eigenkapitalrentabilität.',
        musterloesung: 'Eigenkapitalrentabilität = Gewinn / Eigenkapital × 100 = 112.500 € / 1.250.000 € × 100 = 9,0 %',
        erklaerung: 'Formel: EK-Rentabilität = Gewinn / Eigenkapital × 100. Sie gibt an, wie rentabel das eingesetzte Eigenkapital ist.',
        stichwoerter: ['9', '9,0', '9,0%']
      },
      {
        typ: 'freitext',
        frage: 'Ein Unternehmen vergleicht zwei Aufträge: Auftrag A hat einen Ertrag von 95.000 € bei einem Aufwand von 76.000 €. Auftrag B hat einen Ertrag von 110.000 € bei einem Aufwand von 90.000 €. Berechnen Sie die Wirtschaftlichkeit beider Aufträge und geben Sie an, welcher wirtschaftlicher ist.',
        musterloesung: 'Auftrag A: 95.000 / 76.000 = 1,25. Auftrag B: 110.000 / 90.000 ≈ 1,22. Auftrag A ist wirtschaftlicher (höhere Wirtschaftlichkeitszahl).',
        erklaerung: 'Wirtschaftlichkeit = Ertrag / Aufwand. Wert > 1 = Gewinn. Der höhere Wert kennzeichnet den wirtschaftlicheren Auftrag.',
        stichwoerter: ['1,25', 'A', 'Auftrag A']
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Steuern ist eine indirekte Steuer?',
        optionen: [
          'Einkommensteuer',
          'Körperschaftsteuer',
          'Gewerbesteuer',
          'Umsatzsteuer (Mehrwertsteuer)',
          'Erbschaftsteuer'
        ],
        korrekteAntwort: 3,
        erklaerung: 'Die Umsatzsteuer (MwSt.) ist indirekt: Der Händler führt sie ans Finanzamt ab, wirtschaftlich trägt sie der Endverbraucher über den Preis. Einkommensteuer, Körperschaftsteuer und Gewerbesteuer sind direkte Steuern.'
      }
    ]
  },

  // ========= wiso-nachhaltigkeit =========
  {
    themaId: 'wiso-nachhaltigkeit',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was besagt das Verursacherprinzip im Umweltrecht?',
        optionen: [
          'Der Staat trägt grundsätzlich die Kosten für alle Umweltschäden.',
          'Umweltschäden werden solidarisch auf alle Verursacher verteilt.',
          'Derjenige, der Umweltschäden verursacht, trägt die Kosten für deren Beseitigung.',
          'Unternehmen müssen pauschal 1 % ihres Umsatzes für Umweltschutz aufwenden.',
          'Verursacher können Umweltschäden durch Zahlung einer Ausgleichsabgabe legalisieren.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Verursacherprinzip: Wer Umweltschäden verursacht, trägt die Kosten (nicht die Allgemeinheit). Daneben: Vorsorgeprinzip (Schäden vermeiden) und Kooperationsprinzip (Staat + Wirtschaft + Gesellschaft).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Die EcoTec GmbH sortiert ihre Verpackungen nach Materialien und führt sie dem Dualen System zu. Welcher Begriff beschreibt diesen Sachverhalt?',
        optionen: [
          'Wiederverwendung',
          'Recycling',
          'Vermeidung',
          'Deponiierung',
          'Downcycling'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Recycling: Abfälle werden nach Materialien sortiert und als Rohstoff dem Produktionskreislauf wieder zugeführt. Abfallhierarchie (KrWG): Vermeiden > Wiederverwenden > Recyceln > Verwerten > Beseitigen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was beschreibt Diversity Management korrekt?',
        optionen: [
          'Einstellung ausschließlich von Mitarbeitern mit demselben kulturellen Hintergrund.',
          'Die gezielte Nutzung der Vielfalt der Belegschaft (Alter, Geschlecht, Herkunft, Fähigkeiten) als Wettbewerbsvorteil.',
          'Ein gesetzlich vorgeschriebenes Programm für Unternehmen ab 500 Mitarbeitern.',
          'Die Gleichstellung von Teilzeit- und Vollzeitbeschäftigten im Gehalt.',
          'Die Vorgabe, alle Abteilungen geschlechterparitätisch zu besetzen.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Diversity Management: Vielfalt der Belegschaft bewusst einsetzen, um Innovation und Leistung zu steigern. Charta der Vielfalt (seit 2006): freiwillige Selbstverpflichtung von Unternehmen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Maßnahme entspricht einem ökologischen Unternehmensziel?',
        optionen: [
          'Erhöhung der Mitarbeitervergütung um 5 %.',
          'Erschließung neuer Märkte in Ostasien.',
          'Bezug von Strom ausschließlich aus erneuerbaren Energiequellen.',
          'Einführung eines neuen CRM-Systems zur Kundenpflege.',
          'Senkung der Verwaltungskosten um 10 %.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Ökologische Ziele: Emissionsreduzierung, erneuerbare Energien, umweltfreundliche Rohstoffe, Recycling. Lohnerhöhung = soziales Ziel, Markterschließung/Kostensenkung = ökonomisches Ziel.'
      },
      {
        typ: 'multiple-choice',
        frage: 'In welcher Reihenfolge sind beim Entdecken eines Brandes die Maßnahmen durchzuführen?',
        optionen: [
          'Löschen → Retten → Alarmieren',
          'Alarmieren → Retten → Löschen',
          'Retten → Löschen → Alarmieren',
          'Alarmieren → Löschen → Retten',
          'Retten → Alarmieren → Löschen'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Richtige Reihenfolge: 1) Alarm schlagen / Notruf 112 → 2) Gefährdete Personen retten/evakuieren → 3) Mit geeignetem Löschmittel löschen. Fenster und Türen schließen, nicht mit dem Aufzug flüchten.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Aussage zum AGG (Allgemeines Gleichbehandlungsgesetz) trifft zu?',
        optionen: [
          'Das AGG gilt ausschließlich für Unternehmen mit mehr als 50 Mitarbeitern.',
          'Benachteiligungen aufgrund von Alter, Behinderung oder Geschlecht sind durch das AGG verboten.',
          'Das AGG verpflichtet Unternehmen, eine Quote von 30 % Frauen in Führungspositionen einzuhalten.',
          'Auszubildende sind vom AGG nicht erfasst, da sie keine vollwertigen Arbeitnehmer sind.',
          'Das AGG erlaubt eine unterschiedliche Bezahlung, wenn sie auf dem Alter basiert.'
        ],
        korrekteAntwort: 1,
        erklaerung: 'AGG (§ 1): Benachteiligungen wegen Rasse/ethnischer Herkunft, Geschlecht, Religion, Behinderung, Alter oder sexueller Identität sind verboten. Gilt für alle Beschäftigungsverhältnisse inkl. Ausbildung.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Emissionen werden durch das Bundesimmissionsschutzgesetz (BImSchG) geregelt?',
        optionen: [
          'Ausschließlich Luftschadstoffe wie CO₂ und Feinstaub.',
          'Nur radioaktive Strahlung aus Kernkraftwerken.',
          'Luftverunreinigungen, Geräusche (Lärm), Erschütterungen, Wärme und Strahlung.',
          'Wasserverschmutzungen und Ölunfälle.',
          'Nur gewerbliche Abfälle, die deponiert werden.'
        ],
        korrekteAntwort: 2,
        erklaerung: 'BImSchG schützt vor schädlichen Umwelteinwirkungen: Luftverunreinigungen, Geräusche, Erschütterungen, Wärme und Strahlung. Auch Lärm (Schallemission) ist eine Emission im Sinne des Gesetzes.'
      }
    ]
  }
];
