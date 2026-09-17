---
title: Glossar
slug: glossar
translationKey: glossary
weight: 70
type: docs
---

{{<table_of_contents>}}
<!-- Leerzeile erzeugt Abstand -->

&nbsp;
 
Das I14Y-Glossar enthält alle zentralen Begriffe, die für das Verständnis und die Arbeit mit der Interoperabilitätsplattform relevant sind. Begriffe, die in der Terminologiedatenbank der Bundesverwaltung TERMDAT definiert sind, sind entsprechend verlinkt. 

## Abnahmeumgebung
Die Abnahmeumgebung (auch Abnahmetestumgebung oder User Acceptance Testing (UAT) Umgebung genannt) ermöglicht es, neue Software vor der Freigabe unter realitätsnahen Bedingungen zu testen. Im Fall von I14Y werden hier neue Funktionen vor dem Release getestet.

## Anwendung
Softwareprogramm zur Ausführung von bestimmten Bearbeitungsfunktionen, das für einen speziellen Einsatz entwickelt wurde. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/70368)

## Behördenleistung
Obligatorische oder freiwillige Abfolge von Tätigkeiten, die von einer Behörde oder in deren Auftrag durchgeführt werden bzw. durchgeführt werden können und sich aus der Verwaltungspolitik ergeben. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/520805)

## Codeliste
Eine Codeliste ist eine strukturierte Auflistung von Werten (Codes), die in einem bestimmten Kontext verwendet werden. Sie kann offen (erweiterbar) oder geschlossen (nicht erweiterbar) sein und kann standardisiert (z.B. ISO 3166 für Ländercodes) oder organisationsspezifisch definiert sein.

## Core Vocabularies (Kernvokabulare)
Kernvokabulare sind vereinfachte, wiederverwendbare und erweiterbare Datenmodelle, die die grundlegenden Merkmale einer Einheit, z. B. einer Person oder einer öffentlichen Organisation, auf kontextneutrale Weise erfassen. 
Beispiele:  

• [EU Core Vocabularies](https://interoperable-europe.ec.europa.eu/collection/semic-support-centre/core-vocabularies)

• [Dublin Core Metadata](https://www.dublincore.org/)

## Data Catalog Vocabulary (DCAT) 
Das _Data Catalog Vocabulary (DCAT)_ ist ein standardisiertes Vokabular zur Beschreibung von Datensätzen und -diensten. Es ermöglicht die einheitliche Strukturierung von Informationen, wodurch die Auffindbarkeit, Lesbarkeit und Archivierung von Daten verbessert wird. Zudem vereinfacht es den Datenaustausch im Internet. DCAT basiert auf dem _Resource Description Framework (RDF)_ und wird vom _World Wide Web Consortium (W3C)_ gepflegt. Weitere Informationen sind auf [W3.org](http://www.w3.org/TR/vocab-dcat) zu finden.   

Der Standard kann durch spezifische Anwendungsprofile angepasst werden. So beruht das Schweizer Anwendungsprofil [DCAT-AP CH](https://www.dcat-ap.ch/) auf dem Profil der Europäischen Union und berücksichtigt die Besonderheiten der Schweizer Datenräume. Es wird es von der Fachgruppe «Open Gouvernement Data» des Standardisierungsgremiums [eCH](/handbook/de/glossar/#ech) entwickelt.

Das DCAT-Vokabular besteht aus Klassen und Eigenschaften. __Klassen__ beschreiben übergeordnete Konzepte wie Organisationen, Personen, Datensätze oder Websites. Jede Klasse hat __Eigenschaften__, die zusätzliche Details, z. B. Titel, Schlagworte oder Internetadressen, liefern. 

Bestimmte Begriffe können Klasse oder Element sein. DCAT unterscheidet __Klassen und Eigenschaften__ durch die Schreibweise: Eine Klasse beginnt mit einem Grossbuchstaben - eine Eigenschaft mit einem Kleinbuchstaben. So lautet die Klasse für den Herausgeber `dcat:Publisher`. Wird hingegen beschrieben, wer einen Eintrag zu eines Datensatzes publiziert hat, wird die Kleinschreibung verwendet: `dcat:publisher`. 

DCAT sieht vier Hauptklassen vor: Die Klasse __Katalog__ (`dcat:Catalog`) beschreibt eine Sammlung, die Datensätze oder elektronische Schnittstellen (APIs) enthalten kann. __Dataset__ (`dcat:Dataset`) beinhaltet Informationen zum einzelnen Datensatz und die Klasse __Data Service__ (`dcat:Dataservice`) zur elektronischen Schnittstelle. Die __Distribution__ (`dcat:Distribution`) beschreibt eine spezifische Repräsentation des Datensatzes, etwa als Export in einer CSV-Datei. 

Auf I14Y werden auch digitale Behördenleistungen (public services) beschrieben. Deshalb wurde DCAT um die Klasse __Public Service__ (`dcat:Publicservice`) erweitert. Für diese Einträge wird das [Core Public Service Vocabulary Application Profile](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile) der Europäischen Union verwendet. 

## Data Custodian (Datenhalter)
Ein Data Custodian ist verantwortlich für die sichere Haltung und Übermittlung der Daten und stellt diese gemäss den gemeinsam definierten Anforderungen in geeigneter Art und Weise allen legitimierten Nutzern zur Verfügung. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502924)

## Data Governance (Datengouvernanz)
Set von Regeln, Entscheidungsbefugnissen und Rechenschaftspflichten für informationsbezogene Prozesse, durch die festgelegt wird, wer mit welchen Informationen, wann und unter welchen Bedingungen unter Verwendung welcher Methoden welche Handlungen ausführen darf bzw. muss. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/387641)

## Data Owner (Dateneigner)
Der Data Owner ist die Person oder Stelle innerhalb einer Behörde, die für die Bearbeitung von Daten in ihrem Verantwortungsbereich zuständig ist. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502925)

## Data Producer (Datenbearbeiter)
Person oder System, das vom Data Owner für die Datenverarbeitung verantwortlichen Stelle autorisiert ist, Daten zu erstellen, zu ändern und/oder zu löschen. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502926)

