---
title: Changelog
slug: changelog
translationKey: changelog
weight: 80
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
---
{{<alert title="Language" color="warning">}}
__DE:__ Diese Seite liegt teilweise in englischer Sprache vor.
{{</alert>}}

Die Interoperabilitätsplattform I14Y wird kontinuierlich weiterentwickelt. Mit jedem Release werden neue Funktionen hinzugefügt und Fehler behoben. Die wichtigsten Änderungen sind unten kurz dokumentiert. Für detaillierte Informationen zur Weiterentwicklung der Plattform wenden Sie sich bitte an das [I14Y-Team](mailto:i14y@bfs.admin.ch).

## Release vom 2. September 2026

**Zusammenspiel mit LINDAS:** Konzepte und Datensätze werden bei der Publikation auf I14Y im Linked Data Service (LINDAS) des Bundes veröffentlicht, normalerweise im I14Y-Graphen. Ausgewählte Metadaten und Codelisten können in den zentralen LINDAS-Graphen kopiert werden, als gemeinsam genutzte Dimensionen. Auf der öffentlich zugänglichen Website von I14Y werden die entsprechenden Links neu angezeigt.

**Strukturen:** Datensätze verfügen über eine Struktur, die ihre einzelnen Attribute zusammenfasst. Für jedes Attribut kann hinterlegt werden, ob es auf einer bestimmten, gemeinsam genutzten Definition basiert – einem sogenannten Konzept. Ein neuer Knopf vereinfacht nun die Erfassung von Attributen: Ist ein passendes Konzept vorhanden, können die dort hinterlegten Informationen mit einem Klick ins betreffende Attribut importiert werden. 

**Verbesserungen der Benutzerfreundlichkeit:** Die Darstellung von Links zu externen Ressourcen wurde verbessert: Dank eines Symbols sind sie nun auf den ersten Blick als solche erkennbar.

