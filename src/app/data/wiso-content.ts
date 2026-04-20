import { TheorieInhalt } from '../models/app.models';

// =============================================================================
// WiSo-Theorie für die AP2 (Teil 3: Wirtschafts- und Sozialkunde)
// Kompakt gehalten – der Schwerpunkt liegt in WiSo auf Karteikarten & MC.
// =============================================================================

export const WISO_THEORIE: TheorieInhalt[] = [
  // ===========================================================================
  // 1. BERUFSAUSBILDUNG
  // ===========================================================================
  {
    themaId: 'wiso-berufsausbildung',
    titel: 'Berufsausbildung (BBiG & JArbSchG)',
    einleitung: 'Das Berufsbildungsgesetz (BBiG) und das Jugendarbeitsschutzgesetz (JArbSchG) regeln das Ausbildungsverhältnis. In fast jeder WiSo-Prüfung stehen 3-5 Fragen aus diesem Bereich – meist zu Probezeit, Kündigung während der Ausbildung, Pflichtinhalten des Ausbildungsvertrags und JArbSchG-Urlaub.',
    abschnitte: [
      {
        titel: 'Ausbildungsvertrag & Pflichtinhalte',
        inhalt: `
          <p>Der <strong>Berufsausbildungsvertrag</strong> muss nach <code>§ 11 BBiG</code> vor Beginn der Ausbildung schriftlich niedergelegt werden. Pflichtinhalte sind u.a.:</p>
          <ul>
            <li>Art, sachliche und zeitliche Gliederung sowie Ziel der Ausbildung</li>
            <li>Beginn und Dauer der Ausbildung</li>
            <li>tägliche Ausbildungszeit</li>
            <li>Dauer der Probezeit</li>
            <li>Zahlung und Höhe der Vergütung</li>
            <li>Dauer des Urlaubs</li>
            <li>Voraussetzungen für eine Kündigung</li>
          </ul>
          <p><strong>Nicht Pflichtinhalt</strong> sind z.B. Gleitzeitregelungen, Homeoffice oder betriebliche Altersvorsorge.</p>
        `
      },
      {
        titel: 'Probezeit & Kündigung',
        inhalt: `
          <p>Die <strong>Probezeit</strong> in der Ausbildung beträgt mindestens 1, höchstens 4 Monate (<code>§ 20 BBiG</code>). Achtung: Nicht verwechseln mit der Probezeit im Arbeitsverhältnis (max. 6 Monate, <code>§ 622 BGB</code>).</p>
          <ul>
            <li><strong>Während der Probezeit:</strong> beide Seiten können jederzeit ohne Frist und ohne Angabe von Gründen kündigen – aber immer schriftlich (<code>§ 22 Abs. 1 BBiG</code>, <code>§ 623 BGB</code>).</li>
            <li><strong>Nach der Probezeit:</strong> Azubi mit 4 Wochen Frist ohne Grund; Ausbildender nur aus wichtigem Grund fristlos.</li>
          </ul>
        `
      },
      {
        titel: 'Jugendarbeitsschutzgesetz (JArbSchG)',
        inhalt: `
          <p>Das <strong>JArbSchG</strong> schützt Beschäftigte unter 18. Zentrale Vorgaben:</p>
          <ul>
            <li><strong>Arbeitszeit:</strong> max. 8h/Tag, 40h/Woche, 5 Tage/Woche; Arbeitszeit nur zwischen 6 und 20 Uhr.</li>
            <li><strong>Urlaubsanspruch</strong> (<code>§ 19 JArbSchG</code>, Stichtag ist der Beginn des Kalenderjahres):
              <ul>
                <li>unter 16 Jahren: <strong>30 Werktage</strong></li>
                <li>unter 17 Jahren: <strong>27 Werktage</strong></li>
                <li>unter 18 Jahren: <strong>25 Werktage</strong></li>
              </ul>
            </li>
            <li>Berichtsheft (Ausbildungsnachweis) ist Pflicht; der Ausbilder kontrolliert regelmäßig.</li>
          </ul>
        `
      },
      {
        titel: 'Fortbildung, Umschulung, Europass',
        inhalt: `
          <p><strong>Fortbildung</strong> vertieft den bestehenden Beruf (z.B. Fernlehrgang "Business English" nach der Ausbildung). <strong>Umschulung</strong> qualifiziert für einen <em>neuen</em> Beruf und wird gefördert durch die Bundesagentur für Arbeit oder Rentenversicherungsträger.</p>
          <p>Der <strong>Europass</strong> ist ein kostenloses EU-Instrument zur einheitlichen Darstellung von Qualifikationen in Europa – nicht verpflichtend, aber hilfreich bei Mobilität/Bewerbung im Ausland.</p>
          <p><strong>Ausbildereignung (AEVO):</strong> Der Ausbilder braucht fachliche und persönliche Eignung (meist "AdA-Schein").</p>
        `
      }
    ],
    pruefungsTipps: [
      'Probezeit BBiG = 1-4 Monate (NICHT 6 Monate wie im Arbeitsvertrag!).',
      'JArbSchG-Urlaub Eselsbrücke: "30-27-25" für <16 / <17 / <18 Jahre am 1.1.',
      'In der Probezeit kann JEDE Seite ohne Frist und ohne Grund kündigen – aber SCHRIFTLICH.',
      'Umschulung fördert die Agentur für Arbeit / DRV, NICHT die IHK oder Krankenkasse.',
      'Die IHK-Frage zum Europass wurde praktisch in jeder Prüfung 2019-2024 gestellt.'
    ]
  },

  // ===========================================================================
  // 2. ARBEITSRECHT
  // ===========================================================================
  {
    themaId: 'wiso-arbeitsrecht',
    titel: 'Arbeitsrecht (Arbeitsvertrag, Kündigung, Urlaub, Arbeitszeit)',
    einleitung: 'Das Individualarbeitsrecht regelt die Beziehung zwischen einzelnem Arbeitnehmer und Arbeitgeber. Kernthemen sind Arbeitsvertrag, Kündigungsfristen, Arbeitszeitgesetz (ArbZG), Bundesurlaubsgesetz (BUrlG), Entgeltfortzahlung, AGG und Mutterschutz. 4-6 Aufgaben sind nahezu garantiert.',
    abschnitte: [
      {
        titel: 'Arbeitsvertrag & Günstigkeitsprinzip',
        inhalt: `
          <p>Der <strong>Arbeitsvertrag</strong> ist formfrei, Befristungen bedürfen aber der Schriftform (<code>§ 14 TzBfG</code>). Ohne Sachgrund ist eine Befristung max. 2 Jahre zulässig; der Vertrag endet mit Fristablauf ohne Kündigung.</p>
          <p><strong>Günstigkeitsprinzip:</strong> Einzelvertragliche Regelungen dürfen vom Tarifvertrag abweichen, wenn sie für den Arbeitnehmer günstiger sind. Ein Gehalt über Tarif ist also zulässig.</p>
        `
      },
      {
        titel: 'Kündigung & Kündigungsschutz',
        inhalt: `
          <p>Jede Kündigung bedarf der <strong>Schriftform</strong> (<code>§ 623 BGB</code>); mündliche Kündigungen sind unwirksam.</p>
          <ul>
            <li><strong>Probezeit Arbeitsvertrag:</strong> max. 6 Monate, Kündigungsfrist 2 Wochen (<code>§ 622 BGB</code>).</li>
            <li><strong>Kündigungsschutzgesetz (KSchG):</strong> greift ab &gt;10 AN und nach 6 Monaten Beschäftigung. Kündigung muss sozial gerechtfertigt sein: personen-, verhaltens- oder betriebsbedingt.</li>
            <li><strong>Kündigungsschutzklage:</strong> 3 Wochen nach Zugang beim Arbeitsgericht (<code>§ 4 KSchG</code>).</li>
            <li><strong>Betriebsrat</strong> muss vor JEDER Kündigung angehört werden (<code>§ 102 BetrVG</code>) – sonst unwirksam.</li>
          </ul>
          <p>Kündigungsgründe: Standortschließung → betriebsbedingt; lange Krankheit → personenbedingt; Alkohol am Arbeitsplatz, Diebstahl → verhaltensbedingt.</p>
        `
      },
      {
        titel: 'Arbeitszeit & Urlaub',
        inhalt: `
          <p><strong>Arbeitszeitgesetz (ArbZG, § 3):</strong> werktäglich max. 8h, bis zu 10h zulässig, wenn im Durchschnitt von 6 Monaten / 24 Wochen 8h nicht überschritten werden.</p>
          <p><strong>Bundesurlaubsgesetz (BUrlG):</strong> mind. 24 Werktage (6-Tage-Woche) = 20 Arbeitstage (5-Tage-Woche). Voller Anspruch nach 6 Monaten Wartezeit.</p>
          <p>Erkrankt ein AN im Urlaub, werden die ärztlich nachgewiesenen Tage <strong>nicht</strong> auf den Urlaub angerechnet (<code>§ 9 BUrlG</code>).</p>
        `
      },
      {
        titel: 'Entgeltfortzahlung, Mutterschutz, AGG',
        inhalt: `
          <p><strong>Entgeltfortzahlung (EFZG):</strong> Der AG zahlt bis zu 6 Wochen den vollen Lohn bei Krankheit; danach zahlt die GKV Krankengeld (~70% brutto, max. 90% netto).</p>
          <p><strong>Mutterschutz (MuSchG):</strong> Schutzfristen 6 Wochen vor / 8 Wochen nach Entbindung (12 bei Früh-/Mehrlingsgeburten); Kündigungsschutz während der Schwangerschaft + 4 Monate nach Entbindung.</p>
          <p><strong>AGG</strong> verbietet Benachteiligung wegen <em>Rasse/ethnischer Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter, sexueller Identität</em> ("Ra-Ge-Re-Be-Al-Se"). Unzulässige Fragen im Vorstellungsgespräch: Religion, Schwangerschaft, Familienplanung, Parteizugehörigkeit.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Schriftform bei Kündigung ist PFLICHT – mündlich unwirksam (§ 623 BGB).',
      'Kündigungsschutzklage: 3-Wochen-Frist ab Zugang.',
      'ArbZG 8/10-Regel: 10h ok, wenn Schnitt über 6 Monate 8h bleibt.',
      'Günstigkeitsprinzip: Einzelvertrag darf BESSER, aber nicht schlechter als Tarif sein.',
      'Bei Krankheit im Urlaub: Attest = Urlaubstage werden zurückgegeben.'
    ]
  },

  // ===========================================================================
  // 3. SOZIALVERSICHERUNG
  // ===========================================================================
  {
    themaId: 'wiso-sozialversicherung',
    titel: 'Sozialversicherung (5 Säulen)',
    einleitung: 'Die gesetzliche Sozialversicherung besteht aus fünf Zweigen. Merkhilfe: <strong>KRAP+U</strong> (Kranken-, Renten-, Arbeitslosen-, Pflege-, Unfallversicherung). Typische Prüfungsaufgabe: Fälle zuordnen, welche Versicherung zuständig ist.',
    abschnitte: [
      {
        titel: 'Die fünf Zweige',
        inhalt: `
          <ul>
            <li><strong>GKV (Krankenversicherung):</strong> Träger: Krankenkassen. Leistung: Arztbesuch, Medikamente, Krankengeld (ab 7. Woche nach Entgeltfortzahlung).</li>
            <li><strong>GRV (Rentenversicherung):</strong> Träger: DRV. Altersrente, Erwerbsminderung, Reha, Hinterbliebene. Finanzierung per Umlage (Generationenvertrag).</li>
            <li><strong>GAV (Arbeitslosenversicherung):</strong> Träger: Bundesagentur für Arbeit. ALG I, Kurzarbeitergeld, Weiterbildung.</li>
            <li><strong>GPV (Pflegeversicherung):</strong> Leistung bei Pflegebedürftigkeit. Kinderlose &gt; 23 Jahre zahlen Zuschlag.</li>
            <li><strong>GUV (Unfallversicherung):</strong> Träger: Berufsgenossenschaft. Arbeits-/Wegeunfälle + Berufskrankheiten. Beitrag 100% vom Arbeitgeber.</li>
          </ul>
        `
      },
      {
        titel: 'Beiträge & Prinzipien',
        inhalt: `
          <p>Die Beiträge werden grundsätzlich <strong>paritätisch</strong> (je zur Hälfte) von AN und AG getragen. Ausnahmen:</p>
          <ul>
            <li><strong>GUV</strong>: 100% Arbeitgeber</li>
            <li><strong>Pflege-Zuschlag für Kinderlose</strong> &gt; 23: nur Arbeitnehmer</li>
            <li>Geringfügig Beschäftigte (Minijob): AG zahlt alle Beiträge pauschal.</li>
          </ul>
          <p><strong>Solidarprinzip:</strong> Beitrag nach Einkommen, Leistung nach Bedarf. Gegensatz: Äquivalenzprinzip (PKV – Beitrag nach Risiko).</p>
          <p><strong>Beitragsbemessungsgrenze (BBG):</strong> Einkommen oberhalb ist beitragsfrei. <strong>Versicherungspflichtgrenze (JAEG):</strong> oberhalb darf AN in die PKV wechseln (nur KV/PV).</p>
        `
      },
      {
        titel: 'Typische Fall-Zuordnungen',
        inhalt: `
          <ul>
            <li>Grippe / Arztbesuch → <strong>GKV</strong></li>
            <li>Sturz auf direktem Weg zur Arbeit → <strong>GUV</strong> (Berufsgenossenschaft)</li>
            <li>Unfall bei privater Radtour am Wochenende → <strong>keine gesetzliche SV</strong> (GKV zahlt Heilbehandlung)</li>
            <li>Arbeitslos nach Kündigung → <strong>GAV</strong> (ALG I)</li>
            <li>Dementer Angehöriger benötigt Pflege → <strong>GPV</strong></li>
            <li>Renteneintritt → <strong>GRV</strong></li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Wegeunfall = NUR direkter Weg zur Arbeit – Umweg zum Bäcker ist nicht versichert.',
      'GUV (Berufsgenossenschaft) zahlt IMMER zu 100% der Arbeitgeber.',
      'Oberhalb der BBG werden keine Beiträge mehr erhoben – Versicherungspflicht bleibt aber bestehen.',
      'Solidarprinzip (GKV) ≠ Äquivalenzprinzip (PKV).',
      'Die typische Zuordnungsaufgabe "5 Fälle zu 5 Versicherungen" kommt in fast jeder Prüfung.'
    ]
  },

  // ===========================================================================
  // 4. TARIFRECHT & MITBESTIMMUNG
  // ===========================================================================
  {
    themaId: 'wiso-tarif-mitbestimmung',
    titel: 'Tarifrecht & Mitbestimmung',
    einleitung: 'Das Kollektivarbeitsrecht umfasst Tarifverträge, Arbeitskampf und die betriebliche Mitbestimmung (BetrVG). In jeder Prüfung stehen 3-5 Aufgaben – häufig zum Betriebsrat (Mitbestimmungsrechte, Wahlvoraussetzungen) und zur JAV.',
    abschnitte: [
      {
        titel: 'Tarifvertrag & Tarifpartner',
        inhalt: `
          <p><strong>Tarifautonomie (Art. 9 Abs. 3 GG):</strong> Das Recht der Tarifparteien, Arbeits- und Wirtschaftsbedingungen ohne staatliche Einflussnahme zu regeln.</p>
          <p><strong>Sozialpartner / Tarifpartner:</strong> Gewerkschaften (AN-Seite) und Arbeitgeberverbände (AG-Seite). NICHT: Ministerien, IHK.</p>
          <ul>
            <li><strong>Entgelttarifvertrag</strong>: Gehälter, Zuschläge – meist jährlich neu verhandelt.</li>
            <li><strong>Manteltarifvertrag</strong>: Arbeitszeit, Urlaub, Kündigungsfristen – längerfristig.</li>
            <li><strong>Firmen-/Haustarif</strong>: gilt nur für einen Betrieb; <strong>Flächentarif</strong>: ganze Branche/Region.</li>
          </ul>
          <p><strong>Friedenspflicht:</strong> kein Arbeitskampf während laufendem TV. <strong>Streik</strong> = AN legen Arbeit nieder; <strong>Aussperrung</strong> = AG stellt AN vorübergehend frei. Arbeitskampf ist Ultima Ratio.</p>
        `
      },
      {
        titel: 'Betriebsrat (BetrVG)',
        inhalt: `
          <p>Ab <strong>5 ständigen wahlberechtigten Arbeitnehmern</strong> kann ein Betriebsrat gewählt werden (<code>§ 1 BetrVG</code>).</p>
          <ul>
            <li><strong>Aktives Wahlrecht</strong> (wählen): ab 16 Jahren.</li>
            <li><strong>Passives Wahlrecht</strong> (gewählt werden): ab 18 Jahren + 6 Monate Betriebszugehörigkeit.</li>
            <li>Größe Betriebsrat: 5-20 AN → 1 Mitglied, 21-50 → 3, 51-100 → 5, usw.</li>
          </ul>
          <p><strong>Zwingende Mitbestimmung (§ 87 BetrVG)</strong> – soziale Angelegenheiten:</p>
          <ul>
            <li>Beginn/Ende Arbeitszeit, Pausen, Gleitzeit</li>
            <li>Überstunden, Urlaubsgrundsätze</li>
            <li>Einführung technischer Überwachung (z.B. Zeiterfassung!)</li>
            <li>Gesundheitsschutz</li>
          </ul>
          <p><strong>Keine Mitbestimmung</strong> bei unternehmerischen Entscheidungen: Filialgründung, Umbau, Wechsel des Logistikanbieters, Einstellung leitender Angestellter.</p>
          <p><strong>Anhörung bei Kündigung (§ 102 BetrVG):</strong> ohne Anhörung des Betriebsrats ist jede Kündigung unwirksam.</p>
          <p><strong>Betriebsvereinbarung</strong>: abgeschlossen zwischen <em>Geschäftsleitung und Betriebsrat</em> – NICHT mit Gewerkschaft oder IHK.</p>
        `
      },
      {
        titel: 'JAV (Jugend- und Auszubildendenvertretung)',
        inhalt: `
          <p>Eine JAV kann nur gewählt werden, wenn bereits ein <strong>Betriebsrat besteht</strong> und mindestens 5 Arbeitnehmer unter 18 Jahren oder Auszubildende unter 25 Jahren beschäftigt sind.</p>
          <ul>
            <li><strong>Aktives Wahlrecht JAV:</strong> alle AN &lt;18 + alle Azubis &lt;25.</li>
            <li><strong>Passives Wahlrecht:</strong> AN &lt;25 (ohne BR-Mitgliedschaft); das 25. Lebensjahr darf während der Amtszeit nicht überschritten werden.</li>
          </ul>
        `
      },
      {
        titel: 'Gewerkschaft & IHK',
        inhalt: `
          <p><strong>Gewerkschaft:</strong> Interessenvertretung der AN; führt Tarifverhandlungen, bietet Rechtsbeistand. Sie schließt <em>Tarifverträge</em> – NICHT Betriebsvereinbarungen.</p>
          <p><strong>IHK:</strong> Körperschaft öffentlichen Rechts; Interessenvertretung der gewerblichen Wirtschaft; zuständig für Aus-/Weiterbildung, Prüfungen, Beratung.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Ohne BR-Anhörung ist JEDE Kündigung unwirksam (§ 102 BetrVG).',
      'Betriebsvereinbarung: Geschäftsleitung + BR (NICHT Gewerkschaft).',
      'Mitbestimmung § 87: NUR soziale Angelegenheiten, NICHT unternehmerische.',
      'JAV ohne vorherigen Betriebsrat nicht möglich.',
      'Zeiterfassungssysteme = zwingende Mitbestimmung (technische Überwachung)!'
    ]
  },

  // ===========================================================================
  // 5. WIRTSCHAFTSORDNUNG
  // ===========================================================================
  {
    themaId: 'wiso-wirtschaftsordnung',
    titel: 'Wirtschaftsordnung & Marktformen',
    einleitung: 'Die Bundesrepublik Deutschland ist eine <strong>soziale Marktwirtschaft</strong>: freie Marktwirtschaft mit sozialer Rahmensetzung. Themen in der Prüfung: Marktformen, Angebot/Nachfrage, Wirtschaftskreislauf, Verbraucherschutz.',
    abschnitte: [
      {
        titel: 'Soziale Marktwirtschaft',
        inhalt: `
          <p>Die soziale Marktwirtschaft kombiniert <strong>Privateigentum an Produktionsmitteln</strong> und <strong>Wettbewerb</strong> mit staatlicher Rahmensetzung und <strong>Sozialgesetzgebung</strong> zum Schutz vor negativen Marktauswirkungen. Vater: Ludwig Erhard.</p>
          <p>Gegenmodelle: reine Marktwirtschaft (ohne sozialen Ausgleich), Zentralverwaltungswirtschaft (staatliche Planung).</p>
        `
      },
      {
        titel: 'Bedürfnis – Bedarf – Nachfrage',
        inhalt: `
          <ul>
            <li><strong>Bedürfnis:</strong> Mangelempfinden (z.B. Durst).</li>
            <li><strong>Bedarf:</strong> Bedürfnis + Kaufkraft.</li>
            <li><strong>Nachfrage:</strong> Bedarf, der am Markt auftritt.</li>
          </ul>
          <p>Die Nachfrage hängt v.a. von der <strong>Kaufkraft</strong> ab.</p>
        `
      },
      {
        titel: 'Angebot, Nachfrage, Preisbildung',
        inhalt: `
          <p><strong>Angebotskurve</strong> steigt mit dem Preis (höherer Preis → mehr Anbieter), <strong>Nachfragekurve</strong> fällt mit dem Preis. Im Schnittpunkt herrscht <strong>Marktgleichgewicht</strong>.</p>
          <ul>
            <li><strong>Angebotsüberhang (Käufermarkt):</strong> Angebot &gt; Nachfrage → Preise sinken.</li>
            <li><strong>Nachfrageüberhang (Verkäufermarkt):</strong> Nachfrage &gt; Angebot → Preise steigen.</li>
          </ul>
        `
      },
      {
        titel: 'Marktformen',
        inhalt: `
          <table style="width:100%; border-collapse:collapse; margin:8px 0;">
            <tr style="background:#f0f4ff;"><th style="border:1px solid #ccc; padding:6px;">Marktform</th><th style="border:1px solid #ccc; padding:6px;">Anbieter</th><th style="border:1px solid #ccc; padding:6px;">Nachfrager</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Polypol</td><td style="border:1px solid #ccc; padding:6px;">viele</td><td style="border:1px solid #ccc; padding:6px;">viele</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Angebots-Oligopol</td><td style="border:1px solid #ccc; padding:6px;">wenige</td><td style="border:1px solid #ccc; padding:6px;">viele</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Angebots-Monopol</td><td style="border:1px solid #ccc; padding:6px;">einer</td><td style="border:1px solid #ccc; padding:6px;">viele</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Nachfrage-Monopol</td><td style="border:1px solid #ccc; padding:6px;">viele</td><td style="border:1px solid #ccc; padding:6px;">einer</td></tr>
          </table>
          <p><strong>Vollkommener Markt:</strong> homogene Güter, vollständige Markttransparenz, keine persönlichen Präferenzen, unendliche Reaktionsgeschwindigkeit – in der Realität selten.</p>
        `
      },
      {
        titel: 'Wirtschaftssektoren & Verbraucherschutz',
        inhalt: `
          <ul>
            <li><strong>Primär:</strong> Rohstoffgewinnung (Landwirtschaft, Bergbau, Fischerei).</li>
            <li><strong>Sekundär:</strong> Industrie, Handwerk, Baugewerbe.</li>
            <li><strong>Tertiär:</strong> Dienstleistungen (inkl. IT, Beratung).</li>
          </ul>
          <p><strong>Verbraucherschutz</strong> ist im BGB verankert (Fernabsatz, Widerrufsrecht). Träger: u.a. Verbraucherzentralen. Zweck: Ausgleich der Informationsasymmetrie.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Polypol = viele auf beiden Seiten; typisch für IT-Dienstleistungen.',
      'Nachfrage ≠ Bedürfnis – erst mit Kaufkraft wird es Nachfrage.',
      'Preis↑ → Angebot↑, Nachfrage↓ (Grundgesetz der Preisbildung).',
      'Verbraucherschutz wird meist NICHT von der Sozialversicherung getragen, sondern von Verbraucherzentralen / BGB.'
    ]
  },

  // ===========================================================================
  // 6. RECHTSFORMEN
  // ===========================================================================
  {
    themaId: 'wiso-rechtsformen',
    titel: 'Rechtsformen von Unternehmen',
    einleitung: 'Die GmbH dominiert die Prüfung – Stammkapital, Haftung und Handelsregistereintragung werden fast jedes Mal gefragt. Dazu kommen AG, OHG, KG, GbR und Fragen zu Prokura und Unternehmenszusammenschlüssen.',
    abschnitte: [
      {
        titel: 'Überblick',
        inhalt: `
          <table style="width:100%; border-collapse:collapse; margin:8px 0;">
            <tr style="background:#f0f4ff;"><th style="border:1px solid #ccc; padding:6px;">Rechtsform</th><th style="border:1px solid #ccc; padding:6px;">Kapital</th><th style="border:1px solid #ccc; padding:6px;">Haftung</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Einzelunternehmen (e.K.)</td><td style="border:1px solid #ccc; padding:6px;">-</td><td style="border:1px solid #ccc; padding:6px;">unbeschränkt, auch privat</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">GbR</td><td style="border:1px solid #ccc; padding:6px;">-</td><td style="border:1px solid #ccc; padding:6px;">alle unbeschränkt</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">OHG</td><td style="border:1px solid #ccc; padding:6px;">-</td><td style="border:1px solid #ccc; padding:6px;">alle unbeschränkt, persönlich</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">KG</td><td style="border:1px solid #ccc; padding:6px;">-</td><td style="border:1px solid #ccc; padding:6px;">Komplementär voll, Kommanditist bis Einlage</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">UG (haftungsbeschränkt)</td><td style="border:1px solid #ccc; padding:6px;">1 EUR</td><td style="border:1px solid #ccc; padding:6px;">nur Gesellschaftsvermögen</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">GmbH</td><td style="border:1px solid #ccc; padding:6px;">25.000 EUR (12.500 bei Gründung)</td><td style="border:1px solid #ccc; padding:6px;">nur Gesellschaftsvermögen</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">AG</td><td style="border:1px solid #ccc; padding:6px;">50.000 EUR</td><td style="border:1px solid #ccc; padding:6px;">nur Gesellschaftsvermögen</td></tr>
          </table>
          <p><strong>Personengesellschaften</strong> (GbR, OHG, KG) sind keine juristischen Personen – die Gesellschafter haften persönlich. <strong>Kapitalgesellschaften</strong> (GmbH, AG, UG) sind juristische Personen mit eigener Rechtsfähigkeit.</p>
        `
      },
      {
        titel: 'GmbH im Detail',
        inhalt: `
          <ul>
            <li>Stammkapital mind. <strong>25.000 EUR</strong>, bei Gründung mind. 12.500 EUR einzuzahlen (<code>§ 5 GmbHG</code>).</li>
            <li>Rechtsfähig mit <strong>Eintragung ins Handelsregister</strong> (<code>§ 11 GmbHG</code>). Vorher: Vor-GmbH mit persönlicher Haftung.</li>
            <li>Haftung: nur mit Gesellschaftsvermögen (<code>§ 13 GmbHG</code>). Privatvermögen der Gesellschafter bleibt unberührt.</li>
            <li>Organe: Geschäftsführer + Gesellschafterversammlung (+ Aufsichtsrat ab 500 AN).</li>
            <li>Gewinnverteilung nach Geschäftsanteilen (<code>§ 29 GmbHG</code>), abweichend im Gesellschaftsvertrag möglich.</li>
          </ul>
        `
      },
      {
        titel: 'Prokura & Handlungsvollmacht',
        inhalt: `
          <p><strong>Prokura</strong> (<code>§§ 48-53 HGB</code>): umfassende Handlungsvollmacht, muss ins HR eingetragen werden, Zeichnung mit "ppa.".</p>
          <p><strong>Ein Prokurist darf NICHT:</strong></p>
          <ul>
            <li>Grundstücke verkaufen oder belasten</li>
            <li>die Bilanz unterzeichnen</li>
            <li>das Unternehmen verkaufen</li>
            <li>neue Gesellschafter aufnehmen</li>
            <li>Prokura erteilen</li>
          </ul>
          <p><strong>Handlungsvollmacht</strong>: begrenzter Umfang. Zusatz "i.V." (Generalvollmacht) oder "i.A." (Einzelauftrag).</p>
        `
      },
      {
        titel: 'Unternehmenszusammenschlüsse',
        inhalt: `
          <ul>
            <li><strong>Fusion (Verschmelzung)</strong>: Unternehmen geben rechtliche Selbstständigkeit auf – eines übernimmt das andere oder beide bilden ein neues.</li>
            <li><strong>Konzern</strong>: rechtlich selbstständige Unternehmen unter einheitlicher wirtschaftlicher Leitung (Mutter/Tochter).</li>
            <li><strong>Kartell</strong>: Absprache rechtlich und wirtschaftlich selbstständiger Unternehmen (oft wettbewerbsrechtlich verboten).</li>
            <li><strong>ARGE</strong>: Arbeitsgemeinschaft zur gemeinsamen Auftragsabwicklung.</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'GmbH-Stammkapital: 25.000 EUR (nicht 50.000 – das ist die AG!).',
      'Rechtsfähigkeit GmbH: erst mit HR-Eintragung.',
      'Prokurist darf NICHT Grundstücke verkaufen, Bilanz unterschreiben oder Prokura erteilen.',
      'Fusion = Identität weg; Konzern = alle rechtlich selbstständig.',
      'Natürliche Person = Mensch; juristische Person = GmbH/AG/Verein.'
    ]
  },

  // ===========================================================================
  // 7. BETRIEB
  // ===========================================================================
  {
    themaId: 'wiso-betrieb',
    titel: 'Betriebsorganisation & Produktionsfaktoren',
    einleitung: 'Aufbau- und Ablauforganisation, Leitungssysteme und Arbeitsteilung. In der Prüfung 1-2 Aufgaben – typisch: Stabsstelle erkennen, Leitungssystem vom Organigramm ablesen.',
    abschnitte: [
      {
        titel: 'Aufbau- vs. Ablauforganisation',
        inhalt: `
          <ul>
            <li><strong>Aufbauorganisation</strong>: "Wer macht was" – Stellen, Abteilungen, Hierarchien (Organigramm).</li>
            <li><strong>Ablauforganisation</strong>: "Wie läuft es ab" – Prozesse, Arbeitsabfolgen, Zeiten.</li>
          </ul>
        `
      },
      {
        titel: 'Leitungssysteme',
        inhalt: `
          <ul>
            <li><strong>Einliniensystem</strong>: jeder MA hat genau einen Vorgesetzten (Einheit der Auftragserteilung).</li>
            <li><strong>Mehrliniensystem</strong>: jeder MA hat mehrere fachlich weisungsbefugte Vorgesetzte.</li>
            <li><strong>Stab-Linien-System</strong>: Einliniensystem + Stabsstellen zur Beratung; Stäbe sind NICHT weisungsbefugt.</li>
            <li><strong>Matrixorganisation</strong>: zwei Dimensionen (z.B. Funktion + Projekt).</li>
          </ul>
          <p><strong>Stabsstelle</strong>: berät die Leitung, hat KEINE Weisungsbefugnis gegenüber anderen Abteilungen.</p>
        `
      },
      {
        titel: 'Produktionsfaktoren & Arbeitsteilung',
        inhalt: `
          <p>Betriebliche Produktionsfaktoren (Gutenberg): <strong>Betriebsmittel</strong>, <strong>Werkstoffe</strong>, <strong>ausführende Arbeit</strong>, <strong>dispositiver Faktor</strong> (Leitung, Planung, Organisation).</p>
          <p><strong>Betriebliche Arbeitsteilung (Arbeitszerlegung)</strong>: ein Prozess wird in mehrere Teilschritte gegliedert, die verschiedene Arbeitskräfte im Betrieb ausführen.</p>
          <p><strong>Zwischenbetriebliche Arbeitsteilung</strong>: Teile des Prozesses werden an andere Unternehmen ausgelagert (z.B. Outsourcing, Supply Chain).</p>
        `
      }
    ],
    pruefungsTipps: [
      'Stabsstelle = berät, KEINE Weisungsbefugnis. Typische Prüfungsfalle.',
      'Arbeitszerlegung = EIN Prozess in viele Schritte innerhalb des Betriebs (≠ Outsourcing).',
      'Organigramm erkennen: 1 Chef pro MA = Einlinie; mehrere = Mehrlinie; gestrichelte Kästen seitlich = Stab.'
    ]
  },

  // ===========================================================================
  // 8. POLITIK, KONJUNKTUR
  // ===========================================================================
  {
    themaId: 'wiso-politik-konjunktur',
    titel: 'Wirtschaftspolitik, Konjunktur & Inflation',
    einleitung: 'Magisches Viereck (Stabilitätsgesetz), Konjunkturphasen, Inflation/Deflation, Geld- und Fiskalpolitik. 1-2 Aufgaben pro Prüfung.',
    abschnitte: [
      {
        titel: 'Magisches Viereck (§ 1 StabWG)',
        inhalt: `
          <p>Vier gleichrangige wirtschaftspolitische Ziele:</p>
          <ol>
            <li><strong>Preisstabilität</strong> – gemessen am Verbraucherpreisindex (HVPI).</li>
            <li><strong>Hoher Beschäftigungsstand</strong> – Indikator Arbeitslosenquote.</li>
            <li><strong>Außenwirtschaftliches Gleichgewicht</strong> – Außenbeitrag.</li>
            <li><strong>Stetiges und angemessenes Wirtschaftswachstum</strong> – BIP-Zuwachsrate.</li>
          </ol>
          <p><strong>Magisches Sechseck</strong> ergänzt: gerechte Einkommensverteilung + Umweltschutz.</p>
        `
      },
      {
        titel: 'Konjunkturzyklus',
        inhalt: `
          <p>Typische Phasen: <strong>Aufschwung → Boom → Abschwung (Rezession) → Tiefstand (Depression)</strong>.</p>
          <ul>
            <li><strong>Rezession</strong>: BIP sinkt, Arbeitslosenquote steigt, Investitionen gehen zurück.</li>
            <li><strong>Boom</strong>: Vollauslastung, Inflationsgefahr, Fachkräftemangel.</li>
          </ul>
        `
      },
      {
        titel: 'Inflation, Deflation & Kaufkraft',
        inhalt: `
          <ul>
            <li><strong>Inflation</strong>: allgemeiner Preisanstieg → Kaufkraftverlust.</li>
            <li><strong>Deflation</strong>: allgemeiner Preisrückgang, oft mit Rezession.</li>
          </ul>
          <p><strong>Kaufkraft erhöht</strong> sich durch: Steuersenkungen, Senkung der Sozialbeiträge, Erhöhung von Wohngeld/Transferzahlungen.<br>
          <strong>Kaufkraft sinkt</strong> durch: Erhöhung MwSt, Zölle, Sozialbeiträge.</p>
        `
      },
      {
        titel: 'Geld- und Fiskalpolitik',
        inhalt: `
          <ul>
            <li><strong>EZB (Geldpolitik)</strong>: steuert Leitzins, Inflationsziel ~2%.</li>
            <li><strong>Staat (Fiskalpolitik)</strong>: Steuern, Staatsausgaben, Subventionen (z.B. E-Auto-Prämie).</li>
          </ul>
          <p>Antizyklische Fiskalpolitik: in Rezession expansiv (Ausgaben↑, Steuern↓), im Boom restriktiv.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Magisches Viereck: Preis + Beschäftigung + Wachstum + Außenwirtschaft. Umweltschutz ist NICHT dabei.',
      'Rezession = BIP↓ und Arbeitslosigkeit↑.',
      'Globalisierung fördern = Zölle ↓, Freihandelsabkommen, Auslandsniederlassungen.',
      'Leitzins-Entscheidungen trifft die EZB (nicht die Bundesbank, nicht der Staat).'
    ]
  },

  // ===========================================================================
  // 9. STEUERN
  // ===========================================================================
  {
    themaId: 'wiso-steuern',
    titel: 'Steuern & Wirtschaftskennzahlen',
    einleitung: 'Direkte vs. indirekte Steuern, progressive vs. proportionale Tarife. Dazu klassische WiSo-Rechenaufgaben: Umsatzrentabilität, EK-Rentabilität, Wirtschaftlichkeit.',
    abschnitte: [
      {
        titel: 'Direkte vs. indirekte Steuern',
        inhalt: `
          <ul>
            <li><strong>Direkte Steuern</strong>: Steuerschuldner = Steuerträger. Beispiele: Einkommensteuer, Körperschaftsteuer, Gewerbesteuer, Solidaritätszuschlag.</li>
            <li><strong>Indirekte Steuern</strong>: Steuerschuldner ≠ Steuerträger. Beispiele: Umsatzsteuer/MwSt, Tabaksteuer, Energiesteuer, Biersteuer.</li>
          </ul>
          <p><strong>Progressiv</strong>: Satz steigt mit Bemessungsgrundlage (Einkommensteuer).<br>
          <strong>Proportional</strong>: gleicher Satz unabhängig von Höhe (USt 19%/7%, KSt 15%).</p>
        `
      },
      {
        titel: 'Lohnsteuerklassen',
        inhalt: `
          <ul>
            <li><strong>I</strong>: ledig / geschieden / verwitwet ohne Kind</li>
            <li><strong>II</strong>: Alleinerziehende mit Kind</li>
            <li><strong>III / V</strong>: Kombination für Verheiratete (III = höheres Einkommen, V = geringeres)</li>
            <li><strong>IV</strong>: Verheiratete mit ähnlichem Einkommen (auch IV/IV mit Faktor)</li>
            <li><strong>VI</strong>: Zweit-/Nebenjob</li>
          </ul>
        `
      },
      {
        titel: 'Wirtschaftskennzahlen',
        inhalt: `
          <ul>
            <li><strong>Umsatzrentabilität</strong> = Gewinn / Umsatz × 100%</li>
            <li><strong>Eigenkapitalrentabilität</strong> = Gewinn / Eigenkapital × 100%</li>
            <li><strong>Gesamtkapitalrentabilität</strong> = (Gewinn + FK-Zinsen) / Gesamtkapital × 100%</li>
            <li><strong>Wirtschaftlichkeit</strong> = Ertrag / Aufwand (&gt;1 = wirtschaftlich)</li>
            <li><strong>Produktivität</strong> = Ausbringung / Einsatz</li>
            <li><strong>AN-Anteil GKV</strong> = Brutto × (Beitragssatz + Zusatzbeitrag) / 2</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Bei Rentabilität nicht das "× 100%" vergessen.',
      'Wirtschaftlichkeit = Ertrag / Aufwand; ≥ 1 lohnt sich.',
      'USt und KSt sind proportional, Einkommensteuer ist progressiv.',
      'Indirekte Steuer: Verkäufer führt ab, Käufer trägt die Last.'
    ]
  },

  // ===========================================================================
  // 10. NACHHALTIGKEIT, EU, ARBEITSSCHUTZ
  // ===========================================================================
  {
    themaId: 'wiso-nachhaltigkeit',
    titel: 'Nachhaltigkeit, EU, Arbeits- & Brandschutz',
    einleitung: 'Seit der Neuordnung 2020 und vor allem ab Winter 2022/23 stark ausgebaut: Drei Säulen der Nachhaltigkeit, Charta der Vielfalt, ArbSchG, Brandschutz (PASS-Regel). Außerdem: EU-Binnenmarkt und die vier Freiheiten.',
    abschnitte: [
      {
        titel: 'Drei Säulen der Nachhaltigkeit',
        inhalt: `
          <p>Nachhaltigkeit ruht auf drei gleichrangigen Säulen: <strong>Ökonomie</strong>, <strong>Ökologie</strong>, <strong>Soziales</strong>.</p>
          <ul>
            <li><strong>Ökologisch</strong>: Emissionsreduktion, Recycling, faire Rohstoffe, ökologisch zertifizierte Lieferanten.</li>
            <li><strong>Sozial</strong>: Diversity, faire Entlohnung, Mitarbeiterbeteiligung, Betriebskindergarten.</li>
            <li><strong>Ökonomisch</strong>: langfristige Rentabilität, stabile Lieferketten.</li>
          </ul>
          <p><strong>Umweltprinzipien:</strong> Verursacherprinzip (wer verursacht, zahlt), Vorsorgeprinzip (Schäden vermeiden), Kooperationsprinzip (Staat + Wirtschaft + Gesellschaft).</p>
        `
      },
      {
        titel: 'Recycling & Abfallhierarchie',
        inhalt: `
          <p><strong>Kreislaufwirtschaftsgesetz (KrWG)</strong> – Rangfolge:</p>
          <ol>
            <li>Vermeidung</li>
            <li>Wiederverwendung</li>
            <li>Recycling</li>
            <li>sonstige Verwertung (z.B. energetisch)</li>
            <li>Beseitigung</li>
          </ol>
          <p><strong>Blauer Engel</strong>: deutsches Umweltzeichen für schadstoffarme, umweltschonend produzierte Waren. Unterscheide: Grüner Punkt (Verpackungsrücknahme), EU-Energielabel (Energieeffizienz).</p>
        `
      },
      {
        titel: 'Diversity & Charta der Vielfalt',
        inhalt: `
          <p>Die <strong>Charta der Vielfalt</strong> ist eine freiwillige Selbstverpflichtung zu einem vorurteilsfreien Arbeitsumfeld (seit 2006). Merkmale: Alter, Religion, sexuelle Orientierung, Nationalität, Geschlecht, Behinderung.</p>
          <p><strong>Diversity Management</strong>: Ziel ist es, die in der Vielfalt der Belegschaft liegenden Potenziale für den Unternehmenserfolg nutzbar zu machen.</p>
          <p><strong>AGG-Merkmale</strong>: Rasse/ethn. Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter, sexuelle Identität.</p>
        `
      },
      {
        titel: 'Arbeits- und Brandschutz',
        inhalt: `
          <p><strong>Arbeitsschutzgesetz (ArbSchG)</strong>: AG ist verpflichtet, alle erforderlichen Maßnahmen zu treffen. Unterweisungspflicht für alle MA. Der <strong>Arbeitsschutzbeauftragte</strong> unterstützt den AG bei der Durchführung des Unfallschutzes – die Verantwortung bleibt beim AG.</p>
          <p><strong>Verhalten im Brandfall</strong>:</p>
          <ol>
            <li><strong>Alarmieren</strong> (Notruf 112)</li>
            <li><strong>Retten</strong> – gefährdete Personen in Sicherheit bringen</li>
            <li><strong>Löschen</strong> – erst wenn 1+2 erledigt, mit geeigneten Mitteln</li>
          </ol>
          <p><strong>Feuerlöscher-Bedienung (PASS-Regel)</strong>: <em>Prüfen, Auslösen, Spritzen, Schauen</em>.</p>
          <p><strong>Emissionen</strong> im Sinne des BImSchG umfassen auch Lärm (Schallemission!), Erschütterungen, Strahlung, Gerüche.</p>
        `
      },
      {
        titel: 'EU & Binnenmarkt',
        inhalt: `
          <p><strong>Vier Grundfreiheiten im EU-Binnenmarkt</strong>: Freier Verkehr von <em>Waren</em>, <em>Personen</em>, <em>Dienstleistungen</em>, <em>Kapital</em>.</p>
          <p><strong>Globalisierung fördern</strong>: Freihandelsabkommen schließen, Zölle abbauen, Niederlassungen im Ausland.<br>
          <strong>Risiken</strong>: Lieferkettenunterbrechungen, Wechselkursrisiken, unterschiedliche Standards.</p>
          <p><strong>Europass</strong>: kostenloses EU-Instrument zur einheitlichen Darstellung von Qualifikationen.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Brandfall-Reihenfolge: 1) Alarm, 2) Retten, 3) Löschen. NIEMALS Fenster öffnen!',
      'Verursacherprinzip: Wer Schäden verursacht, trägt die Kosten.',
      'Schall/Lärm zählt rechtlich als Emission (BImSchG).',
      'AGG hat 6 Merkmale – Eselsbrücke "Ra-Ge-Re-Be-Al-Se".',
      'EU-Binnenmarkt: 4 Freiheiten (Waren, Personen, DL, Kapital) – KEINE fünfte.',
      'Diversity Management zielt auf Nutzbarmachung der Vielfalt, nicht auf Quote.'
    ]
  }
];
