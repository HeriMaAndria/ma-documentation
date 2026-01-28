window.ressourcesCSSBase = [
  {
    id: "css-color-background",
    categorie: "css",
    niveau: "base",
    titre: "color / background",
    signification: "Couleurs de texte et d'arrière-plan",
    description: "Propriétés pour définir les couleurs du texte et des fonds",
    utilite: "Personnaliser l'apparence visuelle des éléments",
    variantes: [
      "color: red;",
      "color: #FF0000;",
      "color: rgb(255, 0, 0);",
      "background: blue;",
      "background-color: #00F;"
    ],
    exemple: `/* Couleur de texte */
.text {
  color: #333;
  color: rgb(51, 51, 51);
  color: hsl(0, 0%, 20%);
}

/* Arrière-plan */
.box {
  background-color: #f0f0f0;
  background: linear-gradient(to right, blue, red);
}`,
    cas_usage: [
      "Charte graphique",
      "Thèmes de site",
      "Mise en évidence",
      "Accessibilité (contraste)"
    ],
    piegesCommuns: [
      "Mauvais contraste texte/fond",
      "Trop de couleurs différentes",
      "Oublier les formats alternatifs (rgba pour transparence)"
    ],
    bonnesPratiques: [
      "Utiliser des variables CSS pour les couleurs",
      "Vérifier le contraste (WCAG)",
      "rgb() pour les couleurs, rgba() pour la transparence",
      "Utiliser hsl() pour des variations de couleur"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/color"
    }
  },
  {
    id: "css-font",
    categorie: "css",
    niveau: "base",
    titre: "font-size / font-family",
    signification: "Taille et police de caractères",
    description: "Contrôle la taille du texte et la famille de police utilisée",
    utilite: "Définir la typographie du site",
    variantes: [
      "font-size: 16px;",
      "font-size: 1rem;",
      "font-size: 1.5em;",
      "font-family: Arial, sans-serif;"
    ],
    exemple: `/* Taille de police */
body {
  font-size: 16px; /* Taille de base */
}

h1 {
  font-size: 2.5rem; /* 40px si base = 16px */
}

/* Famille de police */
.text {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 400;
  line-height: 1.6;
}`,
    cas_usage: [
      "Hiérarchie typographique",
      "Lisibilité",
      "Identité visuelle",
      "Responsive design"
    ],
    piegesCommuns: [
      "Utiliser uniquement px (pas responsive)",
      "Oublier les polices de fallback",
      "Trop de polices différentes"
    ],
    bonnesPratiques: [
      "Utiliser rem pour la taille (responsive)",
      "16px comme taille de base",
      "Toujours spécifier une police de fallback",
      "Limiter à 2-3 polices max"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/font-size"
    }
  },
  {
    id: "css-width-height",
    categorie: "css",
    niveau: "base",
    titre: "width / height",
    signification: "Largeur et hauteur",
    description: "Définit les dimensions d'un élément",
    utilite: "Contrôler la taille des éléments",
    variantes: [
      "width: 100px;",
      "width: 50%;",
      "width: 100vw;",
      "height: auto;",
      "max-width: 1200px;",
      "min-height: 300px;"
    ],
    exemple: `/* Dimensions fixes */
.box {
  width: 300px;
  height: 200px;
}

/* Dimensions relatives */
.container {
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
}

/* Responsive */
img {
  width: 100%;
  height: auto;
}`,
    cas_usage: [
      "Mise en page",
      "Images responsives",
      "Conteneurs",
      "Cartes de contenu"
    ],
    piegesCommuns: [
      "Oublier box-sizing: border-box",
      "Hauteur fixe sur du contenu dynamique",
      "Ne pas utiliser max-width pour le responsive"
    ],
    bonnesPratiques: [
      "Utiliser % ou vw/vh pour le responsive",
      "max-width plutôt que width pour les containers",
      "height: auto pour les images",
      "box-sizing: border-box par défaut"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/width"
    }
  },
  {
    id: "css-margin-padding",
    categorie: "css",
    niveau: "base",
    titre: "margin / padding",
    signification: "Marges externes et internes",
    description: "Gère les espaces autour et dans les éléments",
    utilite: "Créer de l'espace entre et dans les éléments",
    variantes: [
      "margin: 10px;",
      "margin: 10px 20px;",
      "padding: 10px 20px 30px 40px;",
      "margin-top: 20px;",
      "padding-left: 15px;"
    ],
    exemple: `/* Marges externes (espace autour) */
.box {
  margin: 20px; /* 20px de tous côtés */
  margin: 10px 20px; /* 10px haut/bas, 20px gauche/droite */
  margin: 10px 15px 20px 25px; /* haut, droite, bas, gauche */
}

/* Marges internes (espace dedans) */
.card {
  padding: 20px;
  padding-top: 30px;
}

/* Centrer horizontalement */
.center {
  margin: 0 auto;
  max-width: 800px;
}`,
    cas_usage: [
      "Espacements",
      "Centrage d'éléments",
      "Zones cliquables",
      "Respiration visuelle"
    ],
    piegesCommuns: [
      "Confondre margin et padding",
      "Collapse de margin verticale",
      "Margin auto ne fonctionne pas en vertical"
    ],
    bonnesPratiques: [
      "Utiliser la notation courte quand possible",
      "margin: 0 auto pour centrer",
      "Préférer padding pour l'espace interne cliquable",
      "Utiliser rem/em pour l'espacement responsive"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/margin"
    }
  },
  {
    id: "css-border",
    categorie: "css",
    niveau: "base",
    titre: "border",
    signification: "Bordures",
    description: "Ajoute des bordures autour des éléments",
    utilite: "Délimiter visuellement les éléments",
    variantes: [
      "border: 1px solid black;",
      "border-top: 2px dashed red;",
      "border-radius: 5px;",
      "border-color: blue;",
      "border-style: dotted;"
    ],
    exemple: `/* Bordure complète */
.box {
  border: 2px solid #333;
}

/* Bordures spécifiques */
.card {
  border-top: 3px solid blue;
  border-bottom: 1px dashed #ccc;
}

/* Coins arrondis */
.button {
  border: 1px solid #000;
  border-radius: 5px;
}

/* Cercle */
.avatar {
  border: 2px solid white;
  border-radius: 50%;
}`,
    cas_usage: [
      "Cartes de contenu",
      "Boutons",
      "Séparateurs",
      "Focus visible"
    ],
    bonnesPratiques: [
      "border: width style color",
      "border-radius pour arrondir les coins",
      "50% pour un cercle (si élément carré)",
      "Utiliser pour la délimitation, pas l'espacement"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/border"
    }
  },
  {
    id: "css-display",
    categorie: "css",
    niveau: "base",
    titre: "display",
    signification: "Type d'affichage",
    description: "Contrôle comment un élément est affiché",
    utilite: "Changer le comportement d'affichage des éléments",
    variantes: [
      "display: block;",
      "display: inline;",
      "display: inline-block;",
      "display: none;",
      "display: flex;",
      "display: grid;"
    ],
    exemple: `/* Éléments block (prennent toute la largeur) */
div {
  display: block;
}

/* Éléments inline (côte à côte) */
span {
  display: inline;
}

/* Inline-block (côte à côte avec dimensions) */
.button {
  display: inline-block;
  width: 150px;
  height: 40px;
}

/* Masquer un élément */
.hidden {
  display: none;
}`,
    cas_usage: [
      "Layout de page",
      "Masquer des éléments",
      "Menus responsive",
      "Grilles et flexbox"
    ],
    piegesCommuns: [
      "Confondre display: none et visibility: hidden",
      "Utiliser inline pour des éléments avec width/height"
    ],
    bonnesPratiques: [
      "block: prend toute la largeur",
      "inline: pas de width/height",
      "inline-block: côte à côte avec dimensions",
      "none: retire du flux (vs visibility: hidden)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/display"
    }
  },
  {
    id: "css-position",
    categorie: "css",
    niveau: "base",
    titre: "position",
    signification: "Positionnement",
    description: "Contrôle le positionnement des éléments",
    utilite: "Positionner précisément les éléments",
    variantes: [
      "position: static;",
      "position: relative;",
      "position: absolute;",
      "position: fixed;",
      "position: sticky;"
    ],
    exemple: `/* Relatif (décalage par rapport à sa position normale) */
.box {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolu (par rapport au parent relatif) */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixe (par rapport à la fenêtre) */
.header {
  position: fixed;
  top: 0;
  width: 100%;
}`,
    cas_usage: [
      "Overlays",
      "En-têtes fixes",
      "Tooltips",
      "Badges sur icônes"
    ],
    piegesCommuns: [
      "Oublier position: relative sur le parent pour absolute",
      "Fixed sort du flux normal",
      "Z-index ne fonctionne qu'avec position != static"
    ],
    bonnesPratiques: [
      "static: comportement par défaut",
      "relative: pour décalage ou parent d'absolute",
      "absolute: sorti du flux, positionné par rapport au parent relative",
      "fixed: collé à la fenêtre"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/position"
    }
  },
  {
    id: "css-text-align",
    categorie: "css",
    niveau: "base",
    titre: "text-align",
    signification: "Alignement du texte",
    description: "Aligne le contenu texte horizontalement",
    utilite: "Contrôler l'alignement du texte",
    variantes: [
      "text-align: left;",
      "text-align: center;",
      "text-align: right;",
      "text-align: justify;"
    ],
    exemple: `/* Centrer le texte */
.title {
  text-align: center;
}

/* Aligner à droite */
.price {
  text-align: right;
}

/* Justifié */
.paragraph {
  text-align: justify;
}`,
    cas_usage: [
      "Titres centrés",
      "Prix alignés",
      "Menus",
      "Contenu de cellules"
    ],
    bonnesPratiques: [
      "N'affecte que le contenu inline",
      "center pour les titres",
      "justify peut créer des espaces irréguliers",
      "Ne centre pas les divs (utiliser margin: auto)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/text-align"
    }
  },
  {
    id: "css-cursor",
    categorie: "css",
    niveau: "base",
    titre: "cursor",
    signification: "Type de curseur",
    description: "Change l'apparence du curseur au survol",
    utilite: "Indiquer l'interactivité des éléments",
    variantes: [
      "cursor: pointer;",
      "cursor: default;",
      "cursor: not-allowed;",
      "cursor: grab;",
      "cursor: text;"
    ],
    exemple: `/* Pointeur main (cliquable) */
button, a {
  cursor: pointer;
}

/* Interdit */
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Déplaçable */
.draggable {
  cursor: grab;
}

.draggable:active {
  cursor: grabbing;
}`,
    cas_usage: [
      "Boutons personnalisés",
      "Éléments désactivés",
      "Drag & drop",
      "Zones interactives"
    ],
    bonnesPratiques: [
      "pointer pour les éléments cliquables",
      "not-allowed pour les éléments désactivés",
      "Cohérence avec le comportement",
      "Ne pas abuser des curseurs personnalisés"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/cursor"
    }
  },
  {
    id: "css-opacity",
    categorie: "css",
    niveau: "base",
    titre: "opacity",
    signification: "Opacité",
    description: "Contrôle la transparence d'un élément",
    utilite: "Rendre des éléments transparents",
    variantes: [
      "opacity: 1;",
      "opacity: 0.5;",
      "opacity: 0;"
    ],
    exemple: `/* Semi-transparent */
.overlay {
  opacity: 0.8;
}

/* Invisible mais présent dans le DOM */
.hidden {
  opacity: 0;
}

/* Effet au survol */
.image {
  opacity: 1;
  transition: opacity 0.3s;
}

.image:hover {
  opacity: 0.7;
}`,
    cas_usage: [
      "Overlays",
      "Effets hover",
      "Éléments désactivés",
      "Transitions"
    ],
    piegesCommuns: [
      "Confondre avec visibility et display: none",
      "Opacité affecte tous les enfants"
    ],
    bonnesPratiques: [
      "Valeur entre 0 (invisible) et 1 (opaque)",
      "L'élément reste dans le flux et cliquable",
      "Utiliser rgba() pour opacité de background uniquement",
      "Combiner avec transition pour animations"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/CSS/opacity"
    }
  }
];
