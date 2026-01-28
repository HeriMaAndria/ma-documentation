window.ressourcesCombineAvance = [
  {
    id: "combine-infinite-scroll",
    categorie: "combine",
    niveau: "avance",
    titre: "Infinite Scroll",
    signification: "Chargement infini au scroll",
    description: "Charger automatiquement du contenu lorsque l'utilisateur atteint le bas de la page",
    utilite: "Améliorer l'expérience utilisateur en chargeant le contenu progressivement",
    variantes: [
      "Avec Intersection Observer",
      "Avec scroll event",
      "Avec pagination",
      "Avec loading state"
    ],
    exemple: `const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !loading) {
    loadMoreContent();
  }
}, { threshold: 1.0 });

observer.observe(document.querySelector('.sentinel'));

async function loadMoreContent() {
  loading = true;
  const data = await fetch(\`/api/posts?page=\${page}\`);
  // Ajouter contenu au DOM
  loading = false;
  page++;
}`,
    cas_usage: [
      "Feeds de réseaux sociaux",
      "Listes de produits",
      "Articles de blog",
      "Galeries d'images"
    ],
    piegesCommuns: [
      "Requêtes multiples simultanées",
      "Pas de loading indicator",
      "Performance avec trop d'éléments DOM"
    ],
    bonnesPratiques: [
      "Débouncer les requêtes",
      "Afficher un loader",
      "Virtualiser le contenu si nécessaire"
    ]
  },
  {
    id: "combine-drag-drop",
    categorie: "combine",
    niveau: "avance",
    titre: "Drag and Drop",
    signification: "Glisser-déposer",
    description: "Permettre aux utilisateurs de déplacer des éléments par glisser-déposer",
    utilite: "Interface intuitive pour réorganiser ou déplacer des éléments",
    variantes: [
      "HTML5 Drag & Drop API",
      "Avec événements mouse",
      "Avec touch events (mobile)",
      "Réorganisation de listes"
    ],
    exemple: `const item = document.querySelector('.draggable');

item.addEventListener('dragstart', (e) => {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
  e.target.classList.add('dragging');
});

const dropZone = document.querySelector('.drop-zone');

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/html');
  e.target.innerHTML = data;
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});`,
    cas_usage: [
      "Réorganisation de listes",
      "Upload de fichiers",
      "Tableaux Kanban",
      "Builders visuels"
    ],
    piegesCommuns: [
      "Oublier preventDefault() sur dragover",
      "Pas de feedback visuel",
      "Support mobile difficile"
    ],
    bonnesPratiques: [
      "Ajouter feedback visuel",
      "Gérer les états (dragging, over)",
      "Prévoir fallback touch pour mobile"
    ]
  },
  {
    id: "combine-virtual-scroll",
    categorie: "combine",
    niveau: "avance",
    titre: "Virtual Scroll",
    signification: "Défilement virtuel",
    description: "Rendre uniquement les éléments visibles dans une grande liste",
    utilite: "Optimiser les performances pour de très grandes listes",
    variantes: [
      "Virtual scrolling fixe",
      "Variable height items",
      "Horizontal virtual scroll",
      "Grid virtuel"
    ],
    exemple: `const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = Math.ceil(container.clientHeight / ITEM_HEIGHT);
const BUFFER = 3;

function updateVisibleItems(scrollTop) {
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER;
  const endIndex = startIndex + VISIBLE_ITEMS + (BUFFER * 2);
  
  // Render seulement les items visibles
  renderItems(data.slice(Math.max(0, startIndex), endIndex));
  
  // Ajuster padding pour simuler scroll total
  container.style.paddingTop = \`\${startIndex * ITEM_HEIGHT}px\`;
}`,
    cas_usage: [
      "Listes de milliers d'items",
      "Tableaux de données",
      "Logs et consoles",
      "Grandes galeries"
    ],
    piegesCommuns: [
      "Hauteurs variables compliquées",
      "Calculs de position incorrects",
      "Scrollbar inexacte"
    ],
    bonnesPratiques: [
      "Calculer précisément les hauteurs",
      "Ajouter un buffer d'items",
      "Utiliser des librairies (react-window, virtuoso)"
    ]
  },
  {
    id: "combine-realtime-search",
    categorie: "combine",
    niveau: "avance",
    titre: "Real-time Search",
    signification: "Recherche en temps réel",
    description: "Afficher les résultats de recherche instantanément pendant la saisie",
    utilite: "Améliorer l'expérience de recherche avec des résultats immédiats",
    variantes: [
      "Avec debouncing",
      "Avec cache",
      "Avec highlighting",
      "Avec filtres"
    ],
    exemple: `let debounceTimer;
const searchInput = document.querySelector('#search');
const resultsContainer = document.querySelector('#results');

searchInput.addEventListener('input', (e) => {
  clearTimeout(debounceTimer);
  
  debounceTimer = setTimeout(async () => {
    const query = e.target.value;
    if (query.length < 2) return;
    
    const results = await fetch(\`/api/search?q=\${query}\`);
    const data = await results.json();
    
    displayResults(data);
  }, 300);
});

function displayResults(results) {
  resultsContainer.innerHTML = results.map(r => 
    \`<div class="result">\${highlightMatch(r.title, query)}</div>\`
  ).join('');
}`,
    cas_usage: [
      "Barre de recherche principale",
      "Filtrage de listes",
      "Autocomplétion",
      "Search suggestions"
    ],
    piegesCommuns: [
      "Pas de debouncing (trop de requêtes)",
      "Pas de gestion des requêtes obsolètes",
      "Pas de cache"
    ],
    bonnesPratiques: [
      "Debouncer les requêtes (300ms)",
      "Annuler les requêtes précédentes",
      "Cacher les résultats récents"
    ]
  },
  {
    id: "combine-autocomplete",
    categorie: "combine",
    niveau: "avance",
    titre: "Autocomplete",
    signification: "Autocomplétion",
    description: "Suggérer automatiquement des options pendant la saisie",
    utilite: "Aider l'utilisateur à saisir plus rapidement et sans erreur",
    variantes: [
      "Avec suggestions API",
      "Avec données locales",
      "Multi-select",
      "Avec fuzzy search"
    ],
    exemple: `const input = document.querySelector('#autocomplete');
const suggestions = document.querySelector('#suggestions');

input.addEventListener('input', debounce(async (e) => {
  const value = e.target.value;
  if (value.length < 2) {
    suggestions.innerHTML = '';
    return;
  }
  
  const data = await fetch(\`/api/autocomplete?q=\${value}\`);
  const items = await data.json();
  
  suggestions.innerHTML = items.map(item => 
    \`<li onclick="selectItem('\${item}')">\${item}</li>\`
  ).join('');
  suggestions.classList.add('visible');
}, 200));

function selectItem(value) {
  input.value = value;
  suggestions.classList.remove('visible');
}`,
    cas_usage: [
      "Champs d'adresse",
      "Tags et catégories",
      "Recherche de produits",
      "Sélection d'utilisateurs"
    ],
    piegesCommuns: [
      "Navigation clavier non gérée",
      "Suggestions non fermées au clic extérieur",
      "Pas d'indication de chargement"
    ],
    bonnesPratiques: [
      "Supporter navigation clavier (↑↓ Enter)",
      "Fermer au clic extérieur",
      "Highlighter la correspondance"
    ]
  },
  {
    id: "combine-multistep-form",
    categorie: "combine",
    niveau: "avance",
    titre: "Multi-step Form",
    signification: "Formulaire multi-étapes",
    description: "Diviser un long formulaire en plusieurs étapes",
    utilite: "Améliorer l'UX en rendant les formulaires longs moins intimidants",
    variantes: [
      "Avec validation par étape",
      "Avec barre de progression",
      "Avec sauvegarde brouillon",
      "Avec navigation libre"
    ],
    exemple: `let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.querySelector(\`.step-\${step}\`).classList.add('active');
  
  updateProgress(step);
  updateButtons(step);
}

function nextStep() {
  if (validateStep(currentStep)) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  currentStep--;
  showStep(currentStep);
}

function updateProgress(step) {
  const progress = (step / totalSteps) * 100;
  document.querySelector('.progress-bar').style.width = \`\${progress}%\`;
}`,
    cas_usage: [
      "Inscription utilisateur",
      "Checkout e-commerce",
      "Questionnaires",
      "Onboarding"
    ],
    piegesCommuns: [
      "Pas de sauvegarde entre étapes",
      "Validation uniquement à la fin",
      "Navigation impossible vers étapes précédentes"
    ],
    bonnesPratiques: [
      "Valider chaque étape",
      "Sauvegarder progression",
      "Afficher progression claire"
    ]
  },
  {
    id: "combine-file-upload-preview",
    categorie: "combine",
    niveau: "avance",
    titre: "File Upload with Preview",
    signification: "Upload avec aperçu",
    description: "Permettre l'upload de fichiers avec prévisualisation avant envoi",
    utilite: "Montrer à l'utilisateur ce qu'il va envoyer",
    variantes: [
      "Images avec thumbnail",
      "Drag & drop upload",
      "Multiple files",
      "Avec progression"
    ],
    exemple: `const input = document.querySelector('input[type="file"]');
const preview = document.querySelector('#preview');

input.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  
  files.forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        preview.appendChild(img);
      };
      
      reader.readAsDataURL(file);
    }
  });
});

async function uploadFiles(files) {
  const formData = new FormData();
  files.forEach(file => formData.append('files[]', file));
  
  const response = await fetch('/upload', {
    method: 'POST',
    body: formData
  });
}`,
    cas_usage: [
      "Upload d'images",
      "Avatar utilisateur",
      "Documents",
      "Galeries photos"
    ],
    piegesCommuns: [
      "Pas de validation de type/taille",
      "Pas de barre de progression",
      "Mémoire avec gros fichiers"
    ],
    bonnesPratiques: [
      "Valider type et taille",
      "Afficher progression",
      "Compresser images si possible"
    ]
  },
  {
    id: "combine-chart-graph",
    categorie: "combine",
    niveau: "avance",
    titre: "Chart / Graph",
    signification: "Graphiques interactifs",
    description: "Créer des graphiques de données interactifs",
    utilite: "Visualiser des données de manière claire et interactive",
    variantes: [
      "Line chart",
      "Bar chart",
      "Pie chart",
      "Avec Canvas",
      "Avec SVG",
      "Avec libraries (Chart.js, D3.js)"
    ],
    exemple: `// Avec Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Ventes',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    }
  }
});`,
    cas_usage: [
      "Dashboards",
      "Analytics",
      "Rapports",
      "Monitoring"
    ],
    piegesCommuns: [
      "Trop de données (performance)",
      "Pas responsive",
      "Couleurs non accessibles"
    ],
    bonnesPratiques: [
      "Utiliser des librairies éprouvées",
      "Rendre responsive",
      "Choisir couleurs accessibles"
    ]
  },
  {
    id: "combine-calendar-datepicker",
    categorie: "combine",
    niveau: "avance",
    titre: "Calendar / Date Picker",
    signification: "Calendrier",
    description: "Interface pour sélectionner des dates",
    utilite: "Faciliter la sélection de dates avec interface visuelle",
    variantes: [
      "Date picker simple",
      "Range picker",
      "Avec disponibilités",
      "Multi-dates"
    ],
    exemple: `class DatePicker {
  constructor(input) {
    this.input = input;
    this.currentDate = new Date();
    this.render();
  }
  
  render() {
    const calendar = document.createElement('div');
    calendar.className = 'calendar';
    
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    
    // Générer header
    calendar.innerHTML = \`
      <div class="header">
        <button onclick="prevMonth()">←</button>
        <span>\${months[month]} \${year}</span>
        <button onclick="nextMonth()">→</button>
      </div>
      <div class="days">\${this.renderDays()}</div>
    \`;
    
    this.input.after(calendar);
  }
  
  renderDays() {
    // Générer grille de jours
  }
}`,
    cas_usage: [
      "Réservations",
      "Planification",
      "Formulaires avec dates",
      "Filtres de dates"
    ],
    piegesCommuns: [
      "Gestion complexe des fuseaux horaires",
      "Pas de navigation clavier",
      "Format de date incohérent"
    ],
    bonnesPratiques: [
      "Utiliser librairie (flatpickr, date-fns)",
      "Supporter navigation clavier",
      "Internationaliser les formats"
    ]
  },
  {
    id: "combine-rich-text-editor",
    categorie: "combine",
    niveau: "avance",
    titre: "Rich Text Editor",
    signification: "Éditeur de texte riche",
    description: "Éditeur WYSIWYG pour contenu formaté",
    utilite: "Permettre aux utilisateurs de créer du contenu formaté facilement",
    variantes: [
      "Avec contentEditable",
      "Avec toolbar",
      "Markdown editor",
      "Avec libraries (Quill, TinyMCE)"
    ],
    exemple: `const editor = document.querySelector('[contenteditable]');
const toolbar = document.querySelector('.toolbar');

toolbar.addEventListener('click', (e) => {
  const cmd = e.target.dataset.command;
  
  if (cmd) {
    document.execCommand(cmd, false, null);
    editor.focus();
  }
});

// Toolbar HTML
\`<div class="toolbar">
  <button data-command="bold"><b>B</b></button>
  <button data-command="italic"><i>I</i></button>
  <button data-command="underline"><u>U</u></button>
  <button data-command="insertUnorderedList">•</button>
</div>\``,
    cas_usage: [
      "CMS",
      "Blogs",
      "Forums",
      "Emails"
    ],
    piegesCommuns: [
      "XSS avec HTML non sanitized",
      "Copier-coller avec formatage",
      "Compatibilité entre navigateurs"
    ],
    bonnesPratiques: [
      "Sanitizer le HTML",
      "Utiliser librairie robuste",
      "Prévoir mode markdown"
    ]
  },
  {
    id: "combine-notification-system",
    categorie: "combine",
    niveau: "avance",
    titre: "Notification System",
    signification: "Système de notifications",
    description: "Système centralisé pour afficher des notifications toast/alerts",
    utilite: "Informer l'utilisateur de manière non-intrusive",
    variantes: [
      "Toast notifications",
      "Push notifications",
      "Avec queue",
      "Avec types (success, error, warning)"
    ],
    exemple: `class NotificationSystem {
  constructor() {
    this.container = this.createContainer();
    this.queue = [];
  }
  
  show(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = \`notification \${type}\`;
    notification.textContent = message;
    
    this.container.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      this.hide(notification);
    }, duration);
  }
  
  hide(notification) {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }
}

const notify = new NotificationSystem();
notify.show('Action réussie!', 'success');`,
    cas_usage: [
      "Confirmations d'actions",
      "Messages d'erreur",
      "Mises à jour temps réel",
      "Statuts de synchronisation"
    ],
    piegesCommuns: [
      "Trop de notifications simultanées",
      "Pas de limite de queue",
      "Pas accessible (screen readers)"
    ],
    bonnesPratiques: [
      "Limiter nombre visible",
      "Ajouter ARIA attributes",
      "Auto-dismiss avec option de conserver"
    ]
  },
  {
    id: "combine-shopping-cart",
    categorie: "combine",
    niveau: "avance",
    titre: "Shopping Cart",
    signification: "Panier d'achat",
    description: "Système complet de panier d'achat e-commerce",
    utilite: "Gérer les produits sélectionnés avant achat",
    variantes: [
      "Avec localStorage",
      "Avec calcul total",
      "Avec quantités",
      "Avec stock"
    ],
    exemple: `class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
    this.render();
  }
  
  addItem(product) {
    const existing = this.items.find(i => i.id === product.id);
    
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    
    this.save();
    this.render();
  }
  
  removeItem(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
    this.render();
  }
  
  getTotal() {
    return this.items.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
  }
  
  save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}`,
    cas_usage: [
      "E-commerce",
      "Marketplaces",
      "Systèmes de commande",
      "Wishlist"
    ],
    piegesCommuns: [
      "Pas de validation stock",
      "Calculs prix incorrects",
      "Synchronisation avec backend"
    ],
    bonnesPratiques: [
      "Valider avec backend avant checkout",
      "Synchroniser entre tabs",
      "Gérer expiration de panier"
    ]
  },
  {
    id: "combine-authentication-flow",
    categorie: "combine",
    niveau: "avance",
    titre: "Authentication Flow",
    signification: "Flux d'authentification",
    description: "Système complet de connexion/inscription avec tokens",
    utilite: "Gérer l'authentification utilisateur de manière sécurisée",
    variantes: [
      "JWT tokens",
      "Session cookies",
      "OAuth",
      "2FA"
    ],
    exemple: `class Auth {
  async login(email, password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    
    if (data.token) {
      localStorage.setItem('token', data.token);
      this.setAuthHeader(data.token);
      return true;
    }
    return false;
  }
  
  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  
  setAuthHeader(token) {
    fetch.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;
  }
  
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}`,
    cas_usage: [
      "Applications web",
      "Dashboards",
      "Zones membres",
      "APIs protégées"
    ],
    piegesCommuns: [
      "Stocker mot de passe en clair",
      "Token non expiré",
      "Pas de refresh token"
    ],
    bonnesPratiques: [
      "Jamais stocker mots de passe",
      "Utiliser HTTPS uniquement",
      "Implémenter refresh tokens"
    ]
  },
  {
    id: "combine-dashboard-layout",
    categorie: "combine",
    niveau: "avance",
    titre: "Dashboard Layout",
    signification: "Layout de tableau de bord",
    description: "Layout complet avec sidebar, header, cards, graphs",
    utilite: "Créer des interfaces d'administration professionnelles",
    variantes: [
      "Avec sidebar collapsible",
      "Responsive mobile",
      "Dark mode",
      "Widgets draggables"
    ],
    exemple: `<div class="dashboard">
  <aside class="sidebar">
    <nav><!-- Navigation --></nav>
  </aside>
  
  <main class="main-content">
    <header class="topbar">
      <button class="menu-toggle"></button>
      <div class="user-menu"></div>
    </header>
    
    <div class="content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Users</h3>
          <p class="value">1,234</p>
        </div>
        <!-- Plus de cards -->
      </div>
      
      <div class="charts">
        <canvas id="chart1"></canvas>
      </div>
    </div>
  </main>
</div>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}
</style>`,
    cas_usage: [
      "Admin panels",
      "Analytics dashboards",
      "CRM",
      "Monitoring tools"
    ],
    piegesCommuns: [
      "Pas responsive sur mobile",
      "Trop de données en même temps",
      "Layout cassé sur petits écrans"
    ],
    bonnesPratiques: [
      "Sidebar collapsible sur mobile",
      "Lazy load des widgets",
      "Utiliser CSS Grid pour layout"
    ]
  },
  {
    id: "combine-kanban-board",
    categorie: "combine",
    niveau: "avance",
    titre: "Kanban Board",
    signification: "Tableau Kanban",
    description: "Interface de gestion de tâches type Trello",
    utilite: "Organiser et visualiser des tâches par colonnes",
    variantes: [
      "Drag & drop entre colonnes",
      "Avec persistance",
      "Multi-utilisateurs",
      "Avec filtres"
    ],
    exemple: `class KanbanBoard {
  constructor() {
    this.columns = ['À faire', 'En cours', 'Terminé'];
    this.tasks = this.loadTasks();
    this.render();
    this.setupDragDrop();
  }
  
  setupDragDrop() {
    document.querySelectorAll('.task').forEach(task => {
      task.draggable = true;
      task.addEventListener('dragstart', this.handleDragStart);
    });
    
    document.querySelectorAll('.column').forEach(column => {
      column.addEventListener('dragover', e => e.preventDefault());
      column.addEventListener('drop', this.handleDrop);
    });
  }
  
  handleDrop(e) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const newColumn = e.target.closest('.column').dataset.column;
    this.moveTask(taskId, newColumn);
  }
}`,
    cas_usage: [
      "Gestion de projets",
      "Todo lists avancées",
      "Workflows",
      "Pipelines de vente"
    ],
    piegesCommuns: [
      "Drag & drop non fluide",
      "Pas de sauvegarde des positions",
      "Performance avec beaucoup de tâches"
    ],
    bonnesPratiques: [
      "Feedback visuel lors du drag",
      "Sauvegarder positions",
      "Virtualiser si > 100 tâches"
    ]
  },
  {
    id: "combine-chat-interface",
    categorie: "combine",
    niveau: "avance",
    titre: "Chat Interface",
    signification: "Interface de chat",
    description: "Interface de messagerie en temps réel",
    utilite: "Communication instantanée entre utilisateurs",
    variantes: [
      "Avec WebSocket",
      "Avec scroll auto",
      "Typing indicators",
      "Online status"
    ],
    exemple: `class ChatInterface {
  constructor() {
    this.ws = new WebSocket('ws://localhost:8080');
    this.setupWebSocket();
  }
  
  setupWebSocket() {
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.displayMessage(message);
      this.scrollToBottom();
    };
  }
  
  sendMessage(text) {
    const message = {
      user: this.currentUser,
      text: text,
      timestamp: new Date()
    };
    
    this.ws.send(JSON.stringify(message));
    this.displayMessage(message, true);
  }
  
  displayMessage(msg, own = false) {
    const div = document.createElement('div');
    div.className = \`message \${own ? 'own' : ''}\`;
    div.innerHTML = \`
      <span class="user">\${msg.user}</span>
      <p>\${msg.text}</p>
      <span class="time">\${formatTime(msg.timestamp)}</span>
    \`;
    this.messagesContainer.appendChild(div);
  }
}`,
    cas_usage: [
      "Support client",
      "Messagerie d'application",
      "Chat rooms",
      "Collaboration temps réel"
    ],
    piegesCommuns: [
      "Pas de reconnexion WebSocket",
      "Messages non persistés",
      "Scroll jerky"
    ],
    bonnesPratiques: [
      "Gérer reconnexion automatique",
      "Persister messages côté serveur",
      "Smooth scroll vers nouveaux messages"
    ]
  }];