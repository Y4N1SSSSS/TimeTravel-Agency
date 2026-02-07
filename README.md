# ⏳ TimeTravel Agency - Webapp Interactive

> **Découvrez l’élégance du voyage dans le temps.**

Une application web immersive pour une agence de voyage temporel fictive de luxe. Ce projet met en avant une interface utilisateur soignée ("Black & White"), des animations fluides et une intégration d'Intelligence Artificielle générative pour conseiller les utilisateurs.

🔗 **URL du site déployé :** [https://time-travel-agency-xi.vercel.app/](https://time-travel-agency-xi.vercel.app/)
📂 **Dépôt GitHub :** [https://github.com/Y4N1SSSSS/TimeTravel-Agency](https://github.com/Y4N1SSSSS/TimeTravel-Agency)

---

## 🛠️ Stack Technique

- **Framework :** Vue.js 3 (Composition API)
- **Build Tool :** Vite
- **Langages :** JavaScript, SCSS/CSS (Design "Luxe" & Responsive)
- **API IA :** Mistral AI (via `fetch` natif)
- **Routing :** Vue Router
- **Hébergement :** Vercel

---

## ✨ Fonctionnalités Implémentées

### 🎨 UX/UI & Design
- **Hero Section Cinématique :** Animation "Ken Burns" (zoom lent) sur l'image de fond et typographie soignée.
- **Design Système :** Charte graphique monochrome (Noir & Blanc), boutons avec micro-interactions physiques (levitation + ombres) et soulignement animé des liens.
- **Galerie Immersive :** Cartes interactives avec effet de zoom au survol et apparition progressive des informations.
- **Responsive Design :** Menu "Burger" animé pour mobile (< 570px) et adaptation fluide des grilles.
- **Modale Vidéo :** Player YouTube intégré dans une modale avec effet `backdrop-filter` (flou d'arrière-plan).

### 🤖 Intelligence Artificielle & Chatbot
- **Assistant Virtuel "TimeTravel" :** Chatbot flottant intégré (widget) connecté à l'API **Mistral AI** (`mistral-small-latest`).
- **Contexte Système (System Prompt) :** L'IA incarne un expert en voyage temporel, connaît spécifiquement les 3 destinations (Paris 1889, Crétacé, Florence 1504) et adopte un ton "Luxe".
- **Rendu Markdown :** Les réponses de l'IA sont formatées proprement (gras, listes) grâce à la librairie `marked`.

### 🧠 Automatisation Intelligente (Exercice 3.2 - Option A)
- **Quiz de Recommandation :** Fonctionnalité "Trouver mon voyage".
    - Un bouton déclenche un mode spécial où l'IA pose 4 questions successives (profilage).
    - À la fin, l'IA recommande **strictement** l'une des 3 destinations du catalogue selon les réponses de l'utilisateur.

---

## 🤖 Transparence IA (Outils Utilisés)

Ce projet a été réalisé avec l'assistance d'outils d'Intelligence Artificielle :

- **Code & Debugging :** Google Gemini 2.0 Flash (Génération des composants Vue.js, logique du Quiz, animations CSS complexes).
- **Moteur Conversationnel :** Mistral AI (Modèle `mistral-small-latest` utilisé pour le backend du Chatbot).
- **Visuels / Assets :** Générés via Midjourney / Runway (dans le cadre du Projet 1).

---

## 🚀 Installation & Démarrage

Si vous souhaitez lancer le projet localement :

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/Y4N1SSSSS/TimeTravel-Agency.git](https://github.com/Y4N1SSSSS/TimeTravel-Agency.git)
   cd TimeTravel-Agency
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```

4. **Accéder au site :**
   Ouvrez `http://localhost:5173` dans votre navigateur.