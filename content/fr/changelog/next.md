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

La prochaine version d'I14Y est prévue pour le début de soirée du 2 décembre 2026. Elle comprend les adaptations et extensions décrites ci-dessous. Les organisations partenaires d'I14Y disposant des accès nécessaires peuvent déjà tester la version mise à jour sur l'[environnement de recette d'I14Y](https://input.i14y-a.admin.ch). Veuillez contacter l'Unité d'interopérabilité si vous n'avez pas encore accès à cet environnement utilisé pour les tests logiciels. En raison des adaptations majeures de l'infrastructure de recherche, cette version restera plus longtemps que d'habitude sur l'environnement de recette afin de permettre des tests approfondis.

Veuillez noter que la date de mise en production peut être repoussée à court terme en cas de problème. Il est possible que certaines fonctionnalités soient retirées de cette version et activées ultérieurement. Pour toute question ou tout problème lié à cette version, veuillez contacter le Centre de compétences Gestion des données ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Les thèmes UE deviennent la norme :** Jusqu'à présent, I14Y utilisait un vocabulaire thématique basé sur la norme eCH 0122 (voir [vocabulaire thématique I14Y](https://www.i14y.admin.ch/de/catalog/concepts/08da58dc-4dc8-f9cb-b6f2-7d16b3fa0cde)). Le portail opendata.swiss utilise, quant à lui, le [vocabulaire thématique de l'UE](https://www.i14y.admin.ch/de/catalog/concepts/08dbf1a0-8d10-c75b-a0b4-6a5c2873b2bc). Dans la perspective du rapprochement d'opendata.swiss et d'I14Y, l'utilisation des thèmes est désormais harmonisée : à partir de cette version, I14Y utilisera lui aussi les thèmes UE par défaut. Les thèmes I14Y existants restent utilisables. En outre, il est possible de configurer des listes de thèmes spécifiques à un domaine selon les besoins. Le Centre de compétences Gestion des données se tient volontiers à votre disposition à ce sujet. Adaptations concrètes :
- Les entrées existantes ont été enrichies avec des thèmes UE correspondants au moyen d'une table de correspondance. Les thèmes I14Y existants sont conservés.
- Les filtres utilisent désormais les thèmes UE. Si vous utilisez des liens dans des documents ou sur des sites web avec un filtre encodé, ces liens devront peut-être être adaptés.
- Tous les scripts d'extraction automatique de données exploités par I14Y ont été migrés vers les thèmes UE. Vos propres scripts devraient continuer à fonctionner ; il est toutefois recommandé de passer aux thèmes UE à l'avenir.
- Dans les exports, tous les thèmes attribués sont désormais restitués lorsque plusieurs vocabulaires contrôlés sont utilisés comme sources thématiques.

**Service de recherche dédié avec Elasticsearch :** La recherche fonctionne désormais via un service séparé utilisant Elasticsearch (au lieu de Lucene). L'ordre des résultats de recherche a été amélioré. Les champs sont désormais pondérés dans l'ordre suivant : titre/nom, identifiant, version, mots-clés, description, point de contact, personne responsable et suppléance. Un autre critère est la maturité de l'entrée : les entrées au statut Standard recommandé apparaissent en premier, suivies, dans cet ordre, des statuts Standard, Qualifié, Enregistré, Candidat, Initial, Remplacé et Retiré. Enfin, lorsque c'est pertinent, le nombre de réutilisations est également pris en compte.

**E-mail pour les organisations :** Une adresse e-mail doit désormais être renseignée pour chaque organisation. Une adresse de groupe générique est privilégiée (par exemple info@organisation.org ou team@organisation.org). Cette adresse est nécessaire pour documenter les modifications automatisées de métadonnées dans ce que l'on appelle l'audit trail (communication machine à machine).

**Modification importante de l'API partenaire (Breaking Change) :** Le point d'accès `GET /agents` de l'API partenaire a été aligné sur le nouveau modèle de données qui sera utilisé dans le projet metadata.swiss. Dans ce cadre, des noms de champs ont été modifiés. `subOrganizationOf` contient désormais exactement une organisation parente (au lieu d'une liste auparavant). L'ancien champ `subAgents`, qui contient une liste d'organisations subordonnées, est renommé en `hasSubOrganizations`.

Ancien format (simplifié) :

```json
"subAgents": […],
"subAgentOf": […]
```

Nouveau format (simplifié) :

```json
"subOrganizationOf": {…},
"hasSubOrganizations": […]
```
