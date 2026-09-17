---
title: Modèle d'information
slug: modele-information
translationKey: informationmodel
weight: 30
type: docs
keywords: [I14Y, plateforme d'interopérabilité I14Y, modèle de données, modèle d'information, catalogue, CATD, structure, concept]
---
 
La plateforme d'interopérabilité I14Y recense des jeux de données, des interfaces électroniques (API), des éléments de données ainsi que les prestations des autorités. Il existe deux moyens de consulter les métadonnées: via le catalogue, qui donne accès aux jeux de données, aux interfaces électroniques (API) et aux prestations administratives; via les descriptions des concepts, sous «Concepts». 

```mermaid 
    flowchart TD
        catalog(Catalogue)
        publicservice(Prestations administratives)
        dataservice(Interfaces électroniques)
        dataset(Jeux de données)

        distribution(Distribution)
        concept(Concepts)
        

        catalog---|contient|publicservice
        catalog---|contient|dataservice
        catalog---|contient|dataset

        dataset---|a une|distribution
        dataset---|référence \nvia une structure/un élément de donnée|concept

        dataservice---|fournit des données à|dataset

    style catalog fill:#Ff987a
    style catalog stroke:black
    style concept fill:#Ff987a
    style concept stroke:black

    style publicservice fill:#6CC8FF
    style publicservice stroke:black
    style dataservice fill:#6CC8FF
    style dataservice stroke:black
    style dataset fill:#6CC8FF
    style dataset stroke:black

    style distribution fill:#6CC8FF
    style distribution stroke:black
```

Ce graphique présente schématiquement les différentes parties de la plateforme. Un descriptif complet est disponible dans le [modèle d'information de l'IOP I14Y](/img/i14y_informationsmodell.png).

La plateforme exploite différents modèles d'information pour la gestion des offres de données. Le _data catalog vocabulary (DCAT)_ (profil suisse) est ainsi utilisé pour les jeux de données et les API, le _core public service vocabulary (CPSV)_ pour les prestations administratives. 

## Jeux de données

On entend par jeu de données un groupe d'éléments de données au contenu connexe réunis dans une structure homogène. Les jeux de données se présentent sous différentes formes et différents formats: fichier CSV, base de données, partie d'un enregistrement dans un système décentralisé (blockchain), etc. 

Ils peuvent être exportés sous différents formats (_distributions_), qui ne contiennent pas nécessairement les données dans leur entier. Un jeu de données peut par ailleurs constituer la base d'une interface électronique (API) permettant d'accéder à des informations spécifiques. 

Les jeux de données peuvent être décrits en détail sur la plateforme d'interopérabilité I14Y: outre l'entrée du catalogue, qui contient les informations fondamentales telles que le titre, la description et l'organisation émettrice, des informations sur la structure peuvent y être enregistrées. Une structure contient généralement plusieurs éléments de données. Chacun d'entre eux est associé à un concept qui décrit le contenu. Un concept – ou variable (définie) ou attribut – désigne la plus petite unité d'un jeu de données. 

```mermaid
    flowchart TD
        dataset1(Jeu de données)
        structure1(structure)
        dataelement1(élément de donnée)
        concept1(concept)
        codelist(liste de codes)
        numeric(nombre)
        string(chaîne de caractères)
        date(date)

        dataset1---|a une|structure1
        structure1---|contient un|dataelement1
        dataelement1---|est associé à un|concept1
        concept1---|est une|codelist
        concept1---|est un|numeric
        concept1---|est une|string
        concept1---|est une|date

    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black

    style dataelement1 fill:#Fbb54e
    style dataelement1 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black

    style codelist stroke:#Ff8076
    style numeric stroke:#Ff8076
    style string stroke:#Ff8076
    style date stroke:#Ff8076
```

Plusieurs jeux de données différents peuvent avoir la même structure. Les concepts, eux, peuvent venir s'insérer dans différentes structures. 

