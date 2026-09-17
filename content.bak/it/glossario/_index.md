---
title: Glossario
slug: glossario
translationKey: glossary
weight: 70
type: docs
---

{{<table_of_contents>}}
<!-- Leerzeile erzeugt Abstand -->

&nbsp;

Il glossario I14Y contiene tutti i termini necessari alla comprensione e all'utilizzo della piattaforma di interoperabilità. I termini che  hanno una voce nella banca dati terminologica TERMDAT dell'amministrazione federale sono collegati.

## Ambiente di collaudo
L’ambiente di collaudo (noto anche come ambiente per il test di accettazione o User Acceptance Testing,UAT) consente di testare nuovi software in condizioni realistiche prima del rilascio. Nel caso della piattaforma I14Y vengono testate nuove funzioni prima del rilascio.

## Applicazione
Software per l’esecuzione di determinate funzioni di elaborazione sviluppato per un impiego specifico. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/70368)

## Armonizzazione dei dati
L’armonizzazione dei dati è il processo di conversione di dati provenienti da fonti diverse in una struttura, una terminologia e un significato uniformi, in modo che siano coerenti, comparabili e utilizzabili collettivamente. L’obiettivo è quello di superare le differenze semantiche e strutturali per migliorare l’interoperabilità e la qualità dei dati.

## Catalogo dati
Inventario dettagliato di tutte le risorse di dati in un'organizzazione. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/64371)

## Catalogo di metadati
Inventario dettagliato di tutte le collezioni di dati di un’organizzazione che figurano in un elenco digitale. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/71450)

## Catalogo di metadati
Inventario dettagliato di tutte le collezioni di dati di un’organizzazione che figurano in un elenco digitale. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/71450)

## Ciclo di vita dei dati
Il ciclo di vita dei dati descrive le varie fasi che i dati attraversano dalla loro creazione alla loro cancellazione. Le fasi tipiche sono: raccolta, conservazione, utilizzo, inoltro, archiviazione e cancellazione. Ogni fase richiede specifiche misure tecniche, organizzative e legali, in particolare per quanto riguarda la protezione dei dati, la qualità e la sicurezza.

## Concetto degli elementi di dati (concetto)
Il concetto degli elementi di dati descrive le informazioni contenute nell’elemento dati in modo chiaro e completo. Un concetto può essere un numero, una stringa, una data o una lista di codici con valori predefiniti. Sulla piattaforma di interoperabilità I14Y per la descrizione dei concetti viene utilizzato lo standard ISO 11179-1:2023. Al capitolo [Konzepte erfassen](/handbook/de/publikation/konzepte/) sono disponibili (attualmente solo in tedesco) le istruzioni dettagliate per la registrazione di un concetto .

## Convalida
La convalida è un processo. Con la convalida viene controllato se un determinato contenuto debba essere incluso in un sistema o in un elenco. Nel caso di una collezione di dati, prima della pubblicazione sulla piattaforma I14Y vengono controllati il formato dei dati, l’integrità dei dati, gli intervalli di valori e le nomenclature. La convalida viene effettuata dagli _amministratori dei dati a livello locale_ o dal _servizio di interoperabilità_.

## Core Public Service Vocabulary Application Profile (CPSV-AP)
Il [Core Public Service Vocabulary Application Profile](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile/about) (CPSV-AP) è un modello di dati che descrive i servizi pubblici in modo strutturato e leggibile a macchina, standardizzando la semantica.

## Core vocabularies (vocabolari di base)
I vocabolari di base sono modelli di dati semplificati, riutilizzabili ed ampliabili che catturano le caratteristiche fondamentali di un’entità, come una persona o un’organizzazione pubblica, in modo neutrale rispetto al contesto. 
Esempi:

