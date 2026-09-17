---
title: Roadmap
slug: roadmap
translationKey: roadmap
weight: 30
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Systemarchitektur, Technik, Datenbank, Entwicklung, Roadmap, Agile Release Train (ART)]
---

Die Interoperabilitätsplattform I14Y wird im Auftrag des Bundes vom Bundesamt für Statistik in Zusammenarbeit mit dem Bundesamt für Informatik entwickelt. Die Projektphase läuft bis Ende 2026. Anschliessend übernimmt das Bundesamt für Statistik den Betrieb der I14Y. 

Während der Projektphase wird der Funktionsumfang der Plattform laufend erweitert. Wünsche für neue Funktionen können bei der Gruppe Metadatenplattform eingereicht werden. Dieses erarbeitet dann die Detail-Spezifikation. Es priorisiert die Entwicklungswünsche in Zusammenarbeit mit dem Steuerungsausschuss sowie dem Ausschuss Nationale Datenbewirtschaftung (NaDB). Die Entwicklungs- und Implementierungsarbeiten koordiniert das Kompetenzzentrum Datenbewirtschaftung gemeinsam mit der Gruppe Metadatenplattform. 

{{<alert title="Ihre Anregungen sind willkommen" color="success">}}
Sollten Sie eine Verbesserungsmöglichkeit oder einen Fehler auf der Interoperabilitätsplattform I14Y entdecken, ist das Kompetenzzentrum Datenbewirtschaftung und/ oder die Gruppe Metadatenplattform dankbar um einen Hinweis. Vorschläge für neue Funktionen können Sie im [Repository Feature Requests](https://github.com/metadata-swiss/feature-requests/issues) auf Github oder aber per [E-Mail](mailto:i14y@bfs.admin.ch) einreichen. Bitte beschreiben Sie die gewünschte Funktion möglichst genau. Auf Github lassen sich die Vorschläge für gewünschte Funktionen auch kommentieren.

{{</alert>}}

Die I14Y wird in einem so genannten Agile Release Train (ART) entwickelt. Die Funktionen werden laufend spezifiziert, entwickelt und implementiert. Welche Funktionen für welchem Abschnitt der Entwicklung vorgesehen sind, ist in der untenstehenden Roadmap dokumentiert; für Detailangaben zu einzelnen Funktionalitäten kontaktieren Sie die Gruppe Metadatenplattform. Die Schwerpunkte können sich ändern -- etwa wenn neue Funktionalitäten hoch priorisiert werden. Die Roadmap wird jeweils vor dem Beginn einer neuen Entwicklungsperiode (_Program Increment_, kurz PI) aktualisiert. Die nächsten Entwicklungsabschnitte werden detailliert beschrieben, für spätere Phasen werden allgemeinere Ziele angegeben.  

{{< mermaid width="650px" >}}
timeline
    title Roadmap Interoperabilitätsplattform I14Y

    section 2026

        Q1 2026 (01.2026 - 03.2026)
        : ⭐ Einführen von Mapping-Tabellen zur Dokumentation von Unterschieden zwischen Konzepten.
        : URIs/Permalinks werden für alle Objekte eingeführt.
        : Komplexe Strukturen von Datensätzen lassen sich über die Weboberfläche editieren (Teil 1/2).
        : Zusätzliche Arbeiten an den Strukturen – Wiederverwendung von Konzepten (Teil 1/2).

        Q2 2026 (03.2026 - 06.2026)
        : Komplexe Strukturen von Datensätzen lassen sich über die Weboberfläche editieren (Teil 2/2).
        : Wiederverwendung von Konzepten (Teil 2/2).
        : Freigabe des Programmcodes (Open-Source-Publikation). 
        : Einführung von Audit-Metadaten (minimaler Audit-Trail).
        : Verbesserung der Benutzererfahrung.
        : Gemeinsame Entwicklungen mit metadata.swiss.

        Q3-Q4 2026 (06.2026 - 12.2026)
        : Wartungsarbeiten (Fehlerbehebungen und kleine Verbesserungen).
        : Abschluss der Projektphase. 
        : Gemeinsame Entwicklungen mit metadata.swiss.

    section 2027
        Q1-Q4 2027
        : Betriebsphase

{{< /mermaid >}}

*⭐ Mit einem Stern gekennzeichnete Einträge sind Vorschläge des Projekts DVS BS+.*

### Open Source
Der Programmcode der Interoperabilitätsplattform I14Y soll unter einer [freien Lizenz](https://www.gnu.org/licenses) veröffentlicht werden. Die Gruppe Metadatenplattform publiziert den Quellcode bis spätestens Ende der Projektphase, also bis Ende 2026. Dies geschieht im Einklang mit dem Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)). Laut Artikel 9 sollen die Bundesbehörden ihre Quellcodes -- sofern möglich -- frei zur Verfügung stellen. 

{{<card header="Gesetzesgrundlage" title="__Art. 9 Open Source Software__" footer="Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)">}}

Die diesem Gesetz unterstehenden Bundesbehörden legen, wenn es möglich und sinnvoll ist und die Rechte Dritter gewahrt werden, den Quellcode von Software offen, die sie zur Erfüllung ihrer Aufgaben entwickeln oder entwickeln lassen. Sie erlauben jeder Person, die Software zu nutzen, weiterzuentwickeln und weiterzugeben, und erheben keine Lizenzgebühren.

{{</card>}}

I14Y publiziert Quellcodes und Skripte unter dem Namen i14y-ch auf der [Plattform Github](https://github.com/metadata-swiss).
