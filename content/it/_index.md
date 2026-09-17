---
title: Catalogo dei metadati per la Svizzera
slug: benvenuto
translationKey: welcome
description: "La piattaforma di interoperabilità I14Y è il registro centrale di dati, interfacce elettroniche e servizi offerti dalle autorità in Svizzera. La piattaforma fornisce inoltre strumenti che consentono di utilizzare i dati più volte. Questo alleggerisce l'onere di imprese, cittadini e autorità."
keywords: [I14Y, piattaforma di interoperabilità I14Y, IOP, introduzione, interoperabilità, utilizzo multiplo, Svizzera, raccolta di dati, interfaccia elettronica, collezioni di dati, API, principio «once-only», utilizzo secondario di dati, armonizzazione, standardizzazione]
weight: 0
type: docs
---

{{% pageinfo color="primary" %}}
La traduzione è in corso: Grazie per il vostro interesse nella versione italiana del manuale I14Y. Attualmente sono in corso di traduzione. Si prega di consultare il sito più tardi. In alternativa, leggere il [manuale in tedesco](https://handbook.i14y.admin.ch), potete chiedere al nostro [robot di testo sperimentale](https://www.i14y.admin.ch/de/labs/chatbot) in italiano. Oppure potete [contattare il team di I14Y](mailto:i14y@bfs.admin.ch). 
{{% /pageinfo %}}

![Scena dal video esplicativo sulla piattaforma di interoperabilità I14Y](/img/i14y-film_55.png)

{{<alert title="Avviso importante sull’API I14Y" color="warning">}}

L’8 luglio 2026 entrerà in produzione un _breaking change_ dell’API I14Y relativo ai concetti e alle prestazioni delle autorità: il campo `identifier` verrà rimosso e sostituito da `identifiers`. Vi preghiamo di verificare per tempo le integrazioni interessate. I dettagli sono disponibili direttamente nel contributo [Breaking change dell’API I14Y](/it/news/#breaking-change-dellapi-i14y).

{{</alert>}}

Quali dati sono disponibili? E come fare per reperirli? La piattaforma di interoperabilità I14Y (IOP I14Y) è il registro centrale di dati, interfacce elettroniche e servizi offerti dalle autorità delle amministrazioni pubbliche in Svizzera. La piattaforma rende i dati reperibili e mostra come si fa ad accedervi.  

L'IOP I14Y riporta se i dati in questione sono accessibili liberamente o con restrizioni, se sono conformi a uno standard, chi è responsabile della collezione di dati, quanto spesso vengono aggiornati e come viene valutata la loro qualità. La piattaforma aiuta quindi a capire il contesto di una collezione di dati. L'IOP I14Y contiene esclusivamente metadati; i dati effettivi restano presso le autorità competenti. L'IOP I14Y promuove lo scambio efficiente dei dati all'interno delle amministrazioni pubbliche e tra le autorità, le imprese e la popolazione. 

Le autorità e le imprese parastatali possono utilizzare la piattaforma come strumento per realizzare un inventario delle loro collezioni di dati. Al contempo, l'IOP I14Y funge da strumento di armonizzazione dei dati, in modo che possano essere utilizzati più volte. Ciò permette di evitare la raccolta di dati ridondanti, in linea con il _principio «once-only»_ promosso dalla Confederazione. 

{{<alert title="Che cos'è il <i>principio «once-only»?</i>?" color="info">}}

Finora la popolazione e le imprese erano spesso obbligate a comunicare più volte le loro informazioni allo Stato. Con il [programma Gestione dei dati a livello nazionale](https://www.bfs.admin.ch/bfs/it/home/nadb/nadb.html), la Confederazione si è posta l'obiettivo di evitare doppie rilevazioni. Ciò permetter di alleggerire l'onere delle imprese e della popolazione. E lo Stato può fornire le sue prestazioni in modo più efficiente. 

```mermaid
flowchart TD
    subgraph titel[" "]
        
    subgraph aktuell1[ ]
            B(fa:fa-user Cittadina/ \nCittadino)
            B-->|riferisce a|C(fa:fa-building \nufficio 1)
            B-->|riferisce a|D(fa:fa-building \ufficio 2)
            B-->|riferisce a|E(fa:fa-building \nufficio 3)
            B-->|riferisce a|F(fa:fa-building \nufficio 4)
        end
    
        subgraph ziel1[ ]
            BB(fa:fa-user Cittadina/ \nCittadino)
            BB-->|riferisce a|CC(fa:fa-table \nAmt 1)
            CC-->DD(fa:fa-building \nufficio 2)
            CC-->EE(fa:fa-building \nufficio 3)
            CC-->FF(fa:fa-building \nufficio 4)
            CC-->GG(fa:fa-building \nufficio ...)
        end
    end
    
    style B fill: #Bfe2ab
    style BB fill: #Bfe2ab
    style C fill: #Ff987a
    style CC fill: #Ff987a
    style D fill: #Ff987a
    style DD fill: #Ff987a
    style E fill: #Ff987a
    style EE fill: #Ff987a
    style F fill: #Ff987a
    style FF fill: #Ff987a
    style GG fill: #Ff987a
```

Affinché il _principio «once-only»_ diventi realtà, le diverse unità amministrative devono essere in grado di scambiarsi i dati direttamente. Perché ciò avvenga i presupposti sono che esista una base giuridica e che lo scambio sia consentito, in particolare dal punto di vista della protezione dei dati. Inoltre, occorre chiarire se e per quanto tempo i dati possono essere conservati per un eventuale utilizzo multiplo. Alcuni Cantoni hanno già sancito per legge l'utilizzo multiplo dei dati.  

{{</alert>}}
