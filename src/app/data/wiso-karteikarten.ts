import { KarteikartenSet } from '../models/app.models';

export const WISO_KARTEIKARTEN: KarteikartenSet[] = [
  {
    themaId: 'wiso-berufsausbildung',
    karten: [
      { id: 'ba-01', frage: 'Welches Gesetz regelt die Berufsausbildung?', antwort: 'Berufsbildungsgesetz (BBiG)', erklaerung: 'Ergänzt durch HwO (Handwerksordnung) im Handwerk.' },
      { id: 'ba-02', frage: 'Mindest- und Höchstdauer der Probezeit in der Ausbildung?', antwort: 'Mindestens 1 Monat, maximal 4 Monate', erklaerung: '§ 20 BBiG. In der Probezeit Kündigung jederzeit ohne Gründe möglich.' },
      { id: 'ba-03', frage: 'Wer ist im dualen System der zweite Lernort neben dem Betrieb?', antwort: 'Die Berufsschule', erklaerung: 'Duales System = Betrieb + Berufsschule. Meist 3,5 Tage Betrieb, 1,5 Tage Schule.' },
      { id: 'ba-04', frage: 'Welche Kammer ist für kaufmännische und IT-Berufe die zuständige Stelle?', antwort: 'Industrie- und Handelskammer (IHK)', erklaerung: 'Handwerk → HWK, Landwirtschaft → Landwirtschaftskammer, freie Berufe → eigene Kammern.' },
      { id: 'ba-05', frage: 'Was ist der Europass?', antwort: 'Set standardisierter EU-Dokumente (Lebenslauf, Zeugniserläuterung, Sprachenpass) für die europaweite Anerkennung von Qualifikationen', erklaerung: 'Frage taucht in fast jeder WiSo-Prüfung 2020-2022 auf.' },
      { id: 'ba-06', frage: 'Welche Pflichten hat ein Auszubildender?', antwort: 'Lernpflicht, Weisungsgebundenheit, Berichtsheft führen, Sorgfaltspflicht, Schweigepflicht, Teilnahme an Berufsschule', erklaerung: '§ 13 BBiG.' },
      { id: 'ba-07', frage: 'Muss der Ausbildungsbetrieb nach bestandener Prüfung übernehmen?', antwort: 'Nein, es besteht keine Übernahmepflicht', erklaerung: 'Ausnahme: Mitglieder der JAV haben besonderen Kündigungsschutz.' },
      { id: 'ba-08', frage: 'Was ist ein Berichtsheft?', antwort: 'Schriftlicher Ausbildungsnachweis – Zulassungsvoraussetzung zur Prüfung', erklaerung: '§ 13 BBiG. Muss regelmäßig geführt und vom Ausbilder kontrolliert werden.' },
      { id: 'ba-09', frage: 'Welche Prüfungen gibt es im neuen (gestreckten) Prüfungsmodell?', antwort: 'AP Teil 1 (Mitte der Ausbildung) und AP Teil 2 (Ausbildungsende)', erklaerung: 'Bei IT-Berufen gilt das gestreckte Modell seit 2020 (AO 2020).' },
      { id: 'ba-10', frage: 'Wer erstellt die Ausbildungsordnung?', antwort: 'Das Bundesministerium für Wirtschaft/BiBB in Abstimmung mit Sozialpartnern', erklaerung: 'Ordnungsverfahren; dauert mehrere Jahre. Für Fachinformatiker zuletzt 2020.' },
      { id: 'ba-11', frage: 'Was passiert bei Weiterbeschäftigung ohne neuen Vertrag nach Ausbildungsende?', antwort: 'Unbefristetes Arbeitsverhältnis mit den bisherigen Bedingungen', erklaerung: '§ 24 BBiG. Kündigung sollte vorher schriftlich erfolgen, wenn keine Übernahme gewollt ist.' },
      { id: 'ba-12', frage: 'Ab wann ist die vorzeitige Zulassung zur Abschlussprüfung möglich?', antwort: 'Bei überdurchschnittlichen Leistungen (ca. 2,49 oder besser) vor Ablauf der regulären Ausbildungszeit', erklaerung: '§ 45 BBiG: um bis zu 6 Monate verkürzen.' }
    ]
  },

  {
    themaId: 'wiso-arbeitsrecht',
    karten: [
      { id: 'ar-01', frage: 'Wie viel Urlaub steht einem 17-jährigen Azubi mindestens zu?', antwort: '27 Werktage (16 zu Jahresbeginn → 27; 17 → 25; 18 → 23)', erklaerung: '§ 19 JArbSchG. Diese Frage taucht fast jährlich wortgleich auf.' },
      { id: 'ar-02', frage: 'Wie viele Urlaubstage mindestens pro Jahr (5-Tage-Woche, BUrlG)?', antwort: '20 Arbeitstage (entspricht 24 Werktagen)', erklaerung: '§ 3 BUrlG. Tarifverträge regeln meist mehr (meist 28-30).' },
      { id: 'ar-03', frage: 'In welcher Form muss eine Kündigung erfolgen?', antwort: 'Schriftlich (eigenhändige Unterschrift) – elektronische Form ist ausgeschlossen', erklaerung: '§ 623 BGB. E-Mail, SMS, WhatsApp → unwirksam.' },
      { id: 'ar-04', frage: 'Welche Kündigungsfrist hat ein AG für einen AN mit 5 Jahren Betriebszugehörigkeit?', antwort: '2 Monate zum Monatsende', erklaerung: '§ 622 BGB. Fristen verlängern sich stufenweise: 2 J=1M, 5 J=2M, 8 J=3M, 10 J=4M, 12 J=5M, 15 J=6M, 20 J=7M.' },
      { id: 'ar-05', frage: 'Was ist Voraussetzung für eine fristlose Kündigung?', antwort: 'Ein wichtiger Grund (§ 626 BGB), der die Fortsetzung unzumutbar macht', erklaerung: 'Erklärungsfrist: 2 Wochen ab Kenntnis des Grundes.' },
      { id: 'ar-06', frage: 'Maximale tägliche Arbeitszeit nach Arbeitszeitgesetz?', antwort: '8 Stunden, ausnahmsweise 10 Stunden (wenn im 6-Monats-Schnitt 8 h gewahrt bleiben)', erklaerung: '§ 3 ArbZG.' },
      { id: 'ar-07', frage: 'Welche Pausen sind bei 9 Stunden Arbeit vorgeschrieben?', antwort: '45 Minuten', erklaerung: '§ 4 ArbZG: 6-9 h → 30 min, >9 h → 45 min. In Blöcken von mindestens 15 Minuten.' },
      { id: 'ar-08', frage: 'Wie lange darf ein Minderjähriger nach JArbSchG täglich maximal arbeiten?', antwort: '8 Stunden (40 h/Woche)', erklaerung: '§ 8 JArbSchG. Nachtarbeit und Akkordarbeit grundsätzlich verboten.' },
      { id: 'ar-09', frage: 'Wann besteht Kündigungsschutz nach KSchG?', antwort: 'Wenn der Betrieb > 10 Mitarbeiter hat UND das Arbeitsverhältnis > 6 Monate besteht', erklaerung: 'Ordentliche Kündigung dann nur mit sozial gerechtfertigtem Grund (personen-/verhaltens-/betriebsbedingt).' },
      { id: 'ar-10', frage: 'Was ist ein Tarifvertrag?', antwort: 'Kollektiver Vertrag zwischen Gewerkschaft und Arbeitgeberverband (oder einzelnem AG) über Arbeitsbedingungen', erklaerung: 'Regelt Löhne, Arbeitszeit, Urlaub etc. Gilt für Tarifgebundene oder per Allgemeinverbindlicherklärung.' },
      { id: 'ar-11', frage: 'Bekommt ein kranker AN seinen Lohn weiter?', antwort: 'Ja – Entgeltfortzahlung durch den Arbeitgeber für 6 Wochen', erklaerung: 'Danach Krankengeld von der Krankenkasse (ca. 70 % des Bruttos).' },
      { id: 'ar-12', frage: 'Was ist der Unterschied zwischen Kündigung und Aufhebungsvertrag?', antwort: 'Kündigung = einseitige Erklärung; Aufhebungsvertrag = einvernehmliche Beendigung', erklaerung: 'Aufhebungsvertrag kann zu Sperrzeit beim ALG führen.' }
    ]
  },

  {
    themaId: 'wiso-sozialversicherung',
    karten: [
      { id: 'sv-01', frage: 'Welche 5 Säulen hat die deutsche Sozialversicherung?', antwort: 'Krankenversicherung, Rentenversicherung, Pflegeversicherung, Arbeitslosenversicherung, Unfallversicherung', erklaerung: 'KV + RV + PV + AV + UV.' },
      { id: 'sv-02', frage: 'Welche Sozialversicherung zahlt der Arbeitgeber allein?', antwort: 'Die Unfallversicherung (Berufsgenossenschaft)', erklaerung: 'Alle anderen sind paritätisch (je zur Hälfte AG/AN), mit wenigen Ausnahmen.' },
      { id: 'sv-03', frage: 'Was zahlt die Krankenversicherung nach 6 Wochen Krankheit?', antwort: 'Krankengeld (ca. 70% des Bruttos, max. 90% netto)', erklaerung: 'Bis zu 78 Wochen bei derselben Krankheit in 3 Jahren.' },
      { id: 'sv-04', frage: 'Welche Leistung gibt es aus der Arbeitslosenversicherung?', antwort: 'Arbeitslosengeld I (ALG I)', erklaerung: 'Dauer: je nach Alter und Einzahlungsjahren 6-24 Monate. 60 % (67 % mit Kind) vom vorherigen Nettolohn.' },
      { id: 'sv-05', frage: 'Was ist die JAEG und was bewirkt sie?', antwort: 'Jahresarbeitsentgeltgrenze; wer mit Bruttoverdienst darüber liegt, kann sich privat krankenversichern', erklaerung: '2024 ca. 69.300 €. Darunter Pflicht in der GKV.' },
      { id: 'sv-06', frage: 'Wie hoch ist der Arbeitgeberanteil an der Sozialversicherung ungefähr?', antwort: 'Ca. 20 % auf das Bruttogehalt', erklaerung: 'Zusätzlich zum Bruttogehalt als Lohnnebenkosten. Der AN zahlt etwa genauso viel, wird aber direkt abgezogen.' },
      { id: 'sv-07', frage: 'Welche Versicherung zahlt bei einem Arbeitsunfall?', antwort: 'Die gesetzliche Unfallversicherung (Berufsgenossenschaft)', erklaerung: 'Auch für Wegeunfall zwischen Wohnung und Arbeit.' },
      { id: 'sv-08', frage: 'Wann besteht Versicherungspflicht in der gesetzlichen Rentenversicherung?', antwort: 'Bei abhängiger Beschäftigung ab 520 € Verdienst (Midijob ab 520,01 €, Minijob bis 520 € versicherungsfrei)', erklaerung: 'Minijobs seit 2022 mit Rentenversicherungspflicht, Befreiung möglich.' },
      { id: 'sv-09', frage: 'Wer zahlt keine Beiträge in die gesetzliche Krankenversicherung?', antwort: 'Beamte, Selbständige (außerhalb bestimmter Berufe), Arbeitnehmer oberhalb der JAEG (wenn privat versichert)', erklaerung: 'Beamte bekommen Beihilfe + private Krankenversicherung.' },
      { id: 'sv-10', frage: 'Welches Prinzip liegt der gesetzlichen Sozialversicherung zugrunde?', antwort: 'Solidar- und Äquivalenzprinzip', erklaerung: 'Solidarprinzip: Starke zahlen für Schwache. Äquivalenz: Beitragshöhe korreliert mit Leistungshöhe (v.a. bei der Rente).' },
      { id: 'sv-11', frage: 'Was ist der Unterschied zwischen Pflicht- und freiwilliger Versicherung in der GKV?', antwort: 'Pflicht: kraft Gesetzes (z.B. AN unter JAEG). Freiwillig: selbst beigetreten (z.B. Selbständige)', erklaerung: 'Freiwillig Versicherte zahlen auf alle Einkünfte Beitrag, nicht nur Lohn.' },
      { id: 'sv-12', frage: 'Wie lange zahlt der AG bei Krankheit Lohn weiter?', antwort: '6 Wochen (42 Tage) – dann übernimmt die GKV', erklaerung: 'Entgeltfortzahlungsgesetz (EFZG). Voraussetzung: 4 Wochen Betriebszugehörigkeit.' }
    ]
  },

  {
    themaId: 'wiso-tarif-mitbestimmung',
    karten: [
      { id: 'tm-01', frage: 'Ab wie vielen AN kann ein Betriebsrat gewählt werden?', antwort: 'Ab 5 wahlberechtigten Arbeitnehmern, davon 3 wählbar', erklaerung: '§ 1 BetrVG.' },
      { id: 'tm-02', frage: 'Wie oft wird der Betriebsrat gewählt?', antwort: 'Alle 4 Jahre', erklaerung: '§ 13 BetrVG. Regelmäßige Wahlen in den Monaten März-Mai der Wahljahre.' },
      { id: 'tm-03', frage: 'Was ist die JAV?', antwort: 'Jugend- und Auszubildendenvertretung', erklaerung: 'Vertretung der AN unter 18 und Azubis unter 25. Pflicht ab 5 entsprechenden Personen.' },
      { id: 'tm-04', frage: 'Welche Arten von Tarifverträgen unterscheidet man?', antwort: 'Flächentarifvertrag (Branche) und Firmen-/Haustarifvertrag (einzelner Betrieb)', erklaerung: 'Dazu: Rahmen-, Mantel-, Lohn-/Gehaltstarifvertrag (nach Inhalt).' },
      { id: 'tm-05', frage: 'Hat der Betriebsrat ein Mitbestimmungsrecht bei Einstellungen?', antwort: 'Ja, in Betrieben ab 20 AN (§ 99 BetrVG)', erklaerung: 'Der AG muss den BR informieren; dieser kann unter bestimmten Gründen die Zustimmung verweigern.' },
      { id: 'tm-06', frage: 'Welche Organisation führt für AN Tarifverhandlungen?', antwort: 'Die Gewerkschaft', erklaerung: 'Arbeitgeberseite: Arbeitgeberverband (branchenweit) oder einzelner AG.' },
      { id: 'tm-07', frage: 'Wann ist ein Streik legal?', antwort: 'Zur Durchsetzung tariflicher Ziele, nach Urabstimmung, durch eine Gewerkschaft getragen, nach Ausschöpfung von Verhandlungen', erklaerung: 'Wilder Streik (ohne Gewerkschaft) = illegal. Politische Streiks sind unzulässig.' },
      { id: 'tm-08', frage: 'Was ist eine Betriebsvereinbarung?', antwort: 'Vereinbarung zwischen Betriebsrat und Arbeitgeber über betriebliche Angelegenheiten', erklaerung: 'Wirkt unmittelbar wie ein Gesetz für alle AN des Betriebs. Regelt u.a. Gleitzeit, Pausenzeiten.' },
      { id: 'tm-09', frage: 'In welchem Gesetz sind Betriebsratsrechte geregelt?', antwort: 'Betriebsverfassungsgesetz (BetrVG)', erklaerung: 'Für öffentlichen Dienst: Personalvertretungsgesetze des Bundes und der Länder.' },
      { id: 'tm-10', frage: 'Was ist ein Mitbestimmungsrecht (erzwingbar) vs. Mitwirkungsrecht?', antwort: 'Mitbestimmung: ohne Zustimmung des BR ist keine Maßnahme möglich. Mitwirkung: BR muss nur informiert / angehört werden', erklaerung: 'Mitbestimmung v.a. bei sozialen Angelegenheiten (§ 87 BetrVG).' },
      { id: 'tm-11', frage: 'Was ist die Friedenspflicht?', antwort: 'Während der Laufzeit eines Tarifvertrags darf nicht gestreikt werden, um die geregelten Punkte zu ändern', erklaerung: 'Nach Ende des Tarifvertrags: Streik wieder zulässig.' },
      { id: 'tm-12', frage: 'Was ist eine Aussperrung?', antwort: 'Arbeitskampfmittel des Arbeitgebers: AN werden von der Arbeit ausgeschlossen und erhalten keinen Lohn', erklaerung: 'Pendant zum Streik der AN-Seite. Zulässig nur als Abwehrmaßnahme.' }
    ]
  },

  {
    themaId: 'wiso-wirtschaftsordnung',
    karten: [
      { id: 'wo-01', frage: 'Welche Wirtschaftsordnung herrscht in Deutschland?', antwort: 'Soziale Marktwirtschaft', erklaerung: 'Kombination aus freier Marktwirtschaft und sozialer Absicherung. Konzept von Ludwig Erhard.' },
      { id: 'wo-02', frage: 'Was ist das Marktgleichgewicht?', antwort: 'Der Punkt, an dem angebotene Menge = nachgefragte Menge zu einem bestimmten Preis', erklaerung: 'Gleichgewichtspreis. Bei höherem Preis: Angebotsüberhang. Bei niedrigerem: Nachfrageüberhang.' },
      { id: 'wo-03', frage: 'Wie heißen die drei Grundbegriffe der Marktwirtschaft?', antwort: 'Angebot, Nachfrage, Preis', erklaerung: 'Die drei lenken die Produktion über den Preismechanismus.' },
      { id: 'wo-04', frage: 'Marktform: ein Anbieter, viele Nachfrager?', antwort: 'Monopol', erklaerung: 'Beispiel: Deutsche Bahn im Schienenfernverkehr (weitgehend).' },
      { id: 'wo-05', frage: 'Marktform: wenige Anbieter, viele Nachfrager?', antwort: 'Oligopol', erklaerung: 'Beispiele: Mineralöl- und Energiemarkt, Mobilfunkanbieter.' },
      { id: 'wo-06', frage: 'Marktform: viele Anbieter, viele Nachfrager?', antwort: 'Polypol (vollkommene Konkurrenz)', erklaerung: 'Beispiel: Wochenmarkt, Lebensmittelhandel.' },
      { id: 'wo-07', frage: 'Was wird im einfachen Wirtschaftskreislauf modelliert?', antwort: 'Tausch zwischen Haushalten und Unternehmen: Arbeitskraft gegen Lohn, Ware gegen Geld', erklaerung: 'Erweitert: Staat, Banken, Ausland.' },
      { id: 'wo-08', frage: 'Gesetz der Nachfrage?', antwort: 'Mit steigendem Preis sinkt die nachgefragte Menge (ceteris paribus)', erklaerung: 'Ausnahmen: Snob-/Giffen-/Veblen-Güter.' },
      { id: 'wo-09', frage: 'Gesetz des Angebots?', antwort: 'Mit steigendem Preis steigt die angebotene Menge', erklaerung: 'Unternehmen produzieren mehr, wenn die Marge wächst.' },
      { id: 'wo-10', frage: 'Welche Funktion hat der Staat in der sozialen Marktwirtschaft?', antwort: 'Rahmenbedingungen setzen, Wettbewerb schützen, soziale Absicherung, öffentliche Güter bereitstellen', erklaerung: 'Der Markt regelt, der Staat korrigiert Marktversagen.' }
    ]
  },

  {
    themaId: 'wiso-rechtsformen',
    karten: [
      { id: 'rf-01', frage: 'Mindeststammkapital einer GmbH?', antwort: '25.000 €, davon bei Gründung mindestens 12.500 € einzuzahlen', erklaerung: '§ 5 GmbHG. Eintragung ins Handelsregister erforderlich.' },
      { id: 'rf-02', frage: 'Mindestgrundkapital einer AG?', antwort: '50.000 €', erklaerung: '§ 7 AktG. Aufgeteilt in Aktien (Nennwert mind. 1 €).' },
      { id: 'rf-03', frage: 'Wie haftet ein Kommanditist?', antwort: 'Beschränkt auf seine Einlage', erklaerung: 'Komplementär der KG haftet unbeschränkt mit Privatvermögen.' },
      { id: 'rf-04', frage: 'Wie haften Gesellschafter einer OHG?', antwort: 'Alle unbeschränkt persönlich und gesamtschuldnerisch', erklaerung: 'Mindestens 2 Gesellschafter. Jeder geschäftsführungs- und vertretungsbefugt.' },
      { id: 'rf-05', frage: 'Was ist eine UG (haftungsbeschränkt)?', antwort: 'Eine "Mini-GmbH" mit nur 1 € Mindeststammkapital, aber Pflicht zur Gewinnrücklage (25 %) bis 25.000 € erreicht sind', erklaerung: 'Nach Erreichen der 25.000 € kann Umwandlung in GmbH erfolgen.' },
      { id: 'rf-06', frage: 'Welche Organe hat eine AG?', antwort: 'Vorstand, Aufsichtsrat, Hauptversammlung', erklaerung: 'Vorstand führt Geschäft, Aufsichtsrat kontrolliert, HV fasst Grundlagenbeschlüsse (Gewinnverwendung, Entlastung).' },
      { id: 'rf-07', frage: 'Welche Rechtsform zahlt Körperschaftsteuer statt Einkommensteuer?', antwort: 'Kapitalgesellschaften (GmbH, AG, UG)', erklaerung: 'KSt. aktuell 15 % plus Soli und Gewerbesteuer. Personengesellschaften sind steuerlich transparent.' },
      { id: 'rf-08', frage: 'Muss ein Einzelunternehmen ins Handelsregister eingetragen werden?', antwort: 'Nur bei Kaufmannseigenschaft (e.K.) oder freiwillig; Kleinunternehmer nicht', erklaerung: 'Kaufmann im Sinne des HGB = kaufmännischer Geschäftsbetrieb notwendig.' },
      { id: 'rf-09', frage: 'Welche Rechtsform eignet sich für zwei Freiberufler mit vollem Haftungsrisiko?', antwort: 'GbR (Gesellschaft bürgerlichen Rechts)', erklaerung: 'Einfache Gründung, mündlich möglich, keine Eintragung – aber Vollhaftung.' },
      { id: 'rf-10', frage: 'Welches Organ entscheidet über die Gewinnverwendung bei einer AG?', antwort: 'Die Hauptversammlung (§ 174 AktG)', erklaerung: 'Vorstand schlägt vor, HV beschließt. Dividende wird ausgezahlt oder thesauriert.' },
      { id: 'rf-11', frage: 'Was ist der Unterschied zwischen Personen- und Kapitalgesellschaft?', antwort: 'Personengesellschaften: Haftung persönlich, wenige Formalitäten, steuerlich transparent. Kapital: Haftung beschränkt, formale Gründung, eigene Rechtspersönlichkeit', erklaerung: 'Personen: OHG, KG, GbR. Kapital: GmbH, AG, UG.' }
    ]
  },

  {
    themaId: 'wiso-betrieb',
    karten: [
      { id: 'bt-01', frage: 'Was sind die klassischen Produktionsfaktoren?', antwort: 'Arbeit, Boden, Kapital', erklaerung: 'In der BWL erweitert um Betriebsmittel, Werkstoffe, dispositive Arbeit (Erich Gutenberg).' },
      { id: 'bt-02', frage: 'Was ist Aufbauorganisation?', antwort: 'Das hierarchische Gefüge von Stellen, Abteilungen und Leitungsbeziehungen ("wer macht was")', erklaerung: 'Ergebnis wird im Organigramm dargestellt.' },
      { id: 'bt-03', frage: 'Was ist Ablauforganisation?', antwort: 'Die räumliche und zeitliche Struktur von Arbeitsprozessen ("wann, wo, wie")', erklaerung: 'Prozessanalyse, Prozessoptimierung gehören hierher.' },
      { id: 'bt-04', frage: 'Einliniensystem: was ist typisch?', antwort: 'Jede Stelle hat genau einen Vorgesetzten; Weisungsweg streng vertikal', erklaerung: 'Vorteil: klare Verantwortung. Nachteil: lange Dienstwege.' },
      { id: 'bt-05', frage: 'Was ist eine Stab-Linien-Organisation?', antwort: 'Linien-Aufbau mit beratenden Stabsstellen ohne Weisungsbefugnis', erklaerung: 'Stabsstellen entlasten die Leitung fachlich (z.B. Rechtsabteilung, Controlling).' },
      { id: 'bt-06', frage: 'Was ist eine Matrixorganisation?', antwort: 'Zweidimensionale Struktur: z.B. Funktion UND Projekt – MA haben zwei Vorgesetzte', erklaerung: 'Typisch in Projekt- und Softwareunternehmen.' },
      { id: 'bt-07', frage: 'Was sind die betrieblichen Grundfunktionen?', antwort: 'Beschaffung, Produktion, Absatz; dazu Personal, Finanzen, Rechnungswesen', erklaerung: 'Leistungswirtschaftlich: Beschaffung → Produktion → Absatz. Querfunktionen: Personal, Finanzen, IT.' },
      { id: 'bt-08', frage: 'Was macht das Controlling?', antwort: 'Planung, Steuerung, Kontrolle – liefert Kennzahlen an die Geschäftsführung', erklaerung: 'Nicht zu verwechseln mit "Buchhaltung" oder "Revision".' },
      { id: 'bt-09', frage: 'Produktionsfaktor dispositive Arbeit?', antwort: 'Leitende, planende, organisierende Tätigkeiten (Geschäftsführung, Planung)', erklaerung: 'Gegenstück: ausführende (objektbezogene) Arbeit.' },
      { id: 'bt-10', frage: 'Wertschöpfungskette nach Porter (kurz)?', antwort: 'Eingangslogistik → Produktion → Ausgangslogistik → Marketing/Vertrieb → Service; dazu Querfunktionen', erklaerung: 'Primäraktivitäten + Unterstützungsaktivitäten (IT, Personal, Einkauf, Infrastruktur).' }
    ]
  },

  {
    themaId: 'wiso-politik-konjunktur',
    karten: [
      { id: 'pk-01', frage: 'Welche 4 Ziele bildet das "magische Viereck"?', antwort: 'Wirtschaftswachstum, Preisstabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht', erklaerung: 'Stabilitäts- und Wachstumsgesetz (1967). Wird in vielen WiSo-Prüfungen direkt abgefragt.' },
      { id: 'pk-02', frage: '4 Phasen des Konjunkturzyklus?', antwort: 'Aufschwung → Boom (Hochkonjunktur) → Abschwung (Rezession) → Tief (Depression)', erklaerung: 'Zyklus dauert historisch 5-8 Jahre.' },
      { id: 'pk-03', frage: 'Was ist Inflation?', antwort: 'Anhaltender Anstieg des allgemeinen Preisniveaus – Geld verliert Kaufkraft', erklaerung: 'EZB-Ziel: 2 % mittelfristig. Gemessen am HVPI.' },
      { id: 'pk-04', frage: 'Was ist Deflation und warum gilt sie als gefährlich?', antwort: 'Anhaltender Rückgang des Preisniveaus. Gefährlich weil Konsum zurückgestellt wird, Nachfrage sinkt, Wirtschaft schrumpft', erklaerung: 'Deflationsspirale: Preise ↓ → Löhne ↓ → Nachfrage ↓ → Preise ↓.' },
      { id: 'pk-05', frage: 'Welche Institution macht Geldpolitik im Euroraum?', antwort: 'Die Europäische Zentralbank (EZB) in Frankfurt', erklaerung: 'Seit 1999. Nationale Zentralbanken setzen um.' },
      { id: 'pk-06', frage: 'Was bewirkt eine Leitzinserhöhung?', antwort: 'Kredite werden teurer → Nachfrage sinkt → Inflation gedämpft', erklaerung: 'Gegenmittel gegen Inflation. Nebenwirkung: Wachstum bremst.' },
      { id: 'pk-07', frage: 'Wie misst man die Inflationsrate?', antwort: 'Über die prozentuale Veränderung des Verbraucherpreisindex (VPI/HVPI) gegenüber Vorjahr', erklaerung: 'HVPI = harmonisierter Verbraucherpreisindex (EU-weit).' },
      { id: 'pk-08', frage: 'Was ist das BIP?', antwort: 'Bruttoinlandsprodukt: Wert aller im Inland produzierten Waren und Dienstleistungen in einem Jahr', erklaerung: 'Wichtigster Wachstumsindikator. Nominal (zu aktuellen Preisen) vs. real (preisbereinigt).' },
      { id: 'pk-09', frage: 'Konjunkturelle vs. strukturelle Arbeitslosigkeit?', antwort: 'Konjunkturell: durch schwache Nachfrage. Strukturell: durch nicht passende Qualifikation/Regionen (nicht konjunkturabhängig)', erklaerung: 'Weitere Arten: saisonal, friktionell (kurzzeitig beim Jobwechsel).' },
      { id: 'pk-10', frage: 'Was bedeutet "magisches Sechseck"?', antwort: 'Erweiterung des magischen Vierecks um Umweltschutz und gerechte Einkommens-/Vermögensverteilung', erklaerung: 'Modern interpretiert: Nachhaltigkeit + soziale Gerechtigkeit.' }
    ]
  },

  {
    themaId: 'wiso-steuern',
    karten: [
      { id: 'st-01', frage: 'Direkte vs. indirekte Steuer?', antwort: 'Direkt: Steuerschuldner = Steuerträger (z.B. Einkommensteuer). Indirekt: Steuer wird über den Preis weitergegeben (z.B. Umsatzsteuer)', erklaerung: 'Bei USt. zahlt der Verbraucher, der Händler führt ab.' },
      { id: 'st-02', frage: 'Progressive Steuer?', antwort: 'Steuersatz steigt mit der Bemessungsgrundlage', erklaerung: 'Beispiel Einkommensteuer: 14–45 %. Gegenteil: proportional (konstanter Satz).' },
      { id: 'st-03', frage: 'Wie hoch ist der normale USt.-Satz in Deutschland?', antwort: '19 %, ermäßigt 7 % (z.B. Lebensmittel, Bücher, ÖPNV)', erklaerung: 'Verbrauchsteuer; wird vom Endverbraucher getragen.' },
      { id: 'st-04', frage: 'Welche Steuer bekommt die Gemeinde?', antwort: 'Gewerbesteuer und Grundsteuer', erklaerung: 'Gewerbesteuer-Hebesatz variiert stark je Gemeinde.' },
      { id: 'st-05', frage: 'Was ist Körperschaftsteuer?', antwort: 'Einkommensteuer für juristische Personen (GmbH, AG). Satz: 15 % plus Soli', erklaerung: 'Personengesellschaften zahlen keine KSt., sondern Einkommensteuer beim Gesellschafter.' },
      { id: 'st-06', frage: 'Lohnsteuerklassen – wie viele gibt es?', antwort: '6 Klassen (I–VI)', erklaerung: 'I: ledig, II: alleinerziehend, III+V: verheiratet mit Einkommensunterschieden, IV: verheiratet gleich, VI: Zweitjob.' },
      { id: 'st-07', frage: 'Was ist Umsatzsteuer-Vorsteuer?', antwort: 'USt., die ein Unternehmen für Eingangsrechnungen bezahlt hat – kann gegen die eigene USt-Schuld verrechnet werden', erklaerung: 'Vorsteuerabzug. So zahlen Unternehmen effektiv nur die Mehrwertsteuer auf ihre eigene Wertschöpfung.' },
      { id: 'st-08', frage: 'Welche Steuer zahlt der Käufer beim Immobilienkauf?', antwort: 'Grunderwerbsteuer (3,5–6,5 % je nach Bundesland)', erklaerung: 'Zusätzlich laufende Grundsteuer an die Gemeinde.' },
      { id: 'st-09', frage: 'Was ist der Solidaritätszuschlag?', antwort: '5,5 % Zuschlag auf die Einkommen-/Körperschaftsteuer (für die meisten AN seit 2021 weggefallen, bei hohem Einkommen und juristischen Personen noch aktiv)', erklaerung: 'Ursprünglich 1991 zur Finanzierung der Wiedervereinigung eingeführt.' },
      { id: 'st-10', frage: 'Wer ist in Deutschland einkommensteuerpflichtig?', antwort: 'Jede natürliche Person mit Wohnsitz oder gewöhnlichem Aufenthalt in Deutschland (unbeschränkt)', erklaerung: 'Nicht-Ansässige sind beschränkt steuerpflichtig für inländische Einkünfte.' }
    ]
  },

  {
    themaId: 'wiso-nachhaltigkeit',
    karten: [
      { id: 'nh-01', frage: 'Die 3 Säulen der Nachhaltigkeit?', antwort: 'Ökologie, Ökonomie, Soziales', erklaerung: 'Nachhaltigkeitsdreieck. Auch ESG (Environment, Social, Governance).' },
      { id: 'nh-02', frage: 'Was sind die SDGs?', antwort: '17 Sustainable Development Goals der UN für die weltweite nachhaltige Entwicklung bis 2030', erklaerung: 'Beispiele: „Keine Armut", „Hochwertige Bildung", „Maßnahmen zum Klimaschutz".' },
      { id: 'nh-03', frage: 'Was ist die Charta der Vielfalt?', antwort: 'Selbstverpflichtung deutscher Unternehmen zur Anerkennung und Wertschätzung von Vielfalt am Arbeitsplatz', erklaerung: '2006 gegründet; über 5000 Mitglieder. Kommt in WiSo seit Winter 2022/23 stark.' },
      { id: 'nh-04', frage: 'Welches deutsche Gesetz schützt AN vor Unfällen und Gesundheitsrisiken?', antwort: 'Arbeitsschutzgesetz (ArbSchG)', erklaerung: 'Verpflichtet AG zu Gefährdungsbeurteilungen. Konkretisiert durch BGV, BetrSichV.' },
      { id: 'nh-05', frage: 'Welche Institutionen sind die 4 zentralen EU-Organe?', antwort: 'Europäisches Parlament, Rat der EU, Europäische Kommission, Europäischer Gerichtshof', erklaerung: 'Parlament + Rat = Gesetzgebung. Kommission = Exekutive/Initiative. EuGH = Judikative.' },
      { id: 'nh-06', frage: 'Welches EU-Organ hat das Initiativrecht für Gesetze?', antwort: 'Die Europäische Kommission', erklaerung: 'Parlament und Rat beschließen, Kommission schlägt vor.' },
      { id: 'nh-07', frage: 'Was ist der EU-Binnenmarkt?', antwort: 'Gemeinsamer Markt mit freiem Verkehr von Waren, Dienstleistungen, Kapital und Personen (4 Freiheiten)', erklaerung: 'Seit 1993. Kern der wirtschaftlichen EU-Integration.' },
      { id: 'nh-08', frage: 'Was bedeutet Globalisierung?', antwort: 'Zunehmende weltweite Verflechtung von Wirtschaft, Politik, Kultur durch Technik und sinkende Transport-/Kommunikationskosten', erklaerung: 'Vorteile: Wohlstand, Auswahl. Nachteile: Abhängigkeiten, Lohnkonkurrenz, Umweltprobleme.' },
      { id: 'nh-09', frage: 'Nachhaltigkeit am Arbeitsplatz (Beispiele)?', antwort: 'Energiesparen, Homeoffice, Papier reduzieren, Diversität fördern, Aus-/Weiterbildung', erklaerung: 'Kommen als „Nennen Sie 3 Maßnahmen"-Fragen.' },
      { id: 'nh-10', frage: 'Was regelt das Allgemeine Gleichbehandlungsgesetz (AGG)?', antwort: 'Schutz vor Diskriminierung wegen Rasse, Herkunft, Geschlecht, Religion, Behinderung, Alter, sexueller Identität', erklaerung: 'Gilt in Arbeits- und Zivilrecht. Anspruch auf Entschädigung möglich.' }
    ]
  }
];
