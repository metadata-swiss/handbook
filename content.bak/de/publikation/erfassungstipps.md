---
title: Grundlegende Tipps
slug: tipps
weight: 20
type: docs
translationKey: hints
keywords: [I14Y, I14Y, Interoperabilitätsplattform I14Y, Katalog, Metadaten, erfassen, Tipps]
---

Die Nutzerinnen und Nutzer sollen die gewünschten Einträge rasch und zuverlässig finden. Und sie sollen die Einträge richtig einordnen können. Damit dies gelingt, müssen die Metadaten verständlich, gut strukturiert und vollständig sein.

In diesem Kapitel finden Sie grundlegende Tipps zur Erfassung von Metadaten, die für alle Objektarten auf I14Y gleichermassen wichtig sind. Sie erfahren, wie Sie Metadaten so aufarbeiten und pflegen, dass Ihre Einträge aus Sicht der Nutzerinnen und Nutzer klar, konsistent und vertrauenswürdig sind.


## Texte richtig formulieren

Alle Einträge auf I14Y beinhalten einen Titel und eine Beschreibung. Die Titel sollen kurz und aussagekräftig sein, während Beschreibungen detaillierter sind und den Kontext, den Zweck sowie die wesentlichen Inhalte eines Objekts erklären.

Bei der Erfassung von Titeln und Beschreibungen ist darauf zu achten, dass diese sowohl für ein Fachpublikum als auch für ein breiteres Publikum verständlich sind. Die Beschreibungen sollen präzise und inhaltlich vollständig sein, sodass Fachpersonen alle relevanten Informationen erhalten. Gleichzeitig sollen sie so formuliert werden, dass auch Personen ohne Fachkenntnisse den Inhalt und Zweck grob nachvollziehen können. Fachbegriffe können verwendet werden, sollten aber nach Möglichkeit bei ihrer ersten Nennung kurz erläutert oder durch allgemein verständliche Formulierungen ergänzt werden. Abkürzungen werden in Beschreibungen einleitend ausgeschrieben beziehungsweise erklärt. 

Damit die Texte überall gleich dargestellt werden, ist auf I14Y auf Formatierungen zu verzichten; auch Markdown wird aktuell nicht unterstützt. URLs können eingefügt werden und werden klickbar dargestellt. 

## Mehrsprachigkeit 

Grundsätzlich müssen Meta­­daten des Bundes in Deutsch, Französisch und Italienisch vorliegen. Beschreibungen in Rätoromanisch und Englisch sind optional. Kantone, Gemeinden und die übrigen Organisationen legen eigene Vorgaben bezüglich der Mehrsprachigkeit ihrer Einträge fest. Für die Übersetzung der Metadaten gelten die spezifischen Regeln der jeweiligen Organisationseinheit.

<!-- Die Interoperabilitätsstelle empfiehlt komplexere Beschreibungen sowie rechtlich relevante Beschreibungen und Labels durch die Sprachdienste übersetzen zu lassen. Allenfalls sind sogar die Rechtsdienste beizuziehen, um eine präzise und rechtlich korrekte Übersetzung zu gewährleisten. Für interne Beschreibungen und einfache Inhalte kann unter Umständen auch eine Übersetzung unter Zuhilfenahme von amtlichen Dokumenten sowie Übersetzungstools genügen. Wichtig ist dabei jedoch stets eine Qualitätskontrolle durch eine Person mit ausreichenden Sprachkenntnissen, um die Genauigkeit der übersetzten Inhalte sicherzustellen.

Zentrale Begriffe, die mehrmals vorkommen und von verschiedenen Nutzern gebraucht werden, sollten mit der Terminologiedatenbank der Bundesverwaltung (Termdat) abgeglichen oder mit den Sprachdiensten der Bundeskanzlei abgestimmt werden. -->

## Schlüsselwörter und kontrollierte Terminologien

