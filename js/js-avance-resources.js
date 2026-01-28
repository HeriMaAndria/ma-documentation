window.ressourcesJSAvance = [
  {
    id: "js-async-await",
    categorie: "js",
    niveau: "avance",
    titre: "async/await",
    signification: "Asynchrone moderne",
    description: "Syntaxe moderne pour gérer les opérations asynchrones de manière plus lisible",
    utilite: "Simplifier l'écriture de code asynchrone et éviter le callback hell",
    variantes: [
      "async function",
      "await expression",
      "try/catch avec async",
      "Promise.all() avec async/await"
    ],
    exemple: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erreur:', error);
  }
}`,
    cas_usage: [
      "Requêtes API",
      "Lecture de fichiers",
      "Opérations de base de données",
      "Traitement séquentiel de données"
    ],
    piegesCommuns: [
      "Oublier le mot-clé await",
      "Ne pas gérer les erreurs avec try/catch",
      "Utiliser await dans une boucle (performance)"
    ],
    bonnesPratiques: [
      "Toujours gérer les erreurs",
      "Utiliser Promise.all() pour exécutions parallèles",
      "Éviter await dans les boucles si possible"
    ]
  },
  {
    id: "js-promises",
    categorie: "js",
    niveau: "avance",
    titre: "Promises",
    signification: "Promesses",
    description: "Objet représentant l'achèvement ou l'échec éventuel d'une opération asynchrone",
    utilite: "Gérer les opérations asynchrones de manière élégante",
    variantes: [
      "Promise.resolve()",
      "Promise.reject()",
      "Promise.all()",
      "Promise.race()",
      "Promise.allSettled()",
      "Promise.any()"
    ],
    exemple: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Succès!');
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Terminé'));`,
    cas_usage: [
      "Opérations asynchrones",
      "Requêtes HTTP",
      "Timers",
      "Chargement de ressources"
    ],
    piegesCommuns: [
      "Oublier le return dans then()",
      "Ne pas gérer les erreurs",
      "Chaîner trop de then() (callback hell moderne)"
    ],
    bonnesPratiques: [
      "Toujours ajouter .catch()",
      "Préférer async/await quand possible",
      "Utiliser Promise.all() pour parallélisation"
    ]
  },
  {
    id: "js-classes",
    categorie: "js",
    niveau: "avance",
    titre: "Classes",
    signification: "Programmation orientée objet",
    description: "Syntaxe pour créer des objets et gérer l'héritage de manière structurée",
    utilite: "Organiser le code avec des concepts de POO",
    variantes: [
      "constructor()",
      "extends",
      "super",
      "static",
      "getters/setters",
      "méthodes privées (#)"
    ],
    exemple: `class Animal {
  constructor(nom) {
    this.nom = nom;
  }
  
  parler() {
    console.log(\`\${this.nom} fait du bruit\`);
  }
}

class Chien extends Animal {
  parler() {
    console.log(\`\${this.nom} aboie\`);
  }
}

const chien = new Chien('Rex');
chien.parler(); // "Rex aboie"`,
    cas_usage: [
      "Composants réutilisables",
      "Modèles de données",
      "Architecture orientée objet",
      "Frameworks et libraries"
    ],
    piegesCommuns: [
      "Oublier le mot-clé new",
      "Mauvaise utilisation de this",
      "Oublier super() dans constructeur enfant"
    ],
    bonnesPratiques: [
      "Utiliser des noms de classe en PascalCase",
      "Éviter trop d'héritage (composition > héritage)",
      "Utiliser méthodes privées (#) quand approprié"
    ]
  },
  {
    id: "js-modules",
    categorie: "js",
    niveau: "avance",
    titre: "Modules (import/export)",
    signification: "Modularité",
    description: "Système pour organiser le code en modules réutilisables",
    utilite: "Structurer et organiser le code en fichiers séparés",
    variantes: [
      "export default",
      "export named",
      "import default",
      "import named",
      "import * as",
      "dynamic import()"
    ],
    exemple: `// utils.js
export const add = (a, b) => a + b;
export default function multiply(a, b) {
  return a * b;
}

// main.js
import multiply, { add } from './utils.js';
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6`,
    cas_usage: [
      "Organisation du code",
      "Réutilisation de fonctions",
      "Applications modulaires",
      "Tree shaking (optimisation)"
    ],
    piegesCommuns: [
      "Oublier type='module' dans script",
      "Confondre export default et named export",
      "Chemins d'import incorrects"
    ],
    bonnesPratiques: [
      "Un fichier = un module avec responsabilité claire",
      "Préférer named exports pour meilleure auto-complétion",
      "Utiliser import dynamique pour lazy loading"
    ]
  },
  {
    id: "js-closures",
    categorie: "js",
    niveau: "avance",
    titre: "Closures",
    signification: "Fermetures",
    description: "Fonction qui a accès aux variables de sa portée externe",
    utilite: "Créer des variables privées et de l'encapsulation",
    variantes: [
      "Fonction retournant une fonction",
      "Variables privées",
      "Module pattern",
      "Callbacks avec contexte"
    ],
    exemple: `function compteur() {
  let count = 0;
  
  return {
    incrementer: () => ++count,
    decrementer: () => --count,
    getValeur: () => count
  };
}

const monCompteur = compteur();
monCompteur.incrementer(); // 1
monCompteur.incrementer(); // 2
console.log(monCompteur.getValeur()); // 2`,
    cas_usage: [
      "Données privées",
      "Factory functions",
      "Event handlers avec état",
      "Currying"
    ],
    piegesCommuns: [
      "Fuites mémoire avec closures inutiles",
      "Référence incorrecte dans boucles",
      "Performances sur grandes quantités"
    ],
    bonnesPratiques: [
      "Utiliser pour encapsulation",
      "Nettoyer les closures inutiles",
      "Comprendre la portée lexicale"
    ]
  },
  {
    id: "js-this",
    categorie: "js",
    niveau: "avance",
    titre: "this keyword",
    signification: "Contexte d'exécution",
    description: "Mot-clé référençant le contexte d'exécution actuel",
    utilite: "Accéder à l'objet courant dans les méthodes et fonctions",
    variantes: [
      "this dans méthodes",
      "this dans fonctions",
      "this dans arrow functions",
      "this dans event handlers"
    ],
    exemple: `const user = {
  nom: 'Alice',
  saluer() {
    console.log(\`Bonjour, je suis \${this.nom}\`);
  }
};

user.saluer(); // "Bonjour, je suis Alice"

// Arrow function conserve this du contexte parent
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log(this); // Window, pas le bouton
});`,
    cas_usage: [
      "Méthodes d'objets",
      "Classes",
      "Event handlers",
      "Constructeurs"
    ],
    piegesCommuns: [
      "Perte de contexte this",
      "Confusion avec arrow functions",
      "this dans callbacks"
    ],
    bonnesPratiques: [
      "Utiliser arrow functions pour préserver this",
      "Utiliser bind() si nécessaire",
      "Comprendre la différence function vs arrow"
    ]
  },
  {
    id: "js-bind-call-apply",
    categorie: "js",
    niveau: "avance",
    titre: "bind() / call() / apply()",
    signification: "Liaison de contexte",
    description: "Méthodes pour contrôler le contexte this d'une fonction",
    utilite: "Définir explicitement la valeur de this",
    variantes: [
      "bind() - retourne nouvelle fonction",
      "call() - appelle immédiatement",
      "apply() - appelle avec array d'arguments"
    ],
    exemple: `const personne = {
  nom: 'Bob',
  saluer: function() {
    console.log(\`Bonjour \${this.nom}\`);
  }
};

const saluerBob = personne.saluer.bind(personne);
saluerBob(); // "Bonjour Bob"

personne.saluer.call({ nom: 'Alice' }); // "Bonjour Alice"
personne.saluer.apply({ nom: 'Charlie' }); // "Bonjour Charlie"`,
    cas_usage: [
      "Event handlers",
      "Callbacks avec contexte",
      "Emprunter des méthodes",
      "Partial application"
    ],
    piegesCommuns: [
      "Confondre call et apply",
      "Oublier de bind dans callbacks",
      "Binding inutile avec arrow functions"
    ],
    bonnesPratiques: [
      "bind() pour event listeners",
      "call() pour emprunter méthodes",
      "apply() pour tableaux d'arguments"
    ]
  },
  {
    id: "js-map-set",
    categorie: "js",
    niveau: "avance",
    titre: "Map / Set / WeakMap / WeakSet",
    signification: "Structures de données",
    description: "Collections avancées pour stocker des données de manière optimisée",
    utilite: "Alternative aux objets et arrays pour certains cas d'usage",
    variantes: [
      "Map - clés de tout type",
      "Set - valeurs uniques",
      "WeakMap - clés faibles",
      "WeakSet - valeurs faibles"
    ],
    exemple: `// Map
const map = new Map();
map.set('clé1', 'valeur1');
map.set(123, 'valeur2');
console.log(map.get('clé1')); // "valeur1"

// Set
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}
set.add(4);
console.log(set.has(2)); // true`,
    cas_usage: [
      "Cache de données",
      "Valeurs uniques",
      "Clés non-string",
      "Éviter fuites mémoire"
    ],
    piegesCommuns: [
      "Utiliser {} au lieu de Map pour clés complexes",
      "Oublier que Set n'a pas d'index",
      "Mauvaise compréhension de WeakMap/WeakSet"
    ],
    bonnesPratiques: [
      "Map pour clés non-string",
      "Set pour unicité",
      "WeakMap pour éviter fuites mémoire"
    ]
  },
  {
    id: "js-proxy-reflect",
    categorie: "js",
    niveau: "avance",
    titre: "Proxy / Reflect",
    signification: "Métaprogrammation",
    description: "Intercepter et personnaliser les opérations sur les objets",
    utilite: "Créer des comportements personnalisés pour les objets",
    variantes: [
      "get trap",
      "set trap",
      "has trap",
      "deleteProperty trap",
      "Reflect methods"
    ],
    exemple: `const handler = {
  get(target, prop) {
    console.log(\`Accès à \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(\`Modification de \${prop} = \${value}\`);
    target[prop] = value;
    return true;
  }
};

const obj = new Proxy({}, handler);
obj.nom = 'Alice'; // "Modification de nom = Alice"
console.log(obj.nom); // "Accès à nom" puis "Alice"`,
    cas_usage: [
      "Validation de données",
      "Logging automatique",
      "Réactivité (Vue.js)",
      "APIs virtuelles"
    ],
    piegesCommuns: [
      "Performance sur grands objets",
      "Complexité excessive",
      "Oublier de retourner true dans set"
    ],
    bonnesPratiques: [
      "Utiliser pour cas spécifiques uniquement",
      "Documenter les comportements personnalisés",
      "Combiner avec Reflect"
    ]
  },
  {
    id: "js-generators",
    categorie: "js",
    niveau: "avance",
    titre: "Generators",
    signification: "Générateurs",
    description: "Fonctions qui peuvent être mises en pause et reprises",
    utilite: "Créer des itérateurs personnalisés et contrôler le flux d'exécution",
    variantes: [
      "function*",
      "yield",
      "yield*",
      "next()",
      "return()",
      "throw()"
    ],
    exemple: `function* compteur() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = compteur();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2`,
    cas_usage: [
      "Itérateurs personnalisés",
      "Lazy evaluation",
      "Séquences infinies",
      "State machines"
    ],
    piegesCommuns: [
      "Oublier l'astérisque *",
      "Confondre yield et return",
      "Ne pas comprendre .next()"
    ],
    bonnesPratiques: [
      "Utiliser pour lazy evaluation",
      "Combiner avec for...of",
      "Documenter le comportement"
    ]
  },
  {
    id: "js-symbol",
    categorie: "js",
    niveau: "avance",
    titre: "Symbol",
    signification: "Symboles",
    description: "Type primitif pour créer des identifiants uniques",
    utilite: "Créer des propriétés privées et éviter les collisions",
    variantes: [
      "Symbol()",
      "Symbol.for()",
      "Symbol.iterator",
      "Symbol.toStringTag",
      "Well-known symbols"
    ],
    exemple: `const id = Symbol('id');
const user = {
  nom: 'Alice',
  [id]: 123
};

console.log(user[id]); // 123
console.log(Object.keys(user)); // ['nom'] - symbol invisible

// Symbol.iterator
const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (let val of obj) {
  console.log(val); // 1, 2, 3
}`,
    cas_usage: [
      "Propriétés privées",
      "Métadonnées d'objets",
      "Itérateurs personnalisés",
      "Éviter collisions de noms"
    ],
    piegesCommuns: [
      "Symbol() !== Symbol()",
      "Symbols non énumérables",
      "Confusion avec Symbol.for()"
    ],
    bonnesPratiques: [
      "Utiliser pour propriétés réellement privées",
      "Symbol.for() pour registre global",
      "Documenter l'usage des symbols"
    ]
  },
  {
    id: "js-intersection-observer",
    categorie: "js",
    niveau: "avance",
    titre: "Intersection Observer API",
    signification: "Observation d'intersections",
    description: "Observer quand un élément entre/sort de la viewport",
    utilite: "Détecter la visibilité des éléments de manière performante",
    variantes: [
      "new IntersectionObserver()",
      "observe()",
      "unobserve()",
      "threshold",
      "rootMargin"
    ],
    exemple: `const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Élément visible!');
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '0px'
});

observer.observe(document.querySelector('.element'));`,
    cas_usage: [
      "Lazy loading images",
      "Infinite scroll",
      "Animations au scroll",
      "Analytics de visibilité"
    ],
    piegesCommuns: [
      "Oublier de unobserve()",
      "Mauvaise configuration threshold",
      "Performance avec trop d'éléments"
    ],
    bonnesPratiques: [
      "Désobserver après déclenchement si unique",
      "Utiliser rootMargin pour anticipation",
      "Grouper les observations similaires"
    ]
  },
  {
    id: "js-mutation-observer",
    categorie: "js",
    niveau: "avance",
    titre: "Mutation Observer API",
    signification: "Observation de mutations",
    description: "Observer les changements dans le DOM",
    utilite: "Réagir aux modifications du DOM de manière performante",
    variantes: [
      "new MutationObserver()",
      "observe()",
      "disconnect()",
      "childList",
      "attributes",
      "subtree"
    ],
    exemple: `const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    console.log('Le DOM a changé:', mutation.type);
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true
});`,
    cas_usage: [
      "Détection de changements DOM",
      "Intégration avec frameworks",
      "Debugging",
      "Auto-ajustement de layout"
    ],
    piegesCommuns: [
      "Boucles infinies (modifier dans callback)",
      "Observer trop large (performance)",
      "Oublier disconnect()"
    ],
    bonnesPratiques: [
      "Observer seulement ce qui est nécessaire",
      "Toujours disconnect() quand terminé",
      "Éviter modifications dans callback"
    ]
  },
  {
    id: "js-web-workers",
    categorie: "js",
    niveau: "avance",
    titre: "Web Workers",
    signification: "Calculs en arrière-plan",
    description: "Exécuter du JavaScript dans un thread séparé",
    utilite: "Effectuer des calculs lourds sans bloquer l'UI",
    variantes: [
      "new Worker()",
      "postMessage()",
      "onmessage",
      "terminate()",
      "Shared Workers",
      "Service Workers"
    ],
    exemple: `// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: [1, 2, 3, 4, 5] });

worker.onmessage = (e) => {
  console.log('Résultat:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = e.data.data.reduce((a, b) => a + b, 0);
  self.postMessage(result);
};`,
    cas_usage: [
      "Calculs complexes",
      "Traitement d'images",
      "Parsing de gros fichiers",
      "Cryptographie"
    ],
    piegesCommuns: [
      "Pas d'accès au DOM",
      "Communication par copie",
      "Oublier terminate()"
    ],
    bonnesPratiques: [
      "Utiliser pour tâches CPU-intensives",
      "Transférer objets plutôt que copier",
      "Toujours gérer les erreurs"
    ]
  },
  {
    id: "js-service-workers",
    categorie: "js",
    niveau: "avance",
    titre: "Service Workers",
    signification: "Applications hors ligne",
    description: "Proxy entre application et réseau pour fonctionnalités offline",
    utilite: "Créer des Progressive Web Apps (PWA) fonctionnant hors ligne",
    variantes: [
      "register()",
      "install event",
      "activate event",
      "fetch event",
      "Cache API"
    ],
    exemple: `// main.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW enregistré', reg))
    .catch(err => console.log('Erreur SW', err));
}

// sw.js
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['/index.html', '/style.css']);
    })
  );
});`,
    cas_usage: [
      "Mode offline",
      "Cache de ressources",
      "Push notifications",
      "Background sync"
    ],
    piegesCommuns: [
      "HTTPS obligatoire (sauf localhost)",
      "Cycle de vie complexe",
      "Cache non vidé automatiquement"
    ],
    bonnesPratiques: [
      "Versionner les caches",
      "Nettoyer vieux caches",
      "Tester mode offline"
    ]
  }
];