• [EU Core Vocabularies](https://interoperable-europe.ec.europa.eu/collection/semic-support-centre/core-vocabularies) 

• [Dublin Core Metadata](https://www.dublincore.org/)

## Data Catalog Vocabulary (DCAT)
Il _DCAT_ è un vocabolario standardizzato per descrivere collezioni di dati e servizi. Consente la strutturazione uniforme delle informazioni, così da migliorare reperibilità, leggibilità e archiviazione dei dati. Inoltre, semplifica lo scambio di dati su Internet. DCAT si basa sul Resource Description Framework (RDF) ed è gestito dal World Wide Web Consortium (W3C). Ulteriori informazioni sono disponibili su [questo link]( https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/dcat-ap_it.html).

Lo standard può essere personalizzato utilizzando profili di applicazione specifici. Il profilo di applicazione svizzero [DCAT-AP CH](https://www.dcat-ap.ch/) si basa sul profilo dell’Unione europea e tiene conto delle specificità dei data room svizzeri. È stato sviluppato dal gruppo di specialisti Open Government Data dell’organismo di standardizzazione [eCH](/handbook/it/glossario/#ech).

Il vocabolario DCAT è composto da _classi_ e _proprietà_. Le _classi_ descrivono concetti sovraordinati come organizzazioni, persone, collezioni di dati o siti web. Ogni classe ha proprietà che forniscono ulteriori dettagli, ad esempio titoli, parole chiave o indirizzi Internet.

Alcuni termini possono essere classi o elementi. Nel vocabolario DCAT viene fatta una distinzione grafica tra classi e proprietà: una classe inizia con una lettera maiuscola, mentre una proprietà inizia con una lettera minuscola. Ad esempio, la notazione della classe relativa all’editore figurerà come segue `dcat:Publisher`. Se invece si vuole descrivere chi ha pubblicato una voce riguardante una collezione di dati, si usa la minuscola: `dcat:publisher`.

DCAT si articola in quattro classi principali: la classe _Catalogo_ (`dcat:Catalog`) descrive una collezione che può contenere set di dati o interfacce elettroniche (API). La classe _Set di dati_ (`dcat:Dataset`) contiene informazioni sul singolo set di dati e la classe _Data service_ (`dcat:Dataservice`) sulle interfacce elettroniche. La classe _Distribuzione_ (`dcat:Distribution`) descrive una rappresentazione specifica del set di dati, ad esempio un file in formato CVS, se si tratta di un’esportazione.

La piattaforma I14Y contiene anche la descrizione di servizi delle autorità (public services). Il DCAT è stato quindi esteso per includere la classe _Public Service_ (`dcat:Publicservice`). Per queste voci si utilizza il [Core Public Service Vocabulary Application Profile]( https://interoperable-europe.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile) dell’Unione europea.

## Data custodian (custode locale dei dati)
Il custode dei dati (data custodian) è responsabile dell’archiviazione e della trasmissione sicura dei dati; inoltre deve metterli a disposizione di tutti gli utenti autorizzati in modo adeguato, conformemente ai requisiti definiti congiuntamente. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502924)

## Data owner (proprietario dei dati)
Persona privata o organo federale che, singolarmente o insieme ad altri, determina lo scopo e i mezzi del trattamento. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502925)

## Data producer (elaboratore di dati)
Persona o sistema autorizzato dal proprietario dei dati (data owner) a creare, modificare e/o cancellare i dati per conto del servizio responsabile del trattamento dei dati. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502926)

## Data provider (fornitore di dati)
Organizzazione che mette a disposizione dei dati all'interno di uno o più spazi di dati. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/503084)

## Data repository
Un repository è un luogo di archiviazione di dati strutturati, programmi o metadati a cui possono accedere più utenti o sistemi.

## Data steward (amministratore dei dati)
Nel modello di data stewardship, gli amministratori dei dati (data steward) coordinano e promuovono l’utilizzo multiplo dei dati all’interno di un Ufficio federale. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502921)

## Database a grafo (Graph database)
L’unico scopo di un database a grafo è quello di creare e manipolare grafi. I grafi contengono vertici o nodi, spigoli e proprietà, tutti utilizzati per rappresentare e memorizzare i dati in un modo che i database relazionali non sono in grado di fare.

