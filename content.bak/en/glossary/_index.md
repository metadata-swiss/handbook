---
title: Glossary
translationKey: glossary
slug: glossar
weight: 70
type: docs
---

{{<table_of_contents>}}
<!-- Leerzeile erzeugt Abstand -->

&nbsp;

The I14Y glossary contains all key terms relevant for understanding and working with the interoperability platform. Terms that  have entries in the Federal Administration's TERMDAT terminology database are linked accordingly.

## Acceptance environment
The acceptance environment (also known as the user acceptance testing [UAT] environment) enables the testing of new software under realistic conditions before it is released. In the case of I14Y, new functions are tested in this environment before release.

## Application
Software developed to perform certain processing functions for a specific purpose. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/70368)

## Application programming interface (API)
An application programming interface (API) enables different systems and applications to communicate with each other even if the systems are not directly linked. For example, APIs can be used to retrieve information from a data collection without having to download the entire collection. In technical jargon, these are mostly referred to using the abbreviation APIs. They are widely used in modern software development to connect individual subsystems or to retrieve data from another system. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/500882).

## Codelist
A codelist is a structured list of values (codes) that are used in a specific context. It may be open (expandable) or closed (non-expandable) and may be standardised (e.g. ISO 3166 for country codes) or defined on an organisation-specific basis.

## Core geodata
Core geodata are geodata that are collected on the basis of federal, cantonal or municipal legislation. Examples include the official cadastral survey, zoning maps and the inventory of upland moors. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/71443)

## Core Public Service Vocabulary Application Profile (CPSV-AP)
The [Core Public Service Vocabulary Application Profile](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile/about) (CPSV-AP) is a data model that allows public administrations to describe their services in a standardised way in a machine-readable format that ensures semantic operability. 

## Core vocabularies
Core vocabularies are simplified, extensible data models that capture the core attributes of an entity such as an individual or a public organisation ‒ independently of context. 
Examples:   
• EU Core Vocabularies 
• [Dublin Core Metadata](https://www.dublincore.org/)

## Data Catalog Vocabulary (DCAT) 
_DCAT_ is a standardised vocabulary for describing datasets and data services. It enables data to be structured in a standardised way for better discoverability, readability and archiving. It also facilitates online data exchange. DCAT is based on the Resource Description Framework (RDF) and is maintained by the World Wide Web Consortium (W3C). Further information can be found at [W3.org](http://www.w3.org/TR/vocab-dcat).   

The standard can be customised using specific application profiles. The Swiss Application Profile [DCAT-AP CH](https://www.dcat-ap.ch/) is based on the profile of the European Union and is tailored to the specific requirements of Swiss data spaces. It is developed by the Open Government Data specialised group within the eCH standardisation body [eCH](/handbook/de/glossar/#ech).

The DCAT vocabulary lists classes and properties. __Classes__ describe higher-level concepts such as organisations, persons, data collections or websites. Each class has __properties__ that provide further details, e.g. titles, keywords or URLs.

Some terms may serve as either classes or elements. DCAT differentiates between __classes and properties__ through spelling conventions: classes begin with an uppercase letter, properties with a lowercase letter. For example, the class for publisher is `dcat:Publisher`, whereas to describe who published a dataset, lowercase is used: `dcat:publisher`. 

DCAT has four main classes: The __Catalog__ class (`dcat:Catalog`) describes a collection that can contain data records or application programming interfaces (APIs). The __Dataset__ (`dcat:Dataset`) class provides data on the individual dataset and the __Data Service__ (`dcat:Dataservice`) class describes APIs. __Distribution__ (`dcat:Distribution`) describes a specific representation of the dataset, for example its existence as a CSV export file.

The I14Y platform also describes digital public services, which is why DCAT was extended to include the __Public Service__ (`dcat:Publicservice`). The [Core Public Service Vocabulary Application Profile](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile) of the European Union is used for these entries.

## Data catalogue
Organised inventory of data assets in an organisation. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/64371)

## Data custodian
A data custodian manages the technical environment where data resides and acts exclusively on behalf of the data owner. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502924)

## Data element
A data element is the smallest unit used to describe a dataset. The data element is often also referred to as an attribute, (defined) variable or "column". The data element consists of individual values, e.g. OASI number, the number of vacant apartments or water temperature readings. Each data element refers to a data element concept. 

## Data element concept (concept)
The data element concept provides a clear and comprehensive description of the information represented by a data element. The concept may take the form of a number, a character string, a date or a codelist listing predefined values. On I14Y, these concepts are described in accordance with the ISO 11179-1:2023. The [ chapter on entering concepts](de/publikation/konzepte/) offers a step-by-step instructions (currently only in German). 

## Data format
Definition of the structure of data that gives the information its meaning and encompasses its content and presentation. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502964)

