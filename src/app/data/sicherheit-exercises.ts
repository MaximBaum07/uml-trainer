import { UebungsSet } from '../models/app.models';

export const SICHERHEIT_UEBUNGEN: UebungsSet[] = [
  {
    themaId: 'sec-grundlagen',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Die drei klassischen Schutzziele der IT-Sicherheit (CIA) sind:',
        optionen: [
          'Vertraulichkeit, Integrität, Verfügbarkeit',
          'Verschlüsselung, Authentifizierung, Autorisierung',
          'Passwort, Firewall, Backup',
          'Compliance, Integrität, Access'
        ],
        korrekteAntwort: 0,
        erklaerung: 'CIA = Confidentiality, Integrity, Availability. Erweitert um Authentizität, Verbindlichkeit, Anonymität.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Schutzziele ihrer Definition zu.',
        paare: [
          { begriff: 'Vertraulichkeit', definition: 'Nur Berechtigte können Daten lesen' },
          { begriff: 'Integrität', definition: 'Daten sind unverändert / manipulationsfrei' },
          { begriff: 'Verfügbarkeit', definition: 'System ist bei Bedarf nutzbar' },
          { begriff: 'Authentizität', definition: 'Echtheit/Urheberschaft ist nachweisbar' },
          { begriff: 'Verbindlichkeit', definition: 'Handlung ist nicht abstreitbar' }
        ],
        erklaerung: 'CIA + Authentizität + Verbindlichkeit sind die wichtigsten. Nicht-Abstreitbarkeit = Non-Repudiation.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Ein DDoS-Angriff bedroht primär die Vertraulichkeit.',
        korrekt: false,
        erklaerung: 'DDoS (Distributed Denial of Service) macht das System unerreichbar – bedroht also die Verfügbarkeit.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Ein Angreifer ändert beim Übertragen einer Datei einzelne Bits. Welches Schutzziel ist verletzt?',
        optionen: ['Vertraulichkeit', 'Integrität', 'Verfügbarkeit', 'Anonymität'],
        korrekteAntwort: 1,
        erklaerung: 'Integrität = Daten unverändert. Erkannt wird die Manipulation üblicherweise durch Hashes oder Signaturen.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die drei A der IT-Sicherheit: _______, Autorisierung, Auditierung.',
        antwort: 'Authentifizierung',
        erklaerung: 'AAA: Wer bist du (Authentifizierung), was darfst du (Autorisierung), was hast du getan (Auditierung).'
      }
    ]
  },
  {
    themaId: 'sec-kryptographie',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was ist der Hauptunterschied zwischen symmetrischer und asymmetrischer Verschlüsselung?',
        optionen: [
          'Symmetrisch ist unsicher',
          'Symmetrisch verwendet einen Schlüssel, asymmetrisch ein Schlüsselpaar',
          'Asymmetrisch ist schneller',
          'Symmetrisch funktioniert nur lokal'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Symmetrisch: ein gemeinsamer Schlüssel (z.B. AES). Asymmetrisch: Public/Private Key (z.B. RSA).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Womit verschlüsselt Alice eine Nachricht an Bob, damit NUR Bob sie lesen kann?',
        optionen: [
          'Mit Bobs Public Key',
          'Mit Bobs Private Key',
          'Mit Alices Public Key',
          'Mit Alices Private Key'
        ],
        korrekteAntwort: 0,
        erklaerung: 'Verschlüsseln mit Public Key → nur passender Private Key kann entschlüsseln. Für digitale Signatur umgekehrt (mit Private Key signieren, Public Key prüft).'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die Verfahren ihrem Typ zu.',
        paare: [
          { begriff: 'AES', definition: 'Symmetrisches Verfahren (Blockchiffre)' },
          { begriff: 'RSA', definition: 'Asymmetrisches Verfahren' },
          { begriff: 'SHA-256', definition: 'Hashverfahren (Einwegfunktion)' },
          { begriff: 'TLS', definition: 'Protokoll für sichere Übertragung' }
        ],
        erklaerung: 'TLS nutzt Hybrid-Verschlüsselung: asymmetrisch zum Schlüsselaustausch, dann symmetrisch (AES) zur eigentlichen Übertragung.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Ein Hashwert kann zurückgerechnet werden, wenn man den Algorithmus kennt.',
        korrekt: false,
        erklaerung: 'Hashfunktionen sind Einwegfunktionen. Umkehren ist praktisch unmöglich; Angriffe laufen über Kollisionen oder Brute-Force-Tabellen.'
      },
      {
        typ: 'freitext',
        frage: 'Erkläre kurz, warum TLS/HTTPS eine HYBRIDE Verschlüsselung einsetzt.',
        musterloesung: `Symmetrisch (AES) ist SCHNELL, aber der gemeinsame Schlüssel muss sicher ausgetauscht werden.
Asymmetrisch (RSA/ECDH) löst das Schlüsselaustauschproblem, ist aber LANGSAM.

Hybrid-Ansatz:
1. Handshake: asymmetrisch einen zufälligen Session-Key austauschen.
2. Datenübertragung: mit dem Session-Key symmetrisch verschlüsseln.

So kombiniert man Sicherheit (sicherer Schlüsselaustausch) mit Performance (schnelle Datenübertragung).`,
        erklaerung: 'Dieser Trade-off ist ein Klassiker in der AP2. Zusätzlich: Zertifikate stellen die Authentizität des Servers sicher.',
        stichwoerter: ['symmetrisch', 'asymmetrisch', 'schnell', 'Schlüsselaustausch', 'Session']
      },
      {
        typ: 'multiple-choice',
        frage: 'Was bestätigt ein digitales Zertifikat?',
        optionen: [
          'Dass der Server erreichbar ist',
          'Dass ein öffentlicher Schlüssel zu einer bestimmten Identität gehört',
          'Dass Daten verschlüsselt übertragen werden',
          'Dass der Server aktuelle Software verwendet'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Zertifikat = Public Key + Identität, signiert von einer Certificate Authority (CA). Der Browser prüft die Signatur über die CA-Kette.'
      },
      {
        typ: 'lueckentext',
        frage: 'Eine _______ verifiziert Absender und Integrität, indem der Hash einer Nachricht mit dem privaten Schlüssel verschlüsselt wird.',
        antwort: 'digitale Signatur',
        erklaerung: 'Digitale Signatur: Hash(Nachricht) + privatem Schlüssel → Signatur. Empfänger prüft mit öffentlichem Schlüssel.'
      }
    ]
  },
  {
    themaId: 'sec-angriffe',
    uebungen: [
      {
        typ: 'zuordnung',
        frage: 'Ordne den Angriffen die passende Gegenmaßnahme zu.',
        paare: [
          { begriff: 'SQL-Injection', definition: 'Prepared Statements / parametrisierte Queries' },
          { begriff: 'XSS', definition: 'Output-Escaping / Content Security Policy' },
          { begriff: 'CSRF', definition: 'CSRF-Token + SameSite-Cookies' },
          { begriff: 'Brute-Force', definition: 'Rate-Limiting + Account-Lockout' },
          { begriff: 'Man-in-the-Middle', definition: 'TLS + Zertifikats-Pinning' }
        ],
        erklaerung: 'Diese Zuordnungen wiederholen sich in AP2-Aufgaben regelmäßig.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Was ist eine SQL-Injection?',
        optionen: [
          'Eine Performance-Optimierung für Datenbanken',
          'Das Einschleusen von SQL-Code über Nutzereingaben',
          'Ein Backup-Verfahren',
          'Eine Verschlüsselungstechnik'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Angreifer manipulieren Eingaben, sodass die zusammengebaute SQL-Query unbeabsichtigten Code ausführt. Schutz: Prepared Statements.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Phishing ist ein technischer Angriff auf TLS-Verbindungen.',
        korrekt: false,
        erklaerung: 'Phishing ist Social Engineering – Opfer werden dazu gebracht, Zugangsdaten preiszugeben. Schutz: Schulung, 2FA.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welcher Schutz hilft GEGEN einen Brute-Force-Angriff auf ein Login?',
        optionen: [
          'Kürzere Passwörter',
          'HTTP statt HTTPS',
          'Rate-Limiting und Account-Sperre',
          'Alle Logins erlauben'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Rate-Limiting verlangsamt systematisches Durchprobieren. Ergänzend: lange Passwörter, 2FA, Captcha.'
      },
      {
        typ: 'freitext',
        frage: 'Nenne drei Maßnahmen, um eine Web-Anwendung gegen SQL-Injection abzusichern.',
        musterloesung: `1. Prepared Statements / parametrisierte Queries – Nutzereingaben werden nicht als SQL-Code interpretiert.
2. Input-Validierung – Eingaben gegen erwartete Formate prüfen (z.B. nur Ziffern in einer ID).
3. Least Privilege – DB-Benutzer hat nur die minimal benötigten Rechte (z.B. kein DROP).
Zusätzlich: ORM-Frameworks, Stored Procedures, Escaping (aber nur als letzte Wahl).`,
        erklaerung: 'Prepared Statements sind die Hauptverteidigung. Defense-in-depth: zusätzliche Schichten (Input-Validierung, Rechte) fangen Restrisiko ab.',
        stichwoerter: ['Prepared', 'Validierung', 'Least Privilege', 'ORM']
      },
      {
        typ: 'lueckentext',
        frage: '_______ ist ein Angriff, bei dem schädlicher Code in Webseiten eingeschleust wird und im Browser anderer Nutzer ausgeführt wird.',
        antwort: 'XSS',
        erklaerung: 'Cross-Site-Scripting. Arten: Reflected, Stored, DOM-based. Schutz: Output-Escaping, CSP-Header, HttpOnly-Cookies.'
      }
    ]
  },
  {
    themaId: 'sec-dsgvo',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Was sind personenbezogene Daten nach DSGVO?',
        optionen: [
          'Nur Name und Adresse',
          'Alle Daten, die sich auf eine identifizierte oder identifizierbare Person beziehen',
          'Nur digitale Daten',
          'Nur Daten in der EU'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Sehr weit gefasst: IP-Adresse, Cookies, Standortdaten zählen auch. Pseudonymisiert bleibt personenbezogen, anonymisiert nicht.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordne die DSGVO-Rechte der betroffenen Person ihrer Bedeutung zu.',
        paare: [
          { begriff: 'Auskunftsrecht', definition: 'Erfahren, welche Daten gespeichert sind' },
          { begriff: 'Recht auf Berichtigung', definition: 'Falsche Daten korrigieren lassen' },
          { begriff: 'Recht auf Löschung', definition: 'Daten löschen lassen ("Recht auf Vergessenwerden")' },
          { begriff: 'Recht auf Datenübertragbarkeit', definition: 'Daten in maschinenlesbarem Format erhalten' },
          { begriff: 'Widerspruchsrecht', definition: 'Einer Verarbeitung widersprechen' }
        ],
        erklaerung: 'Art. 15-21 DSGVO. Auskunftspflicht: normalerweise 1 Monat, unentgeltlich.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Eine Datenschutzverletzung muss innerhalb von 72 Stunden an die Aufsichtsbehörde gemeldet werden.',
        korrekt: true,
        erklaerung: 'Art. 33 DSGVO: Meldepflicht binnen 72 Stunden nach Bekanntwerden. Bei hohem Risiko zusätzlich Betroffene informieren.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Grundsätze der Datenverarbeitung verlangt die DSGVO?',
        optionen: [
          'Nur Rechtmäßigkeit und Transparenz',
          'Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität/Vertraulichkeit',
          'Nur Zustimmung des Nutzers',
          'Nur technische Maßnahmen'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Art. 5 DSGVO. Dazu kommt Rechenschaftspflicht: der Verantwortliche muss nachweisen können, dass er sich an die Grundsätze hält.'
      },
      {
        typ: 'freitext',
        frage: 'Nenne drei technische und organisatorische Maßnahmen (TOMs), die für den Schutz personenbezogener Daten sinnvoll sind.',
        musterloesung: `Technisch:
1. Verschlüsselung (Daten im Transit via TLS, Daten at Rest via AES)
2. Zugriffskontrolle (Rollen- und Rechteverwaltung, starke Passwörter, 2FA)
3. Protokollierung / Logging
4. Pseudonymisierung personenbezogener Daten
5. Backups und Notfallkonzept

Organisatorisch:
1. Datenschutzschulungen der Mitarbeiter
2. Schriftliche Verpflichtung zur Vertraulichkeit
3. Regelmäßige Audits
4. Auftragsverarbeitungsverträge mit Dienstleistern
5. Klare Prozesse für Auskunft / Löschung

Drei genügen.`,
        erklaerung: 'Art. 32 DSGVO verlangt "angemessene TOMs". In AP2 oft nach 3 Maßnahmen gefragt – Verschlüsselung, Zugriffskontrolle, Schulung sind sichere Nennungen.',
        stichwoerter: ['Verschlüsselung', 'Zugriffskontrolle', 'Schulung', 'Pseudonymisierung']
      },
      {
        typ: 'lueckentext',
        frage: 'Ein _______ muss in Unternehmen mit umfangreicher Verarbeitung personenbezogener Daten bestellt werden (Art. 37 DSGVO).',
        antwort: 'Datenschutzbeauftragter',
        erklaerung: 'DSB muss weisungsfrei sein und fachlich qualifiziert. Pflicht u.a. bei systematischer Überwachung oder besonderen Kategorien.'
      }
    ]
  }
];
