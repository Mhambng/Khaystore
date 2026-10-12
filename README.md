# KhayStore — Boutique en ligne

Site e-commerce moderne et responsive (HTML / CSS / JavaScript, sans dépendance).

## Fonctionnalités
- Page d'accueil animée (hero, avantages, catégories, offre avec compte à rebours, avis, newsletter)
- Catalogue avec recherche, filtres par catégorie / promos et tri
- Aperçu rapide des produits, favoris
- Panier latéral sauvegardé dans le navigateur, codes promo (`KHAY10`, `BIENVENUE`), barre « livraison offerte »
- Formulaire de commande (paiement à la livraison, Wave, Orange Money, carte), envoi optionnel de la commande sur WhatsApp
- Adapté mobile, tablette et ordinateur

## Lancer le site
Ouvrez simplement `index.html` dans votre navigateur.

## Personnaliser
Tout se règle en haut de `script.js` :
- `SETTINGS` : devise, seuil de livraison offerte, frais de port, codes promo, numéro WhatsApp
- `CATEGORIES` et `PRODUCTS` : votre catalogue
- Couleurs : variables CSS au début de `styles.css`

## Ajouter les photos des produits
1. Déposez les photos dans le dossier `images/` (format carré conseillé, ex. 800 × 800 px, en .jpg ou .webp).
2. Dans `script.js`, ajoutez `img: "images/nom-du-fichier.jpg"` au produit concerné.

Sans photo, ou si le fichier est introuvable, l'émoji du produit s'affiche à la place.

## Mettre en ligne gratuitement
Sur GitHub : **Settings → Pages → Branch** puis choisissez la branche et le dossier racine.
