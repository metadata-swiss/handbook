---
title: Über die Weboberfläche
slug: gui
weight: 10
type: docs
translationKey: metadata-retrieval-gui
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, GUI, Daten abrufen, Datenbezug, beziehen, abrufen]
---

Wer wissen möchte, welche Datensätze und APIs eine Behörde anbietet, welche Codelisten und Konzepte einer Erhebung zugrunde liegen oder welche Behördenleistungen angeboten werden, findet auf I14Y die nötigen Metadaten -- strukturiert, durchsuchbar und maschinenlesbar. 

Die Plattform bildet damit die Grundlage für die semantische Datenharmonisierung in der öffentlichen Verwaltung: Indem Definitionen einmal erfasst und mehrfach genutzt werden, lassen sich Daten verschiedener Stellen direkt vergleichen und zusammenführen.

Um zur Übersichtsseite zu den Datensätzen, elektronischen Schnittstellen und Behördenleistungen zu gelangen, klicken Sie auf die Kachel "Katalog durchsuchen". Um zur Übersichtsseite mit den Konzepten -- zum Beispiel den Codelisten -- zu gelangen, klicken Sie auf "Konzepte".

{{<alert title="So gelangen Sie zu den Einträgen Ihrer Organisation" color="success">}}

Falls Sie die internen Datenangebote Ihrer Organisation suchen, loggen Sie sich über den Knopf oben rechts ein. Sie werden in den Bereich der Plattform weitergeleitet, der ihrer Organisation vorbehalten ist. Klicken Sie anschliessend auf "Katalog verwalten". Nun sehen Sie -- zusätzlich zu allen öffentlich publizierten Angeboten -- auch die (noch) nicht veröffentlichten Einträge Ihrer eigenen Organisation. 

Alternativ gelangen Sie über die Links in der Übersicht unten rechts direkt zu den Metadaten Ihrer Organisation.

{{</alert>}}

Dank der **globalen Suche** finden Sie den gewünschten Eintrag rasch -- sofern der betreffende Suchbegriff im Titel- oder Beschreibungsfeld vorkommt oder als Schlüsselwort hinterlegt ist. Auf der öffentlich zugänglichen Oberfläche sind jene Metadaten zu finden, die von den _Local Data Stewards_ oder dem Kompetenzzentrum Datenbewirtschaftung freigeschaltet worden sind. Bei der Suche können Boolesche Operatoren wie _AND_ und _OR_ sowie ein Stern (\*) als Platzhalter verwendet werden. Eine Suche nach _Unternehmens*daten_ findet also auch den Metadateneintrag zu _Unternehmensstammdaten_. Sie können nach einem mehrteiligen Ausdruck suchen, indem Sie die einzelnen Worte mit Anführungszeichen gruppieren. Die Gross- und Kleinschreibung wird bei der Suche nicht berücksichtigt. 

Die I14Y-Plattform bietet eine Metasuche an, die neben den auf I14Y erfassten Metadaten auch die Kataloge von geocat.ch und opendata.swiss durchsucht. Wenn Sie einen Suchbegriff eingeben, werden die Resultate aus allen drei Plattformen angezeigt. Standardmässig sehen Sie die Ergebnisse von I14Y. Um die Resultate von Geocat oder opendata.swiss anzuzeigen, klicken Sie auf den entsprechenden Reiter oberhalb der Ergebnisliste. Die Anzahl der gefundenen Einträge wird jeweils neben dem Plattform-Namen angezeigt. Ein Klick auf einen Eintrag von geocat.ch oder opendata.swiss führt Sie direkt zur Detailansicht auf der jeweiligen Plattform. Einige Einträge sind auf mehreren Plattformen verfügbar.

