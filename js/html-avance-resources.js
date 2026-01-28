window.ressourcesHTMLAvance = [
  {
    id: "html-video-audio",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;video&gt; / &lt;audio&gt;",
    signification: "Éléments média",
    description: "Lecture de vidéos et audio natifs",
    utilite: "Intégrer des médias sans plugins",
    variantes: [
      "&lt;video&gt;",
      "&lt;audio&gt;",
      "controls",
      "autoplay",
      "&lt;source&gt;"
    ],
    exemple: `<!-- Video avec sources multiples -->
<video controls width="640" height="360" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Votre navigateur ne supporte pas la vidéo.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Votre navigateur ne supporte pas l'audio.
</audio>

<!-- Attributs avancés -->
<video 
  controls 
  autoplay 
  muted 
  loop 
  playsinline
  preload="metadata"
>
  <source src="video.mp4" type="video/mp4">
  <track src="subtitles_fr.vtt" kind="subtitles" srclang="fr" label="Français">
</video>`,
    cas_usage: [
      "Tutoriels vidéo",
      "Backgrounds vidéo",
      "Podcasts",
      "Démos produits"
    ],
    piegesCommuns: [
      "Autoplay bloqué par navigateurs",
      "Formats non supportés",
      "Taille de fichiers"
    ],
    bonnesPratiques: [
      "Plusieurs formats pour compatibilité",
      "poster pour thumbnail",
      "muted pour autoplay",
      "preload selon usage"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/video"
    }
  },
  {
    id: "html-canvas",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;canvas&gt;",
    signification: "Zone de dessin",
    description: "Surface pour dessiner avec JavaScript",
    utilite: "Graphiques, animations, jeux 2D",
    variantes: [
      "&lt;canvas&gt;",
      "2D context",
      "WebGL context"
    ],
    exemple: `<!-- HTML -->
<canvas id="myCanvas" width="800" height="600"></canvas>

// JavaScript - Dessin 2D
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Cercle
ctx.beginPath();
ctx.arc(400, 300, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Texte
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas!', 100, 200);

// Image
const img = new Image();
img.src = 'image.jpg';
img.onload = () => {
  ctx.drawImage(img, 0, 0, 200, 150);
};

// Animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Dessiner frame
  requestAnimationFrame(animate);
}
animate();`,
    cas_usage: [
      "Graphiques dynamiques",
      "Jeux 2D",
      "Visualisations de données",
      "Éditeurs d'images"
    ],
    bonnesPratiques: [
      "Spécifier width/height en attributs",
      "clearRect avant redessiner",
      "requestAnimationFrame pour animations",
      "Responsive avec resize"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Canvas_API"
    }
  },
  {
    id: "html-svg",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;svg&gt;",
    signification: "Graphiques vectoriels",
    description: "Images vectorielles scalables",
    utilite: "Graphiques qui ne pixelisent pas",
    variantes: [
      "&lt;svg&gt;",
      "&lt;path&gt;",
      "&lt;circle&gt;",
      "&lt;rect&gt;",
      "Animations SVG"
    ],
    exemple: `<!-- SVG inline -->
<svg width="200" height="200" viewBox="0 0 200 200">
  <!-- Cercle -->
  <circle cx="100" cy="100" r="50" fill="blue" />
  
  <!-- Rectangle -->
  <rect x="20" y="20" width="60" height="60" fill="red" />
  
  <!-- Ligne -->
  <line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="2" />
  
  <!-- Path (forme complexe) -->
  <path d="M 10 10 L 100 10 L 55 60 Z" fill="green" />
  
  <!-- Texte -->
  <text x="100" y="180" text-anchor="middle" font-size="20">
    SVG Text
  </text>
</svg>

<!-- Animation SVG -->
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="blue">
    <animate 
      attributeName="r" 
      from="50" 
      to="70" 
      dur="1s" 
      repeatCount="indefinite"
      direction="alternate"
    />
  </circle>
</svg>

<!-- Icône SVG réutilisable -->
<svg style="display: none;">
  <symbol id="icon-heart" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </symbol>
</svg>
<svg width="24" height="24"><use href="#icon-heart"/></svg>`,
    cas_usage: [
      "Icônes",
      "Logos",
      "Illustrations",
      "Data visualization"
    ],
    bonnesPratiques: [
      "viewBox pour responsive",
      "Optimiser avec SVGO",
      "Sprite SVG pour icônes",
      "Accessible avec title/desc"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/SVG"
    }
  },
  {
    id: "html-picture",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;picture&gt;",
    signification: "Images responsives",
    description: "Servir différentes images selon le contexte",
    utilite: "Optimisation responsive et format moderne",
    variantes: [
      "&lt;picture&gt;",
      "&lt;source media&gt;",
      "WebP fallback",
      "Art direction"
    ],
    exemple: `<!-- Formats modernes avec fallback -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>

<!-- Responsive (différentes images selon taille) -->
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcset="large.jpg"
  >
  <source 
    media="(min-width: 768px)" 
    srcset="medium.jpg"
  >
  <img src="small.jpg" alt="Image responsive">
</picture>

<!-- Art direction (recadrage différent) -->
<picture>
  <source 
    media="(min-width: 768px)" 
    srcset="landscape.jpg"
  >
  <img src="portrait.jpg" alt="Image adaptative">
</picture>

<!-- Densité d'écran (retina) -->
<picture>
  <source 
    srcset="image-2x.jpg 2x, image-1x.jpg 1x"
  >
  <img src="image-1x.jpg" alt="Image">
</picture>`,
    cas_usage: [
      "Sites responsive",
      "Performance web",
      "Art direction",
      "Formats modernes"
    ],
    bonnesPratiques: [
      "Toujours un <img> fallback",
      "Formats modernes en premier",
      "media queries cohérentes",
      "Optimiser chaque version"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/picture"
    }
  },
  {
    id: "html-template",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;template&gt;",
    signification: "Modèle HTML",
    description: "Contenu HTML inerte réutilisable",
    utilite: "Templates pour génération dynamique",
    variantes: [
      "&lt;template&gt;",
      "content property",
      "cloneNode()"
    ],
    exemple: `<!-- HTML Template -->
<template id="card-template">
  <div class="card">
    <img class="card-img" src="" alt="">
    <h3 class="card-title"></h3>
    <p class="card-desc"></p>
    <button class="card-btn">Lire plus</button>
  </div>
</template>

<div id="cards-container"></div>

// JavaScript
const template = document.getElementById('card-template');
const container = document.getElementById('cards-container');

const data = [
  { img: 'img1.jpg', title: 'Card 1', desc: 'Description 1' },
  { img: 'img2.jpg', title: 'Card 2', desc: 'Description 2' }
];

data.forEach(item => {
  // Cloner le template
  const clone = template.content.cloneNode(true);
  
  // Remplir les données
  clone.querySelector('.card-img').src = item.img;
  clone.querySelector('.card-title').textContent = item.title;
  clone.querySelector('.card-desc').textContent = item.desc;
  
  // Ajouter au DOM
  container.appendChild(clone);
});`,
    cas_usage: [
      "Listes dynamiques",
      "Cartes de contenu",
      "Components réutilisables",
      "Web Components"
    ],
    bonnesPratiques: [
      "cloneNode(true) pour deep clone",
      "Template reste invisible",
      "Réutilisable à l'infini",
      "Sépare structure et données"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/template"
    }
  },
  {
    id: "html-details-summary",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;details&gt; / &lt;summary&gt;",
    signification: "Contenu extensible natif",
    description: "Widget disclosure natif",
    utilite: "Accordéon sans JavaScript",
    variantes: [
      "&lt;details&gt;",
      "&lt;summary&gt;",
      "open attribute"
    ],
    exemple: `<!-- Details simple -->
<details>
  <summary>Cliquez pour voir plus</summary>
  <p>Contenu caché qui s'affiche au clic</p>
</details>

<!-- Ouvert par défaut -->
<details open>
  <summary>Section ouverte</summary>
  <p>Ce contenu est visible par défaut</p>
</details>

<!-- FAQ avec details -->
<details>
  <summary>Quelle est votre politique de retour ?</summary>
  <p>Vous pouvez retourner tout article dans les 30 jours...</p>
</details>

/* CSS pour styliser */
details {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
}

summary {
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  user-select: none;
}

summary:hover {
  background: #f5f5f5;
}

/* Retirer le triangle par défaut */
summary::-webkit-details-marker {
  display: none;
}

/* Custom arrow */
summary::before {
  content: '▶';
  margin-right: 10px;
  transition: transform 0.3s;
}

details[open] summary::before {
  transform: rotate(90deg);
}

// JavaScript (optionnel pour contrôle)
const details = document.querySelectorAll('details');

details.forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      console.log('Ouvert');
    } else {
      console.log('Fermé');
    }
  });
});`,
    cas_usage: [
      "FAQ",
      "Accordéons simples",
      "Navigation",
      "Documentation"
    ],
    bonnesPratiques: [
      "Accessible par défaut",
      "Pas de JS requis",
      "Stylisable avec CSS",
      "Event 'toggle' disponible"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/details"
    }
  },
  {
    id: "html-dialog",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;dialog&gt;",
    signification: "Boîte de dialogue native",
    description: "Modal/Dialog HTML natif",
    utilite: "Modales sans bibliothèque",
    variantes: [
      "&lt;dialog&gt;",
      "showModal()",
      "show()",
      "close()"
    ],
    exemple: `<!-- HTML -->
<button id="open-dialog">Ouvrir Dialog</button>

<dialog id="my-dialog">
  <h2>Titre du Dialog</h2>
  <p>Contenu du dialog...</p>
  <form method="dialog">
    <button value="cancel">Annuler</button>
    <button value="confirm">Confirmer</button>
  </form>
</dialog>

/* CSS */
dialog {
  border: none;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}

// JavaScript
const dialog = document.getElementById('my-dialog');
const openBtn = document.getElementById('open-dialog');

openBtn.addEventListener('click', () => {
  dialog.showModal(); // Ouvre en modal (avec backdrop)
  // ou dialog.show(); pour non-modal
});

// Fermeture
dialog.addEventListener('close', () => {
  console.log('Valeur retournée:', dialog.returnValue);
});

// Fermer au clic sur backdrop
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});

// Fermer avec ESC (natif)`,
    cas_usage: [
      "Confirmations",
      "Formulaires modaux",
      "Alertes",
      "Lightbox"
    ],
    bonnesPratiques: [
      "showModal() pour backdrop",
      "::backdrop pour styling",
      "form method='dialog' pour fermeture",
      "Accessible nativement"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/dialog"
    }
  },
  {
    id: "html-progress-meter",
    categorie: "html",
    niveau: "avance",
    titre: "&lt;progress&gt; / &lt;meter&gt;",
    signification: "Indicateurs de valeur",
    description: "Barres de progression et jauges natives",
    utilite: "Afficher des métriques et progressions",
    variantes: [
      "&lt;progress&gt;",
      "&lt;meter&gt;",
      "Attributs value/max"
    ],
    exemple: `<!-- Progress bar -->
<label for="file-upload">Progression:</label>
<progress id="file-upload" max="100" value="70">70%</progress>

<!-- Progress indéterminé -->
<progress></progress>

<!-- Meter (jauge) -->
<label for="disk-usage">Utilisation disque:</label>
<meter 
  id="disk-usage" 
  min="0" 
  max="100" 
  low="30" 
  high="80" 
  optimum="20" 
  value="85"
>
  85/100
</meter>

/* CSS pour styliser */
progress {
  width: 100%;
  height: 20px;
  border-radius: 10px;
}

progress::-webkit-progress-bar {
  background: #f0f0f0;
  border-radius: 10px;
}

progress::-webkit-progress-value {
  background: linear-gradient(to right, #4CAF50, #45a049);
  border-radius: 10px;
}

progress::-moz-progress-bar {
  background: linear-gradient(to right, #4CAF50, #45a049);
  border-radius: 10px;
}

meter {
  width: 100%;
  height: 20px;
}

// JavaScript
const progress = document.getElementById('file-upload');

function updateProgress(value) {
  progress.value = value;
}

// Simulation
let value = 0;
const interval = setInterval(() => {
  value += 10;
  updateProgress(value);
  if (value >= 100) clearInterval(interval);
}, 500);`,
    cas_usage: [
      "Upload de fichiers",
      "Chargement",
      "Niveau de batterie",
      "Scores/ratings"
    ],
    bonnesPratiques: [
      "<progress> pour progression",
      "<meter> pour jauges/mesures",
      "Fallback texte dans balise",
      "Stylisation limitée (navigateurs)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/progress"
    }
  },
  {
    id: "html-data-attributes",
    categorie: "html",
    niveau: "avance",
    titre: "Attributs data-*",
    signification: "Données personnalisées",
    description: "Stocker des données custom dans HTML",
    utilite: "Associer des métadonnées aux éléments",
    variantes: [
      "data-*",
      "dataset API",
      "data-kebab-case"
    ],
    exemple: `<!-- HTML avec data attributes -->
<div 
  class="product" 
  data-id="12345"
  data-name="Laptop"
  data-price="999.99"
  data-category="electronics"
  data-in-stock="true"
>
  Laptop - 999€
</div>

<!-- CSS peut utiliser data-* -->
<style>
[data-status="active"] {
  color: green;
}

[data-priority="high"] {
  border-left: 4px solid red;
}

/* Content avec attr() */
.tooltip::after {
  content: attr(data-tooltip);
}
</style>

// JavaScript - Accès avec dataset
const product = document.querySelector('.product');

// Lire
console.log(product.dataset.id);        // "12345"
console.log(product.dataset.name);      // "Laptop"
console.log(product.dataset.price);     // "999.99"
console.log(product.dataset.inStock);   // "true" (camelCase!)

// Écrire
product.dataset.featured = 'true';
product.dataset.discountPercent = '10';

// Supprimer
delete product.dataset.category;

// Exemple pratique: Filtrage
const items = document.querySelectorAll('[data-category]');
const filterBtn = document.querySelectorAll('[data-filter]');

filterBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    
    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});`,
    cas_usage: [
      "Configuration d'éléments",
      "Métadonnées",
      "State management",
      "Filtres et tri"
    ],
    bonnesPratiques: [
      "Nommer en kebab-case (data-my-value)",
      "dataset convertit en camelCase JS",
      "Toujours string (parser si besoin)",
      "Alternative aux classes pour données"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Learn/HTML/Howto/Use_data_attributes"
    }
  },
  {
    id: "html-aria",
    categorie: "html",
    niveau: "avance",
    titre: "Attributs ARIA",
    signification: "Accessible Rich Internet Applications",
    description: "Améliorer l'accessibilité des applications web",
    utilite: "Rendre les interfaces accessibles aux lecteurs d'écran",
    variantes: [
      "role",
      "aria-label",
      "aria-labelledby",
      "aria-expanded",
      "aria-hidden"
    ],
    exemple: `<!-- Rôles -->
<nav role="navigation">
  <ul role="menubar">
    <li role="menuitem"><a href="/">Accueil</a></li>
  </ul>
</nav>

<!-- Labels -->
<button aria-label="Fermer le modal">
  ×
</button>

<div aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirmation</h2>
</div>

<!-- États -->
<button 
  aria-expanded="false" 
  aria-controls="menu"
>
  Menu
</button>

<div id="menu" aria-hidden="true">
  <!-- Contenu du menu -->
</div>

<!-- Live regions -->
<div 
  role="alert" 
  aria-live="polite" 
  aria-atomic="true"
>
  Message de confirmation
</div>

<!-- Formulaire accessible -->
<label for="email">Email:</label>
<input 
  type="email" 
  id="email"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="email-error"
>
<span id="email-error" role="alert"></span>

// JavaScript
const btn = document.querySelector('[aria-expanded]');
const menu = document.querySelector('#menu');

btn.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  
  btn.setAttribute('aria-expanded', !expanded);
  menu.setAttribute('aria-hidden', expanded);
});

// Annoncer aux lecteurs d'écran
function announce(message) {
  const liveRegion = document.querySelector('[role="status"]');
  liveRegion.textContent = message;
  
  setTimeout(() => {
    liveRegion.textContent = '';
  }, 1000);
}`,
    cas_usage: [
      "Applications web complexes",
      "Widgets custom",
      "Navigation dynamique",
      "Formulaires avancés"
    ],
    bonnesPratiques: [
      "Ne pas sur-utiliser (HTML sémantique d'abord)",
      "Tester avec lecteur d'écran",
      "Garder synchronisé avec état visuel",
      "aria-live pour notifications"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA",
      w3schools: "https://www.w3.org/WAI/ARIA/apg/"
    }
  }
];