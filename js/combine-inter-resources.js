window.ressourcesCombineInter = [
  {
    id: "combine-dark-mode",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Dark Mode Toggle",
    signification: "Basculer entre thème clair et sombre",
    description: "Système pour changer de thème avec persistance",
    utilite: "Offrir un choix de thème à l'utilisateur",
    variantes: [
      "Toggle simple",
      "Auto (system preference)",
      "3 modes (light/dark/auto)"
    ],
    exemple: `<!-- HTML -->
<button id="theme-toggle">🌙 Dark Mode</button>

/* CSS */
:root {
  --bg-color: white;
  --text-color: #333;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
  transition: background 0.3s, color 0.3s;
}

// JavaScript
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Charger la préférence
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

toggle.addEventListener('click', () => {
  const theme = html.getAttribute('data-theme');
  const newTheme = theme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  toggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});`,
    cas_usage: [
      "Sites modernes",
      "Applications",
      "Blogs",
      "Dashboards"
    ],
    bonnesPratiques: [
      "Variables CSS pour couleurs",
      "localStorage pour persistance",
      "Respecter prefers-color-scheme",
      "Transition smooth"
    ],
    liens: {
      tutorial: "https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/"
    }
  },
  {
    id: "combine-modal",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Modal / Popup",
    signification: "Fenêtre modale",
    description: "Overlay qui bloque l'interaction avec le reste de la page",
    utilite: "Afficher du contenu important ou des formulaires",
    variantes: [
      "Modal centré",
      "Modal avec animation",
      "Modal fullscreen"
    ],
    exemple: `<!-- HTML -->
<button id="open-modal">Ouvrir</button>

<div class="modal-overlay" id="modal">
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <h2>Titre du Modal</h2>
    <p>Contenu du modal...</p>
  </div>
</div>

/* CSS */
.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}

.modal-overlay.active {
  display: flex;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
}

// JavaScript
const modal = document.getElementById('modal');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.querySelector('.modal-close');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = '';
});

// Fermer au clic sur overlay
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});`,
    cas_usage: [
      "Confirmations",
      "Formulaires",
      "Galleries d'images",
      "Vidéos"
    ],
    bonnesPratiques: [
      "Bloquer le scroll du body",
      "Fermeture ESC et clic overlay",
      "Focus trap pour accessibilité",
      "Animation d'entrée/sortie"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_css_modals.asp"
    }
  },
  {
    id: "combine-carousel",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Carousel / Slider",
    signification: "Carrousel d'images",
    description: "Défilement d'images ou de contenu",
    utilite: "Afficher plusieurs éléments dans un espace limité",
    variantes: [
      "Carousel automatique",
      "Carousel avec controls",
      "Infinite loop"
    ],
    exemple: `<!-- HTML -->
<div class="carousel">
  <button class="carousel-btn prev">‹</button>
  <div class="carousel-track">
    <div class="carousel-slide active">
      <img src="image1.jpg" alt="Slide 1">
    </div>
    <div class="carousel-slide">
      <img src="image2.jpg" alt="Slide 2">
    </div>
    <div class="carousel-slide">
      <img src="image3.jpg" alt="Slide 3">
    </div>
  </div>
  <button class="carousel-btn next">›</button>
  <div class="carousel-dots"></div>
</div>

/* CSS */
.carousel {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.carousel-track {
  position: relative;
  overflow: hidden;
}

.carousel-slide {
  display: none;
}

.carousel-slide.active {
  display: block;
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 30px;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 10;
}

.carousel-btn.prev { left: 10px; }
.carousel-btn.next { right: 10px; }

.carousel-dots {
  text-align: center;
  padding: 20px;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #bbb;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background: #333;
}

// JavaScript
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');
let currentSlide = 0;

// Créer les dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  currentSlide = (n + slides.length) % slides.length;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});

// Auto-play
setInterval(() => {
  goToSlide(currentSlide + 1);
}, 5000);`,
    cas_usage: [
      "Galleries d'images",
      "Témoignages",
      "Produits",
      "Hero sections"
    ],
    bonnesPratiques: [
      "Indicateurs de position (dots)",
      "Pause au hover",
      "Swipe sur mobile",
      "Lazy loading des images"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_slideshow.asp"
    }
  },
  {
    id: "combine-image-gallery",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Image Gallery",
    signification: "Galerie d'images avec lightbox",
    description: "Grid d'images avec zoom en modal",
    utilite: "Afficher des collections d'images",
    variantes: [
      "Grid gallery",
      "Masonry layout",
      "Lightbox"
    ],
    exemple: `<!-- HTML -->
<div class="gallery">
  <img src="thumb1.jpg" alt="Image 1" data-full="full1.jpg">
  <img src="thumb2.jpg" alt="Image 2" data-full="full2.jpg">
  <img src="thumb3.jpg" alt="Image 3" data-full="full3.jpg">
</div>

<div class="lightbox" id="lightbox">
  <span class="close">&times;</span>
  <img class="lightbox-img" src="" alt="">
</div>

/* CSS */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}

.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}

.lightbox.active {
  display: flex;
}

.lightbox-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox .close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
  font-size: 40px;
  cursor: pointer;
}

// JavaScript
const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

gallery.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.dataset.full || img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});`,
    cas_usage: [
      "Portfolios",
      "E-commerce",
      "Blogs photos",
      "Documentation"
    ],
    bonnesPratiques: [
      "Thumbnails pour performance",
      "data-* pour images full size",
      "Lazy loading",
      "Navigation prev/next dans lightbox"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_lightbox.asp"
    }
  },
  {
    id: "combine-form-validation",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Form Validation",
    signification: "Validation de formulaire",
    description: "Vérification des données avant soumission",
    utilite: "Assurer la qualité des données saisies",
    variantes: [
      "Validation HTML5",
      "Validation JavaScript custom",
      "Validation en temps réel"
    ],
    exemple: `<!-- HTML -->
<form id="signup-form" novalidate>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <span class="error-message"></span>
  </div>
  
  <div class="form-group">
    <label for="password">Mot de passe:</label>
    <input type="password" id="password" name="password" required>
    <span class="error-message"></span>
  </div>
  
  <button type="submit">S'inscrire</button>
</form>

/* CSS */
.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input.invalid {
  border-color: #e74c3c;
}

input.valid {
  border-color: #27ae60;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  display: none;
  margin-top: 5px;
}

.error-message.active {
  display: block;
}

// JavaScript
const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

const validators = {
  email: (value) => {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(value) ? '' : 'Email invalide';
  },
  password: (value) => {
    if (value.length < 8) return 'Min 8 caractères';
    if (!/[A-Z]/.test(value)) return 'Une majuscule requise';
    if (!/[0-9]/.test(value)) return 'Un chiffre requis';
    return '';
  }
};

function validateField(input) {
  const error = validators[input.name](input.value);
  const errorMsg = input.parentElement.querySelector('.error-message');
  
  if (error) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorMsg.textContent = error;
    errorMsg.classList.add('active');
    return false;
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorMsg.classList.remove('active');
    return true;
  }
}

// Validation en temps réel
[email, password].forEach(input => {
  input.addEventListener('blur', () => validateField(input));
  input.addEventListener('input', () => {
    if (input.classList.contains('invalid')) {
      validateField(input);
    }
  });
});

// Validation à la soumission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isEmailValid = validateField(email);
  const isPasswordValid = validateField(password);
  
  if (isEmailValid && isPasswordValid) {
    console.log('Form valide!');
    // Soumettre les données
  }
});`,
    cas_usage: [
      "Formulaires d'inscription",
      "Contact",
      "Checkout",
      "Profils utilisateur"
    ],
    bonnesPratiques: [
      "Validation côté client ET serveur",
      "Messages d'erreur clairs",
      "Feedback visuel immédiat",
      "Pattern HTML5 + JS custom"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/js/js_validation.asp"
    }
  },
  {
    id: "combine-progress-bar",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Progress Bar",
    signification: "Barre de progression",
    description: "Indicateur visuel de progression",
    utilite: "Montrer l'avancement d'un processus",
    variantes: [
      "Progress bar simple",
      "Circular progress",
      "Multi-step progress"
    ],
    exemple: `<!-- HTML -->
<div class="progress-container">
  <div class="progress-bar" id="progress"></div>
  <span class="progress-text">0%</span>
</div>
<button id="start">Démarrer</button>

/* CSS */
.progress-container {
  width: 100%;
  background: #e0e0e0;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  height: 30px;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(to right, #4CAF50, #45a049);
  width: 0%;
  transition: width 0.3s ease;
  border-radius: 25px;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: #333;
}

// JavaScript
const progressBar = document.getElementById('progress');
const progressText = document.querySelector('.progress-text');
const startBtn = document.getElementById('start');

function updateProgress(percent) {
  progressBar.style.width = percent + '%';
  progressText.textContent = percent + '%';
}

// Simulation de progression
startBtn.addEventListener('click', () => {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    updateProgress(progress);
    
    if (progress >= 100) {
      clearInterval(interval);
      console.log('Terminé!');
    }
  }, 50);
});

// Exemple avec upload de fichier
function handleFileUpload(file) {
  const xhr = new XMLHttpRequest();
  
  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      const percent = Math.round((e.loaded / e.total) * 100);
      updateProgress(percent);
    }
  });
  
  xhr.open('POST', '/upload');
  xhr.send(file);
}`,
    cas_usage: [
      "Upload de fichiers",
      "Formulaires multi-étapes",
      "Chargement de contenu",
      "Tutoriels"
    ],
    bonnesPratiques: [
      "Pourcentage visible",
      "Animation smooth",
      "Couleur selon état",
      "Estimation du temps restant"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_progressbar.asp"
    }
  },
  {
    id: "combine-countdown",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Countdown Timer",
    signification: "Compte à rebours",
    description: "Chronomètre dégressif",
    utilite: "Créer un sentiment d'urgence",
    variantes: [
      "Countdown simple",
      "Countdown avec date cible",
      "Countdown circulaire"
    ],
    exemple: `<!-- HTML -->
<div class="countdown">
  <div class="time-unit">
    <span class="number" id="days">00</span>
    <span class="label">Jours</span>
  </div>
  <div class="time-unit">
    <span class="number" id="hours">00</span>
    <span class="label">Heures</span>
  </div>
  <div class="time-unit">
    <span class="number" id="minutes">00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="time-unit">
    <span class="number" id="seconds">00</span>
    <span class="label">Secondes</span>
  </div>
</div>

/* CSS */
.countdown {
  display: flex;
  gap: 20px;
  justify-content: center;
  font-family: monospace;
}

.time-unit {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  min-width: 80px;
}

.number {
  display: block;
  font-size: 48px;
  font-weight: bold;
  color: white;
}

.label {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
}

// JavaScript
const targetDate = new Date('2024-12-31T23:59:59').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerHTML = '<h2>Événement terminé!</h2>';
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Appel initial`,
    cas_usage: [
      "Ventes flash",
      "Lancements de produits",
      "Événements",
      "Offres limitées"
    ],
    bonnesPratiques: [
      "Mettre à jour chaque seconde",
      "Gérer la fin du compte à rebours",
      "Format lisible (00:00:00)",
      "Timezone awareness"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_countdown.asp"
    }
  },
  {
    id: "combine-search-bar",
    categorie: "combine",
    niveau: "intermediaire",
    titre: "Search Bar",
    signification: "Barre de recherche avec filtres",
    description: "Recherche et filtrage en temps réel",
    utilite: "Permettre aux utilisateurs de trouver du contenu",
    variantes: [
      "Recherche simple",
      "Recherche avec suggestions",
      "Recherche avec filtres"
    ],
    exemple: `<!-- HTML -->
<div class="search-container">
  <input type="text" id="search-input" placeholder="Rechercher...">
  <div id="search-results"></div>
</div>

<div class="items">
  <div class="item" data-name="JavaScript Tutorial">
    <h3>JavaScript Tutorial</h3>
    <p>Apprendre JavaScript...</p>
  </div>
  <div class="item" data-name="CSS Guide">
    <h3>CSS Guide</h3>
    <p>Guide complet CSS...</p>
  </div>
  <div class="item" data-name="HTML Basics">
    <h3>HTML Basics</h3>
    <p>Les bases du HTML...</p>
  </div>
</div>

/* CSS */
.search-container {
  position: relative;
  max-width: 600px;
  margin: 20px auto;
}

#search-input {
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 25px;
  outline: none;
  transition: border-color 0.3s;
}

#search-input:focus {
  border-color: #4CAF50;
}

.item {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: opacity 0.3s;
}

.item.hidden {
  display: none;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}

// JavaScript
const searchInput = document.getElementById('search-input');
const items = document.querySelectorAll('.item');

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  items.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    const content = item.textContent.toLowerCase();
    
    if (searchTerm === '' || name.includes(searchTerm) || content.includes(searchTerm)) {
      item.classList.remove('hidden');
      
      // Highlight du terme recherché
      if (searchTerm !== '') {
        const regex = new RegExp(\`(\${searchTerm})\`, 'gi');
        item.innerHTML = item.innerHTML.replace(/<mark class="highlight">|<\\/mark>/g, '');
        item.innerHTML = item.innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
      }
    } else {
      item.classList.add('hidden');
    }
  });
}

// Recherche avec debounce (attendre 300ms après la dernière frappe)
searchInput.addEventListener('input', debounce(performSearch, 300));`,
    cas_usage: [
      "Sites de contenu",
      "E-commerce",
      "Documentation",
      "Annuaires"
    ],
    bonnesPratiques: [
      "Debounce pour performance",
      "Feedback visuel",
      "Recherche insensible à la casse",
      "Highlight des résultats"
    ],
    liens: {
      tutorial: "https://www.w3schools.com/howto/howto_js_filter_lists.asp"
    }
  }];