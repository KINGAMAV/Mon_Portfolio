# Quick Start - Portfolio Patrick Amavi

Prêt à publier? Suivez ces étapes rapides!

## 1️⃣ Installation locale (5 min)
```bash
npm install
npm run dev
```
Votre portfolio sera accessible sur `http://localhost:3000`

## 2️⃣ Vérifier le build production (2 min)
```bash
npm run build
```
✓ Le dossier `dist/` contient votre site prêt pour le déploiement

## 3️⃣ Déployer en 2 clics

### Option A: Vercel (Plus rapide)
1. Aller sur [Vercel.com](https://vercel.com)
2. Importer votre repo GitHub
3. C'est déployé!

### Option B: Netlify
1. Aller sur [Netlify.com](https://netlify.com)
2. Connecter votre repo GitHub
3. Déploiement automatique à chaque push

### Option C: Votre serveur
```bash
# Copier le contenu de dist/ sur votre serveur
scp -r dist/* user@host:/var/www/portfolio
```

## 📝 Personnaliser avant de publier

### Vos informations personnelles
- Email: Modifier dans `src/components/Hero.tsx` et `src/components/Contact.tsx`
- Téléphone: Même fichiers
- Réseaux sociaux: Tous les composants

### Contenu
- Textes: Dans les fichiers `.tsx` des composants
- Couleurs: Dans `tailwind.config.js`
- Images: Dans `/public`

### Témoignages
Les témoignages seront stockés dans Supabase.
- URL Supabase: Déjà configurée dans `.env`
- Clé anon: Déjà configurée dans `.env`

## 🚀 Après le déploiement

1. Tester chaque section du portfolio
2. Vérifier les liens sociaux
3. Tester les formulaires (Contact & Témoignages)
4. Vérifier sur mobile

## 🔧 Dépannage rapide

| Problème | Solution |
|----------|----------|
| Build échoue | `npm install && npm run build` |
| Port 3000 occupé | `npm run dev -- --port 3001` |
| Erreurs TypeScript | `npx tsc --noEmit` |
| Cache Vite problématique | `rm -rf node_modules/.vite` |

## 📂 Fichiers importants

- `src/App.tsx` - Structure principale
- `src/components/` - Tous les sections du site
- `public/` - Images et assets
- `.env` - Configuration Supabase
- `tailwind.config.js` - Couleurs et styles

## 📊 Stats du build

- **Bundle:** ~520 KB (gzip: ~156 KB)
- **Accueil:** 1.29 KB (gzip: 0.60 KB)
- **CSS:** 22.50 KB (gzip: 4.53 KB)
- **Temps build:** ~7s

## ✅ Checklist avant publication

- [ ] Nom et infos à jour
- [ ] Photos en place
- [ ] Liens sociaux valides
- [ ] `npm run build` sans erreur
- [ ] Téléportation Supabase OK
- [ ] Formulaires testés localement
- [ ] Version mobile testée

## 🎯 Prochaines étapes

1. Publier sur Vercel/Netlify
2. Tester sur production
3. Ajouter un domaine personnalisé
4. Configurer Google Analytics (optionnel)
5. Partager sur les réseaux!

Besoin d'aide? Consultez les fichiers:
- `INSTALLATION.md` - Installation détaillée
- `DEPLOYMENT.md` - Déploiement complet
- `FEATURES.md` - Toutes les fonctionnalités
- `README.md` - Vue d'ensemble

