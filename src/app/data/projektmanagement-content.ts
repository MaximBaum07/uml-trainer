import { TheorieInhalt } from '../models/app.models';

export const PM_THEORIE: TheorieInhalt[] = [
  // ============================================================
  // VORGEHENSMODELLE
  // ============================================================
  {
    themaId: 'pm-vorgehensmodelle',
    titel: 'Vorgehensmodelle — Klassisch vs. Agil',
    einleitung: 'Ein Vorgehensmodell beschreibt die organisatorische Struktur eines Softwareprojekts: welche Phasen es gibt, in welcher Reihenfolge sie durchlaufen werden und wie mit Änderungen umgegangen wird. In der AP2-Prüfung wird fast immer die Abgrenzung klassisch vs. agil abgefragt — häufig mit der Aufforderung, die Kategorie zu nennen UND ein konkretes Beispielmodell.',
    abschnitte: [
      {
        titel: 'Klassische Vorgehensmodelle',
        inhalt: `
          <p>Klassische Modelle sind <strong>plangetrieben</strong> und <strong>sequenziell</strong>: Phasen werden nacheinander durchlaufen, Änderungen während der Entwicklung sind nur schwer umsetzbar. Voraussetzung ist ein vollständig ausformuliertes Pflichtenheft zu Projektbeginn.</p>
          <h4>Wasserfallmodell</h4>
          <ul>
            <li>Strikt sequenziell: Analyse &rarr; Entwurf &rarr; Implementierung &rarr; Test &rarr; Betrieb</li>
            <li>Jede Phase endet mit einem Meilenstein (dokumentiertes Ergebnis)</li>
            <li><strong>Vorteile:</strong> klare Struktur, gut dokumentiert, einfache Kostenplanung</li>
            <li><strong>Nachteile:</strong> Änderungen sehr teuer, späte Fehlererkennung, wenig Kundenfeedback</li>
            <li>Einsatz: Projekte mit stabilen, klaren Anforderungen (z.B. Embedded-Systeme)</li>
          </ul>
          <h4>V-Modell</h4>
          <ul>
            <li>Erweiterung des Wasserfalls: jeder Entwicklungsphase wird eine <strong>Testphase</strong> zugeordnet</li>
            <li>Linke Seite des V: Analyse, Grob-/Feinentwurf, Codierung</li>
            <li>Rechte Seite des V: Unit-, Integrations-, System-, Abnahmetest</li>
            <li>V-Modell XT ist in der öffentlichen Verwaltung der deutsche Standard</li>
          </ul>
          <h4>Spiralmodell</h4>
          <ul>
            <li>Iterativ mit expliziter <strong>Risikoanalyse</strong> pro Zyklus</li>
            <li>Jede Spirale: Ziele &rarr; Risiken &rarr; Entwicklung &rarr; Planung der nächsten Spirale</li>
            <li>Geeignet für große, risikobehaftete Projekte</li>
          </ul>
        `
      },
      {
        titel: 'Agile Vorgehensmodelle',
        inhalt: `
          <p>Agile Modelle sind <strong>iterativ</strong> und <strong>inkrementell</strong>. Software wird in kurzen Zyklen geliefert, Anforderungen dürfen sich ändern. Grundlage ist das <em>Agile Manifest</em> (2001).</p>
          <h4>Werte des agilen Manifests</h4>
          <ul>
            <li><strong>Individuen und Interaktionen</strong> über Prozesse und Werkzeuge</li>
            <li><strong>Funktionierende Software</strong> über umfassende Dokumentation</li>
            <li><strong>Zusammenarbeit mit dem Kunden</strong> über Vertragsverhandlung</li>
            <li><strong>Reagieren auf Veränderung</strong> über das Befolgen eines Plans</li>
          </ul>
          <h4>Scrum</h4>
          <p>Framework mit festen Rollen (PO, SM, Team), Events (Sprint, Daily, Review, Retro, Planning) und Artefakten (Product Backlog, Sprint Backlog, Increment). Sprintlänge üblicherweise 2–4 Wochen.</p>
          <h4>Kanban</h4>
          <p>Visualisierung des Arbeitsflusses auf einem Board mit Spalten (z.B. <em>To Do / In Progress / Done</em>). Kernprinzip: <strong>WIP-Limits</strong> (Work in Progress) pro Spalte, um Engpässe sichtbar zu machen. Kein fester Sprintrhythmus — kontinuierlicher Fluss (Pull-Prinzip).</p>
          <h4>Extreme Programming (XP)</h4>
          <ul>
            <li>Sehr technische Praktiken: <strong>Pair Programming</strong>, <strong>Test-Driven Development</strong>, <strong>Continuous Integration</strong>, <strong>Refactoring</strong></li>
            <li>Kurze Iterationen (1–3 Wochen), enger Kundenkontakt (On-Site-Customer)</li>
            <li>Kollektives Code-Eigentum</li>
          </ul>
        `
      },
      {
        titel: 'Direkter Vergleich klassisch vs. agil',
        inhalt: `
          <table style="width:100%; border-collapse:collapse; margin: 12px 0;">
            <tr style="background:#f0f4ff;">
              <th style="border:1px solid #ccc; padding:8px;">Kriterium</th>
              <th style="border:1px solid #ccc; padding:8px;">Klassisch (Wasserfall/V)</th>
              <th style="border:1px solid #ccc; padding:8px;">Agil (Scrum/Kanban/XP)</th>
            </tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">Anforderungen</td><td style="border:1px solid #ccc; padding:8px;">zu Beginn vollständig</td><td style="border:1px solid #ccc; padding:8px;">entstehen iterativ</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">Planung</td><td style="border:1px solid #ccc; padding:8px;">Gesamtplan</td><td style="border:1px solid #ccc; padding:8px;">Sprint-/Release-Planung</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">Dokumentation</td><td style="border:1px solid #ccc; padding:8px;">umfangreich, formal</td><td style="border:1px solid #ccc; padding:8px;">minimal, ausreichend</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">Kundeneinbindung</td><td style="border:1px solid #ccc; padding:8px;">punktuell (Meilensteine)</td><td style="border:1px solid #ccc; padding:8px;">kontinuierlich (Review)</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">Änderungen</td><td style="border:1px solid #ccc; padding:8px;">teuer, Change Request</td><td style="border:1px solid #ccc; padding:8px;">willkommen, jederzeit</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">Lieferung</td><td style="border:1px solid #ccc; padding:8px;">am Projektende</td><td style="border:1px solid #ccc; padding:8px;">inkrementell, früh</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">Team</td><td style="border:1px solid #ccc; padding:8px;">rollenbasiert, hierarchisch</td><td style="border:1px solid #ccc; padding:8px;">selbstorganisiert, cross-funktional</td></tr>
          </table>
        `
      }
    ],
    pruefungsTipps: [
      'Fast jede Prüfung fragt "Kategorie nennen UND Beispiel nennen" — beides liefern, sonst wird nur die Hälfte der Punkte vergeben.',
      'Klassisch = sequenziell mit vollständigem Pflichtenheft zu Beginn. Agil = iterativ/inkrementell mit Feedbackzyklen. Diese Definitionen auswendig können.',
      'Bei "Welches Modell passt zum Szenario?" auf Signalwörter achten: "stabile Anforderungen / Sicherheitskritik" &rarr; klassisch; "schnelle Markteinführung / unklare Anforderungen" &rarr; agil.',
      'V-Modell hervorheben: Phasen mit Tests gegenüberstellen (Unit-/Integrations-/System-/Abnahmetest).',
      'Kanban ist KEIN Scrum-Ersatz: kein Sprint, keine festen Rollen, sondern Fluss mit WIP-Limits.'
    ]
  },

  // ============================================================
  // LASTENHEFT / PFLICHTENHEFT / ANFORDERUNGEN
  // ============================================================
  {
    themaId: 'pm-lastenheft',
    titel: 'Lastenheft, Pflichtenheft & Anforderungsanalyse',
    einleitung: 'Die Anforderungsanalyse ist die Grundlage jedes Projekts. Sie klärt, WAS das System können soll (funktional) und WIE gut (nichtfunktional). Lasten- und Pflichtenheft sind die zentralen Dokumente der Vertragsgrundlage zwischen Auftraggeber und Auftragnehmer.',
    abschnitte: [
      {
        titel: 'Lastenheft — was will der Auftraggeber?',
        inhalt: `
          <p>Das <strong>Lastenheft</strong> wird vom <strong>Auftraggeber (AG)</strong> erstellt. Es beschreibt aus Sicht des Kunden:</p>
          <ul>
            <li><strong>Was</strong> soll das System leisten?</li>
            <li><strong>Wofür</strong> wird es gebraucht (Ziele, Nutzen)?</li>
            <li>Welche Rahmenbedingungen gibt es (Budget, Termine, Schnittstellen)?</li>
          </ul>
          <p>Das Lastenheft ist die Grundlage für die Ausschreibung / Angebotseinholung. Es ist bewusst <em>lösungsneutral</em> formuliert — es sagt nicht, WIE etwas umgesetzt wird.</p>
          <p><em>Eselsbrücke:</em> Der Auftraggeber <strong>lädt</strong> dem Auftragnehmer die Anforderungen auf &rarr; <strong>Last</strong>enheft.</p>
        `
      },
      {
        titel: 'Pflichtenheft — wie setzt der Auftragnehmer um?',
        inhalt: `
          <p>Das <strong>Pflichtenheft</strong> wird vom <strong>Auftragnehmer (AN)</strong> erstellt, basierend auf dem Lastenheft. Es beschreibt:</p>
          <ul>
            <li><strong>Wie</strong> werden die Anforderungen technisch umgesetzt?</li>
            <li>Architektur, eingesetzte Technologien, Schnittstellen, Datenmodell</li>
            <li>Abnahmekriterien, Testkonzept</li>
          </ul>
          <p>Das Pflichtenheft wird vom AG freigegeben und ist <strong>vertraglich bindend</strong>. Spätere Änderungen laufen formal über das <em>Change Request Management</em>.</p>
          <p><em>Eselsbrücke:</em> Der Auftragnehmer verpflichtet sich &rarr; <strong>Pflicht</strong>enheft.</p>
        `
      },
      {
        titel: 'Funktionale vs. nichtfunktionale Anforderungen',
        inhalt: `
          <h4>Funktionale Anforderungen (WAS?)</h4>
          <ul>
            <li>Beschreiben konkrete Funktionen / Features des Systems</li>
            <li>Beispiele: "Benutzer kann sich anmelden", "System erzeugt PDF-Rechnung", "Mitarbeiter kann Urlaub beantragen"</li>
          </ul>
          <h4>Nichtfunktionale Anforderungen (WIE gut?)</h4>
          <ul>
            <li>Qualitätseigenschaften, Rahmenbedingungen</li>
            <li><strong>Performance:</strong> "Antwortzeit &lt; 2 Sekunden bei 1000 Nutzern"</li>
            <li><strong>Sicherheit:</strong> "Kennwörter werden gehasht gespeichert (bcrypt)"</li>
            <li><strong>Usability:</strong> "Mobile-fähige Oberfläche nach WCAG 2.1 AA"</li>
            <li><strong>Verfügbarkeit:</strong> "99,5 % pro Kalenderjahr"</li>
            <li><strong>Wartbarkeit, Portabilität, Zuverlässigkeit</strong></li>
          </ul>
        `
      },
      {
        titel: 'Stakeholderanalyse',
        inhalt: `
          <p>Ein <strong>Stakeholder</strong> ist eine Person oder Gruppe mit Interesse am Projekterfolg (positiv wie negativ). Typische Gruppen:</p>
          <ul>
            <li>Auftraggeber / Management (Budget, Strategie)</li>
            <li>Endanwender (Usability, tägliche Arbeit)</li>
            <li>Betriebsrat / Personalrat (Arbeitsbedingungen, Überwachung)</li>
            <li>IT-Betrieb (Sicherheit, Wartbarkeit)</li>
            <li>Fachbereiche, Kunden, Lieferanten, Datenschutzbeauftragter</li>
          </ul>
          <p>In der Prüfung häufig gefragt: <strong>"Befürchtungen" + "Gegenmaßnahmen"</strong>. Beispiel:</p>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="background:#f0f4ff;"><th style="border:1px solid #ccc; padding:6px;">Stakeholder</th><th style="border:1px solid #ccc; padding:6px;">Befürchtung</th><th style="border:1px solid #ccc; padding:6px;">Gegenmaßnahme</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Mitarbeiter</td><td style="border:1px solid #ccc; padding:6px;">Arbeitsplatzverlust durch Automatisierung</td><td style="border:1px solid #ccc; padding:6px;">Qualifizierungsangebote, Einbindung Betriebsrat</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Vorstand</td><td style="border:1px solid #ccc; padding:6px;">Kostenexplosion</td><td style="border:1px solid #ccc; padding:6px;">Pilotphase, Festpreisvertrag, Controlling</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Endkunde</td><td style="border:1px solid #ccc; padding:6px;">Datenschutzbedenken</td><td style="border:1px solid #ccc; padding:6px;">DSGVO-Konformität, Transparenz, Verschlüsselung</td></tr>
          </table>
        `
      }
    ],
    pruefungsTipps: [
      'Lastenheft = AG, Pflichtenheft = AN. Merkhilfe: "AG lädt auf, AN verpflichtet sich".',
      '"Funktional vs. nichtfunktional" ist ein Dauerbrenner: funktional = WAS, nichtfunktional = WIE gut (Performance, Sicherheit, Usability).',
      'Stakeholder-Befürchtungs-Tabellen: Befürchtung MUSS individuell zur Rolle passen, Maßnahme MUSS zur Befürchtung passen — generische Antworten geben kaum Punkte.',
      'Bei nichtfunktionalen Anforderungen ist die Messbarkeit entscheidend: "schnell" ist schlecht, "Antwortzeit &lt; 2 s bei 1000 Nutzern" ist gut.',
      'Signalwörter im Lastenheft-Text sauber in Kardinalitäten übersetzen: "jeder" = 1..*, "genau ein" = 1, "kann" / "optional" = 0..1.'
    ]
  },

  // ============================================================
  // AUFWANDSSCHÄTZUNG / RISIKO / MAKE-OR-BUY
  // ============================================================
  {
    themaId: 'pm-aufwand',
    titel: 'Aufwandsschätzung, Risiko & Make-or-Buy',
    einleitung: 'Planung eines Softwareprojekts bedeutet: Aufwand schätzen, Risiken identifizieren und entscheiden, ob Komponenten selbst entwickelt oder eingekauft werden. In der AP2 werden typischerweise Risikotabellen ausgefüllt und Vor-/Nachteile von Fremdvergabe genannt.',
    abschnitte: [
      {
        titel: 'Aufwandsschätzverfahren',
        inhalt: `
          <h4>Expertenschätzung</h4>
          <ul>
            <li>Erfahrene Mitarbeiter schätzen Aufwand einzelner Arbeitspakete</li>
            <li><strong>Delphi-Methode:</strong> mehrere Experten schätzen unabhängig, Abweichungen werden diskutiert bis Konsens</li>
            <li><strong>Planning Poker</strong> (agil): Teammitglieder decken gleichzeitig Karten mit Story Points auf</li>
            <li><strong>Vorteil:</strong> schnell, nutzt Erfahrungswissen</li>
            <li><strong>Nachteil:</strong> subjektiv, abhängig von Personen</li>
          </ul>
          <h4>Analogieschätzung</h4>
          <ul>
            <li>Vergleich mit ähnlich abgeschlossenen Projekten</li>
            <li>Funktioniert nur bei ähnlicher Technologie/Größe</li>
          </ul>
          <h4>Function-Point-Methode</h4>
          <ul>
            <li>Bewertet Funktionalität anhand von Eingaben, Ausgaben, Abfragen, Datenbeständen, Schnittstellen</li>
            <li>Gewichtung nach Komplexität &rarr; unbewertete Function Points &rarr; Korrekturfaktoren &rarr; Personenmonate</li>
          </ul>
          <h4>COCOMO (Constructive Cost Model)</h4>
          <ul>
            <li>Formelbasiert: Aufwand in Personenmonaten = a &middot; (KLOC)^b</li>
            <li>Drei Varianten: Organic, Semi-Detached, Embedded (unterschiedliche Koeffizienten)</li>
            <li>Basis: geschätzte Codezeilen (KLOC = 1000 Lines of Code)</li>
          </ul>
        `
      },
      {
        titel: 'Risikoanalyse',
        inhalt: `
          <p>Ein <strong>Risiko</strong> ist ein mögliches Ereignis mit negativer Auswirkung auf das Projektziel. Risikoanalyse klassisch in vier Schritten:</p>
          <ol>
            <li><strong>Identifikation:</strong> Welche Risiken gibt es? (Brainstorming, Checklisten)</li>
            <li><strong>Bewertung:</strong> Eintrittswahrscheinlichkeit × Schadenshöhe = Risikowert</li>
            <li><strong>Maßnahmen:</strong> Vermeiden / Vermindern / Übertragen / Akzeptieren</li>
            <li><strong>Überwachung:</strong> Risikoregister pflegen, im Projektfortschritt neu bewerten</li>
          </ol>
          <h4>Typische Risikotabelle (AP2-Format)</h4>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="background:#f0f4ff;">
              <th style="border:1px solid #ccc; padding:6px;">Risiko</th>
              <th style="border:1px solid #ccc; padding:6px;">Ursache</th>
              <th style="border:1px solid #ccc; padding:6px;">Auswirkung</th>
              <th style="border:1px solid #ccc; padding:6px;">Maßnahme</th>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:6px;">Unterschätzung des Entwicklungsaufwands</td>
              <td style="border:1px solid #ccc; padding:6px;">Unklare Anforderungen, fehlende Erfahrung</td>
              <td style="border:1px solid #ccc; padding:6px;">Terminverzug, Kostenüberschreitung</td>
              <td style="border:1px solid #ccc; padding:6px;">Puffer einplanen, iterative Schätzung</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:6px;">Inkompatible Schnittstellen</td>
              <td style="border:1px solid #ccc; padding:6px;">Mangelnde API-Abstimmung zwischen Teams</td>
              <td style="border:1px solid #ccc; padding:6px;">Integrationsaufwand, Nacharbeit</td>
              <td style="border:1px solid #ccc; padding:6px;">Frühe Schnittstellendefinition, Integrationstests</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:6px;">Widerspruch des Personalrats</td>
              <td style="border:1px solid #ccc; padding:6px;">Sorge um Überwachung / Arbeitsplätze</td>
              <td style="border:1px solid #ccc; padding:6px;">Projektverzögerung, Image-Schaden</td>
              <td style="border:1px solid #ccc; padding:6px;">Frühzeitige Einbindung, Betriebsvereinbarung</td>
            </tr>
          </table>
        `
      },
      {
        titel: 'Make-or-Buy (Fremdvergabe)',
        inhalt: `
          <p>Die <strong>Make-or-Buy-Entscheidung</strong> klärt, ob eine Komponente selbst entwickelt (Make) oder eingekauft/extern beauftragt (Buy) wird.</p>
          <h4>Vorteile Fremdvergabe (Buy)</h4>
          <ul>
            <li>Kostenplanbarkeit durch Festpreis</li>
            <li>Zugriff auf externes Spezialwissen</li>
            <li>Entlastung eigener Ressourcen, schnellere Umsetzung</li>
            <li>Risikoübertragung auf den Auftragnehmer</li>
          </ul>
          <h4>Nachteile Fremdvergabe</h4>
          <ul>
            <li>Abhängigkeit vom Dienstleister (Vendor Lock-in)</li>
            <li>Know-how-Abfluss, kein interner Kompetenzaufbau</li>
            <li>Hoher Kommunikations- und Steuerungsaufwand</li>
            <li>Datenschutz-/Sicherheitsrisiken (Auftragsverarbeitung)</li>
          </ul>
          <h4>Entscheidungskriterien</h4>
          <ul>
            <li>Strategische Bedeutung (Kernkompetenz selbst machen)</li>
            <li>Kostenvergleich über Lebenszyklus (TCO)</li>
            <li>Vorhandenes Know-how im Haus</li>
            <li>Zeitdruck &rarr; oft pro Buy</li>
          </ul>
        `
      },
      {
        titel: 'Projektbegriffe — Meilenstein, Change Request, Lessons Learned',
        inhalt: `
          <ul>
            <li><strong>Meilenstein:</strong> terminiertes Ereignis im Projektablauf mit eindeutig definiertem Ergebnis — <em>hat keine Dauer</em>. Beispiel: "Abnahme Pflichtenheft erteilt".</li>
            <li><strong>Change Request Management:</strong> formaler Prozess zur Prüfung, Bewertung und Genehmigung von Änderungsanfragen nach Freigabe des Pflichtenhefts. Schritte: Erfassung &rarr; Bewertung (Aufwand, Auswirkung) &rarr; Entscheidung &rarr; Umsetzung &rarr; Dokumentation.</li>
            <li><strong>Stakeholder:</strong> Person/Gruppe mit Interesse oder Einfluss auf das Projekt.</li>
            <li><strong>Lessons Learned:</strong> systematische Sammlung von Erfahrungen nach Projektabschluss (was lief gut, was schlecht) zur Verbesserung künftiger Projekte.</li>
            <li><strong>Kick-off:</strong> offizielle Startveranstaltung eines Projekts.</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Risikotabellen: IMMER Ursache, Auswirkung UND Maßnahme nennen — jede Spalte wird einzeln bewertet.',
      'Bei Fremdvergabe die geforderte Anzahl Vor-/Nachteile exakt einhalten (meist 2 Vor + 2 Nach) — nur die ersten X werden gewertet.',
      'Meilenstein = KEIN Zeitraum, sondern ein Zeitpunkt mit Ergebnis. Niemals Meilenstein und Aktivität verwechseln.',
      'Lessons Learned NACH dem Projekt, Retro nach JEDEM Sprint (für agile Projekte).',
      'COCOMO und Function Points bitte wenigstens den Kern erklären können (formelbasiert vs. funktionsbasiert), auch wenn selten explizit gefordert.'
    ]
  },

  // ============================================================
  // AGIL / SCRUM
  // ============================================================
  {
    themaId: 'pm-agil',
    titel: 'Scrum — Rollen, Events, Artefakte',
    einleitung: 'Scrum ist das in der Prüfung am häufigsten abgefragte agile Framework. Es definiert ein leichtgewichtiges Vorgehen mit drei Rollen, fünf Events und drei Artefakten. Wichtig: Begriffe sauber auseinanderhalten und konkrete Beispiele nennen können.',
    abschnitte: [
      {
        titel: 'Die drei Scrum-Rollen',
        inhalt: `
          <h4>Product Owner (PO)</h4>
          <ul>
            <li>Verantwortlich für den <strong>Produkterfolg</strong> und den <strong>ROI</strong></li>
            <li>Pflegt und priorisiert das <strong>Product Backlog</strong></li>
            <li>Einziger Ansprechpartner für Anforderungen</li>
            <li>Schnittstelle zu Stakeholdern</li>
          </ul>
          <h4>Scrum Master (SM)</h4>
          <ul>
            <li><strong>Diener-Führer</strong> (Servant Leader), kein klassischer Projektleiter</li>
            <li>Sorgt dafür, dass das Team nach Scrum arbeitet</li>
            <li>Räumt Hindernisse (Impediments) aus</li>
            <li>Schützt das Team vor Störungen von außen</li>
            <li>Coacht Team und Organisation</li>
          </ul>
          <h4>Entwicklungsteam</h4>
          <ul>
            <li><strong>Selbstorganisiert</strong> und <strong>cross-funktional</strong> (3–9 Personen)</li>
            <li>Liefert am Ende jedes Sprints ein potenziell auslieferbares Increment</li>
            <li>Entscheidet selbst, wie viel Arbeit in einen Sprint passt</li>
          </ul>
        `
      },
      {
        titel: 'Die Scrum-Events',
        inhalt: `
          <p>Alle Events sind <strong>timeboxed</strong> (maximale Dauer).</p>
          <h4>Sprint</h4>
          <p>Iteration von 1–4 Wochen (üblich: 2 Wochen). Enthält alle anderen Events. Sprintdauer ist während des Sprints <em>unveränderlich</em>, Ziel (Sprint Goal) wird festgelegt.</p>
          <h4>Sprint Planning (max. 8 h bei 4-Wochen-Sprint)</h4>
          <p>Start des Sprints. Team wählt Backlog Items aus dem Product Backlog, definiert Sprint Goal und Sprint Backlog.</p>
          <h4>Daily Scrum / Daily Standup (15 min)</h4>
          <p>Tägliches Team-Meeting. Jedes Mitglied beantwortet: <em>Was habe ich gestern gemacht? Was mache ich heute? Welche Hindernisse gibt es?</em></p>
          <h4>Sprint Review (max. 4 h bei 4-Wochen-Sprint)</h4>
          <p>Am Sprintende. Team präsentiert das Increment den Stakeholdern &rarr; Feedback &rarr; Anpassung des Backlogs. Fokus: <strong>Produkt</strong>.</p>
          <h4>Sprint Retrospective (max. 3 h bei 4-Wochen-Sprint)</h4>
          <p>Nach dem Review. Team reflektiert Zusammenarbeit: <em>Was lief gut? Was verbessern?</em> Fokus: <strong>Prozess</strong>. Maßnahmen fließen in den nächsten Sprint ein.</p>
        `
      },
      {
        titel: 'Die Scrum-Artefakte',
        inhalt: `
          <h4>Product Backlog</h4>
          <ul>
            <li>Geordnete Liste aller bekannten Anforderungen ans Produkt</li>
            <li>Wird vom Product Owner gepflegt und priorisiert</li>
            <li>Items typischerweise als <strong>User Stories</strong>: "Als &lt;Rolle&gt; möchte ich &lt;Ziel&gt;, um &lt;Nutzen&gt;."</li>
            <li>Lebendes Dokument — wächst mit dem Produkt</li>
          </ul>
          <h4>Sprint Backlog</h4>
          <ul>
            <li>Auswahl aus dem Product Backlog für den aktuellen Sprint + Umsetzungsplan</li>
            <li>Gehört dem Team</li>
            <li>Wird täglich im Daily aktualisiert</li>
          </ul>
          <h4>Increment</h4>
          <ul>
            <li><strong>Potenziell auslieferbares Produkt</strong> am Ende jedes Sprints</li>
            <li>Muss die <strong>Definition of Done (DoD)</strong> erfüllen (z.B. Code Review, Tests grün, deployed auf Staging)</li>
          </ul>
          <h4>Zusätzliche Begriffe</h4>
          <ul>
            <li><strong>Story Points:</strong> relatives Aufwandsmaß (oft Fibonacci: 1,2,3,5,8,13)</li>
            <li><strong>Velocity:</strong> durchschnittliche Story Points pro Sprint &rarr; Prognose</li>
            <li><strong>Burndown-Chart:</strong> Restaufwand im Sprint</li>
            <li><strong>Definition of Ready (DoR):</strong> wann darf ein Item in den Sprint?</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Rollen, Events und Artefakte sauber trennen — Klassiker-Falle: "Daily" als Artefakt bezeichnet. Daily ist ein EVENT.',
      'Scrum Master ≠ Projektleiter: kein Weisungsrecht, sondern Coach / Moderator / Hindernisbeseitiger.',
      'Review vs. Retro unterscheiden: Review = Produkt (mit Kunden), Retro = Prozess (nur Team).',
      'Increment muss am Sprintende "potenziell auslieferbar" sein — nicht zwingend live, aber vollständig getestet laut DoD.',
      'Bei "Beschreiben Sie drei Elemente eines agilen Vorgehens" je ein Event/Rolle/Artefakt wählen — deckt die Breite ab.'
    ]
  }
];