Schlüsselwörter spielen eine zentrale Rolle für die Auffindbarkeit von Datensätzen. Auf I14Y werden Schlüsselwörter mit Objekten aus drei kontrollierten Terminologien verknüpft: mit der Terminologiedatenbank [TERMDAT](https://termdat.bk.admin.ch) der Eidgenossenschaft, mit dem mehrsprachigen europäischen Umwelt-Thesaurus [GEMET](https://www.eionet.europa.eu/gemet) sowie mit der kollaborativen Datenplattform [Wikidata](https://wikidata.org). 

Durch die Verwendung kontrollierter Terminologien wird eine einheitliche Begrifflichkeit gefördert. Dies verbessert nicht nur die Qualität der Metadaten, sondern auch deren Auffindbarkeit über verschiedene Systeme hinweg. Schlüsselwörter ohne Referenz zu einer kontrollierten Terminologie sollten nur in Ausnahmefällen verwendet werden. 

{{<alert title="Weshalb Schlüsselwörter wichtig sind" color="info">}}
Schlüsselwörter helfen, Datensätze besser auffindbar zu machen und ihren Kontext präziser abzustecken. Sie werden für die Suchfunktion indexiert. Einträge mit relevanten Schlüsselwörtern werden deshalb leichter gefunden. Zudem ermöglichen Schlüsselwörter eine bessere Kategorisierung und Vergleichbarkeit von Datensätzen. Durch die Anbindung an kontrollierte Vokabulare wie Termdat, GEMET oder Wikidata werden mittelfristig Abfragen über _Linked Data_ möglich.
{{</alert>}}

Die Funktionalität zum Hinterlegen von URIs bei Schlüsselwörtern wurde [anfangs 2026](https://handbook.i14y.admin.ch/de/changelog/releases/) eingeführt. Damit hat I14Y die Änderung bereits integriert, die die kommende [Version 3 von DCAT-AP CH](https://www.dcat-ap.ch/releases/3.0_workingdraft/dcat-ap-ch_3.0_workingdraft.html#resource-keyword) verlangt. Die _Local Data Stewards_ sind gebeten, die Schlüsselwörter ihrer Einträge im Rahmen des normalen Kontroll- und Überarbeitungszyklus zu aktualisieren und zu ergänzen. Je nach Arbeitsweise stehen unterschiedliche Möglichkeiten zur Verfügung:

### Erfassung über die Weboberfläche

Schlüsselwörter können bei der Erfassung oder beim Editieren eines Eintrags in der Weboberfläche mit einer der vorbestimmten Terminologie-Datenbank verknüpft werden. Es empfiehlt sich, Synonyme und allgemeine Begriffe zu hinterlegen. Dazu wird der betreffende Begriff in Termdat gesucht. Ist er dort verfügbar, wird der Eintrag angewählt und dann -- sofern vorhanden -- unter "Kopfdaten" die "Konzept-URI" kopiert. Dieser eindeutige Link wird ins entsprechende Feld auf I14Y eingefügt. Ist der Begriff bei Termdat nicht vorhanden, wird er in GEMET und in dritter Priorität in Wikidata gesucht. Ohne URI sollen ausschliesslich wichtige Begriff erfasst werden, die in den drei kontrollierten Vokabularen bislang nicht aufführt werden. Wenn möglich, wird in einem solchen Fall zusätzlich der Prozess zur Erfassung in der passenden Terminologiedatenbank angestossen.  

### API-Integration
Die Schlüsselwörter können auch über die I14Y-API eingespeist werden. Alle Informationen zur Nutzung der APIs sind in den [technischen Dokumentationen](https://apiconsole.i14y.admin.ch) zu finden. Schlüsselwörter werden bei einem _POST- oder PUT-Request_ in der folgenden Form mitgegeben: 

```json
"keywords": [
    {
        "label": {
            "de": "string",
            "en": "string",
            "fr": "string",
            "it": "string",
            "rm": "string"
        },
        "uri": "string"
    }
]
```

### Erfassung mit dem "Keyword Generator"

Die [I14Y-Toolbox](https://toolbox.i14y.admin.ch) bietet mit dem "Keyword Generator" ein Werkzeug zum Generieren, Bearbeiten und Hochladen von Schlüsselwörtern an. Das webbasierte Hilfsprogramm erlaubt es insbesondere, Schlüsselwörter von bereits publizierten Einträgen zu überarbeiten bzw. mit URIs zu ergänzen. Das Hilfsprogramm nutzt externe Dienste etwa von OpenAI und von Deepl. Entsprechend dürfen keine sensiblen Informationen eingegeben werden. 

Der Keyword Generator stellt zwei Workflows zur Verfügung:

**Workflow 1: Überarbeitung bestehender Einträge**
Suchen Sie den gewünschten öffentlich auf I14Y publizierten Eintrag. Die bestehenden Schlüsselwörter werden automatisch übernommen. Das Tool macht Vorschläge für zusätzliche Schlüsselwörter mit Verbindungen zu Termdat, GEMET oder Wikidata. Über das Suchfeld kann gezielt geprüft werden, ob ein Begriff in den Terminologiedatenbanken vorhanden ist. Wählen Sie die gewünschten Schlüsselwörter aus. Die ausgewählten Schlüsselwörter können direkt dem Eintrag auf I14Y angefügt werden. Dafür ist das Token erforderlich, das nach dem Einloggen auf I14Y per Klick auf das Kontosymbol oben rechts erhältlich ist. Alternativ kann die generierte Schlüsselwortliste als JSON kopiert und via API eingespielt werden.

**Workflow 2: Generierung neuer Schlüsselwörter anhand einer Beschreibung**
Geben Sie eine Beschreibung des Eintrags ein. Der Keyword Generator schlägt basierend auf diese Beschreibung passende Schlüsselwörter vor. Die ausgewählten Schlüsselwörter können einem bestehenden Eintrag auf I14Y angefügt werden. Dazu wird der Eintrag im internen Bereich von I14Y geöffnet. Aus der URL wird die GUID herauskopiert, die eindeutige Kennung des Eintrags. Zudem muss das Token mitgelidert werden, das nach dem Einloggen auf I14Y per Klick auf das Kontosymbol oben rechts erhältlich ist. Alternativ können die generierten Keywords auch als JSON exportiert und via die I14Y-API einem Eintrag zugewiesen werden.