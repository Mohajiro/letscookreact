### Let's Cook v2.0.0 - Les recettes de cuisine mondiale 🍳

## Description

**Let's Cook** est une application web moderne développée avec React, Vite, et TailwindCSS. Elle offre aux utilisateurs la possibilité de rechercher, consulter, ajouter, modifier, et supprimer des recettes culinaires, basées sur une base de données interne en format JSON.

### Objectifs pédagogiques

## Ce projet vise à :

**Approfondir l'utilisation du framework React JS avec Vite pour des performances accrues.**

   1 - Comprendre les concepts fondamentaux de React comme les hooks, les composants et le JSX.

   2 - Se familiariser avec la gestion des styles dynamiques grâce à TailwindCSS.

   3 - Construire une architecture modulaire et réutilisable pour une application web.

## Fonctionnalités principales

**Affichage dynamique des recettes :**

    - Les recettes sont chargées depuis un fichier JSON local.

    - Chaque recette est affichée sous forme de carte avec le titre, une image, et une description.

**Recherche par titre de recette :**

    - Un formulaire de recherche permet de filtrer les recettes par nom en temps réel.

**Gestion complète des recettes :**

    - Ajouter une nouvelle recette via le composant ModificationRecipes.

    - Modifier une recette existante.

    - Supprimer une recette directement depuis la liste.

**Popup détaillé pour chaque recette :**

    - Affichage des détails complets d'une recette dans un popup.

    - Fermeture du popup en cliquant hors de sa zone.

## Architecture du projet

├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── github.png
│   │   ├── instagram.png
│   │   ├── react.svg
│   │   └── user.png
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LigneRecipes.jsx
│   │   ├── ListGroup.jsx
│   │   ├── ModificationRecipes.jsx
│   │   ├── RecipePopup.jsx
│   │   └── ShowCard.jsx
│   ├── data
│   │   └── recettes.json
│   ├── index.css
│   └── main.jsx
└── vite.config.js

## Points clés de l'architecture

# Composants modulaires :

**Les fonctionnalités sont réparties entre des composants réutilisables (Header, Footer, ListGroup, etc.).**

**Le composant ModificationRecipes gère l'ajout et la modification des recettes.**

**Logique centralisée dans App.jsx :**

    - La gestion des recettes (état global, ajout, modification, suppression) est centralisée.

    - La navigation entre les vues (écran principal ou formulaire) est contrôlée via des états locaux.

**Design adaptatif :**

    - Utilisation de TailwindCSS pour un style moderne et adapté à tous les appareils.

**Popup interactif :**

    - Le composant RecipePopup affiche les détails d'une recette dans une fenêtre modal compacte.

    - Fermeture intuitive en cliquant hors de la fenêtre.

# Ressources utilisées 📚

    - ReactJS : Documentation officielle

    - Vite : Documentation officielle

    - TailwindCSS : Documentation officielle

Icons : Flacicon

## Explications techniques

# Chargement des recettes :

    - Les recettes sont extraites du fichier recettes.json et affichées dynamiquement.

# Gestion des états :

    - Utilisation du hook useState pour gérer les recettes, la recherche, et les vues.

# Recherche dynamique :

    - La barre de recherche filtre instantanément les recettes en fonction du texte saisi.

# Popup interactif :

    -   Implémentation d'un useEffect pour fermer le popup lors d'un clic hors de sa zone.

**Instructions d'installation**

    1 - Clonez le dépôt :

        git clone https://github.com/votre-repo/lets-cook.git

    2 - Installez les dépendances :

        npm install

    3 - Lancez l'application en mode développement :

        npm run dev

    4 - Accédez à l'application via http://localhost:5173.

# Auteur

**Nom : Loukachov Andrei**

**Formation : DWWM**

**Objectif : Validation des compétences en création et déploiement d'applications web.**

**Améliorations possibles 🚀**

Possibilité de filtrer par type de cuisine ou d'ingrédients.

Intégration d'une fonctionnalité permettant aux utilisateurs d'ajouter leurs propres recettes.

Mise en place d'une API REST pour stocker et manipuler les recettes.

Déploiement

Le projet est déployé sur Vercel. Accédez à l'application ici : [Let's Cook.](https://letscookreact-git-dev-s8zs-projects.vercel.app/