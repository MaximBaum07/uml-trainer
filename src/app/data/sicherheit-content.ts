import { TheorieInhalt } from '../models/app.models';

export const SICHERHEIT_THEORIE: TheorieInhalt[] = [
  // ============================================================
  // SEC-GRUNDLAGEN — Schutzziele
  // ============================================================
  {
    themaId: 'sec-grundlagen',
    titel: 'Schutzziele der IT-Sicherheit',
    einleitung: 'Die IT-Sicherheit verfolgt klar definierte Schutzziele, die den Umgang mit Informationen und Systemen absichern. Die "klassische Trias" Vertraulichkeit, Integrität und Verfügbarkeit (englisch CIA — Confidentiality, Integrity, Availability) wird durch weitere Ziele wie Authentizität, Verbindlichkeit und Anonymität ergänzt. In der AP2-Prüfung werden diese Ziele häufig abgefragt — entweder direkt ("Nennen Sie drei Schutzziele") oder indirekt, indem ein Mechanismus (z.B. Signatur) einem Ziel (Authentizität/Integrität) zugeordnet werden soll.',
    abschnitte: [
      {
        titel: 'Die CIA-Trias (Grundlegende Schutzziele)',
        inhalt: `
          <p>Die drei klassischen Schutzziele der IT-Sicherheit bilden den Kern jedes Sicherheitskonzepts.</p>
          <h4>1. Vertraulichkeit (Confidentiality)</h4>
          <p>Informationen dürfen <strong>nur von autorisierten Personen</strong> gelesen oder eingesehen werden. Unbefugte dürfen keinen Zugriff auf sensible Daten haben.</p>
          <ul>
            <li>Typische Maßnahmen: Verschlüsselung (AES, RSA), Zugriffskontrolle, Berechtigungskonzepte</li>
            <li>Bedrohung: Abhören, Spionage, Datenleck</li>
          </ul>
          <h4>2. Integrität (Integrity)</h4>
          <p>Informationen dürfen <strong>nicht unbemerkt verändert</strong> werden. Empfänger muss erkennen können, ob Daten manipuliert wurden.</p>
          <ul>
            <li>Typische Maßnahmen: Hashwerte (SHA-256), MAC, digitale Signatur, Prüfsummen</li>
            <li>Bedrohung: Man-in-the-Middle-Manipulation, Datenbank-Tampering</li>
          </ul>
          <h4>3. Verfügbarkeit (Availability)</h4>
          <p>Systeme und Daten müssen <strong>bei Bedarf nutzbar</strong> sein. Ausfälle und Blockaden sind zu verhindern.</p>
          <ul>
            <li>Typische Maßnahmen: Redundanz (RAID, Cluster), Backup, USV, DDoS-Schutz</li>
            <li>Bedrohung: DoS/DDoS, Hardware-Ausfall, Ransomware</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="400" height="260">
          <text x="200" y="22" text-anchor="middle" font-size="15" font-weight="bold">CIA-Trias</text>
          <polygon points="200,50 70,220 330,220" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
          <text x="200" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#1976d2">Vertraulichkeit</text>
          <text x="200" y="86" text-anchor="middle" font-size="11" fill="#555">Confidentiality</text>
          <text x="95" y="240" text-anchor="middle" font-size="13" font-weight="bold" fill="#388e3c">Integrität</text>
          <text x="95" y="254" text-anchor="middle" font-size="11" fill="#555">Integrity</text>
          <text x="305" y="240" text-anchor="middle" font-size="13" font-weight="bold" fill="#d32f2f">Verfügbarkeit</text>
          <text x="305" y="254" text-anchor="middle" font-size="11" fill="#555">Availability</text>
          <text x="200" y="150" text-anchor="middle" font-size="12" fill="#333">Schutz der</text>
          <text x="200" y="166" text-anchor="middle" font-size="12" fill="#333">Informationen</text>
        </svg>`
      },
      {
        titel: 'Erweiterte Schutzziele',
        inhalt: `
          <p>Über die CIA-Trias hinaus werden weitere Schutzziele genannt — besonders in Zusammenhang mit digitalen Geschäftsprozessen und Datenschutz.</p>
          <h4>Authentizität (Authenticity)</h4>
          <p>Die Identität eines Kommunikationspartners oder Absenders ist <strong>zweifelsfrei nachweisbar</strong>. Man kann sich darauf verlassen, dass der Gegenüber wirklich derjenige ist, der er vorgibt zu sein.</p>
          <p>Maßnahmen: Digitale Zertifikate (X.509), Signaturen, Passwörter, 2-Faktor-Authentifizierung.</p>
          <h4>Verbindlichkeit / Nichtabstreitbarkeit (Non-Repudiation)</h4>
          <p>Eine durchgeführte Aktion (z.B. das Absenden einer Nachricht oder Unterzeichnen eines Vertrags) kann später <strong>nicht geleugnet</strong> werden.</p>
          <p>Maßnahmen: Digitale Signatur mit Zertifikat, revisionssichere Protokollierung.</p>
          <h4>Anonymität / Pseudonymität</h4>
          <p>Personen können handeln, ohne dass ihre Identität offengelegt wird (Anonymität) bzw. nur unter einem Pseudonym.</p>
          <p>Beispiele: TOR-Netzwerk, Pseudonymisierung personenbezogener Daten gemäß DSGVO.</p>
          <h4>Zurechenbarkeit (Accountability)</h4>
          <p>Jede Aktion kann einem verantwortlichen Subjekt zugeordnet werden — z.B. durch Logging mit User-ID.</p>
        `
      },
      {
        titel: 'Bedrohungen vs. Maßnahmen',
        inhalt: `
          <p>Zu jedem Schutzziel gehören typische <strong>Bedrohungen</strong> (wie das Ziel verletzt werden kann) und <strong>Schutzmaßnahmen</strong> (wie man sich dagegen wehrt).</p>
          <table style="width:100%; border-collapse:collapse; margin:8px 0;">
            <tr style="background:#f0f4ff;">
              <th style="border:1px solid #ccc; padding:6px;">Schutzziel</th>
              <th style="border:1px solid #ccc; padding:6px;">Bedrohung</th>
              <th style="border:1px solid #ccc; padding:6px;">Maßnahme</th>
            </tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Vertraulichkeit</td><td style="border:1px solid #ccc; padding:6px;">Abhören, Datendiebstahl</td><td style="border:1px solid #ccc; padding:6px;">Verschlüsselung, Zugriffskontrolle</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Integrität</td><td style="border:1px solid #ccc; padding:6px;">Manipulation, MITM</td><td style="border:1px solid #ccc; padding:6px;">Hash, MAC, Signatur</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Verfügbarkeit</td><td style="border:1px solid #ccc; padding:6px;">DoS/DDoS, Hardwaredefekt</td><td style="border:1px solid #ccc; padding:6px;">Redundanz, Backup, Firewall</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Authentizität</td><td style="border:1px solid #ccc; padding:6px;">Identitätsdiebstahl, Spoofing</td><td style="border:1px solid #ccc; padding:6px;">Zertifikat, 2FA, Signatur</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Verbindlichkeit</td><td style="border:1px solid #ccc; padding:6px;">Abstreiten einer Aktion</td><td style="border:1px solid #ccc; padding:6px;">Digitale Signatur, Logs</td></tr>
          </table>
        `
      }
    ],
    pruefungsTipps: [
      'CIA auswendig: Confidentiality, Integrity, Availability — Vertraulichkeit, Integrität, Verfügbarkeit.',
      'Bei Fragen nach "Sicherheitsmechanismen durch SSL/TLS" IMMER drei Ziele nennen: Vertraulichkeit (Verschlüsselung), Integrität (MAC), Authentizität (Zertifikat).',
      'Signatur = Authentizität + Integrität + Verbindlichkeit (NICHT Vertraulichkeit!).',
      'Verschlüsselung = Vertraulichkeit (NICHT Integrität!).',
      'Unterscheiden: Signieren ≠ Verschlüsseln. Signieren schützt vor Manipulation, aber lässt Inhalt lesbar.'
    ]
  },

  // ============================================================
  // SEC-KRYPTOGRAPHIE
  // ============================================================
  {
    themaId: 'sec-kryptographie',
    titel: 'Kryptographie: Verschlüsselung, Hashing, Zertifikate',
    einleitung: 'Kryptographie ist das Fundament moderner IT-Sicherheit. In der AP2-Prüfung wird häufig der Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung, das Prinzip hybrider Verfahren (TLS) sowie die Rolle von Zertifikaten und Hashfunktionen abgefragt.',
    abschnitte: [
      {
        titel: 'Symmetrische Verschlüsselung',
        inhalt: `
          <p>Bei der <strong>symmetrischen Verschlüsselung</strong> verwenden Sender und Empfänger <strong>denselben geheimen Schlüssel</strong> zum Ver- und Entschlüsseln.</p>
          <h4>Eigenschaften</h4>
          <ul>
            <li><strong>Schnell</strong> und ressourcenschonend — geeignet für große Datenmengen</li>
            <li><strong>Schlüsselverteilung ist das Hauptproblem</strong>: Wie gelangt der Schlüssel sicher vom Sender zum Empfänger?</li>
            <li>Für n Teilnehmer werden n·(n-1)/2 Schlüssel benötigt — skaliert schlecht</li>
          </ul>
          <h4>Bekannte Verfahren</h4>
          <ul>
            <li><strong>AES</strong> (Advanced Encryption Standard) — 128/192/256 Bit, aktueller Standard</li>
            <li><strong>DES/3DES</strong> — veraltet</li>
            <li><strong>ChaCha20</strong> — moderne Alternative, u.a. in TLS 1.3</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180" width="400" height="180">
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">Symmetrische Verschlüsselung</text>
          <rect x="20" y="60" width="80" height="50" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
          <text x="60" y="90" text-anchor="middle" font-size="12">Alice</text>
          <rect x="300" y="60" width="80" height="50" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
          <text x="340" y="90" text-anchor="middle" font-size="12">Bob</text>
          <line x1="100" y1="85" x2="300" y2="85" stroke="#333" stroke-width="2" marker-end="url(#ar1)"/>
          <defs><marker id="ar1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0,0 10,3.5 0,7" fill="#333"/></marker></defs>
          <text x="200" y="78" text-anchor="middle" font-size="11" fill="#d32f2f">verschlüsselt mit K</text>
          <text x="200" y="100" text-anchor="middle" font-size="11" fill="#d32f2f">entschlüsselt mit K</text>
          <rect x="170" y="130" width="60" height="30" fill="#fff3e0" stroke="#f57c00" stroke-width="2"/>
          <text x="200" y="150" text-anchor="middle" font-size="12">Schlüssel K</text>
        </svg>`
      },
      {
        titel: 'Asymmetrische Verschlüsselung (Public-Key)',
        inhalt: `
          <p>Die <strong>asymmetrische Verschlüsselung</strong> verwendet ein <strong>Schlüsselpaar</strong>: einen <em>öffentlichen Schlüssel</em> (Public Key) und einen <em>privaten Schlüssel</em> (Private Key).</p>
          <h4>Grundprinzip</h4>
          <ul>
            <li>Was mit dem <strong>Public Key</strong> verschlüsselt wird, kann nur mit dem zugehörigen <strong>Private Key</strong> entschlüsselt werden</li>
            <li>Der Public Key kann frei verteilt werden; der Private Key bleibt geheim</li>
          </ul>
          <h4>Eigenschaften</h4>
          <ul>
            <li><strong>Rechenintensiv</strong> und langsam — ungeeignet für große Datenmengen</li>
            <li><strong>Einfache Schlüsselverteilung</strong>: Public Key darf öffentlich sein</li>
            <li>Ermöglicht zusätzlich <strong>digitale Signaturen</strong></li>
          </ul>
          <h4>Bekannte Verfahren</h4>
          <ul>
            <li><strong>RSA</strong> (Rivest-Shamir-Adleman) — klassisch, 2048/4096 Bit</li>
            <li><strong>ECC</strong> (Elliptic Curve Cryptography) — kürzere Schlüssel, gleicher Sicherheitslevel</li>
            <li><strong>Diffie-Hellman</strong> — Schlüsselaustauschverfahren</li>
          </ul>
          <h4>Digitale Signatur</h4>
          <p>Umgekehrte Nutzung: Absender verschlüsselt Hashwert mit seinem <strong>Private Key</strong>. Empfänger verifiziert mit <strong>Public Key</strong>. Dies garantiert Authentizität und Integrität.</p>
        `
      },
      {
        titel: 'Hybride Verschlüsselung (TLS)',
        inhalt: `
          <p>Hybride Verfahren kombinieren die Vorteile beider Ansätze und sind in der Praxis (HTTPS, TLS) allgegenwärtig.</p>
          <h4>Ablauf</h4>
          <ol>
            <li>Sender und Empfänger tauschen <strong>asymmetrisch</strong> einen zufällig erzeugten <strong>Session-Key</strong> (symmetrischer Schlüssel) aus.</li>
            <li>Die eigentlichen Nutzdaten werden <strong>symmetrisch</strong> (schnell) mit dem Session-Key verschlüsselt.</li>
          </ol>
          <p><strong>Vorteile:</strong> Kombiniert die einfache Schlüsselverteilung asymmetrischer Verfahren mit der Performance symmetrischer Verfahren.</p>
          <h4>TLS-Handshake (vereinfacht)</h4>
          <ol>
            <li><em>ClientHello</em>: Client schickt unterstützte Verfahren und Zufallszahl</li>
            <li><em>ServerHello</em>: Server wählt Verfahren und sendet sein <strong>Zertifikat</strong> (enthält Public Key, signiert von CA)</li>
            <li>Client prüft Zertifikat gegen im Truststore hinterlegte Root-CA</li>
            <li>Client erzeugt Premaster-Secret, verschlüsselt es mit Server-Public-Key, sendet es</li>
            <li>Aus Premaster-Secret wird symmetrischer <strong>Session-Key</strong> abgeleitet</li>
            <li>Ab jetzt: Kommunikation symmetrisch verschlüsselt</li>
          </ol>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280">
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">TLS-Handshake (vereinfacht)</text>
          <text x="70" y="45" text-anchor="middle" font-size="12" font-weight="bold">Client</text>
          <text x="330" y="45" text-anchor="middle" font-size="12" font-weight="bold">Server</text>
          <line x1="70" y1="55" x2="70" y2="260" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="330" y1="55" x2="330" y2="260" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="70" y1="80" x2="330" y2="80" stroke="#1976d2" stroke-width="1.5" marker-end="url(#ar2)"/>
          <text x="200" y="75" text-anchor="middle" font-size="11">ClientHello</text>
          <line x1="330" y1="110" x2="70" y2="110" stroke="#1976d2" stroke-width="1.5" marker-end="url(#ar2)"/>
          <text x="200" y="105" text-anchor="middle" font-size="11">ServerHello + Zertifikat</text>
          <line x1="70" y1="150" x2="330" y2="150" stroke="#d32f2f" stroke-width="1.5" marker-end="url(#ar2)"/>
          <text x="200" y="145" text-anchor="middle" font-size="11">Premaster (mit PubKey verschl.)</text>
          <text x="200" y="180" text-anchor="middle" font-size="11" fill="#388e3c">Session-Key abgeleitet</text>
          <line x1="70" y1="215" x2="330" y2="215" stroke="#388e3c" stroke-width="2" marker-end="url(#ar2)"/>
          <text x="200" y="210" text-anchor="middle" font-size="11">symmetrisch verschlüsselte Daten</text>
          <defs><marker id="ar2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0,0 10,3.5 0,7" fill="#333"/></marker></defs>
        </svg>`
      },
      {
        titel: 'Hashfunktionen',
        inhalt: `
          <p>Eine <strong>Hashfunktion</strong> erzeugt aus beliebig langen Eingabedaten einen festen, kurzen Ausgabewert (Hashwert, Fingerabdruck).</p>
          <h4>Eigenschaften sicherer Hashfunktionen</h4>
          <ul>
            <li><strong>Einwegfunktion</strong>: Aus dem Hash lassen sich die Originaldaten nicht rekonstruieren</li>
            <li><strong>Kollisionsresistent</strong>: Zwei verschiedene Eingaben dürfen praktisch nicht denselben Hash ergeben</li>
            <li><strong>Determistisch</strong>: Gleiche Eingabe → gleicher Hash</li>
            <li><strong>Avalanche-Effekt</strong>: Kleine Eingabeänderung → völlig anderer Hash</li>
          </ul>
          <h4>Wichtige Algorithmen</h4>
          <ul>
            <li><strong>MD5</strong> — 128 Bit, <em>unsicher</em>, nicht mehr verwenden</li>
            <li><strong>SHA-1</strong> — 160 Bit, <em>unsicher</em></li>
            <li><strong>SHA-256 / SHA-3</strong> — aktuelle Standards</li>
            <li><strong>bcrypt, Argon2, scrypt</strong> — speziell für Passwörter (absichtlich langsam)</li>
          </ul>
          <h4>Anwendungen</h4>
          <ul>
            <li><strong>Passwörter speichern</strong>: Statt Klartext wird Hash+Salt gespeichert</li>
            <li><strong>Integritätsprüfung</strong>: Hash einer Datei vergleichen (Downloadprüfung)</li>
            <li><strong>Digitale Signatur</strong>: Signiert wird der Hash, nicht die Datei selbst</li>
          </ul>
          <h4>Salt und Pepper</h4>
          <p>Beim Speichern von Passwörtern wird ein zufälliger <strong>Salt</strong> pro Benutzer hinzugefügt, bevor gehasht wird. Das verhindert Rainbow-Table-Angriffe.</p>
        `
      },
      {
        titel: 'Zertifikate und Public-Key-Infrastruktur (PKI)',
        inhalt: `
          <p>Ein <strong>digitales Zertifikat</strong> bindet einen Public Key an eine Identität (z.B. Domain, Person, Organisation) und ist von einer <strong>vertrauenswürdigen Instanz</strong> (Certificate Authority, CA) signiert.</p>
          <h4>X.509-Zertifikat — wichtige Felder</h4>
          <ul>
            <li>Inhaber (Subject) — z.B. CN=www.beispiel.de</li>
            <li>Aussteller (Issuer) — z.B. CN=Let's Encrypt R3</li>
            <li>Gültigkeitszeitraum (Not Before / Not After)</li>
            <li>Public Key des Inhabers</li>
            <li>Signatur der ausstellenden CA</li>
          </ul>
          <h4>Vertrauenskette (Chain of Trust)</h4>
          <ol>
            <li>Server-Zertifikat ist signiert von einer Intermediate-CA</li>
            <li>Intermediate-CA ist signiert von einer Root-CA</li>
            <li>Root-CA-Zertifikat ist im Betriebssystem/Browser-Truststore hinterlegt (selbstsigniert)</li>
          </ol>
          <p>Der Browser prüft die gesamte Kette und akzeptiert das Zertifikat nur, wenn die Kette bis zu einer vertrauten Root-CA führt.</p>
          <h4>PKI-Aufgaben</h4>
          <ul>
            <li>Zertifikate ausstellen (CSR → signiertes Zertifikat)</li>
            <li>Zertifikate verwalten und verteilen</li>
            <li>Zertifikate widerrufen (CRL, OCSP)</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'TLS = HYBRIDES Verfahren. Nie nur "asymmetrisch" antworten!',
      'Symmetrisch = schnell, Problem Schlüsselverteilung. Asymmetrisch = langsam, Schlüsselverteilung gelöst.',
      'Für batteriebetriebene IoT-Sensoren: symmetrisch (AES), weil weniger Rechenleistung.',
      'Signieren: Private Key signiert den Hash. Verifizieren: Public Key.',
      'Verschlüsseln: Public Key des Empfängers. Entschlüsseln: Private Key des Empfängers.',
      'Passwörter: NIE Klartext, immer Hash + Salt (bcrypt/Argon2).',
      'Drei Sicherheitsmechanismen durch SSL/TLS: Vertraulichkeit, Integrität, Authentizität.'
    ]
  },

  // ============================================================
  // SEC-ANGRIFFE
  // ============================================================
  {
    themaId: 'sec-angriffe',
    titel: 'Angriffsarten und Gegenmaßnahmen',
    einleitung: 'Angriffe auf IT-Systeme sind vielfältig — von technischen Einbrüchen (SQL-Injection, XSS) über Netzwerkangriffe (DDoS, MITM) bis hin zu psychologischen Manipulationen (Phishing, Social Engineering). In der AP2-Prüfung tauchen diese Themen häufig als Teilfragen auf: "Nennen Sie zwei Risiken bei ...", "Welche Gegenmaßnahme schützt gegen ...".',
    abschnitte: [
      {
        titel: 'Webangriffe: SQL-Injection, XSS, CSRF',
        inhalt: `
          <h4>SQL-Injection</h4>
          <p>Ein Angreifer schleust über Eingabefelder <strong>SQL-Code</strong> ein, der von der Anwendung unreflektiert an die Datenbank weitergegeben wird.</p>
          <p>Beispiel: Eingabe <code>' OR '1'='1</code> im Login-Feld führt zur Query <code>SELECT * FROM user WHERE name='' OR '1'='1'</code> — immer wahr.</p>
          <p><strong>Gegenmaßnahmen:</strong></p>
          <ul>
            <li><strong>Prepared Statements</strong> / Parameterized Queries (wichtigste Maßnahme!)</li>
            <li>Eingabevalidierung, Whitelisting</li>
            <li>Least-Privilege für DB-User</li>
            <li>Web Application Firewall (WAF)</li>
          </ul>
          <h4>Cross-Site Scripting (XSS)</h4>
          <p>Ein Angreifer schleust <strong>JavaScript-Code</strong> in eine Webseite ein, der später im Browser eines anderen Nutzers ausgeführt wird.</p>
          <ul>
            <li><em>Stored XSS</em>: Code wird auf Server dauerhaft gespeichert (z.B. im Forum-Post)</li>
            <li><em>Reflected XSS</em>: Code kommt per URL-Parameter und wird reflektiert</li>
            <li><em>DOM-based XSS</em>: Manipulation im Browser-DOM</li>
          </ul>
          <p><strong>Gegenmaßnahmen:</strong> Ausgabekodierung (HTML-Escape), Content Security Policy (CSP), HTTPOnly-Cookies.</p>
          <h4>Cross-Site Request Forgery (CSRF)</h4>
          <p>Das Opfer führt unwissentlich eine <strong>authentifizierte Aktion</strong> auf einer Webseite aus, weil es gleichzeitig auf einer schädlichen Seite surft.</p>
          <p><strong>Gegenmaßnahmen:</strong> CSRF-Token, SameSite-Cookies, Re-Authentifizierung bei sensitiven Aktionen.</p>
        `
      },
      {
        titel: 'Netzwerkangriffe: DoS/DDoS, Man-in-the-Middle',
        inhalt: `
          <h4>Denial-of-Service (DoS) / Distributed DoS (DDoS)</h4>
          <p>Ziel ist die <strong>Verfügbarkeit</strong>: Ein System wird mit so vielen Anfragen überflutet, dass es legitime Anfragen nicht mehr bearbeiten kann.</p>
          <ul>
            <li>DoS: von einem Angreifer</li>
            <li>DDoS: von einem Botnetz (tausende infizierte Rechner)</li>
          </ul>
          <p><strong>Gegenmaßnahmen:</strong> Rate-Limiting, DDoS-Schutz-Dienste (z.B. Cloudflare), CDN, Loadbalancer, Anycast.</p>
          <h4>Man-in-the-Middle (MITM)</h4>
          <p>Ein Angreifer schaltet sich <strong>zwischen zwei Kommunikationspartner</strong> und kann Daten mitlesen oder manipulieren.</p>
          <ul>
            <li>ARP-Spoofing im LAN</li>
            <li>Rogue-WLAN / Evil Twin</li>
            <li>DNS-Spoofing</li>
          </ul>
          <p><strong>Gegenmaßnahmen:</strong> TLS mit Zertifikatsprüfung, HSTS, DNSSEC, VPN.</p>
          <h4>Brute-Force & Dictionary Attacks</h4>
          <p>Systematisches Durchprobieren von Passwörtern.</p>
          <p><strong>Gegenmaßnahmen:</strong> Starke Passwörter, Account-Lockout, Rate-Limit, 2-Faktor-Authentifizierung, Captcha.</p>
        `
      },
      {
        titel: 'Social Engineering und Malware',
        inhalt: `
          <h4>Phishing</h4>
          <p>Angreifer geben sich per E-Mail oder Webseite als vertrauenswürdige Instanz aus, um <strong>Zugangsdaten oder sensible Informationen</strong> zu erbeuten.</p>
          <ul>
            <li><em>Spear-Phishing</em>: gezielt auf Einzelperson</li>
            <li><em>CEO-Fraud</em>: vorgetäuschte Anweisung der Geschäftsführung</li>
            <li><em>Smishing</em>: Phishing per SMS</li>
          </ul>
          <p><strong>Gegenmaßnahmen:</strong> Mitarbeiterschulung, SPF/DKIM/DMARC, Mail-Filter, 2FA, URL-Prüfung.</p>
          <h4>Social Engineering</h4>
          <p>Manipulation von Menschen durch Täuschung und Ausnutzen von Vertrauen/Autorität/Hilfsbereitschaft — z.B. Anruf als vermeintlicher IT-Support.</p>
          <p><strong>Gegenmaßnahmen:</strong> Security Awareness Trainings, Rückrufverfahren, klare Prozesse.</p>
          <h4>Ransomware</h4>
          <p>Schadsoftware, die Dateien <strong>verschlüsselt</strong> und Lösegeld für die Entschlüsselung fordert. Häufig Einfallstor: Office-Makros in Mail-Anhängen.</p>
          <p><strong>Gegenmaßnahmen:</strong></p>
          <ul>
            <li>Regelmäßige <strong>Offline-Backups</strong> (3-2-1-Regel)</li>
            <li>Patch-Management, aktueller Virenschutz</li>
            <li>Mail-Filter, Makros in Office blockieren</li>
            <li>Mitarbeiterschulung, Netzwerksegmentierung</li>
          </ul>
          <h4>Weitere Malware-Typen</h4>
          <ul>
            <li><strong>Virus</strong>: hängt sich an andere Programme</li>
            <li><strong>Wurm</strong>: verbreitet sich selbständig über Netzwerk</li>
            <li><strong>Trojaner</strong>: als nützliches Programm getarnt</li>
            <li><strong>Keylogger</strong>: zeichnet Tastatureingaben auf</li>
            <li><strong>Spyware</strong>: spioniert Nutzerverhalten aus</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'SQL-Injection: Prepared Statements als Antwort — IMMER.',
      'XSS: Ausgabekodierung / HTML-Escape als Kernmaßnahme nennen.',
      'DDoS greift Verfügbarkeit an (nicht Vertraulichkeit!).',
      'Word-/Office-Anhang = Makro-Risiko → PDF sicherer.',
      'Ransomware-Schutz = Backup (offline!) + Patches + Schulung.',
      '2FA als Universalantwort auf Passwort-Probleme und Account-Übernahmen.'
    ]
  },

  // ============================================================
  // SEC-DSGVO
  // ============================================================
  {
    themaId: 'sec-dsgvo',
    titel: 'Datenschutz und DSGVO',
    einleitung: 'Die Datenschutz-Grundverordnung (DSGVO, englisch GDPR) regelt seit 25. Mai 2018 EU-weit den Umgang mit personenbezogenen Daten. Für Fachinformatiker ist das Thema prüfungsrelevant — besonders im Kontext der Einwilligung, technisch-organisatorischer Maßnahmen (TOMs) und Meldepflichten.',
    abschnitte: [
      {
        titel: 'Grundprinzipien der DSGVO (Art. 5)',
        inhalt: `
          <p>Die Verarbeitung personenbezogener Daten muss folgenden Grundsätzen genügen:</p>
          <ol>
            <li><strong>Rechtmäßigkeit, Treu und Glauben, Transparenz</strong> — Verarbeitung muss auf Rechtsgrundlage erfolgen und nachvollziehbar sein.</li>
            <li><strong>Zweckbindung</strong> — Daten nur für festgelegte, eindeutige, legitime Zwecke erheben.</li>
            <li><strong>Datenminimierung</strong> — nur das, was für den Zweck erforderlich ist.</li>
            <li><strong>Richtigkeit</strong> — Daten aktuell und korrekt halten.</li>
            <li><strong>Speicherbegrenzung</strong> — nicht länger speichern als nötig.</li>
            <li><strong>Integrität und Vertraulichkeit</strong> — Schutz vor unbefugtem Zugriff, Verlust, Zerstörung.</li>
            <li><strong>Rechenschaftspflicht</strong> — Verantwortlicher muss Einhaltung nachweisen können.</li>
          </ol>
          <h4>Was sind personenbezogene Daten? (Art. 4)</h4>
          <p>Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen — z.B. Name, Adresse, E-Mail, IP-Adresse, Standortdaten, biometrische Daten.</p>
          <h4>Rechtsgrundlagen der Verarbeitung (Art. 6)</h4>
          <ul>
            <li>Einwilligung der betroffenen Person</li>
            <li>Vertragserfüllung</li>
            <li>Rechtliche Verpflichtung</li>
            <li>Lebenswichtige Interessen</li>
            <li>Öffentliches Interesse</li>
            <li>Berechtigtes Interesse (Abwägung!)</li>
          </ul>
        `
      },
      {
        titel: 'Rechte der Betroffenen',
        inhalt: `
          <p>Die DSGVO räumt Personen folgende Rechte ein:</p>
          <ul>
            <li><strong>Auskunftsrecht</strong> (Art. 15) — Welche Daten werden verarbeitet?</li>
            <li><strong>Recht auf Berichtigung</strong> (Art. 16) — falsche Daten korrigieren</li>
            <li><strong>Recht auf Löschung / "Recht auf Vergessenwerden"</strong> (Art. 17)</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18)</li>
            <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20) — Daten in maschinenlesbarem Format erhalten</li>
            <li><strong>Widerspruchsrecht</strong> (Art. 21)</li>
            <li><strong>Recht, Einwilligung jederzeit zu widerrufen</strong> (Art. 7)</li>
            <li><strong>Recht auf Beschwerde bei Aufsichtsbehörde</strong></li>
          </ul>
          <h4>Anforderungen an die Einwilligung</h4>
          <ul>
            <li>Freiwillig — keine Kopplung an Dienst, wenn nicht nötig</li>
            <li>Für den konkreten Fall informiert</li>
            <li>Unmissverständlich durch aktive Handlung (Opt-in, kein vorausgefülltes Kästchen)</li>
            <li>Nachweisbar</li>
            <li>Jederzeit widerrufbar — so einfach wie die Erteilung</li>
          </ul>
        `
      },
      {
        titel: 'TOMs — Technisch-organisatorische Maßnahmen (Art. 32)',
        inhalt: `
          <p><strong>TOMs</strong> sind konkrete Maßnahmen zum Schutz personenbezogener Daten. Sie werden in folgende Kategorien gegliedert:</p>
          <h4>Technische Maßnahmen</h4>
          <ul>
            <li><strong>Zutrittskontrolle</strong> — Schutz der Räumlichkeiten (Schlüssel, Chipkarten, Alarmanlage)</li>
            <li><strong>Zugangskontrolle</strong> — Anmeldung an Systemen (Passwort, 2FA)</li>
            <li><strong>Zugriffskontrolle</strong> — Rechte innerhalb der Systeme (Rollen, ACL)</li>
            <li><strong>Weitergabekontrolle</strong> — sichere Übertragung (Verschlüsselung, VPN)</li>
            <li><strong>Eingabekontrolle</strong> — Logging, wer hat was geändert</li>
            <li><strong>Verfügbarkeitskontrolle</strong> — Backup, USV, Notfallplan</li>
            <li><strong>Trennungsgebot</strong> — Daten verschiedener Zwecke getrennt verarbeiten</li>
          </ul>
          <h4>Organisatorische Maßnahmen</h4>
          <ul>
            <li>Datenschutzrichtlinien, Arbeitsanweisungen</li>
            <li>Verpflichtung der Mitarbeiter auf Vertraulichkeit</li>
            <li>Schulungen (Awareness)</li>
            <li>Rollen-/Rechtekonzept, Need-to-Know</li>
            <li>Vertragsmanagement mit Auftragsverarbeitern</li>
          </ul>
          <h4>Pseudonymisierung und Anonymisierung</h4>
          <ul>
            <li><strong>Pseudonymisierung</strong>: Ersatz der Identitätsdaten durch Pseudonym; Zuordnung mit Zusatzwissen möglich (unterliegt weiter DSGVO)</li>
            <li><strong>Anonymisierung</strong>: Zuordnung dauerhaft unmöglich (fällt aus DSGVO heraus)</li>
          </ul>
        `
      },
      {
        titel: 'Auftragsverarbeitung, Meldepflichten, Bußgelder',
        inhalt: `
          <h4>Auftragsverarbeitung (Art. 28)</h4>
          <p>Wenn ein Dienstleister (z.B. Cloud-Anbieter, Hosting-Provider) <strong>personenbezogene Daten im Auftrag</strong> verarbeitet, muss ein schriftlicher <strong>Auftragsverarbeitungsvertrag (AV-Vertrag)</strong> geschlossen werden. Inhalt:</p>
          <ul>
            <li>Gegenstand und Dauer der Verarbeitung</li>
            <li>Art und Zweck der Verarbeitung</li>
            <li>Weisungsbindung des Auftragsverarbeiters</li>
            <li>Geheimhaltungsverpflichtung</li>
            <li>TOMs des Auftragsverarbeiters</li>
            <li>Unterauftragnehmer-Regelungen</li>
            <li>Rückgabe/Löschung der Daten nach Vertragsende</li>
          </ul>
          <h4>Meldepflichten bei Datenschutzverletzungen (Art. 33, 34)</h4>
          <ul>
            <li>An die <strong>Aufsichtsbehörde</strong>: unverzüglich, möglichst innerhalb von <strong>72 Stunden</strong> nach Bekanntwerden</li>
            <li>An die <strong>betroffenen Personen</strong>: bei hohem Risiko für deren Rechte und Freiheiten</li>
          </ul>
          <h4>Datenschutzbeauftragter (Art. 37)</h4>
          <p>Benennung verpflichtend bei öffentlichen Stellen, Kerntätigkeit umfangreiche Überwachung oder umfangreiche Verarbeitung besonderer Datenkategorien. In Deutschland zusätzlich: Unternehmen mit ≥ 20 Personen, die ständig mit automatisierter Datenverarbeitung befasst sind (BDSG).</p>
          <h4>Bußgelder (Art. 83)</h4>
          <ul>
            <li>Bis zu <strong>20 Mio. €</strong> oder <strong>4 %</strong> des weltweiten Jahresumsatzes (das Höhere)</li>
            <li>In minder schweren Fällen: bis 10 Mio. € / 2 %</li>
          </ul>
          <h4>Privacy by Design und Privacy by Default (Art. 25)</h4>
          <ul>
            <li><strong>Privacy by Design</strong>: Datenschutz bereits bei der Entwicklung mitdenken</li>
            <li><strong>Privacy by Default</strong>: datenschutzfreundliche Voreinstellungen</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'DSGVO-Grundsätze Art. 5: Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung merken.',
      'Einwilligung muss freiwillig, informiert, aktiv (Opt-in) und widerruflich sein.',
      'Meldepflicht bei Datenpanne: 72 Stunden an Aufsichtsbehörde.',
      'Bußgelder: bis 20 Mio. € / 4 % Jahresumsatz — gern gefragt.',
      'TOMs sind die Brücke zwischen Datenschutz (DSGVO) und Datensicherheit (IT-Security).',
      'AV-Vertrag ist PFLICHT, wenn Daten an Dienstleister (z.B. Cloud) gehen.',
      'Pseudonymisierung ≠ Anonymisierung — nur Anonymisierung fällt aus der DSGVO heraus.'
    ]
  }
];
