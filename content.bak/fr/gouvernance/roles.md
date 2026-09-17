---
title: Rôles
slug: roles
translationKey: roles
weight: 10
type: docs
keywords: [I14Y, plateforme d'interopérabilité I14Y, interopérabilité, modèle de rôles, data steward, administrateur des données, data stewardship, administration des données, data owner, propriétaire des données, data consumer, utilisateur des données]
---

Les utilisations de la plateforme d'interopérabilité I14Y sont multiples: certaines personnes souhaitent simplement consulter des entrées, d'autres sont chargées de saisir les métadonnées, d'autres encore ont pour mission de valider les informations avant leur publication. La définition des droits d'accès et des compétences se fonde sur le [modèle de rôles relatif à l'administration de données](https://www.bfs.admin.ch/bfs/fr/home/nadb/nadb.assetdetail.14965606.html) de la Confédération. Celui-ci distingue les rôles suivants:

- Les __data owners__ (_propriétaires des données ou maîtres du fichier_) déterminent le contenu et le but d'un jeu de données. Ce sont eux qui initient sa création et qui en assument la responsabilité. 
- Les __data stewards__ (_administrateurs des données_) sont responsables des aspects techniques de la gestion des données. Ils coordonnent les travaux de standardisation et d'harmonisation des jeux de données. Ce rôle existe au sein d'une organisation (_administrateur local des données ou local data steward_) ou d'un service spécialisé (p. ex. _administrateur local des données statistiques ou data steward statistics_), comme au niveau national (_administrateur des données suisses ou swiss data steward_).
- Les __data custodians__ (_conservateurs des données_) assument des tâches techniques, notamment la gestion de bases de données.
- Les __data consumers__ (_utilisateurs des données_) consultent et éditent le cas échéant les données. 

Les personnes qui souhaitent simplement consulter des données publiques sur l'IOP I14Y n'ont pas besoin de s'y connecter. Pour consulter les entrées non publiques de son organisation, il est en revanche nécessaire d'avoir un compte utilisateur et de disposer des droits d'accès appropriés. Même chose si on souhaite saisir, éditer, valider et publier des métadonnées. Les droits d'accès sont généralement accordés à la création du compte utilisateur par les administrateurs des comptes de l'organisation ([voir sous Administration des comptes utilisateurs](/handbook/fr/gouvernance/administration-comptes)). 

Le tableau ci-dessous donne un aperçu des différents rôles. On distingue deux niveaux: celui de l'organisation considérée (office fédéral, canton, commune) et le niveau national. Si une même personne peut se voir attribuer plusieurs rôles dans les petites organisations, les rôles se répartissent généralement entre différentes personnes dans les grandes organisations. 

| Rôle | Droits |
| ---- | ---- |
| _Data consumer_ | L'accès à la plateforme d'interopérabilité I14Y est possible sans compte utilisateur. Dans ce cas, seules les métadonnées publiques sont consultables. Il n'est pas possible de saisir des métadonnées sans login. En plus des métadonnées publiques, les personnes disposant d'un compte utilisateur peuvent visualiser les entrées non publiques de leur organisation. Elles peuvent toutefois uniquement les lire, pas les éditer ni les publier. |
| _Stewardship organization viewer_ | En plus des données publiques, les _organizational viewers_ peuvent consulter les métadonnées internes de leur organisation. Ils ne peuvent toutefois pas les éditer. |
| _Submitter_ | Ces personnes saisissent les métadonnées pour le compte des _local data stewards_. Elles ne sont toutefois pas habilitées à les valider. Elles peuvent consulter les métadonnées publiques comme celles de leur organisation. |
| _Local data steward_ | Les administrateurs locaux des données veillent au sein de leur organisation à l'exhaustivité des information saisies. Ils vérifient par ailleurs que les critères formels ont bien été respectés. C'est également à eux qu'incombent l'harmonisation et la standardisation des jeux de données. Les administrateurs de données valident les informations saisies lorsque celles-ci sont correctes. Ils transmettent au service d'interopérabilité pour validation les métadonnées à ajouter à la liste des données publiques. |
| _Service d'interopérabilité_ | Rattaché à l'Office fédéral de la statistique, le service d'interopérabilité (IOS) -- l'équipe I14Y -- coordonne la standardisation et l'harmonisation des donnée à l'échelle nationale. Il développe des outils, coordonne les opérations de standardisation et d'harmonisation entre les différentes organisations et assiste les responsables locaux des données dans la modélisation des métadonnées. Ce sont les collaborateurs du service d'interopérabilité qui confirment si une offre de données sur la plateforme d'interopérabilité peut être considérée comme conforme à un standard (norme). |
| _Swiss data steward_ | L'Office fédéral de la statistique coordonne en tant que _swiss data steward_ toutes les opérations de standardisation et d'harmonisation touchant les données administratives des administrations publiques. |
{.roles}