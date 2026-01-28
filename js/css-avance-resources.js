window.ressourcesCSSAvance = [
  {
    id: "css-grid",
    categorie: "css",
    niveau: "avance",
    titre: "CSS Grid",
    signification: "Grid Layout",
    description: "Système de grille bidimensionnel pour créer des mises en page complexes",
    utilite: "Créer des layouts sophistiqués avec contrôle total sur lignes et colonnes",
    variantes: [
      "grid-template-columns / grid-template-rows",
      "grid-gap / gap",
      "grid-area",
      "grid-template-areas"
    ],
    exemple: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.item {
  grid-column: span 2;
}`,
    cas_usage: [
      "Layouts de page complexes",
      "Galeries d'images",
      "Dashboards",
      "Grilles responsives"
    ],
    piegesCommuns: [
      "Confondre Grid et Flexbox",
      "Oublier de définir display: grid",
      "Mauvaise utilisation des fractions (fr)"
    ],
    bonnesPratiques: [
      "Utiliser grid-template-areas pour layouts complexes",
      "Combiner avec Flexbox quand nécessaire",
      "Utiliser auto-fit et auto-fill pour responsive"
    ]
  },
  {
    id: "css-animation-keyframes",
    categorie: "css",
    niveau: "avance",
    titre: "animation / @keyframes",
    signification: "Animations complexes",
    description: "Créer des animations CSS personnalisées avec contrôle total sur chaque étape",
    utilite: "Animer des éléments de manière fluide et professionnelle",
    variantes: [
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction"
    ],
    exemple: `@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}`,
    cas_usage: [
      "Animations d'entrée/sortie",
      "Loaders et spinners",
      "Effets de survol complexes",
      "Animations infinies"
    ],
    piegesCommuns: [
      "Animations trop lourdes (performance)",
      "Oublier les préfixes vendor (-webkit-)",
      "Ne pas utiliser will-change pour optimisation"
    ],
    bonnesPratiques: [
      "Animer transform et opacity pour performance",
      "Utiliser animation-fill-mode pour état final",
      "Définir will-change pour animations complexes"
    ]
  },
  {
    id: "css-filter",
    categorie: "css",
    niveau: "avance",
    titre: "filter",
    signification: "Filtres visuels",
    description: "Appliquer des effets graphiques comme le flou, la luminosité, le contraste",
    utilite: "Modifier l'apparence visuelle des éléments sans images",
    variantes: [
      "blur()",
      "brightness()",
      "contrast()",
      "grayscale()",
      "hue-rotate()",
      "saturate()",
      "sepia()",
      "drop-shadow()"
    ],
    exemple: `.image {
  filter: brightness(1.2) contrast(1.1) saturate(1.3);
}

.image:hover {
  filter: grayscale(100%);
  transition: filter 0.3s;
}`,
    cas_usage: [
      "Effets hover sur images",
      "Mode sombre/clair",
      "Effets artistiques",
      "Amélioration visuelle"
    ],
    piegesCommuns: [
      "Trop de filtres (performance)",
      "Confondre filter et backdrop-filter",
      "Oublier les unités (px, %, deg)"
    ],
    bonnesPratiques: [
      "Utiliser avec modération",
      "Combiner avec transition pour fluidité",
      "Tester sur différents navigateurs"
    ]
  },
  {
    id: "css-clip-path",
    categorie: "css",
    niveau: "avance",
    titre: "clip-path",
    signification: "Découpage",
    description: "Découper des éléments selon des formes géométriques ou personnalisées",
    utilite: "Créer des formes complexes et des effets de masquage",
    variantes: [
      "circle()",
      "ellipse()",
      "polygon()",
      "inset()",
      "path()"
    ],
    exemple: `.shape {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.circle {
  clip-path: circle(50% at 50% 50%);
}`,
    cas_usage: [
      "Formes géométriques personnalisées",
      "Effets de révélation",
      "Design moderne et créatif",
      "Masques d'images"
    ],
    piegesCommuns: [
      "Syntaxe complexe de polygon()",
      "Compatibilité navigateurs anciens",
      "Oublier les pourcentages"
    ],
    bonnesPratiques: [
      "Utiliser des outils en ligne pour générer",
      "Tester sur différents écrans",
      "Prévoir un fallback"
    ]
  },
  {
    id: "css-mix-blend-mode",
    categorie: "css",
    niveau: "avance",
    titre: "mix-blend-mode",
    signification: "Modes de fusion",
    description: "Définir comment le contenu d'un élément se mélange avec l'arrière-plan",
    utilite: "Créer des effets visuels avancés et des superpositions créatives",
    variantes: [
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "difference",
      "exclusion"
    ],
    exemple: `.overlay {
  mix-blend-mode: multiply;
}

.text-effect {
  color: white;
  mix-blend-mode: difference;
}`,
    cas_usage: [
      "Effets de texte créatifs",
      "Superposition d'images",
      "Effets artistiques",
      "Design graphique avancé"
    ],
    piegesCommuns: [
      "Résultat imprévisible selon l'arrière-plan",
      "Performance sur éléments nombreux",
      "Rendu différent selon navigateurs"
    ],
    bonnesPratiques: [
      "Tester avec différents arrière-plans",
      "Utiliser avec parcimonie",
      "Prévoir un fallback visuel"
    ]
  },
  {
    id: "css-backdrop-filter",
    categorie: "css",
    niveau: "avance",
    titre: "backdrop-filter",
    signification: "Filtre d'arrière-plan",
    description: "Appliquer des effets graphiques à la zone derrière un élément",
    utilite: "Créer des effets de flou d'arrière-plan (glassmorphism)",
    variantes: [
      "blur()",
      "brightness()",
      "contrast()",
      "grayscale()",
      "saturate()"
    ],
    exemple: `.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}`,
    cas_usage: [
      "Effet glassmorphism",
      "Cartes avec transparence",
      "Modales modernes",
      "Headers transparents"
    ],
    piegesCommuns: [
      "Performance sur mobiles",
      "Support navigateur limité",
      "Nécessite background semi-transparent"
    ],
    bonnesPratiques: [
      "Prévoir un fallback",
      "Tester performance sur mobile",
      "Combiner avec background rgba()"
    ]
  },
  {
    id: "css-variables-avancees",
    categorie: "css",
    niveau: "avance",
    titre: "CSS Variables avancées",
    signification: "Thèmes dynamiques",
    description: "Utilisation avancée des Custom Properties pour créer des systèmes de thèmes",
    utilite: "Créer des thèmes dynamiques et modifier les styles globalement",
    variantes: [
      "Variables globales (:root)",
      "Variables locales (scope)",
      "Fallback values",
      "Manipulation avec JavaScript"
    ],
    exemple: `:root {
  --primary: #3498db;
  --secondary: #2ecc71;
  --spacing: 16px;
}

[data-theme="dark"] {
  --primary: #2980b9;
  --secondary: #27ae60;
}

.button {
  background: var(--primary, blue);
  padding: var(--spacing);
}`,
    cas_usage: [
      "Systèmes de design",
      "Dark/Light mode",
      "Personnalisation utilisateur",
      "Thèmes multiples"
    ],
    piegesCommuns: [
      "Oublier le -- au début",
      "Mauvaise gestion du scope",
      "Ne pas prévoir de fallback"
    ],
    bonnesPratiques: [
      "Centraliser dans :root",
      "Nommer de façon sémantique",
      "Toujours prévoir des fallbacks"
    ]
  },
  {
    id: "css-supports",
    categorie: "css",
    niveau: "avance",
    titre: "@supports",
    signification: "Feature queries",
    description: "Tester si le navigateur supporte une fonctionnalité CSS avant de l'utiliser",
    utilite: "Créer des fallbacks intelligents et amélioration progressive",
    variantes: [
      "@supports (property: value)",
      "@supports not",
      "@supports and",
      "@supports or"
    ],
    exemple: `@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
  }
}`,
    cas_usage: [
      "Fallbacks pour nouvelles fonctionnalités",
      "Progressive enhancement",
      "Support multi-navigateurs",
      "Détection de fonctionnalités"
    ],
    piegesCommuns: [
      "Syntaxe complexe",
      "Oublier les parenthèses",
      "Tester des propriétés non-standard"
    ],
    bonnesPratiques: [
      "Toujours prévoir un fallback",
      "Tester les fonctionnalités critiques",
      "Combiner avec modernizr si nécessaire"
    ]
  },
  {
    id: "css-aspect-ratio",
    categorie: "css",
    niveau: "avance",
    titre: "aspect-ratio",
    signification: "Ratio d'aspect",
    description: "Définir un ratio largeur/hauteur fixe pour un élément",
    utilite: "Maintenir des proportions cohérentes sans padding-hack",
    variantes: [
      "16/9 (vidéo)",
      "4/3 (ancien écran)",
      "1/1 (carré)",
      "21/9 (ultrawide)"
    ],
    exemple: `.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square {
  aspect-ratio: 1;
}`,
    cas_usage: [
      "Conteneurs vidéo responsives",
      "Images carrées",
      "Cartes uniformes",
      "Layouts proportionnels"
    ],
    piegesCommuns: [
      "Conflit avec height explicite",
      "Support navigateur à vérifier",
      "Oublier le slash /"
    ],
    bonnesPratiques: [
      "Remplace les padding-hacks",
      "Utiliser avec width: 100%",
      "Prévoir un fallback"
    ]
  },
  {
    id: "css-gap",
    categorie: "css",
    niveau: "avance",
    titre: "gap",
    signification: "Espacement de grille/flex",
    description: "Définir l'espacement entre éléments flex ou grid sans margin",
    utilite: "Simplifier l'espacement dans les layouts flexbox et grid",
    variantes: [
      "gap (raccourci)",
      "row-gap",
      "column-gap"
    ],
    exemple: `.flex-container {
  display: flex;
  gap: 20px;
}