**Anpassung der Links zum Handbuch und zum GitHub-Bereich:** Im Zuge des Projekts metadata.swiss wurde der GitHub-Bereich von `i14y-ch` in `metadata-swiss` umbenannt (siehe [News-Beitrag](/de/news/#der-github-bereich-von-i14y-wird-zu-metadata-swiss)). Mit diesem Release werden die Links von der I14Y-Website zu GitHub sowie zum dort betriebenen I14Y-Handbuch angepasst.

**Fehlerkorrekturen:** Wenn für eine Organisation kein Name in der vom Nutzer oder der Nutzerin gewählten Sprache vorliegt, wird stattdessen der Name in einer anderen Sprache angezeigt. Dieser Fallback stellt sicher, dass stets ein Name dargestellt wird. Ausserdem wurde ein Fehler bei URLs von Distributionen im RDF-Export korrigiert. 

## Anpassung des GitHub-Repos

Der GitHub-Bereich von I14Y wird im Rahmen des Projekts metadata.swiss zu metadata-swiss umbenannt. Bestehende Adressen werden weitergeleitet; wir empfehlen, Verweise und lokale Git-Repositorys schrittweise anzupassen. Weitere Informationen finden Sie im [News-Beitrag zum neuen GitHub-Bereich](/de/news/#der-github-bereich-von-i14y-wird-zu-metadata-swiss).

## Release vom 12. August 2026

**Erfassen von Datenstrukturen:** Bisher mussten Strukturen extern erstellt und dann auf I14Y hochgeladen werden. Neu können einfache Strukturen (eine Klasse mit Attributen) direkt in der I14Y-Oberfläche erfasst werden.

**Bessere Kennzeichnung abgelöster Konzepte:** Normalerweise werden Konzepte versioniert, wenn Änderungen vorgenommen werden. Es ist aber auch möglich, dass ein Konzept durch ein anderes Konzept abgelöst wird. In diesem Fall wird der Status des bisherigen Konzepts auf "abgelöst" gesetzt. Neu lässt sich im nun gültigen Konzept dokumentieren, welche anderen Konzepte es abgelöst hat. Diese Information wird im Bereich "Abstammung" des Eintrags angezeigt.

**Umfassende Exportmöglichkeiten:** Sie möchten einen Eintrag exportieren? Bislang waren Exporte von Beschreibungen zu Datensätzen sowie von Konzepten möglich. Neu lassen sich auch die Einträge zu elektronischen Schnittstellen, Behördenleistungen und Mapping-Tabellen im JSON-Format exportieren.

**Verbesserter Filter:** I14Y erlaubt es die Suchresultate zu filtern. Neu können im Herausgeber-Filter mehrere Organisationen ausgewählt werden. Bislang liess sich nur ein Herausgeber auswählen.

**Räumliche oder zeitliche Abdeckung:** Neu kann in I14Y dokumentiert werden, wenn ein Datensatz mehrere geografische Räume oder mehrere Zeiträume abdeckt.

**Neuerungen auf der Partner-API:** Neue POST-Endpunkte erlauben es gleichzeitig mehrere Codelisten-Einträge und Relationen von Mapping-Tabellen zu senden. Ein neuer Endpunkt ermöglicht es ausserdem, die öffentlichen Informationen zu den Nutzungsorganisationen im RDF-Format zu exportieren.

**Fehlerkorrekturen**

## Release vom 8. Juli 2026

**Organisationslogo:** Seit dem letzten Release kann für jede Organisation ein Logo oder ein Foto hinterlegt werden. Diese Bilder werden neu auf der Seite «Organisationen» angezeigt.

**Tabellarische Ansicht von Datenstrukturen:** Datenstrukturen können alternativ zum UML-Diagramm auch als Tabelle dargestellt werden. Diese Ansicht ist in bestimmten Fällen übersichtlicher und erleichtert einen schnellen Überblick über die Struktur eines Datensatzes.

**Verbesserte Navigation:** Oberhalb der Detailansicht eines Eintrags steht neu ein «Zurück»-Knopf zur Verfügung. Damit gelangen Sie direkt zurück zur Liste mit den gefilterten Suchresultaten. Bislang war dazu der Zurück-Knopf des Webbrowsers nötig.

**Mehr Informationen in Übersichtslisten:** Die Liste der Einträge enthält neu Chips zu den Themen sowie zu den Formaten der zugehörigen Distributionen.

**Erweiterung des RDF-Exports:** Der RDF-Export, der insbesondere für das Harvesting eines Datenkatalogs durch opendata.swiss genutzt wird, enthält im Bereich der Distributionen neu das Attribut `coverage`.

**Anpassung bei der API:** In der elektronischen Schnittstelle (API) wurde im Bereich der Konzepte und der Behördenleistungen bisher das Feld `identifier` verwendet, das eine Zeichenkette enthielt. Dieses Feld wird in diesem Release vollständig durch `identifiers` ersetzt, das eine Liste von Zeichenketten enthält. Bestehende Integrationen zum Lesen oder Schreiben von Konzepten oder Behördenleistungen müssen zwingend angepasst werden. Lesen Sie dazu den entsprechenden [News-Beitrag](/de/news/#breaking-change-auf-der-i14y-api).

**Bugfixes:** Fehlerhafte Resultate im Bereich «My Data» im internen Bereich der Plattform wurden korrigiert. Ausserdem wurden ein Layoutproblem auf der Seite der Codelisten-Einträge sowie mehrere Tippfehler in der Benutzeroberfläche behoben.

**Hinweis:** Die Open-Source-Veröffentlichung des I14Y-Programmcodes wurde entgegen der früheren Ankündigung auf einen späteren Zeitpunkt verschoben, da eine verbleibende Abhängigkeit nicht mit der MIT-Lizenz kompatibel ist.

## Release vom 17. Juni 2026

**Organisationslogo:** Das I14Y-Team kann für jede Organisation neu ein Logo oder ein anderes Bild (z.B. ein Foto des Gebäudes) hinterlegen und dieses der Organisation zuordnen. Diese Erweiterung entstand im Rahmen der Arbeiten an der neuen Version von opendata.swiss, und sie wird auch für die zukünftige Plattform metadata.swiss genutzt. Bitte [kontaktieren Sie das I14Y-Team](mailto:i14y@bfs.admin.ch), falls Sie ein Bild zur Verfügung stellen oder ein bestehendes Bild ersetzen möchten.

**API für Organisationen:** Die grundlegenden Informationen zu den erfassten Organisationen lassen sich neu über die Partner- und die öffentliche API abrufen. Auch die Links zu den Organisationslogos sind über diese Schnittstellen zugänglich.

**Besserer Überblick für Datenanbietende:** Die Startseite des internen Bereichs von I14Y wurde überarbeitet. In der Spalte «Meine Daten» werden nun Einträge angezeigt, bei denen die angemeldete Person als (stellvertretende) Kontaktperson oder als Dateneigentümerin bzw. Dateneigentümer eingetragen ist. Damit können die Nutzerinnen und Nutzer sehr schnell auf die für sie relevanten Einträge zugreifen. 

**Stabiler erster Identifikator:** I14Y erlaubt es mehrere Identifikatoren zu hinterlegen. Der erste Identifikator des Eintrags zu einem Datensatz, einem Konzept, einer Mapping-Tabelle, einer API oder einer Behördenleistung kann neu nicht mehr abgeändert werden, sobald der Eintrag erstmals öffentlich publiziert wurde. Damit wird sichergestellt, dass öffentliche Permalinks dauerhaft gültig bleiben.

**Export gefilterter Codelisten:** Gefilterte Einträge einer Codeliste können neu direkt aus der Benutzeroberfläche exportiert werden.

**Optionale Datumsfelder bei Konzepten:** Die Felder «Gültig ab» und «Gültig bis» sind bei Konzepten und Mapping-Tabellen neu optional.

**Stellvertretende Kontaktperson:** Das Feld für die stellvertretende Kontaktperson ist neu optional. Es ist nicht mehr möglich darin dieselbe Person einzutragen wie im im Feld Kontaktperson.

**Korrektur von Fehlern**
## Release vom 27. Mai 2026

**Erfassungsart wird öffentlich angezeigt:** Auf der öffentlich zugänglichen Benutzeroberfläche werden neu das Erstellungs- und Änderungsdatum sowie die Erfassungsart angezeigt. Dies ermöglicht es, automatisiert erstellte Einträge von manuell gepflegten zu unterscheiden. Das entsprechende Feld wurde mit dem letzten Release eingeführt.

**Erfassungsart im Admin-Bereich:** Im Admin-Bereich wird neu eine Warnung angezeigt, falls ein Eintrag automatisiert erstellt worden ist. Dies verhindert, dass automatisiert erstellte Einträge versehentlich manuell angepasst werden.

**Wiederverwendung von Konzepten:** Auf der Konzeptdetailseite wird die Häufigkeit der Verwendung eines Konzepts in Datenstrukturen angezeigt, mit Links zu den betreffenden Datensätzen. Auf der Katalogseite erscheint diese Anzahl zusätzlich in einem Chip.

**Offizielle I14Y-URIs:** I14Y bietet nun auch für Klassen, Attribute und Assoziationen stabile Links an, sogenannte URIs. Bei maschinellen Zugriffen auf eine solche URI wird auf das Linked-Data-Objekt umgeleitet, bei Zugriffen per Webbrowser auf die entsprechende Seite in I14Y.

**Kleine UX-Verbesserungen**

**Fehlerkorrektionen**

## Release vom 6. Mai 2026

**Strukturen in der Benutzeroberfläche bearbeiten:** Klassen, Attribute und Assoziationen einer Datenstruktur lassen sich neu direkt in der Benutzeroberfläche bearbeiten. Alle Eigenschaften, die in der Seitenleiste angezeigt werden, sind editierbar. Beim Bearbeiten eines Attributs kann ausserdem nach einem Konzept gesucht und eine Verknüpfung zu einer bestimmten Version hergestellt werden.

**Systemmetadaten in der Partner-API:** Alle Objekte enthalten neu einen Abschnitt «system» in den JSON-Antworten der Partner-API. Darin sind das Erstellungsdatum (`createdAt`), das Datum der letzten Änderung (`modifiedAt`) sowie die Erstellungsart (`creationType`) vermerkt. Letztere gibt an, ob ein Objekt manuell über einen Browser-Token (_Manual_) oder automatisiert über ein M2M-Token (_Automated_) angelegt wurde.

**Mehrere Identifikatoren pro Konzept und Verwaltungsleistung:** Konzepte und Verwaltungsleistungen können neu mehrere Identifikatoren tragen. Dazu wurde die Eigenschaft `identifiers` als Array eingeführt. Um bestehende Integrationen nicht zu unterbrechen, wird das bisherige Feld `identifier` vorerst weiterhin ausgespielt – beide Felder erscheinen gleichzeitig in den API-Antworten. Hinweis: Das Feld `identifier` (Singular) wird in einem künftigen Release entfernt. Skripte, die dieses Feld beim Erstellen von Objekten verwenden, müssen rechtzeitig angepasst werden.

**Neue Version einer Mapping-Tabelle erstellen:** Es ist nun möglich, von einer bestehenden Mapping-Tabelle eine neue Version zu erstellen.

**Katalogsuche über die Partner-API:** Der Endpunkt für die Katalogsuche ist neu auch über die Partner-API verfügbar. Die Suche unterstützt verschiedene Parameter wie Suchbegriff und Sprache.

**Erweiterte Bearbeitungsrechte für Submitter:** Submitter können Objekte mit dem Registrierungsstatus "Initial" oder "Kandidat" bearbeiten, auch wenn diese bereits öffentlich publiziert sind. Bedingung ist aber, dass diese zuvor nicht gesperrt worden sind.

**Distributionen auf der Datensatz-Detailseite:** Zu einem Datensatz gehörende Distributionen werden neu direkt auf der Beschreibungsseite des Datensatzes angezeigt.

**Export von Codelisten ohne Annotationen:** Codelisten können neu auf Wunsch auch ohne Annotationen exportiert werden; unterstützt werden die Formate JSON und CSV.

**Technische Aktualisierungen sowie kleinere Verbesserungen und Fehlerkorrekturen**

## Release vom 25. März 2026

**Mapping-Tabellen:** Mit diesem Release werden auf der Interoperabilitätsplattform Mapping-Tabellen eingeführt. Sie dienen dazu, Gemeinsamkeiten und Unterschiede zwischen den Werten aus zwei Codelisten zu dokumentieren. Mapping-Tabellen sind ein vollwertiges Objekt auf I14Y: Sie sind über die Suchfunktion und über Filter auffindbar. Sie sind sowohl auf der öffentlichen Plattform als auch in der Administrationsoberfläche einsehbar. Über die Administrationsoberfläche oder die API können Mapping-Tabellen auch erstellt und bearbeitet werden; zudem steht eine Importfunktion zur Verfügung.

**Anklickbare «Konform zu»-Links:** Für jedes Datenelement kann dokumentiert werden, ob es sich auf ein grundlegendes Konzept stützt. Dazu wird in der SHACL-Struktur im Feld «Konform zu» ein Link hinterlegt. Bislang wurden diese IRIs in der Seitenliste lediglich angezeigt; neu sind sie anklickbar.

**Sortierte Versionen:** Bei versionierten Konzepten wird eine Tabelle angezeigt, die die verfügbaren Versionen des Konzepts auflistet. Die Einträge werden neu in absteigender Reihenfolge dargestellt, was die Navigation durch die Konzept-Historie vereinfacht.

**Diverse Fehlerkorrekturen**

## Release vom 25. Februar 2026

- **IRIs für alle Objekte:** Im letzten Release wurden für Konzepte sogenannte _International Resource Identifier (IRIs)_ eingeführt: stabile, eindeutige Adressen, mit denen Inhalte verlässlich verlinkt werden können. Mit diesem Release erhalten nun auch alle übrigen Objekte auf I14Y eigene IRIs, also auch die Codelisteneinträge (Codes), Datensätze, elektronischen Schnittstellen und Behördenleistungen. Die IRIs werden auf den jeweiligen Detailseiten in der Benutzeroberfläche angezeigt. Für Codelisten, die auf der Plattform LINDAS veröffentlicht wurden, verweisen diese IRIs auf die dort verfügbaren Informationen. Für Datensätze, Datendienste und Verwaltungsleistungen stehen keine Inhalte auf LINDAS selbst, aber sie verfügen trotzdem über eine stabile, maschinenlesbare Adresse. In den RDF-Exporten, zum Beispiel für opendata.swiss, ersetzen die neuen IRIs die bisher verwendeten URLs. Für normale Nutzer ändert sich dadurch wenig, die Verweise auf I14Y-Inhalte werden aber stabiler.

- **Datensätze mit Struktur filtern:** In der Katalogsuche steht neu ein Filter zur Verfügung, mit dem sich die Ergebnisliste auf Datensatzeinträge einschränken lässt, bei denen eine Struktur hinterlegt ist. So lassen sich Datensätze, die als Grundlage für Harmonisierungsarbeiten dienen können, schneller identifizieren.

- **Erster Schritt zu Mapping-Tabelle:** Um Unterschiede und Gemeinsamkeiten zwischen zwei Codelisten zu dokumentieren, führt I14Y Mapping-Tabellen ein. In einem ersten Schritt werden diese Tabellen als eigene Detailseiten in der Eingabeansicht von I14Y sichtbar. Sie können dort angezeigt, aber noch nicht bearbeitet werden. Zudem sind sie noch nicht über die Katalogsuche auffindbar. Auf diese Weise können erste Erfahrungen gesammelt werden, bevor die Funktion weiter ausgebaut und in die übrige Oberfläche integriert wird.

- **API-Nutzung im Dashboard sichtbar:** I14Y stellt Daten über eine öffentliche API und über eine Partner-API zur Verfügung. Neu zeigt das I14Y-Dashboard einfache Auswertungen zur Nutzung dieser Schnittstellen an. So wird zum Beispiel ersichtlich, wie viele Anfragen pro Tag von ausgewählten Organisationen eingehen.

- **Strengere Regeln für Identifikatoren:** Alle Objekte auf I14Y verfügen über einen  Identifikator. Damit Identifikatoren zuverlässig mit dem neuen IRI-Resolver funktionieren, werden die erlaubten Zeichen eingeschränkt. Erlaubt sind nur Buchstaben (A–Z, a–z), Ziffern (0–9) sowie die Zeichen Punkt (.), Unterstrich (_), Tilde (~), At-Zeichen (@) und Bindestrich (-). Technisch entspricht dies dem Muster `^[A-Za-z0-9._~@-]+$`. Für Benutzerinnen und Benutzer bedeutet dies: Beim Erfassen oder Anpassen von Identifikatoren können Eingabefehler auftreten, wenn unerlaubte Sonderzeichen verwendet werden. In solchen Fällen weist das System in einer Fehlermeldung darauf hin.

- **Verbesserungen bei den Suchergebnissen:** Die Suche auf I14Y wurde weiter verfeinert, damit wichtige Inhalte leichter auffindbar sind. Einträge, die als Standard oder bevorzugter Standard gekennzeichnet sind, erhalten in der Sortierung der Suchergebnisse ein höheres Gewicht und erscheinen dadurch prominenter. Ausserdem ist es nun möglich nach dem Dateneignern (_Data Owner_) zu suchen.

## Release vom 28. Januar 2026

- **Permalinks für Konzepte:** Auf den Detailseiten öffentlich publizierter Konzepte wird neu ein sogenannter _International Resource Identifier (IRI)_ eingeblendet. Für diesen stabilen und eindeutigen Identifikator, auch Permalink genannt, wird der _Linked Data_-Bereich des Bundes genutzt. Der Permalink setzt sich zusammen aus dem systeminternen Identifikator und der Version des Konzepts: `https://register.ld.admin.ch/i14y/concept/{concept-identifier}/version/{version}`. Ein IRI wird erst generiert, sobald ein Konzept öffentlich publiziert wird; interne Konzepte haben keinen solchen Permalink.
- **Erweiterung des RDF-Exports:** Beschreibungen zu Datensätzen sind über die elektronische Schnittstelle (API) auch im RDF-Format erhältlich. Dies ermöglicht das automatisierte Auslesen der Inhalte eines Katalogs (sogenanntes _Harvesting_). Der RDF-Export wurde nun um eine ergänzende Angabe zum Distributionstyp ergänzt.
– **Zusätzliche Angabe in der Graph-Ansicht:** Die Struktur eines Datensatzes wird auf I14Y grafisch dargestellt. In dieser Darstellung werden nun auch die Masseinheiten von Attributen eingeblendet, sofern die entsprechenden Angaben hinterlegt sind. 
- **Filter verbessert:** Die Auswahlmöglichkeiten in Filtern sind besser geordnet. Bei einigen erfolgt die Ordnung nach fachlichen Kriterien (z. B. beim Statusfilter), bei anderen in alphabetischer Reihenfolge (z. B. beim Filter nach Lebenslagen).
- **Fehlerkorrekturen:** Es wurden mehrere Fehler korrigiert. Unter anderem können grosse Codelisten wieder schneller hochgeladen werden.

## Release vom 7. Januar 2026

- **Schlüsselwörter mit Verbindung zu vordefinierten Begriffen**: Die Schlüsselwörter können neu mit eindeutigen Bezeichnungen aus kontrollierten Begriffsl­isten verknüpft werden. Technisch geschieht dies über ein zusätzliches Textfeld (`uri`). _Achtung: Dadurch ändert sich die Struktur der Daten, die von der Public- und Partner-API zurückgeliefert werden._ Diese Änderung wurde vom Steuerungsausschuss genehmigt. Die neue Struktur: 

```"keywords": [
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
- **Bessere Darstellung erlaubter Werte**: In den SHACL-Datenstrukturen können die erlaubten Werte eines Feldes definiert werden. Sobald das betreffende Feld in der Visualisierung angeklickt wird, werden die erlaubten Werte nun auch in der Seitenleiste angezeigt. Damit wird einfacher ersichtlich, welche Werte pro Feld zulässig sind.
- **Verbesserte Katalogsuche**: Die Suche im Katalog wurde weiter ausgebaut. Sie unterscheidet nicht mehr zwischen Gross- und Kleinschreibung. Und sie berücksichtigt die zusätzlichen Felder  Ansprechperson und Stellvertretung der Ansprechperson, Kontaktstelle sowie die Identifikatoren der Objekte.
- **Interne Verbesserungen und Bugfixes**

## Release vom 27. November 2025

Mit diesem Release erfolgt ein Wechsel der grundlegenden Infrastruktur: Die Interoperabilitätsplattform I14Y wird nun in der Public Cloud betrieben (Azure, bezogen über das Bundesamt für Informatik [BIT]). Zudem wird der Code neu auf Github verwaltet. Aufgrund der neuen Infrastruktur mussten diverse technische Details im Code von I14Y angepasst werden.

Weitere Neuerungen:
- **Erweiterte Suchfunktion**: Die Partner- und Public-API bieten neu einen Endpunkt zur Suche nach Einträgen in Codelisten.
- **Verwaltung von Katalogeinträgen**: Dank neuen Endpunkten in der Partner- und Public-API können Einträge aus DCAT-Katalogen abgerufen werden. 
- **Verbesserter Katalog-Export**: Der GET-Endpunkt für den Katalog-Export wurde überarbeitet. Das gewünschte Format (RDF oder TTL) kann nun via einen Parameter angefordert werden.
- **Fehlerkorrekturen**: Verschiedene Fehler wurden behoben, um die Stabilität und Benutzerfreundlichkeit zu verbessern.

## Release vom 22. Oktober 2025
- **Bearbeitungsmasken verbessert**: Die Schaltfläche Speichern ist nun standardmässig aktiv. Bislang wurde sie erst aktivert, nachdem Änderungen an den Metadaten vorgenommen worden waren. Ein Klick auf die Schaltfläche hilft dabei, unvollständige Metadaten zu erkennen: Die entsprechenden Felder werden rot umrandet. 
- **Übersichtlichere Organisationsseite**: Organisationen, die noch keine Metadaten öffentlich publiziert haben, werden nicht mehr auf der [Organisationsseite](https://www.i14y.admin.ch/de/organisations) angezeigt.
- **Vereinfachte Erfassung von Behördenleistungen**: Beim Erfassen von Behördenleistungen waren bislang meist zwei Schritte nötig: Zuerst wurde Basisbeschreibung zur Behördenleistung erfasst. Anschliessend wurde über eine zweite Formularseite der Link bzw. der Kanal erfasst. Neu können die Basisbeschreibung und die Links über ein einziges Formular eingetragen werden. Dadurch lassen sich Behördenleistungen schneller und effizienter erfassen. 
- **Neue Filtermöglichkeiten**: Dank des neuen Filters Konzepttyp kann nun gezielt nach Konzepten mit bestimmten Typen gefiltert werden. So lässt sich eine Suche beispielsweise auf alle Codelisten eingrenzen. 
- **Interne Verbesserungen und Bugfixes**

## Release vom 24. September 2025
- Auf I14Y kann zu jeder Datensatz-Beschreibung eine detaillierte technische Beschreibung der Datenstruktur hinterlegt werden. Neu lassen sich die hinterlegten Strukturen in mehreren Formaten (TTL, RDF, JSON-LD) via die öffentliche Website herunterladen. 
- Alle Metadaten eines Datensatzes lassen sich über einen neu eingeführten Knopf über die öffentliche Website exportieren.
- In Beschreibungen eingefügte Internetadressen werden automatisch als anklickbare Links angezeigt.
- Beim Abruf von Informationen über die elektronische Schnittstelle (API) werden jetzt alle Ergebnisse geliefert, sofern keine Anzahl der gewünschten Elemente pro Seite (pageSize) angegeben wird.
- Im Fussbereich der Website gibt es neu einen direkten Link zur I14Y-Toolbox mit hilfreichen Werkzeugen für das Einspielen von Metadaten.
- Der Suchindex wird nun unabhängig vom Start der Anwendung aufgebaut. Die Plattform steht dadurch bei einem Neustart schneller wieder zur Verfügung. Und die Suche ist stabiler.
- Neue interne Überwachungsadressen (Health-Checks) helfen, technische Probleme schneller zu erkennen.
- Verschiedene Fehler wurden behoben.

## Release vom 10. September 2025
- Für Beschreibungen von elektronischen Schnittstellen (APIs) stehen zwei neue Datumsfelder zur Verfügung: das Ausgabedatum und das Datum der letzten Änderung. Dank den beiden Feldern kann der Lebenszyklus von Schnittstellen besser dokumentiert werden. 
- Bei der Erfassung von Behördenleistungen und elektronischen Schnittstellen (APIs) können nun auch die verantwortliche Person sowie deren Stellvertretung angegeben werden. Damit stehen bei allen I14Y-Objekten (Datensätze, APIs, Behördenleistungen, Konzepte) dieselben Eingabemöglichkeiten zur Verfügung.
- Bei den einzelnen Einträgen von Codelisten stehen neu die Felder "Gültig von" und "Gültig bis" zur Verfügung. Damit kann die zeitliche Gültigkeit einzelner Einträge dokumentiert werden.
- Die Angabe eines Identifikators für elektronische Schnittstellen (APIs) ist jetzt optional. Wird kein Identifikator eingegeben, wird automatisch einer generiert. Dieselbe Möglichkeit wurde bei im Bereich der Datensätze bereits früher eingeführt. 
- Einträge zu elektronischen Schnittstellen (APIs) können nun direkt über die Benutzeroberfläche gelöscht werden. Dies vereinfacht die Verwaltung nicht mehr benötigter API-Beschreibungen.
- Verschiedene Fehlerkorrekturen zur Verbesserung der Stabilität und Benutzerfreundlichkeit.

## Release vom 30. Juli 2025
- Die Angabe eines Identifikators für Datensätze ist neu optional. Wird kein Identifikator eingegeben, wird automatisch einer generiert – unabhängig davon, ob die Metadaten über die Benutzeroberfläche oder die elektronische Schnittstelle eingetragen werden.
- Die Darstellung und Funktionalität der Organisationsseite wurden verbessert.
- Fehlerkorrektur: In der letzten Version lösten Behördenleistungen, deren Kanal ein ownedBy-Feld enthält, eine Fehlermeldung aus. Dieses Problem wurde behoben.
- Fehlerkorrektur: Behördenleistungen mit einem zugeordneten Kanal konnten in der letzten Version nicht bearbeitet werden. Dieser Fehler wurde behoben.
- Fehlerkorrektur: Bei der Suche innerhalb von Codelisteneinträgen kam es in der letzten Version zu einem Fehler. Die Suchfunktion wurde korrigiert und funktioniert nun wie erwartet.

## Release vom 23. Juli 2025
- Welche Organisationen nutzen die Interoperabilitätsplattform I14Y? Eine neue Seite listet alle Organisationen auf, die auf I14Y Metadaten publizieren. Zudem wird für jede Organisation die Anzahl veröffentlichter Beschreibungen von Datensätzen, APIs und Behördenleistungen sowie die Anzahl publizierter Konzepte eingeblendet. 
- Seit dem Frühsommer können auf I14Y kompliziertere Datenstrukturen dokumentiert werden. Bislang waren diese Informationen ausschliesslich im internen Bereich sichtbar. Mit dem aktuellen Release wird eine grafische Darstellung erfasster Datenstrukturen auf der öffentlichen Website eingeführt.
- Behördenleistungen können nun einzeln über die elektronische Schnittstelle (API) bezogen werden. Ein weiterer Endpunkt erlaubt es I14Y-Partnerorganisationen zudem Behördenleistungen voll- oder halbautomatisiert auf I14Y zu veröffentlichen. 
- Fehlerkorrekturen

## Release vom 2. Juli 2025
- I14Y benutzt für die grafische Oberfläche [Oblique](https://oblique.bit.admin.ch/), eine Sammlung von standardisierten grafischen Komponenten der Bundesverwaltung. Mit diesem Release wird auf Oblique 13 umgestellt. Dadurch wird die I14Y-Website grafisch leicht modernisiert. 
- Mit den letzten Releases hat I14Y eine neue Technologie zur Beschreibung von Datenstrukturen eingeführt (siehe Struktur Beta). Neu lassen sich die hochgeladenen Strukturen im internen Bereich der Plattform grafisch darstellen. 
- Publizierte Codelisten lassen sich nun auf der öffentlichen Website durchsuchen.
- Dank neuen Endpunkten können Beschreibungen von APIs automatisiert bezogen und geschrieben werden. 
- Das Feld E-Mail-Adresse der Kontaktstelle muss nun zwingend ausgefüllt werden. Dies entspricht der Anforderung der nächsten Version des Standards DCAT-AP CH ([Version 3](https://www.dcat-ap.ch/releases/3.0_workingdraft/dcat-ap-ch_3.0_workingdraft.html)). Bestehende Einträge auf I14Y können nicht erneut abgespeichert werden, solange das E-Mail-Feld nicht ausgefüllt ist. 
- Fehlerkorrekturen

## Release vom 28. Mai 2025
- Ein neuer Download-Button ermöglicht es, Beschreibungen von Datensätzen aus dem internen Bereich im JSON-Format herunterzuladen. Dies vereinfacht den Export von Metadaten. 
- Beschreibungen von Datensätzen können neu aus einer Datei importiert werden. Der Import steht zur Auswahl, wenn man auf den "Import"-Knopf klickt. 
- Seit dem letzten Release ist es möglich Datenstrukturen im RDF-, TTL oder JSON-LD-Format hochzuladen. Diese Strukturen lassen sich neu grafisch darstellen.
- Die [I14Y-API](https://apiconsole.i14y.admin.ch/) bietet neue Endpunkte zum Importieren und Exportieren einer Struktur in RDF-, TTL- und JSON-LD-Formate.  
- Für Organisationen wurden neue Informationsfelder eingeführt. Diese ermöglichen eine detailliertere Beschreibung der in I14Y erfassten Organisationen.
- Einige Übersetzungen wurden aktualisiert.
- Das Indexierungssystem der Suche wurde verbessert. Suchanfragen liefern nun präzisere Ergebnisse.

## Release vom 7. Mai 2025
- Die Interoperabilitätsplattform I14Y hat bisher mehrere Systeme zum Speichern der Metadaten genutzt. Ab diesem Release werden nun alle Objekte in der zentralen I14Y-Datenbank abgelegt. Die bisherigen Funktionen wurden angepasst und die Daten aus dem alten System wurden migriert. Der Verzicht auf eine Mikroservice-Architektur in diesem Bereich macht das System vor allem bei der Suche über mehrere Objektkategorienschneller.
- Das Aussehen der Seiten, auf denen die Beschreibungen zu einem Datensatz, einer elektronischen Schnittstelle, einer Behördenleistung oder einem Konzept gezeigt werden, wurde verbessert: Auf der linken Seite steht nun ein Verzeichnis zur Verfügung, dank dem rasch durch die Beschreibung navigiert werden kann.
- Welche Daten sind öffentlich verfügbar, welche können unter bestimmten Bedingungen angesehen werden und welche sind geheim? Die neuen Symbole auf den Übersichtsseiten zeigen den Status der einzelnen Einträge an.
- Dank eines neuen Endpunkts in der öffentlichen API und in der API für I14Y-Partner können gefilterte Konzeptlisten angefordert werden. Filtern lässt sich etwa nach dem Herausgeber oder dem Status. 
- Ein neuer Endpunkt in der API für I14Y-Partner erlaubt es, bestehende Konzepte automatisiert zu aktualisieren.
- In der Beschreibung einer elektronischen Schnittstelle kann jetzt ein Link auf jenen Datensatz gesetzt werden, auf den die Schnittstelle zugreift.
- Die Erfassung von Datenstrukturen wird derzeit komplett überarbeitet. Mit diesem Release wird eine neue Registerkarte eingeführt. Über diese kann man Informationen zur Datenstruktur in den Formaten RDF und TTL hoch- und herunterladen. Die neuen Funktionen befinden sich noch in der Testphase. Die bisherige Registerkarte steht weiterhin zur Verfügung. Allerdings können auf die gewohnte Weise keine Strukturen mehr angelegt werden. Mit dem nächsten Release wird die Erfassung und Visualisierung von Strukturen weiter verbessert.
- Weitere Fehlerkorrekturen

## Release vom 5. März 2025
- Die [I14Y-API](https://apiconsole.i14y.admin.ch/) bietet neue Endpunkte an im Bereich der Datensatz-Beschreibungen. Die Metadaten zu Datensätzen können gelesen werden (GET). Neue Beschreibungen lassen sich erfassen (POST). Bestehende können editiert und publiziert (PUT) oder bei Bedarf gelöscht werden (DELETE).  
- Bei der Erfassung einer Behördenleistung kann neu ausgewählt werden, für welches Gebiet die Leistung angeboten wird. Im Auswahlfeld sind nebst der Gesamtschweiz alle Kantone, Bezirke und Gemeinden hinterlegt. Diese Information wird auch im Export über die API mitgeliefert. Grundlage ist die Codeliste [Kantone, Bezirke und Gemeinden](https://www.i14y.admin.ch/de/catalog/concepts/08dc23f0-d04d-2d2f-a9f5-9cea80695acf/description).
- Beim Erstellen eines internen Arbeitsbereichs für ein Amt oder für eine andere Organisation kann die Interoperabilitätsstelle neu die Organisationsnummer aus dem Unternehmensregister, eine Angabe zur Rechtsform (siehe Codeliste [Rechtsform eines Unternehmens](https://www.i14y.admin.ch/de/catalog/concepts/08dad8ff-f18a-560b-bfa6-20767f2afb17/description)) sowie Informationen zur föderalen Ebene der Organisation hinterlegen. Die Informationen zum Gebiet, in dem eine Organisation tätig ist, werden beim Bezug einer Behördenleistung über die API mitgeliefert.
- Die Startseite sowie die Überblicksseite im internen Bereich wurden inhaltlich leicht überarbeitet: Die Einleitungstexte wurden angepasst. Und in der Fusszeile wurde ein Link zur API-Konsole von I14Y hinzugefügt. Das Video zur Datenharmonisierung, das bislang auf der Startseite platziert war, wurde entfernt; es ist weiterhin im [News-Bereich](https://i14y-ch.github.io/de/news/) sowie auf [Youtube](https://www.youtube.com/watch?v=U0CpW1bNIdU) zu finden.  
- Ein Fehler des Feldes Herausgeber wurde korrigiert: Bislang musste die Herausgeber-Organisation oftmals neu ausgewählt werden, sobald ein Eintrag bearbeitet worden war. Dies ist nun nicht mehr nötig. 
- Ein Fehler des Feldes Dateneigner wurde korrigiert: Bislang konnte ein früher gespeicherter Name im Editiermodus nicht gelöscht werden. Dies ist nun wieder möglich. 
- Weitere Fehlerkorrekturen

## Release January 15 2025
- The [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) can now be used to retrieve and publish dataset descriptions (GET and POST). 
- The [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) can now be used to set status and publication level (PUT).
- Minor search improvements
- Numerous bug fixes

## Grosser Release vom 13. November

Die Benutzungsoberfläche von I14Y wird mit dem Release vom 13 November einfacher und die Bedienung intuitiver: Die bisherige Trennung zwischen Katalog und Konzepten auf der grafischen Oberfläche wird aufgehoben. Neu gibt es eine globale Suche. Das Erscheinungsbild wird modernisiert. Zudem wird die Statusverwaltung überarbeitet und ein neuer API-Endpunkt wird eingeführt. Die Änderungen im Detail.

### Öffentlicher Bereich des Portals

- Mit dem neuen Release erfolgt das Update auf die neue Version des Designsystems Oblique der Bundesverwaltung. Damit wird das Erscheinungsbild modernisiert.
- Die grafische Trennung zwischen Katalog und Konzept wird aufgehoben; Datenkonzepte werden nun dem Katalog zugeordnet und die Kacheln entfernt. Das Menü umfasst nur noch die Punkte Startseite, Katalog, News und Handbuch.
- Neu ist ein prominent platziertes Suchfeld verfügbar, das Metadaten unabhängig vom Typ durchsuchbar macht. Die Ergebnisse werden in Registerkarten dargestellt (Datensätze, Behördenleistungen, APIs, Konzepte). Auch die Treffer der Metadatenportale von Opendata und Geocat werden angezeigt.
- Die Fusszeile wird um einen Link zur [GitHub-Ablage der I14Y](https://github.com/metadata-swiss/) (mit Skripten und Tutorials) ergänzt. Auch wird der Link zum [LinkedIn-Konto der I14Y](https://www.linkedin.com/showcase/i14y/) hinzugefügt.

### Änderungen im Organisationsinternen Bereich der Website

- In "Meine Aufgaben", "Hängige Vorschläge" und "Daten meiner Organisation" werden nun auch Datenelementkonzepte berücksichtigt.
- Datenelementkonzepte können neu offen gelassen oder gesperrt werden. Offen gelassen können die Konzepte sowie die Codelisten editiert werden, ohne dass eine neue Version erstellt werden muss. Wenn die Konzepte gesperrt sind, können sie nicht editiert, sondern müssen versioniert werden.
- Alle Einträge einer Codeliste lassen sich neu in einem Durchgang löschen.

### Elektronische Schnittstellen (APIs)

- Mit dem neuen Release steht auf dem [API-Gateway](https://input.i14y.admin.ch/console/partner/v1/index.html) für Partnerorganisationen ein Endpunkt bereit, über den Beschreibungen von Datensätze veröffentlicht werden können.

## Release September 4 2024
- How fast is the number of metadata entries on the I14Y growing? And how often are data concepts reused? The I14Y dashboard, which is available in a beta version, is now accessible via the homepage. 
- Web links can now be opened with a right click. 
- Additional filtering options have been added to the data concepts overview. The list can now be filtered by status.  
- The "My data" section on the I14Y homepage now also lists data concepts that need the attention of the logged-in user. 
- The button to link an additional catalogue on the data collection input screen is greyed out if the logged-in user has only submitter rights. 
- Information about government services can now be retrieved via the I14Y Partner API.

## Release August 14 2024
- Data concepts (input area): Until now, entries for a code list were inserted directly on the page. The new release introduces a pop-up. This provides a clearer display and makes it easier to add entries to a code list.  
- Data concepts (input area): The "Versions" section in the input area for data concepts is now positioned above the "Connections" section. In this way, the order corresponds to that on the public side of the I14Y. 
- Data concepts (input area): The entries in a code list can now be filtered. This makes it easier to check and adapt longer code lists.
- Data concepts: Previously, data concepts that were integrated into a data collection via a structure could be edited directly from the display screen in the catalogue section. The corresponding "Edit" button has now been removed. Concepts are consistently edited in the concept section of the platform.  
- Public services (input area): The input screen for public services has been slightly adapted: The fields for the identifier and the publisher are now on one row. Previously, they were arranged one below the other. The input screen is now harmonised with the screen for entering datasets.   
- Input area: The new "View publication" button allows you to check an entry you have just entered directly on the publicly accessible website. 
- Input area: The "My data" mini-dashboard has been improved. It gives users an overview of their tasks and of their metadata.  
- Bug fixes

## Release July 17 2024
- Since the last release, public services can be better categorised using Life and Business events. It is now also possible to filter the search results according to specific life or business events. 
- The display of codelists has been improved. 
- The download link for concept content has been adapted to ensure consistency across the system. 

## Release July 10 2024
- The I14Y improves the categorisation of public services: When entering the description of a public service, it is now possible to select the life or business situation in which a particular e-government service can be useful. This makes it easier for both citizens and entrepreneurs to find the right public service. 
- Improved and enhanced filtering for description of datasets, data services and public services.
- The Labs tile has been removed to make the GUI clearer. Experimental work can be found in the [I14Y Github](https://github.com/metadata-swiss/) area. 
- Bug fixes

## Release July 3 2024
- The catalogue search functionality in the input section of the platform has been visually improved.
- The buttons to create or edit an object are now disabled if the action is not allowed. 
- Several minor improvements
- Bug fixes

## Release 19 June 2024
- Hierarchical code lists are now displayed in a tree view. This improves the visibility of the hierarchy. 
- The code lists can be downloaded in JSON and CSV format from the public front-end.
- When describing a distribution, usage rights information can now be entered. 
- It is no longer necessary to specify the format for distributions. This information can still be entered as an option. 
- Descriptions of dataservices also list which datasets are linked. 
- Descriptions of distributions refer to the appropriate dataservice. 
- The versions of a data element concept are now displayed on the overview page. 
- Several improvements have been made to the graphical interface. 
- Bugfixes

## Release 26 Mai 2024
- The system now automatically checks for correct URL syntax when entering metadata. If the entry is incorrect, an error message is displayed.
- Spaces are not allowed in identifiers to ensure compatibility with different systems. When entering metadata, the system now automatically checks for spaces in the identifier. If spaces are detected, an error message is displayed. 
- Improved display speed for frequently used concepts, such as the AHV number.
- Bugfixes

## Release 22 April 2024
- With the new release, it will be possible to delete distributions with just a few clicks via the web interface. Previously, this had to be done via the electronic interface. 
- The news page has been revised: it can now be updated more quickly. 

## Release 8 April 2024
- The interoperability service introduces new entry fields. They allow for more detailed description of records on the I14Y interoperability platform. The fields in detail: The name of the data owner can now be entered. It is also possible to add the name of the person who is operationally responsible for the data and the name of the deputy. For data collections that are official geodata under federal law according to the [Geoinformation Ordinance](https://www.fedlex.admin.ch/eli/cc/2008/389/de), the corresponding number can now be selected.    
- Bugfixes

## Release 27 March 2024
- Bugfixes

## Release 12 March 2024
- Concepts can be reused in various datasets. This ensures that the same definitions, the same characteristics and the same coding methods are used. The description of the individual concepts now shows which datasets use this particular concept. An indication of the number of reuses is also displayed. Only data collections that have been publicly described on the platform are counted. 
- Bugfixes

## Release 27 February 2024
- The description of a dataset (fields according to DCAT-AP CH) can now be assigned to several catalogues. This allows it to use the description both in the I14Y catalogue and in the catalogue for opendata.swiss. The interoperability service can open additional catalogues upon request. 
- Bugfixes

## Release 5 February 2024
- The channels of a public service are now displayed directly on the overview page. Previously, they could be found in a separate tab. This change allows users to access the public service with fewer clicks. 
- Records can now be assigned to multiple catalogues. For example, a record can be part of both the I14Y and Opendata catalogues. The keywords, which may differ from catalogue to catalogue, can be set for each catalogue. 

## Release 25 January 2024
- Introduction of new fields to document the protection status of the da dataset: Thanks to the news fields, it is possible to enter information about whether a record contains personal data or even particularly sensitive personal data. Information about the retention period of the data can also be recorded.
- First implementation of the Catalog class. In the future, several catalogues can be managed on the I14Y. Records can be assigned to one or more catalogues. 
- Provision of a machine-readable security information file (security.txt) according to the National Cyber Security Centre (NCSC) specification.
- Bug fixes

## Release 04 December 2023
- Change in user management: Only people who have logged in to the I14Y input can be found and entered as responsible person and responsible deputy for concepts and structures.
- The filters "Publisher" and "Topics" are now available on the concept search page.
- The "Delete" action is now available on the concept view page.
- Bug fixes

## Release 20 November 2023
- Filters for publication level, publisher and themes are now available on the concept page.
- Bug fixes

## Relase 3 November 2023
- Demo endpoint: Retrieve catalogue as RDF-XML and RDF-Turtle
- Bug fixes

## Relase 24 October 2023
- Concept search fix: Terms are now found regardless of capitalisation and default language. 
- The Qualified Attribution and Qualified Relation properties can now be edited from the user interface.
- The submitter role is now displayed in the user info box. 
- Bug fixes

## Release 10 October 2023
- Concept search now works with hyphens and underscores. This makes it possible to find concepts with titles such as "EXAMPLE_CONCEPT-2023-10-04". 
- The concept detail page now displays the additional properties Themes, Keywords, and ConformsTo.
- The concept JSON endpoint now returns the additional themes, keywords and conformsTo fields.
- Optimised the user information popup. An issue with the login status display has been fixed. And the organisation name is now displayed in the default language. 
- Bug fixes

## Release 29 September 2023
- Additional fields for describing data collections have been introduced. These correspond to the DCAT-AP-CH standard in version 2. The following fields are now available: frequency, image, is referenced by, qualified attribution, qualified relation, related resource, licence, availability, checksum, coverage, identifier, image, media type, packaging format, temporal resolution.
- Revision of the I14Y Homepage: Adjusted structure with headings and revised texts, contact information added.
- IdP Kanton Bern can be used for the I14Y input area.
- Various bugfixes and UX improvements

## Release 30 Juin 2023
- I14Y Handbook: The comprehensive documentation of the I14Y functionality can now be accessed via the tile on the homepage and the main navigation.
- I14Y Chatbot: A chatbot is now available in the lab section that can answer questions about the I14Y interoperability platform and data harmonisation in Switzerland.
- A problem concerning the import of code list entries via the API has been fixed.
- First public endpoint to retrieve concepts is available.

## Release 15 June 2023
- Concepts can now be displayed and searched on the public page 
- The registration status and publication level can be set via the graphical user interface
- Versioning for concepts 
- Bugfixes

## Release 15 January 2023
- Conversion of authentication to eIAM. The accounts of existing users must be migrated. 
- Bugfixes
