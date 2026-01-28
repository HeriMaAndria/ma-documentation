// ========================================
// FUSION DES DONNÉES
// ========================================
const ressourcesData = [
  ...(window.ressourcesHTMLBase || []),
  ...(window.ressourcesCSSBase || []),
  ...(window.ressourcesJSBase || []),
  ...(window.ressourcesCombineBase || []),
  ...(window.ressourcesHTMLInter || []),
  ...(window.ressourcesCSSInter || []),
  ...(window.ressourcesJSInter || []),
  ...(window.ressourcesCombineInter || []),
  ...(window.ressourcesHTMLAvance || []),
  ...(window.ressourcesCSSAvance || []),
  ...(window.ressourcesJSAvance || []),
  ...(window.ressourcesCombineAvance || [])
];

console.log('📚 Ressources chargées:', ressourcesData.length);

// ========================================
// GÉNÉRATION DES CARTES (BEM)
// ========================================
function creerCarteRessource(ressource) {
  // Badge niveau
  const niveauBadge = `<span class="badge badge--level-${ressource.niveau}">${ressource.niveau}</span>`;

  // Badges catégorie
  let badgesHTML = '';
  if (ressource.categorie === 'combine') {
    badgesHTML = `
      <div class="badges-multi">
        <span class="badge badge--html">HTML</span>
        <span class="badge badge--css">CSS</span>
        <span class="badge badge--js">JS</span>
      </div>
    `;
  } else {
    badgesHTML = `<span class="badge badge--${ressource.categorie}">${ressource.categorie.toUpperCase()}</span>`;
  }

  // Variantes
  const variantesHTML = ressource.variantes
    .map(v => `<li class="resource-card__variants-item">${v}</li>`)
    .join('');

  // Cas d'usage
  let casUsageHTML = '';
  if (ressource.cas_usage && ressource.cas_usage.length > 0) {
    const casListe = ressource.cas_usage.map(c => `<li class="resource-card__list-item">💡 ${c}</li>`).join('');
    casUsageHTML = `
      <div class="resource-card__section">
        <h4 class="resource-card__section-title">💡 Cas d'usage</h4>
        <ul class="resource-card__list">${casListe}</ul>
      </div>
    `;
  }

  // Pièges communs
  let piegesHTML = '';
  if (ressource.piegesCommuns && ressource.piegesCommuns.length > 0) {
    const piegesListe = ressource.piegesCommuns.map(p => `<li class="resource-card__list-item">⚠️ ${p}</li>`).join('');
    piegesHTML = `
      <div class="resource-card__section">
        <h4 class="resource-card__section-title">⚠️ Pièges à éviter</h4>
        <ul class="resource-card__list">${piegesListe}</ul>
      </div>
    `;
  }

  // Bonnes pratiques
  let bonnesPratiquesHTML = '';
  if (ressource.bonnesPratiques && ressource.bonnesPratiques.length > 0) {
    const pratiquesListe = ressource.bonnesPratiques.map(p => `<li class="resource-card__list-item">✅ ${p}</li>`).join('');
    bonnesPratiquesHTML = `
      <div class="resource-card__section">
        <h4 class="resource-card__section-title">✅ Bonnes pratiques</h4>
        <ul class="resource-card__list">${pratiquesListe}</ul>
      </div>
    `;
  }

  // Liens externes
  let liensHTML = '';
  if (ressource.liens) {
    const liensDisponibles = [];
    if (ressource.liens.mdn) liensDisponibles.push(`<a href="${ressource.liens.mdn}" target="_blank" rel="noopener" class="resource-card__link">📚 MDN</a>`);
    if (ressource.liens.w3schools) liensDisponibles.push(`<a href="${ressource.liens.w3schools}" target="_blank" rel="noopener" class="resource-card__link">📖 W3Schools</a>`);
    if (ressource.liens.tutorial) liensDisponibles.push(`<a href="${ressource.liens.tutorial}" target="_blank" rel="noopener" class="resource-card__link">🎓 Tutorial</a>`);
    if (ressource.liens.video) liensDisponibles.push(`<a href="${ressource.liens.video}" target="_blank" rel="noopener" class="resource-card__link">🎥 Vidéo</a>`);
    if (ressource.liens.playground) liensDisponibles.push(`<a href="${ressource.liens.playground}" target="_blank" rel="noopener" class="resource-card__link">🎮 Playground</a>`);

    if (liensDisponibles.length > 0) {
      liensHTML = `
        <div class="resource-card__section">
          <h4 class="resource-card__section-title">📎 Ressources externes</h4>
          <div class="resource-card__links">${liensDisponibles.join('')}</div>
        </div>
      `;
    }
  }

  return `
    <article class="resource-card"
             data-categorie="${ressource.categorie}" 
             data-niveau="${ressource.niveau}"
             data-id="${ressource.id}"
             data-titre="${ressource.titre.toLowerCase()}"
             data-description="${ressource.description ? ressource.description.toLowerCase() : ''}"
             data-search-terms="${[
               ressource.titre,
               ressource.signification,
               ressource.description || '',
               ressource.utilite,
               ...(ressource.variantes || []),
               ...(ressource.cas_usage || [])
             ].join(' ').toLowerCase()}">
      
      <header class="resource-card__header">
        <div class="resource-card__header-top">
          <h3 class="resource-card__title">${ressource.titre}</h3>
          ${niveauBadge}
        </div>
        <div class="resource-card__meta">
          ${badgesHTML}
          <span class="resource-card__meaning">📌 ${ressource.signification}</span>
        </div>
      </header>
      
      <div class="resource-card__body">
        ${ressource.description ? `<p class="resource-card__description">${ressource.description}</p>` : ''}
        
        <p class="resource-card__utility"><strong>🎯 Utilité :</strong> ${ressource.utilite}</p>
        
        ${casUsageHTML}
        
        <div class="resource-card__variants">
          <h4 class="resource-card__variants-title">🔧 Variantes</h4>
          <ul class="resource-card__variants-list">${variantesHTML}</ul>
        </div>
        
        ${piegesHTML}
        ${bonnesPratiquesHTML}
        
        <div class="code-example">
          <h4 class="code-example__title">💻 Exemple</h4>
          <pre class="code-example__content"><code>${ressource.exemple}</code></pre>
        </div>
        
        ${liensHTML}
      </div>
    </article>
  `;
}