## Dati di base 
I dati di base sono informazioni di fondo assolutamente indispensabili per l’amministrazione pubblica. È possibile descrivere persone, imprese, ma anche vari oggetti come edifici o veicoli. Per ognuno di questi oggetti deve essere disponibile un catalogo esaustivo di caratteristiche (attributi). I dati di base sono dati contestuali. Il loro volume rimane relativamente costante nel tempo e cambiano piuttosto di rado. Una forma speciale di dati di base è rappresentata dai cosiddetti dati di riferimento, come i codici degli aeroporti o dei Paesi. Vengono utilizzati per classificare i dati di base. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/379368)

## Dati di riferimento
Elenchi di valori o registri predefiniti che sono utilizzati per la descrizione e la categorizzazione. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502771)

## Dati liberamente accessibili (open data) 
I dati liberamente accessibili (dati aperti) sono dati che possono essere utilizzati, elaborati, analizzati e trasmessi liberamente, senza particolari restrizioni legali, finanziarie o tecniche. Da un punto di vista legale, questi dati devono poter essere utilizzati ed elaborati gratuitamente. Da un punto di vista tecnico, i dati aperti devono poter essere elaborati da un computer. La pubblicazione di dati come dati aperti deve garantire il rispetto delle disposizioni in materia di protezione dei dati, protezione delle informazioni e diritto d’autore, nonché dei segreti commerciali. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/387377)

## Dati personali
Informazioni concernenti una persona fisica identificata o identificabile. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/52451)

## Dati pubblici
I dati pubblici sono dati raccolti, creati, gestiti, trattati e archiviati nel quadro di un mandato legale. Per i suddetti dati pubblici si intendono anche dati strutturati e dati non strutturati. Sulla piattaforma I14Y i singoli servizi amministrativi possono creare inventari dei propri dati. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/387376)

## Dati statistici
I dati statistici sono tutti i dati raccolti o trasmessi a fini statistici, in particolare sulla base della legge federale sulla statistica, e che sono quindi soggetti al segreto statistico.

## Distribuzione DCAT
Materializzazione fisica o rappresentazione di un set di dati in un formato specifico. Una distribuzione (↔ risorsa) è una particolare rappresentazione di un set di dati (link ai dati reali).

## eCH 
L’associazione di pubblica utilità eCH promuove, sviluppa e adotta standard nel campo dell’e-government. Nei numerosi gruppi di lavoro di eCH sono coinvolti rappresentanti sia della Confederazione e dei Cantoni sia del settore privato e del mondo accademico. eCH è il più importante organismo di standardizzazione nel campo dell’e-government in Svizzera. Ulteriori informazioni e i documenti relativi agli standard adottati sono disponibili sul sito web [ech.ch](https://ech.ch).

## Elemento di dati
L’elemento di dati è la più piccola unità descrittiva di un set di dati. Spesso l’elemento di dati viene denominato anche attributo, variabile (definita) o colonna. L’elemento di dati contiene i singoli valori, ad esempio il numero AVS, il numero di abitazioni vuote o i dati delle misurazioni della temperatura dell’acqua. Ogni elemento di dati si riferisce a un concetto di elementi dei dati. Si veda la sezione relativa all’elemento di dati nel capitolo Ruoli e processi.

## Enterprise identity management (EIAM) 
I sistemi di Enterprise Identity Management (EIAM) sono utilizzati per gestire e proteggere le identità e i diritti di accesso all’interno di un’impresa o di un’organizzazione. Pertanto, garantiscono che solo le persone previste possano utilizzare una determinata piattaforma o applicazione Internet. Regolano inoltre i diritti di lettura, scrittura e amministrazione. La piattaforma I14Y utilizza il sistema EIAM dell’Amministrazione federale. Ulteriori informazioni sono riassunte nella sezione [Gestione account](/handbook/it/piattaforma/accounts/).

## Formato dei dati
Modo in cui sono strutturati i dati per poter essere elaborati e interpretati da un programma. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502964)

