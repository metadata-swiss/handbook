---
title: Glossaire
slug: glossaire
translationKey: glossary
weight: 70
type: docs
---

{{<table_of_contents>}}
<!-- Leerzeile erzeugt Abstand -->

&nbsp;

Le glossaire I14Y contient tous les termes clés nécessaires à la compréhension et à l'utilisation de la plateforme d'interopérabilité. Les termes qui  ont une entrée dans la base de données terminologique TERMDAT de l'administration fédérale sont liés .

## Application
Logiciel permettant d’exécuter certaines fonctions de traitement, développé pour une utilisation spécifique. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/70368)

## Catalogue de données
Organised inventory of data assets in an organisation. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/64371)

## Catalogue de métadonnées
Inventaire détaillé des recueils de données d’une organisation listés dans un répertoire numérique. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/71450)

## Concept de l’élément de données (concept)
Le concept décrit les informations contenues dans l’élément de donnée de façon claire et exhaustive. Il peut s’agir d’un nombre, d’une chaîne de caractères, d’une date ou d’une liste de codes comprenant des valeurs prédéfinies. La norme ISO 11179-1:2023 est utilisée pour établir des définitions sur la plateforme I14Y. Le chapitre [Konzepte erfassen](handbook/de/publikation/konzepte/) (actuellement disponible en allemand uniquement) décrit comment procéder étape par étape . 

## Core Public Service Vocabulary Application Profile (CPSV-AP)
Le [Core Public Service Vocabulary Application Profile](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile/about) (CPSV-AP) est un modèle de données qui décrit les services publics de manière structurée et lisible par machine en normalisant la sémantique.

## Core vocabularies (vocabulaires de base)
Les vocabulaires de base sont des modèles de données simplifiés, réutilisables et extensibles qui capturent les caractéristiques fondamentales d’une entité, telle qu’une personne ou une organisation publique, d’une manière neutre par rapport au contexte. 
Exemples:

• [EU Core Vocabularies](https://interoperable-europe.ec.europa.eu/collection/semic-support-centre/core-vocabularies) 

• [Dublin Core Metadata](https://www.dublincore.org/)

## Cycle de vie des données
Le cycle de vie des données décrit les différentes phases par lesquelles passent les données, de leur création à leur suppression. Les phases typiques sont la collecte, le stockage, l’utilisation, la communication, l’archivage et la suppression. Chaque phase nécessite des mesures techniques, organisationnelles et juridiques spécifiques, notamment en ce qui concerne la protection des données, la qualité et la sécurité.

## Data Catalog Vocabulary (DCAT) 
Le profil d’application _DCAT_ est un vocabulaire standardisé permettant de décrire les recueils de données et les services qui y sont liés. Il permet de structurer les informations de manière uniforme, ce qui facilite la recherche et améliore la lisibilité ainsi que l’archivage des données. Ce vocabulaire simplifie par ailleurs l’échange de données sur Internet. Le profil DCAT est basé sur le Resource Description Framework (RDF). Sa maintenance est assurée par le World Wide Web Consortium (W3C). De plus amples informations sont disponibles sur [W3.org](http://www.w3.org/TR/vocab-dcat).   

La norme peut être adaptée à des profils d’application spécifiques. Le profil d’application suisse [DCAT-AP CH](https://www.dcat-ap.ch/) se base sur le profil de l’Union européenne et tient compte des particularités des espaces de données suisses. Il est développé par le groupe spécialisé «Open Gouvernement Data» de l’organe de normalisation [eCH](/handbook/fr/glossaire/#ech).

Le vocabulaire DCAT s’articule autour de classes et de propriétés. Les _classes_ décrivent des concepts de niveau supérieur tels que des organisations, des personnes, des recueils de données ou des sites Web. Chaque classe possède des propriétés qui fournissent des détails supplémentaires, tels que des titres, des mots-clés ou des adresses Internet.

Certains termes peuvent être des classes ou des éléments. Le DCAT distingue les _classes et les propriétés_ par la manière dont elles sont écrites: une classe commence par une majuscule, une propriété par une minuscule. La classe de l’éditeur s’écrit donc `dcat:Publisher`. En revanche, pour indiquer qui a publié une entrée dans un recueil de données, on utilise les minuscules: `dcat:publisher`.

Le DCAT compte quatre classes principales: la classe _Catalogue_ (`dcat:Catalog`) décrit un recueil de données qui peut contenir des jeux de données ou des interfaces électroniques (API). La classe _Dataset_ (`dcat:Dataset`) contient des informations sur les différents jeux de données et la classe _Data Service_ (`dcat:Dataservice`) sur les interfaces électroniques (APIs). Distribution ( `dcat:Distribution`) décrit une représentation spécifique du jeu de données, par exemple sous la forme d’une exportation dans un fichier CSV.

La plateforme I14Y publiant également les prestations des autorités (public services), par conséquence la classe _Public Service_ (`dcat:Publicservice`) a été ajoutée au DCAT. Pour ces entrées, on utilise le profil [Core Public Service Vocabulary Application](https://interoperable-europe.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile) de l'Union européenne.

## Data custodian (consignataire des données)
Les data custodians sont responsables de la tenue et de la transmission sécurisées des données, qu’il met à la disposition de tous les utilisateurs légitimés dans le respect des exigences définies conjointement. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502924)

## Data owner (propriétaire des données)
Personne privée ou organe fédéral qui, seul ou avec d’autres, détermine les finalités et les moyens du traitement de données personnelles. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502925)

## Data producer (producteur de données)
Personne ou système ayant reçu du propriétaire des données l’autorisation de créer, de modifier ou de supprimer des données pour le service responsable de leur traitement. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502926)

## Data provider (fournisseur de données)
Organisation qui fournit des données à l'intérieur d'un ou plusieurs espaces de données.
[Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/503084)

## Data repository (référentiel de données)
Un référentiel est un lieu de stockage de données, de programmes ou de métadonnées structurés auquel peuvent accéder plusieurs utilisateurs ou systèmes.

## Data steward (administrateur des données)
Dans le modèle de l’administration des données, les administrateurs des données coordonnent et encouragent l’utilisation multiple des données au sein d’un office fédéral. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502921)

## Distribution DCAT
Matérialisation physique ou représentation d’un jeu de données dans un format spécifique. Une distribution (↔ ressource) est une représentation particulière d’un jeu de données (lien vers les données réelles).

## Données administratives
Les données administratives sont des informations collectées, établies, gérées, traitées et sauvegardées par les pouvoirs publics dans le cadre de leur mandat légal. Elles peuvent être structurées ou non structurées. Les services administratifs peuvent inventorier leurs données sur la plateforme I14Y. Ils peuvent rendre publiques les données harmonisées ou standardisées. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/387376)