// ========================================
// GÉNÉRATION INITIALE
// ========================================
function genererToutesLesCartes() {
  if (!ressourcesData || !Array.isArray(ressourcesData)) {
    console.error('❌ Erreur : ressourcesData invalide');
    return;
  }

  // Grouper par catégorie
  const parCategorie = {
    html: ressourcesData.filter(r => r.categorie === 'html'),
    css: ressourcesData.filter(r => r.categorie === 'css'),
    js: ressourcesData.filter(r => r.categorie === 'js'),
    combine: ressourcesData.filter(r => r.categorie === 'combine')
  };

  // Sélecteurs des grilles
  const grids = {
    html: document.querySelector('#section-html .resources-grid'),
    css: document.querySelector('#section-css .resources-grid'),
    js: document.querySelector('#section-js .resources-grid'),
    combine: document.querySelector('#section-combine .resources-grid')
  };

  // Injecter les cartes
  Object.keys(parCategorie).forEach(categorie => {
    const grid = grids[categorie];
    const ressources = parCategorie[categorie];

    if (grid) {
      if (ressources.length > 0) {
        grid.innerHTML = ressources.map(creerCarteRessource).join('');
      } else {
        grid.innerHTML = '';
      }
    }
  });

  console.log('✅ Cartes générées');
  console.log('  - HTML:', parCategorie.html.length);
  console.log('  - CSS:', parCategorie.css.length);
  console.log('  - JavaScript:', parCategorie.js.length);
  console.log('  - Multi-Languages:', parCategorie.combine.length);
}

// ========================================
// SYSTÈME DE FILTRES OPTIMISÉ
// ========================================
let filtreActuel = {
  categorie: 'tous',
  recherche: ''
};

function appliquerFiltres() {
  const cartes = document.querySelectorAll('.resource-card');
  const sections = document.querySelectorAll('.resources-section');
  const noResults = document.getElementById('noResults');
  
  let cartesVisibles = 0;
  const sectionsAvecCartes = new Set();

  // Normaliser la recherche
  const rechercheNormalisee = filtreActuel.recherche.toLowerCase().trim();

  cartes.forEach(carte => {
    const categorie = carte.getAttribute('data-categorie');
    const searchTerms = carte.getAttribute('data-search-terms');

    // Filtre catégorie
    const correspondCategorie = (filtreActuel.categorie === 'tous' || categorie === filtreActuel.categorie);

    // Filtre recherche (recherche dans tous les termes)
    const correspondRecherche = !rechercheNormalisee || searchTerms.includes(rechercheNormalisee);

    if (correspondCategorie && correspondRecherche) {
      carte.classList.remove('hidden');
      carte.classList.add('visible');
      cartesVisibles++;

      // Marquer la section comme ayant des cartes visibles
      const section = carte.closest('.resources-section');
      if (section) {
        sectionsAvecCartes.add(section);
      }
    } else {
      carte.classList.add('hidden');
      carte.classList.remove('visible');
    }
  });

  // Gérer l'affichage des sections
  sections.forEach(section => {
    const sectionCategorie = section.id.replace('section-', '');
    
    if (filtreActuel.categorie === 'tous') {
      // Mode "Tous" : afficher la section si elle a des cartes visibles
      if (sectionsAvecCartes.has(section)) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    } else {
      // Mode filtre spécifique : afficher uniquement la section correspondante
      if (sectionCategorie === filtreActuel.categorie && sectionsAvecCartes.has(section)) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    }
  });

  // Message "aucun résultat"
  if (noResults) {
    if (cartesVisibles === 0) {
      noResults.style.display = 'block';
      sections.forEach(s => s.classList.add('hidden'));
    } else {
      noResults.style.display = 'none';
    }
  }

  console.log(`🔍 Filtres appliqués: ${cartesVisibles} cartes visibles`);
}

