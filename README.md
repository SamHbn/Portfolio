# Portfolio de Samuel Herbin

Portfolio personnel développé pour présenter mes projets, mon parcours et mes compétences en développement web. Le projet utilise **React** pour le front-end et **Node.js/Express** pour le back-end, avec un formulaire de contact fonctionnel permettant l’envoi d’emails.

---

## Fonctionnalités

- Page d'accueil avec présentation et projets en vitrine
- Page détaillée pour chaque projet avec images, technologies et descriptions
- Page About avec parcours, compétences et objectifs
- Formulaire de contact fonctionnel avec envoi d’e-mails via backend
- Gestion complète du backend avec Node.js, Express et Nodemailer

---

## Technologies utilisées

### Front-end
- React
- React Router
- Vite
- Sass

### Back-end
- Node.js
- Express
- Nodemailer
- dotenv

### Base de données
- MongoDB (pour certains projets backend)

---

## Installation

### Front-end
1. `cd frontend`
2. `npm install`
3. `npm run dev`  
Le site sera accessible sur [http://localhost:5174](http://localhost:5174)

### Back-end
1. `cd backend`
2. `npm install`
3. Créer un fichier `.env` à la racine du backend avec les variables suivantes :
   ```env
   EMAIL_USER=votre_email@gmail.com
   EMAIL_PASS=mot_de_passe_application
   EMAIL_TO=destinataire@gmail.com
   PORT=4000
