window.ressourcesCSSInter = [
  {
    id: "css-flexbox",
    categorie: "css",
    niveau: "intermediaire",
    titre: "Flexbox",
    signification: "Flexible Box Layout",
    description: "Système de mise en page flexible en une dimension",
    utilite: "Aligner et distribuer des éléments facilement",
    variantes: [
      "display: flex",
      "flex-direction",
      "justify-content",
      "align-items",
      "flex-wrap"
    ],
    exemple: `/* Container flex */
.container {
  display: flex;
  flex-direction: row; /* row, column, row-reverse */
  justify-content: space-between; /* flex-start, center, space-around */
  align-items: center; /* flex-start, flex-end, stretch */
  gap: 20px;
  flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
}

/* Items flex */
.item {
  flex: 1; /* grow, shrink, basis */
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 200px;
}

/* Centrage parfait */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    cas_usage: [
      "Navigation horizontale",
      "Cartes de contenu",
      "Centrage d'éléments",
      "Layouts responsive"
    ],
    piegesCommuns: [
      "Confondre justify-content et align-items",
      "Oublier flex-wrap pour responsive",
      "Problèmes avec min-width/max-width"
    ],
    bonnesPratiques: [
      "gap pour espacements (au lieu de margin)",
      "flex: 1 pour distribution égale",
      "align-items pour axe perpendiculaire",
      "justify-content pour axe principal"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Flexible_Box_Layout",
      tutorial: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    }
  },
  {
    id: "css-transition",
    categorie: "css",
    niveau: "intermediaire",
    titre: "transition",
    signification: "Transition animée",
    description: "Anime les changements de propriétés CSS",
    utilite: "Créer des animations fluides",
    variantes: [
      "transition: all 0.3s",
      "transition: property duration timing-function delay",
      "transition-property",
      "transition-duration"
    ],
    exemple: `/* Transition simple */
.button {
  background: blue;
  transition: background 0.3s ease;
}

.button:hover {
  background: darkblue;
}

/* Transitions multiples */
.box {
  transition: 
    transform 0.3s ease,
    opacity 0.2s linear,
    background 0.5s ease-in-out;
}

.box:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

/* Timing functions */
.smooth {
  transition: all 0.3s ease-in-out;
}

.bouncy {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`,
    cas_usage: [
      "Effets hover",
      "Menus déroulants",
      "Modales",
      "Microinteractions"
    ],
    piegesCommuns: [
      "Animer des propriétés coûteuses (width, height)",
      "transition: all peut être lent",
      "Oublier les préfixes vendor"
    ],
    bonnesPratiques: [
      "Animer transform et opacity (performant)",
      "0.2-0.3s pour la plupart des transitions",
      "ease-in-out pour naturel",
      "will-change pour optimisation"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/transition"
    }
  },
  {
    id: "css-variables",
    categorie: "css",
    niveau: "intermediaire",
    titre: "Variables CSS (Custom Properties)",
    signification: "Variables CSS personnalisées",
    description: "Stocke des valeurs réutilisables",
    utilite: "Centraliser et réutiliser des valeurs",
    variantes: [
      "--variable-name: value",
      "var(--variable-name)",
      "var(--variable, fallback)"
    ],
    exemple: `/* Définition globale */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing: 16px;
  --border-radius: 8px;
}

/* Utilisation */
.button {
  background: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}

/* Avec fallback */
.text {
  color: var(--text-color, #333);
}

/* Scope local */
.card {
  --card-padding: 20px;
  padding: var(--card-padding);
}

/* Dark mode */
[data-theme="dark"] {
  --primary-color: #5dade2;
  --bg-color: #1a1a1a;
}`,
    cas_usage: [
      "Thèmes (dark mode)",
      "Design system",
      "Valeurs réutilisables",
      "Responsive variables"
    ],
    piegesCommuns: [
      "Oublier -- devant le nom",
      "Pas de fallback",
      "Scope mal compris"
    ],
    bonnesPratiques: [
      "Définir dans :root pour global",
      "Noms descriptifs en kebab-case",
      "Toujours un fallback",
      "Grouper par catégorie (colors, spacing)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/--*"
    }
  },
  {
    id: "css-transform",
    categorie: "css",
    niveau: "intermediaire",
    titre: "transform",
    signification: "Transformations 2D/3D",
    description: "Modifie la géométrie des éléments",
    utilite: "Rotation, échelle, translation sans affecter le flux",
    variantes: [
      "translate(x, y)",
      "rotate(deg)",
      "scale(x, y)",
      "skew(x, y)"
    ],
    exemple: `/* Translation */
.move {
  transform: translate(50px, 100px);
  transform: translateX(50px);
  transform: translateY(100px);
}

/* Rotation */
.rotate {
  transform: rotate(45deg);
}

/* Échelle */
.scale {
  transform: scale(1.5);
  transform: scale(2, 1); /* x, y */
}

/* Combinaisons */
.combo {
  transform: translate(50px, 0) rotate(45deg) scale(1.2);
}

/* Centrage absolu */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 3D */
.flip {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}`,
    cas_usage: [
      "Animations",
      "Centrage",
      "Effets hover",
      "Cartes retournables"
    ],
    piegesCommuns: [
      "Ordre des transformations important",
      "Oublier transform-origin",
      "Texte flou avec translate non-entier"
    ],
    bonnesPratiques: [
      "Performant (pas de reflow)",
      "Combiner avec transition",
      "transform-origin pour point de pivot",
      "translate3d pour activer GPU"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/transform"
    }
  },
  {
    id: "css-shadows",
    categorie: "css",
    niveau: "intermediaire",
    titre: "box-shadow / text-shadow",
    signification: "Ombres portées",
    description: "Ajoute des ombres aux éléments et au texte",
    utilite: "Créer de la profondeur visuelle",
    variantes: [
      "box-shadow: x y blur spread color",
      "text-shadow: x y blur color",
      "inset"
    ],
    exemple: `/* Ombre simple */
.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Ombre complexe */
.elevated {
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Ombre interne */
.inset {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Ombre colorée */
.glowing {
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.5);
}

/* Text shadow */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Effet relief */
.embossed {
  text-shadow: 
    1px 1px 0 white,
    -1px -1px 0 rgba(0, 0, 0, 0.3);
}`,
    cas_usage: [
      "Cartes Material Design",
      "Boutons",
      "Depth/hiérarchie",
      "Focus states"
    ],
    piegesCommuns: [
      "Ombres trop fortes",
      "Trop d'ombres multiples (performance)",
      "Oublier la transparence (rgba)"
    ],
    bonnesPratiques: [
      "Subtilité (faible opacité)",
      "Cohérence des ombres",
      "Multiples ombres pour réalisme",
      "Augmenter au hover"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow"
    }
  },
  {
    id: "css-border-radius",
    categorie: "css",
    niveau: "intermediaire",
    titre: "border-radius",
    signification: "Coins arrondis",
    description: "Arrondit les coins des éléments",
    utilite: "Créer des formes arrondies",
    variantes: [
      "border-radius: 5px",
      "border-radius: 50%",
      "border-radius: 10px 20px 30px 40px"
    ],
    exemple: `/* Coins arrondis uniformes */
.card {
  border-radius: 8px;
}

/* Cercle parfait */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* Coins spécifiques */
.custom {
  border-radius: 10px 20px 30px 40px; /* TL TR BR BL */
}

/* Formes organiques */
.blob {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

/* Pilule */
.pill {
  border-radius: 9999px;
  padding: 8px 20px;
}`,
    cas_usage: [
      "Boutons modernes",
      "Cartes",
      "Avatars",
      "Tags/badges"
    ],
    bonnesPratiques: [
      "50% pour cercle (sur carré)",
      "Cohérence dans le design",
      "Grandes valeurs pour pilules",
      "Formes asymétriques pour originalité"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/border-radius"
    }
  },
  {
    id: "css-overflow",
    categorie: "css",
    niveau: "intermediaire",
    titre: "overflow",
    signification: "Gestion du débordement",
    description: "Contrôle le contenu qui dépasse",
    utilite: "Gérer le contenu qui déborde d'un conteneur",
    variantes: [
      "overflow: visible",
      "overflow: hidden",
      "overflow: scroll",
      "overflow: auto"
    ],
    exemple: `/* Masquer le débordement */
.container {
  overflow: hidden;
}

/* Scroll automatique si nécessaire */
.scrollable {
  max-height: 300px;
  overflow: auto;
}

/* Scroll horizontal uniquement */
.horizontal {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

/* Texte ellipsis */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Scroll smooth */
.smooth-scroll {
  overflow-y: auto;
  scroll-behavior: smooth;
}`,
    cas_usage: [
      "Scroll containers",
      "Texte tronqué",
      "Modales",
      "Galleries horizontales"
    ],
    piegesCommuns: [
      "overflow: scroll toujours visible",
      "Oublier max-height/max-width",
      "Problèmes avec position: sticky"
    ],
    bonnesPratiques: [
      "auto pour scroll conditionnel",
      "hidden pour masquer",
      "scroll-behavior: smooth",
      "Custom scrollbar avec ::-webkit-scrollbar"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/overflow"
    }
  },
  {
    id: "css-z-index",
    categorie: "css",
    niveau: "intermediaire",
    titre: "z-index",
    signification: "Ordre d'empilement",
    description: "Contrôle l'ordre de superposition des éléments",
    utilite: "Gérer quels éléments apparaissent au-dessus",
    variantes: [
      "z-index: 1",
      "z-index: 999",
      "z-index: -1"
    ],
    exemple: `/* Contexte d'empilement */
.parent {
  position: relative;
  z-index: 0;
}

/* Overlay au-dessus */
.overlay {
  position: fixed;
  z-index: 1000;
}

/* Modal au-dessus de l'overlay */
.modal {
  position: fixed;
  z-index: 1001;
}

/* Derrière */
.background {
  position: absolute;
  z-index: -1;
}

/* Échelle commune */
:root {
  --z-dropdown: 100;
  --z-modal: 1000;
  --z-tooltip: 2000;
}`,
    cas_usage: [
      "Modales",
      "Dropdowns",
      "Tooltips",
      "Headers fixes"
    ],
    piegesCommuns: [
      "Ne fonctionne qu'avec position != static",
      "z-index wars (valeurs trop élevées)",
      "Stacking context mal compris"
    ],
    bonnesPratiques: [
      "Échelle cohérente (10, 20, 30...)",
      "Variables CSS pour centraliser",
      "Éviter valeurs arbitraires (9999)",
      "Documenter les niveaux"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/z-index"
    }
  },
  {
    id: "css-pseudo-classes",
    categorie: "css",
    niveau: "intermediaire",
    titre: "Pseudo-classes (:hover, :focus, :active)",
    signification: "États des éléments",
    description: "Cible les éléments selon leur état",
    utilite: "Styliser les interactions utilisateur",
    variantes: [
      ":hover",
      ":focus",
      ":active",
      ":disabled",
      ":nth-child()",
      ":first-child",
      ":last-child"
    ],
    exemple: `/* États interactifs */
button:hover {
  background: darkblue;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}

/* États de formulaire */
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}

/* Sélection d'enfants */
li:first-child {
  margin-top: 0;
}

li:nth-child(even) {
  background: #f5f5f5;
}

li:nth-child(3n) {
  color: blue;
}`,
    cas_usage: [
      "Boutons interactifs",
      "Validation de formulaire",
      "Menus de navigation",
      "Lignes alternées"
    ],
    bonnesPratiques: [
      "Toujours styliser :focus (accessibilité)",
      ":hover + :focus ensemble",
      "nth-child pour patterns",
      "Transitions pour smooth"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes"
    }
  },
  {
    id: "css-pseudo-elements",
    categorie: "css",
    niveau: "intermediaire",
    titre: "Pseudo-éléments (::before, ::after)",
    signification: "Éléments virtuels",
    description: "Crée des éléments CSS sans HTML",
    utilite: "Ajouter du contenu décoratif",
    variantes: [
      "::before",
      "::after",
      "::first-letter",
      "::first-line"
    ],
    exemple: `/* Icônes avec content */
.icon::before {
  content: "★";
  margin-right: 5px;
}

/* Décorations */
.quote::before {
  content: """;
  font-size: 2em;
}

.quote::after {
  content: """;
}

/* Formes décoratives */
.card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, blue, purple);
}

/* Clearfix */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Badge */
.notification::after {
  content: "3";
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}`,
    cas_usage: [
      "Icônes décoratives",
      "Badges de notification",
      "Triangles CSS",
      "Overlays"
    ],
    piegesCommuns: [
      "Oublier content (même vide)",
      "Ne fonctionne pas sur <img>, <input>",
      "Position mal configurée"
    ],
    bonnesPratiques: [
      "content: '' obligatoire",
      "Position absolute souvent utile",
      "Ne pas utiliser pour du contenu important",
      "Décoratif uniquement"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/::before"
    }
  },
  {
    id: "css-media-queries",
    categorie: "css",
    niveau: "intermediaire",
    titre: "@media queries",
    signification: "Requêtes média",
    description: "Applique des styles selon le device/viewport",
    utilite: "Créer des designs responsive",
    variantes: [
      "@media (max-width: 768px)",
      "@media (min-width: 1024px)",
      "@media (prefers-color-scheme: dark)"
    ],
    exemple: `/* Mobile first */
.container {
  padding: 10px;
}

/* Tablette */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: white;
  }
}

/* Orientation */
@media (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Print */
@media print {
  .no-print {
    display: none;
  }
}`,
    cas_usage: [
      "Responsive design",
      "Dark mode",
      "Print styles",
      "Adaptations device"
    ],
    bonnesPratiques: [
      "Mobile-first approach",
      "Breakpoints cohérents (768px, 1024px)",
      "min-width plutôt que max-width",
      "Tester sur vrais devices"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/@media"
    }
  },
  {
    id: "css-calc",
    categorie: "css",
    niveau: "intermediaire",
    titre: "calc()",
    signification: "Calculs CSS",
    description: "Effectue des calculs mathématiques",
    utilite: "Calculer des valeurs dynamiques",
    variantes: [
      "calc(100% - 50px)",
      "calc(100vw - 2rem)",
      "calc(var(--size) * 2)"
    ],
    exemple: `/* Largeur dynamique */
.sidebar {
  width: calc(100% - 300px);
}

/* Espacement responsive */
.container {
  padding: calc(10px + 2vw);
}

/* Avec variables */
:root {
  --gap: 20px;
}

.grid {
  gap: var(--gap);
  grid-template-columns: repeat(3, calc((100% - var(--gap) * 2) / 3));
}

/* Centrage */
.centered {
  width: calc(100% - 40px);
  max-width: 1200px;
  margin: 0 auto;
}

/* Font size fluide */
h1 {
  font-size: calc(1.5rem + 1vw);
}`,
    cas_usage: [
      "Layouts complexes",
      "Tailles fluides",
      "Espacements dynamiques",
      "Responsive typography"
    ],
    piegesCommuns: [
      "Oublier les espaces autour des opérateurs",
      "Mélanger unités incompatibles",
      "Trop complexe (illisible)"
    ],
    bonnesPratiques: [
      "Espaces obligatoires: calc(100% - 20px)",
      "Combiner avec variables CSS",
      "Peut imbriquer plusieurs calc()",
      "Utile pour valeurs entre unités différentes"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/calc"
    }
  },
  {
    id: "css-gradient",
    categorie: "css",
    niveau: "intermediaire",
    titre: "linear-gradient() / radial-gradient()",
    signification: "Dégradés",
    description: "Crée des dégradés de couleurs",
    utilite: "Arrière-plans avec transitions de couleurs",
    variantes: [
      "linear-gradient()",
      "radial-gradient()",
      "conic-gradient()",
      "repeating-linear-gradient()"
    ],
    exemple: `/* Dégradé simple */
.hero {
  background: linear-gradient(to right, blue, purple);
}

/* Avec angle */
.diagonal {
  background: linear-gradient(45deg, red, yellow);
}

/* Multiple couleurs */
.rainbow {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}

/* Avec positions */
.custom {
  background: linear-gradient(
    to bottom,
    blue 0%,
    blue 50%,
    white 50%,
    white 100%
  );
}

/* Radial */
.spotlight {
  background: radial-gradient(
    circle at center,
    white,
    transparent 70%
  );
}

/* Overlay */
.overlay {
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.8)
  );
}`,
    cas_usage: [
      "Backgrounds hero",
      "Boutons modernes",
      "Overlays d'images",
      "Effets visuels"
    ],
    bonnesPratiques: [
      "Utiliser rgba pour transparence",
      "Directions: to right, 45deg, etc.",
      "Color stops pour contrôle précis",
      "Combiner avec images"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/gradient/linear-gradient"
    }
  }
];
