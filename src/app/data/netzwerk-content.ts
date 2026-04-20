import { TheorieInhalt } from '../models/app.models';

export const NETZWERK_THEORIE: TheorieInhalt[] = [
  // ============================================================
  // OSI-MODELL
  // ============================================================
  {
    themaId: 'netz-osi',
    titel: 'OSI-Schichtenmodell',
    einleitung: 'Das OSI-Modell (Open Systems Interconnection) ist ein Referenzmodell der ISO, das die Kommunikation zwischen Rechnern in sieben aufeinander aufbauende Schichten zerlegt. Jede Schicht hat klar definierte Aufgaben und stellt der darüberliegenden Schicht ihre Dienste über eine Schnittstelle zur Verfügung. In der AP2-Prüfung wird das OSI-Modell regelmäßig abgefragt – typische Fragen sind die Zuordnung von Protokollen zu Schichten oder die Erklärung einzelner Schichten.',
    abschnitte: [
      {
        titel: 'Die 7 Schichten im Überblick',
        inhalt: `
          <p>Das OSI-Modell ist ein <strong>Schichtenmodell</strong>, bei dem jede Schicht (<em>Layer</em>) nur mit der direkt darüber und darunter liegenden Schicht kommuniziert. Dadurch sind Protokolle und Technologien austauschbar.</p>
          <p>Eselsbrücke (von oben nach unten): <em>Alle Priester saufen Tequila nach der Predigt</em> – <strong>A</strong>nwendung, <strong>P</strong>räsentation, <strong>S</strong>itzung, <strong>T</strong>ransport, <strong>N</strong>etzwerk (Vermittlung), <strong>D</strong>atensicherung (Sicherung), <strong>P</strong>hysikalisch (Bitübertragung).</p>
          <table style="width:100%; border-collapse:collapse; margin:12px 0;">
            <tr style="background:#f0f4ff;">
              <th style="border:1px solid #ccc; padding:8px;">Schicht</th>
              <th style="border:1px solid #ccc; padding:8px;">Name (deutsch/engl.)</th>
              <th style="border:1px solid #ccc; padding:8px;">Aufgabe</th>
              <th style="border:1px solid #ccc; padding:8px;">Einheit</th>
              <th style="border:1px solid #ccc; padding:8px;">Protokolle / Geräte</th>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><strong>7</strong></td>
              <td style="border:1px solid #ccc; padding:8px;">Anwendung / Application</td>
              <td style="border:1px solid #ccc; padding:8px;">Schnittstelle zur Anwendung, Dienste für Nutzer</td>
              <td style="border:1px solid #ccc; padding:8px;">Daten</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>HTTP</code>, <code>HTTPS</code>, <code>FTP</code>, <code>SMTP</code>, <code>IMAP</code>, <code>POP3</code>, <code>DNS</code>, <code>DHCP</code>, <code>SSH</code></td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><strong>6</strong></td>
              <td style="border:1px solid #ccc; padding:8px;">Darstellung / Presentation</td>
              <td style="border:1px solid #ccc; padding:8px;">Datenformat, Zeichensatz, Verschlüsselung, Kompression</td>
              <td style="border:1px solid #ccc; padding:8px;">Daten</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>TLS</code>, <code>SSL</code>, <code>ASCII</code>, <code>JPEG</code></td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><strong>5</strong></td>
              <td style="border:1px solid #ccc; padding:8px;">Sitzung / Session</td>
              <td style="border:1px solid #ccc; padding:8px;">Auf-/Abbau und Verwaltung von Sitzungen</td>
              <td style="border:1px solid #ccc; padding:8px;">Daten</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>NetBIOS</code>, <code>RPC</code>, <code>SMB</code></td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><strong>4</strong></td>
              <td style="border:1px solid #ccc; padding:8px;">Transport / Transport</td>
              <td style="border:1px solid #ccc; padding:8px;">Ende-zu-Ende-Verbindung, Segmentierung, Flusskontrolle, Ports</td>
              <td style="border:1px solid #ccc; padding:8px;">Segment / Datagramm</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>TCP</code>, <code>UDP</code></td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><strong>3</strong></td>
              <td style="border:1px solid #ccc; padding:8px;">Vermittlung / Network</td>
              <td style="border:1px solid #ccc; padding:8px;">Routing, logische Adressierung (IP)</td>
              <td style="border:1px solid #ccc; padding:8px;">Paket</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>IP</code>, <code>ICMP</code>, <code>ARP</code>, Router</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><strong>2</strong></td>
              <td style="border:1px solid #ccc; padding:8px;">Sicherung / Data Link</td>
              <td style="border:1px solid #ccc; padding:8px;">Fehlererkennung, MAC-Adressen, Zugriff auf Medium</td>
              <td style="border:1px solid #ccc; padding:8px;">Frame / Rahmen</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>Ethernet</code>, <code>WLAN (802.11)</code>, <code>PPP</code>, Switch, Bridge</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><strong>1</strong></td>
              <td style="border:1px solid #ccc; padding:8px;">Bitübertragung / Physical</td>
              <td style="border:1px solid #ccc; padding:8px;">Physikalische Übertragung von Bits als Signale</td>
              <td style="border:1px solid #ccc; padding:8px;">Bit</td>
              <td style="border:1px solid #ccc; padding:8px;">Kabel, Hub, Repeater, Lichtwellenleiter</td>
            </tr>
          </table>
          <p><strong>TCP/IP-Modell:</strong> In der Praxis nutzt man häufig das kompaktere TCP/IP-Modell mit vier Schichten (Netzzugang, Internet, Transport, Anwendung). Die Schichten 5–7 des OSI-Modells werden dabei zur Anwendungsschicht zusammengefasst.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="500" height="380">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="250" y="20" text-anchor="middle" font-size="15" font-weight="bold">OSI-Schichtenmodell</text>
          <rect x="60" y="35"  width="380" height="40" fill="#e8f5e9" stroke="#333"/>
          <text x="75" y="60" font-size="13" font-weight="bold">7 Anwendung</text>
          <text x="260" y="60" font-size="11">HTTP, FTP, DNS, SMTP, SSH</text>
          <rect x="60" y="75"  width="380" height="40" fill="#e8f5e9" stroke="#333"/>
          <text x="75" y="100" font-size="13" font-weight="bold">6 Darstellung</text>
          <text x="260" y="100" font-size="11">TLS, SSL, ASCII, JPEG</text>
          <rect x="60" y="115" width="380" height="40" fill="#e8f5e9" stroke="#333"/>
          <text x="75" y="140" font-size="13" font-weight="bold">5 Sitzung</text>
          <text x="260" y="140" font-size="11">NetBIOS, RPC, SMB</text>
          <rect x="60" y="155" width="380" height="40" fill="#fff3e0" stroke="#333"/>
          <text x="75" y="180" font-size="13" font-weight="bold">4 Transport</text>
          <text x="260" y="180" font-size="11">TCP, UDP &mdash; Ports, Segmente</text>
          <rect x="60" y="195" width="380" height="40" fill="#e3f2fd" stroke="#333"/>
          <text x="75" y="220" font-size="13" font-weight="bold">3 Vermittlung</text>
          <text x="260" y="220" font-size="11">IP, ICMP, ARP &mdash; Router</text>
          <rect x="60" y="235" width="380" height="40" fill="#fce4ec" stroke="#333"/>
          <text x="75" y="260" font-size="13" font-weight="bold">2 Sicherung</text>
          <text x="260" y="260" font-size="11">Ethernet, WLAN &mdash; Switch</text>
          <rect x="60" y="275" width="380" height="40" fill="#ede7f6" stroke="#333"/>
          <text x="75" y="300" font-size="13" font-weight="bold">1 Bitübertragung</text>
          <text x="260" y="300" font-size="11">Kabel, Hub, Repeater</text>
          <text x="250" y="345" text-anchor="middle" font-size="12" fill="#555">Daten wandern beim Senden von oben nach unten, beim Empfang umgekehrt.</text>
        </svg>`
      },
      {
        titel: 'Kapselung und Protokolldateneinheiten (PDU)',
        inhalt: `
          <p>Beim Senden werden Daten von Schicht 7 nach Schicht 1 durchgereicht. Jede Schicht fügt eigene Header-Informationen hinzu – das nennt man <strong>Kapselung (Encapsulation)</strong>. Die Einheiten heißen je nach Schicht:</p>
          <ul>
            <li>Schicht 7&ndash;5: <strong>Daten</strong></li>
            <li>Schicht 4 Transport: <strong>Segment</strong> (TCP) bzw. <strong>Datagramm</strong> (UDP)</li>
            <li>Schicht 3 Vermittlung: <strong>Paket</strong></li>
            <li>Schicht 2 Sicherung: <strong>Frame / Rahmen</strong></li>
            <li>Schicht 1 Bitübertragung: <strong>Bit</strong></li>
          </ul>
          <p>Beim Empfang wird die Nachricht von Schicht 1 nach 7 entkapselt. Ein Router arbeitet auf Schicht 3, ein Switch typischerweise auf Schicht 2 (MAC-Adressen).</p>
        `
      }
    ],
    pruefungsTipps: [
      'Merke dir Schicht 3 = IP/Router, Schicht 2 = Ethernet/MAC/Switch, Schicht 4 = TCP/UDP. Diese Zuordnung wird fast immer gefragt.',
      'Einheit je Schicht: Bit → Frame → Paket → Segment/Datagramm → Daten. In Freitextaufgaben oft als Tabelle verlangt.',
      'TLS/SSL liegt auf Schicht 6 (Darstellung), HTTPS selbst auf Schicht 7. Diese Unterscheidung ist ein beliebtes Fallenthema.',
      'Eselsbrücke "Alle Priester saufen Tequila nach der Predigt" hilft, die Reihenfolge 7→1 nicht zu vergessen.',
      'Typische Frage: "Auf welcher Schicht arbeitet ein Switch?" → Schicht 2 (Sicherung, MAC-Adressen). Hub = Schicht 1, Router = Schicht 3.'
    ]
  },

  // ============================================================
  // TCP/IP & TRANSPORT
  // ============================================================
  {
    themaId: 'netz-tcpip',
    titel: 'TCP/IP & Transport (TCP, UDP, ICMP)',
    einleitung: 'TCP/IP ist die Protokollfamilie des heutigen Internets. Auf der Transportschicht stehen mit TCP und UDP zwei grundlegend verschiedene Protokolle zur Verfügung: TCP ist verbindungsorientiert und zuverlässig, UDP ist verbindungslos und schnell. Der 3-Wege-Handshake zum Aufbau einer TCP-Verbindung und die Unterschiede der beiden Protokolle sind Dauerbrenner der AP2-Prüfung.',
    abschnitte: [
      {
        titel: 'TCP vs. UDP',
        inhalt: `
          <p>Beide Protokolle arbeiten auf <strong>Schicht 4</strong> und verwenden <strong>Ports</strong> (16&nbsp;Bit, 0&ndash;65535), um Anwendungen auf einem Host zu unterscheiden.</p>
          <table style="width:100%; border-collapse:collapse; margin:12px 0;">
            <tr style="background:#f0f4ff;">
              <th style="border:1px solid #ccc; padding:8px;">Eigenschaft</th>
              <th style="border:1px solid #ccc; padding:8px;"><code>TCP</code></th>
              <th style="border:1px solid #ccc; padding:8px;"><code>UDP</code></th>
            </tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Verbindungsart</td><td style="border:1px solid #ccc; padding:6px;">verbindungsorientiert</td><td style="border:1px solid #ccc; padding:6px;">verbindungslos</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Zuverlässigkeit</td><td style="border:1px solid #ccc; padding:6px;">Pakete werden bestätigt &amp; bei Verlust erneut gesendet</td><td style="border:1px solid #ccc; padding:6px;">keine Bestätigung, Paketverlust möglich</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Reihenfolge</td><td style="border:1px solid #ccc; padding:6px;">garantiert</td><td style="border:1px solid #ccc; padding:6px;">nicht garantiert</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Overhead / Geschwindigkeit</td><td style="border:1px solid #ccc; padding:6px;">hoher Overhead, langsamer</td><td style="border:1px solid #ccc; padding:6px;">geringer Overhead, schnell</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Header-Größe</td><td style="border:1px solid #ccc; padding:6px;">20 Byte (Mindestgröße)</td><td style="border:1px solid #ccc; padding:6px;">8 Byte</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">Einsatz</td><td style="border:1px solid #ccc; padding:6px;">HTTP(S), FTP, SMTP, SSH, E-Mail, Dateitransfer</td><td style="border:1px solid #ccc; padding:6px;">DNS, DHCP, VoIP, Streaming, Online-Spiele</td></tr>
          </table>
          <p><strong>Faustregel:</strong> <em>Wenn Datenverlust teurer ist als Verzögerung → TCP. Wenn Verzögerung teurer ist als Datenverlust → UDP.</em></p>
        `
      },
      {
        titel: '3-Wege-Handshake (TCP-Verbindungsaufbau)',
        inhalt: `
          <p>TCP baut eine Verbindung in drei Schritten auf (<em>three-way handshake</em>):</p>
          <ol>
            <li><strong>SYN</strong>: Client → Server &ndash; "Ich möchte eine Verbindung" (Synchronize, mit Sequenznummer).</li>
            <li><strong>SYN/ACK</strong>: Server → Client &ndash; "Verstanden, hier meine Sequenznummer" (Acknowledge).</li>
            <li><strong>ACK</strong>: Client → Server &ndash; "Bestätigt, Verbindung steht" (Acknowledge).</li>
          </ol>
          <p>Der Verbindungsabbau erfolgt analog mit <code>FIN</code> / <code>ACK</code> (meist 4 Nachrichten).</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 260" width="480" height="260">
          <defs><style>text{font-family:'Segoe UI',Arial,sans-serif;}</style>
            <marker id="ar" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0,0 10,3.5 0,7" fill="black"/></marker>
          </defs>
          <text x="90" y="25" text-anchor="middle" font-size="14" font-weight="bold">Client</text>
          <text x="390" y="25" text-anchor="middle" font-size="14" font-weight="bold">Server</text>
          <line x1="90" y1="35" x2="90" y2="240" stroke="black" stroke-width="1.5"/>
          <line x1="390" y1="35" x2="390" y2="240" stroke="black" stroke-width="1.5"/>
          <line x1="90" y1="70" x2="390" y2="70" stroke="#1976d2" stroke-width="2" marker-end="url(#ar)"/>
          <text x="240" y="62" text-anchor="middle" font-size="13" fill="#1976d2" font-weight="bold">1. SYN (seq=x)</text>
          <line x1="390" y1="130" x2="90" y2="130" stroke="#388e3c" stroke-width="2" marker-end="url(#ar)"/>
          <text x="240" y="122" text-anchor="middle" font-size="13" fill="#388e3c" font-weight="bold">2. SYN/ACK (seq=y, ack=x+1)</text>
          <line x1="90" y1="190" x2="390" y2="190" stroke="#d32f2f" stroke-width="2" marker-end="url(#ar)"/>
          <text x="240" y="182" text-anchor="middle" font-size="13" fill="#d32f2f" font-weight="bold">3. ACK (ack=y+1)</text>
          <text x="240" y="225" text-anchor="middle" font-size="12" fill="#555">→ Verbindung hergestellt</text>
        </svg>`
      },
      {
        titel: 'Wichtige Ports (Well-Known Ports 0–1023)',
        inhalt: `
          <ul>
            <li><code>20/21</code> &ndash; FTP (Daten / Steuerung)</li>
            <li><code>22</code> &ndash; SSH, SFTP</li>
            <li><code>23</code> &ndash; Telnet</li>
            <li><code>25</code> &ndash; SMTP</li>
            <li><code>53</code> &ndash; DNS (meist UDP)</li>
            <li><code>67/68</code> &ndash; DHCP (Server/Client, UDP)</li>
            <li><code>80</code> &ndash; HTTP</li>
            <li><code>110</code> &ndash; POP3</li>
            <li><code>143</code> &ndash; IMAP</li>
            <li><code>443</code> &ndash; HTTPS</li>
            <li><code>993</code> &ndash; IMAPS (IMAP über TLS)</li>
            <li><code>995</code> &ndash; POP3S (POP3 über TLS)</li>
            <li><code>3306</code> &ndash; MySQL / MariaDB</li>
            <li><code>5432</code> &ndash; PostgreSQL</li>
          </ul>
        `
      },
      {
        titel: 'IP-Paket und ICMP',
        inhalt: `
          <p>Auf Schicht 3 werden Daten als <strong>IP-Paket</strong> adressiert. Wichtige Header-Felder: Quell-IP, Ziel-IP, TTL (Time to Live), Protokoll (TCP/UDP/ICMP), Prüfsumme.</p>
          <p><strong>ICMP (Internet Control Message Protocol)</strong> ist ein Hilfsprotokoll auf Schicht 3 für Statusmeldungen. Es wird von Tools wie <code>ping</code> (Echo Request/Reply) und <code>traceroute</code> (TTL-Exceeded) genutzt. ICMP arbeitet <em>ohne</em> Ports.</p>
        `
      }
    ],
    pruefungsTipps: [
      'TCP vs. UDP ist fast immer Prüfungsstoff: verbindungsorientiert/zuverlässig (TCP) vs. verbindungslos/schnell (UDP). Gib immer ein konkretes Beispielprotokoll an (TCP→HTTP, UDP→DNS).',
      'Der 3-Wege-Handshake (SYN → SYN/ACK → ACK) muss in korrekter Reihenfolge auswendig sitzen – wird oft als Lückentext abgefragt.',
      'Portnummern 80, 443, 22, 25, 53, 110, 143, 3306 gehören zum Pflichtprogramm.',
      'ICMP nutzt keine Ports! Wer in einer Aufgabe "ping verwendet Port X" schreibt, verliert Punkte.',
      'Bei Streaming/VoIP/Online-Games nennt man UDP wegen der geringeren Latenz; bei Dateitransfer/Mail TCP wegen der Zuverlässigkeit.'
    ]
  },

  // ============================================================
  // SUBNETTING
  // ============================================================
  {
    themaId: 'netz-subnetting',
    titel: 'IP-Adressierung & Subnetting',
    einleitung: 'Jedes Gerät in einem IP-Netz benötigt eine eindeutige IP-Adresse. Durch Subnetting teilt man ein großes Netz in kleinere, logisch getrennte Teilnetze auf – das spart Adressen und erhöht die Sicherheit. Subnetting wird in der AP2-Prüfung eher beschreibend als rechnerisch abgefragt, taucht aber mindestens bei CIDR-Notation, privaten Adressbereichen und einer Beispielrechnung regelmäßig auf.',
    abschnitte: [
      {
        titel: 'IPv4 – Aufbau und Klassen',
        inhalt: `
          <p>Eine IPv4-Adresse ist <strong>32 Bit</strong> lang und wird als vier durch Punkte getrennte Dezimalzahlen (0&ndash;255) geschrieben, z.&nbsp;B. <code>192.168.1.42</code>. Sie besteht aus einem <strong>Netzanteil</strong> und einem <strong>Hostanteil</strong>, deren Grenze durch die <strong>Subnetzmaske</strong> festgelegt wird.</p>
          <h4>CIDR-Notation</h4>
          <p>Statt der Maske <code>255.255.255.0</code> schreibt man kurz <code>/24</code> – die Zahl gibt die Anzahl der 1-Bits (=Netzanteil) an.</p>
          <ul>
            <li><code>/8</code>  = <code>255.0.0.0</code> (16.777.214 Hosts)</li>
            <li><code>/16</code> = <code>255.255.0.0</code> (65.534 Hosts)</li>
            <li><code>/24</code> = <code>255.255.255.0</code> (254 Hosts)</li>
            <li><code>/25</code> = <code>255.255.255.128</code> (126 Hosts)</li>
            <li><code>/26</code> = <code>255.255.255.192</code> (62 Hosts)</li>
            <li><code>/27</code> = <code>255.255.255.224</code> (30 Hosts)</li>
            <li><code>/28</code> = <code>255.255.255.240</code> (14 Hosts)</li>
            <li><code>/30</code> = <code>255.255.255.252</code> (2 Hosts, typ. Point-to-Point)</li>
          </ul>
          <h4>Private Adressbereiche (RFC 1918)</h4>
          <ul>
            <li><code>10.0.0.0/8</code> &ndash; großes privates Netz</li>
            <li><code>172.16.0.0/12</code> &ndash; mittleres privates Netz</li>
            <li><code>192.168.0.0/16</code> &ndash; typisches Heimnetz</li>
          </ul>
          <p><strong>Sonderadressen:</strong> <code>127.0.0.1</code> = Loopback/localhost, <code>169.254.x.x</code> = APIPA (Autokonfiguration, kein DHCP erreichbar), <code>0.0.0.0</code> = Default-Route.</p>
        `
      },
      {
        titel: 'Berechnung: Netzadresse, Broadcast, Hosts',
        inhalt: `
          <p>Zu jedem Subnetz gehören drei wichtige Adressen:</p>
          <ul>
            <li><strong>Netzadresse</strong>: erste Adresse, alle Host-Bits = 0 – identifiziert das Netz selbst.</li>
            <li><strong>Broadcast-Adresse</strong>: letzte Adresse, alle Host-Bits = 1 – erreicht alle Hosts im Netz.</li>
            <li><strong>Nutzbare Hosts</strong>: <code>2^h − 2</code> (h = Anzahl der Host-Bits). Die –2 deckt Netz- und Broadcast-Adresse ab.</li>
          </ul>
          <h4>Worked Example: <code>192.168.1.0/26</code></h4>
          <p>1. <strong>Subnetzmaske</strong>: /26 → 26 Netz-Bits → <code>11111111.11111111.11111111.11000000</code> = <code>255.255.255.192</code>.</p>
          <p>2. <strong>Host-Bits</strong>: 32 − 26 = 6 Bit → <code>2^6 − 2 = 62</code> nutzbare Hosts.</p>
          <p>3. <strong>Blockgröße im letzten Oktett</strong>: 256 − 192 = 64. Das Netz wird in 64er-Blöcken unterteilt.</p>
          <p>4. <strong>Netzadresse</strong>: <code>192.168.1.0</code>.</p>
          <p>5. <strong>Broadcast</strong>: letzte Adresse des Blocks &ndash; <code>192.168.1.63</code>.</p>
          <p>6. <strong>Erste nutzbare IP</strong>: <code>192.168.1.1</code> &ndash; <strong>letzte</strong>: <code>192.168.1.62</code>.</p>
          <h4>Weitere Beispiele im selben /24</h4>
          <table style="width:100%; border-collapse:collapse; margin:10px 0;">
            <tr style="background:#f0f4ff;"><th style="border:1px solid #ccc; padding:6px;">Subnetz</th><th style="border:1px solid #ccc; padding:6px;">Netzadresse</th><th style="border:1px solid #ccc; padding:6px;">Erste Host-IP</th><th style="border:1px solid #ccc; padding:6px;">Letzte Host-IP</th><th style="border:1px solid #ccc; padding:6px;">Broadcast</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>192.168.1.0/26</code></td><td style="border:1px solid #ccc; padding:6px;">192.168.1.0</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.1</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.62</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.63</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>192.168.1.64/26</code></td><td style="border:1px solid #ccc; padding:6px;">192.168.1.64</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.65</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.126</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.127</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>192.168.1.128/26</code></td><td style="border:1px solid #ccc; padding:6px;">192.168.1.128</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.129</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.190</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.191</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>192.168.1.192/26</code></td><td style="border:1px solid #ccc; padding:6px;">192.168.1.192</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.193</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.254</td><td style="border:1px solid #ccc; padding:6px;">192.168.1.255</td></tr>
          </table>
        `
      },
      {
        titel: 'IPv6 – der Nachfolger',
        inhalt: `
          <p>IPv6-Adressen sind <strong>128 Bit</strong> lang und werden als acht Gruppen hexadezimaler Zahlen geschrieben, z.&nbsp;B. <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>. Führende Nullen dürfen weggelassen werden, eine zusammenhängende Null-Gruppe durch <code>::</code> ersetzt werden (nur einmal pro Adresse).</p>
          <ul>
            <li><code>::1</code> &ndash; Loopback (wie 127.0.0.1)</li>
            <li><code>fe80::/10</code> &ndash; Link-local (nur im lokalen Segment gültig)</li>
            <li><code>fc00::/7</code> &ndash; Unique Local (privates IPv6)</li>
            <li><code>2000::/3</code> &ndash; Global Unicast (öffentlich routbar)</li>
          </ul>
          <p>IPv6 kennt <strong>keinen Broadcast</strong> mehr – stattdessen Multicast (<code>ff00::/8</code>). Die Adressvergabe erfolgt typ. per SLAAC oder DHCPv6.</p>
        `
      },
      {
        titel: 'NAT und öffentliche Adressen',
        inhalt: `
          <p>Da IPv4 nur knapp 4 Mrd. Adressen bietet, nutzen private Netze <strong>NAT (Network Address Translation)</strong>: Der Router tauscht beim Weg ins Internet die private Quell-IP gegen seine öffentliche IP aus und speichert die Zuordnung in einer Übersetzungstabelle (meist PAT mit Port-Mapping).</p>
          <p>→ Hosts mit privater IP sind von außen nicht direkt erreichbar, was zugleich einen Grundschutz bietet.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Lerne die /24-, /25-, /26-, /27- und /28-Masken auswendig (254/126/62/30/14 Hosts).',
      'Private Netzbereiche 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 werden fast sicher abgefragt.',
      'Formel Hosts = 2^h − 2. Das "−2" (Netz- + Broadcast-Adresse) gehört immer in die Begründung.',
      'Broadcast-Adresse = letzte Adresse im Block, Netzadresse = erste Adresse. In Freitextaufgaben Rechenweg Schritt für Schritt zeigen.',
      'IPv6 hat keinen Broadcast mehr, sondern Multicast. Typisches Fangfangfrage-Motiv.'
    ]
  },

  // ============================================================
  // ANWENDUNGSPROTOKOLLE
  // ============================================================
  {
    themaId: 'netz-protokolle',
    titel: 'Anwendungsprotokolle (HTTP, DNS, DHCP, Mail, SSH, REST)',
    einleitung: 'Auf Schicht 7 des OSI-Modells leben die Protokolle, mit denen Anwendungen direkt arbeiten: HTTP(S) für das Web, DNS für Namensauflösung, DHCP für die automatische IP-Vergabe, SMTP/IMAP/POP3 für E-Mail, SSH für verschlüsselte Administration und FTP/SFTP für Dateitransfer. Seit 2024 werden außerdem verstärkt REST-APIs und HTTP-Statuscodes abgefragt.',
    abschnitte: [
      {
        titel: 'HTTP/HTTPS – Aufbau und Statuscodes',
        inhalt: `
          <p><strong>HTTP (Hypertext Transfer Protocol)</strong> arbeitet auf <code>Port 80</code>, die verschlüsselte Variante <strong>HTTPS</strong> auf <code>Port 443</code> mittels TLS. HTTP ist <em>zustandslos</em> (stateless) und arbeitet nach dem <strong>Request/Response</strong>-Prinzip.</p>
          <h4>Aufbau eines HTTP-Requests</h4>
          <pre style="background:#f5f5f5; padding:10px; border-radius:4px; overflow:auto;"><code>GET /api/kunden/42 HTTP/1.1
Host: example.com
Accept: application/json
Authorization: Bearer eyJ...
</code></pre>
          <p>Bestandteile: <strong>Request-Line</strong> (Methode, URL, Version), <strong>Header</strong>, Leerzeile, optional <strong>Body</strong> (bei POST/PUT/PATCH).</p>
          <h4>HTTP-Methoden</h4>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="background:#f0f4ff;"><th style="border:1px solid #ccc; padding:6px;">Methode</th><th style="border:1px solid #ccc; padding:6px;">Zweck</th><th style="border:1px solid #ccc; padding:6px;">CRUD</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>GET</code></td><td style="border:1px solid #ccc; padding:6px;">Ressource lesen</td><td style="border:1px solid #ccc; padding:6px;">Read</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>POST</code></td><td style="border:1px solid #ccc; padding:6px;">Ressource neu anlegen</td><td style="border:1px solid #ccc; padding:6px;">Create</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>PUT</code></td><td style="border:1px solid #ccc; padding:6px;">Ressource vollständig ersetzen</td><td style="border:1px solid #ccc; padding:6px;">Update</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>PATCH</code></td><td style="border:1px solid #ccc; padding:6px;">Ressource teilweise ändern</td><td style="border:1px solid #ccc; padding:6px;">Update</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>DELETE</code></td><td style="border:1px solid #ccc; padding:6px;">Ressource löschen</td><td style="border:1px solid #ccc; padding:6px;">Delete</td></tr>
          </table>
          <h4>Statuscodes</h4>
          <ul>
            <li><strong>1xx Informational</strong>: <code>100 Continue</code></li>
            <li><strong>2xx Erfolg</strong>: <code>200 OK</code>, <code>201 Created</code>, <code>204 No Content</code></li>
            <li><strong>3xx Umleitung</strong>: <code>301 Moved Permanently</code>, <code>302 Found</code>, <code>304 Not Modified</code></li>
            <li><strong>4xx Client-Fehler</strong>: <code>400 Bad Request</code>, <code>401 Unauthorized</code>, <code>403 Forbidden</code>, <code>404 Not Found</code>, <code>409 Conflict</code>, <code>429 Too Many Requests</code></li>
            <li><strong>5xx Server-Fehler</strong>: <code>500 Internal Server Error</code>, <code>502 Bad Gateway</code>, <code>503 Service Unavailable</code>, <code>504 Gateway Timeout</code></li>
          </ul>
          <p>Wichtige Header: <code>Content-Type</code> (z.B. <code>application/json</code>), <code>Content-Length</code>, <code>Authorization</code>, <code>Accept</code>, <code>User-Agent</code>, <code>Cache-Control</code>, <code>Set-Cookie</code>.</p>
        `
      },
      {
        titel: 'REST – Architekturstil',
        inhalt: `
          <p><strong>REST (Representational State Transfer)</strong> ist ein Architekturstil, der HTTP als Transport nutzt. Zentrale Prinzipien:</p>
          <ul>
            <li><strong>Zustandslos (stateless)</strong>: Jeder Request enthält alle nötigen Informationen; der Server speichert keinen Client-Zustand.</li>
            <li><strong>Ressourcenorientiert</strong>: Jede Entität hat eine eindeutige URI (z.&nbsp;B. <code>/kunden/42</code>).</li>
            <li><strong>Einheitliche Schnittstelle (uniform interface)</strong>: CRUD → HTTP-Methoden (GET, POST, PUT, PATCH, DELETE).</li>
            <li><strong>Standardisierte Repräsentation</strong>: meist <code>JSON</code> oder <code>XML</code>.</li>
            <li><strong>Cacheable</strong>: Antworten können per Header für Caching markiert werden.</li>
          </ul>
          <p>Beispiel: <code>POST /api/bestellungen</code> erzeugt eine neue Bestellung und antwortet idealerweise mit <code>201 Created</code> sowie dem <code>Location</code>-Header der neuen Ressource.</p>
        `
      },
      {
        titel: 'DNS – Domain Name System',
        inhalt: `
          <p><strong>DNS</strong> (Port <code>53</code>, meist UDP) übersetzt Domainnamen in IP-Adressen. Die Auflösung erfolgt hierarchisch: Root-Server → TLD-Server (<code>.de</code>) → autoritativer Nameserver.</p>
          <h4>Wichtige Resource-Record-Typen</h4>
          <ul>
            <li><strong>A</strong>: Hostname → IPv4-Adresse</li>
            <li><strong>AAAA</strong>: Hostname → IPv6-Adresse</li>
            <li><strong>CNAME</strong>: Alias auf anderen Hostnamen</li>
            <li><strong>MX</strong>: Mailserver für die Domain (mit Priorität)</li>
            <li><strong>NS</strong>: zuständiger Nameserver</li>
            <li><strong>TXT</strong>: Textinformationen (z.&nbsp;B. SPF, DKIM)</li>
            <li><strong>PTR</strong>: Reverse-Lookup (IP → Name)</li>
            <li><strong>SOA</strong>: Start of Authority (Zonen-Metadaten)</li>
          </ul>
          <p>Clients cachen Antworten gemäß <strong>TTL</strong> (Time to Live). Tools: <code>nslookup</code>, <code>dig</code>.</p>
        `
      },
      {
        titel: 'DHCP – Automatische IP-Vergabe',
        inhalt: `
          <p><strong>DHCP (Dynamic Host Configuration Protocol)</strong> vergibt IP-Adressen, Subnetzmaske, Default-Gateway und DNS-Server automatisch. Ports: <code>67</code> (Server) und <code>68</code> (Client), UDP.</p>
          <p>Ablauf – <strong>DORA</strong>:</p>
          <ol>
            <li><strong>D</strong>iscover: Client sucht per Broadcast einen DHCP-Server.</li>
            <li><strong>O</strong>ffer: Server bietet eine IP-Adresse an.</li>
            <li><strong>R</strong>equest: Client fordert die Adresse an.</li>
            <li><strong>A</strong>cknowledge: Server bestätigt die Vergabe.</li>
          </ol>
          <p>Findet der Client keinen Server, nutzt Windows <strong>APIPA</strong> (<code>169.254.x.x</code>).</p>
        `
      },
      {
        titel: 'E-Mail: SMTP, IMAP, POP3',
        inhalt: `
          <table style="width:100%; border-collapse:collapse;">
            <tr style="background:#f0f4ff;"><th style="border:1px solid #ccc; padding:6px;">Protokoll</th><th style="border:1px solid #ccc; padding:6px;">Zweck</th><th style="border:1px solid #ccc; padding:6px;">Port (klar)</th><th style="border:1px solid #ccc; padding:6px;">Port (TLS)</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>SMTP</code></td><td style="border:1px solid #ccc; padding:6px;">E-Mail senden / zwischen Servern transportieren</td><td style="border:1px solid #ccc; padding:6px;">25 (587 Submission)</td><td style="border:1px solid #ccc; padding:6px;">465 (SMTPS)</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>POP3</code></td><td style="border:1px solid #ccc; padding:6px;">Mails abholen (meist lokale Speicherung)</td><td style="border:1px solid #ccc; padding:6px;">110</td><td style="border:1px solid #ccc; padding:6px;">995</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><code>IMAP</code></td><td style="border:1px solid #ccc; padding:6px;">Mails auf dem Server verwalten (Ordner, mehrere Geräte)</td><td style="border:1px solid #ccc; padding:6px;">143</td><td style="border:1px solid #ccc; padding:6px;">993</td></tr>
          </table>
          <p><strong>Faustregel:</strong> <em>SMTP zum Senden, IMAP/POP3 zum Empfangen.</em> IMAP ist für Mehrgerätezugriff geeigneter als POP3.</p>
        `
      },
      {
        titel: 'SSH, FTP, SFTP',
        inhalt: `
          <ul>
            <li><strong>SSH (Port 22)</strong>: Secure Shell &ndash; verschlüsselter Fernzugriff und Tunneling. Löst unverschlüsseltes Telnet ab.</li>
            <li><strong>FTP (Ports 20/21)</strong>: File Transfer Protocol &ndash; klassischer Dateitransfer, <em>unverschlüsselt</em>.</li>
            <li><strong>FTPS</strong>: FTP über TLS/SSL.</li>
            <li><strong>SFTP (Port 22)</strong>: Dateitransfer <em>über SSH</em> &ndash; nicht identisch mit FTPS! In der Prüfung oft verwechselt.</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'HTTP-Statuscodes: 2XX Erfolg, 3XX Umleitung, 4XX Client-Fehler, 5XX Server-Fehler. Codes 200/201/400/401/403/404/500 auswendig.',
      'Bei REST immer die vier Eigenschaften nennen: zustandslos, ressourcenorientiert, einheitliche Schnittstelle (HTTP-Methoden = CRUD), standardisierte Repräsentation (JSON).',
      'DNS-Records A/AAAA/CNAME/MX kommen fast jedes Jahr. Merke: A=IPv4, AAAA=IPv6, MX=Mail, CNAME=Alias.',
      'DHCP-Ablauf DORA (Discover-Offer-Request-Acknowledge) wird gerne als Lückentext abgefragt.',
      'SFTP läuft über SSH auf Port 22 – nicht über FTP! Dieser Unterschied ist eine typische Fangfrage.'
    ]
  }
];
