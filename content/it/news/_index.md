---
title: News
slug: news
translationKey: news
weight: 90
type: docs
keywords: [I14Y, Piattaforma di metadati, IOP, Novità, Attualità, News]
---

{{<alert title="Per rimanere sempre aggiornati" color="success" >}}

Desiderate essere informati sulle nuove funzionalità e offerte della piattaforma di interoperabilità I14Y? Allora abbonatevi subito alla Newsmail! Facendolo, tre o quattro volte all'anno riceverete via mail un riepilogo degli ultimi sviluppi riguardanti l'IOP I14Y. Per abbonarvi gratuitamente alla Newsmail, andate sul sito del [servizio di abbonamento Newsmail dell'Ufficio federale di statistica](https://www.bfs.admin.ch/bfs/de/home/dienstleistungen/kontakt/newsmail-abonnement.html) e selezionate Piattaforma di interoperabilità I14Y. 

{{</alert>}}

## Breaking change dell’API I14Y
*26.06.2026*

La sera dell’8 luglio rilasceremo una nuova versione della piattaforma di interoperabilità I14Y nell’ambiente di produzione. La release contiene un _breaking change_ dell’API. La modifica prevista è stata approvata dal comitato direttivo I14Y il 23 giugno 2026.

Utilizzate le API di I14Y per leggere o scrivere concetti o prestazioni delle autorità? In tal caso dovete agire subito: verificate, sulla base delle informazioni riportate qui sotto, se i vostri script continueranno a funzionare anche in futuro.

Panoramica della modifica principale:

- Il campo `identifier` (stringa) verrà rimosso per i concetti e le prestazioni delle autorità.
- Il campo sostitutivo `identifiers` (array di stringhe) è già stato introdotto e può essere utilizzato fin da ora.
- Fino al rilascio saranno disponibili entrambi i campi; dopo il rilascio sarà supportato solo `identifiers`.
- Non vi è alcun breaking change per i metadati relativi ai set di dati e alle interfacce elettroniche (API), né per le tabelle di mapping.

### Modello transitorio attuale

```json
{
	"identifier": "string",
	"identifiers": [
		"string"
	]
}
```

### Modello dal 8 luglio

```json
{
	"identifiers": [
		"string"
	]
}
```

Tutti gli script o le integrazioni che recuperano o inviano concetti o prestazioni delle autorità tramite il campo `identifier` devono essere adeguati entro questa data. Vi preghiamo di assicurarvi che tutte le integrazioni interessate vengano adattate il prima possibile, ma obbligatoriamente prima del rilascio in produzione. In caso di domande o problemi, il team I14Y è a vostra disposizione.

**Nota:** dal vostro lato non è necessaria alcuna migrazione dei dati. Il nostro team ha già migrato i dati esistenti trasferendo il precedente valore di `identifier` nella prima voce dell’array `identifiers`.

## Raccogliere i metadati: ma come? La nuova guida I14Y contiene valide istruzioni
*21.05.2026*

Come devono essere descritti gli oggetti di dati sulla piattaforma I14Y affinché siano comprensibili e riutilizzabili da altri?  La nuova guida alla pubblicazione di metadati sulla piattaforma di interoperabilità spiega come procedere, adottando un approccio orientato alla pratica: quali informazioni devono imperativamente essere registrate? Come si crea una documentazione coerente e riutilizzabile? E come si fa a mantenere i metadati aggiornati, sia in ambito amministrativo che al di fuori?

L’inserimento e la gestione dei metadati relativi a dataset, interfacce e servizi delle autorità nell’ambito dell’Amministrazione federale sono previsti dalla legge. La guida aiuta i detentori e gli amministratori dei dati nonché i responsabili della gestione dei dati sul piano federale ad attuare tali linee guida con efficienza e coerenza, ma rappresenta un valore aggiunto anche per i servizi cantonali e comunali, come pure per altre organizzazioni interessate. Molte delle fasi descritte – come la documentazione su strutture di dati, concetti o nomenclature – sono utili, indipendentemente dal quadro normativo, per rendere i dati comprensibili, interoperabili e utilizzabili nel lungo periodo.

Link alla pubblicazione [Guida alla pubblicazione dei metadati sulla piattaforma di interoperabilità – Attuazione dell’articolo 14 dell’LMeCA | Pubblicazione](https://www.bfs.admin.ch/bfs/de/home/nadb/nadb.assetdetail.36598858.html) (disponibile in tedesco) 

## Nuovi dataset sanitari per la ricerca sulla piattaforma I14Y
*21.05.2026*

{{< figure src="/handbook/img/news/zusammenarbeit-sphn.png" alt="Das Swiss Personalized Health Network und I14Y arbeiten zusammen" width="125px" class="float-left img-news-thumb" >}}

Lo Swiss Personalized Health Network (SPHN) e la piattaforma I14Y collaborano per migliorare la reperibilità e l’interoperabilità dei dataset sanitari in Svizzera. Le voci del catalogo dei metadati SPHN sono ora state integrate nella piattaforma I14Y: i dataset vengono raccolti nel catalogo SPHN (FAIR Data Point*, RDF secondo HealthDCAT-AP) e successivamente mappati secondo DCAT-AP CH. Ciò migliora la reperibilità e l’interoperabilità dei dati sanitari, in piena conformità con i principi FAIR. I metadati possono essere esportati come file JSON e integrati in altri sistemi.
Per la realizzazione, i team di SPHN e I14Y hanno collaborato strettamente tramite GitHub. Il risultato di questa collaborazione è un’integrazione produttiva e automatizzata.
[Maggiori informazioni sulla collaborazione (in inglese)](https://sphn.ch/2026/04/23/sphn-and-federal-statistical-office-strengthen-discoverability-and-interoperability-of-health-research-data/)

[Link ai dataset SPHN sulla piattaforma I14Y](https://www.i14y.admin.ch/it/catalog/all?publisher=CH_SPHN)

[Link al catalogo SPHN](https://fdp.dcc.sib.swiss/)

*[Maggiori informazioni sui principi FAIR](https://i14y-ch.github.io/handbook/de/glossar/#fair-prinzipien)

## Caratteristiche delle persone fisiche come chiave per un e-government efficiente
*21.05.2026*

{{< figure src="/handbook/img/news/merkmalsauspraegung.jpg" alt="Einheitliche Merkmale der natürlichen Personen als Schlüssel für effizientes E-Governmen" width="125px" class="float-left img-news-thumb" >}}

Disporre di caratteristiche standardizzate per le persone fisiche costituisce la base di ciò che si prefiggono di ottenere molte iniziative in materia di dati, ovvero compatibilità, riutilizzabilità ed efficienza. E rappresenta un elemento fondamentale nell’attuazione del principio «once-only».

Già nel 2006, con la legge sull’armonizzazione dei registri (LArRa) relativa ai registri degli abitanti e ad altri registri ufficiali delle persone, sono state gettate le basi per uniformare definizioni e descrizioni delle caratteristiche dei dati personali. Queste sono riportate nel [Catalogo ufficiale delle caratteristiche](https://www.bfs.admin.ch/bfs/it/home/registri/registro-persone/armonizzazione-registri/nomenclature.assetdetail.24565578.html).

Ora tutte le caratteristiche personali sono descritte anche come concetti sulla piattaforma I14Y e sono accessibili al pubblico. Ciò permette di sapere in modo trasparente come sono definiti gli attributi demografici principali, quali il nome, la data di nascita o il Comune di domicilio presso le amministrazioni pubbliche. Queste definizioni possono essere utilizzate direttamente per le proprie rilevazioni e applicazioni specialistiche.

Nel corso dell’anno verrà visualizzata la struttura dei dati di base, rendendo così visibili anche le variabili utilizzate sulla piattaforma I14Y («used variables»), rivelando così, ad esempio, una panoramica dello standard eCH 0099: fornitura dei dati degli abitanti alla statistica.

[Raccolta delle descrizioni delle caratteristiche su I14Y](https://www.i14y.admin.ch/it/catalog/concepts?query=merkmale)

## Novità su I14Y: creare tabelle di mappatura
*21.05.2026*

Le tabelle di mappatura rendono le relazioni tra due elenchi di codici analoghi trasparenti e leggibili elettronicamente. Ciò risulta utile, ad esempio, quando è necessario riunire, confrontare o armonizzare dati provenienti da sistemi diversi, ad esempio nei processi amministrativi, nello scambio di dati o nella gestione dei dati di riferimento.

Vi invitiamo a provare questa nuova funzione in modo che in futuro possiate mantenere le vostre attribuzioni tra elenchi di codici più strutturate e meglio documentate. Le tabelle di mappatura possono ora essere create, elaborate e gestite direttamente sulla piattaforma I14Y, sia tramite l’interfaccia utente grafica che tramite API; la descrizione dettagliata con tutte le fasi è disponibile nel [manuale I14Y](https://i14y-ch.github.io/handbook/de/publikation/mappingtable/) (disponibile in tedesco)..

## Integrazione automatizzata di metadati: Basilea–la città sviluppa un connettore tecnico
*21.05.2026*

{{< figure src="/handbook/img/news/connector.png" alt="Der Kanton Basel‑Stadt entwickelt technischen Connector" width="125px" class="float-left img-news-thumb" >}}

Come sarà possibile in futuro pubblicare i metadati su I14Y in modo più efficiente e con un minore dispendio di lavoro manuale? Il DCC Data Competence Center dell’Ufficio di statistica di Basilea Città sta attualmente lavorando a un connettore generico che consenta il trasferimento e la sincronizzazione automatizzati dei metadati dai cataloghi di dati esistenti alla piattaforma di interoperabilità.

L’approccio è ancora in fase di sviluppo, ma mostra già in quale direzione ci si sta dirigendo: grazie a interfacce standardizzate, regole di mappatura configurabili e una trasformazione conforme allo standard DCAT-AP-CH, in futuro sarà possibile creare, aggiornare o cancellare i metadati in modo automatizzato. Ciò ridurrà il lavoro manuale, migliorerà la qualità dei dati e rafforzerà la durabilità dell’architettura dei dati.

Rimarremo in contatto con Basilea Città e riferiremo in un secondo momento sulle esperienze concrete raccolte durante la fase produttiva.

## La nostra sfida in occasione dell’Hackathon GovTech 2026
*21.05.2026*

Due giorni, tante idee – e forse anche un prototipo: il 28 e 29 maggio si terrà l’Hackathon GovTech del 2026. Organizzato dalla Cancelleria federale, si svolgerà presso la sede dell’Ufficio federale dell’informatica e della telecomunicazione a Zollikofen.

Vi parteciperà anche il team I14Y, lanciando una sfida che prevede di risolvere il seguente problema: spesso diversi dataset descrivono la stessa cosa, ma utilizzando termini diversi. Ad esempio, in un dataset è indicato «attivo», nell'altro «in corso». Il significato è uguale, ma dal punto di vista tecnico non è la stessa cosa. Si cercano soluzioni intelligenti in grado di individuare automaticamente tali differenze e magari anche di risolverle, ad esempio creando una tabella di mappatura.

Non vediamo l’ora di scoprire approcci innovativi ed esperimenti e incontri stimolanti.

## Riutilizzo di concetti esterni

{{< figure src="/handbook/img/news/wiederverwendung-externe-konzepte.png" alt="Wiederverwendung von externen Konzepten" width="125px" class="float-left img-news-thumb" >}}

Il Cantone di Basilea Campagna pubblica sulla piattaforma di interoperabilità I14Y le descrizion [relative ai propri dati aperti](https://www.i14y.admin.ch/it/catalog/all?publisher=CH_KT_BL&types=Dataset). Anziché limitarsi a semplici voci di catalogo, il team di Liestal ha integrato le descrizioni con le relative strutture di dati. Ma non solo: gli elementi di dati in esse contenuti sono stati, ove possibile, collegati direttamente ai concetti di base presenti su I14Y.

Il Cantone di Basilea Campagna documenta poi che per identificare un Comune in un dataset viene utilizzato il numero di Comune assegnato dall’Ufficio federale di statistica. Oppure che, in materia di finanze comunali, ci si basi sui concetti dell’Amministrazione federale delle finanze.

Il Cantone di Basilea Campagna punta così sul riutilizzo coerente dei modelli standard esistenti, offrendo un contributo concreto all'armonizzazione dei dati pubblici tra le autorità. Il funzionamento del processo automatizzato di pubblicazione delle descrizioni è illustrato nel codice dello [script di harvesting su GitHub](https://github.com/metadata-swiss/harvester_BL), all’indirizzo.

## Un linguaggio comune rende tutto più facile
*20.02.2026*

A volte, è quando manca un linguaggio comune, che l’importanza di un tale linguaggio diventa particolarmente evidente. Chiunque abbia provato a unire set di dati provenienti da fonti diverse sa di cosa stiamo parlando: stessi concetti, ma termini diversi – i sistemi parlano lingue diverse. È proprio in questi casi che entra in gioco la piattaforma I14Y e risolve il problema con ausili e strumenti che permettono uno scambio più efficiente.

A supporto di questo linguaggio comune è stata introdotta anche una nuova funzionalità: ora banche dati terminologiche verificate come [TERMDAT](https://www.termdat.bk.admin.ch/search), [GEMET](https://www.eionet.europa.eu/gemet/it/about/) o [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) possono essere utilizzate direttamente per la registrazione delle parole chiave. I rimandi agli oggetti corrispondenti presenti in queste tre basi terminologiche possono essere salvati per tutte le parole chiave – che si tratti di set di dati, API, concetti o prestazioni delle autorità. La raccolta terminologica di TERMDAT «Gestione dei dati e delle informazioni» (DIM25) funge da punto di riferimento comune: in TERMDAT, selezionate «Ricerca avanzata» e scegliete «DIM25» nel campo «Raccolte terminologiche».

## Generazione automatica di strutture RDF per i set di dati OGD
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-rdf.png" alt="Grafica Generazione automatica di strutture RDF per i set di dati OGD" width="125px" class="float-left img-news-thumb" >}}

Per la pubblicazione delle strutture dei set di dati aperti, è stato messo a punto un processo che consente di generare automaticamente strutture RDF e SHACL a partire dai file CSV e PXWeb disponibili nelle distribuzioni. Questa automazione, che ha permesso di documentare più di 900 set di dati dell’UST nel rispetto degli standard del web semantico, migliora la coerenza delle descrizioni e aumenta la qualità dei dati da convalidare.

Quali sono i vantaggi per la documentazione dei set di dati?

- Risparmio di tempo: le strutture RDF e SHACL non devono più essere create manualmente.
- Integrazione semplificata: i set di dati sono descritti in un formato leggibile elettronicamente, il che semplifica lo sviluppo di servizi basati su dati aperti.
- Migliore interconnessione: le strutture uniformi costituiscono la base per collegare meglio diversi set di dati e per identificare quelli relativi a concetti simili.

Questo nuovo processo riduce l’onere necessario per la documentazione, aumenta l’interoperabilità tra i set di dati e migliora le condizioni per un utilizzo multiplo coerente dal punto di vista tecnico.

## Terminologia verificata: così la piattaforma I14Y migliora l’inserimento delle parole chiave
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-terminologie.png" alt="Grafica Terminologia verificata: così la piattaforma I14Y migliora l’inserimento delle parole chiave" width="125px" class="float-left img-news-thumb" >}}

Le parole chiave svolgono un ruolo centrale nella reperibilità dei set di dati. Ecco perché l’inserimento delle parole chiave su I14Y è stato ampliato: queste possono ora essere riprese direttamente da banche dati terminologiche. I14Y supporta, tra l’altro, TERMDAT, GEMET e Wikidata. Il ricorso a banche terminologiche verificate promuove l’utilizzo di una terminologia univoca: aumenta la qualità dei metadati e li rende più facili da reperire in diversi sistemi. Inoltre, la nuova funzione soddisfa i requisiti dello standard DCAT-AP CH per lo scambio dei dati.

A seconda delle modalità di lavoro sono possibili diverse varianti: durante l’inserimento, le parole chiave possono essere riprese direttamente dalla banca dati terminologica selezionata. Per i processi automatizzati, è anche possibile implementare i riferimenti terminologici tramite l’[API I14Y](https://apiconsole.i14y.admin.ch). La [toolbox I14Y](https://toolbox.i14y.admin.ch) mette inoltre a disposizione un generatore di parole chiave che aiuta a preparare e aggiornare elenchi coerenti e riutilizzabili.

Il manuale I14Y (attualmente disponibile solo in tedesco) fornisce istruzioni dettagliate sull’utilizzo di questa nuova funzione: https://handbook.i14y.admin.ch/handbook/de/publikation/tipps/#schl%C3%BCsselw%C3%B6rter-und-kontrollierte-terminologie.

Nei casi in cui non esiste o non è disponibile una banca dati terminologica pertinente, rimane comunque la possibilità di inserire parole chiave sotto forma di testo libero.

## Roadmap 2026: importanti sviluppi per I14Y
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-roadmap.png" alt="Grafica Roadmap 2026: importanti sviluppi per I14Y" width="125px" class="float-left img-news-thumb" >}}

Il 2026 porta con sé molte novità che semplificano l’utilizzo di I14Y e rafforzano l’interoperabilità. Le tabelle di mappatura consentono di gestire in modo efficiente le corrispondenze tra codici di nomenclature diverse, un vantaggio sia per armonizzare i flussi di lavoro che per confrontare i dati in modo più preciso.

Da ora in poi, ogni oggetto di dati riceverà un URI unico e standardizzato finalizzato a migliorarne sia il referenziamento che l’affidabilità. Inoltre, le strutture possono essere modificate direttamente nell’interfaccia utente e i loro attributi collegati ai concetti: un passo importante verso un’armonizzazione misurabile e un riutilizzo visibile. Il passaggio programmato all’open source – come richiesto dalla LMETA – offre maggiore flessibilità e sicurezza e facilita sia le integrazioni proprie sia una possibile installazione locale della piattaforma I14Y. Dettagli sulla [roadmap](https://handbook.i14y.admin.ch/handbook/it/piattaforma/roadmap/).

## Completata l’analisi delle lacune di metadata.swiss
*20.02.2026*

{{< figure src="/handbook/img/news/newsmail-2026-1-thumb-gap.png" alt="Grafica Completata l’analisi delle lacune di metadata.swiss" width="125px" class="float-left img-news-thumb" >}}

L’analisi delle lacune di metadata.swiss è stata completata con successo e sottoposta per consultazione alle istanze competenti. Mostra come le funzioni delle piattaforme opendata.swiss e I14Y, ovvero gli open data e l’interoperabilità, possano essere combinate in modo ottimale su un’unica piattaforma che contenga sia i metadati che i dati di riferimento.

Si raccomanda di implementare le funzioni descrittive del catalogo servendosi di Piveau (software open source) e di adottare le funzioni di interoperabilità di I14Y, compreso il set di strumenti esistenti. Due dei principali obiettivi dell’ulteriore sviluppo sono quello di ridurre l’onere rappresentato dall’inserimento manuale dei dati attraverso una maggiore automazione e quello di creare una piattaforma unica ed efficiente per i metadati e i dati di riferimento.

## La piattaforma di interoperabilità I14Y entra in una nuova fase!
*04.12.2025*

{{< figure src="/handbook/img/news/cloud.jpg" alt="Grafik Eine neue Phase für die Interoperabilitätsplattform I14Y" width="125px" class="float-left img-news-thumb" >}}

La piattaforma I14Y sul cloud pubblico, il cui precedente hosting era presso l’Ufficio federale dell’informatica, è stata migrata con successo sul cloud pubblico, segnando un’importante pietra miliare per l’interoperabilità in Svizzera. Questa versione avanzata ora offre una maggiore flessibilità, fondamentale per accelerare gli sviluppi futuri, come l’integrazione di un triple store o della toolbox. 
Inoltre, l’intero codice sorgente è stato migrato su GitHub, fornendo la base concreta del nostro impegno verso l’open source. Questi cambiamenti rafforzano la nostra capacità di innovare e di collaborare con voi, per un’amministrazione sempre più connessa e trasparente.

## metadata.swiss: stato attuale della fusione delle piattaforme
*04.12.2025*

Prosegue la fase di attuazione della fusione di I14Y e opendata.swiss in una piattaforma di metadati comune. L’obiettivo rimane una gestione dei metadati semplice, chiara e a prova di futuro, che aumenti la trasparenza e faciliti l’accesso ai dati da parte della collettività. 
La gap analysis avviata a settembre nell’ambito del progetto metadata.swiss sta per essere completata. Questo segna l’inizio della vera e propria fase di regolazione e progettazione della nuova piattaforma comune. La tabella di marcia per lo sviluppo della piattaforma I14Y rimane complessivamente invariata, ma sarà adattata in base all’avanzamento dei lavori di metadata.swiss per evitare sviluppi o investimenti non sostenibili. E tutti gli oggetti di dati descritti sulla piattaforma I14Y verranno migrati nella nuova soluzione, presumibilmente nel 2028. Vi state chiedendo come si chiamerà la piattaforma che nascerà dalla fusione? Resta da vedere, ma probabilmente il nome I14Y sarà una cosa da nerd del passato.

## Beta-ID: un set di dati da testare
*04.12.2025*

{{< figure src="/handbook/img/news/beta-id.png" alt="Grafik Die Beta-ID als Datensatz zum Testen" width="125px" class="float-left img-news-thumb" >}}

Il 29 settembre 2025 la Svizzera ha approvato l’introduzione dell’Id-e nazionale. Nell’ambito della fase di test pubblico («Public Beta»), è stata introdotta la cosiddetta Beta-ID, un’identità test che non prevede una vera e propria verifica dell’identità, ma che contiene gli stessi campi di dati della futura Id-e. [Il relativo set di dati è disponibile sulla piattaforma I14Y](https://www.i14y.admin.ch/it/catalog/datasets/urn:vct:ch.admin.bcs.betaid/description) e mostra come sia possibile documentare e integrare nuove applicazioni in una fase iniziale. Questo principio può essere applicato anche ad altri progetti digitali: un buon esempio di trasparenza e di modo di agire collaborativo e proattivo all’interno dell’amministrazione pubblica.

## Un dashboard visualizza i dati, la piattaforma I14Y li rende comprensibili e leggibili dalle macchine
*04.12.2025*

{{< figure src="/handbook/img/news/bfe-datensaetze-i14y.png" alt="Grafik Ein Dashboard visualisiert Daten, I14Y macht sie nachvollziehbar und maschinenlesbar" width="125px" class="float-left img-news-thumb" >}}

Il dashboard sull’energia dell’Ufficio federale dell’energia permette di visualizzare in un colpo d’occhio i principali indicatori relativi alla produzione e al consumo di elettricità in Svizzera. Ora dieci set di dati di questo dashboard sono descritti sulla piattaforma I14Y. In questo modo si crea trasparenza in merito a quali siano i dati su cui si basano le visualizzazioni. Questi set di dati sono quindi reperibili per tutte le parti interessate provenienti dal mondo della ricerca, dell’industria e di altri settori, sono descritti con coerenza, sono accessibili in modo affidabile e a lungo termine e possono essere facilmente utilizzati. Il dashboard e la piattaforma si completano quindi alla perfezione. 
[Dashboard sull'energia Svizzera](https://www.dashboardenergia.admin.ch/dashboard)

[Catalogo di metadati della Svizzera](https://www.i14y.admin.ch/it/catalog/datasets?publisher=CH_BFE)

## Incontro degli amministratori dei dati: una giornata dedicata alla pratica
*04.12.2025*

Sei presentazioni, tre workshop e tanto dialogo in un’atmosfera rilassata: il 21 ottobre circa cinquanta esperti delle amministrazioni pubbliche si sono incontrati a Neuchâtel per il primo meet-up degli amministratori dei dati a livello locale (local data steward, LDS). L’evento, organizzato dal team della piattaforma I14Y, ha costituito l’occasione per affinare il nuovo ruolo degli LDS nel contesto della LMeCA e dell’ODigi. L’incontro si è concentrato sul lavoro pratico con la piattaforma I14Y: come e con quali strumenti ausiliari è possibile descrivere i set di dati, le API e i servizi delle autorità sulla piattaforma? 
  
Nei workshop successivi, i partecipanti hanno discusso questioni di governance, aspetti tecnici e legati alla pubblicazione su opendata.swiss e I14Y. 
  
Il prossimo incontro è previsto per l’autunno del 2026, preceduto da regolari riunioni informali degli amministratori dei dati a livello locale. Contattateci [via e-mail](mailto:i14y@bfs.admin.ch) se siete interessati a partecipare.

## Verso un ecosistema dei metadati più integrato
*26.08.2025*

Le due piattaforme di metadati I14Y e opendata.swiss si fondono per rendere la gestione dei metadati in Svizzera ancora più semplice, chiara e sostenibile. A dare il via libera al progetto metadata.swiss è il Comitato di direzione dell’Ufficio federale di statistica. Dal 1° agosto, un team di progetto composto da specialisti della Segreteria Open Government Data e del servizio di interoperabilità sta lavorando a possibili varianti di applicazione concreta.
 
La futura piattaforma presenta molti vantaggi: consente di mettere in atto una governance uniforme per i metadati in Svizzera, mette a sistema risorse tecniche e organizzative e crea una migliore compatibilità con gli standard europei.
 
Siamo convinti che questa fusione costituisca un passo strategico verso un ecosistema di dati interconnesso in Svizzera. Al momento la roadmap della piattaforma I14Y non subisce alcuna modifica: continuiamo a lavorare in modo risoluto al suo sviluppo. Siamo consapevoli del fatto che la fusione prevista potrebbe sollevare delle domande. In caso di dubbi non esitate a contattarci.

## Harvesting automatico sulla piattaforma I14Y – Un servizio per i nostri partner
*26.08.2025*

{{< figure src="/handbook/img/news/automatisches-harvesting.png" alt="Grafik Harvesting automatico" width="125px" class="float-left img-news-thumb" >}}

Affinché i dati possano essere riutilizzati più volte, i potenziali utenti devono innanzitutto essere a conoscenza dell’esistenza di un set di dati. Proprio per questo è stata sviluppata la piattaforma I14Y, su cui amministrazione e istituzioni ad essa associate descrivono il proprio set di dati e lo rendono accessibile al pubblico. Per semplificare questo processo, sulla piattaforma I14Y è stato sviluppato un modulo di data harvesting, che consente di trasferire e aggiornare automaticamente i metadati dai cataloghi di dati esistenti.
 
L’harvesting si basa sul Profilo di applicazione svizzero DCAT e utilizza l’API partner di I14Y per inserire set di dati direttamente nel catalogo pubblico o privato di un’organizzazione. Per le organizzazioni che vi si interessano, la piattaforma I14Y mette a disposizione [un archivio di template configurabile su GitHub](https://github.com/metadata-swiss/harvester_template), dall’autenticazione e la mappatura all’automazione con GitHub Actions.
 
Il modulo di harvesting può essere configurato in modo da importare nuovi set di dati e da aggiornare quelli esistenti a intervalli regolari (p. es., ogni notte). Un esempio è il modulo di harvesting per l’archivio dati dell’ Ufficio federale della sicurezza alimentare e di veterinaria, in uso dal febbraio 2025. Pubblica quotidianamente metadati aggiornati direttamente nel catalogo pubblico I14Y e soddisfa i requisiti di qualità dal punto di vista della piattaforma. È stato trasferito all’ambiente di produzione nel luglio 2025.
 
## Pratici tool per lavorare con la piattaforma I14Y
*26.08.2025*

{{< figure src="/handbook/img/news/praktische-tools.png" alt="Grafik Toolbox" width="125px" class="float-left img-news-thumb" >}}

La toolbox I14Y offre un supporto pratico per vari compiti relativi alla gestione dei metadati. Ad esempio, un programma ausiliario adeguato facilita l’importazione di un inventario di dati esistente in formato tabellare. È disponibile un nuovo strumento di conversione per documentare la struttura dei set di dati, con il quale in un batter d’occhio è possibile creare strutture di dati conformi a SHACL. Vengono inoltre fornite le documentazioni delle interfacce tecniche esistenti e con il tool Swagger2I14Y è possibile renderle conformi alla piattaforma I14Y. Chi invece volesse estrarre singoli concetti di elementi dati da un set di dati, troverà nel «Concept Import» il tool giusto.

Questi e altri utili tool sono disponibili nel nuovo toolbox di I14Y. I tool semplificano molte fasi di lavoro, ad esempio attraverso conversioni automatiche, traduzioni e, in alcuni casi, l’utilizzo dell’intelligenza artificiale (p. es. nel generatore ABC nel link). I tool possono essere utilizzati direttamente nel browser web o in alternativa scaricati ed eseguiti localmente, ad esempio se si lavora con dati sensibili o non disponibili online.

Avete altre idee per altri tool utili? Il servizio di interoperabilità è aperto a ricevere i vostri suggerimenti e i vostri script. [Link al toolbox I14Y](https://toolbox.i14y.admin.ch).

## L’UFE pubblica per la prima volta un set di dati su I14Y
*26.08.2025*

L’Ufficio federale dell’energia (UFE) ha descritto un primo set di dati sulla piattaforma. Si tratta [dei prezzi di mercato di riferimento per il premio di mercato fluttuante ai sensi dell’art. 30aquinquies OPEn](https://www.i14y.admin.ch/it/catalog/datasets/BFE-DS-141/description). Questi prezzi di riferimento sono di fondamentale importanza per il calcolo del premio di mercato fluttuante, uno strumento di promozione della Confederazione per gli impianti fotovoltaici, a biomassa, eolici e idroelettrici.
 
L’UFE utilizza la piattaforma I14Y come catalogo interno di metadati, una componente centrale della sua strategia digitale e uno strumento fondamentale della sua gestione attiva dei dati. Pubblicando i propri set di dati pubblici, l’UFE migliora l’accessibilità e la possibilità di riutilizzare i dati energetici, semplificando lo scambio di dati nel settore energetico.
 
Questo primo set di dati è il risultato di solidi processi di governance interna; molti altri sono in preparazione e verranno pubblicati a breve.

## Rappresentazione grafica di strutture di dati
*26.08.2025*

{{< figure src="/handbook/img/news/datenstruktur-graphisch-darstellen.png" alt="Grafik Rappresentazione grafica di strutture di dati" width="125px" class="float-left img-news-thumb" >}}

Con l’ultima versione, sulla piattaforma I14Y è ora possibile rappresentare graficamente strutture di dati: si tratta di una pietra miliare per tutti coloro che non solo vogliono mettere a disposizione dati, ma anche renderli utilizzabili a lungo termine. La nuova configurazione consente di rappresentare con precisione anche strutture di dati complesse e articolate. Ogni attributo rimanda a un concetto di elemento dati associato, se disponibile. In questo modo la multifunzionalità dei dati è direttamente visibile.
 
Da un punto di vista tecnico, le precedenti strutture tabellari semplici vengono sostituite da modelli di maggiore forza espressiva: con classi, attributi e relazioni, memorizzati in formato linked data (TTL). In prospettiva, la memorizzazione avviene in un triple store, che consente di modellare e visualizzare le strutture di dati come grafi. Ciò significa che in futuro potranno essere riprodotti facilmente anche i modelli di dati XML, JSON.
 
Nella fase successiva, le funzioni di elaborazione, importazione/esportazione e riutilizzo delle classi saranno continuamente ampliate.

## Trovare rapidamente il codice giusto in nomenclature complesse
*26.08.2025*

Nel nostro contesto, il proverbiale «trovare un ago in un pagliaio» (con facilità) significa che è possibile trovare rapidamente e con precisione un codice o una descrizione specifica in nomenclature estese come la CHOP o la NOGA.
Proprio per questo sulla piattaforma di interoperabilità I14Y abbiamo sviluppato una nuova funzione di ricerca intelligente, veloce e contestualizzata, che, tramite la scheda «Contenuto», permette di trovare all’interno della struttura le informazioni che si stanno cercando. Tale funzione è rivolta a specialisti, analisti e a chiunque lavori regolarmente con classificazioni e collezioni di dati strutturati: accertatevene voi stessi [nel breve video](https://i14y-ch.github.io/handbook/img/news/strukturelle-suche.mp4).

## Nouvel accès M2M : synchronisation automatisée des métadonnées avec I14Y
*12.05.2025*

Finora i metadati dei set di dati dovevano essere inseriti manualmente sulla piattaforma I14Y, un processo oneroso in termini di tempo e risorse nonché a volte soggetto a errori. Da ora le organizzazioni possono invece importare e gestire i metadati dei loro set di dati in modo completamente automatico. Si tratta di una pietra miliare per la piattaforma I14Y e di un passo importante verso un’amministrazione efficiente. Questa opzione è molto interessante per le organizzazioni che gestiscono già i propri cataloghi di dati e vorrebbero collegarli a I14Y. Per la comunicazione da macchina a macchina (machine to machine, M2M) è necessario uno speciale token di accesso. Ciò significa che i metadati possono essere registrati e pubblicati sulla piattaforma I14Y tramite l’API senza bisogno di intervenire manualmente. Una connessione di questo genere è utile e molto interessante anche per scrivere e aggiornare i metadati sulla piattaforma I14Y su base regolare.

Per farlo, forniamo un’applicazione tipo come modello tecnico (repository tipo) con cui realizzare la connessione automatica alla piattaforma I14Y in tutta semplicità. L’applicazione non solo consente di importare i set di dati, ma anche di aggiornarli automaticamente a intervalli prestabiliti, ad esempio ogni notte. In questo modo le informazioni rimangono aggiornate senza che debba essere fatto manualmente, il che riduce significativamente l’onere di lavoro e migliora la qualità dei dati.

Per importazioni ed esportazioni da svolgere tramite l’API una volta sola, continua ad essere sufficiente la procedura consolidata tramite il token, che si riceve dopo aver effettuato il login cliccando sull’icona a forma di persona in alto a destra.

Chi fosse interessato o avesse domande sulla comunicazione M2M può contattarci via e-mail all’indirizzo i14y@bfs.admin.ch. 

## Un tutorial per lo scambio automatico di dati
*12.05.2025*

Come si fa ad accedere alle API pubbliche e dei partner della piattaforma I14Y con Python? Un nuovo tutorial interattivo spiega passo dopo passo come fare, con esempi specifici per tutti gli endpoint API. Mostra come recuperare, importare o aggiornare i dati automaticamente.
Il tutorial può essere utilizzato in due modi: visionandolo localmente, ovvero scaricandolo semplicemente da GitHub e avviandolo direttamente nel browser con JupyterLite, senza bisogno di alcuna installazione.

Vai alla pagina GitHub esplicativa: [I14Y-ch/tutorials](https://github.com/metadata-swiss/tutorials) 

Vai al tutorial: [JupyterLite](https://i14y-ch.github.io/tutorials/lab/index.html) 

## Descrivere le strutture dei set di dati su I14Y – Cosa cambia
*12.05.2025*

{{< figure src="/handbook/img/news/structure.png" alt="Grafik Struktur" width="125px" class="float-left img-news-thumb" >}}

Nelle prossime settimane l’attuale struttura piatta dei set di dati su I14Y sarà gradualmente sostituita da una struttura gerarchica. Il modello futuro si basa su dati collegati (linked data), con classi, attributi e relazioni, salvati in formato RDF/TTL. 

Tra circa tre settimane verranno introdotti nel catalogo interno nuovi modelli di dati più complessi in formato RDF/TTL. Per il momento le strutture esistenti rimangono visibili, ma non possono più essere modificate. Nel giro di circa sei settimane le nuove strutture sostituiranno completamente quelle vecchie, compresa la visualizzazione grafica e i collegamenti chiari ai concetti.

Importante: le organizzazioni che hanno pubblicato descrizioni di set di dati con una struttura non hanno bisogno di fare niente. Il centro di interoperabilità trasferirà le strutture esistenti nella nuova forma. Durante il periodo in cui le strutture non possono essere modificate, chi deve effettuare modifiche può contattare il team I14Y.

##  L’UFAG inizia a inserire la descrizione dei dati agricoli
*12.05.2025*

{{< figure src="/handbook/img/news/landwirtschaft.jpg" alt="Grafik Landwirtschaft" width="125px" class="float-left img-news-thumb" >}}

L’Ufficio federale dell’agricoltura (UFAG) ha iniziato a descrivere i propri concetti relativi agli elementi di dati e ai set di dati sulla piattaforma I14Y; siamo entusiasti di questa iniziativa!
I concetti registrati comprendono i pagamenti diretti, i fertilizzanti, i mangimi, le categorie di aree registrate, le etichette, i sistemi di stabulazione e le aziende di acquacoltura. A questi si aggiungono due set di dati: [Colture a pagamenti diretti e colture principali](https://www.i14y.admin.ch/it/catalog/datasets/BLW_DS_DZ_CROP/description) e [Tipi di piante in Svizzera](https://www.i14y.admin.ch/it/catalog/datasets/BLW_DS_VARIETIES/description).

Le descrizioni aiutano i tecnici, i servizi amministrativi e il pubblico interessato a trovare e classificare più facilmente i dati relativi all’agricoltura.
La descrizione strutturata dei concetti e degli insiemi di dati non solo ne aumenta la riutilizzabilità, ma promuove anche l’armonizzazione dei dati relativi all’agricoltura, un contributo fondamentale all’attuazione del principio «once-only» nell’amministrazione.

## Preziosi riscontri pratici
*12.05.2025*

Lo sguardo esterno sul prodotto aiuta a migliorarlo. In alcune interviste agli utenti, otto amministratori dei dati a livello locale attivi hanno fornito al team I14Y una panoramica delle loro esperienze con la raccolta dei metadati.
l feedback sono fondamentalmente positivi: la registrazione funziona bene e le possibilità che offre la piattaforma sono apprezzate. Le persone intervistate vedono un potenziale di miglioramento soprattutto nel supporto legato al contesto durante la compilazione e nel filtraggio dei propri set di dati.

Alcuni dei punti citati sono già stati implementati, mentre altri saranno gradualmente integrati con l’ulteriore sviluppo della piattaforma.
Promemoria: i suggerimenti per le proposte di miglioramento possono essere inviati in qualsiasi momento tramite [Github](https://github.com/metadata-swiss/feature-requests).

## Accesso più rapido con R all’API della I14Y 
*02.04.2025*

{{< figure src="/handbook/img/news/r-konsole.png" alt="Grafik R-Konsole" width="125px" class="float-left img-news-thumb" >}}

Un pacchetto R ben ponderato facilita l’accesso all’API della piattaforma di interoperabilità I14Y. Un tutorial di accompagnamento mostra inoltre come i metadati possono essere utilizzati direttamente nella console di R. Tre domande a Félix Luginbuhl, che ha sviluppato il pacchetto R.

*Felix Luginbühl, Lei ha sviluppato una libreria in linguaggio R che facilita l’accesso all’interfaccia elettronica della piattaforma I14Y. È stato un problema o una sfida specifica a spingerla a sviluppare il suddetto pacchetto?*

Avevo bisogno di accedere a determinati dati sulla piattaforma di interoperabilità per un progetto. Sono solito lavorare con il linguaggio di programmazione R. Mi permette di rendere trasparenti e riproducibili le fasi di elaborazione e le analisi. Ho quindi creato uno script che aiuta a trovare i metadati tramite l’API. Data l’importanza della piattaforma I14Y e il crescente utilizzo del linguaggio di programmazione R in Svizzera, ho pensato che una libreria potesse essere utile all’intera community. Ecco perché ho iniziato a svilupparla a titolo volontario.

*Quale lacuna ha colmato la Sua libreria in linguaggio R?*

Grazie a questa libreria, gli utenti possono recuperare i metadati dalla piattaforma I14Y in modo semplice, analogamente a come fanno con altre fonti di dati. Non devono infatti più preoccuparsi dei dettagli tecnici delle chiamate API, poiché possono utilizzare la sintassi R che già conoscono. Attraverso il mio pacchetto R denominato «BFS», inoltre, i metadati possono essere facilmente combinati con i dati veri e propri dell’Ufficio federale di statistica. Ho messo a disposizione entrambi i pacchetti come codici open source.  

*Quali considerazioni o esperienze L’hanno spinta a fornire alla community non solo il pacchetto, ma anche un tutorial?*

Mentre sviluppavo la libreria mi è venuto in mente che potevo realizzare il tutto servendomi della console di R: ricerca nel catalogo della piattaforma 14Y, accesso ai dati e ad altri identificatori per trovare dati supplementari. Ho documentato l’intero processo e anche fornito un esempio di combinazione con una banca dati dell’Ufficio federale di statistica. Date un’occhiata alla documentazione online disponibile su [www.felixluginbuhl.com/I14Y](https://felixluginbuhl.com/I14Y). Eventuali domande e feedback sono i benvenuti!

## Come caricare in modo efficace descrizioni di set di dati sulla piattaforma I14Y
*04.03.2025*

{{< figure src="/handbook/img/news/grafik_api.png" alt="API grafica" width="125px" class="float-left img-news-thumb" >}}

Grazie a un nuovo endpoint dell’interfaccia elettronica (API), ora le descrizioni dei set di dati possono essere caricate su I14Y automaticamente. Le descrizioni di set di dati, compresi i dettagli riguardanti eventuali distribuzioni, possono essere create con una semplice richiesta POST. La voce può quindi essere controllata e messa a disposizione tramite l’interfaccia web. In alternativa, lo stato può essere modificato e pubblicato direttamente con uno script tramite una richiesta PUT.  

Le specifiche tecniche dei nuovi endpoint sono documentate nello Swagger dell’API partner. Inoltre è disponibile un tutorial con un esempio di applicazione.  

Tutte le informazioni sull’API I14Y si trovano al seguente link: [apiconsole.i14y.admin.ch](https://apiconsole.i14y.admin.ch). 

## Un codice per ogni caso: registrare i dati medici in modo omogeneo
*04.03.2025*

{{< figure src="/handbook/img/news/medical.jpg" alt="Grafica medicina digitalizzata" width="125px" class="float-left img-news-thumb" >}}

In tutti gli ospedali svizzeri, le diagnosi e i trattamenti devono essere registrati in modo omogeneo. A tale scopo vengono utilizzate le classificazioni ICD-10 (diagnosi) e CHOP (esami e trattamenti). Le ultime versioni sono descritte sulla piattaforma I14Y e gli elenchi di codici possono essere esportati in formato JSON e CSV, oltre che tramite l’API. Collegamenti diretti: [ICD-10](https://www.i14y.admin.ch/it/catalog/concepts/08dd2e54-00fb-efc5-b7cd-14f5c7d2272d/description) e [CHOP](https://www.i14y.admin.ch/it/catalog/concepts/08dd2e3a-d99e-d56f-9c1c-5a7c5733f1a6/description).

## La governance dei dati nella pratica
*04.03.2025*

{{< figure src="/handbook/img/news/lds_meetup.jpg" alt="Foto dell'incontro dei Local Data Steward" width="125px" class="float-left img-news-thumb" >}}

Alcune unità amministrative utilizzano solo la piattaforma di interoperabilità I14Y, mentre altre si affidano a un software per cataloghi installato localmente, che in futuro sarà collegato a I14Y: in un incontro organizzato dal team I14Y, i local data steward di diversi uffici federali e Cantoni hanno condiviso il loro modo di procedere nell’inventariare e armonizzare i set di dati. Hanno discusso di come promuovere l’armonizzazione dei dati e di come ognuno di loro mette in pratica la governance dei dati, dandosi consigli pratici sull’utilizzazione della piattaforma I14Y. Il team del servizio di interoperabilità ringrazia per lo scambio vivace e arricchente in attesa del prossimo incontro previsto all’inizio dell’estate. Lavora come local data steward presso un’unità amministrativa e desidera partecipare alla prossima riunione? Ci scriva!

## Bilancio dell'anno
*11.12.2024*

Il 2024 volge al termine e guardando indietro possiamo dire che è stato un anno produttivo. Siamo riusciti ad attuare alcuni progetti ambiziosi, ad esempio la creazione di un area di input sulla piattaforma I14Y per metadati OGD registrati manualmente, grazie alla quale i dati possono essere pubblicati con un clic sulle piattaforme [opendata.swiss](https://opendata.swiss) e [I14y.ch](https://i14y.admin.ch).

In novembre abbiamo reso l’interfaccia utente di I14Y più moderna e il suo utilizzo più intuitivo. La separazione tra «Catalogo» e «Concetti», precedentemente presente sulla homepage per motivi tecnici, è stata rimossa. La nuova ricerca globale consente di cercare tutti i metadati, indipendentemente dal tipo. I risultati vengono restituiti esaustivamente in registri (Set di dati, Servizi pubblici, APIs, Concetti). Vengono visualizzati anche i risultati trovati nei portali di metadati Opendata e Geocat. Inoltre, nella versione rilasciata in novembre mettiamo a disposizione delle organizzazioni partner un endpoint sul gateway API, attraverso il quale sarà possibile pubblicare le descrizioni delle collezioni di dati. Dall’inizio di quest’anno tutte le novità sono state documentate nel [Changelog](https://i14y-ch.github.io/handbook/it/changelog/) del manuale.

Il team I14Y lavora con grande impegno al costante sviluppo della piattaforma, e lo fa in stretto dialogo con i suoi utenti. Le esigenze specifiche dei nostri utenti vengono raccolte in occasione di hackathon, di incontri informali con gli amministratori dei dati a livello locale o del progetto Basel+. Nel comitato direttivo recentemente istituito vengono discussi e organizzati per priorità i nuovi requisiti. Al momento lo sviluppo della piattaforma I14Y è determinato in modo rilevante in funzione dei requisiti della legge federale concernente l’impiego di mezzi elettronici per l’adempimento dei compiti delle autorità ([LMeCA](https://www.fedlex.admin.ch/eli/cc/2023/682/it)). Le soluzioni e migliorie che ne scaturiscono vanno però a vantaggio di tutti gli utenti.

Tutte queste pietre miliari sono già state raggiunte grazie all’ampliamento del nostro team; altre sono nel mirino. Nei prossimi mesi venturi godremo del sostegno di Lien Beroggi per la durata del suo tirocinio universitario. Al termine della presente newsletter troverete una panoramica delle sue mansioni.

## Chiarita la direzione in cui si sviluppa la piattaforma I14Y
*11.12.2024*

{{< figure src="/handbook/img/news/roadmap.png" alt="Logo Roadmap" width="125px" class="float-left img-news-thumb" >}}

Sulla [roadmap](https://i14y-ch.github.io/handbook/it/piattaforma/roadmap/) pubblicata sul sito è possibile da subito seguire le novità alle quali stanno lavorando gli sviluppatori di software. Viene aggiornata trimestralmente, con una descrizione particolarmente dettagliata del periodo immediatamente seguente. Lavoriamo in modo agile. Siccome la roadmap può cambiare, vale la pena consultarla regolarmente (lattualmente disponibile unicamente in tedesco).

## Partecipare all’ulteriore sviluppo della piattaforma I14Y
*11.12.2024*

Da subito nel Repository [Feature Request](https://github.com/metadata-swiss/feature-requests/issues) su GitHub possono essere inoltrate e discusse proposte per nuove funzioni. Il servizio di interoperabilità, il comitato per la gestione dei dati a livello nazionale e il comitato direttivo assegnano un ordine di priorità alle proposte. Non vediamo l’ora di ricevere le vostre!

## Nuove console pubbliche per l'API di I14Y
*11.12.2024*

{{< figure src="/handbook/img/news/api.png" alt="Logo API" width="125px" class="float-left img-news-thumb" >}}

I14Y offre ora due console OpenAPI (Swagger) per facilitare l'accesso degli utenti all'API di I14Y. Le console sono disponibili in modo permanente e documentano chiaramente le funzioni dell'API.

- [URL della console](https://apiconsole.i14y.admin.ch/partner/v1/index.html) per i metadati interni all'organizzazione. Funzione: serve per gestire i metadati interni all'organizzazione. Utilizzo: è richiesta l'autenticazione. Gli oggetti di metadati possono essere creati e modificati tramite questa API.
- [URL della console](https://apiconsole.i14y.admin.ch/public/v1/index.html) per i metadati pubblici. Funzione: fornisce accesso in sola lettura ai metadati pubblici.
Uso: non è richiesto il login, accesso libero. Le console vengono continuamente aggiornate. Verranno aggiunti nuovi endpoint, in modo che in futuro la gestione dei metadati sarà interamente possibile tramite l'API.

## Novità nel team
*11.12.2024*

{{< figure src="/handbook/img/news/lien.jpg" alt="Ritratto Lien Beroggi" width="250px" class="float-left img-news-thumb" caption="UFS" >}}

Lien Beroggi ci supporterà per un anno con le sue conoscenze universitarie appena acquisite. Web semantico, RDF e linked data rientrano tra le tematiche su cui si focalizzerà il suo lavoro. Seguono alcune domande poste alla nostra tirocinante.

_L’interoperabilità è stato un argomento importante durante gli studi universitari?_ 
Durante i miei studi in informatica di gestione mi sono occupata di vari aspetti della gestione efficiente delle informazioni e dell’integrazione dei sistemi, tra cui lo scambio di dati tra sistemi diversi e l’importanza degli standard per una comunicazione ottimale. Ho anche frequentato corsi speciali sui dati semistrutturati, grazie ai quali ho imparato le basi dei concetti di web semantico e linked data. Ora, nella mia posizione presso il team della piattaforma I14Y, posso applicare queste conoscenze in un contesto reale in cui l’interoperabilità svolge un ruolo cruciale.

_Quali sono gli aspetti della piattaforma I14Y che ti appassionano?_ 
Gli aspetti che rendono questo tirocinio particolarmente interessante sono due. Anzitutto la possibilità di lavorare con un team dinamico a una piattaforma in continua evoluzione è molto stimolante e arricchente. Questo mi consente di apprendere attraverso l’esperienza pratica, trovando soluzioni innovative insieme ai colleghi. Il secondo aspetto interessante è l’impatto della piattaforma I14Y sulla società: interoperabilità e accessibilità dei dati sono determinanti per migliorare e semplificare le prestazioni di servizio per cittadinanza, imprese e istituzioni. I linked data, in particolare, offrono un enorme potenziale per collegare informazioni finora isolate e renderle più accessibili e utilizzabili.

_Quale obiettivo ti sei posta per i prossimi mesi?_
Nei prossimi mesi desidero approfondire la conoscenza sui linked data e l’interoperabilità, per poter fornire un contributo concreto allo sviluppo della piattaforma I14Y. Il mio obiettivo è di dare il mio apporto all’ottimizzazione dell’integrazione dei dati, in particolare per facilitare lo scambio di informazioni con altre piattaforme. Facendo progressi in questi ambiti, spero che il mio lavoro contribuisca a sviluppare ulteriormente l’efficienza e la qualità delle funzioni offerte dalla piattaforma I14Y.

## Nuovi campi di inserimento per la protezione dei dati 
*20.02.2024*

{{< figure src="/handbook/img/news/datenschutz.jpg" alt="Symbolbild Datenschutz" width="250px" class="float-left img-news-thumb" >}}

Una collezione di dati descritta sulla piattaforma I14Y contiene dati relativi a persone? E, se così fosse, i dati effettivi in questione contengono informazioni che devono essere protette, in particolare sull’orientamento politico, lo stato di salute o la confessione religiosa di un persona? Questo può essere documentato nel campo «Confidenzialità» della IOP I14Y.

Ora è possibile registrare anche il periodo di conservazione legale di una collezione di dati. Per i dati raccolti una sola volta, viene specificata la data esatta in cui devono essere cancellati. Nel caso di una collezione di dati aggiornata periodicamente, viene utilizzato un campo di testo libero per descrivere l’intervallo di tempo entro il quale il proprietario dei dati li cancellerà, ad esempio «cinque anni dopo la fine dell’anno solare in corso». 

I nuovi campi «Confidenzialità» e «Periodo di conservazione» non sono previsti dallo standard DCAT, bensì offerti quale servizio aggiuntivo. Non è pertanto obbligatorio compilarli. Una panoramica dettagliata di tutti i campi da compilare della piattaforma di interoperabilità I14Y può essere [trovata qui](https://i14y-ch.github.io/handbook/de/anhang/eingabefelder/) (pagina attualmente disponibile solo in tedesco). 

## Utenti esterni alla Confederazione meglio integrati
*20.02.2024*

Con il lancio della nuova versione, il 4 dicembre 2023, la piattaforma I14Y è collegata all’ [eIAM](https://www.eiam.swiss/)  (accessible via CH-LOGIN ou par IdP) per descrivere il profilo dei suoi utenti, oltre che all’AdmnDir, il registro del personale della Confederazione. Questa nuova possibilità consente agli utenti esterni alla Confederazione di registrarsi come responsabili di progetti e di partecipare alla manutenzione attiva dei metadati. Questa funzionalità consente una migliore collaborazione tra gli utenti all’interno e all’esterno della Confederazione sulla piattaforma di interoperabilità e uniforma l’elaborazione tra le diverse modalità di connessione. 

## Rafforzare la collaborazione con i Cantoni e i Comuni 
*20.02.2024*

La piattaforma I14Y si sta sviluppando per divenire il catalogo nazionale dei metadati della Svizzera. Sempre più Cantoni e ora anche i primi Comuni intendono utilizzare la piattaforma per inventariare i propri dati. Il Cantone di Basilea Città ha presentato all’Amministrazione Digitale Svizzera [Digitalen Verwaltung Schweiz](https://www.digitale-verwaltung-schweiz.ch/) il Projekt Basel+, che comprende le esigenze e richieste di Cantoni e Comuni nei confronti della IOP I14Y. La collaborazione con i Cantoni e i Comuni consente di individuare le esigenze comuni in relazione a un catalogo nazionale di dati. Il progetto è stato avviato dal Cantone di Basilea Città; al momento nell’organizzazione sono rappresentati anche i Cantoni di Argovia, Basilea Campagna, Turgovia, Berna e Zurigo, nonché la città di Berna. 

## Changelog – Note sulla versione rilasciata 
*20.02.2024*

La IOP 14Y è soggetta a continui sviluppi. Ad ogni nuova versione vengono aggiunte nuove funzioni e risolti bug. Le modifiche, i miglioramenti e le correzioni dei bug più importanti sono ora descritti nel manuale I14Y [Changelog im I14Y-Handbuch](https://i14y-ch.github.io/handbook/de/changelog/).

## IOS parteciperà al GovTech Hackathon 2024
*20.02.2024*

{{< figure src="https://opendata.ch/wordpress/files/2022/12/GoVTech_Hackthon_NL_2048x1150-1024x575.jpg" alt="Logo GovTech-Hackathon" width="250px" class="float-left img-news-thumb" >}}

Il [GovTech Hackathon](https://opendata.ch/events/govtech-hackathon-2024) sta entrando nella sua seconda fase. Il 15 e 16 marzo 2024, sviluppatori, esperti e parti interessate provenienti dall’amministrazione, dall’economia e dalla società civile si incontreranno a Zollikofen per lavorare insieme su questioni specifiche. Si ricercheranno soluzioni che rendano i servizi digitali delle autorità facili da usare, interoperabili e sostenibili. Il team I14Y interverrà all’evento e sottoporrà due sfide ai partecipanti. Un resoconto dell’hackathon sarà pubblicato sul sito web [OpenData.ch-Website publiziert](https://opendata.ch/projects/). 

## Accesso sicuro per tutti con un semplice clic
*06.12.2023*

{{< figure src="/handbook/img/news/kachel_bern.png" alt="eIAM-Kachel für den Kanton Bern" width="250px" class="float-left img-padding-right" >}}

Il Cantone di Berna intende sfruttare le possibilità offerte dall’IOP I14Y per tenere un inventario di dati interno e scambiare liste di codici all’interno del Cantone. Il presupposto è che tutti gli impiegati del Cantone possano accedere in modo semplice alle parti della piattaforma ad uso interno del Cantone. Inoltre, è importante che il Cantone non abbia grandi oneri amministrativi supplementari: i nuovi collaboratori devono essere registrati automaticamente e gli account relativi alle persone che se ne vanno devono essere cancellati automaticamente.

In stretta collaborazione con il fornitore di software Bedag, con l’ufficio preposto all’informatica e all’organizzazione del Cantone di Berna nonché con l’Ufficio federale dell’informatica e della telecomunicazione, il team I14Y ha implementato una soluzione efficace: il provider cantonale di identità elettroniche è stato collegato al sistema centrale di accesso e autorizzazione dell’Amministrazione federale (eIAM) attraverso un’interfaccia elettronica. Ora il Cantone può attivare o bloccare l’accesso alla piattaforma direttamente partendo dalla propria gestione degli utenti. Gli utenti possono accedere al loro account sull’IOP I14Y semplicemente cliccando su «Login».

Questa soluzione potrebbe essere sfruttata anche da altri Cantoni che desiderano dare accesso all’IOP I14Y ai collaboratori delle proprie amministrazioni. È anche plausibile che in futuro la soluzione elaborata possa essere utilizzata per collegare le infrastrutture informatiche cantonali ad altre piattaforme federali.

## L’importanza dei concetti
*06.12.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol für Konzepte" width="250px" class="float-left img-news-thumb" >}}

Sull’IOP I14Y, un concetto descrive un elemento dati in modo univoco e completo. Può essere espresso sotto forma di cifre, di stringa o di lista di codici con valori predefiniti. Da questa primavera, agli utenti è consentito registrare concetti sull’IOP I14Y. Questa possibilità è sempre più utilizzata. Nel frattempo sono stati pubblicati circa 170 concetti armonizzati, per la maggior parte sotto forma di liste di codici. Sono praticamente finiti i tempi in cui ogni organizzazione doveva occuparsi delle proprie liste di codici. D’ora in poi, si potrà fruire delle liste di codici compilate dai servizi competenti semplicemente attraverso un’interfaccia elettronica.

## L’IOP I14Y agli onori
*06.12.2023*

{{< figure src="/handbook/img/news/egov-pokale.jpg" alt="Pokale des eGovernment-Wettbewerbs" width="250px" class="float-left img-news-thumb" >}}

Nella finale del 22° concorso internazionale eGovernment, l’IOP I14Y dell’UST si è piazzata al secondo posto nella categoria «miglior progetto di digitalizzazione». Nel 2023 le autorità e gli enti pubblici di Germania, Austria e Svizzera avevano inoltrato circa 80 progetti di modernizzazione e digitalizzazione delle amministrazioni. Il premio è stato ritirato a Berlino da Mathias Born e Max Zurkinden del servizio di interoperabilità, in rappresentanza dell’intero team, molto fiero di questo riconoscimento.

## Il video sull armonizzazione dei dati in Svizzera
*18.04.2023*

Come funzionano il principio «once-only» e la piattaforma di interoperabilità I14Y? Come sono collegate le due cose? Nel video di tre minuti «Con la piattaforma I14Y verso il futuro digitale della Svizzera» troverete risposte semplici e comprensibili a queste ed altre domande.

{{< youtube_custom U0CpW1bNIdU >}}

## Il manuale della piattaforma I14Y è online
*07.08.2023*

{{< figure src="/handbook/img/news/handbuch.png" alt="I14Y-Symbol Handbuch" width="250px" class="float-left img-news-thumb" >}}

Come è nato il criptico nome della piattaforma di interoperabilità I14Y? Chi può accedere a quali metadati? E come deve essere compilato un determinato campo? Troverete le risposte a queste e ad altre domande nel nuovo manuale I14Y appena pubblicato. Nella prima parte della pubblicazione online viene spiegato come la piattaforma contribuisca ad armonizzare i dati amministrativi. Nella seconda parte sono poi illustrate le singole procedure passo per passo. Il manuale è disponibile al link seguente: [handbook.i14y.admin.ch](https://handbook.i14y.admin.ch)  ed è in costante aggiornamento. Chi lo desidera può inoltre contribuire con passaggi di testo. Per sapere come, basta consultare il manuale (attualmente disponibile solo in tedesco, la traduzione seguirà a breve). 

## Novità sulla piattaforma I14Y: scheda «Concetti»
*07.08.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Sulla piattaforma I14Y è da ora disponibile una nuova scheda intitolata [I14Y-Konzepte](https://www.i14y.admin.ch/de/concepts). A questa voce sono disponibili ad esempio liste di codici completate da descrizioni dettagliate. Il concetto descrive le informazioni contenute in un elemento dati in modo chiaro e completo. L’elemento dati può essere un numero, una stringa, una data o una lista di codici. Grazie alla funzione di ricerca, è semplice effettuare ricerche all’interno di questa offerta di concetti in rapida crescita. Per quanto possibile, nelle proprie collezioni di dati vi consigliamo di utilizzare concetti esistenti.

## Chatbot I14Y
*07.08.2023*

{{< figure src="/handbook/img/news/chatbot.png" alt="I14Y-Symbol für den Chatbot" width="250px" class="float-left img-news-thumb" >}}

Il nostro [I14Y-Chatbot](https://www.i14y.admin.ch/de/labs/chatbot) risponde a domande sull’armonizzazione dei dati in generale e sulla piattaforma di interoperabilità in particolare. L’intelligenza artificiale generativa utilizza il manuale I14Y come fonte principale. In futuro, il chatbot sarà anche in grado di rispondere a semplici domande sui metadati pubblicati sulla piattaforma II14Y. Anche se per il momento il chatbot è stato addestrato con contenuti in lingua tedesca, può fornire informazioni anche in altre lingue.

Il chatbot I14Y è un esperimento che è stato sviluppato in occasione di una giornata di gruppo. Può capitare che il chatbot abbia delle «allucinazioni» e occasionalmente può fornire informazioni false. Pertanto, vi raccomandiamo di verificare attentamente tutte le risposte.

## La piattaforma I14Y è in finale al 22° concorso eGovernment
*07.08.2023*

Quest’anno, in finale sono arrivati 18 team composti da dipendenti delle autorità pubbliche con i loro progetti sulla digitalizzazione e sulla trasformazione della pubblica amministrazione. La giuria ha già votato e ora sta a voi votare per il premio del pubblico. Partecipate alla votazione online e aiutateci a far vincere il premio del pubblico alla piattaforma I14Y! [Online-Voting](https://www.egovernment-wettbewerb.de/online-voting/online-voting.html)!

## Accesso facilitato alla piattaforma di interoperabilità I14Y grazie a eIAM
*16.02.2023*

{{< figure src="/handbook/img/news/02_eiam.jpg" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Accesso facilitato alla piattaforma di interoperabilità I14Y grazie a eIAM
Grazie a eIAM, ora la piattaforma di interoperabilità I14Y (I14Y-IOP) è accessibile ancora più facilmente per gli utenti dei Comuni, dei Cantoni, delle istituzioni e della Confederazione. Una volta effettuato l’accesso, tramite l'interfaccia dell’Amministrazione è possibile pubblicare i metadati della propria organizzazione.
eIAM è il sistema centrale di accesso e di autorizzazione dell’Amministrazione federale per le applicazioni web e per quelle mobili native. Tutti gli utenti che dispongono di un account eIAM o CH-Login possono ora accedere facilmente all’I14Y-IOP. Questa modalità di connessione consente non solo di risparmiare, ma anche di incrementare il livello di sicurezza.

Gli utenti dell’Amministrazione federale possono continuare ad accedere con la smartcard.

## Novità sull’I14Y-IOP: Dati di base degli edifici e delle abitazioni 
*16.02.2023*

{{< figure src="/handbook/img/news/03_ewg.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

I dati di base di edifici e abitazioni sono descritti nel catalogo di metadati I14Y e sono pronti per essere riutilizzati. Le descrizioni dettagliate della struttura dei dati forniscono un elenco completo dei dati disponibili nel registro, contribuiscono alla trasparenza dei dati disponibili e promuovono il riutilizzo degli standard ufficiali.
L’API utilizzata per mettere a disposizione i dati (MADD) del registro è stata pubblicata nel repository API di I14Y. 
Volete che anche i vostri metadati o le vostre API siano pubblicati sulla piattaforma di interoperabilità I14Y? Allora contattateci scrivendo all’indirizzo i14y@bfs.admin.ch.

## L'UST partecipa al GovTech Hackathon
*16.02.2023*

{{< figure src="/handbook/img/news/01-i14y.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Il 23 e 24 marzo 2023 il settore TDT della Cancelleria federale organizza un GovTech Hackathon a Zollikofen. Sviluppatori, esperti e altre persone interessate provenienti dall’amministrazione, dall’economia e dalla società civile lavorano insieme su problemi concreti (challenges) con l’obiettivo di rendere i servizi digitali delle autorità facili da usare, interoperabili e sostenibili. Naturalmente parteciperà anche il team I14Y. Chi desidera prendere parte all’evento può iscriversi entro il 15 marzo. 