## Données de base
Les données de base sont des informations dont l’administration publique a impérativement besoin. Elles décrivent des personnes, des entreprises, mais aussi divers objets tels que des bâtiments ou des véhicules. Un catalogue exhaustif des caractéristiques (attributs) doit être disponible pour chacun de ces objets. Les données de référence sont des données relatives à des objets: leur volume ne varie pratiquement pas au fil du temps. Elles-mêmes ne changent par ailleurs que rarement. Les codes des aéroports ou des pays constituent un type particulier de données de référence, servant à la classification. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/379368)

## Données de référence
Listes de valeurs ou répertoires prédéfinis utilisés pour la description et la catégorisation. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502771)

## Données en libre accès (open data) 
Les données en libre accès peuvent être utilisées, traitées, analysées et transmises librement, sans restrictions légales, financières ou techniques particulières. Sur le plan légal, elles doivent pouvoir être utilisées et traitées gratuitement. Du point de vue technique, elles doivent pouvoir être traitées par ordinateur. La publication de données en tant que données ouvertes doit garantir le respect des dispositions régissant la protection des données, la protection des informations et le droit d'auteur, ainsi que les secrets commerciaux. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/387377)

## Données personnelles
Informations concernant une personne physique identifiée ou identifiable. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/52451)

## Données statistiques
Les données statistiques sont toutes les données qui ont été collectées ou transmises à des fins statistiques, notamment sur la base de la loi fédérale sur la statistique, et qui sont donc soumises au secret statistique.

