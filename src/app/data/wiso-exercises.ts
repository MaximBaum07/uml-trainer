import { UebungsSet } from '../models/app.models';

// WiSo: fast ausschließlich Multiple-Choice mit gelegentlichen Zuordnungen.
// Fragen basieren auf wiederkehrenden Mustern aus AP2 WiSo 2019-2024.

export const WISO_UEBUNGEN: UebungsSet[] = [
  // ========= wiso-berufsausbildung =========
  {
    themaId: 'wiso-berufsausbildung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welches Gesetz regelt die Berufsausbildung in Deutschland?',
        optionen: ['Arbeitsschutzgesetz', 'Berufsbildungsgesetz (BBiG)', 'Tarifvertragsgesetz', 'Arbeitszeitgesetz'],
        korrekteAntwort: 1,
        erklaerung: 'Das BBiG regelt u.a. Ausbildungsvertrag, Probezeit, Prüfungen, Rechte und Pflichten.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie lange darf die Probezeit in einer Berufsausbildung maximal dauern?',
        optionen: ['1 Monat', '2 Monate', '4 Monate', '6 Monate'],
        korrekteAntwort: 2,
        erklaerung: '§ 20 BBiG: mindestens 1 Monat, maximal 4 Monate. Während dieser Zeit ist Kündigung ohne Angabe von Gründen möglich.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Institution ist für die IHK-Abschlussprüfung zuständig?',
        optionen: ['Der Ausbildungsbetrieb', 'Die IHK (Industrie- und Handelskammer)', 'Die Berufsschule', 'Das Arbeitsamt'],
        korrekteAntwort: 1,
        erklaerung: 'Die IHK ist die zuständige Stelle im Sinne des BBiG. Prüfungsausschüsse sind jedoch paritätisch besetzt.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Pflicht hat der Auszubildende?',
        optionen: [
          'Den Ausbildungsbetrieb zu bewerten',
          'Das Ausbildungsziel anzustreben und Aufgaben sorgfältig auszuführen',
          'Den Betrieb nach bestandener Prüfung zu verlassen',
          'Den Berichtsheft-Text öffentlich zu machen'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 13 BBiG: Lernpflicht, Weisungsgebundenheit, Berichtsheftführung, Schweigepflicht, Sorgfaltspflicht.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Dokument bescheinigt EU-weit erworbene Qualifikationen?',
        optionen: ['Europäischer Führerschein', 'Europass', 'EU-Zeugnis', 'Schengen-Ausweis'],
        korrekteAntwort: 1,
        erklaerung: 'Europass: standardisierte Dokumente (Lebenslauf, Sprachenpass, Zeugniserläuterung) für die EU-weite Mobilität. Taucht fast jedes Jahr in WiSo auf.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Nach welcher Zeit gilt der Ausbildungsvertrag bei Weiterbeschäftigung als unbefristet verlängert, wenn nichts Gegenteiliges vereinbart wird?',
        optionen: [
          'Sofort nach bestandener Prüfung',
          'Bei unwidersprochener Weiterarbeit nach Ausbildungsende',
          'Nach 3 Monaten',
          'Nach 1 Jahr'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 24 BBiG: Wer nach Ausbildungsende weiter beschäftigt wird, hat ein unbefristetes Arbeitsverhältnis auf Grundlage der bisherigen Tätigkeit.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Der Ausbildungsvertrag muss schriftlich abgeschlossen werden.',
        korrekt: true,
        erklaerung: '§ 11 BBiG: Spätestens vor Beginn der Ausbildung ist der wesentliche Inhalt des Vertrags schriftlich niederzulegen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Pflicht hat der Ausbildende (Betrieb)?',
        optionen: [
          'Nur Ausbildungsvergütung zahlen',
          'Ausbildungsziel vermitteln, Ausbilder bestellen, Freistellung für Berufsschule',
          'Ausbildungsinhalte frei wählen',
          'Nach Ausbildung übernehmen'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 14 BBiG listet Pflichten des Ausbildenden. Übernahmepflicht gibt es NICHT.'
      }
    ]
  },

  // ========= wiso-arbeitsrecht =========
  {
    themaId: 'wiso-arbeitsrecht',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Wie viel Urlaub steht einem 17-jährigen Auszubildenden nach JArbSchG mindestens zu?',
        optionen: ['24 Werktage', '25 Werktage', '27 Werktage', '30 Werktage'],
        korrekteAntwort: 2,
        erklaerung: '§ 19 JArbSchG: 27 Werktage für 16-Jährige, 25 für 17-Jährige (zu Jahresbeginn), 23 für 17/18. Formulierung im Analyse-Dokument: identische Frage in mehreren Prüfungen 2019-2024.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Kündigungsfrist gilt für Arbeitgeber nach § 622 BGB bei einem Mitarbeiter nach 2 Jahren Betriebszugehörigkeit?',
        optionen: [
          '2 Wochen zum Monatsende',
          '4 Wochen zum 15. oder Monatsende',
          '1 Monat zum Monatsende',
          '2 Monate zum Monatsende'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 622 Abs. 2 BGB: Bei 2 Jahren Betriebszugehörigkeit = 1 Monat zum Monatsende. Fristen verlängern sich mit zunehmender Dauer.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Voraussetzung muss für eine fristlose Kündigung erfüllt sein?',
        optionen: [
          'Der Arbeitgeber ist verärgert',
          'Ein wichtiger Grund im Sinne des § 626 BGB',
          'Mindestens 3 Abmahnungen',
          'Schriftform genügt'
        ],
        korrekteAntwort: 1,
        erklaerung: '§ 626 BGB: fristlose Kündigung nur bei wichtigem Grund (z.B. Diebstahl, Gewalt). Innerhalb 2 Wochen nach Kenntnis des Grundes erklären.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie viele Urlaubstage stehen einem vollzeitbeschäftigten Erwachsenen nach BUrlG mindestens zu (5-Tage-Woche)?',
        optionen: ['20', '24', '25', '30'],
        korrekteAntwort: 0,
        erklaerung: '§ 3 BUrlG: 24 Werktage bei 6-Tage-Woche = 20 Arbeitstage bei 5-Tage-Woche. Das ist das gesetzliche Minimum, Tarifverträge haben oft mehr.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie lang darf die tägliche Arbeitszeit nach ArbZG maximal sein?',
        optionen: ['8 Stunden', '10 Stunden (wenn Durchschnitt 8 h nicht überschritten wird)', '12 Stunden', '14 Stunden'],
        korrekteAntwort: 1,
        erklaerung: '§ 3 ArbZG: grundsätzlich 8 h/Tag, ausnahmsweise 10 h wenn im Durchschnitt von 6 Monaten 8 h nicht überschritten.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Pausenzeit ist bei 8 Stunden Arbeit vorgeschrieben?',
        optionen: ['Keine', '15 Minuten', '30 Minuten', '45 Minuten'],
        korrekteAntwort: 2,
        erklaerung: '§ 4 ArbZG: bei 6–9 h → 30 min, über 9 h → 45 min. Pause muss mindestens in Abschnitten von 15 min genommen werden.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Eine Kündigung kann wirksam per E-Mail ausgesprochen werden.',
        korrekt: false,
        erklaerung: '§ 623 BGB: Kündigung bedarf der Schriftform, elektronische Form ist ausgeschlossen. E-Mail/SMS sind unwirksam.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist ein Tarifvertrag?',
        optionen: [
          'Vertrag zwischen einzelnem Arbeitnehmer und Arbeitgeber',
          'Kollektiver Vertrag zwischen Gewerkschaft und Arbeitgeberverband (oder einzelnem AG)',
          'Vertrag zwischen Betriebsrat und Arbeitgeber',
          'EU-weites Abkommen'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Tarifvertrag regelt Arbeitsbedingungen kollektiv (Gehalt, Arbeitszeit, Urlaub). Betriebsvereinbarung dagegen zwischen BR und AG.'
      }
    ]
  },

  // ========= wiso-sozialversicherung =========
  {
    themaId: 'wiso-sozialversicherung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche Sozialversicherungen zählen zu den klassischen fünf Säulen?',
        optionen: [
          'Krankenversicherung, Rentenversicherung, Pflegeversicherung, Arbeitslosenversicherung, Unfallversicherung',
          'Krankenversicherung, Lebensversicherung, Rentenversicherung, Unfallversicherung, KFZ',
          'Kranken-, Haftpflicht-, Berufsunfähigkeits-, Renten-, Unfallversicherung',
          'Steuerversicherung, Krankenversicherung, Rentenversicherung, Pflegeversicherung, Arbeitslosenversicherung'
        ],
        korrekteAntwort: 0,
        erklaerung: 'Fünf gesetzliche Sozialversicherungen. Beiträge meist paritätisch (je zur Hälfte AG/AN), außer Unfallversicherung (nur AG).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wer zahlt die Unfallversicherung?',
        optionen: ['Arbeitnehmer allein', 'Arbeitgeber allein', 'Beide paritätisch', 'Der Staat'],
        korrekteAntwort: 1,
        erklaerung: 'Unfallversicherung (Berufsgenossenschaften) wird vollständig vom Arbeitgeber gezahlt.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Versicherung springt ein, wenn ein Arbeitnehmer seinen Job verliert?',
        optionen: ['Krankenversicherung', 'Rentenversicherung', 'Arbeitslosenversicherung', 'Pflegeversicherung'],
        korrekteAntwort: 2,
        erklaerung: 'Die Arbeitslosenversicherung zahlt Arbeitslosengeld I. Arbeitslosengeld II (Bürgergeld) ist keine Sozialversicherungsleistung.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Leistung der passenden Sozialversicherung zu.',
        paare: [
          { begriff: 'Lohnfortzahlung / Krankengeld nach 6 Wochen', definition: 'Gesetzliche Krankenversicherung' },
          { begriff: 'Altersrente', definition: 'Gesetzliche Rentenversicherung' },
          { begriff: 'Pflegeheim / ambulante Pflege', definition: 'Pflegeversicherung' },
          { begriff: 'ALG I nach Jobverlust', definition: 'Arbeitslosenversicherung' },
          { begriff: 'Arbeitsunfall / Berufskrankheit', definition: 'Unfallversicherung' }
        ],
        erklaerung: 'Typisches Zuordnungsmuster in der WiSo. Gut zu unterscheiden: Krankengeld (KV) vs Lohnfortzahlung (AG, erste 6 Wochen).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ab welcher Einkommensgrenze kann man sich als Arbeitnehmer 2024 PRIVAT krankenversichern?',
        optionen: [
          'Ab 3.000 € brutto',
          'Ab Überschreiten der Jahresarbeitsentgeltgrenze (aktuell ~69.300 €/Jahr)',
          'Ab 100.000 €',
          'Egal, jeder kann'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Jahresarbeitsentgeltgrenze (JAEG) 2024 ca. 69.300 €. Selbstständige und Beamte haben Wahlfreiheit. Genauer Wert ändert sich jährlich.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Die Beiträge zur Sozialversicherung werden in der Regel paritätisch von AG und AN getragen.',
        korrekt: true,
        erklaerung: 'Ausnahmen: Unfallversicherung (nur AG), Zusatzbeitrag in der KV (AN allein), früher Pflege-Zuschlag für Kinderlose.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie lange zahlt der Arbeitgeber bei Krankheit weiter Lohn fort, bevor die Krankenkasse Krankengeld übernimmt?',
        optionen: ['1 Woche', '2 Wochen', '6 Wochen', '12 Wochen'],
        korrekteAntwort: 2,
        erklaerung: 'Entgeltfortzahlungsgesetz: 6 Wochen voller Lohn durch AG. Danach übernimmt die KV Krankengeld (ca. 70 % des Bruttos, max. 90 % netto).'
      }
    ]
  },

  // ========= wiso-tarif-mitbestimmung =========
  {
    themaId: 'wiso-tarif-mitbestimmung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Wer wählt den Betriebsrat?',
        optionen: [
          'Die Geschäftsführung',
          'Die Gewerkschaft',
          'Die Arbeitnehmer des Betriebs in geheimer und unmittelbarer Wahl',
          'Die IHK'
        ],
        korrekteAntwort: 2,
        erklaerung: '§ 14 BetrVG. Wahl alle 4 Jahre. Voraussetzung: Betrieb mit mindestens 5 wahlberechtigten Arbeitnehmern.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ab wie vielen Arbeitnehmern kann ein Betriebsrat gewählt werden?',
        optionen: ['2', '5', '10', '20'],
        korrekteAntwort: 1,
        erklaerung: '§ 1 BetrVG: mindestens 5 wahlberechtigte AN, davon 3 wählbar. Größe des BR steigt mit Belegschaft (§ 9 BetrVG).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist KEINE Aufgabe des Betriebsrats?',
        optionen: [
          'Mitbestimmung bei sozialen Angelegenheiten',
          'Überwachung der Einhaltung von Gesetzen und Tarifverträgen',
          'Vertretung der Arbeitnehmer gegenüber Arbeitgeber',
          'Führen von Tarifverhandlungen'
        ],
        korrekteAntwort: 3,
        erklaerung: 'Tarifverhandlungen führen Gewerkschaften. Betriebsrat = auf Betriebsebene, Gewerkschaft = branchen-/überbetrieblich.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Gremium vertritt Auszubildende und Jugendliche?',
        optionen: ['Betriebsrat', 'JAV (Jugend- und Auszubildendenvertretung)', 'Ausbilderrat', 'Azubi-Kammer'],
        korrekteAntwort: 1,
        erklaerung: 'JAV wird bei mindestens 5 AN unter 18 oder Azubis unter 25 gewählt. Nimmt beratend an BR-Sitzungen teil.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Arten von Tarifverträgen gibt es?',
        optionen: [
          'Firmen- und Flächentarifvertrag',
          'Einzel- und Gruppenvertrag',
          'Kurz- und Langzeitvertrag',
          'Pflicht- und Optionsvertrag'
        ],
        korrekteAntwort: 0,
        erklaerung: 'Flächentarifvertrag (Branche) vs. Firmen-/Haustarifvertrag (einzelner AG). Dazu: Rahmen-, Mantel-, Lohn-/Gehaltstarifvertrag.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Der Betriebsrat hat ein Mitbestimmungsrecht bei der Einstellung neuer Mitarbeiter.',
        korrekt: true,
        erklaerung: '§ 99 BetrVG: Bei Betrieben ab 20 AN muss der BR Einstellungen, Versetzungen und Eingruppierungen zustimmen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist das Ziel eines Streiks?',
        optionen: [
          'Dem Arbeitgeber wirtschaftlich schaden',
          'Druckmittel zur Durchsetzung tariflicher Forderungen',
          'Mehr Urlaubstage für alle',
          'Kündigung des Tarifvertrags'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Streik ist das legale Arbeitskampfmittel der Gewerkschaft. Voraussetzung: tariflich regelbares Ziel, Streikbeschluss, Ultima Ratio.'
      }
    ]
  },

  // ========= wiso-wirtschaftsordnung =========
  {
    themaId: 'wiso-wirtschaftsordnung',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche Wirtschaftsordnung herrscht in Deutschland?',
        optionen: ['Planwirtschaft', 'Freie Marktwirtschaft', 'Soziale Marktwirtschaft', 'Zentralverwaltungswirtschaft'],
        korrekteAntwort: 2,
        erklaerung: 'Soziale Marktwirtschaft = freier Markt + soziale Absicherung + Regulierung. Konzept von Ludwig Erhard (1950er).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie entsteht der Gleichgewichtspreis auf einem Markt?',
        optionen: [
          'Durch staatliche Festsetzung',
          'Wo Angebot und Nachfrage übereinstimmen',
          'Durch Zufall',
          'Wer zuerst kauft, bestimmt den Preis'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Marktgleichgewicht: Menge, die Anbieter verkaufen wollen = Menge, die Nachfrager kaufen wollen.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Marktformen zu.',
        paare: [
          { begriff: 'Monopol', definition: 'Ein Anbieter, viele Nachfrager' },
          { begriff: 'Oligopol', definition: 'Wenige Anbieter, viele Nachfrager' },
          { begriff: 'Polypol', definition: 'Viele Anbieter, viele Nachfrager' },
          { begriff: 'Monopson', definition: 'Viele Anbieter, ein Nachfrager' }
        ],
        erklaerung: 'Klassifikation nach Anzahl Anbieter/Nachfrager. Beispiel Monopol: Deutsche Bahn im Fernverkehr (früher).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was passiert bei einem Preisanstieg eines Gutes normalerweise mit der Nachfrage?',
        optionen: [
          'Sie steigt',
          'Sie sinkt',
          'Sie bleibt gleich',
          'Sie verdoppelt sich'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Nachfragegesetz: Höherer Preis → geringere Nachfrage (bei normalen Gütern). Ausnahmen: Luxus-/Giffen-Güter.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Wirtschaftsteilnehmer bilden den einfachen Wirtschaftskreislauf?',
        optionen: [
          'Unternehmen und Staat',
          'Haushalte und Unternehmen',
          'Staat und Banken',
          'Haushalte und Staat'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Einfacher Kreislauf: Haushalte stellen Arbeitskraft, erhalten Lohn. Unternehmen bieten Waren, erhalten Kaufpreis. Erweiterter Kreislauf ergänzt Staat, Banken, Ausland.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'In einer Marktwirtschaft wird die Produktion zentral geplant.',
        korrekt: false,
        erklaerung: 'Zentrale Planung ist Planwirtschaft (z.B. DDR). In der Marktwirtschaft regelt der Preismechanismus die Produktion.'
      }
    ]
  },

  // ========= wiso-rechtsformen =========
  {
    themaId: 'wiso-rechtsformen',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Wie hoch ist das Mindeststammkapital einer GmbH?',
        optionen: ['1 €', '10.000 €', '25.000 €', '50.000 €'],
        korrekteAntwort: 2,
        erklaerung: 'GmbH: 25.000 € Stammkapital, davon bei Gründung mindestens 12.500 € eingezahlt.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie hoch ist das Mindestgrundkapital einer AG?',
        optionen: ['25.000 €', '50.000 €', '100.000 €', '500.000 €'],
        korrekteAntwort: 1,
        erklaerung: 'AG: 50.000 € Grundkapital, in Aktien aufgeteilt.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Rechtsformen ihrer Haftungsart zu.',
        paare: [
          { begriff: 'Einzelunternehmen', definition: 'Vollhaftung mit Privatvermögen' },
          { begriff: 'OHG', definition: 'Alle Gesellschafter haften persönlich und unbeschränkt' },
          { begriff: 'KG', definition: 'Komplementär: unbeschränkt, Kommanditist: beschränkt auf Einlage' },
          { begriff: 'GmbH', definition: 'Haftung auf Gesellschaftsvermögen beschränkt' },
          { begriff: 'AG', definition: 'Haftung auf Grundkapital beschränkt' }
        ],
        erklaerung: 'Faustregel: Personengesellschaften (OHG, KG, GbR) haften persönlich. Kapitalgesellschaften (GmbH, AG, UG) nur mit Gesellschaftsvermögen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Rechtsform benötigt mindestens zwei Gesellschafter?',
        optionen: ['Einzelunternehmen', 'GmbH', 'OHG', 'UG'],
        korrekteAntwort: 2,
        erklaerung: 'OHG = Offene Handelsgesellschaft, mindestens 2 Personen. GmbH und UG können auch als Ein-Personen-Gesellschaft gegründet werden.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches ist KEIN Organ einer AG?',
        optionen: ['Vorstand', 'Aufsichtsrat', 'Hauptversammlung', 'Betriebsrat'],
        korrekteAntwort: 3,
        erklaerung: 'AG-Organe: Vorstand (Geschäftsführung), Aufsichtsrat (Kontrolle), Hauptversammlung (Aktionäre). Betriebsrat ist kein Organ.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Eine UG (haftungsbeschränkt) ist eine besondere Form der GmbH und kann mit nur 1 € Stammkapital gegründet werden.',
        korrekt: true,
        erklaerung: 'UG = "Mini-GmbH". Mindestens 1 € Stammkapital, aber Pflicht zur Gewinnrücklage (25 %) bis 25.000 € erreicht sind.'
      }
    ]
  },

  // ========= wiso-betrieb =========
  {
    themaId: 'wiso-betrieb',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welcher ist KEIN klassischer Produktionsfaktor?',
        optionen: ['Arbeit', 'Boden', 'Kapital', 'Zeit'],
        korrekteAntwort: 3,
        erklaerung: 'Klassisch: Arbeit, Boden, Kapital. In der BWL zusätzlich: Betriebsmittel, Werkstoffe, dispositive Arbeit.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist Aufbauorganisation?',
        optionen: [
          'Die zeitliche Abfolge von Arbeitsschritten',
          'Das hierarchische Gefüge von Stellen und Abteilungen',
          'Der Bauplan eines Gebäudes',
          'Ein Organigramm der Kunden'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Aufbau = "wer macht was" (Stellen, Abteilungen, Hierarchie). Ablauf = "wann und wie" (Prozesse).'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Organisationsformen zu.',
        paare: [
          { begriff: 'Einliniensystem', definition: 'Jede Stelle hat genau einen Vorgesetzten' },
          { begriff: 'Mehrliniensystem', definition: 'Stelle hat mehrere fachliche Vorgesetzte' },
          { begriff: 'Stab-Linien-Organisation', definition: 'Linien-Aufbau mit beratenden Stabsstellen' },
          { begriff: 'Matrixorganisation', definition: 'Funktion + Projekt als zwei Dimensionen' }
        ],
        erklaerung: 'Einliniensystem ist am häufigsten. Matrix findet man oft in Projekt-/Produktunternehmen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was beschreibt die Ablauforganisation?',
        optionen: [
          'Die Hierarchie im Unternehmen',
          'Die zeitliche und räumliche Anordnung von Arbeitsprozessen',
          'Die Rechtsform',
          'Die Mitarbeiterzahl'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Ablauforganisation strukturiert Prozesse: Wer macht was wann in welcher Reihenfolge?'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche betriebliche Funktion umfasst Einkauf, Lagerung und Bereitstellung von Materialien?',
        optionen: ['Produktion', 'Beschaffung / Materialwirtschaft', 'Absatz', 'Personalwesen'],
        korrekteAntwort: 1,
        erklaerung: 'Beschaffung ist vorgelagerte Funktion. Im Wertschöpfungsprozess: Beschaffung → Produktion → Absatz.'
      }
    ]
  },

  // ========= wiso-politik-konjunktur =========
  {
    themaId: 'wiso-politik-konjunktur',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche vier Ziele bilden das magische Viereck der Wirtschaftspolitik?',
        optionen: [
          'Wachstum, Preisstabilität, Beschäftigung, außenwirtschaftliches Gleichgewicht',
          'Export, Import, Inflation, Arbeitslosigkeit',
          'Steuern, Ausgaben, Zinsen, Wechselkurse',
          'Nachhaltigkeit, Gerechtigkeit, Freiheit, Wohlstand'
        ],
        korrekteAntwort: 0,
        erklaerung: 'Stabilitätsgesetz 1967: stetiges Wachstum, Preisstabilität, hoher Beschäftigungsstand, außenwirtschaftl. Gleichgewicht. Identische Frage in mehreren WiSo-Jahrgängen.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Konjunkturphasen ihrer Beschreibung zu.',
        paare: [
          { begriff: 'Aufschwung (Expansion)', definition: 'Wachstum nimmt zu, Beschäftigung steigt' },
          { begriff: 'Boom (Hochkonjunktur)', definition: 'Maximale Auslastung, Inflationsgefahr' },
          { begriff: 'Abschwung (Rezession)', definition: 'Nachfrage sinkt, Investitionen gehen zurück' },
          { begriff: 'Tief (Depression)', definition: 'Wirtschaft auf Tiefpunkt, hohe Arbeitslosigkeit' }
        ],
        erklaerung: 'Zyklus aus 4 Phasen. Dauer historisch 5–8 Jahre.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist Inflation?',
        optionen: [
          'Sinkendes Preisniveau',
          'Allgemeiner Anstieg des Preisniveaus (Kaufkraftverlust)',
          'Hohe Arbeitslosigkeit',
          'Niedrige Zinsen'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Inflation = Geld verliert Kaufkraft. EZB-Ziel: 2 % mittelfristig. Deflation (Gegenteil) gilt als gefährlicher, weil sie Konsum bremst.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Institution betreibt die Geldpolitik im Euroraum?',
        optionen: ['Deutsche Bundesbank', 'EU-Kommission', 'Europäische Zentralbank (EZB)', 'Bundesfinanzministerium'],
        korrekteAntwort: 2,
        erklaerung: 'Seit 1999 macht die EZB die Geldpolitik für alle Euro-Länder. Nationale Zentralbanken setzen sie um.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Eine Erhöhung der Leitzinsen wirkt tendenziell inflationsdämpfend.',
        korrekt: true,
        erklaerung: 'Höhere Zinsen → Kredite teurer → Nachfrage sinkt → Preise steigen weniger. Klassisches Instrument der EZB gegen Inflation.'
      }
    ]
  },

  // ========= wiso-steuern =========
  {
    themaId: 'wiso-steuern',
    uebungen: [
      {
        typ: 'zuordnung',
        frage: 'Ordne die Steuern ihrer Art zu.',
        paare: [
          { begriff: 'Einkommensteuer', definition: 'Direkte Steuer (Lohnsteuer, progressiv)' },
          { begriff: 'Umsatzsteuer (MwSt.)', definition: 'Indirekte Steuer (19% / 7% erm.)' },
          { begriff: 'Körperschaftsteuer', definition: 'Direkte Steuer für juristische Personen' },
          { begriff: 'Gewerbesteuer', definition: 'Direkte Steuer für Gewerbetreibende' },
          { begriff: 'Grunderwerbsteuer', definition: 'Verkehrsteuer beim Immobilienkauf' }
        ],
        erklaerung: 'Direkte Steuer = Steuerschuldner = Steuerträger. Indirekt = wird über Preis weitergegeben (USt.).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist eine progressive Steuer?',
        optionen: [
          'Der Steuersatz ist immer gleich',
          'Höheres Einkommen → höherer prozentualer Steuersatz',
          'Wird nur für Unternehmen erhoben',
          'Wird nur einmal im Leben gezahlt'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Einkommensteuer ist progressiv (14 % bis 45 % Spitzensteuersatz). Proportional wäre konstant (z.B. Körperschaftsteuer mit 15 %).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie hoch ist der normale Umsatzsteuersatz in Deutschland?',
        optionen: ['7 %', '15 %', '19 %', '25 %'],
        korrekteAntwort: 2,
        erklaerung: '19 % Regelsatz, 7 % ermäßigt (Lebensmittel, Bücher, ÖPNV). Wird vom Endverbraucher getragen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Steuer zahlt ein Unternehmer an die Gemeinde?',
        optionen: ['Einkommensteuer', 'Gewerbesteuer', 'Umsatzsteuer', 'Körperschaftsteuer'],
        korrekteAntwort: 1,
        erklaerung: 'Gewerbesteuer ist Gemeindesteuer. Die Höhe hängt vom Hebesatz der jeweiligen Gemeinde ab.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Die Umsatzsteuer ist eine direkte Steuer.',
        korrekt: false,
        erklaerung: 'USt. ist indirekt: Unternehmen führt sie ans Finanzamt ab, bezahlt wird sie aber vom Endverbraucher über den Preis.'
      }
    ]
  },

  // ========= wiso-nachhaltigkeit =========
  {
    themaId: 'wiso-nachhaltigkeit',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche drei Dimensionen bilden das Nachhaltigkeitsdreieck?',
        optionen: [
          'Gesundheit, Bildung, Politik',
          'Ökologie, Ökonomie, Soziales',
          'Vergangenheit, Gegenwart, Zukunft',
          'Import, Export, Binnenmarkt'
        ],
        korrekteAntwort: 1,
        erklaerung: '„Drei Säulen der Nachhaltigkeit". Auch bekannt als ESG-Prinzip (Environment, Social, Governance).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wofür steht die Charta der Vielfalt?',
        optionen: [
          'Umweltschutzrichtlinie',
          'Selbstverpflichtung zur Förderung von Diversität und Chancengleichheit am Arbeitsplatz',
          'Steuerrichtlinie',
          'Handelsabkommen'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Unterzeichnende Unternehmen verpflichten sich zu Wertschätzung unabhängig von Geschlecht, Alter, Herkunft, Religion, Behinderung, Orientierung. Kommt seit WiSo W22 regelmäßig.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches EU-Organ erlässt gemeinsam mit dem Rat die EU-Gesetze?',
        optionen: [
          'Europäischer Gerichtshof',
          'Europäisches Parlament',
          'EU-Kommission',
          'Europarat'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Parlament + Rat = Gesetzgebung (ordentliches Gesetzgebungsverfahren). Kommission hat das Initiativrecht. Gerichtshof = Judikative.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Gesetz regelt den Arbeitsschutz in Deutschland?',
        optionen: ['ArbSchG (Arbeitsschutzgesetz)', 'BGB', 'GG', 'BBiG'],
        korrekteAntwort: 0,
        erklaerung: 'ArbSchG verpflichtet den Arbeitgeber, Gefährdungen zu beurteilen und Maßnahmen zu ergreifen. Konkretisiert durch BGV, BetrSichV.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Die SDGs (Sustainable Development Goals) der UN umfassen 17 Ziele.',
        korrekt: true,
        erklaerung: '17 SDGs, 169 Unterziele, Laufzeit bis 2030. Ziele z.B. „Keine Armut", „Hochwertige Bildung", „Maßnahmen zum Klimaschutz".'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Organ der EU vertritt die Regierungen der Mitgliedstaaten?',
        optionen: ['Parlament', 'Rat der EU (Ministerrat)', 'Kommission', 'Rechnungshof'],
        korrekteAntwort: 1,
        erklaerung: 'Rat der EU (= Ministerrat): Minister der Nationalstaaten. Nicht zu verwechseln mit Europäischem Rat (Staats-/Regierungschefs).'
      }
    ]
  }
];
