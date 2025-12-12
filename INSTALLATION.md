# Guide d'Installation - Portfolio Patrick Amavi

## Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn
- Git

## Installation locale

### 1. Cloner le projet
```bash
git clone <votre-repo-url>
cd portfolio-amavi
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration Supabase
Les variables d'environnement Supabase sont déjà configurées dans `.env`:
```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=votre_clé_anonyme
```

Si vous avez besoin de modifier ces valeurs:
1. Aller sur [Supabase](https://supabase.com)
2. Récupérer votre URL et clé anon du projet
3. Mettre à jour le fichier `.env`

### 4. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview

# Vérifier les types TypeScript
npx tsc --noEmit
```

## Structure du projet

```
portfolio-amavi/
├── src/
│   ├── components/          # Composants React
│   ├── lib/                 # Configuration Supabase
│   ├── types/               # Types TypeScript
│   ├── App.tsx              # Composant principal
│   ├── main.tsx             # Point d'entrée React
│   └── index.css            # Styles globaux
├── public/                  # Assets statiques
├── dist/                    # Build production (généré)
├── index.html               # Template HTML
├── vite.config.ts           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind CSS
├── tsconfig.json            # Configuration TypeScript
└── package.json             # Dépendances
```

## Troubleshooting

### Port 3000 déjà utilisé
```bash
npm run dev -- --port 3001
```

### Erreurs TypeScript
```bash
npx tsc --noEmit
```

### Cache Vite
```bash
rm -rf node_modules/.vite
npm run dev
```

### Réinstaller dépendances
```bash
rm -rf node_modules package-lock.json
npm install
```

## Personnalisation

### Modifier le contenu
1. Les textes sont dans les fichiers `.tsx` des composants
2. Les images se trouvent dans `/public`
3. Les couleurs sont dans `tailwind.config.js`

### Ajouter de nouvelles sections
1. Créer un nouveau composant dans `src/components/`
2. L'importer dans `src/App.tsx`
3. L'ajouter au rendu principal

### Changer les couleurs
Modifier `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#1398BD',    // Couleur primaire
      dark: '#040229',       // Fond sombre
      'dark-blue': '#022B5C',// Bleu foncé
    },
  },
}
```

## Performance

Le site est optimisé avec:
- Code splitting automatique
- Lazy loading des images
- Compression GZIP
- CSS minifié
- Tree shaking pour supprimer le code non utilisé

## Support

Pour toute question, consultez:
- [Documentation React](https://react.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Vite](https://vitejs.dev)
