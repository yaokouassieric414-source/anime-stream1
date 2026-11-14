# AnimeStream - Catalogue et Streaming d'Animés

Site web moderne de catalogue d'animés construit avec Next.js 15, TypeScript et Tailwind CSS.

## Fonctionnalités

- Page d'accueil avec Tendances, Nouveautés, Populaire, Recommandé
- Catalogue complet avec filtres (genre, année, statut, type)
- Recherche avancée en temps réel
- Page détail avec synopsis, notes, studios, genres
- Lecteur vidéo (structure prête pour HLS/embeds)
- Favoris (localStorage)
- Mode sombre/clair
- Design responsive mobile-first
- Emplacements publicitaires
- Lien Telegram configurable
- SEO de base

## Installation

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Configuration

### Lien Telegram

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/votre_canal
```

### Déploiement Netlify

1. Connectez votre repo à Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Ajoutez la variable d'environnement `NEXT_PUBLIC_TELEGRAM_LINK`

## Source de données

Les données proviennent de l'API GraphQL publique d'AniList (https://anilist.co).

## Note importante

Ce site ne fournit pas de streaming illégal. Les lecteurs affichent un message clair et redirigent vers les sources officielles quand aucune source légale n'est disponible via l'API.
