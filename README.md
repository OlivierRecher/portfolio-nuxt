# Portfolio Développeur Full-Stack

Un portfolio moderne et professionnel développé avec Nuxt 3, TypeScript, Three.js et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne** : Interface épurée avec dark mode
- **Animations fluides** : GSAP pour des transitions professionnelles
- **Three.js** : Effets 3D subtils et élégants
- **Responsive** : Optimisé pour tous les écrans
- **Performance** : Optimisé pour de bonnes performances
- **SEO** : Meta tags et structure sémantique
- **Accessibilité** : Navigation clavier et ARIA labels

## 🛠️ Technologies

- **Framework** : Nuxt 3
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **3D Graphics** : Three.js
- **Animations** : GSAP
- **Icons** : Heroicons, Simple Icons
- **Forms** : EmailJS
- **Deployment** : Vercel

## 📦 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd portfolio-nuxt

# Installer les dépendances
pnpm install

# Lancer en développement
pnpm dev
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

### Configuration EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez un service email
3. Créez un template
4. Ajoutez les variables d'environnement

## 🎨 Personnalisation

### Données personnelles

Modifiez le fichier `composables/usePortfolioData.ts` pour personnaliser :

- Informations personnelles
- Compétences
- Projets
- Expérience
- Formation

### Images

Placez vos images dans le dossier `public/images/` :

- `avatar.jpg` : Photo de profil
- `projects/` : Images des projets
- `og-image.jpg` : Image pour les réseaux sociaux

### Couleurs

Les couleurs peuvent être personnalisées dans `tailwind.config.js` et `assets/css/main.css`.

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Netlify

1. Connectez votre repository à Netlify
2. Configurez les variables d'environnement
3. Déployez

### Build manuel

```bash
# Build pour production
pnpm build

# Preview
pnpm preview
```

## 📱 Responsive Design

Le portfolio est optimisé pour :

- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px
- **Desktop** : 1024px+

## ⚡ Performance

- **Lazy loading** des images
- **Code splitting** automatique
- **Optimisation** des assets
- **Compression** des images
- **Cache** des ressources statiques

## 🎯 SEO

- Meta tags optimisés
- Structure sémantique HTML5
- Images avec alt text
- URLs propres
- Sitemap automatique

## 🔍 Accessibilité

- Navigation clavier
- ARIA labels
- Contraste des couleurs
- Focus visible
- Screen reader friendly

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

- **Email** : recher.olivier@outlook.fr
- **GitHub** : [@olivierrecher](https://github.com/olivierrecher)
- **LinkedIn** : [Olivier Recher](https://www.linkedin.com/in/olivier-recher)

---

Développé avec ❤️ par Olivier Recher