## Geocat.ch
[Geocat](https://geocat.ch) è un catalogo di metadati per le geoinformazioni in Svizzera e nel Principato del Liechtenstein. Gli uffici federali, i Cantoni, i Comuni, gli istituti di ricerca e le imprese lo utilizzano per registrare le informazioni sui loro geodati, ossia i set di dati con un forte connotazione con la geografia, le mappe e le immagini aeree. Il servizio è gestito dall’Ufficio federale di topografia, swisstopo. Ulteriori informazioni sono disponibili nella sezione dedicata alle [varie piattaforme](handbook/it/introduzione/piattaformi/).

## Geodati di base
I geodati di base sono geodati fondati su un atto normativo federale, cantonale o comunale come ad esempio la misurazione ufficiale, il piano delle zone edificabili o l’inventario delle torbiere alte. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/71443)

## Gestione dei dati a livello nazionale (NaDB)
Il programma Gestione dei dati a livello nazionale ha lo scopo di semplificare la gestione dei dati degli enti pubblici e renderla più efficiente attraverso l’utilizzo multiplo dei dati. È stato avviato dal Consiglio federale e lanciato nell’ottobre 2019. Sono coinvolti nel programma tutti i dipartimenti dell’Amministrazione federale, la Cancelleria federale, tutti i settori del sistema statistico svizzero, rappresentanti dei Cantoni, i partner sociali e altre organizzazioni e associazioni private. L’attuazione del programma è di competenza dell’Ufficio federale di statistica. Lo strumento tecnico centrale è la piattaforma I14Y. Ulteriori informazioni sono disponibili sul [sito del programma](https://www.bfs.admin.ch/bfs/it/home/nadb/nadb.html). [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/481315)

## Gestione di dati
Pratica che consente di raccogliere, conservare e utilizzare i dati in modo sicuro, efficiente ed economico. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502636)

## Governo dei dati
Insieme di regole, poteri decisionali e obblighi di rendiconto per i processi relativi alle informazioni, eseguiti secondo modelli che stabiliscono chi è autorizzato ad eseguire determinate azioni quando, con quali informazioni e quali metodi. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/387641)

## Harvesting
Per harvesting si intende la raccolta automatica di dati, più precisamente di metadati nel caso di opendata.swiss. Il modulo di harvesting consente di importare automaticamente i cataloghi dei set di dati messi a disposizione da altri enti.

Il fornitore di dati mette a disposizione un file RDF su un endpoint (URL), quindi registra questo endpoint su [opendata.swiss](https://opendata.swiss/it), che dovrà essere configurato in modo da poterlo raccogliere automaticamente.

## Identificativo
Un identificativo è un attributo definito o una combinazione di attributi, che permette di identificare singoli elementi nei dati. All’interno di un insieme di dati un identificatore deve essere univoco, ovvero deve permettere di risalire senza possibilità di equivoci all’elemento identificato, e può essere utilizzato una sola volta.

## Interfaccia elettronica (API)
Un’interfaccia elettronica consente a diversi sistemi e applicazioni di comunicare tra loro, anche laddove i sistemi non siano direttamente collegati tra loro. Ad esempio, le interfacce elettroniche possono essere utilizzate per recuperare informazioni da una collezione di dati senza doverla scaricare per intero. Molto spesso sono impiegate nell’ambito del moderno sviluppo del software per collegare singoli sottosistemi o per ottenere dati da un altro sistema. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/500882)

## Interoperabilità
L’interoperabilità è la capacità di sistemi indipendenti ed eterogenei di lavorare insieme il più possibile senza soluzione di continuità, così da potersi scambiare informazioni in modo efficiente senza che sia necessario prendere accordi per i singoli casi. L’European Interoperability Framework (quadro europeo di interoperabilità, EIF) distingue quattro livelli: L’interoperabilità giuridica garantisce che vi sia una base giuridica sufficiente per la cooperazione. L’interoperabilità organizzativa descrive il modo in cui i processi operativi sono coordinati tra loro. Con l’interoperabilità semantica si persegue l’obiettivo di garantire che durante lo scambio di informazioni la forma dei dati non debba essere modificata manualmente. L’interoperabilità tecnica descrive tutti gli aspetti tecnici dello scambio di informazioni, include quindi le specifiche di interfaccia e i protocolli di trasmissione. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/71434)

