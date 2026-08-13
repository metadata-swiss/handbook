---
title: Prochaine version
translationKey: next-release
slug: prochaine-version
weight: 10
type: docs
keywords: [I14Y, Plateforme d'interopérabilité I14Y, IOP, Changelog, Releases, Versions, Développement logiciel]
draft: true
---

La prochaine version d'I14Y est prévue pour le début de soirée du 12 août 2026. Elle comprend les adaptations et extensions décrites ci-dessous. Les organisations partenaires d'I14Y disposant de l'accès approprié peuvent tester immédiatement la version mise à jour sur l'[environnement de recette d'I14Y](https://input.i14y-a.admin.ch). Veuillez contacter l'Unité d'interopérabilité si vous n'avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de mise en production peut être repoussée à court terme en cas de problème. Il est possible que certaines fonctionnalités soient retirées de cette version et activées ultérieurement. Pour toute question ou tout problème lié à cette version, veuillez contacter le Centre de compétences Gestion des données ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

{{<alert title="Remarque sur la publication Open Source" color="warning">}}
La publication de notre base de code en Open Source a été reportée à une date ultérieure. Elle devrait avoir lieu fin août.
{{< /alert >}}

**Saisie de structures de données :** Jusqu'à présent, les structures de données devaient être créées en externe puis téléchargées sur I14Y. Désormais, des structures simples (une classe avec des attributs) peuvent être saisies directement dans l'interface I14Y.

**Meilleure indication des concepts obsolètes :** Normalement, les concepts sont versionnés lorsqu’ils sont modifiés. Il est cependant possible qu’un concept soit remplacé par un autre. Dans ce cas, le statut du concept précédent est défini comme « remplacé ». Désormais, le concept actuellement valide peut documenter quels autres concepts il a remplacés. Cette information apparaît dans la section « Lignée » de l’entrée.

**Possibilités d'exportation étendues :** Les exports JSON sont désormais disponibles pour toutes les ressources. Cela inclut également les descriptions d’interfaces, les tables de correspondance et les services publics.

**Filtre amélioré :** Dans le filtre « Éditeur », plusieurs organisations peuvent être sélectionnées en même temps. Jusqu’à présent, qu'un seul éditeur pouvait être sélectionné.

**Plusieurs couvertures pour les jeux de données :** Dans les descriptions de jeux de données, il est possible d'enregistrer plusieurs couvertures temporelles et géographiques.

**API partenaire :** Les requêtes POST peuvent contenir plusieurs objets simultanément, tels que des entrées de codelist, des relations de tables de correspondance ou des entrées de catalogue. Les agents peuvent exporter au format RDF.

**Corrections de bugs**
