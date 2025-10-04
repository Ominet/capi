# Caterpi - Site Web NFT Genesis Emblems

Site web complet pour le projet NFT **Caterpi** qui présente les 1,000 Genesis Emblems qui éclosent en 10,000 NFTs Caterpi sur Ethereum. Portail vers **Neo Wonderland** et l'écosystème **Neo Silk Road** avec le meme coin **$CPI**.

## 🎨 Design System

### Palette de Couleurs
- **Bleu Nuit**: `#0D0C2B` - Couleur principale de fond
- **Vert Caterpi**: `#3BD16F` - Couleur d'accent principale
- **Violet Rêve**: `#A44DD8` - Couleur d'accent secondaire
- **Rouge Cramoisi**: `#E84343` - Couleur d'accent d'urgence
- **Soie Dorée**: `#FFD86B` - Couleur d'accent premium

### Typographie
- **Cinzel Decorative**: Titres et éléments décoratifs
- **Inter**: Corps de texte principal
- **Caveat**: Accents et éléments manuscrits

## 🚀 Installation et Développement

### Prérequis
- Node.js 18+ 
- npm 8+

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd caterpi-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
npm run type-check # Vérification TypeScript
```

## 📁 Structure du Projet

```
caterpi-website/
├── app/
│   ├── layout.tsx          # Layout principal Next.js
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux Tailwind v4
├── components/
│   ├── Hero.tsx            # Section hero avec mint
│   ├── Vision.tsx          # Vision avec icônes
│   ├── GenesisEmblem.tsx   # Galerie Genesis Emblem
│   ├── NeoWonderland.tsx   # Showcase Neo Wonderland
│   ├── CPICoin.tsx         # Fonctionnalités $CPI
│   ├── NeoSilkRoad.tsx     # Marketplace Neo Silk Road
│   ├── EcosystemFlywheel.tsx # Diagramme écosystème
│   ├── Roadmap.tsx         # Timeline roadmap
│   ├── Community.tsx       # Portails communauté
│   ├── FAQ.tsx             # FAQ avec cartes flip
│   ├── FinalCTA.tsx        # CTA final
│   ├── Footer.tsx          # Footer
│   └── ui/                 # Composants shadcn/ui
├── public/                 # Assets statiques
├── styles/                 # Styles (legacy, migré vers app/)
└── guidelines/             # Documentation
```

## 🛠 Technologies Utilisées

- **Next.js 15**: Framework React avec SSR/SSG
- **React 18**: Bibliothèque d'interface utilisateur
- **TypeScript**: Typage statique
- **Tailwind CSS v4**: Framework CSS utility-first
- **Motion**: Animations (ex-Framer Motion)
- **Lucide React**: Icônes
- **Recharts**: Graphiques et diagrammes
- **React Slick**: Carrousels
- **Sonner**: Notifications toast

## 🎯 Sections du Site

1. **Hero** - Section d'accueil avec bouton mint
2. **Vision** - Présentation avec icônes art/coin/écosystème
3. **Genesis Emblem** - Galerie des NFTs Genesis
4. **Neo Wonderland** - Showcase du monde virtuel
5. **$CPI Coin** - Fonctionnalités du meme coin
6. **Neo Silk Road** - Marketplace NFT
7. **Ecosystem Flywheel** - Diagramme de l'écosystème
8. **Roadmap** - Timeline des développements
9. **Community** - Portails communautaires
10. **FAQ** - Questions fréquentes avec cartes flip
11. **Final CTA** - Appel à l'action final
12. **Footer** - Pied de page avec liens

## 🔧 Configuration

Le projet utilise:
- **Tailwind CSS v4** avec configuration personnalisée
- **TypeScript** avec chemins d'accès configurés
- **Next.js** avec optimisations d'images et de polices
- **PostCSS** pour le traitement CSS
- **ESLint** pour la qualité du code

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌟 Fonctionnalités

- ✅ Design moderne avec animations fluides
- ✅ Optimisé pour les performances
- ✅ SEO optimisé avec métadonnées complètes
- ✅ Accessibility (a11y) compliant
- ✅ Support dark/light mode
- ✅ Animations Motion avancées
- ✅ Composants réutilisables
- ✅ TypeScript strict

## 📈 Déploiement

Le projet est optimisé pour le déploiement sur:
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- **Autres plateformes supportant Next.js**

```bash
# Build de production
npm run build

# Test du build localement
npm run start
```

## 🤝 Contribution

Ce projet suit les meilleures pratiques:
- Code TypeScript strict
- Composants fonctionnels avec hooks
- Styling avec Tailwind CSS
- Tests avec Jest (à ajouter)
- Documentation complète

---

**Caterpi Team** - Portail vers Neo Wonderland 🦋