## Linked data (dati collegati)  
I dati collegati sono dati che possono essere direttamente collegati tra loro grazie a un identificatore (_Uniform Resource Identifier_). Se i dati sono liberamente accessibili, si parla anche di dati aperti collegati (Linked Open Data). I dati possono essere sparsi. Possono essere recuperati tramite il normale protocollo di controllo trasmissione Internet. Grazie alla struttura standardizzata, possono essere utilizzati come un’unica grande banca dati. A tale scopo viene utilizzato _SPARQL_, il linguaggio di interrogazione dei dati. Linked Open Data è un concetto sviluppato da Tim Berners-Lee, l’inventore del World Wide Web. L’obiettivo è la creazione di un web semantico che semplifichi la comunicazione automatica tra dispositivi grazie a offerte di dati strutturati e collegabili. La piattaforma LINDAS è il più importante provider di dati collegati nel settore delle amministrazioni pubbliche in Svizzera. Ulteriori informazioni sono disponibili nella [sezione dedicata a LINDAS](/handbook/it/introduzione/piattaformi/#lindas). [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/503121)

## Lista di codici
Una lista di codici è un elenco strutturato di valori (codici) utilizzati in un contesto specifico. Può essere aperta (ampliabile) o chiusa (non ampliabile) e può essere standardizzata (p. es. ISO 3166 per i codici dei Paesi) o definita in base a criteri specifici all’organizzazione.

## Metadati di base
Secondo Eurostat, i metadati di base (talvolta chiamati metadati esplicativi) descrivono il contenuto e la qualità dei dati statistici dal punto di vista semantico. Includono testi esplicativi sul contesto dei dati statistici, sulle metodologie di raccolta e aggregazione dei dati e sulle caratteristiche di qualità e diffusione.

## Metadati
I metadati sono dati che definiscono e descrivono altri dati. Contengono informazioni sulla semantica di una collezione di dati, ovvero il significato, il contenuto e la qualità. Descrivono anche la sintassi (la forma e la struttura) degli attributi (variabili) utilizzati. Per garantire che i dati siano registrati in modo uniforme, è possibile → inserire nomenclature e collegare registri, come l’elenco dei Comuni, la nomenclatura svizzera delle professioni (ISCO) o le attività economiche (NOGA). Questi dati diventano così metadati. Tali metadati possono essere gestiti, pubblicati e scambiati sulla piattaforma I14Y.

## Modello dei dati
Rappresentazione astratta e schematica della struttura e dell'organizzazione dei dati contenuta in una base di dati. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502865)

## Nomenclatura
Una nomenclatura è una collezione di denominazioni provenienti da un ambito tematico o applicativo specifico, vincolante per determinati settori. Esempi di nomenclature sono l’elenco dei Comuni o un elenco dei Paesi. Una nomenclatura contiene codici e parti di testo descrittivo, eventualmente in diverse lingue. [Alla definizione in TERMDAT](https://www.termdat.bk.admin.ch/entry/94036)

## Oggetto di dati
Un oggetto di dati è un’unità logica di dati chiaramente definita che può essere descritta, scambiata o utilizzata digitalmente. Oggetti di dati, set di dati, API e servizi digitali delle autorità sono descritti in modo standardizzato su I14Y, in modo da poter essere reperiti e utilizzati più volte.

## Ontologia
Un’ontologia è una rappresentazione formalmente definita della conoscenza, nella quale sono descritti concetti e relazioni in un determinato ambito. È come un vocabolario o un insieme di regole che consente un’intesa comune riguardo a un particolare settore tematico. Le ontologie sono utilizzate per consentire lo scambio e il riutilizzo della conoscenza e per facilitare la comunicazione e le argomentazioni tra persone o sistemi informatici.

## Organizzazione internazionale per la normazione (ISO)
L’Organizzazione internazionale per la normazione (ISO) è un’associazione di organizzazioni di normazione. Sviluppa norme internazionali in numerosi ambiti, ad eccezione dell’ingegneria elettrotecnica e della tecnologia delle comunicazioni. L’ISO è un’associazione di diritto svizzero con sede a Ginevra. I progetti di standardizzazione nazionale nel settore dell’e-government sono solitamente promossi dall’associazione [→ eCH association](#ech).

## Principi FAIR
I principi FAIR prevedono che i dati siano facili da trovare _(**F**indable)_, accessibili _(**A**ccessible)_, interoperabili _(**I**nteroperable)_ e riutilizzabili _(**R**eusable)_. I dati devono essere facilmente reperibili sia dall’uomo che dai sistemi informatici. Devono essere accessibili tramite un protocollo di comunicazione standard aperto, gratuito e universalmente implementabile. Grazie a una licenza unica, risulta evidente come possono essere utilizzati i dati. L’interoperabilità è assicurata sia in base alla semantica che sintassi. L’interoperabilità richiede l’utilizzo di metadati contestuali precisi, aderisce ai principali standard internazionali in termini di contenuto e formato, e utilizza un vocabolario conforme ai principi FAIR. L’utilizzo multiplo gratuito, condizionato o a pagamento dei dati è facilitato da standard comuni. Informazioni di base sui principi FAIR sono riportate in questo [articolo di Nature](https://www.nature.com/articles/sdata201618).

## Principio once-only
L’obiettivo del principio once-only è quello di garantire che i cittadini e le imprese debbano comunicare determinate informazioni alle autorità una sola volta e che tali informazioni, se così esplicitamente previsto, siano poi scambiate tra le autorità. Il principio once-only è volto a ridurre l’onere di lavoro, sia a carico dei cittadini sia delle imprese come pure all’interno dell’amministrazione. L’attuazione del principio once-only è un obiettivo chiave del programma gestione dei dati a livello nazionale (NaDB). [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/480493)

## Protezione dei dati
Insieme di provvedimenti giuridici che proteggono la personalità e i diritti fondamentali delle persone fisiche i cui dati sono oggetto di trattamento da parte di persone private o di organi federali. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/52411)

## Quadro europeo di interoperabilità (EIF)
Il[Quadro europeo di interoperabilità](https://joinup.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail) mira a facilitare l’interazione transfrontaliera e intersettoriale tra le amministrazioni europee, a sostenere la loro cooperazione e a consentire la fornitura di servizi elettronici.

## Resource Description Framework (RDF)
Il RDF è il linguaggio di base del web semantico e consente di rappresentare i metadati sotto forma di triplette (soggetto-predicato-oggetto).

## Servizio delle autorità
Sequenza obbligatoria o volontaria di attività che vengono o possono essere svolte da un'autorità o per suo conto e che derivano dalla politica amministrativa. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/520805)

## Servizio di interoperabilità (IOS)
Il servizio di interoperabilità (IOS) dell’Ufficio federale di statistica mette a disposizione gli strumenti per l’armonizzazione, la standardizzazione e l’utilizzo multiplo dei dati. Quale strumento tecnico, sviluppa e mantiene la piattaforma di interoperabilità I14Y. Il servizio di interoperabilità coordina la standardizzazione e l’armonizzazione dei dati all’interno dei singoli settori tematici (ad es. energia, salute, mobilità, agricoltura). In tale contesto, l’UST svolge i compiti di _amministratore svizzero dei dati_.

## Set di dati
Un set di dati è una collezione strutturata di dati che si riferisce a un tema o domanda specifica ed è organizzata in una forma definita. Sulla piattaforma di interoperabilità I14Y, un set di dati è descritto conformemente a DCAT-CH e contiene almeno una distribuzione o può essere ottenuto tramite un’API. Ulteriori informazioni sulla struttura di un set di dati su I14Y sono disponibili nella sezione [Modello di informazioni](/handbook/it/gouvernance/modello-di-informazioni/). [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/501320)

## SPARQL
Linguaggio di interrogazione standard per il recupero e la manipolazione dei dati rappresentanti nel formato RDF. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/503123)

## Standard di dati
Uno standard di dati è una specifica di metadati strutturali che descrive o definisce altri dati [ISO111179]. I metadati strutturali indicano come sono assemblati gli oggetti composti.

I due tipi principali di standard di dati sono i seguenti: i modelli di dati (compresi i vocabolari di base) e dati di base (compresi i concetti).

## Statistical Data and Metadata EXchange (SDMX) 
Lo SDMX è un’iniziativa volta a standardizzare lo scambio di dati tra le organizzazioni internazionali e i loro Paesi membri. È stato ampiamente sviluppato dalla Banca mondiale e dall’Unione europea. SDMX definisce formati di dati standardizzati, standard di metadati e metodi per il trasferimento dei dati. Ulteriori informazioni: sdmx.org. Gli elenchi di codici in formato SDMX possono essere letti sulla piattaforma I14Y (v. [Erfassen von Konzepten (per il momento solo in tedesco)](/handbook/de/publikation/konzepte/)).

## Struttura dati
Unità usata per organizzare un insieme di dati all'interno della memoria di un computer. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/502986)

## Swagger
[Swagger](https://swagger.io/) è una collezione di strumenti liberamente accessibili per la pubblicazione e l’utilizzo di interfacce elettroniche (API). Sulla piattaforma I14Y si utilizzano in particolare le opzioni di documentazione: Grazie all’interfaccia web di Swagger, è evidente cosa sia possibile fare con la relativa API. Inoltre, le opzioni di interrogazione possono essere testate direttamente in tutti gli endpoint. Ulteriori informazioni sono disponibili sotto  [Elektronische Schnittstelle (API) abrufen](/handbook/de/metadaten_abrufen/api) (disponibile attualmente solo in tedesco).

## Tipologia di dati
La tipologia di dati classifica un elemento di dati. Specifica quali sono i valori che può contenere. La tipologia di dati garantisce che i dati vengano elaborati e interpretati correttamente da un programma. Ecco alcuni esempi di tipologie di dati: numeri interi (engl. integer), numeri in virgola mobile (floating point), valori booleani (boolean) o stringhe (string). Sulla piattaforma I14Y il concetto definisce la tipologia di dati [(v. la sezione relativa al concetto](/handbook/it/gouvernance/modello-di-informazioni/#concetto). [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/516244)

## Triple
La più piccola struttura di descrizione delle risorse nel modello RDF. Nel modello RDF, una dichiarazione è rappresentata da tre elementi: due vertici collegati da uno spigolo che riflettono il soggetto, il predicato e il complemento oggetto di una frase. Per convenzione, RDF propone di rappresentare i triple sotto forma di grafo.

## Triplestore
Un database appositamente progettato per memorizzare e recuperare dati RDF. Come un database relazionale, un triplestore memorizza i dati e li recupera utilizzando un linguaggio di interrogazione. Ma a differenza di un database relazionale, un triplestore memorizza solo un tipo di dati: il triple (tripletta: entità di dati composte da soggetto-predicato-oggetto). Non necessita quindi di una fase di avvio per registrare nuovi dati. In altre parole, non deve creare tabelle come in un database relazionale. Inoltre, un triplestore è ottimizzato per memorizzare un gran numero di triple e per recuperarli utilizzando il linguaggio di interrogazione SPARQL (Wikipedia).

## Uniform Resource Identifier (URI)
Gli URI consentono di identificare risorse astratte o fisiche su Internet. Le risorse RDF sono identificate da identificatori univoci (URI). Gli URI consentono di combinare dichiarazioni provenienti da fonti diverse. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/70183) 

## Utilizzatore di dati
Persona o organizzazione che utilizza i dati messi a disposizione in uno o più spazi di dati per le proprie attività. [Alla definizione in TERMDAT](https://register.ld.admin.ch/termdat/293654)

