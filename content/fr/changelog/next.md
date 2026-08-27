---
title: Prochaine version
translationKey: next-release
slug: prochaine-version
weight: 10
type: docs
keywords: [I14Y, Plateforme d'interopérabilité I14Y, IOP, Changelog, Releases, Versions, Développement logiciel]
draft: false
notification: true
---

La prochaine version d'I14Y est prévue pour le début de soirée du 2 septembre 2026. Elle comprend les adaptations et extensions décrites ci-dessous. Les organisations partenaires d'I14Y disposant de l'accès approprié peuvent tester immédiatement la version mise à jour sur l'[environnement de recette d'I14Y](https://input.i14y-a.admin.ch). Veuillez contacter l'Unité d'interopérabilité si vous n'avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de mise en production peut être repoussée à court terme en cas de problème. Il est possible que certaines fonctionnalités soient retirées de cette version et activées ultérieurement. Pour toute question ou tout problème lié à cette version, veuillez contacter le Centre de compétences Gestion des données ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Interaction avec LINDAS :** Lors de leur publication sur I14Y, les concepts et les jeux de données sont publiés dans le Linked Data Service (LINDAS) de la Confédération, généralement dans le graphe I14Y. Certaines métadonnées et listes de codes peuvent être copiées dans les graphes LINDAS centraux en tant que dimensions partagées. Les liens correspondants sont désormais affichés sur le site web public d'I14Y.

**Structures :** Les jeux de données possèdent une structure qui regroupe leurs différents attributs. Pour chaque attribut, il est possible d'indiquer s'il base sur une définition partagée, appelée concept. Un nouveau bouton simplifie la saisie des attributs : lorsqu'un concept approprié existe, les informations qu'il contient peuvent être importées dans l'attribut en un seul clic.

**Améliorations de la convivialité :** L'affichage des liens vers des ressources externes a été amélioré : grâce à une icône, ils sont reconnaissables au premier coup d'œil.

**Adaptation des liens vers le manuel et GitHub :** Dans le cadre du projet metadata.swiss, l'organisation GitHub `i14y-ch` a été renommée `metadata-swiss` (voir l'[article d'actualité](/handbook/fr/news/)). Avec cette version, les liens du site web d'I14Y vers GitHub et vers le manuel I14Y qui y est hébergé sont donc adaptés.

**Corrections de bugs :** Lorsqu'une organisation ne dispose pas de nom dans la langue choisie par l'utilisateur ou l'utilisatrice, son nom dans une autre langue est affiché à la place. Ce mécanisme de secours garantit qu'un nom est toujours affiché. Un bug concernant les URL des distributions dans l'export RDF a également été corrigé.
