---
title: Prochaine version
translationKey: next-release
slug: prochaine-version
weight: 10
type: docs
keywords: [I14Y, Plateforme d'interopérabilité I14Y, IOP, Changelog, Releases, Versions, Développement logiciel]
draft: true
notification: false
---

La prochaine version d'I14Y est prévue pour le début de soirée du 14 octobre 2026. Elle comprend les adaptations et extensions décrites ci-dessous. Les organisations partenaires d'I14Y disposant de l'accès approprié peuvent tester immédiatement la version mise à jour sur l'[environnement de recette d'I14Y](https://input.i14y-a.admin.ch). Veuillez contacter l'Unité d'interopérabilité si vous n'avez pas encore accès à cet environnement utilisé pour les tests logiciels.

Veuillez noter que la date de mise en production peut être repoussée à court terme en cas de problème. Il est possible que certaines fonctionnalités soient retirées de cette version et activées ultérieurement. Pour toute question ou tout problème lié à cette version, veuillez contacter le Centre de compétences Gestion des données ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Traçabilité des modifications :** Jusqu'à présent, il n'était pas possible de savoir qui avait effectué quelles modifications sur les métadonnées, ni quand. Désormais, la création, la modification et la suppression d'entrées par les utilisateurs sont consignées automatiquement. Le journal enregistre les informations sur la personne concernée, le moment, la ressource touchée et le type de modification. Pour l'instant, les journaux ne peuvent être consultés que par l'équipe qui exploite la plateforme. L'affichage des journaux détaillés dans l'interface de gestion est prévu pour le futur système metadata.swiss.

**Performance de l'API partenaire :** La performance de l'API partenaire a été mesurée. Afin de réduire les temps de réponse en cas de très nombreuses requêtes parallèles, les requêtes portant sur une ressource individuelle sont désormais mises en cache pour une courte durée. L'API peut ainsi fournir des données de manière fiable et rapide, même en cas de nombre exceptionnellement élevé de requêtes simultanées.

**Filtre par autres organisations concernées :** Jusqu'à présent, il n'était possible de filtrer sur I14Y que par l'organisation qui publie un jeu de données. Il est désormais également possible de filtrer par les organisations ayant un autre rôle en lien avec le jeu de données.

**Corrections de bugs et optimisations**