Im Katalog-Bereich lässt sich die Auswahl mit diversen **Filtern** eingrenzen. Direkt unter dem Suchfeld kann mit dem Typfilter ausgewählt werden, ob ausschliesslich Datensätze, APIs, Behördenleistungen oder Konzepte angezeigt werden sollen. Daneben stehen zahlreiche weitere Filter zur Verfügung. Welche Filter genutzt werden können, hängt vom gewählten Objekttyp ab. So ist etwa die Suche nach bestimmten Geschäftssituationen und Lebenslagen nur bei Konzepten möglich. Weitere Beispiele für Filter: Die Suche kann auf ausgewählte Herausgeberorganisationen eingeschränkt werden. Mit dem Statusfilter können die Resultate auf Einträge eingegrenzt werden, die als Standard ausgezeichnet sind, und mit dem Filter Zugriffsrechte auf öffentlich verfügbare Daten. Es ist zudem möglich, die Resultate nach dem Thema des Datenangebots zu filtern. Dank des Formatfilters kann die Auswahl auf Datensätze eingegrenzt werden, für die eine Distribution in einem spezifischen Dateiformat vorliegt. 

| Filtername | Relevanz | Auswahlmöglichkeiten / Bemerkung |
| --- | --- | --- |
| Typ | Alle Objekttypen | Zur Auswahl stehen: Datensätze, APIs, Behördenleistungen und Konzepte. Dieser Filter steht direkt unter dem Suchfeld zur Verfügung und bestimmt, welche Objekttypen in den Resultaten angezeigt werden. |
| Herausgeber | Alle Objekttypen | Zur Auswahl stehen sämtliche Organisationen, die Informationen zu mindestens einem Datensatz, einer API oder einer Behördenleistung öffentlich publiziert haben. Bei einer Suche im internen Bereich von I14Y werden zudem allfällige interne Einträge der eigenen Organisation. |
| Themen | Alle Objekttypen | Zur Auswahl stehen thematische Klassifizierungen, die anhand der vom Normierungsgremium eCH definierten Kernaufgaben der Schweizer Behörden (siehe Dokument [E-Government-Standards](https://www.ech.ch/sites/default/files/dosvers/hauptdokument/BEST_d_DEF_2014-06-12_eCH-0122_V1-0_eGovCH-Grundlagen.pdf) auf Seite 13) erarbeitet worden sind. Die betreffende [Themenliste](https://www.i14y.admin.ch/de/concepts/08da58dc-4dc8-f9cb-b6f2-7d16b3fa0cde) steht auf I14Y als Konzept zur Verfügung. Sie kann weiterverwendet werden. |
| Status | Alle Objekttypen | Zur Auswahl stehen sämtliche Status, die in den zur Auswahl stehenden Einträgen mindestens einmal gesetzt worden sind. Mögliche Ausprägungen: Initial, Kandidat, Registriert, Qualifiziert, Standard, Abgelöst, Zurückgezogen. Details zu den einzelnen Status sind unter [Workflow](/handbook/de/gouvernanz/arbeitsablauf) zu finden. |
| Konzepttyp | Konzepte | Ermöglicht die Filterung nach verschiedenen Konzepttypen wie Codelisten, Datenmodelle oder andere strukturierte Konzepte. Zur Auswahl stehen sämtliche Konzepttypen, die in den zur Verfügung stehenden Einträgen mindestens einmal verwendet wurden. |
| Zugriffsrechte | Datensätze, APIs | Diese Angabe beschreibt, ob die beschriebenen Daten ohne Einschränkungen verfügbar sind, ob sie unter gewissen Bedingungen eingesehen werden dürfen oder ob sie nicht öffentlich zugänglich sind. Zur Auswahl stehen sämtliche Informationen zu den Zugriffsrechten, die in den zur Auswahl stehenden Einträgen mindestens einmal gesetzt wurden. Mögliche Ausprägungen: Nicht öffentlich, Eingeschränkt, Öffentlich. |
| Formate | Datensätze | Angezeigt werden alle Formate, für die in den zur Verfügung stehenden Einträgen mindestens eine Distribution zur Verfügung steht. Detailinformationen zur Liste mit den Formaten sind im [Anhang unter Eingabefelder](/handbook/de/anhang/eingabefelder) zu finden. Zur Verfügung stehen eine Auswahl der Dateiformate, die in einer [Liste der europäischen Union](https://op.europa.eu/en/web/eu-vocabularies/dataset/-/resource?uri=http://publications.europa.eu/resource/dataset/file-type#) enthalten sind. |
| Geschäftssituationen | Behördenleistungen | Ermöglicht die Filterung von Behördenleistungen nach spezifischen Geschäftssituationen oder Anwendungsfällen. Zur Auswahl stehen sämtliche Geschäftssituationen, die in den zur Verfügung stehenden Behördenleistungen mindestens einmal hinterlegt wurden. |
| Lebenslagen | Behördenleistungen | Ermöglicht die Filterung von Behördenleistungen nach Lebenslagen der Bürgerinnen und Bürger. Zur Auswahl stehen sämtliche Lebenslagen, die in den zur Verfügung stehenden Behördenleistungen mindestens einmal hinterlegt wurden. |
{.gui}

## Anzeigen der Metadaten

Ein Klick auf einen gefunden Eintrag öffnet die Detailinformationen dazu. Handelt es sich beim betreffenden Datenangebot um eine __elektronische Schnittstelle (API)__, wird ausschliesslich die Beschreibung angezeigt. Diese beinhaltet unter anderem die Adresse des Endpunkts sowie einen Link zur ausführlichen technischen Dokumentation. Im Weiteren ist ersichtlich, wer die API anbietet und welches die gesetzlichen oder technischen Grundlagen fürs betreffende Angebot sind. Oben rechts wird der Status des Eintrags auf I14Y eingeblendet. Mehr Informationen zur Status-Verwaltung sind im Teil [Rollen und Prozesse](/handbook/de/gouvernanz/arbeitsablauf) zu finden.  

![Screenshots I14Y](/img/i14y_datensatz.png) 

Bei einem __Datensatz__ werden verschiedene Register (Reiter) eingeblendet, die zusätzliche Informationen enthalten. Angezeigt werden lediglich jene Register, für die Herausgeberinnen und Herausgeber Informationen erfasst haben.

__Beschreibung:__ Das Register Beschreibung enthält die Metadaten zum Datensatz gemäss dem Austauschstandard DCAT-AP CH, ergänzt durch einige I14Y-spezifische Felder. Hier finden sich unter anderem der Titel und die Beschreibung zum Datensatz sowie Angaben zum Herausgeber, zu Themen, zum Status, zu Zugriffsrechten sowie zu gesetzlichen und technischen Grundlagen.

__Distributionen:__ I14Y stellt ausschliesslich Metadaten zur Verfügung. Die Herausgeberinnen und Herausgeber der Daten können aber Exporte ihrer Daten verlinken. Diese Direktverbindungen zu den eigentlichen Daten werden im Register Distributionen eingeblendet. Ein Klick auf einen solchen Link lädt die Daten direkt von den Servern der betreffenden Organisation. Die Datenexporte können in unterschiedlichen Formen und Formaten vorliegen.

__Struktur:__ Das Register Struktur bietet eine grafische, interaktive Anzeige der Datenstruktur des Datensatzes. Hier lässt sich die hierarchische Gliederung der Datenelemente visualisieren und nachvollziehen, wie die einzelnen Datenfelder und ihre Beziehungen untereinander aufgebaut sind.

__Qualitätsinformationen:__ Falls der Herausgeber den entsprechenden Fragebogen zu Qualitätsaspekten ausgefüllt hat, werden die Angaben zur Datenqualität im Register Qualitätsinformationen angezeigt. Diese Informationen helfen bei der Einschätzung der Eignung und Verlässlichkeit des Datensatzes für spezifische Verwendungszwecke.  

{{<alert title="So lesen Sie CSV-Daten in Microsoft Excel ein" color="success">}}

Die Interoperabilitätsplattform I14Y bietet einen Export im maschinenlesbaren CSV-Format an. Die Werte werden mit Kommas getrennt. Als Zeichensatz wird der weit verbreitete Standard UTF-8 verwendet. 

Soll eine CSV-Datei in Microsoft Excel unter Windows eingelesen werden, ist ein Umweg nötig. Um die Datei etwa in Excel 2021 bearbeiten zu können, wird sie zuerst heruntergeladen. Nun wird eine neue Tabelle in Excel generiert. Wählen Sie dann im Menu den Punkt "Daten" aus. Klicken Sie auf "Daten abrufen", dann auf "Aus Datei" und schliesslich auf "Aus Text/CSV" an. Im Import-Fenster stellen Sie den "Dateiursprung" auf UTF-8 um. Und als Trennzeichen wählen Sie das Komma. 

{{</alert>}}