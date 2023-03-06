# Argent Bank - Application Web

Ce projet consiste à développer une application web pour Argent Bank, une nouvelle banque qui démarre et cherche à percer dans le secteur bancaire. Le projet se divise en deux phases, la première étant l'authentification des utilisateurs.

## Phase 1: Authentification des utilisateurs

### Objectifs

- Créer une application web complète et responsive avec React.
- Utiliser Redux pour gérer l'état global de l'application.
- Implémenter les fonctionnalités suivantes :
    - L'utilisateur peut visiter la page d'accueil.
    - L'utilisateur peut se connecter au système.
    - L'utilisateur peut se déconnecter du système.
    - L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès.
    - L'utilisateur peut modifier son profil et conserver les données dans la base de données.

### Design

Le design de la page d'accueil, de la page de connexion et de la page de profil est fourni sous forme de fichiers HTML statiques et CSS dans le dossier "designs" du projet.

### API

Les détails des fonctionnalités à implémenter sont décrits dans les modèles de GitHub Issues disponibles dans les github issues du projet.

Voici le lien : https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE

## Phase 2: Transactions

La deuxième phase du projet consiste à spécifier les endpoints d'API nécessaires pour les transactions. Les fonctionnalités à implémenter sont les suivantes :

- Visualiser toutes les transactions pour le mois en cours.
- Visualiser les détails d'une transaction dans une autre vue.
- Ajouter, modifier ou supprimer des informations sur une transaction.

Nous sommes encore en phase de conception pour cette phase. Nous vous demandons de nous fournir un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger.

### Spécifications de l'API

Pour chaque endpoint de l'API, il faut spécifier les éléments suivants :

- La méthode HTTP (ex. : GET, POST, etc.).
- La route (ex. : /store/inventory).
- La description de ce à quoi correspond l'endpoint (ex. : Retour de l'inventaire des animaux de compagnie).
- Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

## Comment exécuter l'application

Pour exécuter l'application en local, suivez ces étapes :

### Pour le frontend
1. Clonez ce dépôt Git https://github.com/Marcoguzman211/Marco_Guzman_13_012023.
2. Installez les dépendances avec la commande `npm install`.
3. Exécutez l'application avec la commande `npm start`.

L'application sera accessible à l'adresse `http://localhost:3000`.

### Pour le backend
- Suivez les instructions du dépôt Git de l'API.

## Conclusion

Ce projet est une excellente opportunité pour aider une nouvelle banque à se lancer dans le secteur bancaire. La première phase consiste à développer une application web pour l'authentification des utilisateurs, suivie de la spécification des endpoints d'API nécessaires pour les transactions dans la deuxième phase. Nous espérons que vous apprécierez travailler sur ce projet et nous sommes impatients de voir le