## Data governance
System of decision rights and accountabilities for information-related processes, executed according to agreed-upon models which describe who can take what actions with what information, and when, under what circumstances, using what methods. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/387641)

## Data harmonisation
Data harmonisation is the process of integrating and standardizing data from various sources into a uniform structure, terminology and meaning so that it is consistent, comparable and reusable. The aim is to overcome semantic and structural differences in order to improve the interoperability and quality of the data.

## Data lifecycle
The data lifecycle describes the various phases that data goes through from creation to deletion. This typically includes collection, storage, utilisation, transmission, archiving and deletion. Each phase requires specific technical, organisational and legal measures to ensure the protection, quality and security of the data.

## Data management
Practice of collecting, keeping and using data securely, efficiently, and cost-effectively. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502636)

## Data model
Collection of concepts that can be used to describe the structure of a database. [To the definition in TERMDAT]( https://register.ld.admin.ch/termdat/502865)

## Data object
A data object is a distinct logical data element that can be described, exchanged or used in a digital manner. On I14Y, the descriptions of data objects such as datasets, APIs and government services are standardised to facilitate the discovery and multiple use of data.

## Data owner
Natural person who or federal body which, alone or jointly with others, determines the purpose and the means of processing personal data. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502925)

## Data producer 
Natural person or system authorised by the data owner responsible for data processing to create, modify and/or delete data. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502926)

## Data protection
Legal measures which protect the privacy and the fundamental rights of natural persons when their data is processed by  persons or federal bodies. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/52411)

## Data provider
Data providers produce and/or own data that they make available in dedicated data spaces. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/503084)

## Data repository
A repository is a storage location for structured data, programmes or metadata that can be accessed by multiple users or systems.

## Dataset
A dataset is a structured collection of data that relates to a specific topic or question and is organised in a specific way. On the I14Y interoperability platform, datasets must be described in accordance with DCAT-CH and feature at least one distribution or be accessible via an API. Further information on the structure of a dataset on I14Y can be found in the [information model section](/handbook/en/gouvernance/informationmodel/). [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/501320)

## Data steward
In the data stewardship model, data stewards coordinate and promote the multiple use of data within a federal office. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502921)

## Data standard
A data standard is a metadata specification that describes or defines other data [ISO111179]. 
The two main types of data standards are: data models (including core vocabularies) and reference data (including concepts).

## Data structure
Method or format for organising, processing, retrieving and storing data in a computer. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502986)

