---
title: Qualitätsinformationen
slug: qualitaetsinformationen
weight: 40
type: docs
translationKey: dataset-quality
keywords: [I14Y, Interoperabilitätsplattform I14Y, Metadaten, Metadaten-Katalog, Qualität, Qualitätsinformationen]
---

Auf der Interoperabilitätsplattform I14Y werden zudem Angaben zur Qualität des Datensatzes erfasst. Dank diesen können Nutzerinnen und Nutzer rasch abschätzen, ob der Datensatz für die eigenen Zwecke hilfreich ist oder nicht. Sollen die Metainformationen zu einem Datensatz öffentlich publiziert werden, sind die Fragen zur Qualität zwingend auszufüllen.

Dank der Qualitätsinformationen ist etwa auf einen Blick ersichtlich, ob der Datensatz über einen Primärschlüssel verfügt, anhand dessen die Daten mit Informationen aus einer anderen Quelle zusammengeführt werden können. Hilfreich können auch etwa die Angaben zum Aktualisierungsintervall sein.  

Um die Fragen zur Qualität des Datensatzes zu beantworten, klicken Sie auf die Registerkarte "Qualitätsinformationen" und anschliessend auf "Bearbeiten". Beantworten Sie nun die Fragen. Ein Zwischenspeichern ist bei diesem Arbeitsschritt nicht möglich. 

| Frage | Hinweise |
| --- | --- |
| Besitzt dieser Datensatz einen Primärschlüssel? Wenn ja welche(n)? | Wählen Sie "Ja", wenn ein Primärschlüssel existiert, also etwa wenn jeder Eintrag über einen eindeutigen Index verfügt. Bei den meisten Datensätzen ist dies der Fall. Geben Sie zudem an, um welches Merkmal es sich handelt. Verwenden Sie dazu den Titel des zuvor erfassten Datenelements. |
| Gibt es eine Nachverfolgung bei Änderung von Werten, d. h. wenn ein Wert geändert wird, ist der alte Wert noch verfügbar? | Bei Datensätzen, die versioniert sind, ist dies der Fall. Wählen Sie in diesem Fall "Ja". Falls die Daten bei der Aktualisierung überschrieben werden, wählen Sie "Nein". Alternativ haben Sie die Möglichkeit anzugeben, dass diese Frage fürs betreffende Datenangebot nicht relevant ist. |
| Ist es möglich einen Auszug von Werten für ein bestimmtes Datum zu erstellen, d.h. wenn ein Wert geändert wird, wird das Datum der Änderung registriert? | Wählen Sie "Ja" aus, falls die Änderungshistorie an ihren Daten detailliert aufgezeichnet wird, so dass sich nachträglich bestimmen lässt, wer zu welchem Zeitpunkt welche Änderung vorgenommen hat. |
| Wann sind die Inhalte der Änderungen verfügbar, d.h. gibt es einen regelmässigen und definierten Prozess der Datenverfügbarkeit? | Wählen Sie "Sofort", wenn nach der Änderung der Daten unmittelbar die entsprechende Distribution aktualisiert wird. Wählen Sie "Fallweise", wenn manuell eine neue Distribution generiert wird -- abhängig von der Einschätzung zur Wichtigkeit der gemachten Änderung. Wählen Sie "Regelmässig", wenn die Distribution zu im Voraus festgelegten Zeitpunkten aktualisiert wird. Und wählen Sie "Nicht relevant", wenn die Frage nicht beantwortet werden kann. |

Unter __Dokumente / Links__ können Sie weiterführende Dokumente zur Qualität Ihres Datenangebots hinterlegen -- etwa einen Prüfbericht oder ein Qualitätskonzept.

Sobald alle nötigen Metadaten erfasst sind, können Sie vorschlagen, dass der Status des Eintrags von "Inital" auf "Kandidat" umgestellt wird. Eine Person in der Rolle des _Local Data Steward_ wird den Eintrag anschliessend prüfen und freigeben (siehe [Workflow](/handbook/de/gouvernanz/arbeitsablauf)).