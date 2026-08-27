---
title: Handbuch
slug: handbuch
translationKey: handbook
description: 
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Einleitung, Interoperabilität, Mehrfachnutzung, Schweiz, Handbuch, Dokumentation, Github]
weight: 20
type: docs
---

Dieses Handbuch erläutert die wichtigsten Funktionen der Interoperabilitätsplattform I14Y. Es dient neuen Nutzerinnen und Nutzern als Einführung in die Plattform und ihre Funktionsweise. Erfahrene Personen können es als Referenz nutzen, um gezielt Informationen zu einzelnen Funktionen, Prozessen und Begriffen nachzuschlagen. Das Handbuch dokumentiert möglichst vollständig, wie die verschiedenen Funktionalitäten von I14Y genutzt werden können und welche Überlegungen dahinterstehen. Es beschreibt die Prinzipien der Harmonisierung und Standardisierung von Daten, die Rollen und Zuständigkeiten in der Datenbewirtschaftung sowie die Logik hinter den einzelnen Erfassungs- und Publikationsprozessen.

Das Umfeld in der Datenbewirtschaftung ist dynamisch. Anforderungen, Standards, technische Möglichkeiten und organisatorische Abläufe entwickeln sich laufend weiter. Umso wichtiger ist eine gemeinsame Wissensbasis, die Orientierung schafft, häufige Fragen beantwortet und bewährte Vorgehensweisen festhält. Dieses Handbuch soll dazu beitragen, dass Wissen nicht nur punktuell vorhanden ist, sondern für alle Beteiligten nachvollziehbar, zugänglich und weiterentwickelbar bleibt.

{{<alert title="Mitmachen erwünscht" color="success" >}}

Lassen Sie Ihr eigenes Know-how und Ihre eigenen Erfahrungen einfliessen. Das Handbuch soll ein lebendiger Text sein, der mit den Erfahrungen der Nutzerinnen und Nutzer mitwächst. Ergänzen Sie, wenn im Handbuch etwas fehlt. Präzisieren Sie, wenn etwas unklar ist. Und schildern Sie Vorgehensweisen, die sich in der Praxis bewährt haben. Wir freuen uns auf Ihre Beiträge.

{{</alert>}}

Die Beteiligung an diesem Handbuch ist einfach: Beiträge können per [E-Mail](mailto:i14y@bfs.admin.ch) eingereicht oder direkt im Text vorgeschlagen werden. Die Inhalte werden auf [GitHub](https://github.com/metadata-swiss/handbook/) gepflegt und mit [Hugo](https://gohugo.io) in die Website umgewandelt. Änderungen lassen sich entweder direkt im Webbrowser oder mit dem normalen Git-Workflow einreichen.

<details>
<summary><strong>Manueller Prozess über die Website</strong></summary>

1. Erstellen Sie ein Konto auf der Codeverwaltungsplattform GitHub. Loggen Sie sich ein.
2. Öffnen Sie das [Repository mit dem Handbuch](https://github.com/metadata-swiss/handbook/). Die Textinhalte befinden sich im Verzeichnis _content_, unterteilt nach Sprache, Kapitel und Unterkapitel. Dateien mit der Endung _.md_ enthalten die eigentlichen Textinhalte sowie die Grafiken. Suchen Sie den anzupassenden Textteil. Lassen Sie sich den Rohtext anzeigen.
3. Klicken Sie zum Bearbeiten auf das Bleistiftsymbol oben rechts. Nehmen Sie die nötigen Änderungen vor. Beachten Sie dabei die [Markup-Syntax-Regeln](https://www.markdownguide.org/basic-syntax/).
4. Beschreiben Sie im Formular unter dem Text die Änderung kurz. Reichen Sie den Vorschlag anschliessend mit einem Klick auf den Knopf ein. Ihr Vorschlag wird zeitnah vom I14Y-Team geprüft und allenfalls ins Handbuch integriert.

</details>

<details>
<summary><strong>Git-Workflow (empfohlen für grössere Änderungen)</strong></summary>

1. Installieren Sie Git und klonen Sie das Repository: `git clone https://github.com/metadata-swiss/handbook.git`.
2. Erstellen Sie einen Branch für Ihre Änderung: `git checkout -b mein-änderungsvorschlag`.
3. Passen Sie die Dateien im Verzeichnis _content_ an. Beachten Sie dabei die [Markup-Syntax-Regeln](https://www.markdownguide.org/basic-syntax/).
4. Prüfen Sie Ihre Änderungen, speichern Sie sie und schicken Sie sie zu Github:
	- `git add <datei>`
	- `git commit -m "Änderung: kurzer Titel"`
	- `git push -u origin mein-änderungsvorschlag`.
6. Erstellen Sie auf der [GitHub-Website](https://github.com/metadata-swiss/handbook) einen Pull Request. Beschreiben Sie kurz, was geändert wurde und warum. Ihr Vorschlag wird zeitnah vom I14Y-Team geprüft und allenfalls ins Handbuch integriert.

</details>