## eCH 
L’association à but non lucratif eCH promeut, développe et adopte des normes dans le domaine de la cyberadministration. Les nombreux groupes de travail d’eCH réunissent aussi bien des représentants de la Confédération et des cantons que de l’économie privée et de la science. C’est le principal organe de normalisation dans le domaine de la cyberadministration en Suisse. De plus amples informations ainsi que les documents relatifs aux normes adoptées sont disponibles sur le site [ech.ch](https://ech.ch).

## Élément de données
L’élément de données est la plus petite unité descriptive d’un jeu de données. Il est aussi appelé attribut, variable (définie) ou colonne. L’élément de données contient les valeurs à proprement parler (p. ex. numéros AVS, nombre de logements vacants, mesures de la température de l’eau). Chaque élément de données renvoie à une concept. 

## Enterprise identity management (EIAM) 
Des systèmes de gestion des identités d’entreprise (EIAM) sont utilisés pour gérer et protéger les identités et les droits d’accès au sein d’une entreprise ou d’une organisation. Ils garantissent que seules les personnes prévues peuvent utiliser une plateforme Internet ou une application donnée. Ce faisant, ils définissent également qui dispose des droits de lecture, d’écriture et d’administration. La plateforme I14Y utilise le système EIAM de l’administration fédérale. D’autres informations sont disponibles à la rubrique [Administration des comptes utilisateurs](/handbook/fr/plateforme/administration-comptes/). 

## Environnement de test
L’environnement de test (également appelé test de validation utilisateur ou User Acceptance Testing, UAT,) permet de tester les nouveaux logiciels dans des conditions proches de la réalité avant leur mise en production. Dans le cas de la plateforme I14Y, les nouvelles fonctionnalités sont testées avant l’implémentation.

## European Interoperability Framework (EIF)
[Le cadre européen d’interopérabilité](https://joinup.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail), a pour objectif de faciliter l’interaction transfrontalière et transsectorielle entre les administrations européennes, de soutenir la coopération et de permettre la fourniture de services électroniques.

## Format des données
Structure qu’un programme d'application impose aux données. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502964)

## Geocat 
[Geocat](https://geocat.ch) est un catalogue de métadonnées concernant les géoinformations de la Suisse et de la Principauté de Liechtenstein. Les offices fédéraux, les cantons, les communes, les instituts de recherche et les entreprises y saisissent des informations sur leurs géodonnées, c’est-à-dire sur des jeux de données en lien avec la géographie, des cartes et des photos aériennes. Le service est géré par l’Office fédéral de topographie (swisstopo). Vous trouverez de plus amples informations à la rubrique dédiée aux différentes plateformes [La plateforme idéale pour chaque application](/handbook/fr/introduction/plateformes/).

## Géodonnées de base
Les géodonnées de base se fondent sur un acte législatif fédéral, cantonal ou communal: p. ex. la mensuration officielle, un plan de zone de construction ou l’inventaire des haut-marais. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/71443)

## Géodonnées
Les géodonnées sont des données à référence spatiale. Elles décrivent l’étendue et les propriétés (situation, nature, utilisation, cadre légal) de certains espaces et objets. Les cartes routières numériques et les planificateurs d’itinéraires sont des exemples de géodonnées largement utilisées.

## Gestion des données
Pratique consistant à recueillir, conserver et utiliser des données de manière sécurisée, efficace et rentable. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502636)

## Gestion nationale des données (NaDB)
Le programme de gestion nationale des données (programme NaDB) vise à rendre la gestion des données des pouvoirs publics plus simple et plus efficace grâce à l’utilisation multiple des données. Il a été instauré par le Conseil fédéral et lancé en octobre 2019. Les départements de la Confédération, la Chancellerie fédérale, tous les domaines du système statistique suisse, certains représentants des cantons, les partenaires sociaux et d’autres organisations et associations privées participent au programme NaDB. La responsabilité de sa mise en œuvre incombe à l’Office fédéral de la statistique (OFS). Sa pièce maîtresse sur le plan technique est la plateforme I14Y. Vous trouverez plus d’informations au sujet du programme sont disponibles sous [ce lien](https://www.bfs.admin.ch/bfs/en/home/nadb/nadb.html). [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/481315)

## Gouvernance des données
Cadre de contrôle qualité visant à gérer, exploiter, optimiser, évaluer, protéger, contrôler et entretenir les données des entreprises. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/387641)

## Graph database
Une base de données orientée graphe a pour objectif unique la création et la manipulation de graphes. Les graphes contiennent des nœuds, des arêtes et des propriétés tous utilisés pour représenter et stocker les données d’une manière pour laquelle les bases de données relationnelles ne sont pas équipées.

## Harmonisation des données
L’harmonisation des données est le processus par lequel les données provenant de différentes sources sont converties en une structure, une terminologie et une signification uniformes, de sorte qu’elles soient cohérentes, comparables et utilisables ensemble. L’objectif est de surmonter les différences sémantiques et structurelles afin d’améliorer l’interopérabilité et la qualité des données.

## Harvesting
Le “harvesting” refers to the automated collection of data.The harvesting module enables the automatic importing of catalogues of datasets made accessible by other authorities. 

## Identifiant
Un identifiant est un attribut défini ou une combinaison d’attributs permettant d’identifier des éléments dans les données. Un identifiant doit être univoque au sein d’un jeu de données, c’est-à-dire qu’il doit permettre de retracer sans ambiguïté l’élément identifié et qu’il ne peut être utilisé qu’une seule fois.

## Interface de programmation d’applications (API)
Une API permet à différents systèmes et applications de communiquer entre eux, même si les systèmes ne sont pas directement liés entre eux. APIs permettent par exemple de consulter les informations d’un recueil de données sans avoir à télécharger l’ensemble de celui-ci. Elles sont fréquemment utilisées dans le développement de logiciels modernes pour relier des sous-systèmes individuels ou pour obtenir des données d’un autre système. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/500882)