function initialiserFiltres() {
  const filtresBtns = document.querySelectorAll('.filters__btn');

  filtresBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Retirer la classe active de tous les boutons
      filtresBtns.forEach(b => {
        b.classList.remove('filters__btn--active');
        b.setAttribute('aria-pressed', 'false');
      });

      // Ajouter la classe active au bouton cliqué
      btn.classList.add('filters__btn--active');
      btn.setAttribute('aria-pressed', 'true');

      // Mettre à jour le filtre
      filtreActuel.categorie = btn.getAttribute('data-filtre');

      // Appliquer les filtres
      appliquerFiltres();
    });
  });

  console.log('✅ Filtres initialisés');
}

// ========================================
// SYSTÈME DE RECHERCHE OPTIMISÉ
// ========================================
function initialiserRecherche() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  
  let rechercheTimeout;

  searchInput.addEventListener('input', (e) => {
    // Debounce pour éviter trop d'appels
    clearTimeout(rechercheTimeout);
    
    rechercheTimeout = setTimeout(() => {
      filtreActuel.recherche = e.target.value;
      appliquerFiltres();
      
      // Afficher/masquer le bouton clear
      if (e.target.value) {
        clearBtn.style.opacity = '1';
        clearBtn.style.pointerEvents = 'auto';
      } else {
        clearBtn.style.opacity = '0.3';
        clearBtn.style.pointerEvents = 'none';
      }
    }, 300);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    filtreActuel.recherche = '';
    clearBtn.style.opacity = '0.3';
    clearBtn.style.pointerEvents = 'none';
    appliquerFiltres();
    searchInput.focus();
  });

  // État initial du bouton clear
  clearBtn.style.opacity = '0.3';
  clearBtn.style.pointerEvents = 'none';

  console.log('✅ Recherche initialisée');
}

// ========================================
// NAVIGATION SIDEBAR
// ========================================
function initialiserNavigation() {
  const navLinks = document.querySelectorAll('.sidebar__link');
  const toggleBtn = document.getElementById('toggleSommaire');
  const sidebar = document.getElementById('sommaire');

  // Navigation active
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Retirer la classe active de tous les liens
      navLinks.forEach(l => l.classList.remove('sidebar__link--active'));
      
      // Ajouter la classe active au lien cliqué
      link.classList.add('sidebar__link--active');
      
      // Scroll vers la section
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Fermer le sidebar sur mobile
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('sidebar--open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Toggle sidebar mobile
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--open');
      const isOpen = sidebar.classList.contains('sidebar--open');
      toggleBtn.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  // Fermer le sidebar en cliquant à l'extérieur (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && sidebar.classList.contains('sidebar--open')) {
        sidebar.classList.remove('sidebar--open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  console.log('✅ Navigation initialisée');
}

// ========================================
// SCROLL SPY (mettre à jour nav active au scroll)
// ========================================
function initialiserScrollSpy() {
  const sections = document.querySelectorAll('.resources-section');
  const navLinks = document.querySelectorAll('.sidebar__link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -75% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Mettre à jour la navigation
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            navLinks.forEach(l => l.classList.remove('sidebar__link--active'));
            link.classList.add('sidebar__link--active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  console.log('✅ Scroll spy initialisé');
}

// ========================================
// INITIALISATION GLOBALE
// ========================================
function init() {
  console.log('🚀 Initialisation de l\'application');

  try {
    // Générer les cartes
    genererToutesLesCartes();

    // Initialiser les fonctionnalités
    initialiserFiltres();
    initialiserRecherche();
    initialiserNavigation();
    initialiserScrollSpy();

    console.log('✅ Application initialisée avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
  }
}

// Lancer l'initialisation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
