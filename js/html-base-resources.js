window.ressourcesHTMLBase = [
  {
    id: "html-p",
    categorie: "html",
    niveau: "base",
    titre: "&lt;p&gt;",
    signification: "Paragraphe",
    description: "Balise pour définir un paragraphe de texte",
    utilite: "Structurer le contenu textuel en blocs séparés",
    variantes: ["&lt;p&gt;", "&lt;p class='...'&gt;", "&lt;p id='...'&gt;"],
    exemple: `<p>Ceci est un paragraphe de texte.</p>
<p class="intro">Un paragraphe avec une classe CSS.</p>`,
    cas_usage: [
      "Contenu textuel principal",
      "Descriptions",
      "Articles de blog"
    ],
    piegesCommuns: [
      "Utiliser des <p> vides pour l'espacement (utiliser CSS)",
      "Imbriquer des blocs dans <p>"
    ],
    bonnesPratiques: [
      "Un paragraphe = une idée",
      "Éviter les <p> vides pour l'espacement (utiliser CSS)",
      "Ne pas imbriquer de blocs dans <p>"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/p"
    }
  },
  {
    id: "html-h1",
    categorie: "html",
    niveau: "base",
    titre: "&lt;h1&gt; à &lt;h6&gt;",
    signification: "Heading (Titres)",
    description: "Balises de titres hiérarchiques, h1 étant le plus important",
    utilite: "Structurer le contenu en sections avec une hiérarchie claire",
    variantes: ["&lt;h1&gt;", "&lt;h2&gt;", "&lt;h3&gt;", "&lt;h4&gt;", "&lt;h5&gt;", "&lt;h6&gt;"],
    exemple: `<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Section</h3>`,
    cas_usage: [
      "Titres de pages",
      "Titres de sections",
      "Hiérarchie de contenu"
    ],
    piegesCommuns: [
      "Sauter des niveaux (h1 → h3)",
      "Plusieurs h1 par page",
      "Choisir selon le style au lieu de la hiérarchie"
    ],
    bonnesPratiques: [
      "Respecter l'ordre hiérarchique",
      "Un seul h1 pour le titre principal de la page",
      "Important pour le SEO et l'accessibilité"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/Heading_Elements"
    }
  },
  {
    id: "html-a",
    categorie: "html",
    niveau: "base",
    titre: "&lt;a&gt;",
    signification: "Anchor (Lien hypertexte)",
    description: "Crée un lien cliquable vers une autre page ou section",
    utilite: "Navigation entre pages et ressources",
    variantes: [
      "&lt;a href='url'&gt;",
      "&lt;a href='#id'&gt;",
      "&lt;a href='mailto:'&gt;",
      "&lt;a target='_blank'&gt;"
    ],
    exemple: `<a href="https://example.com">Lien externe</a>
<a href="#section">Lien interne</a>
<a href="mailto:email@example.com">Email</a>
<a href="page.html" target="_blank">Ouvrir dans un nouvel onglet</a>`,
    cas_usage: [
      "Navigation du site",
      "Liens externes",
      "Ancres vers sections",
      "Liens email/téléphone"
    ],
    piegesCommuns: [
      "Oublier l'attribut href",
      "Utiliser target='_blank' sans rel='noopener'",
      "Texte de lien non descriptif ('cliquez ici')"
    ],
    bonnesPratiques: [
      "Texte de lien descriptif",
      "Ajouter rel='noopener noreferrer' avec target='_blank'",
      "Indiquer visuellement les liens externes"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/a"
    }
  },
  {
    id: "html-img",
    categorie: "html",
    niveau: "base",
    titre: "&lt;img&gt;",
    signification: "Image",
    description: "Affiche une image sur la page",
    utilite: "Intégrer des images dans le contenu",
    variantes: [
      "&lt;img src='url' alt='description'&gt;",
      "&lt;img loading='lazy'&gt;",
      "&lt;img width='...' height='...'&gt;"
    ],
    exemple: `<img src="photo.jpg" alt="Description de l'image">
<img src="logo.png" alt="Logo" width="200" height="100">
<img src="banner.jpg" alt="Bannière" loading="lazy">`,
    cas_usage: [
      "Photos de contenu",
      "Logos",
      "Icônes",
      "Illustrations"
    ],
    piegesCommuns: [
      "Oublier l'attribut alt (accessibilité)",
      "Images trop lourdes",
      "Mauvais format d'image"
    ],
    bonnesPratiques: [
      "Toujours inclure alt",
      "Optimiser les images (compression)",
      "Utiliser loading='lazy' pour les images hors viewport",
      "Spécifier width et height pour éviter les layout shifts"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img"
    }
  },
  {
    id: "html-ul-ol-li",
    categorie: "html",
    niveau: "base",
    titre: "&lt;ul&gt; / &lt;ol&gt; / &lt;li&gt;",
    signification: "Listes (non ordonnée / ordonnée / élément)",
    description: "Créer des listes à puces ou numérotées",
    utilite: "Organiser des éléments en liste",
    variantes: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;ol type='a'&gt;", "&lt;ol start='5'&gt;"],
    exemple: `<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>

<ol>
  <li>Première étape</li>
  <li>Deuxième étape</li>
</ol>`,
    cas_usage: [
      "Menus de navigation",
      "Listes d'éléments",
      "Instructions étape par étape",
      "Tableaux de bord"
    ],
    piegesCommuns: [
      "Oublier <li> dans <ul>/<ol>",
      "Utiliser des listes uniquement pour le style",
      "Imbriquer incorrectement"
    ],
    bonnesPratiques: [
      "ul pour listes non ordonnées, ol pour ordonnées",
      "Peut contenir d'autres éléments que du texte",
      "Utilisable pour la navigation (avec CSS)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul"
    }
  },
  {
    id: "html-div",
    categorie: "html",
    niveau: "base",
    titre: "&lt;div&gt;",
    signification: "Division (conteneur block)",
    description: "Conteneur générique de niveau bloc",
    utilite: "Regrouper des éléments pour le style ou le scripting",
    variantes: ["&lt;div&gt;", "&lt;div class='...'&gt;", "&lt;div id='...'&gt;"],
    exemple: `<div class="container">
  <h2>Titre</h2>
  <p>Contenu...</p>
</div>

<div id="header">
  <!-- En-tête du site -->
</div>`,
    cas_usage: [
      "Conteneurs de mise en page",
      "Sections stylisées",
      "Regroupement d'éléments"
    ],
    piegesCommuns: [
      "Divite (trop de divs imbriquées)",
      "Utiliser div au lieu d'éléments sémantiques",
      "Div pour tout"
    ],
    bonnesPratiques: [
      "Privilégier les balises sémantiques quand possible",
      "Utiliser pour la mise en page pure",
      "Donner des classes/id significatifs"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/div"
    }
  },
  {
    id: "html-span",
    categorie: "html",
    niveau: "base",
    titre: "&lt;span&gt;",
    signification: "Span (conteneur inline)",
    description: "Conteneur générique de niveau inline",
    utilite: "Cibler une partie du texte pour le style ou le scripting",
    variantes: ["&lt;span&gt;", "&lt;span class='...'&gt;", "&lt;span style='...'&gt;"],
    exemple: `<p>Ce texte contient un <span class="highlight">mot en surbrillance</span>.</p>

<p>Prix : <span class="price">99€</span></p>`,
    cas_usage: [
      "Styliser une partie du texte",
      "Mettre en évidence",
      "Icônes inline",
      "Traductions inline"
    ],
    bonnesPratiques: [
      "Utiliser pour du contenu inline uniquement",
      "Ne crée pas de saut de ligne",
      "Privilégier <strong>, <em> pour la sémantique"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/span"
    }
  },
  {
    id: "html-br",
    categorie: "html",
    niveau: "base",
    titre: "&lt;br&gt;",
    signification: "Break (Saut de ligne)",
    description: "Insère un saut de ligne dans le texte",
    utilite: "Forcer un retour à la ligne",
    variantes: ["&lt;br&gt;", "&lt;br /&gt;"],
    exemple: `<p>
  Première ligne<br>
  Deuxième ligne<br>
  Troisième ligne
</p>`,
    cas_usage: [
      "Poèmes",
      "Adresses postales",
      "Textes avec retours à la ligne spécifiques"
    ],
    piegesCommuns: [
      "Utiliser <br> pour espacer (utiliser CSS margin/padding)",
      "Plusieurs <br> successifs pour l'espacement"
    ],
    bonnesPratiques: [
      "Utiliser avec parcimonie",
      "Préférer CSS pour l'espacement",
      "Valide seulement dans le contenu texte"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/br"
    }
  },
  {
    id: "html-hr",
    categorie: "html",
    niveau: "base",
    titre: "&lt;hr&gt;",
    signification: "Horizontal Rule (Ligne horizontale)",
    description: "Séparateur thématique, crée une ligne horizontale",
    utilite: "Séparer visuellement des sections de contenu",
    variantes: ["&lt;hr&gt;", "&lt;hr /&gt;"],
    exemple: `<section>
  <h2>Section 1</h2>
  <p>Contenu...</p>
</section>

<hr>

<section>
  <h2>Section 2</h2>
  <p>Autre contenu...</p>
</section>`,
    cas_usage: [
      "Séparation de sections",
      "Transitions thématiques",
      "Diviseurs visuels"
    ],
    bonnesPratiques: [
      "Représente une séparation thématique, pas juste visuelle",
      "Stylisable avec CSS",
      "Utiliser pour du contenu, pas la mise en page"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/hr"
    }
  },
  {
    id: "html-strong-em",
    categorie: "html",
    niveau: "base",
    titre: "&lt;strong&gt; / &lt;em&gt;",
    signification: "Strong (Important) / Emphasis (Emphase)",
    description: "Marquent l'importance ou l'emphase dans le texte",
    utilite: "Donner une signification sémantique au texte mis en valeur",
    variantes: ["&lt;strong&gt;", "&lt;em&gt;", "&lt;b&gt;", "&lt;i&gt;"],
    exemple: `<p>C'est <strong>très important</strong> de comprendre.</p>
<p>J'<em>adore</em> ce framework!</p>

<!-- Différence avec b et i -->
<p><b>Gras visuel</b> vs <strong>Important</strong></p>
<p><i>Italique visuel</i> vs <em>Emphase</em></p>`,
    cas_usage: [
      "Mots importants",
      "Emphase vocale",
      "Mise en évidence sémantique"
    ],
    piegesCommuns: [
      "Confondre <b>/<i> avec <strong>/<em>",
      "Utiliser uniquement pour le style"
    ],
    bonnesPratiques: [
      "<strong> pour importance, <em> pour emphase",
      "<b>/<i> pour style uniquement",
      "Important pour l'accessibilité (lecteurs d'écran)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong"
    }
  }
];