## Data Repository
Ein Repository ist ein Speicherort für strukturierte Daten, Programme oder Metadaten, auf den mehrere Benutzer oder Systeme zugreifen können.

## Data Steward (Datenverwalterin)
Im Data Stewardship Model koordinieren und fördern die Data Stewards die Mehrfachnutzung von Daten innerhalb eines Bundesamts. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502921)

## Datenanbietende
Datenanbietende, alternativ Datenlieferanten, sind Organisationen, die innerhalb eines oder mehrerer Datenräume Daten zur Nutzung bereitstellen. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/503084)

## Datenelement
Das Datenelement ist die kleinste beschreibende Einheit eines Datensatzes. Oft wird das Datenelement auch als Attribut, (definierte) Variable oder «Spalte» bezeichnet. Das Datenelement enthält die einzelnen Werte, z.B. die AHV-Nummer, die Anzahl leerstehender Wohnungen oder die Messwerte der Wassertemperatur. Jedes Datenelement verweist auf ein Datenelementkonzept.

## Datenelementkonzept (Konzept)
Das Datenelementkonzept beschreibt die im Datenelement enthaltenen Informationen eindeutig und vollständig. Bei einem Konzept kann es sich um eine Zahl, eine Zeichenkette, ein Datum oder um eine Codeliste mit vordefinierten Werten handeln. Zur Beschreibung der Konzepte wird bei der I14Y der Standard ISO 11179-1:2023 verwendet. Eine Schritt-für-Schritt-Anleitung zur Erfassung eines Konzepts ist im Kapitel [Konzepte erfassen](/handbook/de/publikation/konzepte/) beschrieben. 

## Datenformat
Definition, wie Daten strukturiert werden und wie sie bei der Verarbeitung zu interpretieren sind. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502964)

## Datenharmonisierung
Datenharmonisierung ist der Prozess, bei dem Daten aus unterschiedlichen Quellen in eine einheitliche Struktur, Terminologie und Bedeutung überführt werden, so dass sie konsistent, vergleichbar und gemeinsam nutzbar sind. Ziel ist es, semantische und strukturelle Unterschiede zu überwinden, um die Interoperabilität und Qualität der Daten zu verbessern.