```mermaid
    flowchart TD
        dataset1(Jeu de données 1)
        dataset2(Jeu de données 2)
        dataset3(Jeu de données 3)
        structure1(Structure 1)
        structure2(Structure 2)
        dataelement11(Élément de donnée 1)
        dataelement12(Élément de donnée 2)
        dataelement13(Élément de donnée 3)
        dataelement21(Élément de donnée 1)
        dataelement22(Élément de donnée 2)
        dataelement23(Élément de donnée 3)
        concept1(Concept 1)
        concept2(Concept 2)
        concept3(Concept 3)
        concept4(Concept 4)

        dataset1---structure1
        structure1---dataelement11
        structure1---dataelement12
        structure1---dataelement13

        dataset2---structure2
        dataset3---structure2
        structure2---dataelement21 
        structure2---dataelement22 
        structure2---dataelement23 

        dataelement11---concept1
        dataelement12---concept2
        dataelement13---concept2
        dataelement21---concept2
        dataelement22---concept3
        dataelement23---concept4


    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black
    style dataset2 fill:#6CC8FF
    style dataset2 stroke:black
    style dataset3 fill:#6CC8FF
    style dataset3 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black
    style structure2 fill:#Bfe2ab
    style structure2 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black
    style concept2 fill:#Ff8076
    style concept2 stroke:black
    style concept3 fill:#Ff8076
    style concept3 stroke:black
    style concept4 fill:#Ff8076
    style concept4 stroke:black

    style dataelement11 fill:#Fbb54e
    style dataelement11 stroke:black
    style dataelement12 fill:#Fbb54e
    style dataelement12 stroke:black
    style dataelement13 fill:#Fbb54e
    style dataelement13 stroke:black

    style dataelement21 fill:#Fbb54e
    style dataelement21 stroke:black
    style dataelement22 fill:#Fbb54e
    style dataelement22 stroke:black
    style dataelement23 fill:#Fbb54e
    style dataelement23 stroke:black
```

Prenons l'exemple d'une clinique vétérinaire. Son jeu de données contient des informations sur les chiens ayant bénéficié d'un traitement (nom, date de naissance, race, numéro de la puce électronique, nom et adresse du propriétaire). Chacune de ces informations est un élément de donnée auquel est associé un concept (attribut): le concept associé au nom du chien est une chaîne de caractères, celui associé à sa date de naissance une date, celui associé à la race une liste de code. Tous ces attributs peuvent bien entendu être utilisés dans d'autres jeux de données: dans des jeux de données connexes, p. ex. la base de données d'un vétérinaire ayant son propre cabinet, mais aussi dans des jeux de données complètement différents (pour le cas des dates de naissance ou des adresses). 

```mermaid
    flowchart TD
        dataset1(Jeu de données \nCabinet vétérinaire 1)
        dataset2(Jeu de données \nCabinet vétérinaire 2)
        dataset3(Jeu de données \nCabinet vétérinaire 3)
        structure1(Formulaire d'admission Chien)
        structure2(Formulaire d'admission Oiseau)
        dataelement11(Race de chien)
        dataelement12(Couleur du pelage)
        dataelement13(Sexe)
        dataelement21(Sexe)
        dataelement22(Couleur du plumage)
        dataelement23(Famille d'oiseaux)
        concept1(Race de chien \nChaîne de caractères)
        concept2(Couleur \nListe de codes)
        concept3(Sexe \nListe de codes)
        concept4(Famille d'oiseaux \nChaîne de caractères)

        dataset1---structure1
        structure1---dataelement11
        structure1---dataelement12
        structure1---dataelement13

        dataset2---structure2
        dataset3---structure2
        structure2---dataelement21 
        structure2---dataelement22 
        structure2---dataelement23 

        dataelement11---concept1
        dataelement12---concept2
        dataelement13---concept3
        dataelement21---concept3
        dataelement22---concept2
        dataelement23---concept4


    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black
    style dataset2 fill:#6CC8FF
    style dataset2 stroke:black
    style dataset3 fill:#6CC8FF
    style dataset3 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black
    style structure2 fill:#Bfe2ab
    style structure2 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black
    style concept2 fill:#Ff8076
    style concept2 stroke:black
    style concept3 fill:#Ff8076
    style concept3 stroke:black
    style concept4 fill:#Ff8076
    style concept4 stroke:black

    style dataelement11 fill:#Fbb54e
    style dataelement11 stroke:black
    style dataelement12 fill:#Fbb54e
    style dataelement12 stroke:black
    style dataelement13 fill:#Fbb54e
    style dataelement13 stroke:black

    style dataelement21 fill:#Fbb54e
    style dataelement21 stroke:black
    style dataelement22 fill:#Fbb54e
    style dataelement22 stroke:black
    style dataelement23 fill:#Fbb54e
    style dataelement23 stroke:black

```