## Interopérabilité
L’interopérabilité est la capacité de systèmes indépendants et hétérogènes à fonctionner ensemble de la manière la plus transparente possible. Ces systèmes doivent pouvoir échanger des informations de manière efficace, sans qu’il soit nécessaire de conclure des accords individuels. Le cadre d’interopérabilité européen (EIF pour European Interoperability Framework) distingue quatre niveaux: l’interopérabilité juridique garantit l’existence d’une base légale suffisante pour la coopération. L’interopérabilité organisationnelle décrit la manière dont les processus commerciaux sont coordonnés entre eux. L’interopérabilité sémantique doit permettre d’éviter, dans la mesure du possible, qu’il faille modifier manuellement le format des  données lors de l’échange d’informations. L’interopérabilité technique décrit l’ensemble des aspects techniques des échanges d’informations. Elle contient par exemple les spécifications des interfaces et les protocoles de transmission. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/71434)

## Jeu de données
Un jeu de données est un ensemble structuré de données qui se rapportent à un thème ou à une question spécifique et qui sont organisées sous une forme définie. Sur la plateforme d’interopérabilité I14Y, un jeu de données est décrit selon la norme DCAT-CH et contient au moins une distribution ou peut être obtenu via une API. Pour plus d’informations sur la structure d’un jeu de données sur la plateforme I14Y, voir la section [Modèle d’information](/handbook/fr/gouvernance/modele-information/). [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/501320)

