---
title: Konzept erfassen
slug: konzepte
weight: 60
type: docs
translationKey: concept
keywords: [I14Y, I14Y, Interoperabilitätsplattform I14Y, Konzepte, Codeliste, Codelisten, Datenelemente, Mehrfachnutzung, Publikation, publizieren, veröffentlichen]
---

Das Konzept beschreibt die im Datenelement enthaltenen Informationen eindeutig und vollständig. Bei einem Konzept kann es sich um eine Zahl, eine Zeichenkette, ein Datum oder um eine Codeliste mit vordefinierten Werten handeln. Mehr Information dazu finden Sie im [Kapitel Informationsmodell](https://i14y-ch.github.io/handbook/de/gouvernanz/informationsmodell/). 

Auf der Interoperabilitätsplattform I14Y lassen sich Konzepte verwalten und publizieren. Die veröffentlichten Konzepte können von anderen Organisationen wiederverwendet werden. Dies ist eine zentrale Funktion der Plattform. Denn damit werden die Daten allmählich semantisch harmonisiert. So wird die Voraussetzung geschaffen, dass sich Daten -- sofern erlaubt und gewünscht -- zwischen den einzelnen Behörden einfacher austauschen lassen. 

Um die administrativen Daten zu harmonisieren, sollten -- wenn immer möglich -- Datenelemente mit bestehenden Konzepten beschrieben werden. Prüfen Sie also, ob bereits ein identisches Konzept besteht, bevor Sie ein eigenes erfassen. Und fragen Sie sich: Lässt sich das Datenangebot so anpassen, dass ein bestehendes Konzept übernommen werden kann? Diskutieren Sie im Zweifelsfall mit der Anbieterin oder dem Anbieter eines ähnlichen Konzepts, ob eine Harmonisierung Sinn macht. Falls ja, regeln Sie, welche Stelle das Konzept in Zukunft pflegen soll. Das I14Y-Team steht bei solchen Diskussionen gerne für Abklärungen und Beratungen zur Verfügung. 

Manchmal ist es nötig, ein eigenes Konzept zu erfassen. Um ein Konzept zu erfassen, klicken Sie auf der Startseite auf __Konzepte pflegen__ und dann auf __Konzept erstellen__. Die hier erfassten Konzepte können später auf einfache Weise zum Beschreiben eines Datensatzes genutzt werden. 

Ergänzen Sie mindestens die Informationen in den mit einem Stern als obligatorisch gekennzeichneten Felder: Wählen Sie einen eindeutigen __Identifikator__. Der Identifikator ermöglicht eine eindeutige und stabile Referenzierung des Konzepts. Bei Bedarf können mehrere Identifikatoren erfasst werden. Das System speichert diese als geordnete Liste (Array). Der erste Identifikator (Hauptidentifikator) hat eine besondere Bedeutung: Er muss zwingend stabil bleiben. Sobald das Konzept öffentlich publiziert wird, kann dieser erste Identifikator nicht mehr geändert werden. Ist noch kein Identifikator manuell gesetzt worden, bevor der Publikationskanal von "Intern" auf "Öffentlich" umgestellt wird, erzeugt das System den Hauptidentifikator automatisch aus dem Titel (Slugification). Tragen Sie im Feld __Version__ die Versionsnummer des Konzepts ein (Format analog zu 1.0.0). Wählen Sie unter __Gültig von__ aus, ab welchem Datum das Konzept verfügbar war. Benennen Sie eine __verantwortliche Person__ sowie deren __Vertretung__. Um die Person auswählen zu können, muss sie sich mindestens einmal auf der Plattform eingeloggt haben. Sollte die gesuchten Personen fehlen, kontaktieren Sie die lokalen Datenverantwortlichen Ihrer Organisation oder das I14Y-Team. Die hier eingetragenen Namen werden den Nutzerinnen und Nutzern der eigenen Organisation angezeigt. Nach der öffentlichen Publikation eines Konzepts sind die Namen im internen Bereich der Plattform sichtbar. Auf der öffentlichen, ohne Login zugänglichen Seite werden sie nicht eingeblendet. <!-- Und sie sind auch über die auf der öffentlichen [Übersicht der elektronischen Schnittstellen](https://api.i14y.admin.ch) aufgelisteten Endpunkte nicht abrufbar. -->  

Erfassen Sie nun einen __Namen__ für den Eintrag. Bei Konzepten, die allenfalls später öffentlich publiziert werden könnten, sollte dieser selbsterklärend sein -- auch für Nutzerinnen und Nutzer ausserhalb Ihrer Organisation und für solche ohne grosse Fachkenntnisse. Das gleiche gilt für die __Beschreibung__. Damit das Konzept gut gefunden wird, macht es oftmals Sinn, in der Beschreibung nebst den Fachbegriffen zusätzlich Synonyme oder Umschreibungen einzusetzen. Sowohl beim Namen als auch bei der Beschreibung ist mindestens das Feld einer Sprache auszufüllen. 

Klicken Sie schliesslich im Feld __Eigenschaftstyp__ an, ob es sich beim betreffenden Konzept um eine Codeliste, ein Datum, einen numerischen Wert oder eine Zeichenkette handelt. Abhängig vom Typ stehen weitere Felder zur Präzisierung zur Verfügung. Einige davon müssen zwingend ausgefüllt werden.

- __Datum:__ Bei einem Datum kann optional definiert werden, in welcher Form der Wert vorliegt. So lässt sich etwa mit *DD.MM.YYYY* ein Datum in der Form von 01.12.2022 beschrieben werden, und *YYYY-MM-DD* bildet 2022-12-01 ab. Alternativ können Daten mit einem regulären Ausdruck (Regex, bevorzugt in der Variante _Basic Regular Expression BRE_) beschrieben werden. Dies macht es möglich, die Datenqualität automatisiert zu prüfen. Der Regex-Ausdruck _\d{2}\.\d{2}\.\d{4}_ etwa beschreibt Daten in der Form von _12.06.2022_. Um die Anzahl Tage und Monate prüfen zu können, sind indes komplexere Ausdrücke nötig. So beschreibt etwa der reguläre Ausdruck _(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[1,2])\.(19|20)\d{2}_ Daten zwischen dem 01.01.1900 und dem 31.12.2099.
- __Numerischer Wert:__ Zwingend zu definieren sind der mögliche Mindest- und der Höchstwert. Zudem muss angegeben werden, wie viele Dezimalstellen (Nachkommastellen) die Zahl enthält. Optional kann ein Muster hinterlegt werden, etwa wenn ein Feld zwar eigentlich numerisch sein sollte, aber Tausendertrennzeichen enthält. Verwenden Sie dazu möglichst einen regulären Ausdruck, denn dieser erlaubt es später Probleme in einem Datensatz zu entdecken und die Qualität zu analysieren. Zwei Beispiele: _\d+_ beschreibt Zahlen mit mindestens einer und unbeschränkt vielen Vorkomma-, aber keinen Nachkommestellen. Und der _Regex_-Ausdruck _\d{2}\'\d{3}\.\d{3}_ entspricht Zahlen analog zu 14'752.211. 
- __Zeichenkette:__ Bei einer Zeichenkette muss die Mindest- und die Höchstlänge definiert werden. Zudem lässt sich auch hier ein Eingabemuster hinterlegen, möglichst in Form eines regulären Ausdrucks. Eine Schweizer Telefonnummer könnte etwa mit _\+41\s\d{2}\s\d{3}\s\d{2}\s\d{2}_ umschrieben werden, und eine E-Mail-Adresse mit _[A-Za-z0-9\-\_\.\+]{1,64}@[A-Za-z0-9\-\_\.]+\.[a-zA-Z]+_. Weitere Beispiele für Regex-Ausdrücke sind in der entsprechenden [Tabelle im Anhang](/handbook/de/anhang/regex) zu finden. 
- __Codeliste:__ Bei einer Codeliste muss angegeben werden, ob die einzelnen Werte in der Liste Zeichenketten oder Zahlen enthalten. Bei Listen, in denen sowohl Zeichenketten als auch Zahlen enthalten sind, ist als Typ "Zeichenkette" zu wählen. Definiert wird ausserdem die maximale Länge für die einzelnen Werte. Bei einer Zeichenkette entspricht dies der maximalen Anzahl Buchstaben, die ein einzelner Wert lang sein darf. Im Fall einer Zahl wird definiert, wie viele Vorkommastellen sie enthalten darf. Eine maximale Länge von 3 etwa beinhaltet alle Zahlen zwischen -999 bis 999 -- unabhängig davon, wie viele Nachkommastellen sie hat. Auf I14Y können auch die Werte der Codeliste hinterlegt werden. Allerdings muss das Konzept zuerst gespeichert werden. Wie die Werte erfasst werden, wird unten beschrieben. 

Bei Bedarf können abgespeicherte Konzepte wieder geladen und editiert werden -- allerdings nur so lange, bis sie den Status "Registriert" erreicht haben. Falls später Änderungen vorgenommen oder etwa eine Codeliste aktualisiert wird, ist es zwingend nötig, über den entsprechenden Knopf oberhalb des Eintrags eine neue Version anzulegen. Mehr Informationen zum Status sind im Kapitel [Rollen und Prozesse](/handbook/de/gouvernanz/workflow) zusammengestellt.

Nach dem erstmaligen Abspeichern haben Sie nicht nur die Möglichkeit den Status und den Kanal für den betreffenden Eintrag zu setzen. Sie können auch bestimmen, ob der Eintrag offen gelassen oder gesperrt werden soll. Diese Funktion ist insbesondere für Codelisten wichtig: In einzelnen Fällen macht es Sinn, wenn sich Codelisten ergänzen oder abändern lassen, auch wenn sie publiziert sind. In solchen Fällen wird oft in den Annotationen vermerkt, von wann bis wann ein Wert gültig ist. Normalerweise sollten Codelisten nach der Publikation aber nicht abgeändert werden. Stellen Sie den Regler in diesem Fall auf __Gesperrt__, direkt bevor Sie die Codeliste publizieren. Änderungen an der Codeliste sind anschliessend nur noch möglich, wenn eine neue Version erstellt wird. Die Sperre lässt sich über die Weboberfläche nicht mehr aufheben. Kontaktieren Sie das Kompetenzzentrum Datenbewirtschaftung, wenn eine Sperre wieder aufgehoben werden muss.  

### Ergänzen einer Codeliste

Codelisten sind zentral für die Datenharmonisierung: Die öffentlich auf der I14Y publizierten Codelisten können von anderen Organisationen genutzt werden -- etwa indem sie direkt in eine Fachanwendung geladen werden. Erfassen Sie deshalb, wenn immer möglich, Ihre Codelisten. Das Vorgehen ist einfach: Suchen Sie das betreffende Konzept in der Übersicht. Klicken Sie auf das Symbol für "Anzeigen" und anschliessend auf jenes für "Bearbeiten". Nun können Sie der Codeliste Einträge hinzufügen.  

__Manuelle Eingabe:__ Die Werte der Codeliste lassen sich über die Eingabemaske manuell erfassen. Dazu klicken Sie aufs Plus-Zeichen. Nun wird der __Wert__ eingetragen. Handelt es sich um eine hierarchische Codeliste, wird auch der __Übergeordnete Code__ erfasst. Zudem werden die entsprechenden Namen in allen relevanten Sprachen eingetragen. Die Angaben müssen mindestens in einer Sprache (DE, FR, IT, EN, RM) eingegeben werden. Optional können zusätzlich eine Beschreibung sowie Annotationen hinterlegt werden. Sobald die Eingaben erfasst sind, werden die Angaben mit einem Klick auf das Gutzeichen gespeichert. Anschliessend wird der nächste Wert der Codeliste eingetragen.

__Import einer Codeliste:__ Bei umfangreichen Codelisten ist ein Import der Werte effizienter. Die Daten müssen entweder im CSV-Format oder als JSON-Datei vorliegen. Soll eine CSV-Datei hochgeladen werden, müssen die Inhalte kommagetrennt sein. Die Datei ist in UTF-8 kodiert. Im Minimum müssen in der CSV-Datei die Informationen zum "Code" sowie der Name in einer Sprache enthalten sein. Zu verwenden sind die Spaltennamen, wie sie in diesem Beispiel eingesetzt werden. 

```
Code,ParentCode,Name_de,Name_fr,Name_it,Name_rm,Name_en,Description_de,Description_fr,Description_it,Description_rm,Description_en,Annotation_media_Type,Annotation_media_Title,Annotation_media_URI,Annotation_media_Identifier,Annotation_media_Text_de,Annotation_media_Text_fr,Annotation_media_Text_it,Annotation_media_Text_rm,Annotation_media_Text_en
"10","","Frühgeschichte","Préhistoire","Preistoria","","Prehistory","Die Frühgeschichte umfasst die Zeit von ca. 2,5 Millionen v. Chr. bis 500 v. Chr.","","La Préhistoire couvre la période d'environ 2,5 millions av. J.-C. à 500 av. J.-C.","","Preistoria comprende il periodo da circa 2,5 milioni a.C. al 500 a.C.","","","","","","","","",""
"11","10","Steinzeit","Période de la pierre","Età della pietra","","Temp da la peira","Stone Age","Die Steinzeit umfasst die Zeit von ca. 2,5 Millionen v. Chr. bis 10.000 v. Chr.","","La période de la pierre couvre la période d'environ 2,5 millions av. J.-C. à 10 000 av. J.-C.","","media","Wikimedia Commons","https://commons.wikimedia.org/wiki/Category:Stone_Age,wikimedia_commons","wikimedia_stone_age","Bilder und Grafiken auf Wikimedia Commons","Images et graphiques sur Wikimedia Commons","Immagini e grafica su Wikimedia Commons","","Images and graphics on Wikimedia Commons"
"12","10","Bronzezeit","Période du bronze","Età del bronzo","Temp dal bronza","","Bronze Age","Die Bronzezeit erstreckt sich von ca. 3000 v. Chr. bis 2200 v. Chr.","","La période du bronze s'étend d'environ 3000 av. J.-C. à 2200 av. J.-C.","","media","Wikimedia Commons","https://commons.wikimedia.org/wiki/Category:Bronze_Age","wikimedia_bronze_age","Bilder und Grafiken auf Wikimedia Commons","Images et graphiques sur Wikimedia Commons","Immagini e grafica su Wikimedia Commons","","Images and graphics on Wikimedia Commons"
"13","10","Eisenzeit","Période du fer","Età del ferro","Temp dal ferd","","Iron Age","Die Eisenzeit umfasst die Zeit von ca. 1200 v. Chr. bis 500 v. Chr.","","La période du fer s'étend d'environ 1200 av. J.-C. à 500 av. J.-C.","","media","Wikimedia Commons","https://commons.wikimedia.org/wiki/Category:Iron_Age","wikimedia_iron_age","Bilder und Grafiken auf Wikimedia Commons","Images et graphiques sur Wikimedia Commons","Immagini e grafica su Wikimedia Commons","","Images and graphics on Wikimedia Commons"
"20","","Antike","Antiquité","Antichità","","Antiquity","Die Antike erstreckt sich von ca. 500 v. Chr. bis 500 n. Chr.","","L'Antiquité s'étend d'environ 500 av. J.-C. à 500 ap. J.-C.","","L'Antichità va da circa 500 a.C. al 500 d.C.","","","","","","","","",""

```

Dieses Beispiel enthält eine Annotation. Für jede zusätzliche Annotation fügen sie weitere Spalten an. Dabei wählen Sie dieselben Spaltennamen wie bei der ersten Annotation, ersetzen aber "media" durch einen anderen Begriff.

Alternativ kann die Codeliste auch in der Form einer JSON-Datei hochgeladen werden. Die Inhalte sind analog zu diesem Beispiel zu strukturieren. 

```json
{
  "data": [
    {
      "annotations": [],
      "code": "10",
      "description": {
        "de": "Die Frühgeschichte umfasst die Zeit von ca. 2,5 Millionen v. Chr. bis 500 v. Chr.",
        "en": "Early history covers the period from around 2.5 million BC to 500 BC.",
        "fr": "La Préhistoire couvre la période d'environ 2,5 millions av. J.-C. à 500 av. J.-C.",
        "it": "Preistoria comprende il periodo da circa 2,5 milioni a.C. al 500 a.C."
      },
      "name": {
        "de": "Frühgeschichte",
        "en": "Prehistory",
        "fr": "Préhistoire",
        "it": "Preistoria"
      }
    },
    {
      "annotations": [
        {
          "identifier": "wikimedia_stone_age",
          "text": {
            "de": "Bilder und Grafiken auf Wikimedia Commons",
            "en": "Images and graphics on Wikimedia Commons",
            "fr": "Images et graphiques sur Wikimedia Commons",
            "it": "Immagini e grafica su Wikimedia Commons"
          },
          "title": "Wikimedia Commons",
          "type": "media",
          "uri": "https://commons.wikimedia.org/wiki/Category:Stone_Age,wikimedia_commons"
        }
      ],
      "code": "11",
      "description": {
        "de": "Die Steinzeit umfasst die Zeit von ca. 2,5 Millionen v. Chr. bis 10.000 v. Chr.",
        "en": "The Stone Age covers the period from around 2.5 million BC to 10,000 BC.",
        "fr": "La période de la pierre couvre la période d'environ 2,5 millions av. J.-C. à 10 000 av. J.-C.",
        "it": "L'età della pietra copre il periodo che va da circa 2,5 milioni a.C. al 10.000 a.C."
      },
      "name": {
        "de": "Steinzeit",
        "en": "Temp da la peira",
        "fr": "Période de la pierre",
        "it": "Età della pietra"
      },
      "parentCode": "10"
    },
    {
      "annotations": [
        {
          "identifier": "wikimedia_bronze_age",
          "text": {
            "de": "Bilder und Grafiken auf Wikimedia Commons",
            "en": "Images and graphics on Wikimedia Commons",
            "fr": "Images et graphiques sur Wikimedia Commons",
            "it": "Immagini e grafica su Wikimedia Commons"
          },
          "title": "Wikimedia Commons",
          "type": "media",
          "uri": "https://commons.wikimedia.org/wiki/Category:Bronze_Age"
        }
      ],
      "code": "12",
      "description": {
        "de": "Die Bronzezeit erstreckt sich von ca. 3000 v. Chr. bis 2200 v. Chr.",
        "en": "The Bronze Age extends from around 3000 BC to 2200 BC.",
        "fr": "La période du bronze s'étend d'environ 3000 av. J.-C. à 2200 av. J.-C.",
        "it": "L'età del bronzo si estende dal 3000 a.C. al 2200 a.C. circa."
      },
      "name": {
        "de": "Bronzezeit",
        "fr": "Période du bronze",
        "it": "Età del bronzo"
        },
      "parentCode": "10"
    },
    {
      "annotations": [
        {
          "identifier": "wikimedia_iron_age",
          "text": {
            "de": "Bilder und Grafiken auf Wikimedia Commons",
            "en": "Images and graphics on Wikimedia Commons",
            "fr": "Images et graphiques sur Wikimedia Commons",
            "it": "Immagini e grafica su Wikimedia Commons"
          },
          "title": "Wikimedia Commons",
          "type": "media",
          "uri": "https://commons.wikimedia.org/wiki/Category:Iron_Age"
        }
      ],
      "code": "13",
      "description": {
        "de": "Die Eisenzeit umfasst die Zeit von ca. 1200 v. Chr. bis 500 v. Chr.",
        "en": "The Iron Age covers the period from around 1200 BC to 500 BC.",
        "fr": "La période du fer s'étend d'environ 1200 av. J.-C. à 500 av. J.-C.",
        "it": "L'età del ferro copre il periodo che va dal 1200 a.C. al 500 a.C. circa."
      },
      "name": {
        "de": "Eisenzeit",
        "en": "Iron Age",
        "fr": "Période du fer",
        "it": "Età del ferro"
      },
      "parentCode": "10"
    },
    {
      "annotations": [
        {
          "identifier": "wikimedia_antiquity",
          "text": {
            "de": "Bilder und Grafiken auf Wikimedia Commons",
            "en": "Images and graphics on Wikimedia Commons",
            "fr": "Images et graphiques sur Wikimedia Commons",
            "it": "Immagini e grafica su Wikimedia Commons"
          },
          "title": "Wikimedia Commons",
          "type": "media",
          "uri": "https://commons.wikimedia.org/wiki/Category:Classical_antiquity"
        }
      ],
      "code": "20",
      "description": {
        "de": "Die Antike erstreckt sich von ca. 500 v. Chr. bis 500 n. Chr.",
        "en": "Antiquity extends from around 500 BC to 500 AD.",
        "fr": "L'Antiquité s'étend d'environ 500 av. J.-C. à 500 ap. J.-C.",
        "it": "L'Antichità va da circa 500 a.C. al 500 d.C."
      },
      "name": {
        "de": "Antike",
        "en": "Antiquity",
        "fr": "Antiquité",
        "it": "Antichità"
      }
    }
  ]
}

```

Wenn der Import funktioniert hat, wird rechts eine entsprechende Meldung angezeigt. Die importierte Codeliste wird allenfalls erst nach dem erneuten Öffnen des Konzepts angezeigt. Klicken Sie also auf "Schliessen". Aktualisieren Sie nun die Ansicht via den Knopf in der Browserleiste oder mit der Taste F5.  

{{<alert title="Konzept oder Datensatz?" color="success">}}

Die Anzahl der Annotationen ist technisch nicht limitiert. Das Kompetenzzentrum Datenbewirtschaftung rät aber zur zurückhaltenden Nutzung dieser Möglichkeit. Wenn zahlreiche Annotationen nötig sind, prüfen Sie bitte: Sollte der betreffende Inhalt besser als Datensatz mit Struktur und hinterlegten Datenelementen sowie einer verlinkten Distribution beschrieben werden? 

{{</alert>}}
