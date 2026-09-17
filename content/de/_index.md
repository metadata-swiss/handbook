---
title: Metadatenkatalog für die Schweiz
slug: willkommen
translationKey: welcome
description: 'Die Interoperabilitätsplattform I14Y ist das zentrale Verzeichnis der Daten, elektronischen Schnittstellen und Behördenleistungen in der Schweiz. Die Plattform stellt zudem Werkzeuge zur Verfügung, um die Mehrfachnutzung von Daten zu fördern. Dies entlastet Unternehmen, Bürgerinnen und Bürger sowie die Behörden.'
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Einleitung, Interoperabilität, Mehrfachnutzung, Schweiz, Datensatz, elektronische Schnittstelle, elektronische Schnittstelle, API, Once-Only-Prinzip, Sekundärnutzung von Daten, Harmonisierung, Standardisierung]
weight: 0
type: docs
---

![Szene aus dem Erklärvideo zur Interoperabilitätsplattform I14Y](/img/i14y-film_55.png)

{{<alert title="Wichtiger Hinweis zur I14Y-API" color="warning">}}

Am 8. Juli 2026 wird ein _Breaking Change_ für Konzepte und Behördenleistungen auf der I14Y-API produktiv geschaltet: Das Feld `identifier` wird entfernt und durch `identifiers` ersetzt. Bitte prüfen Sie betroffene Integrationen rechtzeitig. Details finden Sie direkt im Beitrag [Breaking Change auf der I14Y-API](/de/news/#breaking-change-auf-der-i14y-api).

{{</alert>}}

Welche Daten sind verfügbar? Und wie lassen sie sich abrufen? Die Interoperabilitätsplattform I14Y ist das zentrale Verzeichnis der Daten, elektronischen Schnittstellen und elektronischen Behördenleistungen der öffentlichen Verwaltungen in der Schweiz. Die Plattform macht Daten auffindbar. Und sie zeigt auf, wie darauf zugegriffen werden kann.  

I14Y dokumentiert, ob die betreffenden Daten frei oder eingeschränkt verfügbar sind, ob sie einem Standard entsprechen, wer den Datensatz verantwortet, wie regelmässig die Daten aktualisiert werden und wie ihre Qualität einzuschätzen ist. Die Plattform hilft den Kontext eines Datensatzes zu verstehen. 

Auf I14Y sind ausschliesslich Metadaten zu finden; die eigentlichen Daten verbleiben bei den zuständigen Stellen. I14Y fördert den effizienten Datenaustausch innerhalb der öffentlichen Verwaltungen wie auch zwischen den Behörden, den Unternehmen sowie den Bürgerinnen und Bürgern. 

Behörden und staatsnahe Unternehmen können die Plattform als Werkzeug nutzen, um ein Inventar ihrer Datensätze zu erstellen. Gleichzeitig dient I14Y als Hilfsmittel, um die Daten zu harmonisieren, sodass diese mehrfach genutzt werden können. Damit können redundante Datenerhebungen vermieden werden -- wie es der Bund mit dem _Once-Only-Prinzip_ vorsieht. 

{{<alert title="Was ist das <i>Once-Only-Prinzip</i>?" color="info">}}

Bislang mussten Bürgerinnen und Bürger sowie Unternehmen ihre Informationen oftmals mehrfach dem Staat melden. Mit dem [Programm Nationale Datenbewirtschaftung](https://www.bfs.admin.ch/bfs/de/home/nadb/nadb.html) hat der Bund Massnahmen evaluiert, um diese Doppelspurigkeiten zu vermeiden. Dadurch werden die Bürgerinnen und Bürger sowie die Unternehmen entlastet. Und der Staat kann seine Leistungen effizienter erbringen. 

```mermaid
flowchart TD
    subgraph titel[" "]
        
    subgraph aktuell1[ ]
            B(fa:fa-user Einwohnerin/ \nEinwohner)
            B-->|meldet|C(fa:fa-building \nAmt 1)
            B-->|meldet|D(fa:fa-building \nAmt 2)
            B-->|meldet|E(fa:fa-building \nAmt 3)
        end
    
        subgraph ziel1[ ]
            BB(fa:fa-user Einwohnerin/ \nEinwohner)
            BB-->|meldet|CC(fa:fa-table \nAmt 1)
            CC-->DD(fa:fa-building \nAmt 2)
            CC-->EE(fa:fa-building \nAmt 3)
        end
    end
    
    style B fill: #Bfe2ab
    style BB fill: #Bfe2ab
    style C fill: #Ff987a
    style CC fill: #Ff987a
    style D fill: #Ff987a
    style DD fill: #Ff987a
    style E fill: #Ff987a
    style EE fill: #Ff987a
```

Damit das _Once-Only-Prinzip_ Realität wird, müssen die verschiedenen Verwaltungseinheiten Daten direkt austauschen können. Voraussetzung dafür ist, dass eine rechtliche Grundlage besteht und dass ein Austausch insbesondere aus der Perspektive des Datenschutzes zulässig ist. Zudem muss geklärt werden, ob und wie lange Daten für eine mögliche Mehrfachnutzung auf Vorrat gespeichert werden dürfen. Einzelne Kantone haben die Mehrfachnutzung von Daten bereits gesetzlich festgeschrieben.  

{{</alert>}}

Dieses Handbuch bietet einen Überblick über die Interoperabilitätsplattform I14Y und erläutert ihre wichtigsten Funktionen. Es beschreibt die [Gouvernanz](/de/gouvernanz/), die [Publikation von Metadaten](/de/publikation/) und den [Abruf von Metadaten](/de/metadaten_abrufen/). Zudem  beantwortet es Fragen zum [Betrieb der Plattform](/de/plattform/). Ergänzend finden sich ein [Glossar](/de/glossar/) und weiterführende Informationen im [Anhang](/de/anhang/).