## Data type
The data type classifies a data element. It specifies what type of values may be used to describe that element. The datatype is used to ensure that data is processed and interpreted correctly by a programme. Examples of datatypes include: integers, floating-point numbers, Boolean values or strings. On the I14Y platform, the datatype is described by the concept ([see section on the concept](/handbook/en/gouvernance/informationmodel/#concept)). [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/516244)

## Data user
Person or organisation that uses the data made available by one or more data spaces for its own activities. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/293654)

## DCAT distribution
Physical manifestation or representation of a dataset in a specific format. A distribution (↔ resource) is a specific representation of a dataset (link to the actual data).

## Distribution
Distribution is the provision of data for specific target groups, systems or platforms. Data distribution creates access ‒ often via interfaces, data platforms and standardised exchange formats ‒ to enable the use and reuse of data.

## eCH 
The non-profit organisation eCH promotes, develops and adopts standards in the field of e-government. Its numerous working groups include representatives from the Federal Administration and the cantons, the private sector and academia. eCH is Switzerland’s main body for standardisation in the field of e-government. Further information and documents relating to the approved standards can be found on the website [ech.ch](https://ech.ch).

## Enterprise identity management (EIAM) 
Enterprise identity and access management (EIAM) systems are used to manage and protect identities and access rights within a company or organisation. They ensure that access to a specific internet platform or application is granted only to the intended persons and regulate read, write and administration permissions. I14Y uses the EIAM system of the Federal Administration. See [Account management]( https://i14y-ch.github.io/handbook/en/platform/accounts/) for an overview of this topic. 

## European Interoperability Framework (EIF)
The aim of the [European Interoperability Framework](https://joinup.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail), is to facilitate cross-border and transsectoral interactions among European public administrations, foster collaboration and support the provision of electronic services.

## FAIR principles
The FAIR principles stipulate that data should be _(**F**indable)_, accessible _(**A**ccessible)_, interoperable _(**I**nteroperable)_ and reusable _(**R**eusable)_. D It should be retrievable via an open, free, universally implementable and standardised communications protocol. It should be endowed with a clear and accessible data usage licence to show how the data may be used. It should guarantee semantic and syntactic interoperability. FAIR data relies on the use of precise contextual metadata and both the content and format should comply with major international standards. The vocabulary used should align with the FAIR principles and common standards must be applied to facilitate the free, conditional or fee-based reuse of the data. Basic information on the FAIR principles can be found in this [Nature article](https://www.nature.com/articles/sdata201618). 

## Geocat 
[Geocat](https://geocat.ch) is a metadata catalogue for geoinformation in Switzerland and the Principality of Liechtenstein. Federal offices, cantons, communes, research institutes and companies use it to record information on their geodata, i.e. datasets with a strong geographical reference, maps and aerial images. This service is provided by the Federal Office of Topography swisstopo. Further information can be found in the chapter on the [right platform for every application](/handbook/en/gouvernance/platforms/).

## Geodata
Geodata is spatial data. It describes the extent and properties of areas and objects, such as their location, condition, utilisation and legal status. Examples of widely used geodata include digital road maps and route planners.

## Government data
Government data is data that is collected, created, managed, processed and stored within the context of a legal mandate. This data can be either structured or unstructured. Individual organisational units can create inventories of their data on I14Y. Harmonised or standardised data may then be published as open government data. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/387376).

## Graph database
A database specifically designed for creating and managing graphs. Graphs use nodes, edges and properties to represent and store data in a way that goes beyond the scope of relational databases.

## Harvesting
The term “harvesting” refers to the automated collection of data.The harvesting module enables the automatic importing of catalogues of datasets made accessible by other authorities. 

## Identifier
An identifier is a defined attribute, or combination of attributes, that permits the identification of individual elements in a dataset. An identifier must be unique within a dataset,
i.e. it must enable a unique conclusion to be drawn about the identified element, and it may only be used once.

## International Organization for Standardization (ISO)
The International Organization for Standardisation (ISO) is an association of standards organisations that develops international standards in a large number of fields except for electrical engineering and communication technologies. ISO is an association under Swiss law and is headquartered in Geneva. National standardisation projects in the field of e-government are usually led by the [→ eCH association](#ech).

## Interoperability
Interoperability is the capability of independent, heterogeneous systems to integrate seamlessly. Such systems should be able to exchange information efficiently without the need for separate agreements in each case. The European Interoperability Framework (EIF) distinguishes between four levels of interoperability. Legal interoperability means that there is a sufficient legal basis for cooperation. Organisational interoperability refers to the alignment or coordination of business processes. Semantic interoperability aims to ensure that data does not have to be manually reformatted to enable the exchange of data. Technical interoperability encompasses all of the technical aspects of data exchange, including interface specifications and transmission protocols. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/71434)

## Interoperability Office (IOS)
The Interoperability Office (IOS) of the Federal Statistical Office (FSO) offers tools to support the harmonisation, standardisation and reuse of data. It develops and maintains the I14Y interoperability platform as a technical tool for this purpose. The Interoperability Office coordinates the standardisation and harmonisation of data on specific topics (e.g. energy, health, mobility or agriculture). In this context, the FSO plays the role of the _Swiss Data Steward_. 

## Linked data
Linked data are data that can be directly correlated to each other thanks to an identifier (_Uniform Resource Identifier_). If the data is freely accessible, it is also referred to as _Linked Open Data_. Data is distributed across the internet but can be accessed using standard web transfer protocols. Thanks to standardised structures, disparate data collections can be used like a single, large database. The _SPARQL_ query language is used for this purpose. It was Tim Berners-Lee, the inventor of the World Wide Web, who came up with the concept of linked open data, which aims to create a semantic web that facilitates machine-to-machine communication through structured and linkable data. The LINDAS platform is the main provider of linked public-sector data in Switzerland. Further information can be found in the [chapter on LINDAS](/handbook/en/gouvernance/platforms/#lindas). [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/503121)

## Masterdata
Masterdata is core data that is essential for public service tasks. Such data may describe people, companies or various objects such as buildings or vehicles. A conclusive catalogue of characteristics (attributes) must be available for each of these objects. Masterdata is status-oriented data that remains relatively stable over time in terms of both volume and content. A particular type of masterdata is reference data like airport or country codes, which are used to classify master data. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/379368)

## Metadata
Metadata is data that defines and describes other data. It provides crucial information about a data collection's semantics (its meaning, content, and quality) as well as the syntax (form and structure) of its attributes (variables). To ensure that the data is recorded uniformly, [→ nomenclatures] (#nomenclatures) can be recorded and registers can be linked, for example the Official Register of Swiss Communes, the International Standard Classification of Occupations (ISCO) or the General Classification of Economic Activities (NOGA). This data thus becomes metadata. Such metadata can be managed, published and exchanged on the I14Y platform.

## Metadata catalogue
A detailed inventory of all of the data collections belonging to an organisational unit, listed in a digital directory. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/71450)

## National Data Management (NaDB)
The National Data Management programme (NaDB) aims to make data management in the public sector easier and more efficient through multiple use of data. This project initiated by the Federal Council was launched in October 2019. The NaDB programme involves all federal government departments, the Federal Chancellery, all parts of Switzerland’s statistical system, representatives from the cantons, social partners and other private organisations and associations. The Federal Statistical Office (FSO) is leading the programme’s implementation. I14Y is the technical cornerstone of the programme. Further information can be found [on the programme’s website](https://www.bfs.admin.ch/bfs/en/home/nadb/nadb.html). [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/481315)

## Nomenclature
A nomenclature is a collection of designations from a specific subject area or field of application that is binding in certain contexts. Examples of nomenclatures include registers of communes or lists of countries. A nomenclature contains codes and sections of descriptive text, possibly in different languages. [To the definition in TERMDAT](https://www.termdat.bk.admin.ch/entry/94036)

## Open data
Open data is data that can be used, processed, analysed and transmitted freely, without any specific legal, financial or technical restrictions. From a legal standpoint, such data must be able for use and processing free of charge. From a technical standpoint, open data must be machine-readable. The publication of open data must ensure compliance with the regulations governing data protection, information protection, copyright and trade secrets. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/387377)

## Once-only principle
The aim of the once-only principle is to ensure that citizens and companies only have to report certain information to the authorities once and that this information is then exchanged between the authorities where explicitly provided for. The once-only principle is intended to reduce administrative burden for citizens, companies and public authorities Implementation of the once-only principle is a key objective of the National Data Management (NaDB) programme. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/480493)

## Ontology
An ontology is a formal way of describing knowledge as a set of concepts and the relationships between those concepts within a specific field. It is like a vocabulary or set of rules that establishes a shared understanding of a particular subject. Ontologies facilitate the exchange and reuse of knowledge, as well as communication and reasoning between people and computer systems.

## Personal data
Information relating to an identified or identifiable natural person. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/52451)

## Public service
A mandatory or discretionary set of activities performed, or able to be performed, by or on behalf of the authorities, publicly funded and arise from public policy.

## Reference data
Prefined value lists or directories that are used for description and categorisation. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/502771)

## Reference metadata
According to Eurostat, reference metadata (sometimes called explanatory metadata) describes the content and quality of statistical data from a semantic perspective. It includes explanatory texts on the context of the statistical data and the methodologies used to collect and aggregate it, in addition to quality and dissemination characteristics of the data.

## Resource Description Framework (RDF)
RDF is the basic language of the semantic web and enables metadata to be represented in the form of triples (subject-predicate-object).

## Statistical Data and Metadata EXchange (SDMX) 
SDMX is an initiative spearheaded by the World Bank and the European Union to standardise data exchange between international organisations and their member countries. SDMX sets out standards for data formats, metadata and methods of data transmission. Further information can be found on [sdmx.org](sdmx.org). Codelists in SDMX format can be entered in I14Y (see [Erfassen von Konzepten, currently only in German](/handbook/de/publikation/konzepte/)). 

## SPARQL
Standard query language for retrieving and manipulating data represented in RDF format. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/503123)

## Statistical data
Statistical data is all data that has been collected or passed on for statistical purposes, in particular based on the Federal Statistics Act, and is therefore subject to statistical confidentiality.

## Swagger
[Swagger](https://swagger.io/) is a set of open-source tools to facilitate the publication and use of application programming interfaces (APIs). On the I14Y platform, the documentation features are particularly useful. The Swagger web interface offers a clear overview of what can be achieved with each API and allows users to directly test queries in all available endpoints. Further information can be found under [Elektronische Schnittstelle (API) abrufen](/handbook/de/metadaten_abrufen/api)(currently only in German).

## Triplestore
A database specially designed for the storage and retrieval of RDF data. Like a relational database, it stores data for retrieval through semantic queries. Unlike a relational database, a triplestore only stores one type of data: triples. It does not therefore require an initialisation phase for the entry of new data. In other words, unlike for a relational database, there is no need to create tables. Moreover, a triplestore is optimised to store large numbers of triples,and for their retrieval using the SPARQL query language.

## Triple
The smallest resource description structure in the RDF model. Each statement in the RTF model consists of three elements: two nodes connected by an edge which represent subject, predicate and object. In RDF these statements, known as triples, are commonly visualised in the form of a graph.

## Uniform Resource Identifier (URI)
URIs enable the online identification of both abstract and physical resources. In RDF, resources are identified using URIs, which makes it possible to combine statements from different sources. [To the definition in TERMDAT](https://register.ld.admin.ch/termdat/70183) 

## Validation
Validation is the process of verifying whether a specific content may be included in a system or directory. For a dataseton I14Y, this involves checking the data format, integrity, value ranges and nomenclatures before its metadata is made available to the public. Validation is performed either by _local data stewards_ or the _Interoperability Office_.
