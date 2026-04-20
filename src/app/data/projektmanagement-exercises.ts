import { UebungsSet } from '../models/app.models';

export const PM_UEBUNGEN: UebungsSet[] = [
  {
    themaId: 'pm-vorgehensmodelle',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welches ist KEIN agiles Vorgehensmodell?',
        optionen: ['Scrum', 'Kanban', 'Wasserfall', 'Extreme Programming (XP)'],
        korrekteAntwort: 2,
        erklaerung: 'Wasserfall ist klassisch-sequentiell. Agil sind u.a. Scrum, Kanban, XP, SAFe.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Vorgehensmodelle den Kategorien zu.',
        paare: [
          { begriff: 'Wasserfall', definition: 'Klassisch, sequentiell' },
          { begriff: 'V-Modell', definition: 'Klassisch, Test auf jeder Ebene' },
          { begriff: 'Scrum', definition: 'Agil, iterativ-inkrementell' },
          { begriff: 'Kanban', definition: 'Agil, flussbasiert mit WIP-Limits' }
        ],
        erklaerung: 'AP2 fragt oft nach „nenne je ein Beispiel für klassisch und agil".'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Das V-Modell ordnet jedem Entwicklungsschritt eine Teststufe zu.',
        korrekt: true,
        erklaerung: 'Anforderungsanalyse ↔ Abnahmetest, Grobdesign ↔ Systemtest, Feindesign ↔ Integrationstest, Implementierung ↔ Unit-Test.'
      },
      {
        typ: 'freitext',
        frage: 'Nenne je zwei Vor- und Nachteile eines klassischen Vorgehensmodells (z.B. Wasserfall) gegenüber agilen Modellen.',
        musterloesung: `Vorteile klassisch:
1. Klare Struktur, feste Phasen, gute Dokumentation
2. Planbare Kosten und Termine (wenn Anforderungen stabil sind)

Nachteile klassisch:
1. Wenig Flexibilität bei Anforderungsänderungen
2. Fehler werden erst spät (im Test) sichtbar
3. Kunde sieht erst am Ende lauffähige Software

Agil ist besser bei unklaren/wechselnden Anforderungen, klassisch bei klar definierten Projekten (z.B. Behörden, Medizin).`,
        erklaerung: 'Klassisches AP2-Aufgabenpattern. Wichtig: Zahlen beachten ("nennen Sie zwei...") – nur die ersten N Antworten zählen.',
        stichwoerter: ['Dokumentation', 'planbar', 'Flexibilität', 'iterativ']
      },
      {
        typ: 'multiple-choice',
        frage: 'Wann ist ein agiles Vorgehen besonders sinnvoll?',
        optionen: [
          'Wenn Anforderungen zu Projektstart vollständig bekannt sind',
          'Wenn sich Anforderungen im Projektverlauf ändern können',
          'Bei sehr kleinen Projekten unter einer Woche',
          'Wenn nur eine Person am Projekt arbeitet'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Agile Ansätze lieben Änderungen (Agile Manifesto: „Responding to change over following a plan").'
      },
      {
        typ: 'lueckentext',
        frage: 'Im _______-Modell wird jede Entwicklungsstufe einer Teststufe gegenübergestellt.',
        antwort: 'V',
        erklaerung: 'V-Modell: linker Ast = Entwicklung, rechter Ast = Test. Verknüpft über horizontale Validierungs-Paare.'
      }
    ]
  },
  {
    themaId: 'pm-lastenheft',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Wer erstellt das Lastenheft?',
        optionen: ['Auftragnehmer', 'Auftraggeber', 'Projektleiter', 'Tester'],
        korrekteAntwort: 1,
        erklaerung: 'Lastenheft: Auftraggeber beschreibt WAS er will. Pflichtenheft: Auftragnehmer beschreibt WIE er es umsetzen wird.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne funktionale und nichtfunktionale Anforderungen zu.',
        paare: [
          { begriff: 'Der Nutzer kann Artikel in den Warenkorb legen', definition: 'Funktional' },
          { begriff: 'Seitenaufruf in < 2 Sekunden', definition: 'Nichtfunktional (Performance)' },
          { begriff: 'Bestellung abschließen mit Zahlungsart wählen', definition: 'Funktional' },
          { begriff: 'System erfüllt DSGVO', definition: 'Nichtfunktional (Sicherheit/Compliance)' }
        ],
        erklaerung: 'Funktional = WAS das System tun soll. Nichtfunktional = WIE gut (Performance, Sicherheit, Usability, Verfügbarkeit).'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Das Pflichtenheft ist die Basis für den Vertrag zwischen AG und AN.',
        korrekt: true,
        erklaerung: 'Lastenheft = AG-Wunsch. Pflichtenheft = AN-Zusage auf Basis des Lastenhefts. Letzteres wird unterschrieben.'
      },
      {
        typ: 'freitext',
        frage: 'Eine Firma lässt eine Webshop-Lösung entwickeln. Nenne je zwei funktionale und zwei nichtfunktionale Anforderungen.',
        musterloesung: `Funktional:
1. Kunde kann sich registrieren und anmelden
2. Kunde kann Artikel durchsuchen, in den Warenkorb legen und bestellen
3. Admin kann Artikelstamm pflegen

Nichtfunktional:
1. Performance: Seitenaufruf < 2 Sekunden bei 500 gleichzeitigen Nutzern
2. Sicherheit: HTTPS-Verschlüsselung, DSGVO-konform
3. Verfügbarkeit: 99,9 % pro Jahr (entspricht ca. 8,76 h Downtime)
4. Usability: Mobile-optimiert`,
        erklaerung: 'Faustregel: Alles was man „tun" kann ist funktional. Alles was auf „... ig/bar/lich" endet (sicher, schnell, bedienbar, verfügbar) ist nichtfunktional.',
        stichwoerter: ['registrieren', 'bestellen', 'Performance', 'Sicherheit', 'HTTPS']
      },
      {
        typ: 'lueckentext',
        frage: 'Das _______heft beschreibt, was gemacht werden soll. Das _______heft beschreibt, wie.',
        antwort: 'Lasten',
        erklaerung: 'Lastenheft (AG, WAS) → Pflichtenheft (AN, WIE). Merksatz: „Last kommt vom Last-geber", Pflicht vom Auftrag-nehmer.'
      }
    ]
  },
  {
    themaId: 'pm-aufwand',
    uebungen: [
      {
        typ: 'zuordnung',
        frage: 'Ordne die Schätzverfahren der Methodik zu.',
        paare: [
          { begriff: 'Expertenschätzung', definition: 'Erfahrene Entwickler schätzen nach Bauchgefühl' },
          { begriff: 'Analogieschätzung', definition: 'Vergleich mit ähnlichen, abgeschlossenen Projekten' },
          { begriff: 'Function Point', definition: 'Bewertung funktionaler Anforderungen nach festen Regeln' },
          { begriff: 'Planning Poker', definition: 'Schätzung im Team mit Karten (Scrum)' }
        ],
        erklaerung: 'Expertenschätzung ist am verbreitetsten. Function Points waren in den 1980ern populär, heute eher Story Points im agilen Umfeld.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Risiko ist KEIN typisches Projektrisiko?',
        optionen: [
          'Unterschätzung des Entwicklungsaufwands',
          'Inkompatible Schnittstellen',
          'Personalausfall im Team',
          'Die Programmiersprache existiert'
        ],
        korrekteAntwort: 3,
        erklaerung: 'Typische Risiken: Aufwandsschätzung zu knapp, unklare Anforderungen, Ausfälle, technische Komplexität, Abhängigkeiten.'
      },
      {
        typ: 'freitext',
        frage: 'Nenne je zwei Vor- und zwei Nachteile einer Fremdvergabe (Outsourcing) gegenüber Eigenentwicklung.',
        musterloesung: `Vorteile:
1. Externes Know-how / Spezialisten verfügbar
2. Planbare Kosten (Festpreis möglich)
3. Keine eigenen Ressourcen gebunden
4. Schnellerer Projektstart

Nachteile:
1. Abhängigkeit vom Dienstleister
2. Know-how-Abfluss / Wissen bleibt extern
3. Höherer Kommunikationsaufwand
4. Potenzielle Sicherheits-/Datenschutzrisiken

Zwei pro Seite genügen.`,
        erklaerung: 'Klassische AP2-Frage. Sommer 2022 z.B. genau so gestellt (siehe Prüfungsanalyse).',
        stichwoerter: ['Know-how', 'Kosten', 'Abhängigkeit', 'Kommunikation']
      },
      {
        typ: 'freitext',
        frage: 'Analysiere das Risiko „Inkompatible Software-Schnittstellen zwischen Alt- und Neusystem" in Ursache, Auswirkung und Gegenmaßnahme.',
        musterloesung: `Ursache: Mangelhafte Abstimmung der Schnittstellenspezifikation; Altsystem nicht dokumentiert; unterschiedliche Datenformate.

Auswirkung: Integrationsaufwand steigt, Termine und Kosten überschritten, Datenverlust oder -inkonsistenzen möglich.

Gegenmaßnahme: Frühzeitige Schnittstellen-Abstimmung, Adapter/Middleware einplanen, Prototyp zur Integrationsprüfung, ausreichende Pufferzeit im Plan.`,
        erklaerung: 'Risiko-Tabellen-Muster: immer die drei Spalten Ursache / Auswirkung / Maßnahme ausfüllen.',
        stichwoerter: ['Ursache', 'Auswirkung', 'Maßnahme', 'Schnittstelle']
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Ein Meilenstein ist ein Zeitraum mit einer bestimmten Dauer.',
        korrekt: false,
        erklaerung: 'Meilenstein = Zeitpunkt ohne Dauer, an dem ein wichtiges Ergebnis vorliegt („Dokument X abgenommen").'
      },
      {
        typ: 'multiple-choice',
        frage: 'Make-or-Buy-Entscheidung: Welcher Faktor spricht für "Make" (Eigenentwicklung)?',
        optionen: [
          'Geringe eigene Ressourcen',
          'Kernkompetenz im Unternehmen / strategische Bedeutung',
          'Dringender Zeitdruck',
          'Keine Erfahrung mit dem Thema'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Kernkompetenzen bleiben im Haus, Nebenthemen werden gern fremdvergeben (Konzentration auf das Wesentliche).'
      }
    ]
  },
  {
    themaId: 'pm-agil',
    uebungen: [
      {
        typ: 'zuordnung',
        frage: 'Ordne die Scrum-Rollen ihrer Aufgabe zu.',
        paare: [
          { begriff: 'Product Owner', definition: 'Priorisiert Backlog, vertritt Kundeninteressen' },
          { begriff: 'Scrum Master', definition: 'Beseitigt Hindernisse, coacht das Team' },
          { begriff: 'Development Team', definition: 'Setzt das Sprint-Ziel um' }
        ],
        erklaerung: 'Scrum kennt nur diese drei Rollen. PO ist NICHT der Chef des Teams; Scrum Master ist kein klassischer Projektleiter.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Scrum-Events ihrem Zweck zu.',
        paare: [
          { begriff: 'Sprint Planning', definition: 'Ziel und Arbeit des Sprints festlegen' },
          { begriff: 'Daily Scrum', definition: '15-Min Abstimmung im Team' },
          { begriff: 'Sprint Review', definition: 'Ergebnisse demonstrieren, Feedback einholen' },
          { begriff: 'Sprint Retrospektive', definition: 'Arbeitsweise verbessern' }
        ],
        erklaerung: 'Review = Produkt, Retrospektive = Prozess. Wichtig zu trennen.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie lange ist ein Sprint in Scrum typischerweise?',
        optionen: ['1–2 Tage', '1–4 Wochen', '3–6 Monate', '1 Jahr'],
        korrekteAntwort: 1,
        erklaerung: '2 Wochen sind üblich, max. 4 laut Scrum Guide. Timeboxing = feste Dauer, wird nicht verlängert.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Das Product Backlog wird nur einmal zu Projektstart erstellt und dann nicht mehr geändert.',
        korrekt: false,
        erklaerung: 'Das Backlog lebt – neue Anforderungen kommen rein, unwichtige fliegen raus, Priorisierung ändert sich. Genau das macht Scrum flexibel.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist ein Sprint-Increment?',
        optionen: [
          'Ein neuer Teamkollege',
          'Eine lauffähige, nutzbare Produkterweiterung am Sprint-Ende',
          'Ein Protokoll der Retrospektive',
          'Ein Planungsartefakt'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Increment = „Definition of Done"-konformes, potentiell auslieferbares Stück Produkt. Wird im Review präsentiert.'
      },
      {
        typ: 'lueckentext',
        frage: 'Das ______ ______ enthält alle Anforderungen, die das Produkt jemals haben könnte, priorisiert vom Product Owner.',
        antwort: 'Product Backlog',
        erklaerung: 'Im Gegensatz dazu: Sprint Backlog = das, was in einem konkreten Sprint gemacht wird.'
      }
    ]
  }
];
