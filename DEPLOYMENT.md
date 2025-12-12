# Guide de Déploiement - Portfolio Patrick Amavi

## Préparation avant déploiement

### Variables d'environnement
Les variables Supabase sont déjà configurées dans `.env`:
- `VITE_SUPABASE_URL` - URL du projet Supabase
- `VITE_SUPABASE_ANON_KEY` - Clé anonyme pour l'API

### Base de données Supabase
La table `testimonials` est déjà créée avec:
- Authentification pour les soumissions publiques
- RLS (Row Level Security) configurée
- Stockage des avis clients avec système de notation

## Options de déploiement

### Option 1: Vercel (Recommandé)
1. Connecter votre repo GitHub à Vercel
2. Sélectionner ce projet
3. Les variables d'environnement seront détectées automatiquement
4. Cliquer sur "Deploy"
5. Le site sera live sur un domaine Vercel

### Option 2: Netlify
1. Connecter votre repo GitHub à Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Ajouter les variables d'environnement dans Netlify
5. Déployer automatiquement

### Option 3: GitHub Pages
1. Activer GitHub Pages dans les paramètres du repo
2. Sélectionner la branche `main`
3. Sélectionner le dossier `dist`

### Option 4: Hébergement personnalisé (AWS, DigitalOcean, etc.)
1. Faire un build: `npm run build`
2. Copier le contenu du dossier `dist` sur votre serveur
3. Configurer le serveur pour servir `index.html` pour les routes non trouvées

## Checklist de déploiement

- [ ] Variables d'environnement Supabase configurées
- [ ] Base de données testimonials créée et RLS activé
- [ ] Build local testée: `npm run build`
- [ ] Pas d'erreurs TypeScript: `npx tsc --noEmit`
- [ ] Images statiques (monlogo.png, ma_photo.jpg) dans `/public`
- [ ] Liens de réseaux sociaux à jour
- [ ] Email de contact actualisé si nécessaire
- [ ] Format gzip activé sur le serveur pour les assets

## Performance

Le site est optimisé pour la performance:
- Bundle JavaScript divisé en chunks (framer-motion, supabase, react-icons)
- CSS minifié et compressé
- Images optimisées
- Lazy loading des images
- Code splitting automatique

## Taille des assets en production

- HTML: 1.29 kB (gzip: 0.60 kB)
- CSS: 22.50 kB (gzip: 4.53 kB)
- JavaScript total: ~520 kB (gzip: ~156 kB)

## Maintenance post-déploiement

### Gérer les témoignages
Les nouveaux témoignages sont soumis via le formulaire de contact et apparaissent dans Supabase. Pour les afficher sur le site, approuver le champ `approved = true` dans la base de données.

### Mise à jour du contenu
- Modifier le texte directement dans les composants React
- Les images se trouvent dans `/public`
- Refaire un build et redéployer

### Monitoring
- Vérifier les erreurs de la console du navigateur
- Monitorer les logs Supabase pour les erreurs d'authentification
- Vérifier les performances avec Lighthouse

## Support

Pour toute question sur le déploiement ou la maintenance, consultez:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Supabase Docs](https://supabase.com/docs)