.grid-container {
  display: grid;
  gap: 20px 10px; /* row column */
}`,
    cas_usage: [
      "Espacement dans flexbox",
      "Espacement dans grid",
      "Layouts responsives",
      "Remplacement de margins"
    ],
    piegesCommuns: [
      "Anciens navigateurs non supportés",
      "Confondre avec grid-gap (ancienne syntaxe)",
      "Oublier que ça ne s'applique qu'à flex/grid"
    ],
    bonnesPratiques: [
      "Utiliser à la place de margins",
      "Syntaxe courte pour même espacement",
      "Vérifier compatibilité navigateur"
    ]
  },
  {
    id: "css-clamp-min-max",
    categorie: "css",
    niveau: "avance",
    titre: "clamp() / min() / max()",
    signification: "Fonctions responsives",
    description: "Fonctions CSS pour créer des valeurs fluides et responsives",
    utilite: "Créer des designs véritablement fluides sans media queries",
    variantes: [
      "clamp(min, valeur, max)",
      "min(valeur1, valeur2)",
      "max(valeur1, valeur2)"
    ],
    exemple: `.fluid-text {
  font-size: clamp(1rem, 2.5vw, 3rem);
}

.container {
  width: min(90%, 1200px);
  padding: max(20px, 5vw);
}`,
    cas_usage: [
      "Typographie fluide",
      "Espacements responsives",
      "Largeurs adaptatives",
      "Design sans breakpoints"
    ],
    piegesCommuns: [
      "Ordre des paramètres dans clamp()",
      "Unités incompatibles",
      "Surcharge de calculs"
    ],
    bonnesPratiques: [
      "Utiliser pour typographie responsive",
      "Combiner avec CSS variables",
      "Tester sur différentes tailles d'écran"
    ]
  },
  {
    id: "css-scroll-snap",
    categorie: "css",
    niveau: "avance",
    titre: "scroll-snap",
    signification: "Défilement par sections",
    description: "Créer des points d'accroche lors du défilement",
    utilite: "Améliorer l'UX du défilement avec des points d'arrêt précis",
    variantes: [
      "scroll-snap-type",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-padding"
    ],
    exemple: `.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.section {
  scroll-snap-align: start;
  height: 100vh;
}`,
    cas_usage: [
      "Carrousels",
      "Pages fullscreen",
      "Galeries d'images",
      "Storytelling scrollé"
    ],
    piegesCommuns: [
      "Oublier overflow sur le conteneur",
      "Mauvais alignement des points",
      "Conflits avec smooth scroll"
    ],
    bonnesPratiques: [
      "Tester sur mobile",
      "Utiliser avec scroll-behavior: smooth",
      "Prévoir des alternatives pour accessibilité"
    ]
  },
  {
    id: "css-container-queries",
    categorie: "css",
    niveau: "avance",
    titre: "@container queries",
    signification: "Container queries",
    description: "Media queries basées sur la taille du conteneur parent",
    utilite: "Créer des composants véritablement responsives indépendamment de la viewport",
    variantes: [
      "@container (width)",
      "@container (min-width)",
      "@container (max-width)",
      "container-type",
      "container-name"
    ],
    exemple: `.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}`,
    cas_usage: [
      "Composants réutilisables",
      "Design systems",
      "Cartes adaptatives",
      "Layouts modulaires"
    ],
    piegesCommuns: [
      "Support navigateur récent uniquement",
      "Oublier container-type",
      "Performance sur beaucoup de conteneurs"
    ],
    bonnesPratiques: [
      "Nommer les conteneurs pour clarté",
      "Prévoir des fallbacks",
      "Tester largement la compatibilité"
    ]
  }
];