## Datenkatalog
Ein Datenkatalog ist ein Verzeichnis von Datenbeständen. Mit Hilfe von Metadaten ist er ein informatives und durchsuchbares Verzeichnis von Datenbeständen. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/64371)

## Datenlebenszyklus
Der Datenlebenszyklus beschreibt die verschiedenen Phasen, die Daten von ihrer Entstehung bis zu ihrer Löschung durchlaufen. Typische Phasen sind: Erhebung, Speicherung, Nutzung, Weitergabe, Archivierung und Löschung. Jede Phase erfordert spezifische technische, organisatorische und rechtliche Massnahmen – insbesondere im Hinblick auf Datenschutz, Qualität und Sicherheit.

## Datenmanagement
Das Datenmanagement beinhaltet die Planung, Standardisierung, Verarbeitung, Speicherung und Bereitstellung von verlässlichen Daten in einem Unternehmen über deren gesamten Lebenszyklus. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502636)

## Datenmodell
Visuelle Darstellung von applikationsspezifischen Konzepten und ihren Beziehungen als Ausschnitt der Realität, die in einem iterativen Analyseprozess definiert und für die Beschreibung der Struktur einer Datenbank verwendet wird. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502865)

## Datennutzende
Person oder Organisation, welche angebotene Daten aus einem oder mehreren Datenräumen für eigene Aktivitäten nutzt. [Zur Definition auf TERMDAT](https://www.termdat.bk.admin.ch/search/entry/293654?s=Datennutzer&sl=2,6,7,8,3&tl=2,6,7,8,3)

## Datenobjekt
Ein Datenobjekt ist eine klar abgegrenzte, logische Einheit von Daten, die digital beschrieben, ausgetauscht oder genutzt werden kann. Auf I14Y werden die Datenobjekte  Datensätze, APIs und Behördenleistungen standardisiert beschrieben, so dass sie auffindbar und mehrfach genutzt werden können.

## Datensatz (Datensammlung)
Ein Datensatz ist eine strukturierte Sammlung von Daten, die sich auf ein bestimmtes Thema oder eine spezifische Fragestellung beziehen und in einer definierten Form organisiert sind. Auf der Interoperabilitätsplattform I14Y wird ein Datensatz gemäss DCAT-CH beschrieben und enthält mindestens eine Distribution oder kann über eine API bezogen werden. Weitere Informationen zur Struktur eines Datensatzes auf I14Y sind im [Abschnitt Informationsmodell](https://i14y-ch.github.io/handbook/de/gouvernanz/informationsmodell/) zu finden. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/501320)

## Datenschutz
Rechtliche Massnahmen, die dem Schutz der Persönlichkeit und der Grundrechte von natürlichen Personen dienen, deren Daten durch private Personen oder Bundesorgane bearbeitet werden. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/52411)

## Datenstandard
Ein Datenstandard ist eine Datenspezifikation, die andere Daten beschreibt oder definiert [ISO111179]. Zwei wichtige Arten von Datenstandards sind Datenmodelle (einschliesslich Kernvokabulare) und Referenzdaten (einschliesslich Konzepte).

## Datenstruktur
Zusammenfassung von Datenelementen, die in einem logischen Zusammenhang stehen und zur Speicherung und Organisation von Daten verwendet werden, deren Anordnung eine effiziente Verwaltung sowie den Zugriff ermöglicht. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502986)