Les jeux de données publiés sur la plateforme d'interopérabilité I14Y sont décrits au moyen du [vocabulaire de catalogage de données (DCAT)](/handbook/de/glossar). Le DCAT est un modèle standardisé permettant de décrire des catalogues de données. Il est géré par le [World Wide Web Consortium (W3C)](https://www.w3.org/), un organisme de standardisation à but non lucratif chargé de promouvoir la compatibilité des technologies Web. La plateforme utilise le profil d'application suisse du DCAT ([DCAT-AP CH 2](https://www.dcat-ap.ch/)). Le vocabulaire de catalogage DCAT indique les informations qui doivent impérativement être saisies. Il propose également d'autres possibilités de décrire le jeu de données.     

Enregistrer des informations sur un jeu de données sur la plateforme d'interopérabilité I14Y impose de remplir les exigences minimales prescrites par la norme DCAT. La plateforme I14Y propose quelques champs supplémentaires permettant d'aller au-delà de cette norme. Les informations à renseigner dans les différents champs lors de l'enregistrement d'un jeu de données sont présentées au chapitre [Publication](/handbook/de/publikation/katalog/datensammlung). 

### Structure

La structure décrit la façon dont s'organisent les contenus d'un jeu de données. Chaque structure se compose d'au moins un élément de donnée ([voir sous ](#datenelement)). Une même structure peut servir pour plusieurs jeux de données. Une structure identique est ainsi généralement utilisée pour la publication récurrente d'un registre (versionnement). 

Sur la plateforme I14Y, la description des structures se fonde en principe sur le profil suisse de la norme DCAT. 

### Élément de donnée

L'élément de donnée – également appelé attribut, variable (définie) ou «colonne» – est la plus petite unité descriptive d'un jeu de données. Il contient les valeurs à proprement dit (p. ex. numéros AVS, nombre de logements vacants, mesures de la température de l'eau). Chaque élément de donnée référence un concept. 

### Concept

Le concept décrit les informations contenues dans l'élément de donnée de façon claire et exhaustive. Il peut s'agir d'un nombre, d'une chaîne de caractères, d'une date ou d'une liste de codes avec des valeurs prédéfinies. 

Sur la plateforme d'interopérabilité I14Y, la description des concepts applique la norme [ISO 11179-1:2023](https://www.iso.org/standard/78914.html). Elle doit notamment spécifier le type du concept et doit contenir d'autres indications, p. ex. la longueur ou les valeurs minimales et maximales admissibles. Le chapitre [Publication](/handbook/de/publikation/konzepte) explique en détail comment décrire un concept. 

## Interface électronique (API)

Une interface électronique (en anglais _application programm interface (API)_) permet à des machines d'extraire certaines informations d'un jeu de données. Les API permettent à des systèmes isolés de partager des informations efficacement et de manière standardisée. Les développeurs doivent connaître ces interfaces pour concevoir des logiciels capables d'utiliser les ressources de systèmes tiers. La plateforme I14Y est un répertoire centralisé où les API peuvent être décrites. 

En plus du titre et de la description, il est nécessaire d'indiquer un point de terminaison auquel une requête peut être envoyée, ou un lien fournissant l'emplacement d'une ressource (URL). Dans la mesure du possible, on renverra également au jeu de données sur lequel l'API repose.

Les API sont décrites sur la plateforme d'interopérabilité au moyen du vocabulaire de catalogage DCAT. Certains champs, facultatifs dans la norme, sont contraignants sur la plateforme. La description est ainsi optionnelle pour le catalogage d'une API selon la norme DCAT, mais obligatoire sur la plateforme I14Y. Tous les champs obligatoires dans la norme le sont aussi sur la plateforme. 

Le chapitre 
[Publication](/handbook/de/publikation/katalog/api) explique en détail comment décrire les API. 

## Prestations électroniques des autorités

La plateforme d'interopérabilité permet également de décrire les prestations électroniques des autorités. Cela permet de savoir quelles applications mobiles ou Web peuvent être utilisées pour telle ou telle tâche, ou encore comment accéder à une application donnée et quelle organisation en assume la gestion. Le répertoire centralisé vise à faciliter la recherche de ces prestations. 

La description des prestations administratives électroniques repose sur l'utilisation du _core public service vocabulary_, un vocabulaire développé par l'Union européenne. Sa structure et ses spécificités sont décrites sur la plateforme d'interopérabilité [Joinup](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/core-public-service-vocabulary/releases) de la Commission européenne. Ce modèle de données réutilisable et extensible comprend des champs qui doivent être impérativement renseignés. Chaque prestation administrative se voit ainsi affecter un certain nombre de canaux, une adresse Internet ou un numéro de téléphone.

Le chapitre [Publication](/handbook/de/publikation/katalog/publicservice/) décrit en détail comment saisir les informations sur les prestations administratives sur la plateforme d'interopérabilité I14Y.
