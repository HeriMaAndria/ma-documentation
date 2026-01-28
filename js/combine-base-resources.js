window.ressourcesCombineBase = [
  {
    id: "combine-accordeon",
    categorie: "combine",
    niveau: "base",
    titre: "Accordéon",
    signification: "Menu extensible",
    description: "Système de panneaux qui s'ouvrent/ferment au clic",
    utilite: "Organiser du contenu en sections collapsables",
    variantes: [
      "Accordéon simple",
      "Accordéon avec icônes",
      "Multi-ouverture"
    ],
    exemple: `<!-- HTML -->
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-content">
      <p>Contenu de la section 1</p>
    </div>
  </div>
</div>

/* CSS */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-content.active {
  max-height: 500px;
}

// JavaScript
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('active');
  });
});`,
    cas_usage: [
      "FAQ",
      "Menus de navigation",
      "Sections de contenu",
      "Paramètres"
    ],
    bonnesPratiques: [
      "Utiliser max-height pour l'animation",
      "Ajouter des icônes indicatrices",
      "Accessibilité: aria-expanded",
      "Animation smooth"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_accordion.asp"
    }
  },
  {
    id: "combine-tabs",
    categorie: "combine",
    niveau: "base",
    titre: "Tabs / Onglets",
    signification: "Navigation par onglets",
    description: "Système de navigation entre différents contenus",
    utilite: "Organiser du contenu en sections accessibles par onglets",
    variantes: [
      "Onglets horizontaux",
      "Onglets verticaux",
      "Onglets avec icônes"
    ],
    exemple: `<!-- HTML -->
<div class="tabs">
  <button class="tab-btn active" data-tab="tab1">Onglet 1</button>
  <button class="tab-btn" data-tab="tab2">Onglet 2</button>
</div>
<div class="tab-content active" id="tab1">Contenu 1</div>
<div class="tab-content" id="tab2">Contenu 2</div>

/* CSS */
.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}
.tab-btn.active {
  border-bottom: 2px solid blue;
}

// JavaScript
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;
    
    document.querySelectorAll('.tab-btn').forEach(b => 
      b.classList.remove('active')
    );
    document.querySelectorAll('.tab-content').forEach(c => 
      c.classList.remove('active')
    );
    
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});`,
    cas_usage: [
      "Profils utilisateur",
      "Dashboards",
      "Formulaires multi-sections",
      "Produits avec variantes"
    ],
    bonnesPratiques: [
      "Un seul onglet actif à la fois",
      "Indicateur visuel clair",
      "data-* pour lier bouton et contenu",
      "Accessibilité: role='tablist'"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_tabs.asp"
    }
  },
  {
    id: "combine-tooltip",
    categorie: "combine",
    niveau: "base",
    titre: "Tooltip",
    signification: "Info-bulle",
    description: "Petite fenêtre d'information au survol",
    utilite: "Afficher des informations contextuelles",
    variantes: [
      "Tooltip au survol",
      "Tooltip au clic",
      "Tooltip avec flèche"
    ],
    exemple: `<!-- HTML -->
<button class="btn" data-tooltip="Cliquez pour enregistrer">
  Enregistrer
</button>

/* CSS */
[data-tooltip] {
  position: relative;
}

[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background: #333;
  color: white;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

[data-tooltip]:hover::after {
  opacity: 1;
}

// JavaScript (optionnel pour tooltip avancé)
const tooltipElements = document.querySelectorAll('[data-tooltip]');
tooltipElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    // Créer tooltip dynamique
  });
});`,
    cas_usage: [
      "Aide contextuelle",
      "Descriptions d'icônes",
      "Informations supplémentaires",
      "Validations de formulaire"
    ],
    bonnesPratiques: [
      "Utiliser data-tooltip pour le texte",
      "::after pour tooltip pur CSS",
      "Positionner intelligemment (viewport)",
      "Court et concis"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/css/css_tooltip.asp"
    }
  },
  {
    id: "combine-dropdown",
    categorie: "combine",
    niveau: "base",
    titre: "Dropdown Menu",
    signification: "Menu déroulant",
    description: "Menu qui apparaît au clic ou survol",
    utilite: "Navigation avec sous-menus",
    variantes: [
      "Dropdown au clic",
      "Dropdown au survol",
      "Mega menu"
    ],
    exemple: `<!-- HTML -->
<div class="dropdown">
  <button class="dropdown-btn">Menu</button>
  <div class="dropdown-content">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
  </div>
</div>

/* CSS */
.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 200px;
}

.dropdown-content.show {
  display: block;
}

// JavaScript
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Fermer si clic ailleurs
window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdown-btn')) {
    dropdownContent.classList.remove('show');
  }
});`,
    cas_usage: [
      "Menus de navigation",
      "Sélecteurs personnalisés",
      "Actions contextuelles",
      "Profil utilisateur"
    ],
    bonnesPratiques: [
      "Fermer au clic extérieur",
      "position: absolute sur le menu",
      "z-index approprié",
      "Responsive (mobile-friendly)"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_dropdown.asp"
    }
  },
  {
    id: "combine-burger-menu",
    categorie: "combine",
    niveau: "base",
    titre: "Burger Menu",
    signification: "Menu hamburger mobile",
    description: "Menu de navigation pour mobile (3 barres)",
    utilite: "Navigation responsive sur petits écrans",
    variantes: [
      "Slide-in menu",
      "Overlay menu",
      "Push menu"
    ],
    exemple: `<!-- HTML -->
<button class="burger-btn">
  <span></span>
  <span></span>
  <span></span>
</button>
<nav class="mobile-menu">
  <a href="#">Accueil</a>
  <a href="#">À propos</a>
  <a href="#">Contact</a>
</nav>

/* CSS */
.burger-btn {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.burger-btn span {
  width: 25px;
  height: 3px;
  background: #333;
  transition: 0.3s;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background: white;
  transition: right 0.3s;
}

.mobile-menu.active {
  right: 0;
}

// JavaScript
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
});`,
    cas_usage: [
      "Navigation mobile",
      "Responsive design",
      "Applications web",
      "Sites mobile-first"
    ],
    bonnesPratiques: [
      "Animation des barres en X",
      "Overlay avec fond sombre",
      "Fermeture au clic extérieur",
      "Media queries pour affichage"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_mobile_navbar.asp"
    }
  },
  {
    id: "combine-breadcrumb",
    categorie: "combine",
    niveau: "base",
    titre: "Breadcrumb",
    signification: "Fil d'Ariane",
    description: "Navigation indiquant le chemin actuel",
    utilite: "Montrer la position dans la hiérarchie du site",
    variantes: [
      "Breadcrumb simple",
      "Breadcrumb avec icônes",
      "Breadcrumb dynamique"
    ],
    exemple: `<!-- HTML -->
<nav class="breadcrumb">
  <a href="/">Accueil</a>
  <span>/</span>
  <a href="/categorie">Catégorie</a>
  <span>/</span>
  <span>Page actuelle</span>
</nav>

/* CSS */
.breadcrumb {
  display: flex;
  gap: 8px;
  padding: 10px 0;
  font-size: 14px;
}

.breadcrumb a {
  color: #0066cc;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb span:last-child {
  color: #666;
  font-weight: bold;
}

// JavaScript (génération dynamique)
const path = window.location.pathname.split('/').filter(Boolean);
const breadcrumb = document.querySelector('.breadcrumb');

path.forEach((segment, index) => {
  const link = document.createElement('a');
  link.href = '/' + path.slice(0, index + 1).join('/');
  link.textContent = segment;
  breadcrumb.appendChild(link);
});`,
    cas_usage: [
      "Sites e-commerce",
      "Documentation",
      "Sites avec hiérarchie",
      "Navigation de retour"
    ],
    bonnesPratiques: [
      "Toujours commencer par Accueil",
      "Dernier élément non cliquable",
      "Séparateurs visuels (/, >, →)",
      "SEO: utiliser <nav> et schema.org"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_css_breadcrumbs.asp"
    }
  },
  {
    id: "combine-pagination",
    categorie: "combine",
    niveau: "base",
    titre: "Pagination",
    signification: "Navigation de pages",
    description: "Système de navigation entre plusieurs pages",
    utilite: "Diviser du contenu en plusieurs pages",
    variantes: [
      "Pagination numérotée",
      "Prev/Next simple",
      "Pagination infinie"
    ],
    exemple: `<!-- HTML -->
<div class="pagination">
  <button class="prev">Précédent</button>
  <button class="page active">1</button>
  <button class="page">2</button>
  <button class="page">3</button>
  <button class="next">Suivant</button>
</div>

/* CSS */
.pagination {
  display: flex;
  gap: 5px;
}

.pagination button {
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.pagination button.active {
  background: #0066cc;
  color: white;
  border-color: #0066cc;
}

// JavaScript
const pages = document.querySelectorAll('.page');
let currentPage = 1;

pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    pages.forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    currentPage = index + 1;
    loadPage(currentPage);
  });
});

function loadPage(pageNum) {
  console.log('Chargement page', pageNum);
}`,
    cas_usage: [
      "Listes de produits",
      "Résultats de recherche",
      "Articles de blog",
      "Tableaux de données"
    ],
    bonnesPratiques: [
      "Indiquer la page actuelle",
      "Désactiver Prev/Next aux limites",
      "Afficher nombre total de pages",
      "URL avec paramètre de page"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_css_pagination.asp"
    }
  },
  {
    id: "combine-badge",
    categorie: "combine",
    niveau: "base",
    titre: "Badge / Tag",
    signification: "Étiquettes",
    description: "Petits labels pour catégoriser ou notifier",
    utilite: "Afficher des statuts, catégories ou compteurs",
    variantes: [
      "Badge de notification",
      "Tag de catégorie",
      "Badge de statut"
    ],
    exemple: `<!-- HTML -->
<button class="btn">
  Messages
  <span class="badge">5</span>
</button>

<div class="tags">
  <span class="tag">JavaScript</span>
  <span class="tag">CSS</span>
  <span class="tag">HTML</span>
</div>

/* CSS */
.badge {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: -5px;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background: #e0e0e0;
  border-radius: 16px;
  font-size: 14px;
  margin: 4px;
}

// JavaScript (mise à jour dynamique)
function updateBadge(count) {
  const badge = document.querySelector('.badge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline' : 'none';
}

updateBadge(5);`,
    cas_usage: [
      "Notifications non lues",
      "Catégories d'articles",
      "Statuts (nouveau, promo)",
      "Compteurs"
    ],
    bonnesPratiques: [
      "Couleurs selon le contexte",
      "Masquer si compteur = 0",
      "Position relative sur le parent",
      "Taille réduite (ne pas surcharger)"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_css_badges.asp"
    }
  },
  {
    id: "combine-alert",
    categorie: "combine",
    niveau: "base",
    titre: "Alert / Toast",
    signification: "Notifications",
    description: "Messages d'information temporaires",
    utilite: "Informer l'utilisateur d'événements",
    variantes: [
      "Alert statique",
      "Toast animé",
      "Snackbar"
    ],
    exemple: `<!-- HTML -->
<div class="alert success">
  <span>Opération réussie!</span>
  <button class="close">&times;</button>
</div>

/* CSS */
.alert {
  padding: 15px 20px;
  margin: 10px 0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alert.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert.error {
  background: #f8d7da;
  color: #721c24;
}

// JavaScript
function showAlert(message, type = 'success') {
  const alert = document.createElement('div');
  alert.className = \`alert \${type}\`;
  alert.innerHTML = \`
    <span>\${message}</span>
    <button class="close">&times;</button>
  \`;
  
  document.body.appendChild(alert);
  
  alert.querySelector('.close').addEventListener('click', () => {
    alert.remove();
  });
  
  // Auto-fermeture après 3s
  setTimeout(() => alert.remove(), 3000);
}

showAlert('Sauvegarde réussie!', 'success');`,
    cas_usage: [
      "Confirmations d'action",
      "Messages d'erreur",
      "Notifications système",
      "Feedbacks utilisateur"
    ],
    bonnesPratiques: [
      "Couleurs selon le type (succès, erreur, info)",
      "Bouton de fermeture",
      "Auto-fermeture (3-5 secondes)",
      "Position fixe (top/bottom)"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_alert.asp"
    }
  },
  {
    id: "combine-skeleton",
    categorie: "combine",
    niveau: "base",
    titre: "Skeleton Loading",
    signification: "Chargement par squelette",
    description: "Placeholders animés pendant le chargement",
    utilite: "Améliorer l'expérience pendant le chargement",
    variantes: [
      "Skeleton simple",
      "Skeleton avec animation",
      "Skeleton cards"
    ],
    exemple: `<!-- HTML -->
<div class="skeleton-card">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text short"></div>
</div>

/* CSS */
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-image {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}

.skeleton-title {
  height: 20px;
  width: 60%;
  margin-bottom: 8px;
}

.skeleton-text {
  height: 14px;
  width: 100%;
  margin-bottom: 6px;
}

.skeleton-text.short {
  width: 80%;
}

// JavaScript
function showSkeleton() {
  document.querySelector('.content').innerHTML = '<div class="skeleton-card">...</div>';
}

function loadContent() {
  // Simuler chargement
  showSkeleton();
  
  setTimeout(() => {
    document.querySelector('.content').innerHTML = '<div>Contenu chargé!</div>';
  }, 2000);
}`,
    cas_usage: [
      "Chargement de cartes",
      "Listes de produits",
      "Profils utilisateur",
      "Feeds sociaux"
    ],
    bonnesPratiques: [
      "Dimensions similaires au contenu final",
      "Animation subtile",
      "Couleurs neutres",
      "Transition smooth vers le contenu réel"
    ],
    liens: {
      tutorial: "https://css-tricks.com/building-skeleton-screens-css-custom-properties/"
    }
  }
];
