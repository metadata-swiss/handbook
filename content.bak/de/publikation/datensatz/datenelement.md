---
title: Datenelemente hinzufügen
slug: dataelement
weight: 30
type: docs
translationKey: dataset-data-elements
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, Interoperabilität, Dataset, Datensatz, Konzept, Datenelement]
draft: true
---

Datenelemente sind die kleinsten Einheiten eines Datensatzes. Gelegentlich werden sie auch als Attribut bezeichnet, als (definierte) Variable oder im Fall einer Tabelle als Spalte. Das Datenelement enthält die einzelnen Werte, im Beispiel mit der Wohnbevölkerung also etwa die Anzahl der Personen, die in einer Gemeinde leben. Auf I14Y referenziert das Datenelement ein Konzept, ist also entweder eine Zeichenkette, eine Nummer, ein Datum oder eine Codeliste.

Um einer Struktur ein Datenelement hinzuzufügen, wird diese mit einem Klick aufs Bleistift-Symbol neu geöffnet. Klicken Sie nun auf __Datenelement hinzufügen__. Nun können Sie ein Datenelement basierend auf einem bestehenden Konzept anwählen. Wählen Sie -- wenn immer möglich -- ein bestehendes Konzept aus. Falls kein passendes Konzept aufgelistet wird, erstellen Sie ein neues. Klicken Sie dazu auf "Konzept erstellen". Gehen Sie anschliessend wie im Kapitel zu den [Konzepten](/handbook/de/publikation/katalog/konzept#ausfüllen-des-formulars) beschrieben vor. 
Sobald alle Felder ausgefüllt sind, wird das Datenelement abgespeichert. Suchen Sie es nun in der Auswahlliste und fügen Sie es der Struktur hinzu. Fahren Sie fort wie nachfolgend beschrieben. 

Sobald das passende Konzept vorliegt, suchen Sie es in der Liste. In der Liste erscheinen unter anderem jene Elemente, die Sie oder Kolleginnen und Kollegen Ihrer Organisation zuvor erfasst haben (siehe dazu [Konzepte erfassen](/handbook/de/publikation/katalog/konzept/)). Zudem können Sie die öffentlich publizierten Konzepte anderer Organisationen benutzen. Ein Klick auf das Anzeigensymbol rechts öffnet die Detailinformationen zum jeweiligen Eintrag. Selektieren Sie das passende Konzept. Und klicken Sie auf den Knopf "Konzept als Datenelement verwenden". 

Erfassen Sie nun die Metainformationen zum neuen Datenelement, das das ausgewählte Konzept referenziert. Auch hier muss ein __Identifikator__ gesetzt werden, der innerhalb der Struktur einmalig zu sein hat. Wenn es sinnvoll scheint, verwenden Sie denselben Identifikator wie beim Datensatz und ergänzen ihn mit einer Präzisierung. Füllen Sie zudem die Felder __Namen__ und __Beschreibung__ aus. 

Klicken Sie nun an, welche __Rolle__ das betreffende Datenelement im Datensatz einnimmt: Handelt es sich um ein Attribut, eine Dimension oder einen Messwert? 

{{<alert title="Was ist ein Attribut, eine Dimension und ein Messwert?" color="info">}}

Ein Datensatz enthält mehrere Datenelemente. Diese unterscheiden sich durch ihre Funktion. Entweder handelt es sich beim einzelnen Element um eine Dimension, ein Attribut oder einen Messwert. Am Beispiel: Ein Datensatz beinhaltet Ortsnamen, Zeitstempel, Temperaturmessungen sowie Angaben zur Masseinheit. Bei den Orts- wie auch bei den Zeitangaben handelt es sich um eine Dimension. Die Temperaturangaben hingegen sind Messwerte. Und bei der Information zur Temperaturskala handelt es sich um ein Attribut. 

| Ort | Zeit | Wassertemperatur | Masseinheit |
| --- | --- | --- | --- | --- |
| Aare - Bern, Schönau | 28.12.2022 16:00 | 7.9	 | °C |
| Doubs - Ocourt | 28.12.2022 16:00 | 7.7 |	°C |
| Linth - Mollis, Linthbrücke | 28.12.2022 16:00 | 5.4	| °C |
| ...  | ... | ... | ... | ... |
| _Dimension_ | _Dimension_ | _Messwert_ | _Attribut_ |

{{</alert>}}