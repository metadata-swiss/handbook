---
title: Gestione degli account
slug: accounts
translationKey: accounts
weight: 50
type: docs
keywords: [I14Y, piattaforma di interoperabilità, accessi, account utente, EIAM, CH-Login, Login]
---

Chiunque voglia registrare dati sulla piattaforma di interoperabilità I14Y ha bisogno di un account utente. Lo stesso vale per chi desidera vedere informazioni sul proprio ente che non sono state (ancora) rese pubbliche. Gli accessi sono controllati per mezzo di _Enterprise Identity and Access Management (EIA)_, un servizio per la Confederazione gestito dall'Ufficio federale dell'informatica.  

Per accedere all'area riservata della piattaforma I14Y è necessario disporre di un account presso un ente che fornisce soluzioni di identificazione digitale. I dipendenti dell'Amministrazione federale possono accedere servendosi del loro [Fed-Login](https://www.eiam.swiss). Oltre al Fed-Login sono disponibili diverse altre possibilità come il CH-Login, gli identificativi elettronici di SWITCH o di alcuni Cantoni (Berna, Sciaffusa, Zugo e Ginevra. Per maggiori informazioni, consultare la [tabella sulle possibilità di identificazione](/handbook/de/anhang/eiam) disponibile nella scheda «Allegato». 

Per accedere, procedere nel modo seguente:

1. Sulla piattaforma di interoperabilità I14Y, cliccare in alto a destra sull'icona di connessione. Selezionare l'ente presso il quale si dispone di un account e quindi di un modo per identificarsi. Effettuare il login presso l'ente selezionato oppure creare un nuovo account. Attenzione: i dipendenti dell'Amministrazione federale devono utilizzare il Fed-Login anziché il CH-Login, perché altrimenti potrebbero sorgere incompatibilità. Se il processo si interrompe improvvisamente, potrebbe essere necessario eliminare i _cookies_. Per aprire la finestra dove è possibile cancellarli, basta utilizzare la combinazione di tasti Ctrl + Shift + Delete nel browser. 

2. In secondo luogo devono essere assegnati i diritti di accesso alla piattaforma di interoperabilità. Gli enti più grandi gestiscono gli account utenti da soli (v. sotto](#kontenverwaltung-in-grösseren-organisationen)). Chi fa parte di un ente di grandi dimensioni è quindi pregato di contattare il/la responsabile della gestione degli account presso il proprio ente. Chi non utilizza nessuna soluzione standard interna al proprio ente, come il Fed-Login, è invece pregato di comunicare in particolare quale indirizzo e-mail è stato utilizzato per la creazione di un account (v. punto 1). Non appena sono stati concessi i diritti di lettura o scrittura, l'utente che li ha richiesti ne verrà informato via e-mail contenente un link e un codice. L'utente deve quindi recarsi sulla pagina Internet in questione e inserirvi il codice ricevuto, in modo da collegare l'identità digitale con la piattaforma I14Y.  

```mermaid
flowchart TD
    user(fa:fa-user-circle \nL'utente crea un'identità digitale, ad esempio un login CH. \nViene attivata l'autenticazione a due fattori.
    account(fa:fa-user-plus \nI14Y-Admin assegna i diritti di lettura e scrittura.)
    code(fa:fa-file-text \nL'utente riceve un codice via e-mail, \nche serve per collegare l'identità all'account I14Y.)
    i14y(fa:fa-database \nL'utente può ora accedere all'area riservata della propria unità amministrativa sulla piattaforma di interoperabilità I14Y.

user-->account
account-->code
code-->i14y
```

Questi passaggi di impostazione sono necessari solo al primo accesso. Se in un secondo momento si desidera modificare i dettagli del proprio account, visitare l'[Area di gestione dell'account di EIAM](https://www.myaccount.eiam.admin.ch). 

{{<alert title="Quanto costa l'account?" color="info" >}}
La piattaforma di interoperabilità I14Y è sviluppata e gestita dalla Confederazione nell'ambito del programma Gestione dei dati a livello nazionale. Anche il finanziamento dei lavori di sviluppo e gestione è assicurato dalla Confederazione. A medio termine, il portale potrà essere utilizzato gratuitamente anche dai fornitori di contenuti delle amministrazioni cantonali e comunali nonché delle aziende parastatali. Il finanziamento a lungo termine sarà definito in una fase successiva. 

{{</alert>}}

##Gestione dei contenuti degli enti di grandi dimensioni 

Gli enti di grandi dimensioni sono responsabili della gestione dei propri account A tal fine mettono a disposizione in particolare il personale necessario. A seconda della situazione, l'iter per aprire un conto può variare.

Di norma, i diritti di lettura e scrittura sono attribuiti attraverso il [portale per la gestione delle persone delegate](https://www.portal.eiam.admin.ch/). Le persone responsabili per la gestione degli account utente del proprio ente ma che non hanno ancora accesso a questo portale e le persone che desiderano impostare un processo di onboarding automatizzato sono pregate di contattare il [servizio di interoperabilità](mailto:i14y@bfs.admin.ch). 

1. Per aprire un account utente individuale, visitare il portale per la gestione delle persone delegate. Nella scheda «Gestione degli utenti», selezionare la voce «Gestione delegata». Cliccare sulla freccia che precede «I14Y» e poi sul nome del proprio ente. Facendo clic su «Avanti» si apre la panoramica dettagliata con l'elenco degli utenti autorizzati. Chi non trova il proprio ente nella lista è pregato di contattare il servizio di interoperabilità.
Fare clic su «Aggiungi nuovo utente». I campi con il nome e l'indirizzo e-mail sono obbligatori. Assicurarsi di utilizzare l'indirizzo e-mail con cui la persona da aggiungere si è registrata presso il fornitore di metodi di identificazione (ad esempio CH-Login). 
3. Selezionare la persona appena registrata. Cliccare su «Avanti». A questo punto verrà richiesto di assegnare i diritti di accesso. Per prima cosa devono essere apportate alcune modifiche al profilo: per farlo, cliccare sull'icona a forma di matita. Sostituire il nome con una descrizione pregnante e sostituire il numero con l'ID del profilo visibile sulla sinistra. Sotto «ID profilo» dovrebbe apparire un nome del tipo «LocalDataSteward-1159123». Immettere il simbolo * nel campo sottostante. Cliccare su «Salva».
4. Sotto «Ruoli aziendali», selezionare il ruolo desiderato dal menù a tendina. Di norma i ruoli selezionati sono «StewardshipOrganizationViewer» (modalità di sola lettura), «Submitter» (diritto di modifica dei metadati ma non di pubblicazione) oppure "LocalDatasteward. Attribuire i diritti di lettura e scrittura appropriati al profilo cliccando su «Assegnare». Cliccare poi su «Avanti». __ATTENZIONE:__ si consiglia di attribuire un solo ruolo per account utente. È tuttavia possibile attribuire più ruoli allo stesso account. Per farlo, cliccare sull'apposito link. In questo caso la persona interessata deve selezionare il profilo con cui vuole accedere ogni volta che si collega alla piattaforma.   
5. Inserire una breve descrizione del nuovo account. Una volta fatto, inviare il messaggio di onboarding alla persona interessata cliccando sul pulsante «Invia e-mail di notifica». Nella mail viene richiesto all'utente di cliccare su un link e di inserire un codice inviato col messaggio in un modulo online. In tal modo all'identità digitale dell'utente vengono attribuiti i diritti di lettura e/o di scrittura desiderati. Nella panoramica del portale di gestione delle persone delegate è possibile vedere in qualsiasi momento quali persone hanno completato con successo il cosiddetto onboarding.