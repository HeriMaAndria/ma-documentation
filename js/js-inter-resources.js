window.ressourcesJSInter = [
  {
    id: "js-fetch",
    categorie: "js",
    niveau: "intermediaire",
    titre: "fetch()",
    signification: "Requête HTTP",
    description: "API moderne pour faire des requêtes HTTP",
    utilite: "Communiquer avec des APIs",
    variantes: [
      "fetch(url)",
      "fetch(url, options)",
      "GET, POST, PUT, DELETE"
    ],
    exemple: `// GET simple
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));

// POST avec données
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Alice',
    email: 'alice@example.com'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

// Avec async/await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur:', error);
  }
}`,
    cas_usage: [
      "Appels API",
      "Chargement de données",
      "Formulaires",
      "Upload de fichiers"
    ],
    piegesCommuns: [
      "Oublier .json() ou .text()",
      "Pas de gestion d'erreur",
      "Ne pas vérifier response.ok"
    ],
    bonnesPratiques: [
      "Toujours gérer les erreurs (try/catch)",
      "Vérifier response.ok",
      "async/await pour lisibilité",
      "Headers appropriés"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Fetch_API"
    }
  },
  {
    id: "js-localstorage",
    categorie: "js",
    niveau: "intermediaire",
    titre: "localStorage / sessionStorage",
    signification: "Stockage local",
    description: "Stocke des données dans le navigateur",
    utilite: "Persister des données côté client",
    variantes: [
      "localStorage.setItem()",
      "localStorage.getItem()",
      "sessionStorage"
    ],
    exemple: `// Sauvegarder
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');

// Récupérer
const username = localStorage.getItem('username');
console.log(username); // "Alice"

// Supprimer
localStorage.removeItem('theme');

// Tout effacer
localStorage.clear();

// Objets (JSON)
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem('user'));

// Vérifier existence
if (localStorage.getItem('token')) {
  console.log('User logged in');
}

// sessionStorage (expire à la fermeture)
sessionStorage.setItem('tempData', 'valeur');`,
    cas_usage: [
      "Thème sombre/clair",
      "Préférences utilisateur",
      "Panier d'achat",
      "Cache de données"
    ],
    piegesCommuns: [
      "Oublier JSON.stringify/parse",
      "Limite de 5-10MB",
      "Stockage sensible (pas sécurisé)"
    ],
    bonnesPratiques: [
      "JSON pour objets/tableaux",
      "try/catch pour parse",
      "sessionStorage pour données temporaires",
      "Ne jamais stocker de tokens sensibles"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage"
    }
  },
  {
    id: "js-json",
    categorie: "js",
    niveau: "intermediaire",
    titre: "JSON.parse() / JSON.stringify()",
    signification: "Manipulation JSON",
    description: "Convertir entre JSON et objets JavaScript",
    utilite: "Échanger des données avec APIs",
    variantes: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.stringify(obj, null, 2)"
    ],
    exemple: `// String JSON vers objet
const jsonString = '{"name":"Alice","age":25}';
const user = JSON.parse(jsonString);
console.log(user.name); // "Alice"

// Objet vers string JSON
const obj = { name: 'Bob', age: 30 };
const json = JSON.stringify(obj);
console.log(json); // '{"name":"Bob","age":30}'

// Formaté (pretty print)
const formatted = JSON.stringify(obj, null, 2);
console.log(formatted);
/*
{
  "name": "Bob",
  "age": 30
}
*/

// Avec try/catch
try {
  const data = JSON.parse(responseText);
  console.log(data);
} catch (error) {
  console.error('JSON invalide:', error);
}

// Filtrer les propriétés
const filtered = JSON.stringify(obj, ['name']);`,
    cas_usage: [
      "APIs REST",
      "localStorage",
      "Configuration",
      "Import/Export de données"
    ],
    piegesCommuns: [
      "JSON invalide crash parse()",
      "Fonctions non sérialisables",
      "Références circulaires"
    ],
    bonnesPratiques: [
      "Toujours try/catch pour parse",
      "Valider le JSON",
      "Pretty print pour debug",
      "null/undefined deviennent null"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON"
    }
  },
  {
    id: "js-settimeout",
    categorie: "js",
    niveau: "intermediaire",
    titre: "setTimeout() / setInterval()",
    signification: "Temporisateurs",
    description: "Exécute du code après un délai",
    utilite: "Retarder ou répéter l'exécution de code",
    variantes: [
      "setTimeout(fn, delay)",
      "setInterval(fn, delay)",
      "clearTimeout()",
      "clearInterval()"
    ],
    exemple: `// Exécuter après 2 secondes
setTimeout(() => {
  console.log('2 secondes écoulées');
}, 2000);

// Stocker l'ID pour annuler
const timeoutId = setTimeout(() => {
  console.log('Ceci ne s\'exécutera pas');
}, 5000);

clearTimeout(timeoutId); // Annuler

// Répéter toutes les secondes
const intervalId = setInterval(() => {
  console.log('Tick');
}, 1000);

// Arrêter après 5 secondes
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

// Compteur
let count = 0;
const counter = setInterval(() => {
  count++;
  console.log(count);
  if (count === 10) {
    clearInterval(counter);
  }
}, 1000);`,
    cas_usage: [
      "Animations",
      "Polling d'API",
      "Délais d'actions",
      "Auto-save"
    ],
    piegesCommuns: [
      "Oublier clearInterval (fuite mémoire)",
      "Délais en millisecondes (pas secondes)",
      "Référence incorrecte au this"
    ],
    bonnesPratiques: [
      "Toujours clear les intervals",
      "requestAnimationFrame pour animations",
      "Arrow functions pour conserver this",
      "Stocker l'ID pour contrôle"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/setTimeout"
    }
  },
  {
    id: "js-array-methods",
    categorie: "js",
    niveau: "intermediaire",
    titre: "Array methods (map, filter, reduce, find)",
    signification: "Méthodes de tableaux",
    description: "Méthodes fonctionnelles pour manipuler les tableaux",
    utilite: "Transformer et traiter des collections",
    variantes: [
      "map()",
      "filter()",
      "reduce()",
      "find()",
      "some()",
      "every()"
    ],
    exemple: `const numbers = [1, 2, 3, 4, 5];

// map: transformer chaque élément
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter: garder certains éléments
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce: réduire à une seule valeur
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find: trouver le premier qui matche
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const alice = users.find(u => u.name === 'Alice');

// some: au moins un qui matche
const hasEven = numbers.some(n => n % 2 === 0); // true

// every: tous matchent
const allPositive = numbers.every(n => n > 0); // true

// Chaînage
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);`,
    cas_usage: [
      "Traitement de données",
      "Transformations",
      "Recherches",
      "Calculs"
    ],
    piegesCommuns: [
      "Oublier return dans map",
      "Muter le tableau original",
      "Mauvaise valeur initiale pour reduce"
    ],
    bonnesPratiques: [
      "Toujours return dans callbacks",
      "Immutabilité (pas de mutation)",
      "Chaîner les méthodes",
      "find vs filter (performance)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array"
    }
  },
  {
    id: "js-string-methods",
    categorie: "js",
    niveau: "intermediaire",
    titre: "String methods (split, join, slice, includes)",
    signification: "Méthodes de chaînes",
    description: "Méthodes pour manipuler les chaînes de caractères",
    utilite: "Traiter et transformer du texte",
    variantes: [
      "split()",
      "join()",
      "slice()",
      "includes()",
      "trim()",
      "replace()"
    ],
    exemple: `const text = "  Hello World  ";

// trim: retirer espaces
text.trim(); // "Hello World"

// split: diviser en tableau
const words = text.trim().split(' ');
// ["Hello", "World"]

// join: joindre un tableau
words.join('-'); // "Hello-World"

// includes: vérifier présence
text.includes('World'); // true

// slice: extraire une portion
text.slice(0, 5); // "  Hel"

// substring
text.substring(2, 7); // "Hello"

// replace: remplacer
text.replace('World', 'JS'); // "  Hello JS  "
text.replaceAll('l', 'L'); // "  HeLLo WorLd  "

// toLowerCase / toUpperCase
text.toLowerCase(); // "  hello world  "
text.toUpperCase(); // "  HELLO WORLD  "

// startsWith / endsWith
text.trim().startsWith('Hello'); // true
text.trim().endsWith('World'); // true`,
    cas_usage: [
      "Parsing de texte",
      "Validation",
      "Formatage",
      "Recherche"
    ],
    bonnesPratiques: [
      "trim() avant traitement",
      "includes() pour vérification simple",
      "split/join pour transformations",
      "Template literals pour concaténation"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String"
    }
  },
  {
    id: "js-event-object",
    categorie: "js",
    niveau: "intermediaire",
    titre: "Event object (preventDefault, stopPropagation)",
    signification: "Objet événement",
    description: "Propriétés et méthodes de l'objet événement",
    utilite: "Contrôler le comportement des événements",
    variantes: [
      "e.preventDefault()",
      "e.stopPropagation()",
      "e.target",
      "e.currentTarget"
    ],
    exemple: `// Empêcher comportement par défaut
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault(); // Ne soumet pas le form
  console.log('Form intercepté');
});

// Stopper la propagation
document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent cliqué');
});

document.querySelector('.child').addEventListener('click', (e) => {
  e.stopPropagation(); // Ne remonte pas au parent
  console.log('Child cliqué');
});

// target vs currentTarget
document.querySelector('.container').addEventListener('click', (e) => {
  console.log('Target:', e.target); // Élément cliqué
  console.log('Current:', e.currentTarget); // Élément avec listener
});

// Propriétés utiles
document.addEventListener('keydown', (e) => {
  console.log('Key:', e.key);
  console.log('Code:', e.code);
  console.log('Ctrl:', e.ctrlKey);
  console.log('Shift:', e.shiftKey);
});

// Position de la souris
document.addEventListener('click', (e) => {
  console.log('X:', e.clientX, 'Y:', e.clientY);
});`,
    cas_usage: [
      "Formulaires custom",
      "Délégation d'événements",
      "Raccourcis clavier",
      "Drag & drop"
    ],
    piegesCommuns: [
      "Confondre target et currentTarget",
      "Oublier preventDefault sur forms",
      "stopPropagation casse la délégation"
    ],
    bonnesPratiques: [
      "preventDefault pour forms/liens",
      "target pour délégation",
      "e.key pour clavier (pas keyCode)",
      "Documenter pourquoi stopPropagation"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Event"
    }
  },
  {
    id: "js-dom-manipulation",
    categorie: "js",
    niveau: "intermediaire",
    titre: "DOM manipulation (createElement, appendChild, remove)",
    signification: "Manipulation du DOM",
    description: "Créer, ajouter et retirer des éléments",
    utilite: "Modifier dynamiquement la structure HTML",
    variantes: [
      "createElement()",
      "appendChild()",
      "remove()",
      "insertBefore()",
      "replaceChild()"
    ],
    exemple: `// Créer un élément
const div = document.createElement('div');
div.className = 'card';
div.textContent = 'Nouvelle carte';

// Ajouter au DOM
document.body.appendChild(div);

// Créer avec attributs
const img = document.createElement('img');
img.src = 'photo.jpg';
img.alt = 'Photo';
div.appendChild(img);

// Créer plusieurs éléments
const list = document.createElement('ul');
['Item 1', 'Item 2', 'Item 3'].forEach(text => {
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
});

// Insérer avant
const parent = document.querySelector('.container');
const firstChild = parent.firstChild;
parent.insertBefore(div, firstChild);

// Retirer
div.remove();

// Ou
parent.removeChild(div);

// Remplacer
const newElement = document.createElement('p');
parent.replaceChild(newElement, div);`,
    cas_usage: [
      "Listes dynamiques",
      "Création de cartes",
      "Modales",
      "Notifications"
    ],
    piegesCommuns: [
      "Manipulation excessive (performance)",
      "Oublier de retirer event listeners",
      "innerHTML vs createElement (XSS)"
    ],
    bonnesPratiques: [
      "createElement pour sécurité",
      "Fragment pour multiples éléments",
      "remove() plutôt que removeChild",
      "Batch les modifications DOM"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Document/createElement"
    }
  },
  {
    id: "js-template-literals",
    categorie: "js",
    niveau: "intermediaire",
    titre: "Template literals",
    signification: "Littéraux de gabarit",
    description: "Chaînes de caractères avec interpolation",
    utilite: "Créer des chaînes dynamiques facilement",
    variantes: [
      "Backticks `text`",
      "${expression}",
      "Multi-lignes"
    ],
    exemple: `// Interpolation simple
const name = 'Alice';
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // "Hello, Alice!"

// Expressions
const a = 5, b = 10;
console.log(\`Sum: \${a + b}\`); // "Sum: 15"

// Multi-lignes
const html = \`
  <div class="card">
    <h2>\${name}</h2>
    <p>Bienvenue!</p>
  </div>
\`;

// Fonctions dans templates
const formatDate = (date) => date.toLocaleDateString();
const message = \`Aujourd'hui: \${formatDate(new Date())}\`;

// Tagged templates (avancé)
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}

const text = highlight\`Bonjour \${name}, vous avez \${5} messages\`;`,
    cas_usage: [
      "Génération HTML",
      "Messages dynamiques",
      "URLs",
      "Requêtes SQL"
    ],
    bonnesPratiques: [
      "Préférer aux concaténations",
      "Sanitiser pour HTML",
      "Lisibilité multi-lignes",
      "Expressions simples uniquement"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals"
    }
  },
  {
    id: "js-destructuring",
    categorie: "js",
    niveau: "intermediaire",
    titre: "Destructuring",
    signification: "Déstructuration",
    description: "Extraire des valeurs de tableaux/objets",
    utilite: "Simplifier l'extraction de données",
    variantes: [
      "Array destructuring",
      "Object destructuring",
      "Default values",
      "Rest operator"
    ],
    exemple: `// Tableaux
const [first, second] = [1, 2, 3];
console.log(first); // 1

// Sauter des éléments
const [a, , c] = [1, 2, 3];
console.log(c); // 3

// Objets
const user = { name: 'Alice', age: 25, city: 'Paris' };
const { name, age } = user;
console.log(name); // "Alice"

// Renommer
const { name: userName, age: userAge } = user;

// Valeurs par défaut
const { role = 'user' } = user;
console.log(role); // "user"

// Nested destructuring
const data = { user: { name: 'Bob', email: 'bob@example.com' } };
const { user: { name: userName2 } } = data;

// Paramètres de fonction
function greet({ name, age }) {
  console.log(\`\${name} a \${age} ans\`);
}
greet(user);

// Rest operator
const { name, ...rest } = user;
console.log(rest); // { age: 25, city: 'Paris' }`,
    cas_usage: [
      "Paramètres de fonction",
      "Extraction de données API",
      "Props React",
      "Swap de variables"
    ],
    bonnesPratiques: [
      "Rend le code plus lisible",
      "Valeurs par défaut pour sécurité",
      "Utile avec fetch/API",
      "Combine avec rest operator"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    }
  },
  {
    id: "js-spread-operator",
    categorie: "js",
    niveau: "intermediaire",
    titre: "Spread operator (...)",
    signification: "Opérateur de décomposition",
    description: "Étale les éléments d'un itérable",
    utilite: "Copier, fusionner, passer des arguments",
    variantes: [
      "Array spread",
      "Object spread",
      "Function arguments"
    ],
    exemple: `// Copier un tableau
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

// Fusionner des tableaux
const combined = [...arr1, 4, 5, ...arr2];

// Copier un objet
const user = { name: 'Alice', age: 25 };
const userCopy = { ...user };

// Fusionner des objets
const defaults = { theme: 'light', lang: 'fr' };
const settings = { theme: 'dark' };
const config = { ...defaults, ...settings };
// { theme: 'dark', lang: 'fr' }

// Ajouter des propriétés
const updatedUser = { ...user, city: 'Paris' };

// Arguments de fonction
const numbers = [1, 2, 3, 4, 5];
Math.max(...numbers); // 5

// Immutabilité
const original = [1, 2, 3];
const withNew = [...original, 4]; // Ne modifie pas original

// Convertir NodeList en Array
const divs = document.querySelectorAll('div');
const divArray = [...divs];`,
    cas_usage: [
      "Copie immutable",
      "Fusion de données",
      "Props React",
      "State management"
    ],
    bonnesPratiques: [
      "Copie shallow (attention objets imbriqués)",
      "Immutabilité des données",
      "Combiner avec destructuring",
      "Plus lisible que Object.assign()"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
    }
  },
  {
    id: "js-ternary",
    categorie: "js",
    niveau: "intermediaire",
    titre: "Ternary operator",
    signification: "Opérateur ternaire",
    description: "Condition en une ligne",
    utilite: "Simplifier les if/else simples",
    variantes: [
      "condition ? true : false",
      "Nested ternary",
      "Multiple conditions"
    ],
    exemple: `// Simple
const age = 18;
const status = age >= 18 ? 'majeur' : 'mineur';

// Avec fonction
const getStatus = (age) => age >= 18 ? 'majeur' : 'mineur';

// Dans JSX/Template
const message = \`Vous êtes \${age >= 18 ? 'majeur' : 'mineur'}\`;

// Assignation conditionnelle
const discount = isPremium ? 0.2 : 0.1;

// Nested (à éviter si complexe)
const grade = score >= 90 ? 'A' 
            : score >= 80 ? 'B'
            : score >= 70 ? 'C'
            : 'F';

// Dans return
function checkAge(age) {
  return age >= 18 ? true : false;
  // Mieux: return age >= 18;
}

// Nullish coalescing
const name = username ?? 'Anonyme';

// Logical OR
const displayName = username || 'Invité';`,
    cas_usage: [
      "Assignations conditionnelles",
      "Templates",
      "JSX React",
      "Classes CSS conditionnelles"
    ],
    piegesCommuns: [
      "Trop imbriqué (illisible)",
      "Oublier les parenthèses",
      "Complexité excessive"
    ],
    bonnesPratiques: [
      "Maximum 1 niveau d'imbrication",
      "if/else si logique complexe",
      "?? pour null/undefined",
      "|| pour valeurs falsy"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
    }
  },
  {
    id: "js-try-catch",
    categorie: "js",
    niveau: "intermediaire",
    titre: "try...catch",
    signification: "Gestion d'erreurs",
    description: "Capturer et gérer les erreurs",
    utilite: "Éviter que l'application crash",
    variantes: [
      "try...catch",
      "try...catch...finally",
      "throw new Error()"
    ],
    exemple: `// Basique
try {
  const data = JSON.parse(invalidJSON);
} catch (error) {
  console.error('Erreur de parsing:', error.message);
}

// Avec finally
try {
  const response = await fetch('/api/data');
  const data = await response.json();
} catch (error) {
  console.error('Erreur:', error);
} finally {
  console.log('Requête terminée');
  // Toujours exécuté
}

// Throw custom error
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division par zéro impossible');
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message);
}

// Async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}`,
    cas_usage: [
      "API calls",
      "JSON parsing",
      "File operations",
      "User input validation"
    ],
    piegesCommuns: [
      "Catch vide (masquer erreurs)",
      "Trop large (catch everything)",
      "Pas de log des erreurs"
    ],
    bonnesPratiques: [
      "Toujours logger les erreurs",
      "finally pour cleanup",
      "Messages d'erreur clairs",
      "Gérer erreurs spécifiques"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch"
    }
  }
];
