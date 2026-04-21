import { UebungsSet } from '../models/app.models';

// ---------------------------------------------------------------------------
// Hilfsfunktion: Lese-Passage als styled HTML-Box
// ---------------------------------------------------------------------------
function textBox(title: string, text: string): string {
  return `<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 text-sm leading-relaxed">
  <p class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">${title}</p>
  <p class="text-slate-800">${text}</p>
</div>`;
}

// ---------------------------------------------------------------------------
// THEMA 1 – IT Vocabulary
// ---------------------------------------------------------------------------
const VOKABULAR_UEBUNGEN = [
  // --- Zuordnung 1: Grundbegriffe ---
  {
    typ: 'zuordnung' as const,
    frage: 'Match each English IT term to its correct German translation.',
    paare: [
      { begriff: 'deployment',    definition: 'Bereitstellung / Inbetriebnahme' },
      { begriff: 'repository',    definition: 'Versionsverwaltungs-Ablage' },
      { begriff: 'middleware',    definition: 'Zwischenschicht (Software)' },
      { begriff: 'payload',       definition: 'Nutzdaten' },
      { begriff: 'legacy system', definition: 'Altsystem / veraltetes System' },
    ],
    erklaerung: 'Diese Begriffe sind Klassiker in der AP2-Prüfung. "Deployment" beschreibt das Ausrollen einer Anwendung, "Middleware" ist Software, die zwischen Anwendungen und Betriebssystem vermittelt.'
  },
  // --- Zuordnung 2: Agile & Cloud ---
  {
    typ: 'zuordnung' as const,
    frage: 'Match the agile / cloud terms to their German equivalents.',
    paare: [
      { begriff: 'sprint',        definition: 'Entwicklungsiteration (1–4 Wochen)' },
      { begriff: 'backlog',       definition: 'Priorisierte Aufgabenliste' },
      { begriff: 'scalability',   definition: 'Skalierbarkeit' },
      { begriff: 'pull request',  definition: 'Anfrage zum Zusammenführen von Code' },
      { begriff: 'debugging',     definition: 'Fehlersuche und -behebung' },
    ],
    erklaerung: '"Scalability" ist die Fähigkeit eines Systems, bei steigender Last mehr Ressourcen hinzuzufügen. Ein "Pull Request" ist eine Anfrage, Code-Änderungen in den Haupt-Branch zu mergen.'
  },
  // --- Zuordnung 3: Security & Network ---
  {
    typ: 'zuordnung' as const,
    frage: 'Match the security and network terms.',
    paare: [
      { begriff: 'firewall',      definition: 'Netzwerk-Sicherheitsbarriere' },
      { begriff: 'encryption',    definition: 'Verschlüsselung' },
      { begriff: 'authentication',definition: 'Identitätsprüfung / Anmeldung' },
      { begriff: 'patch',         definition: 'Software-Fehlerbehebung / Update' },
      { begriff: 'bandwidth',     definition: 'Übertragungskapazität (Netzwerk)' },
    ],
    erklaerung: '"Authentication" beweist die Identität (Wer bist du?), "Authorization" legt Rechte fest (Was darfst du?). Beide Begriffe tauchen häufig in AP2-Aufgaben auf.'
  },
  // --- MC: Vocabulary ---
  {
    typ: 'multiple-choice' as const,
    frage: 'What does "scalability" mean in an IT context?',
    optionen: [
      'The ability to increase or decrease resources based on demand',
      'The process of encrypting sensitive data',
      'The time it takes to respond to a user request',
      'The method of backing up data to a remote server'
    ],
    korrekteAntwort: 0,
    erklaerung: '"Scalability" ist die Fähigkeit eines Systems, sich an wachsende (oder schrumpfende) Anforderungen anzupassen – z.B. mehr Server hinzuzufügen bei hohem Traffic.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: 'Which term describes software that is outdated, often hard to maintain, but still in use?',
    optionen: ['Open source', 'Legacy software', 'Cloud-native', 'Agile software'],
    korrekteAntwort: 1,
    erklaerung: '"Legacy software" (Altsystem) bezeichnet veraltete Software, die noch in Betrieb ist. Sie ist oft schwer zu warten, da Dokumentation fehlt oder sie auf alten Technologien basiert.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: 'What does "REST" stand for in web development?',
    optionen: [
      'Remote Execution of Software Tasks',
      'Representational State Transfer',
      'Real-time Event Streaming Technology',
      'Reliable Encrypted Service Transport'
    ],
    korrekteAntwort: 1,
    erklaerung: 'REST steht für "Representational State Transfer". Eine REST-API ist ein standardisiertes Architekturmuster für die Kommunikation zwischen Client und Server über HTTP.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: 'What is a "pull request" in the context of version control (e.g. Git)?',
    optionen: [
      'A request to download files from a remote server',
      'A request to delete an outdated branch',
      'A request to merge code changes into another branch',
      'A request for additional server resources'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Ein Pull Request (oder Merge Request) ist eine Anfrage, Code-Änderungen aus einem Feature-Branch in den Haupt-Branch zu überführen. Dabei findet meist ein Code-Review statt.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: 'In networking, what does "latency" refer to?',
    optionen: [
      'The amount of data transferred per second',
      'The delay between sending and receiving data',
      'The number of simultaneous connections a server can handle',
      'The security protocol used to encrypt data'
    ],
    korrekteAntwort: 1,
    erklaerung: '"Latency" (Latenz) ist die Verzögerung, die entsteht, bis ein Datenpaket vom Sender zum Empfänger gelangt. Sie wird in Millisekunden gemessen und beeinflusst die wahrgenommene Reaktionsgeschwindigkeit.'
  },
  // --- Lückentext ---
  {
    typ: 'lueckentext' as const,
    frage: 'The process of finding and fixing errors in code is called ________.',
    antwort: 'debugging',
    erklaerung: '"Debugging" bezeichnet den systematischen Prozess, Fehler (Bugs) in einem Programm zu finden und zu beheben. Der Begriff leitet sich von einem echten Insekt (Bug) ab, der 1947 einen frühen Computer störte.'
  },
  {
    typ: 'lueckentext' as const,
    frage: 'A set of rules that allows different software applications to communicate with each other is called an ________.',
    antwort: 'API',
    erklaerung: 'API steht für "Application Programming Interface". Es ist eine Schnittstelle, die es verschiedenen Programmen ermöglicht, miteinander zu kommunizieren und Daten auszutauschen.'
  },
  {
    typ: 'lueckentext' as const,
    frage: 'In Scrum, the prioritized list of all features, bug fixes and improvements to be worked on is called the product ________.',
    antwort: 'backlog',
    erklaerung: 'Das Product Backlog ist die priorisierte Liste aller Anforderungen und Aufgaben in Scrum. Der Product Owner ist verantwortlich für die Pflege und Priorisierung des Backlogs.'
  },
  {
    typ: 'lueckentext' as const,
    frage: 'Data that has been converted into a coded format to prevent unauthorized access is said to be ________.',
    antwort: 'encrypted',
    erklaerung: 'Verschlüsselung (Encryption) wandelt Daten so um, dass sie nur von autorisierten Personen mit dem richtigen Schlüssel entschlüsselt werden können. Sie ist ein Kernkonzept der IT-Sicherheit.'
  },
  // --- Wahr/Falsch ---
  {
    typ: 'wahr-falsch' as const,
    aussage: 'Open source software means the source code is freely available and can be modified by anyone.',
    korrekt: true,
    erklaerung: 'Richtig. Open-Source-Software stellt den Quellcode öffentlich zur Verfügung. Lizenzen wie MIT, Apache oder GPL regeln, unter welchen Bedingungen die Software verändert und weiterverbreitet werden darf.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: 'A "server" is a computer that requests services from other computers on a network.',
    korrekt: false,
    erklaerung: 'Falsch. Ein Server *stellt* Dienste bereit – er ist der Anbieter. Ein Client *fordert* Dienste an. Das ist das klassische Client-Server-Modell.'
  },
  // --- Freitext: Übersetzung ---
  {
    typ: 'freitext' as const,
    frage: 'Translate the following German sentence into English:\n\n"Das System speichert alle Benutzerdaten verschlüsselt in der Datenbank. Der Zugriff ist nur nach erfolgreicher Authentifizierung möglich."',
    musterloesung: 'The system stores all user data encrypted in the database. Access is only possible after successful authentication.',
    erklaerung: 'Typische AP2-Formulierungen: "encrypted" = verschlüsselt, "authentication" = Authentifizierung. "is only possible after" ist die idiomatische Übersetzung von "ist nur ... möglich".',
    stichwoerter: ['encrypted', 'authentication', 'database', 'stores']
  },
  {
    typ: 'freitext' as const,
    frage: 'Write a short English description (3–4 sentences) explaining what an API is and give one practical example of its use.',
    musterloesung: 'An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests should be made and what data format is used for responses. For example, a weather app uses a weather API to request current temperature data from a remote server and display it to the user.',
    erklaerung: 'Wichtige Begriffe: "set of rules", "communicate", "request", "response". Ein praktisches Beispiel macht die Antwort vollständig und zeigt technisches Verständnis.',
    stichwoerter: ['API', 'communicate', 'request', 'response', 'example']
  }
];

// ---------------------------------------------------------------------------
// THEMA 2 – Reading Comprehension
// ---------------------------------------------------------------------------

const CLOUD_TEXT = textBox('Read the following text carefully',
  'Cloud computing has revolutionized the way businesses store and process data. Instead of maintaining physical servers on-premises, companies can now access computing resources through the internet from cloud service providers such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP).<br><br>' +
  'There are three main service models in cloud computing: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS provides virtualized computing resources over the internet. PaaS offers a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure. SaaS delivers software applications over the internet on a subscription basis.<br><br>' +
  'One of the key advantages of cloud computing is scalability. Businesses can easily scale their resources up or down based on demand, paying only for what they use. This pay-as-you-go model can significantly reduce IT costs compared to traditional on-premises solutions.<br><br>' +
  'However, cloud computing also presents challenges. Data security and privacy are major concerns, as sensitive information is stored on third-party servers. Additionally, cloud services require a reliable internet connection, and any outage can disrupt business operations.'
);

const AGILE_TEXT = textBox('Read the following text carefully',
  'Agile software development is an iterative approach to project management and software delivery that helps teams provide value to customers faster. Instead of a lengthy waterfall process, an agile team delivers work in small, consumable increments.<br><br>' +
  'Scrum is the most widely used agile framework. In Scrum, work is organized in sprints – typically two to four weeks long. At the beginning of each sprint, the team selects items from the product backlog – a prioritized list of features and requirements – to complete during that sprint.<br><br>' +
  'Key roles in Scrum include the Product Owner, who represents the stakeholders and is responsible for maximizing the value of the product; the Scrum Master, who acts as a facilitator and ensures the team follows Scrum practices; and the Development Team, which consists of professionals who build the product.<br><br>' +
  'Daily stand-up meetings, also called Daily Scrums, are short meetings (usually 15 minutes) where team members share what they did yesterday, what they plan to do today, and any blockers they are facing.'
);

const SECURITY_TEXT = textBox('Read the following text carefully',
  'Cybersecurity refers to the practice of protecting computer systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.<br><br>' +
  'One of the most common cyber threats is phishing. In a phishing attack, cybercriminals send fraudulent emails that appear to come from legitimate sources such as banks or well-known companies. The goal is to trick recipients into revealing sensitive information such as passwords or credit card numbers.<br><br>' +
  'Ransomware is another significant threat. Once ransomware infects a system, it encrypts the victim\'s files and demands a ransom payment – usually in cryptocurrency – in exchange for the decryption key.<br><br>' +
  'To protect against threats, organizations implement various measures: firewalls monitor and control incoming and outgoing network traffic; antivirus software detects and removes malicious programs; and multi-factor authentication (MFA) adds an extra layer of security by requiring users to provide two or more verification factors.'
);

const LESEVERSTEHEN_UEBUNGEN = [
  // --- Cloud Computing ---
  {
    typ: 'multiple-choice' as const,
    frage: CLOUD_TEXT + '<p class="font-semibold mt-3">According to the text, which of the following is <strong>NOT</strong> mentioned as a cloud service provider?</p>',
    optionen: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Oracle Cloud', 'Google Cloud Platform (GCP)'],
    korrekteAntwort: 2,
    erklaerung: 'Der Text nennt AWS, Microsoft Azure und Google Cloud Platform. Oracle Cloud wird nicht erwähnt. Diese "not mentioned"-Fragen sind typisch für AP2-Leseverstehen.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: CLOUD_TEXT + '<p class="font-semibold mt-3">According to the text, what does PaaS allow customers to do?</p>',
    optionen: [
      'Store data on virtual servers without an internet connection',
      'Develop and manage applications without building the underlying infrastructure',
      'Access software on a pay-per-use subscription basis',
      'Virtualize their own physical servers'
    ],
    korrekteAntwort: 1,
    erklaerung: 'PaaS (Platform as a Service) bietet eine Plattform, auf der Kunden Anwendungen entwickeln und betreiben können, ohne sich um die darunterliegende Infrastruktur kümmern zu müssen.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[Cloud Computing Text] According to the text, cloud computing always reduces IT costs compared to on-premises solutions.',
    korrekt: false,
    erklaerung: 'Der Text sagt "can significantly reduce IT costs" – kann, nicht muss. Diese Unterscheidung (can/may vs. always) ist in Leseverstehen-Aufgaben sehr wichtig.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[Cloud Computing Text] According to the text, data security is described as a potential challenge of cloud computing.',
    korrekt: true,
    erklaerung: 'Richtig. Der Text nennt "Data security and privacy are major concerns" explizit als Herausforderung der Cloud-Nutzung.'
  },
  {
    typ: 'lueckentext' as const,
    frage: '[Cloud Computing Text] The cloud pricing model where businesses pay only for the resources they actually consume is called the "pay-as-you-________" model.',
    antwort: 'go',
    erklaerung: '"Pay-as-you-go" ist das verbrauchsbasierte Abrechnungsmodell in der Cloud. Kunden zahlen nur für das, was sie tatsächlich nutzen – kein Vorab-Invest in Hardware.'
  },
  // --- Agile / Scrum ---
  {
    typ: 'multiple-choice' as const,
    frage: AGILE_TEXT + '<p class="font-semibold mt-3">According to the text, how long is a sprint typically?</p>',
    optionen: ['One week', 'Two to four weeks', 'One month', 'Three months'],
    korrekteAntwort: 1,
    erklaerung: 'Laut Text dauert ein Sprint "typically two to four weeks". Sprints sind zeitlich begrenzte Iterationen, in denen ein Team ein Increment des Produkts liefert.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[Agile Text] According to the text, the Scrum Master is responsible for maximizing the value of the product.',
    korrekt: false,
    erklaerung: 'Falsch. Laut Text ist der Product Owner für die Wertmaximierung verantwortlich. Der Scrum Master ist Facilitator und stellt sicher, dass das Team die Scrum-Praktiken einhält.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: AGILE_TEXT + '<p class="font-semibold mt-3">What is the product backlog described as in the text?</p>',
    optionen: [
      'A list of bugs and technical errors',
      'The sprint schedule for the next quarter',
      'A prioritized list of features and requirements',
      'The agenda for daily stand-up meetings'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Der Text beschreibt das Product Backlog als "a prioritized list of features and requirements". Es ist die zentrale Aufgabenliste in Scrum, priorisiert vom Product Owner.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[Agile Text] According to the text, Daily Scrum meetings typically last 30 minutes.',
    korrekt: false,
    erklaerung: 'Falsch. Der Text sagt "usually 15 minutes". Das Daily Scrum ist bewusst kurz gehalten, um den Fokus zu wahren. Es ist kein Problem-Lösungs-Meeting.'
  },
  {
    typ: 'lueckentext' as const,
    frage: '[Agile Text] In Scrum, the team delivers work in small increments within time-boxed periods called ________.',
    antwort: 'sprints',
    erklaerung: 'Sprints sind die zentralen Iterationen in Scrum. Jeder Sprint endet mit einem potenziell auslieferbaren Produkt-Increment. Die Länge wird zu Beginn festgelegt und bleibt für diesen Sprint konstant.'
  },
  // --- Cybersecurity ---
  {
    typ: 'multiple-choice' as const,
    frage: SECURITY_TEXT + '<p class="font-semibold mt-3">According to the text, what is the primary goal of a phishing attack?</p>',
    optionen: [
      'Destroying computer hardware permanently',
      'Intercepting all network traffic in real time',
      'Tricking users into revealing sensitive information',
      'Encrypting files and demanding a ransom'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Phishing zielt darauf ab, Nutzer durch gefälschte E-Mails oder Webseiten zur Preisgabe sensibler Daten zu verleiten. Passwörter, Kreditkartennummern oder Zugangsdaten sind typische Ziele.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[Cybersecurity Text] According to the text, ransomware demands payment exclusively in traditional currency such as euros or dollars.',
    korrekt: false,
    erklaerung: 'Falsch. Der Text sagt "usually in cryptocurrency". Kryptowährungen wie Bitcoin ermöglichen anonyme Zahlungen, was die Strafverfolgung erschwert.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: SECURITY_TEXT + '<p class="font-semibold mt-3">According to the text, what is the function of a firewall?</p>',
    optionen: [
      'Encrypting files and documents on the local hard drive',
      'Monitoring and controlling incoming and outgoing network traffic',
      'Detecting and removing malicious software from infected systems',
      'Creating encrypted backups of important data'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Eine Firewall überwacht und filtert den Netzwerkverkehr anhand definierter Regeln. Sie kann verdächtigen Datenverkehr blockieren und ist eine grundlegende Schutzmaßnahme.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[Cybersecurity Text] According to the text, multi-factor authentication requires users to provide at least three verification factors.',
    korrekt: false,
    erklaerung: 'Falsch. Der Text sagt "two or more verification factors" – mindestens zwei, nicht drei. MFA kombiniert typischerweise Wissen (Passwort) + Besitz (Smartphone) oder Wissen + Biometrie.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: SECURITY_TEXT + '<p class="font-semibold mt-3">Which type of attack encrypts a victim\'s files and demands payment for the decryption key?</p>',
    optionen: ['Phishing', 'SQL Injection', 'Ransomware', 'Man-in-the-Middle'],
    korrekteAntwort: 2,
    erklaerung: 'Ransomware (von "ransom" = Lösegeld) verschlüsselt Dateien und fordert eine Zahlung für den Entschlüsselungsschlüssel. Bekannte Beispiele: WannaCry (2017), NotPetya.'
  }
];

// ---------------------------------------------------------------------------
// THEMA 3 – AP2 Exam Tasks (authentische Prüfungsformate)
// ---------------------------------------------------------------------------

const DEVOPS_TEXT = textBox('AP2 Exam Task – Read the text and answer the questions',
  'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). The goal is to shorten the systems development life cycle and deliver high-quality software continuously. DevOps emphasizes collaboration and communication between development and operations teams, which traditionally worked in isolation.<br><br>' +
  'A key concept in DevOps is the CI/CD pipeline – Continuous Integration and Continuous Delivery (or Deployment). Continuous Integration means that developers frequently merge their code changes into a shared repository, where automated tests are run to detect errors early. Continuous Delivery ensures that code is always in a deployable state, while Continuous Deployment automatically deploys every change that passes all tests to production.<br><br>' +
  'Containerization, especially using Docker, plays an important role in DevOps. Containers package an application and all its dependencies together, ensuring it runs consistently across different environments. Kubernetes is often used to orchestrate and manage multiple containers at scale.<br><br>' +
  'Infrastructure as Code (IaC) is another important DevOps practice. Instead of manually configuring servers, IaC tools like Terraform or Ansible allow teams to define and manage infrastructure using configuration files, making it reproducible and version-controlled.'
);

const DATABASE_TEXT = textBox('AP2 Exam Task – Read the text and answer the questions',
  'A database management system (DBMS) is software that allows users to create, manage, and interact with databases. The most common type is the relational database management system (RDBMS), which organizes data in tables consisting of rows and columns. Examples include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server.<br><br>' +
  'In relational databases, tables are linked through relationships using primary and foreign keys. A primary key uniquely identifies each record in a table. A foreign key in one table refers to the primary key of another table, establishing a relationship between them.<br><br>' +
  'SQL (Structured Query Language) is the standard language for interacting with relational databases. The main categories of SQL commands are: Data Definition Language (DDL) for creating and modifying database structures (CREATE, ALTER, DROP); Data Manipulation Language (DML) for managing data (SELECT, INSERT, UPDATE, DELETE); and Data Control Language (DCL) for managing access permissions (GRANT, REVOKE).<br><br>' +
  'NoSQL databases, such as MongoDB or Redis, take a different approach. Instead of tables with fixed schemas, they use flexible formats such as documents, key-value pairs, or graphs. They are particularly useful for handling large volumes of unstructured data and can be easier to scale horizontally.'
);

const NETWORK_TEXT = textBox('AP2 Exam Task – Read the text and answer the questions',
  'The OSI model (Open Systems Interconnection model) is a conceptual framework used to describe how different network protocols interact. It divides network communication into seven distinct layers, each with a specific role. From bottom to top, the layers are: Physical, Data Link, Network, Transport, Session, Presentation, and Application.<br><br>' +
  'The Physical layer deals with the actual transmission of raw bits over a physical medium such as cables or radio waves. The Data Link layer handles error detection and correction within the same network segment and uses MAC addresses for device identification. The Network layer is responsible for routing packets between different networks using IP addresses – this is where routers operate.<br><br>' +
  'The Transport layer provides end-to-end communication services, ensuring data arrives completely and in the correct order. TCP (Transmission Control Protocol) at this layer provides reliable, connection-oriented communication, while UDP (User Datagram Protocol) offers faster but connectionless transmission. Above this, the Session, Presentation, and Application layers handle session management, data formatting, and application-specific protocols like HTTP, SMTP, and FTP.<br><br>' +
  'Understanding the OSI model helps network engineers troubleshoot connectivity issues by isolating which layer is causing a problem.'
);

const PRUEFUNG_UEBUNGEN = [
  // --- DevOps Text ---
  {
    typ: 'multiple-choice' as const,
    frage: DEVOPS_TEXT + '<p class="font-semibold mt-3">According to the text, what does "CI" stand for in the context of DevOps?</p>',
    optionen: ['Containerized Infrastructure', 'Continuous Integration', 'Code Inspection', 'Cloud Implementation'],
    korrekteAntwort: 1,
    erklaerung: 'CI steht für "Continuous Integration". Entwickler integrieren ihre Codeänderungen häufig in ein gemeinsames Repository, wo automatische Tests ausgeführt werden, um Fehler früh zu erkennen.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[DevOps Text] According to the text, Continuous Deployment automatically deploys every change that passes all tests to the production environment.',
    korrekt: true,
    erklaerung: 'Richtig. Continuous Deployment geht einen Schritt weiter als Continuous Delivery: Jede Änderung, die alle Tests besteht, wird automatisch in die Produktionsumgebung deployed – ohne manuellen Eingriff.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: DEVOPS_TEXT + '<p class="font-semibold mt-3">What is the main benefit of containerization (e.g. using Docker) according to the text?</p>',
    optionen: [
      'It replaces the need for a CI/CD pipeline',
      'It ensures the application runs consistently across different environments',
      'It automatically manages and scales multiple servers',
      'It allows teams to define infrastructure using configuration files'
    ],
    korrekteAntwort: 1,
    erklaerung: 'Docker-Container paketieren eine Anwendung mit all ihren Abhängigkeiten, sodass sie in jeder Umgebung identisch läuft – "works on my machine"-Probleme gehören der Vergangenheit an.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[DevOps Text] According to the text, Kubernetes is used to write the source code of containerized applications.',
    korrekt: false,
    erklaerung: 'Falsch. Kubernetes wird zum Orchestrieren und Verwalten mehrerer Container verwendet – es ist kein Entwicklungswerkzeug. Es übernimmt Aufgaben wie Lastverteilung, automatisches Neustarten ausgefallener Container und Skalierung.'
  },
  {
    typ: 'freitext' as const,
    frage: '[DevOps Exam Task] In your own words, explain the difference between "Continuous Delivery" and "Continuous Deployment" as described in the text. Answer in English (3–5 sentences).',
    musterloesung: 'Continuous Delivery ensures that code is always in a deployable state, meaning it could be released to production at any time. However, the actual deployment still requires a manual decision or trigger. Continuous Deployment goes one step further: every change that passes all automated tests is automatically deployed to production without any manual intervention. In short, Continuous Delivery gives teams the option to deploy quickly, while Continuous Deployment makes deployment fully automatic.',
    erklaerung: 'Der Schlüsselunterschied: Continuous Delivery = jederzeit bereit zum Deployment (aber manueller Trigger). Continuous Deployment = vollautomatisch ohne manuellen Schritt. Diese Unterscheidung ist prüfungsrelevant.',
    stichwoerter: ['Continuous Delivery', 'Continuous Deployment', 'automatic', 'manual', 'production']
  },
  // --- Database Text ---
  {
    typ: 'multiple-choice' as const,
    frage: DATABASE_TEXT + '<p class="font-semibold mt-3">According to the text, what is the function of a primary key in a relational database?</p>',
    optionen: [
      'It links a table to another table through a reference',
      'It encrypts sensitive data within a table',
      'It uniquely identifies each record in a table',
      'It defines the data types for each column in a table'
    ],
    korrekteAntwort: 2,
    erklaerung: 'Ein Primary Key (Primärschlüssel) identifiziert jeden Datensatz eindeutig. Er muss eindeutig (unique) und darf nicht NULL sein. Er ist Grundlage für Beziehungen zwischen Tabellen über Foreign Keys.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: DATABASE_TEXT + '<p class="font-semibold mt-3">Which SQL command category is used to manage access permissions to database objects?</p>',
    optionen: [
      'DDL (Data Definition Language)',
      'DML (Data Manipulation Language)',
      'DCL (Data Control Language)',
      'DQL (Data Query Language)'
    ],
    korrekteAntwort: 2,
    erklaerung: 'DCL (Data Control Language) enthält GRANT und REVOKE – Befehle zum Vergeben und Entziehen von Datenbankberechtigungen. DDL definiert Strukturen, DML manipuliert Daten.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[Database Text] According to the text, NoSQL databases always use tables with fixed schemas, similar to relational databases.',
    korrekt: false,
    erklaerung: 'Falsch. Der Text beschreibt NoSQL-Datenbanken als Alternative, die flexible Formate (Dokumente, Key-Value-Paare, Graphen) statt fixer Tabellenschemata verwendet.'
  },
  // --- Network / OSI Text ---
  {
    typ: 'multiple-choice' as const,
    frage: NETWORK_TEXT + '<p class="font-semibold mt-3">At which OSI layer do routers primarily operate, according to the text?</p>',
    optionen: ['Layer 1 – Physical', 'Layer 2 – Data Link', 'Layer 3 – Network', 'Layer 4 – Transport'],
    korrekteAntwort: 2,
    erklaerung: 'Laut Text operiert der Network Layer (Schicht 3) mit IP-Adressen und ist für das Routing zwischen verschiedenen Netzwerken verantwortlich – hier arbeiten Router. Switches arbeiten hingegen auf Layer 2.'
  },
  {
    typ: 'multiple-choice' as const,
    frage: NETWORK_TEXT + '<p class="font-semibold mt-3">According to the text, what is the key difference between TCP and UDP at the Transport layer?</p>',
    optionen: [
      'TCP uses IP addresses; UDP uses MAC addresses',
      'TCP is reliable and connection-oriented; UDP is faster but connectionless',
      'TCP is used for video streaming; UDP is used for web browsing',
      'TCP operates at Layer 3; UDP operates at Layer 5'
    ],
    korrekteAntwort: 1,
    erklaerung: 'TCP garantiert die Lieferung (connection-oriented, Fehlerkorrektur, Reihenfolge). UDP ist schneller aber unsicher (connectionless) – ideal für Streaming oder VoIP, wo Geschwindigkeit wichtiger als Vollständigkeit ist.'
  },
  {
    typ: 'wahr-falsch' as const,
    aussage: '[OSI Text] According to the text, the Data Link layer uses IP addresses to identify devices.',
    korrekt: false,
    erklaerung: 'Falsch. Der Data Link Layer verwendet MAC-Adressen. IP-Adressen werden auf dem Network Layer (Layer 3) verwendet. MAC-Adressen sind hardware-fest eingebrannt, IP-Adressen werden zugewiesen.'
  },
  {
    typ: 'freitext' as const,
    frage: '[OSI Exam Task] A junior developer says: "TCP and UDP both work the same way at the Transport layer – they just transfer data." How would you correct this statement? Write your answer in English (3–4 sentences).',
    musterloesung: 'That statement is not entirely accurate. TCP (Transmission Control Protocol) is a connection-oriented protocol that guarantees reliable data delivery: it checks that all packets arrive completely and in the correct order, and retransmits any lost packets. UDP (User Datagram Protocol), on the other hand, is connectionless and does not guarantee delivery or order, but is significantly faster. UDP is therefore preferred for real-time applications such as video streaming, online gaming, or VoIP calls, where speed is more important than perfect reliability.',
    erklaerung: 'Dieser Freitext-Typ ist typisch für AP2-Prüfungen: eine falsche Aussage korrigieren und begründen. Schlüsselpunkte: TCP = reliable, connection-oriented; UDP = fast, connectionless. Jeweils mit Anwendungsbeispiel.',
    stichwoerter: ['TCP', 'UDP', 'reliable', 'connectionless', 'streaming']
  }
];

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export const ENGLISCH_UEBUNGEN: UebungsSet[] = [
  { themaId: 'englisch-vokabular',     uebungen: VOKABULAR_UEBUNGEN },
  { themaId: 'englisch-leseverstehen', uebungen: LESEVERSTEHEN_UEBUNGEN },
  { themaId: 'englisch-pruefung',      uebungen: PRUEFUNG_UEBUNGEN }
];
