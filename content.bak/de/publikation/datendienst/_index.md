---
title: Elektronische Schnittstelle erfassen
slug: api
weight: 30
type: docs
translationKey: dataservice
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, Interoperabilität, API, Erfassen, Erfassung, Inventar, Elektronische Schnittstellen, Application Programming Interface]
---

Elektronische Schnittstellen, in der Fachsprache als _Application programming interface (API)_ bezeichnet, sind zentral für die Vernetzung von isolierten Systemen. Die Interoperabilitätsplattform I14Y ist das zentrale Verzeichnis der APIs der Schweizer Behörden.  

{{<alert title="Was ist eine API?" color="info">}}

Ein so genanntes _Application Programming Interface (API)_ ist eine technische Schnittstelle. Dank dieser können Software-Anwendungen miteinander kommunizieren und Daten austauschen. Und dies, ohne dass sie direkt miteinander verknüpft werden müssen. Dank APIs können Entwickler etwa Kernfunktionen des Betriebssystems benutzen, ohne diese selber schreiben zu müssen. Webserver beziehen über solche Schnittstellen die Daten vom Backend oder sogar von fremden Systemen, die sie dann anzeigen. Und Fachanwendungen holen stets aktualisierte Auswahllisten. APIs sind in der modernen Software-Entwicklung unabdinglich. 

{{</alert>}}

Die Beschreibungen zu elektronischen Schnittstellen lassen sich bequem über die Weboberfläche der Interoperabilitätsplattform I14Y erfassen. Loggen Sie sich dazu ein, klicken Sie auf die Kachel "Katalog pflegen" und wählen Sie unter "Erstellen" den Eintrag "Neue API erstellen". 

Nun öffnet sich die Eingabemaske für APIs. Setzen Sie einen __Titel__ in mindestens einer Sprache. Tragen Sie zudem eine __Beschreibung__ Ihres Datenangebots ein. Zwingend nötig sind ausserdem Angaben dazu, wer die elektronische Schnittstelle verantwortet (__Herausgeber__). Wählen Sie dabei aus den Ihnen zugeordneten Organisationen die richtige aus. Sollte die Organisation nicht aufgeführt sein, wenden Sie sich ans I14Y-Team. 

Für den __Identifikator__ gilt dieselbe Logik wie für andere Katalogobjekte auf I14Y: Der Identifikator dient der eindeutigen und stabilen Identifikation der API. Bei Bedarf können mehrere Identifikatoren erfasst werden. Das System speichert diese als geordnete Liste (Array). Der erste Identifikator (Hauptidentifikator) muss zwingend stabil bleiben -- sobald die API öffentlich publiziert ist, kann dieser erste Identifikator nicht mehr geändert werden. Ist noch kein Identifikator manuell gesetzt worden, bevor der Publikationskanal von "Intern" auf "Öffentlich" umgestellt wird, erzeugt das System den Hauptidentifikator automatisch aus dem Titel (Slugification).

Geben Sie unter __Zugriffsrechte__ an, ob die API öffentlich ist, unter bestimmten Bedingungen genutzt werden kann oder aber nicht öffentlich verfügbar ist. Ergänzen Sie die zur Verfügung stehenden __Endpunkte__ Ihrer API. <!-- Verwenden Sie hier die Basis-URL. Laut DCAT müsste dies aus dem Web erreichbar sein. Wir verzichten darauf, da das nicht Sinn macht. -->Oder setzen Sie unter __Endpunkte-Beschreibung__ einen Link auf die Online-Dokumentation (zum Beispiel eine [Swagger-Oberfläche](/handbook/de/glossar#swagger)).

Zusätzlich zu diesen Pflichtfeldern, wie sie auch vom DCAT-Standard weitgehend vorgeschrieben sind, gibt es zahlreiche weitere Möglichkeiten, mit denen Sie Ihr Datenangebot beschreiben und damit einfach auffindbar machen können. Bei dem meisten handelt es sich um optionale Felder aus DCAT. Einzelne Felder sind plattformspezifisch. In Anhang dieses Handbuchs finden Sie detaillierte [Informationen zu den einzelnen Eingabefelder](/handbook/de/anhang/eingabefelder#elektronische-schnittstelle).

Auf der Interoperabilitätsplattform I14Y werden vorab APIs dokumentiert, über die Daten abgefragt werden können. In der Regel liegen diese als Datensatz vor, etwa gespeichert in einer Datenbank. Oftmals besteht also eine direkte Verbindung zwischen einer elektronischen Schnittstelle und eines Datensatzes. Deshalb lasse sich die Beschreibungen dieser Inhalte auf der Interoperabilitätsplattform I14Y verknüpfen. Elektronische Schnittstellen sollten, wenn immer möglich, mit Datensätzen verknüpft werden. Fügen Sie dazu unter __Liefert Datensatz__ den  entsprechenden Eintrag hinzu. Bei einem Klick auf das Plus-Symbol öffnet sich eine Auswahl. Suchen Sie in diesem Formular den bereits erfassten Datensatz und erstellen Sie die Verknüpfung. Falls der Datensatz noch nicht erfasst wurde, kann der Schritt später nachgeholt werden.  

Sobald alle gewünschten Informationen erfasst sind, klicken Sie auf "Speichern und schliessen". Der neue Eintrag ist nun an Ende der Liste zu finden. Zudem ist er über die Suchfunktion auffindbar. Er hat nun den Status "Inital" und ist innerhalb der Organisation sichtbar, nicht aber öffentlich. Der Einträg lässt sich für die weitere Bearbeitung wieder öffnen. 

Um den Eintrag den lokalen Datenverantwortlichen zur Prüfung vorzulegen, klicken Sie auf "Registrierungsstatus vorschlagen" und wählen Sie "Kandidat" aus. Weitere Informationen zum Arbeitsablauf sind im Kapitel [Rollen und Prozesse](/handbook/de/gouvernanz/arbeitsablauf/) zu finden.
