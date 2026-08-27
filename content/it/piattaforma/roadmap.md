---
title: Roadmap
slug: roadmap
translationKey: roadmap
weight: 40
type: docs
keywords: [I14Y, piattaforma di interoperabilità, Architettura di sistema, tecnologia, banca dati]
---

La piattaforma di interoperabilità I14Y è sviluppata su mandato della Confederazione dall’Ufficio federale di statistica (UST) in collaborazione con l’Ufficio federale dell’informatica (UFIT). La fase di progetto dura fino alla fine del 2026. Successivamente, l’UST assumerà l’esercizio di I14Y.

Durante la fase di progetto, l’ampiezza delle funzionalità della piattaforma viene costantemente ampliata. Le richieste di nuove funzionalità possono essere presentate al Servizio di interoperabilità. Quest’ultimo elabora quindi la specifica di dettaglio, definisce le priorità insieme al comitato direttivo e al Comitato Gestione nazionale dei dati (NaDB) e coordina i lavori di sviluppo e implementazione.

{{<alert title="Ogni proposta è ben accetta" color="success">}}
Se scoprite una possibilità di miglioramento o un errore sulla piattaforma di interoperabilità I14Y, il Servizio di interoperabilità vi è grato per una segnalazione. Potete inviare proposte di nuove funzionalità nel [repository Feature Requests](https://github.com/metadata-swiss/feature-requests/issues) su GitHub oppure via [e-mail](mailto:i14y@bfs.admin.ch). Descrivete la funzionalità desiderata nel modo più preciso possibile. Su GitHub le proposte possono anche essere commentate.
{{</alert>}}

I14Y viene sviluppata secondo il cosiddetto Agile Release Train (ART). Le funzionalità vengono costantemente specificate, sviluppate e implementate. Le funzionalità previste per le varie fasi di sviluppo sono documentate nella roadmap qui sotto; per informazioni di dettaglio sulle singole funzionalità è possibile contattare il Servizio di interoperabilità. Le priorità possono cambiare, ad esempio se nuove funzionalità vengono altamente prioritarizzate. La roadmap viene aggiornata prima dell’inizio di ogni nuovo periodo di sviluppo (_Program Increment_, PI). Le prossime fasi sono descritte in modo più dettagliato, mentre per le fasi successive vengono indicati obiettivi più generali.

{{< mermaid width="650px" >}}
timeline
    title Roadmap Piattaforma di interoperabilità I14Y

    section 2026

        T1 2026 (01.2026 - 03.2026)
        : ⭐ Introduzione di tabelle di mapping per documentare le differenze tra i concetti.
        : Vengono introdotti URI/permalink per tutti gli oggetti.
        : Le strutture complesse di set di dati possono essere modificate tramite l’interfaccia web (parte 1/2).
        : Lavori aggiuntivi sulle strutture – riutilizzo dei concetti (parte 1/2).

        T2 2026 (03.2026 - 06.2026)
        : Le strutture complesse di set di dati possono essere modificate tramite l’interfaccia web (parte 2/2).
        : Riutilizzo dei concetti (parte 2/2).
        : Rilascio del codice sorgente (pubblicazione open source).
        : Introduzione di metadati di audit (audit trail minimale).
        : Miglioramento dell’esperienza utente.
        : Sviluppi congiunti con metadata.swiss.

        T3–T4 2026 (06.2026 - 12.2026)
        : Lavori di manutenzione (correzioni di errori e piccoli miglioramenti).
        : Conclusione della fase di progetto.
        : Sviluppi congiunti con metadata.swiss.

    section 2027
        T1–T4 2027
        : Fase d’esercizio

{{< /mermaid >}}

*⭐ Le voci contrassegnate con un asterisco sono proposte del progetto DVS BS+.*

### Open source
Il codice di programma della piattaforma di interoperabilità I14Y sarà pubblicato con una [licenza libera](https://www.gnu.org/licenses). Il Servizio di interoperabilità pubblicherà il codice sorgente al più tardi entro la fine della fase di progetto, quindi entro la fine del 2026. Ciò avviene in conformità con la legge federale sull’impiego di mezzi elettronici per l’adempimento dei compiti delle autorità ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/it#art_9)). Secondo l’articolo 9, le autorità federali devono — per quanto possibile — rendere disponibili liberamente i propri codici sorgente.

{{<card header="Base legale" title="__Art. 9 Software open source__" footer="Legge federale sull'impiego di mezzi elettronici per l'adempimento dei compiti delle autorità [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/it#art_9)">}}
Per quanto possibile e opportuno e se sono tutelati i diritti di terzi, le autorità federali assoggettate alla presente legge pubblicano il codice sorgente dei software che esse sviluppano o fanno sviluppare per l’adempimento dei propri compiti. Autorizzano ogni persona a utilizzare, sviluppare e trasmettere i software senza richiedere il pagamento di licenze.
{{</card>}}

I14Y pubblica codici sorgente e script sulla [piattaforma GitHub](https://github.com/metadata-swiss) sotto il nome i14y-ch.
