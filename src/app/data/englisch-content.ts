import { TheorieInhalt } from '../models/app.models';

export const ENGLISCH_THEORIE: TheorieInhalt[] = [
  // -------------------------------------------------------------------------
  // THEMA 1 – IT Vocabulary
  // -------------------------------------------------------------------------
  {
    themaId: 'englisch-vokabular',
    titel: 'IT Vocabulary – Fachvokabular für die AP2',
    einleitung: 'Der Englischteil der AP2-Prüfung verlangt sicheres IT-Fachvokabular. Typisch sind Zuordnungsaufgaben (Englisch ↔ Deutsch), Lückentexte mit Fachbegriffen und Übersetzungsaufgaben. Diese Übersicht deckt die am häufigsten geprüften Begriffe ab.',
    abschnitte: [
      {
        titel: 'Software Development & Version Control',
        inhalt: `
          <h4>Core Terms</h4>
          <ul>
            <li><strong>debugging</strong> – Fehlersuche und -behebung im Quellcode</li>
            <li><strong>repository (repo)</strong> – Versionsverwaltungs-Ablage (z.B. Git-Repo auf GitHub)</li>
            <li><strong>pull request (PR)</strong> – Anfrage, Code-Änderungen in einen anderen Branch zu mergen</li>
            <li><strong>branch</strong> – unabhängiger Entwicklungsstrang im Versionskontrollsystem</li>
            <li><strong>merge</strong> – Zusammenführen von zwei Branches</li>
            <li><strong>commit</strong> – gespeicherter Snapshot von Änderungen im Repository</li>
            <li><strong>deployment</strong> – Bereitstellung / Inbetriebnahme einer Anwendung</li>
            <li><strong>refactoring</strong> – Code umstrukturieren ohne die Funktionalität zu ändern</li>
            <li><strong>legacy system</strong> – Altsystem; veraltete, schwer wartbare Software</li>
            <li><strong>framework</strong> – Rahmenwerk mit vordefinierten Strukturen und Bibliotheken</li>
          </ul>
          <h4>Häufige Übersetzungsfallen</h4>
          <ul>
            <li>"<strong>to deploy</strong>" ≠ "einsetzen" im militärischen Sinn → immer "bereitstellen / ausrollen"</li>
            <li>"<strong>request</strong>" = Anfrage (HTTP-Request), nicht "Wunsch"</li>
            <li>"<strong>client</strong>" = Auftraggeber (Geschäftskontext) ODER Client-Rechner (IT-Kontext) – Kontext beachten!</li>
          </ul>
        `
      },
      {
        titel: 'Cloud Computing & Infrastructure',
        inhalt: `
          <h4>Service Models</h4>
          <ul>
            <li><strong>IaaS (Infrastructure as a Service)</strong> – Bereitstellung virtueller Hardware (Server, Speicher, Netzwerk)</li>
            <li><strong>PaaS (Platform as a Service)</strong> – Entwicklungsplattform ohne Infrastruktur-Management</li>
            <li><strong>SaaS (Software as a Service)</strong> – Anwendung als Abonnement über das Internet</li>
          </ul>
          <h4>Key Concepts</h4>
          <ul>
            <li><strong>scalability</strong> – Skalierbarkeit: Ressourcen flexibel anpassen</li>
            <li><strong>pay-as-you-go</strong> – verbrauchsbasierte Abrechnung</li>
            <li><strong>on-premises</strong> – lokal betrieben (im Gegensatz zur Cloud)</li>
            <li><strong>containerization</strong> – Anwendung mit allen Abhängigkeiten paketieren (Docker)</li>
            <li><strong>orchestration</strong> – automatisiertes Management von Containern (Kubernetes)</li>
            <li><strong>serverless</strong> – Code ausführen ohne Server zu verwalten (z.B. AWS Lambda)</li>
            <li><strong>uptime / availability</strong> – Verfügbarkeit eines Systems (z.B. 99,9 %)</li>
            <li><strong>outage</strong> – Systemausfall / Störung</li>
          </ul>
        `
      },
      {
        titel: 'Agile & Project Management',
        inhalt: `
          <h4>Scrum Roles & Events</h4>
          <ul>
            <li><strong>Product Owner</strong> – verantwortlich für Produktvision und Backlog-Priorisierung</li>
            <li><strong>Scrum Master</strong> – Facilitator; stellt sicher, dass Scrum korrekt angewendet wird</li>
            <li><strong>Development Team</strong> – selbstorganisiertes Team, das das Produkt baut</li>
            <li><strong>sprint</strong> – Entwicklungsiteration (1–4 Wochen); immer gleich lang</li>
            <li><strong>backlog</strong> – priorisierte Aufgabenliste (Product Backlog / Sprint Backlog)</li>
            <li><strong>Daily Scrum / stand-up</strong> – tägliches 15-Minuten-Meeting</li>
            <li><strong>sprint review</strong> – Präsentation des Increments am Sprintende</li>
            <li><strong>retrospective</strong> – Rückblick auf den Prozess (nicht das Produkt)</li>
            <li><strong>increment</strong> – potenziell auslieferbares Produkt am Ende jedes Sprints</li>
          </ul>
          <h4>General PM Terms</h4>
          <ul>
            <li><strong>milestone</strong> – Meilenstein: wichtiger Zwischenschritt im Projekt</li>
            <li><strong>stakeholder</strong> – Person/Gruppe mit Interesse am Projektergebnis</li>
            <li><strong>scope creep</strong> – unkontrollierte Ausweitung des Projektumfangs</li>
            <li><strong>deliverable</strong> – Lieferergebnis; messbares Projektergebnis</li>
            <li><strong>bottleneck</strong> – Engpass im Prozess</li>
          </ul>
        `
      },
      {
        titel: 'Networks & Security',
        inhalt: `
          <h4>Network Terms</h4>
          <ul>
            <li><strong>bandwidth</strong> – Bandbreite / Übertragungskapazität</li>
            <li><strong>latency</strong> – Latenz: Verzögerung bei der Datenübertragung</li>
            <li><strong>packet</strong> – Datenpaket (kleinste Übertragungseinheit im Netzwerk)</li>
            <li><strong>protocol</strong> – Kommunikationsprotokoll (Regeln für Datenaustausch)</li>
            <li><strong>IP address</strong> – eindeutige Adresse eines Geräts im Netzwerk</li>
            <li><strong>subnet mask</strong> – Subnetzmaske zur Netzwerksegmentierung</li>
            <li><strong>router</strong> – Gerät, das Pakete zwischen Netzwerken weiterleitet (Layer 3)</li>
            <li><strong>switch</strong> – verbindet Geräte im selben Netzwerk (Layer 2, MAC-basiert)</li>
          </ul>
          <h4>Security Terms</h4>
          <ul>
            <li><strong>encryption</strong> – Verschlüsselung (Daten unleserlich machen)</li>
            <li><strong>authentication</strong> – Identitätsprüfung: "Wer bist du?" (Passwort, MFA)</li>
            <li><strong>authorization</strong> – Berechtigungsprüfung: "Was darfst du?"</li>
            <li><strong>firewall</strong> – Netzwerk-Sicherheitsbarriere (filtert Datenverkehr)</li>
            <li><strong>phishing</strong> – Betrug durch gefälschte E-Mails/Seiten zum Datendiebstahl</li>
            <li><strong>ransomware</strong> – Schadprogramm, das Daten verschlüsselt und Lösegeld fordert</li>
            <li><strong>patch</strong> – Softwareupdate zur Behebung von Sicherheitslücken</li>
            <li><strong>vulnerability</strong> – Sicherheitslücke / Schwachstelle</li>
            <li><strong>MFA (Multi-Factor Authentication)</strong> – Mehrfaktor-Authentifizierung</li>
          </ul>
        `
      },
      {
        titel: 'Databases & APIs',
        inhalt: `
          <h4>Database Terms</h4>
          <ul>
            <li><strong>DBMS (Database Management System)</strong> – Datenbankverwaltungssystem</li>
            <li><strong>primary key</strong> – Primärschlüssel: eindeutiger Identifikator eines Datensatzes</li>
            <li><strong>foreign key</strong> – Fremdschlüssel: Verweis auf Primärschlüssel einer anderen Tabelle</li>
            <li><strong>query</strong> – Datenbankabfrage (SQL-Befehl)</li>
            <li><strong>index</strong> – Datenbankindex zur Beschleunigung von Abfragen</li>
            <li><strong>transaction</strong> – atomare Datenbankoperation (alles oder nichts)</li>
            <li><strong>normalization</strong> – Normalisierung: Redundanzen in der Datenbankstruktur reduzieren</li>
            <li><strong>NoSQL</strong> – nicht-relationale Datenbanken (flexibles Schema)</li>
          </ul>
          <h4>API & Web Terms</h4>
          <ul>
            <li><strong>API (Application Programming Interface)</strong> – Schnittstelle für Software-Kommunikation</li>
            <li><strong>REST (Representational State Transfer)</strong> – verbreitetes API-Architekturmuster (HTTP-basiert)</li>
            <li><strong>endpoint</strong> – URL/Adresse, über die eine API angesprochen wird</li>
            <li><strong>payload</strong> – Nutzdaten einer Nachricht (z.B. JSON-Body eines HTTP-Requests)</li>
            <li><strong>JSON (JavaScript Object Notation)</strong> – leichtgewichtiges Datenaustauschformat</li>
            <li><strong>HTTP status codes</strong> – 200 OK, 404 Not Found, 500 Internal Server Error</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Lerne die Begriffe immer in beiden Richtungen: Englisch → Deutsch UND Deutsch → Englisch.',
      'Achte auf False Friends: "eventually" = schließlich (NICHT eventuell!), "actual" = tatsächlich (NICHT aktuell!).',
      'Prüfungsklassiker: authentication vs. authorization, TCP vs. UDP, IaaS vs. PaaS vs. SaaS.',
      'Für Übersetzungsaufgaben: lieber einfache, klare Sätze schreiben als komplizierte, fehlerhafte.',
      'Technische Abkürzungen (API, SQL, TCP, MFA) müssen nicht übersetzt werden – ausschreiben zeigt aber Verständnis.'
    ]
  },

  // -------------------------------------------------------------------------
  // THEMA 2 – Reading Comprehension
  // -------------------------------------------------------------------------
  {
    themaId: 'englisch-leseverstehen',
    titel: 'Reading Comprehension – Leseverstehen in der AP2',
    einleitung: 'Das Leseverstehen in der AP2-Prüfung besteht typischerweise aus einem IT-Fachtext (200–400 Wörter) und 4–6 Fragen dazu (Multiple Choice oder Wahr/Falsch). Ziel ist es, den Text zu verstehen – nicht zu übersetzen. Mit den richtigen Strategien lassen sich die Punkte auch ohne perfekte Englischkenntnisse sichern.',
    abschnitte: [
      {
        titel: 'Lesestrategien für den Prüfungstext',
        inhalt: `
          <h4>Schritt-für-Schritt-Strategie</h4>
          <ul>
            <li><strong>1. Fragen zuerst lesen</strong> – Lies erst alle Fragen, dann den Text. So weißt du, worauf du achten musst.</li>
            <li><strong>2. Skimming</strong> – Überfliege den Text, um das Hauptthema zu erfassen (30 Sekunden).</li>
            <li><strong>3. Scanning</strong> – Suche gezielt nach Keywords aus den Fragen im Text.</li>
            <li><strong>4. Kontext nutzen</strong> – Unbekannte Wörter aus dem Kontext erschließen, nicht aufgeben.</li>
            <li><strong>5. Antwort im Text belegen</strong> – Jede richtige Antwort ist direkt oder indirekt im Text begründet.</li>
          </ul>
          <h4>Typische Fallenstellungen</h4>
          <ul>
            <li><strong>"always / never"</strong> – Fast immer falsch. Texte sagen selten absolute Aussagen.</li>
            <li><strong>"can / may" vs. "does"</strong> – "Cloud can reduce costs" ≠ "Cloud reduces costs".</li>
            <li><strong>Nicht im Text genannte Optionen</strong> – "Which is NOT mentioned?" – Antworten die plausibel klingen, aber nicht im Text stehen.</li>
            <li><strong>Synonyme erkennen</strong> – Die Frage nutzt Synonyme des Textes. "rapidly" im Text = "quickly" in der Frage.</li>
          </ul>
        `
      },
      {
        titel: 'Häufige Themen in AP2-Englischtexten',
        inhalt: `
          <h4>Wiederkehrende Prüfungsthemen (nach Häufigkeit)</h4>
          <ul>
            <li>🥇 <strong>Cloud Computing</strong> – IaaS/PaaS/SaaS, Skalierbarkeit, Sicherheit (fast jedes Jahr!)</li>
            <li>🥈 <strong>Agile / Scrum</strong> – Sprints, Backlog, Rollen, Daily Scrum</li>
            <li>🥉 <strong>IT-Sicherheit / Cybersecurity</strong> – Phishing, Ransomware, Firewall, MFA</li>
            <li>4. <strong>DevOps / CI/CD</strong> – Continuous Integration, Containers, Docker</li>
            <li>5. <strong>Datenbanken</strong> – SQL vs. NoSQL, Primary/Foreign Keys</li>
            <li>6. <strong>Netzwerke / OSI-Modell</strong> – TCP/UDP, Router/Switch, Protokolle</li>
            <li>7. <strong>Software Development</strong> – APIs, REST, Versionskontrolle</li>
          </ul>
          <h4>Typische Textstruktur</h4>
          <p>AP2-Texte folgen oft diesem Muster:</p>
          <ul>
            <li><strong>Absatz 1:</strong> Definition / Einführung des Themas</li>
            <li><strong>Absatz 2:</strong> Kernkonzepte / Unterarten / Komponenten</li>
            <li><strong>Absatz 3:</strong> Vorteile / Anwendungsfall</li>
            <li><strong>Absatz 4:</strong> Herausforderungen / Risiken / Vergleich</li>
          </ul>
        `
      },
      {
        titel: 'Wortschatz für Leseverstehen-Fragen',
        inhalt: `
          <h4>Häufige Frageformulierungen verstehen</h4>
          <ul>
            <li><strong>"According to the text"</strong> – Laut dem Text (nicht eigenes Wissen!)</li>
            <li><strong>"Which of the following is NOT mentioned"</strong> – Welches wird NICHT erwähnt?</li>
            <li><strong>"What is the main purpose of..."</strong> – Was ist der Hauptzweck?</li>
            <li><strong>"What does the author imply"</strong> – Was impliziert der Text? (Schlussfolgerung)</li>
            <li><strong>"Which statement is TRUE / FALSE"</strong> – Textstellen direkt vergleichen</li>
          </ul>
          <h4>Signalwörter im Text</h4>
          <ul>
            <li><strong>however / but / yet</strong> – Gegensatz folgt → wichtig für Wahr/Falsch</li>
            <li><strong>therefore / thus / consequently</strong> – Schlussfolgerung</li>
            <li><strong>in addition / furthermore / moreover</strong> – weiterer Punkt</li>
            <li><strong>for example / such as / including</strong> – Beispiel folgt</li>
            <li><strong>while / whereas</strong> – Vergleich / Kontrast</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Lies immer die Fragen, BEVOR du den Text liest. So weißt du, wonach du suchst.',
      'Bei Wahr/Falsch: Wenn du dir nicht sicher bist, suche die genaue Textstelle – nie raten bei klaren Fakten.',
      '"According to the text" bedeutet: Nur Infos aus dem Text verwenden, kein Vorwissen.',
      'Vorsicht bei Distraktoren: Antworten, die plausibel klingen, aber nicht im Text stehen, sind meist falsch.',
      'Unbekannte Vokabeln aus dem Kontext erschließen – die Bedeutung ist oft aus den umliegenden Sätzen ableitbar.'
    ]
  },

  // -------------------------------------------------------------------------
  // THEMA 3 – AP2 Exam Tasks
  // -------------------------------------------------------------------------
  {
    themaId: 'englisch-pruefung',
    titel: 'AP2 Exam Tasks – Authentische Prüfungsaufgaben',
    einleitung: 'Diese Sammlung enthält Aufgaben, die 1:1 dem Format echter AP2-Prüfungen (IHK) entsprechen. Der Englishteil der AP2 umfasst typischerweise 8–14 Punkte und besteht aus Leseverstehen, Vokabularfragen und einer Schreibaufgabe. Übe mit diesen Aufgaben unter realistischen Bedingungen.',
    abschnitte: [
      {
        titel: 'Prüfungsformat: Englisch in der AP2',
        inhalt: `
          <h4>Aufbau des Englischteils (typisch)</h4>
          <ul>
            <li><strong>Teil A – Leseverstehen (4–6 Aufgaben, ca. 6 Pkt.):</strong> Ein IT-Fachtext mit Multiple-Choice- oder Wahr/Falsch-Fragen</li>
            <li><strong>Teil B – Vokabular (2–4 Aufgaben, ca. 4 Pkt.):</strong> Zuordnung, Lückentext oder Übersetzung von Fachbegriffen</li>
            <li><strong>Teil C – Schreiben (1 Aufgabe, ca. 4 Pkt.):</strong> Kurze E-Mail, Beschreibung oder Erklärung auf Englisch verfassen</li>
          </ul>
          <h4>Bewertungshinweise</h4>
          <ul>
            <li>Inhalt zählt mehr als perfekte Grammatik – ein verständlicher Inhalt wird immer bewertet</li>
            <li>Fachvokabular korrekt einsetzen bringt Bonuspunkte</li>
            <li>Vollständige Sätze schreiben (keine Stichwortlisten bei Schreibaufgaben)</li>
            <li>Zeitmanagement: ca. 15–20 Minuten für den Englischteil einplanen</li>
          </ul>
        `
      },
      {
        titel: 'DevOps & CI/CD – Prüfungswissen',
        inhalt: `
          <h4>Kernbegriffe</h4>
          <ul>
            <li><strong>DevOps</strong> – Kombination aus Development + Operations; Ziel: schnellere, qualitativ hochwertige Software-Lieferung</li>
            <li><strong>CI (Continuous Integration)</strong> – automatische Integration und Testung von Code-Änderungen</li>
            <li><strong>CD (Continuous Delivery)</strong> – Code ist jederzeit deploybereit; manueller Deploy-Trigger</li>
            <li><strong>CD (Continuous Deployment)</strong> – jede getestete Änderung wird automatisch deployed</li>
            <li><strong>pipeline</strong> – automatisierte Abfolge von Build, Test und Deploy-Schritten</li>
            <li><strong>Docker</strong> – Container-Technologie; paketiert Anwendung mit Abhängigkeiten</li>
            <li><strong>Kubernetes</strong> – Container-Orchestrierung; verwaltet viele Container</li>
            <li><strong>IaC (Infrastructure as Code)</strong> – Infrastruktur als Code definieren (Terraform, Ansible)</li>
          </ul>
          <h4>Merksatz CD vs. CD</h4>
          <p><strong>Continuous Delivery</strong> = "Wir <em>könnten</em> jederzeit deployen" (manuell)<br>
          <strong>Continuous Deployment</strong> = "Wir <em>deployen</em> immer automatisch"</p>
        `
      },
      {
        titel: 'Schreibaufgaben: Tipps & Muster',
        inhalt: `
          <h4>Typische Schreibaufgaben in der AP2</h4>
          <ul>
            <li>Technischen Begriff für einen Laien erklären</li>
            <li>Kurze geschäftliche E-Mail auf Englisch verfassen</li>
            <li>Einen Fachtext-Absatz zusammenfassen</li>
            <li>Zwei Technologien vergleichen</li>
            <li>Einen Fehler in einer Aussage korrigieren und begründen</li>
          </ul>
          <h4>Nützliche Formulierungen (Schreib-Bausteine)</h4>
          <ul>
            <li><strong>Einleitung:</strong> "I am writing to...", "The purpose of this email is to...", "In summary, ..."</li>
            <li><strong>Erklärung:</strong> "This means that...", "In other words...", "To put it simply..."</li>
            <li><strong>Vergleich:</strong> "In contrast to...", "While X does Y, Z does..."</li>
            <li><strong>Korrektur:</strong> "That statement is not entirely accurate because...", "This is incorrect. The correct answer is..."</li>
            <li><strong>Abschluss:</strong> "Please do not hesitate to contact us...", "We apologize for any inconvenience..."</li>
          </ul>
          <h4>Beispiel: E-Mail wegen Systemwartung</h4>
          <p style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:12px;font-size:0.9em;">
          Dear [Customer],<br><br>
          I am writing to inform you about scheduled system maintenance on Saturday, 15 March, from 8:00 AM to 12:00 PM. During this period, our services will be temporarily unavailable.<br><br>
          We apologize for any inconvenience this may cause. The maintenance is necessary to improve system performance and security.<br><br>
          Please do not hesitate to contact us if you have any questions.<br><br>
          Kind regards,<br>
          [Your Name]
          </p>
        `
      }
    ],
    pruefungsTipps: [
      'Schreibaufgaben: Qualität vor Quantität – 4 korrekte Sätze sind besser als 8 fehlerhafte.',
      'Fachbegriffe auf Englisch nie übersetzen, wenn die englische Version gebräuchlicher ist (API, SQL, TCP).',
      'Korrekturaufgaben ("correct this statement"): Erst falsche Aussage identifizieren, dann richtig stellen und kurz begründen.',
      'Bei Texten über Technologien (Docker, Kubernetes): Schon die Theorie auf Deutsch kennen – dann ist der englische Text viel leichter zu verstehen.',
      'Zeitplanung: 2 Minuten pro Multiple-Choice-Frage, 5–7 Minuten für Schreibaufgaben.'
    ]
  }
];