## Linked data (données liées)  
Les données liées sont des données qui peuvent être directement reliées entre elles grâce à un identifiant (_Uniform Resource Identifier_). Les données liées sont des données qui peuvent être directement reliées entre elles grâce à un identifiant (Uniform Resource Identifier). Dans la mesure où les données sont librement disponibles, on parle également de Linked Open Data. Les données peuvent être stockées en différents endroits   et consultées à l’aide d’un protocole de transfert Web normal. Leur structure étant standardisée, elles peuvent être utilisées comme une seule grande base de données à l’aide du langage de requête _SPARQL_. Linked Open Data est un concept développé par Tim Berners-Lee, l’inventeur du World Wide Web. L’idée est de créer un Web sémantique de données structurées pouvant être reliées entre elles, afin de faciliter la communication automatique. La plateforme LINDAS est le principal fournisseur de Linked Data dans le domaine de l’administration publique en Suisse. Vous trouverez de plus amples informations à la [rubrique LINDAS](/handbook/fr/introduction/plateformes/#lindas). [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/503121)

## Liste de codes
Une liste de codes est une liste structurée de valeurs (codes) utilisées dans un contexte donné. Elle peut être ouverte (extensible) ou fermée (non extensible) et peut être normalisée  (p. ex. ISO 3166 pour les codes pays) ou définie dans le cadre d’une organisation.

## Métadonnées de référence
Selon Eurostat, les métadonnées de référence (parfois appelées métadonnées explicatives) décrivent le contenu et la qualité des données statistiques d’un point de vue sémantique. Elles comprennent des textes explicatifs sur le contexte des données statistiques, les méthodologies de collecte et d’agrégation des données ainsi que les caractéristiques de qualité et de diffusion.

## Métadonnées
Les métadonnées sont des données qui définissent et décrivent d’autres données. Elles contiennent des informations sur la sémantique d’un recueil de données, c’est-à-dire sur sa signification, son contenu et sa qualité. Elles décrivent en outre la syntaxe (la forme et la structure) des attributs (variables) utilisés. Pour qu’elles soient saisies de manière uniforme, les données peuvent être reliées à des [nomenclatures] (#Nomenclature) et à des registres, tels que le répertoire officiel des communes, la Classification internationale type des professions (CITP) ou la Nomenclature générale des activités économiques (NOGA). Elles deviennent ainsi des métadonnées. La plateforme I14Y permet de gérer, de publier et d’échanger ces métadonnées.

## Modèle de données
Représentation schématique d’un ensemble de données et de leurs relations à l’intérieur d’une base de données. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502865)

## Nomenclature
Une nomenclature est un ensemble de désignations obligatoires pour certains domaines, issues d’un thème ou d’un champ d’application donné. Il peut s’agit par exemple d’un répertoire de communes ou d’une liste de pays. Une nomenclature comprend des codes et des parties de texte descriptives, éventuellement dans différentes langues. [Vers la définition dans TERMDAT](https://www.termdat.bk.admin.ch/entry/94036)

## Objet de données
Un objet de données est une unité logique clairement délimitée de données qui peuvent être décrites, échangées ou utilisées numériquement. Sur la plateforme I14Y, les objets de données, les jeux de données, les API et les prestations des autorités sont décrits de manière standardisée, pour que l’on puisse les trouver et les utiliser plusieurs fois.

## Ontologie
Une ontologie est un ensemble structuré de concepts, organisés dans un graphe et liés par des relations sémantiques et logiques, destiné à modéliser un ensemble de connaissances dans un domaine donné. Elle est semblable à un vocabulaire ou à un ensemble de règles garantissant une compréhension commune d’un domaine particulier. On utilise des ontologies pour échanger et réutiliser des informations ainsi que pour faciliter la communication et l’argumentation entre les personnes ou les systèmes informatiques.

## Organisation internationale de normalisation (ISO)
L’Organisation internationale de normalisation (ISO) est une association d’organismes de normalisation. Elle élabore des normes internationales dans de nombreux domaines, à l’exception de l’électrotechnique et des technologies de communication. L’ISO est une association de droit suisse. Elle a son siège à Genève. Les projets nationaux de normalisation dans le domaine de la cyberadministration sont généralement menés par l’association [→ eCH association](#ech).

## Principe once-only
Le but du principe «once-only» est que la population et les entreprises ne doivent communiquer certaines informations aux autorités qu’une seule fois et que ces informations puissent ensuite être échangées entre les offices, si cela est explicitement prévu. Le principe «once-only» doit permettre de réduire la charge de travail, aussi bien pour les citoyens et les entreprises que pour l’administration. La mise en œuvre du principe «once-only» est un objectif central du programme de gestion nationale des données (NaDB). [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/480493)

## Prestation des autorités (public service)
Séquence d'activités obligatoires ou facultatives réalisées par une autorité publique ou pour son compte, et découlant de la politique administrative. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/520805)

## Principes FAIR
Les principles FAIR postulent que les données doivent être faciles à trouver _(**F**indable)_, accessibles _(**A**ccessible)_, interopérables _(**I**nteroperable)_ et réutilisables _(**R**eusable)_. Les données doivent être faciles à trouver, tant pour les personnes que pour les systèmes informatiques. Elles doivent être accessibles via un protocole de communication standard ouvert, libre et universellement implémentable. Une licence univoque renseigne sur la manière dont les données peuvent être utilisées. Tant l’interopérabilité sémantique que l’interopérabilité syntaxique sont assurées. Les principes FAIR impliquent l’utilisation de métadonnées contextuelles précises, ainsi que de contenus et de formats respectant les grands standards internationaux et utilisant un vocabulaire informatique respectant les principes FAIR. L’application de normes communes facilite la réutilisation des données (gratuite, sous conditions ou contre paiement). [Cet article de Nature](https://www.nature.com/articles/sdata201618) donne des informations de base sur les principes FAIR.

## Protection des données
Ensemble de mesures juridiques qui protègent la personnalité et les droits fondamentaux des personnes physiques dont les données sont traitées par des particuliers ou des organes fédéraux. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/52411)

## Resource Description Framework (RDF)
Le RDF est le langage de base du web sémantique et permet de représenter les métadonnées sous forme de triplets (sujet-prédicat-objet).

## Service d’interopérabilité (IOS)
Le service d’interopérabilité IOS de l’Office fédéral de la statistique (OFS) met à disposition les instruments permettant d’harmoniser les données, de les standardiser et de les réutiliser. À cet effet, il développe et gère un outil technique: la plateforme d’interopérabilité I14Y. Le service IOS coordonne la standardisation et l’harmonisation des données pour chaque domaine thématique (énergie, santé, mobilité, agriculture, etc.). Dans ce cadre, l’OFS assume la fonction _d’administrateur des données suisses_ (Swiss Data Steward). 

## SPARQL
Langage de requête standard permettant d’extraire et de manipuler des données représentées au format RDF. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/503123)

## Standard de données
Un standard de données est une spécification de métadonnées structurelles qui décrit ou définit d’autres données [ISO111179]. Les métadonnées structurelles indiquent comment les objets composés sont assemblés. Les deux principaux types de standard de données sont les modèles de données (y compris les vocabulaires de base) et les données de référence (y compris les concepts).

## Statistical Data and Metadata EXchange (SDMX) 
Le SDMX est un projet visant à normaliser l’échange de données entre les organisations internationales et leurs pays membres. Il a été développé en grande partie par la Banque mondiale et l’Union européenne. Le projet SDMX définit aussi bien des formats de données uniformes que des normes de métadonnées et des méthodes de transfert de données. [Informations supplémentaires:](sdmx.org). La plateforme I14Y peut lire des listes de codes au format SDMX (voir [Erfassen von Konzepten (actuellement uniquement en allemand)](/handbook/de/publikation/konzepte/)).

## Structure de données
Manière de disposer les données et d’organiser les liens qui permettront de les retrouver. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/502986)

## Swagger
[Swagger](https://swagger.io/) est une collection d’outils librement disponibles pour la publication et l’utilisation d’interfaces électroniques (API). Les possibilités de documentation qu’offre la plateforme I14Y sont particulièrement appréciées: l’interface Web de Swagger permet de voir rapidement quelles sont les possibilités offertes par chaque API. Elle permet en outre de tester directement les possibilités de requête pour tous les points d’accès. De plus amples informations sont disponibles à la rubrique [Elektronische Schnittstelle (API) abrufen](/handbook/de/metadaten_abrufen/api) (actuellement uniquement en allemand).

## Triple
La plus petite structure de description des ressources du modèle RDF. Dans le modèle RDF, une déclaration est représentée par trois éléments: deux sommets reliés par une arête reflétant le sujet, le prédicat et l’objet d’une phrase. Par convention, RDF propose de représenter les triplets sous forme de graphe.

## Triplestore
Une base de données spécialement conçue pour le stockage et la récupération de données RDF. Tout comme une base de données relationnelle, un triplestore stocke des données et les récupère via un langage de requête. Mais contrairement à une base de données relationnelle, un triplestore ne stocke qu’un seul type de données: le triplet. Il n’a donc pas besoin de phase d’initialisation pour enregistrer de nouvelles données. C’est-à-dire qu’il n’a pas besoin de créer des tables comme dans une base de données relationnelle. De plus, un triplestore est optimisé pour le stockage d’un grand nombre de triplets et pour la récupération de ces triplets à l’aide du langage de requête SPARQL.

## Type de données
Le type de données classifie un élément de données. Il indique la nature des valeurs qui peuvent y figurer. Le type de données permet de s’assurer que les données sont compatibles pour le traitement et l’interprétation par un logiciel. Voici des exemples de types de données: nombres entiers (integer, en anglais), nombres à virgule flottante (floating point), valeurs booléennes (boolean) ou chaînes de caractères (string). Sur la plateforme I14Y, la définition donne le type de données ([voir la section la section relative au concept](/handbook/fr/gouvernance/informationmodel/#concept)). [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/516244)

## Uniform Resource Identifier (URI)
Les URI servent à l’identification de ressources abstraites ou physiques sur Internet. Les ressources RDF sont identifiées à l’aide d’identifiants univoques (URI). Les URI permettent de relier des déclarations provenant de différentes sources. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/70183) 

## Utilisateur de données
Personne ou organisation qui utilise les données mises à disposition dans un ou plusieurs espaces de données pour ses propres activités. [Vers la définition dans TERMDAT](https://register.ld.admin.ch/termdat/293654)

## Validation
La validation est un processus servant à déterminer si un contenu doit être repris dans un système ou une liste. Dans le cas d’un recueil de données, le format des données, l’intégrité des données ainsi que les valeurs admises et les nomenclatures sont contrôlés sur la plateforme I14Y avant la publication. La validation incombe à _l’administrateur local des données_ ou au _service d’interopérabilité_.
