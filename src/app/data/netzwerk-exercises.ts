import { UebungsSet } from '../models/app.models';

export const NETZWERK_UEBUNGEN: UebungsSet[] = [
  // =========================================================================
  // OSI-MODELL
  // =========================================================================
  {
    themaId: 'netz-osi',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Aus wie vielen Schichten besteht das OSI-Referenzmodell?',
        optionen: ['4', '5', '7', '8'],
        korrekteAntwort: 2,
        erklaerung: 'Das OSI-Modell besteht aus 7 Schichten: Bitübertragung, Sicherung, Vermittlung, Transport, Sitzung, Darstellung, Anwendung. Das TCP/IP-Modell hingegen nutzt nur 4 Schichten.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Auf welcher OSI-Schicht arbeitet ein Router?',
        optionen: ['Schicht 1 (Bitübertragung)', 'Schicht 2 (Sicherung)', 'Schicht 3 (Vermittlung)', 'Schicht 4 (Transport)'],
        korrekteAntwort: 2,
        erklaerung: 'Ein Router arbeitet auf Schicht 3 (Vermittlung/Network). Er trifft Routing-Entscheidungen anhand der IP-Adressen. Ein Switch arbeitet auf Schicht 2 (MAC-Adressen), ein Hub auf Schicht 1.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Protokoll gehört zur Transportschicht (Schicht 4)?',
        optionen: ['IP', 'HTTP', 'TCP', 'Ethernet'],
        korrekteAntwort: 2,
        erklaerung: 'TCP (und UDP) ist ein Transportschicht-Protokoll (Schicht 4). IP arbeitet auf Schicht 3, HTTP auf Schicht 7, Ethernet auf Schicht 2.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Einheit wird auf der Sicherungsschicht (Schicht 2) verwendet?',
        optionen: ['Bit', 'Frame (Rahmen)', 'Paket', 'Segment'],
        korrekteAntwort: 1,
        erklaerung: 'Auf der Sicherungsschicht heißt die Dateneinheit Frame bzw. Rahmen. Schicht 1 = Bit, Schicht 3 = Paket, Schicht 4 = Segment (TCP) bzw. Datagramm (UDP).'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'TLS/SSL lässt sich im OSI-Modell der Darstellungsschicht (Schicht 6) zuordnen.',
        korrekt: true,
        erklaerung: 'TLS/SSL kümmert sich um Verschlüsselung und Datenformat und wird daher klassisch auf Schicht 6 eingeordnet. HTTPS selbst, das TLS nutzt, ist ein Schicht-7-Protokoll.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Ein Switch trifft seine Weiterleitungsentscheidung anhand der IP-Adressen.',
        korrekt: false,
        erklaerung: 'Ein Switch arbeitet auf Schicht 2 und nutzt MAC-Adressen. Geräte, die anhand von IP-Adressen weiterleiten, sind Router (Schicht 3).'
      },
      {
        typ: 'lueckentext',
        frage: 'Die OSI-Schicht, auf der IP-Adressen und Routing angesiedelt sind, heißt ___-Schicht.',
        antwort: 'Vermittlung',
        erklaerung: 'Die Vermittlungsschicht (engl. Network Layer, Schicht 3) ist für logische Adressierung (IP) und Routing zuständig.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die Einheit auf Schicht 3 (Vermittlung) heißt ___.',
        antwort: 'Paket',
        erklaerung: 'Auf Schicht 3 spricht man von Paketen. Frame = Schicht 2, Segment = Schicht 4 (TCP), Datagramm = Schicht 4 (UDP).'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Protokolle der korrekten OSI-Schicht zu.',
        paare: [
          { begriff: 'HTTP', definition: 'Schicht 7 (Anwendung)' },
          { begriff: 'TCP', definition: 'Schicht 4 (Transport)' },
          { begriff: 'IP', definition: 'Schicht 3 (Vermittlung)' },
          { begriff: 'Ethernet', definition: 'Schicht 2 (Sicherung)' },
          { begriff: 'TLS', definition: 'Schicht 6 (Darstellung)' }
        ],
        erklaerung: 'Typische Prüfungszuordnung: Anwendungsprotokolle wie HTTP/FTP/DNS liegen auf Schicht 7, TCP/UDP auf Schicht 4, IP auf Schicht 3, Ethernet/WLAN auf Schicht 2, TLS/SSL auf Schicht 6.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie den OSI-Schichten ihre typische Aufgabe zu.',
        paare: [
          { begriff: 'Schicht 1 (Bitübertragung)', definition: 'Physikalische Signalübertragung auf dem Medium' },
          { begriff: 'Schicht 2 (Sicherung)', definition: 'Fehlererkennung und MAC-Adressierung' },
          { begriff: 'Schicht 3 (Vermittlung)', definition: 'Routing und logische Adressierung über IP' },
          { begriff: 'Schicht 4 (Transport)', definition: 'Ende-zu-Ende-Verbindung, Ports, Segmentierung' },
          { begriff: 'Schicht 7 (Anwendung)', definition: 'Schnittstelle zur Anwendung (HTTP, SMTP, DNS)' }
        ],
        erklaerung: 'Die Kernaufgaben je Schicht sind häufiger Prüfungsstoff. Merke: Je höher die Schicht, desto näher an der Anwendung.'
      },
      {
        typ: 'freitext',
        frage: 'Erklären Sie kurz den Unterschied zwischen einem Hub, einem Switch und einem Router, inklusive der jeweiligen OSI-Schicht.',
        musterloesung: 'Ein Hub arbeitet auf Schicht 1 (Bitübertragung) und leitet eingehende Signale an alle Ports weiter – keine Adressauswertung. Ein Switch arbeitet auf Schicht 2 (Sicherung) und leitet Frames gezielt anhand der MAC-Adresse an den richtigen Port weiter. Ein Router arbeitet auf Schicht 3 (Vermittlung), trifft Routing-Entscheidungen anhand der IP-Adresse und verbindet unterschiedliche (Sub-)Netze.',
        stichwoerter: ['Hub', 'Schicht 1', 'Switch', 'Schicht 2', 'MAC', 'Router', 'Schicht 3', 'IP'],
        erklaerung: 'Die Zuordnung Hub/Switch/Router zu den OSI-Schichten ist ein Klassiker in AP2-Prüfungen.'
      },
      {
        typ: 'freitext',
        frage: 'Nennen Sie alle 7 OSI-Schichten in der richtigen Reihenfolge (von unten nach oben) mit jeweils einem typischen Protokoll oder Gerät.',
        musterloesung: '1 Bitübertragung (Kabel/Hub), 2 Sicherung (Ethernet/Switch), 3 Vermittlung (IP/Router), 4 Transport (TCP/UDP), 5 Sitzung (NetBIOS/RPC), 6 Darstellung (TLS/ASCII), 7 Anwendung (HTTP/DNS/SMTP).',
        stichwoerter: ['Bitübertragung', 'Sicherung', 'Vermittlung', 'Transport', 'Sitzung', 'Darstellung', 'Anwendung'],
        erklaerung: 'Eselsbrücke: "Alle Priester saufen Tequila nach der Predigt" – von oben 7 nach unten 1.'
      }
    ]
  },

  // =========================================================================
  // TCP/IP
  // =========================================================================
  {
    themaId: 'netz-tcpip',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche der folgenden Eigenschaften trifft auf TCP zu?',
        optionen: [
          'verbindungslos und ohne Bestätigung',
          'verbindungsorientiert, zuverlässig, mit Empfangsbestätigung',
          'arbeitet ohne Portnummern',
          'ist ein Protokoll der Vermittlungsschicht'
        ],
        korrekteAntwort: 1,
        erklaerung: 'TCP ist verbindungsorientiert und zuverlässig: Pakete werden bestätigt, verlorene Pakete werden erneut gesendet, die Reihenfolge ist garantiert. TCP liegt auf Schicht 4 (Transport) und nutzt Portnummern.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Protokoll wird typischerweise für VoIP und Videostreaming genutzt?',
        optionen: ['TCP', 'UDP', 'ICMP', 'ARP'],
        korrekteAntwort: 1,
        erklaerung: 'UDP wird bei VoIP und Streaming bevorzugt, weil die niedrige Latenz wichtiger ist als der Verlust einzelner Pakete. TCP würde durch Retransmissions stören.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Nachrichten werden beim TCP-3-Wege-Handshake in welcher Reihenfolge ausgetauscht?',
        optionen: [
          'SYN – ACK – FIN',
          'SYN – SYN/ACK – ACK',
          'ACK – SYN – ACK',
          'PUSH – ACK – FIN'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Der 3-Wege-Handshake besteht aus SYN (Client → Server), SYN/ACK (Server → Client) und ACK (Client → Server). Erst danach ist die TCP-Verbindung aufgebaut.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welchen Port nutzt HTTPS standardmäßig?',
        optionen: ['21', '80', '443', '8080'],
        korrekteAntwort: 2,
        erklaerung: 'HTTPS verwendet standardmäßig Port 443 (TCP). HTTP nutzt Port 80, FTP 21, 8080 ist ein üblicher Alternativ-Port für HTTP-Entwicklungsserver.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'ICMP verwendet zur Unterscheidung von Anwendungen Portnummern.',
        korrekt: false,
        erklaerung: 'ICMP arbeitet auf Schicht 3 und nutzt KEINE Portnummern. Es kennt stattdessen Typen und Codes (z.B. Typ 8 = Echo Request bei ping).'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'UDP bestätigt den Empfang jedes Pakets und sendet verlorene Pakete automatisch erneut.',
        korrekt: false,
        erklaerung: 'Das ist eine Eigenschaft von TCP. UDP ist verbindungslos, bestätigt nichts und fordert verlorene Pakete nicht erneut an – dafür ist es schneller.'
      },
      {
        typ: 'lueckentext',
        frage: 'Beim TCP-Verbindungsaufbau sendet der Client zuerst ein Paket mit gesetztem ___-Flag.',
        antwort: 'SYN',
        erklaerung: 'Schritt 1 des 3-Wege-Handshakes: Der Client sendet ein SYN (Synchronize) mit seiner initialen Sequenznummer an den Server.'
      },
      {
        typ: 'lueckentext',
        frage: 'Der Standard-Port des DNS-Protokolls ist ___.',
        antwort: '53',
        erklaerung: 'DNS nutzt Port 53 – überwiegend UDP, bei großen Antworten (> 512 Byte) oder Zonentransfer auch TCP.'
      },
      {
        typ: 'lueckentext',
        frage: 'SSH nutzt standardmäßig den Port ___.',
        antwort: '22',
        erklaerung: 'Port 22 ist für SSH und damit auch für SFTP reserviert.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie den Protokollen ihren Standard-Port zu.',
        paare: [
          { begriff: 'HTTP', definition: '80' },
          { begriff: 'HTTPS', definition: '443' },
          { begriff: 'SSH / SFTP', definition: '22' },
          { begriff: 'SMTP', definition: '25' },
          { begriff: 'IMAP', definition: '143' },
          { begriff: 'POP3', definition: '110' }
        ],
        erklaerung: 'Well-Known Ports (0–1023) sind Pflichtwissen: 80 HTTP, 443 HTTPS, 22 SSH, 25 SMTP, 143 IMAP, 110 POP3, 53 DNS, 21 FTP.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Eigenschaften dem passenden Transportprotokoll zu.',
        paare: [
          { begriff: 'verbindungsorientiert', definition: 'TCP' },
          { begriff: 'verbindungslos', definition: 'UDP' },
          { begriff: 'garantierte Reihenfolge', definition: 'TCP' },
          { begriff: 'geringer Overhead, niedrige Latenz', definition: 'UDP' },
          { begriff: '3-Wege-Handshake', definition: 'TCP' }
        ],
        erklaerung: 'TCP ist zuverlässig aber langsamer, UDP ist schnell und einfach. TCP-spezifisch: Handshake, Sequenznummern, Bestätigungen, Reihenfolge.'
      },
      {
        typ: 'freitext',
        frage: 'Nennen Sie drei wesentliche Unterschiede zwischen TCP und UDP und für jedes Protokoll ein typisches Einsatzgebiet.',
        musterloesung: 'Unterschiede: (1) TCP ist verbindungsorientiert mit 3-Wege-Handshake, UDP ist verbindungslos. (2) TCP ist zuverlässig (Bestätigungen, Retransmission, korrekte Reihenfolge), UDP nicht. (3) TCP hat höheren Overhead (Header 20 Byte) und ist langsamer, UDP hat geringen Overhead (Header 8 Byte) und niedrige Latenz. Einsatz: TCP für HTTP(S), FTP, E-Mail, Datenbanken. UDP für DNS, DHCP, VoIP, Streaming, Online-Spiele.',
        stichwoerter: ['verbindungsorientiert', 'verbindungslos', 'zuverlässig', 'Overhead', 'HTTP', 'DNS', 'Streaming'],
        erklaerung: 'Klassische Prüfungsfrage. Wichtig: mindestens ein konkretes Einsatzbeispiel pro Protokoll.'
      },
      {
        typ: 'freitext',
        frage: 'Beschreiben Sie den 3-Wege-Handshake von TCP.',
        musterloesung: '1. Der Client sendet ein TCP-Segment mit gesetztem SYN-Flag und einer initialen Sequenznummer x. 2. Der Server antwortet mit SYN+ACK: eigene Sequenznummer y und Bestätigung x+1. 3. Der Client bestätigt mit ACK (ack=y+1). Danach ist die Verbindung bidirektional aufgebaut und Nutzdaten können übertragen werden.',
        stichwoerter: ['SYN', 'SYN/ACK', 'ACK', 'Sequenznummer'],
        erklaerung: 'Die drei Schritte SYN → SYN/ACK → ACK müssen in korrekter Reihenfolge genannt werden.'
      }
    ]
  },

  // =========================================================================
  // SUBNETTING
  // =========================================================================
  {
    themaId: 'netz-subnetting',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welche Subnetzmaske entspricht der CIDR-Notation /24?',
        optionen: ['255.255.0.0', '255.255.255.0', '255.255.255.128', '255.255.255.255'],
        korrekteAntwort: 1,
        erklaerung: '/24 bedeutet 24 Netz-Bits von links, also 255.255.255.0. Dabei bleiben 8 Host-Bits → 2^8 − 2 = 254 nutzbare Hosts.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welcher Bereich gehört zu den privaten IPv4-Adressen nach RFC 1918?',
        optionen: ['169.254.0.0/16', '172.16.0.0/12', '224.0.0.0/4', '127.0.0.0/8'],
        korrekteAntwort: 1,
        erklaerung: 'Private Bereiche: 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16. 169.254.0.0/16 ist APIPA, 127.0.0.0/8 Loopback, 224.0.0.0/4 Multicast.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Wie viele Host-Adressen sind in einem /26-Netz nutzbar?',
        optionen: ['30', '62', '64', '126'],
        korrekteAntwort: 1,
        erklaerung: '/26 hat 6 Host-Bits: 2^6 − 2 = 62 nutzbare Hosts (Netz- und Broadcast-Adresse abgezogen).'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche Adresse ist die Broadcast-Adresse im Netz 192.168.1.0/26?',
        optionen: ['192.168.1.0', '192.168.1.63', '192.168.1.127', '192.168.1.255'],
        korrekteAntwort: 1,
        erklaerung: '/26 → Blockgröße 64. Erstes Subnetz: 192.168.1.0–192.168.1.63. Die Broadcast-Adresse ist die letzte Adresse des Blocks: 192.168.1.63.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'IPv6 verwendet weiterhin Broadcast-Adressen wie IPv4.',
        korrekt: false,
        erklaerung: 'IPv6 kennt keinen Broadcast mehr. Stattdessen wird Multicast (Präfix ff00::/8) verwendet.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'Die Adresse 127.0.0.1 ist die Loopback-Adresse eines Hosts.',
        korrekt: true,
        erklaerung: '127.0.0.1 (IPv6: ::1) ist die Loopback-Adresse und zeigt immer auf den eigenen Rechner. Der gesamte Bereich 127.0.0.0/8 ist reserviert.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die Subnetzmaske /27 lautet in Dezimalschreibweise ___.',
        antwort: '255.255.255.224',
        erklaerung: '/27 = 27 Netzbits. Letztes Oktett: 11100000 = 224. Ergibt 2^5 − 2 = 30 nutzbare Hosts.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die Subnetzmaske /26 entspricht dezimal ___.',
        antwort: '255.255.255.192',
        erklaerung: '/26 = 11111111.11111111.11111111.11000000 → letztes Oktett 192.'
      },
      {
        typ: 'lueckentext',
        frage: 'Die Netzadresse des Netzes 10.0.0.0/8 lautet ___.',
        antwort: '10.0.0.0',
        erklaerung: 'Bei /8 sind die ersten 8 Bit (erstes Oktett) Netzanteil. Die Netzadresse ist die erste Adresse mit allen Host-Bits 0 – hier 10.0.0.0.'
      },
      {
        typ: 'lueckentext',
        frage: 'In einem /30-Netz stehen ___ Hostadressen zur Nutzung zur Verfügung.',
        antwort: '2',
        erklaerung: '/30 hat 2 Host-Bits: 2^2 − 2 = 2. Typisch für Point-to-Point-Verbindungen zwischen zwei Routern.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie den privaten IPv4-Bereichen die passende CIDR-Notation zu.',
        paare: [
          { begriff: '10.0.0.0 – 10.255.255.255', definition: '10.0.0.0/8' },
          { begriff: '172.16.0.0 – 172.31.255.255', definition: '172.16.0.0/12' },
          { begriff: '192.168.0.0 – 192.168.255.255', definition: '192.168.0.0/16' },
          { begriff: '169.254.0.0 – 169.254.255.255', definition: '169.254.0.0/16 (APIPA)' }
        ],
        erklaerung: 'Drei private Bereiche (RFC 1918) plus APIPA (Link-local). Die Klasse-Bezeichnungen (A/B/C) sind nur historisch, CIDR ist heute Standard.'
      },
      {
        typ: 'freitext',
        frage: 'Gegeben ist das Netz 192.168.1.0/26. Berechnen Sie: (a) Subnetzmaske, (b) Anzahl nutzbarer Hosts, (c) Netzadresse, (d) Broadcast-Adresse, (e) erste und letzte nutzbare Host-Adresse.',
        musterloesung: '(a) /26 → 11111111.11111111.11111111.11000000 = 255.255.255.192. (b) Host-Bits = 32 − 26 = 6 → 2^6 − 2 = 62 Hosts. (c) Netzadresse = 192.168.1.0 (alle Host-Bits 0). (d) Blockgröße = 256 − 192 = 64, Broadcast = 192.168.1.63. (e) Erste Host-IP = 192.168.1.1, letzte Host-IP = 192.168.1.62.',
        stichwoerter: ['255.255.255.192', '62', '192.168.1.0', '192.168.1.63', '192.168.1.1', '192.168.1.62'],
        erklaerung: 'Typische Prüfungs-Rechenaufgabe. Immer Rechenweg zeigen: Maske → Host-Bits → Formel 2^h − 2 → Blockgröße → Adressen.'
      },
      {
        typ: 'freitext',
        frage: 'Ein Unternehmen erhält das Netz 192.168.10.0/24 und will es in 4 gleich große Subnetze aufteilen. Welche Subnetzmaske ist nötig und wie sehen die vier Netze aus?',
        musterloesung: 'Für 4 Subnetze werden 2 zusätzliche Netzbits benötigt → neue Maske /26 = 255.255.255.192. Blockgröße 64. Die vier Netze: 1) 192.168.10.0/26 (Broadcast .63), 2) 192.168.10.64/26 (Broadcast .127), 3) 192.168.10.128/26 (Broadcast .191), 4) 192.168.10.192/26 (Broadcast .255). Je 62 nutzbare Hosts.',
        stichwoerter: ['/26', '255.255.255.192', '64', '62', '192.168.10.0', '192.168.10.64', '192.168.10.128', '192.168.10.192'],
        erklaerung: 'Faustregel: Für n Subnetze werden ⌈log2(n)⌉ Bits vom Host- zum Netzanteil verschoben. 4 Netze → 2 Bits → /24 wird zu /26.'
      }
    ]
  },

  // =========================================================================
  // ANWENDUNGSPROTOKOLLE
  // =========================================================================
  {
    themaId: 'netz-protokolle',
    uebungen: [
      {
        typ: 'multiple-choice',
        frage: 'Welcher HTTP-Statuscode bedeutet "Ressource wurde erfolgreich angelegt"?',
        optionen: ['200 OK', '201 Created', '204 No Content', '301 Moved Permanently'],
        korrekteAntwort: 1,
        erklaerung: '201 Created wird üblicherweise als Antwort auf ein erfolgreiches POST verwendet und sollte im Header Location die URI der neuen Ressource enthalten.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Der HTTP-Statuscode 404 bedeutet:',
        optionen: ['Server nicht erreichbar', 'Ressource nicht gefunden', 'Zugriff verweigert', 'Interner Serverfehler'],
        korrekteAntwort: 1,
        erklaerung: '404 Not Found → Die angeforderte Ressource wurde auf dem Server nicht gefunden. 403 = Forbidden, 500 = Internal Server Error, 503 = Service Unavailable.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welche HTTP-Methode wird in einer REST-API zum Anlegen einer neuen Ressource verwendet?',
        optionen: ['GET', 'POST', 'PUT', 'DELETE'],
        korrekteAntwort: 1,
        erklaerung: 'POST = Create (C in CRUD). GET = Read, PUT/PATCH = Update, DELETE = Delete.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welcher DNS-Record-Typ verweist einen Hostnamen auf eine IPv6-Adresse?',
        optionen: ['A', 'AAAA', 'CNAME', 'MX'],
        korrekteAntwort: 1,
        erklaerung: 'AAAA (Quad-A) bildet einen Namen auf eine IPv6-Adresse ab. A = IPv4, CNAME = Alias, MX = Mailserver.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welches Protokoll holt E-Mails so vom Server ab, dass sie auf mehreren Geräten synchron bleiben?',
        optionen: ['SMTP', 'POP3', 'IMAP', 'FTP'],
        korrekteAntwort: 2,
        erklaerung: 'IMAP verwaltet Mails auf dem Server (Ordnerstruktur, mehrere Clients). POP3 holt Mails typ. ab und löscht sie auf dem Server. SMTP dient zum Senden.'
      },
      {
        typ: 'multiple-choice',
        frage: 'Welcher Ablauf beschreibt DHCP korrekt?',
        optionen: ['SYN – SYN/ACK – ACK', 'Discover – Offer – Request – Acknowledge', 'Request – Response – Ack – Close', 'Hello – Auth – Data – Close'],
        korrekteAntwort: 1,
        erklaerung: 'DHCP folgt dem DORA-Schema: Discover (Client-Broadcast), Offer (Server-Angebot), Request (Client), Acknowledge (Server bestätigt).'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'REST-APIs sind zustandsbehaftet – der Server speichert zwischen zwei Requests den Sitzungszustand des Clients.',
        korrekt: false,
        erklaerung: 'REST ist zustandslos (stateless). Jeder Request muss alle nötigen Informationen enthalten; der Server speichert keinen Client-Zustand zwischen Requests.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'SFTP ist technisch eine verschlüsselte Variante von FTP und nutzt wie FTPS die Ports 20/21.',
        korrekt: false,
        erklaerung: 'SFTP ist Dateitransfer über SSH und nutzt Port 22. FTPS ist FTP über TLS und nutzt weiterhin 21 (bzw. 990). SFTP und FTPS sind unterschiedliche Protokolle.'
      },
      {
        typ: 'wahr-falsch',
        aussage: 'HTTP ist ein zustandsloses Protokoll.',
        korrekt: true,
        erklaerung: 'HTTP ist zustandslos: Jeder Request ist unabhängig. Sitzungszustände werden über Cookies, Tokens oder serverseitige Sessions zusätzlich realisiert.'
      },
      {
        typ: 'lueckentext',
        frage: 'Der HTTP-Statuscode für "Unauthorized" lautet ___.',
        antwort: '401',
        erklaerung: '401 Unauthorized = keine oder ungültige Authentifizierung. Nicht zu verwechseln mit 403 Forbidden (authentifiziert, aber nicht berechtigt).'
      },
      {
        typ: 'lueckentext',
        frage: 'Der DNS-Record, der den zuständigen Mailserver einer Domain angibt, heißt ___-Record.',
        antwort: 'MX',
        erklaerung: 'MX-Records (Mail Exchanger) verweisen auf den zuständigen SMTP-Server; mit Priorität (niedrigere Zahl = höhere Priorität).'
      },
      {
        typ: 'lueckentext',
        frage: 'In REST-APIs wird die CRUD-Operation "Create" üblicherweise auf die HTTP-Methode ___ abgebildet.',
        antwort: 'POST',
        erklaerung: 'C=POST, R=GET, U=PUT/PATCH, D=DELETE. Antwort bei erfolgreichem Anlegen meist 201 Created mit Location-Header.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die HTTP-Statuscodes den passenden Bedeutungen zu.',
        paare: [
          { begriff: '200', definition: 'OK – erfolgreich' },
          { begriff: '201', definition: 'Created – Ressource erstellt' },
          { begriff: '301', definition: 'Moved Permanently – dauerhafte Weiterleitung' },
          { begriff: '401', definition: 'Unauthorized – Authentifizierung fehlt' },
          { begriff: '403', definition: 'Forbidden – Zugriff verweigert' },
          { begriff: '404', definition: 'Not Found – Ressource nicht gefunden' },
          { begriff: '500', definition: 'Internal Server Error – Serverfehler' }
        ],
        erklaerung: 'Statuscodes 2XX Erfolg, 3XX Umleitung, 4XX Client-Fehler, 5XX Server-Fehler. Diese 7 Codes gehören zum Pflichtwissen.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie den CRUD-Operationen die passende HTTP-Methode zu.',
        paare: [
          { begriff: 'Create', definition: 'POST' },
          { begriff: 'Read', definition: 'GET' },
          { begriff: 'Update (vollständig)', definition: 'PUT' },
          { begriff: 'Update (teilweise)', definition: 'PATCH' },
          { begriff: 'Delete', definition: 'DELETE' }
        ],
        erklaerung: 'Standardmapping in REST. PUT ersetzt eine Ressource vollständig, PATCH ändert nur einzelne Felder.'
      },
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die DNS-Record-Typen ihrer Bedeutung zu.',
        paare: [
          { begriff: 'A', definition: 'Name → IPv4-Adresse' },
          { begriff: 'AAAA', definition: 'Name → IPv6-Adresse' },
          { begriff: 'CNAME', definition: 'Alias auf anderen Namen' },
          { begriff: 'MX', definition: 'Mailserver der Domain' },
          { begriff: 'NS', definition: 'Zuständiger Nameserver' },
          { begriff: 'PTR', definition: 'Reverse-Lookup (IP → Name)' }
        ],
        erklaerung: 'Die sechs Record-Typen sind AP2-Pflicht. Besonders A/AAAA/CNAME/MX werden jedes Jahr abgefragt.'
      },
      {
        typ: 'freitext',
        frage: 'Erklären Sie das REST-Prinzip "zustandslos" und nennen Sie zwei weitere zentrale REST-Eigenschaften.',
        musterloesung: 'Zustandslos heißt: Der Server speichert zwischen zwei Requests keinen Sitzungszustand des Clients. Jeder Request enthält alle für seine Verarbeitung nötigen Informationen (z.B. Auth-Token). Weitere Prinzipien: (1) Ressourcenorientierung – jede Entität hat eine eindeutige URI. (2) Einheitliche Schnittstelle – CRUD-Operationen werden auf HTTP-Methoden (GET, POST, PUT, PATCH, DELETE) abgebildet. (3) Standardisierte Repräsentation – meist JSON oder XML. Vorteil: bessere Skalierbarkeit, Cachebarkeit.',
        stichwoerter: ['zustandslos', 'stateless', 'Ressource', 'URI', 'HTTP-Methoden', 'JSON'],
        erklaerung: 'Kam 2024 in S24 T1 Aufgabe 2 vor – Kernpflichtwissen.'
      },
      {
        typ: 'freitext',
        frage: 'Erklären Sie den DHCP-Ablauf (DORA) mit jeweils einer kurzen Beschreibung der vier Schritte.',
        musterloesung: '1) Discover: Der Client sendet einen DHCP-Discover per Broadcast, um einen DHCP-Server zu finden. 2) Offer: Ein oder mehrere Server antworten mit einem Angebot (IP-Adresse, Subnetzmaske, Gateway, DNS, Lease-Dauer). 3) Request: Der Client wählt ein Angebot aus und fordert diese Konfiguration verbindlich per Broadcast an. 4) Acknowledge: Der gewählte Server bestätigt die Zuweisung. Danach ist der Client konfiguriert.',
        stichwoerter: ['Discover', 'Offer', 'Request', 'Acknowledge', 'Broadcast', 'Lease'],
        erklaerung: 'DHCP nutzt UDP, Ports 67 (Server) und 68 (Client). Ohne Server fällt Windows in den APIPA-Bereich 169.254.x.x zurück.'
      }
    ]
  }
];
