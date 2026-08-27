---
title: Open Source Software
slug: opensource
translationKey: opensource
weight: 40
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Open Source Software, OSS]
draft: true
---

Der Quellcode der Interoperabilitätsplattform I14Y steht als _Open Source Software_ zur Verfügung. Interessierte können den Programmcode somit prüfen. Sie können ihn auch ausführen und  eine eigene Instanz der Plattform betreiben. Sie können den Code an ihre Anforderungen anpassen oder einzelne Teile davon in ihrer eigenen Software verwenden. 

{{< alert color="success" title="Was ist Open Source Software?" >}}
Bei Open Source Software (OSS) kann der Programmcode von allen interessierten Personen eingesehen werden. Er darf auch angepasst und weiterverwendet werden. Beispiele für grosse Open-Source-Projekte sind das Betriebssystem Linux, der Webbrowser Firefox, die Datenbank PostgreSQL und die Programmiersprache Python.

{{< /alert >}}

Die Veröffentlichung erfolgt im Einklang mit dem Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG, Art. 9](https://www.fedlex.admin.ch/eli/cc/2023/682/de#art_9)). Der Open-Source-Artikel verlangt, dass von Bundesbehörden entwickelter Code als zugänglich gemacht wird, soweit keine überwiegenden rechtlichen oder sicherheitsrelevanten Gründe gegen eine Veröffentlichung sprechen. Für die praktischen Arbeiten der Publikation wurde auf die [Leitfäden Open-Source-Software](https://www.bk.admin.ch/de/open-source-software-oss) abgestellt, die die Bundeskanzlei publiziert hat. 

## Nutzung des Angebots

Der Code der Interoperabilitätsplattform I14Y wird im Repository unter [https://github.com/metadata-swiss/I14Y](https://github.com/metadata-swiss/I14Y) zur Verfügung gestellt. Dort ist auch eine ausführliche technische Dokumentation zu finden. Darin wird beschrieben, wie die Software konfiguriert und in Betrieb genommen werden kann. 

Der Code der Interoperabilitätsplattform I14Y wird unter der Lizenz [MIT](https://opensource.org/licenses/MIT) veröffentlicht. Diese ist sehr permissiv: Sie erlaubt die Nutzung, Anpassung, Weitergabe und kommerzielle Verwertung des Programmcodes ohne weitere Einschränkungen. Einzige Bedingung ist, dass die ursprünglichen Lizenzhinweise in Kopien oder abgeleiteten Versionen erhalten bleiben.

Der Quellcode wird im aktuellen Stand ohne jegliche Gewährleistung bereitgestellt: Das BFS übernimmt keine Haftung für direkte oder indirekte Schäden, Datenverluste, Betriebsunterbrüche oder Folgeschäden, die aus Installation, Betrieb, Anpassung oder Weiterverwendung der Software entstehen. Die Verantwortung für sicheren Betrieb, Konfiguration, Wartung, Compliance und Risikomanagement liegt vollständig bei den nutzenden Organisationen. Das BFS leistet ausserdem keinen Support zur Installation und zum Betrieb der Plattform ausserhalb der eigenen Infrastruktur. 

Die Entwicklungsressourcen des BFS werden auf das Nachfolgeprojekt metadata.swiss fokussiert. Konzepte und Codeteile von I14Y fliessen dort ein. Dank der Publikation des Codes der aktuellen Interoperabilitätsplattform wird sichergestellt, dass die bisherigen Arbeiten sowohl verwaltungsextern als auch für externe Akteure einfach wiederverwendet werden können. 

I14Y wird ab Ende 2027 keine neuen Funktionen mehr erhalten, die nicht fürs Nachfolgeprojekt metadata.swiss relevant sind. Entsprechend können Pull Requests mit funktionalen Erweiterungen  ab Herbst 2027 in der Regel nicht mehr geprüft und integriert werden. Für grössere eigenständige Weiterentwicklungen wird empfohlen, einen eigenen Fork aufzubauen.