## Datentyp
Der Datentyp klassifiziert ein Datenelement. Er gibt an, welche Art von Werten darin enthalten sein dürfen. Mithilfe des Datentyps wird sichergestellt, dass Daten von einem Programm korrekt verarbeitet und interpretiert werden. Beispiele für Datentypen sind: Ganzzahlen (engl. _integer_), Gleitkommazahlen (_floating point_), Boolesche Werte (_boolean_) oder Zeichenketten (_string_). Auf der I14Y definiert das Konzept den Datentyp (vgl. Abschnitt zum [Konzept](/handbook/de/gouvernanz/informationsmodell#konzept)). [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/516244)

## DCAT-Distribution
Eine physische Verkörperung bzw. Darstellung des Datensatzes in einem spezifischen Format. Eine Distribution (↔ «Ressource») ist eine spezifische Repräsentation des Datensatzes (Link zu realen Daten).

## Distribution
Eine Distribution ist die Bereitstellung von Daten für definierte Zielgruppen, Systeme oder Plattformen. Sie macht Daten zugänglich, nutzbar und wiederverwendbar – oft über Schnittstellen, Datenplattformen und standardisierte Austauschformate.

## eCH 
Der gemeinnützige Verein eCH fördert, entwickelt und verabschiedet Standards im Bereich E-Government. In den zahlreichen Arbeitsgruppen von eCH arbeiten sowohl Vertreterinnen und Vertreter des Bundes und der Kantone als auch der der Privatwirtschaft und der Wissenschaft mit. eCH ist das wichtigste Normierungsgremium im Bereich eGovernment in der Schweiz. Weitere Informationen wie auch die Dokumente zu den verabschiedeten Standards sind auf der Website [ech.ch](https://ech.ch) zu finden. 

## Elektronische Schnittstelle (API)
Eine elektronische Schnittstelle ermöglicht es verschiedenen Systemen und Anwendungen miteinander zu kommunizieren. Und das selbst dann, wenn die Systeme nicht direkt miteinander verhängt sind. Über elektronische Schnittstellen können etwa Informationen aus einem Datensatz abgefragt werden, ohne dass die gesamte Datensatz heruntergeladen werden muss. In der Fachsprache werden elektronische Schnittstellen oft als _Application Programming Interface (API)_ bezeichnet, also als elektronische Schnittstellen für Anwendungen. Sie werden in der modernen Software-Entwicklung sehr oft eingesetzt, um einzelne Teilsysteme zu verbinden oder um Daten von einem anderen System zu beziehen. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/500882)

## Enterprise Identity Management (EIAM) 
Systeme zum _Enterprise Identity Management (EIAM)_ werden verwendet, um Identitäten und Zugriffsrechte innerhalb eines Unternehmens oder einer Organisation zu verwalten und zu schützen. Sie stellen also sicher, dass einzig die vorgesehenen Personen eine bestimmte Internet-Plattform oder Anwendung nutzen können. Dabei regeln sie auch, wer Lese-, Schreib- und wer Administrationsrechte hat. Die I14Y nutzt das EIAM-System der Bundesverwaltung. Weitere Informationen sind unter [Kontenverwaltung](/handbook/de/plattform/kontenverwaltung) zusammengestellt.

## European Interoperability Framework (EIF)
[Der Europäische Interoperabilitätsrahmen](https://joinup.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail), soll die grenz- und sektorübergreifende Interaktion zwischen den europäischen Verwaltungen erleichtern, ihre Zusammenarbeit unterstützen und die Erbringung elektronischer Dienstleistungen ermöglichen.

## FAIR-Prinzipien
Die FAIR- Prinzipien postulieren, dass Daten einfach auffindbar _(**F**indable)_, zugänglich _(**A**ccessible)_, interoperabel _(**I**nteroperable)_ und mehrfachverwendbar _(**R**eusable)_ sein sollen. Die Daten sollen sowohl von Menschen als auch von Computersystemen einfach auffindbar sein. Sie sollen über ein offenes, freies und universell implementierbares Standard-Kommunikationsprotokoll zugänglich sein. Dank einer eindeutigen Lizenz ist ersichtlich, wie die Daten genutzt werden dürfen. Die Interoperabilität ist sowohl semantisch als auch syntaktisch gewährleistet. Sie setzt die Verwendung präziser kontextbezogener Metadaten voraus, hält sich in Bezug auf Inhalt und Format an die grossen internationalen Standards und verwendet möglichst standardisierte Vokabulare. Die freie, bedingte oder kostenpflichtige Mehrfachverwendung der Daten wird durch gemeinsame Standards vereinfacht. Grundlegende Informationen zu den FAIR-Prinzipien sind in diesem [Nature-Artikel](https://www.nature.com/articles/sdata201618) zu finden. 

## Geobasisdaten
Geobasisdaten sind Geodaten, die auf einem Recht setzenden Erlass des Bundes, eines Kantons oder einer Gemeinde beruhen: z.B. die Amtliche Vermessung, der Bauzonenplan oder das Hochmoor-Inventar. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/71443)

## Geocat 
[Geocat](https://geocat.ch) ist ein Katalog für Metadaten für Geoinformationen in der Schweiz und im Fürstentum Liechtenstein. Darin erfassen Bundesämter, Kantone, Gemeinden, Forschungsinstitute und Unternehmen Informationen zu ihren Geodaten, also von Datensätzen mit starkem geografischem Bezug, von Karten wie auch Luftbildern. Betrieben wird der Dienst vom Bundesamt für Landestopografie swisstopo. Weitere Informationen sind im Abschnitt zu den [verschiedenen Plattformen](/handbook/de/gouvernanz/plattformen) zu finden.

## Geodaten
Geodaten sind raumbezogene Daten. Sie beschreiben die Ausdehnung und Eigenschaften bestimmter Räume und Objekte: etwa die Lage, die Beschaffenheit, die Nutzung und die Rechtsverhältnisse. Beispiele für Geodaten, die breit genutzt werden, sind die digitalen Strassenkarten und Routenplaner.

## GraphDatabase
Eine Graphdatenbank hat als einzigen Zweck die Erstellung und Manipulation von Graphen. Graphen enthalten Knoten, Kanten und Eigenschaften, die dazu verwendet werden, Daten auf eine Weise darzustellen und zu speichern, für die relationale Datenbanken nicht ausgerüstet sind.

## Harvesting
Als Harvesting bezeichnet man das automatische «Einsammeln» von Daten bzw. Metadaten. Mit einem Harvesting-Modul lassen sich Kataloge von Datensätzen, die von anderen Instanzen zur Verfügung gestellt werden, automatisch importieren.

## Identifikator
Ein Identifikator ist ein definiertes Attribut oder eine Kombination von Attributen, die es ermöglicht, in Daten einzelne Elemente zu identifizieren. Ein Identifikator muss innerhalb eines Datenbestandes eineindeutig sein, d.h. er muss einen eindeutigen Rückschluss auf das identifizierte Element ermöglichen und darf nur einmal verwendet werden.

## Internationale Organisation für Normung (ISO)
Die Internationale Organisation für Normung (ISO) ist eine Vereinigung von Normierungsorganisationen. Sie erarbeitet internationale Normen in zahlreichen Bereichen -- mit Ausnahme der Elektrotechnik und der Kommunikationstechnologie. Bei der ISO handelt es sich um einen Verein nach schweizerischem Recht. Der Sitz ist in Genf. Nationale Standardisierungsvorhaben im Bereich eGovernment treibt meistens der [→ Verein eCH](#ech) voran.

## Interoperabilität
Interoperabilität ist die Fähigkeit unabhängiger, heterogener Systeme, möglichst nahtlos zusammenzuarbeiten. Sie sollen Informationen auf effiziente Art und Weise auszutauschen, ohne dass dazu im Einzelfall gesonderte Absprachen nötig sind. Das [European Interoperability Framework (EIF)](https://joinup.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/3-interoperability-layers) unterscheidet vier Ebenen: Die _rechtliche Interoperabilität_ stellt sicher, dass eine ausreichende gesetzliche Grundlage für die Zusammenarbeit besteht. Die _organisatorische Interoperabilität_ beschreibt, wie die Geschäftsprozesse aufeinander abgestimmt sind. Mit der _semantischen Interoperabilität_ wird angestrebt, dass beim Austausch von Informationen die Form der Daten möglichst nicht manuell verändert werden muss. Die _technische Interoperabilität_ beschreibt alle technischen Aspekte des Informationsaustausches, beinhaltet also etwa Schnittstellenspezifikationen und Übermittlungsprotokolle. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/71434)

## Kompetenzzentrum Datenbewirtschaftung (KDB)
Das Kompetenzzentrum Datenbewirtschaftung (KDB) des Bundesamts für Statistik ist die Koordinationsstelle für Open Government Data und stellt die Instrumente zur Harmonisierung, Standardisierung und Mehrfachverwendung von Daten bereit. Die in derselben Sektion angesiedelte Gruppe Metadatenplattform (MDP) stellt die technische Entwicklung der  Interoperabilitätsplattform I14Y, von opendata.swiss und der Nachfolgeplattform metadata.swiss sicher. 

## Linked Data
Linked Data sind Daten, die dank eines Identifikators (_Uniform Resource Identifier_) direkt miteinander verknüpft werden können. Sofern die Daten frei verfügbar sind, wird auch von _Linked Open Data_ gesprochen. Die Daten können verteilt sein. Sie lassen sich über normale Web-Transferprotokoll abrufen. Dank dem standardisierten Aufbau lassen sie wie eine einzige grosse Datenbank benutzen. Dazu wird die Abfragesprache _SPARQL_ eingesetzt. Linked Open Data ist ein von Tim Berners-Lee, dem Erfinder des World Wide Webs, entwickeltes Konzept. Das Ziel ist der Aufbau eines semantischen Webs, bei dem dank strukturierten und verknüpfbaren Datenangeboten die maschinelle Kommunikation vereinfacht wird. Die Plattform LINDAS ist die wichtigste Anbieterin von Linked Data im Bereich der öffentlichen Verwaltung in der Schweiz. Weitere Informationen sind im [Abschnitt zu LINDAS](/handbook/de/einleitung/plattformen/#lindas) zu finden. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/503121)

## Metadaten
Metadaten sind Daten, die andere Daten definieren und beschreiben. Sie beinhalten Informationen zur Semantik eines Datensatzes – also zur Bedeutung, zum Inhalt und zur Qualität. Zudem beschreiben sie die Syntax (die Form und die Struktur) der verwendeten Attribute (Variablen). Um sicherzustellen, dass die Daten einheitlich erfasst werden, können [→ Nomenklaturen](#nomenklatur) hinterlegt und Register angebunden werden, etwa das Gemeindeverzeichnis, die Nomenklatur der Berufe (ISCO) oder der Wirtschaftszweige (NOGA). Damit werden diese Daten zu Metadaten. Auf der I14Y lassen sich solche Metadaten verwalten, publizieren und austauschen.  

## Metadatenkatalog
Strukturierte Bestandsaufnahme der Datensätze einer Organisation, die in einem digitalen Verzeichnis aufgeführt sind. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/71450)

## Nationale Datenbewirtschaftung (NaDB)
Das Programm Nationale Datenbewirtschaftung hat es zum Ziel, die Datenbewirtschaftung der öffentlichen Hand durch die Mehrfachnutzung von Daten einfacher und effizienter zu gestalten. Es wurde vom Bundesrat initiiert und im Oktober 2019 gestartet. Beteiligt am Programm sind alle Departemente des Bundes, die Bundeskanzlei, alle Bereiche des Statistiksystems Schweiz, Vertreter von Kantonen, die Sozialpartner sowie private Organisationen und Verbände. Die Verantwortung für die Umsetzung des Programms liegt beim Bundesamt für Statistik. Technisches Kernstück ist die I14Y. Weitere Informationen sind auf der [Website des Programms](https://www.bfs.admin.ch/bfs/de/home/nadb/nadb.html) zu finden. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/481315)

## Nomenklatur
Eine Nomenklatur ist eine für bestimmte Bereiche verbindliche Sammlung von Benennungen aus einem bestimmten Themen- oder Anwendungsgebiet. Beispiele für Nomenklaturen sind ein Gemeindeverzeichnis oder ein Länderverzeichnis. Eine Nomenklatur erhält Codes und beschreibende Textteile, allenfalls in verschiedenen Sprachen. [Zur Definition auf TERMDAT](https://www.termdat.bk.admin.ch/entry/94036)

## Offene Daten
Daten, die frei, ohne wesentliche rechtliche, finanzielle oder technische Einschränkungen, genutzt, verarbeitet, ausgewertet und weitergegeben werden dürfen. Rechtlich muss die kostenfreie Nutzung und Weiterverarbeitung der Daten gewährleistet sein; technische Offenheit betont, dass offene Daten maschinell bearbeitbar sein müssen. Bei der Publikation von Daten als offenen Daten müssen Datenschutz-, Informationsschutz- und Urheberrechtsbestimmungen sowie Geschäftsgeheimnisse gewahrt bleiben. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/387377)

## Once-Only-Prinzip
Ziel des Once-Only-Prinzips ist es, dass Bürgerinnen und Bürger sowie Unternehmen ihre Daten nur einmal der öffentlichen Verwaltung zur Verfügung stellen müssen. Die einzelnen Amtsstellen der unterschiedlichen Ebenen tauschen die Informationen untereinander aus -- sofern dies explizit so vorgesehen und sinnvoll ist. Das _Once-Only_-Prinzip soll den Aufwand reduzieren -- bei den Bürgerinnen und Bürgern, den Unternehmen wie auch innerhalb der Verwaltung. Die Umsetzung des Once-Only-Prinzips ist ein zentrales Ziel des Programms Nationale Datenbewirtschaftung (NaDB). [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/480493)

## Ontologie
Eine Ontologie ist eine formal definierte Darstellung von Wissen, in der die Konzepte und Beziehungen in einem bestimmten Bereich beschrieben werden. Sie ist wie ein Vokabular oder ein Regelwerk, das ein gemeinsames Verständnis eines bestimmten Fachgebiets ermöglicht. Ontologien werden verwendet, um den Austausch und die Wiederverwendung von Wissen zu ermöglichen und die Kommunikation und Argumentation zwischen Menschen oder Computersystemen zu erleichtern.

## Personendaten
Angaben, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/52451)

## Public Service Vocabulary Application Profile (CPSV-AP)
Das _Core Public Service Vocabulary Application Profile_ (CPSV-AP) ist ein Datenmodell zur standardisierten und maschinenlesbaren Beschreibung von Behördenleistungen. CPSV-AP wird vom SEMIC Support Centre der Europäischen Kommission entwickelt und gepflegt. Es wird in zahlreichen europäischen Ländern verwendet, um öffentliche Dienstleistungen einheitlich zu dokumentieren und auffindbar zu machen. Auch auf I14Y wird CPSV-AP genutzt, um Behördenleistungen zu beschreiben. Weitere Informationen sind auf der [Joinup-Plattform der EU](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile) verfügbar.

## Referenzdaten
Daten, die nur bestimmte Werte annehmen können und in einer Organisation in Prozessen, Analysen oder Entscheidungen verwendet werden. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/502771)

## Referenz-Metadaten
Gemäss Eurostat beschreiben Referenz-Metadaten (manchmal auch erklärende Metadaten genannt) den Inhalt und die Qualität der statistischen Daten aus semantischer Sicht. Sie enthalten erläuternde Texte zum Kontext der statistischen Daten, zur Methodik der Datenerhebung und -aggregation sowie zu Qualitäts- und Diffusionsmerkmalen.

## Resource Description Framework (RDF)
RDF ist die Basissprache des semantischen Webs und ermöglicht die Darstellung von Metadaten in Form von Tripeln (Subjekt-Prädikat-Objekt). 

## SPARQL
Standardabfragesprache zum Abrufen und zur Bearbeitung von Daten, die im RDF-Format dargestellt werden. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/503123)

## Stammdaten
Die Stammdaten sind grundlegende Informationen, die von der öffentlichen Verwaltung zwingend benötigt werden. Sie können Personen, Unternehmen, aber auch diverse Objekte wie etwa Gebäude oder Fahrzeuge beschreiben. Für jedes dieser Objekte muss ein abschliessender Katalog der Merkmale (Attribute) verfügbar sein. Die Stammdaten sind zustandsorientierte Daten. Sie bleiben im Zeitverlauf relativ konstant. Und sie ändern sich eher selten. Eine Sonderform von Stammdaten sind die so genannten Referenzdaten wie etwa die Codes für Flughäfen oder Länder. Diese dienen der Klassifizierung von Stammdaten. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/379368)

## Statistical Data and Metadata EXchange (SDMX)  
SDMX ist eine Initiative zur Standardisierung des Datenaustauschs zwischen internationalen Organisationen und ihren Mitgliedsländern. Massgeblich entwickelt wurde er von der Weltbank und der Europäischen Union. SDMX definiert sowohl einheitliche Datenformate als auch Metadatenstandards und Methoden zur Datenübertragung. Weitere Informationen: [sdmx.org](https://sdmx.org). Auf der I14Y können Codelisten im SDMX-Format eingelesen werden (siehe [Erfassen von Konzepten](/handbook/de/publikation/konzepte/)).

## Statistische Daten
Statistische Daten sind alle Daten, die zu statistischen Zwecken, insbesondere auf Grundlage des Bundesstatistikgesetzes, erhoben oder weitergegeben wurden und daher der statistischen Geheimhaltung unterliegen.

## Swagger
[Swagger](https://swagger.io/) ist eine Kollektion frei verfügbarer Hilfsmittel zur Publikation und Nutzung von elektronischen Schnittstellen (APIs). Auf der I14Y werden insbesondere die Dokumentationsmöglichkeiten genutzt: Dank der Swagger-Weboberfläche ist rasch ersichtlich, was mit der betreffenden API möglich ist. Zudem können die Abfragemöglichkeiten bei sämtlichen Endpunkten direkt ausprobiert werden. Weitere Informationen sind unter [Metadaten abrufen](/handbook/de/metadaten_abrufen/api) zu finden.

## Triplestore
Eine Datenbank, die speziell für die Speicherung und den Abruf von RDF-Daten konzipiert ist. Ähnlich wie eine relationale Datenbank speichert ein Triplestore Daten und ruft sie über eine Abfragesprache ab. Im Gegensatz zu einer relationalen Datenbank speichert ein Triplestore jedoch nur einen einzigen Datentyp, den Tripel. Er benötigt daher keine Initialisierungsphase, um neue Daten zu speichern. Das heisst, er muss keine Tabellen erstellen wie in einer relationalen Datenbank. Ausserdem ist ein Triplestore für die Speicherung einer grossen Anzahl von Tripeln und das Abrufen dieser Tripel mithilfe der Abfragesprache SPARQL optimiert.

## Tripel
Tripel sind die kleinste Struktur zur Beschreibung von Ressourcen im RDF-Modell. Im RDF-Modell ist eine Aussage dreiteilig und besteht aus zwei Knoten, die durch eine Kante verbunden sind und dabei das Subjekt, das Prädikat und das Objekt repräsentieren. Üblicherweise werden Tripel als Graph dargestellt.

## Uniform Resource Identifier (URI)
URIs erlauben die Identifizierung von abstrakten oder physischen Ressourcen im Internet. RDF-Ressourcen werden durch eindeutige Bezeichner (URIs) identifiziert. Die URIs erlauben es, Aussagen aus verschiedenen Quellen zu verbinden. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/70183)

## Validierung
Die Validierung ist ein Prozess. Darin wird geprüft, ob ein bestimmter Inhalt in ein System oder ein Verzeichnis aufgenommen werden soll. Im Fall eines Datensatzes werden auf der I14Y vor der öffentlichen Publikation etwa das Datenformat kontrolliert, die Datenintegrität sowie die Wertebereiche und Nomenklaturen. Die Validierung erfolgt durch die _Local Data Stewards_ oder das _Kompetenzzentrum Datenbewirtschaftung_.

## Verwaltungsdaten
Verwaltungsdaten sind Daten, die im Rahmen eines gesetzlichen Auftrags erhoben, erstellt, verwaltet, verarbeitet und gespeichert werden. Bei diesen kann es sich um strukturierte und unstrukturierte Daten handeln. Auf der I14Y können die einzelnen Verwaltungsstellen Inventare ihrer Datensätze erstellen. [Zur Definition auf TERMDAT](https://register.ld.admin.ch/termdat/387376)
