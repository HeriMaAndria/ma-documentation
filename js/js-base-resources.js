window.ressourcesJSBase = [
  {
    id: "js-queryselector",
    categorie: "js",
    niveau: "base",
    titre: "querySelector() / querySelectorAll()",
    signification: "Sélectionner des éléments DOM",
    description: "Méthodes pour sélectionner un ou plusieurs éléments avec des sélecteurs CSS",
    utilite: "Cibler des éléments HTML pour les manipuler",
    variantes: [
      "querySelector('selector')",
      "querySelectorAll('selector')",
      "document.querySelector()",
      "element.querySelector()"
    ],
    exemple: `// Sélectionner un seul élément
const titre = document.querySelector('h1');
const button = document.querySelector('.btn-primary');
const menu = document.querySelector('#menu');

// Sélectionner plusieurs éléments
const items = document.querySelectorAll('.item');
const links = document.querySelectorAll('a');

// Parcourir les éléments
items.forEach(item => {
  console.log(item.textContent);
});`,
    cas_usage: [
      "Manipulation du DOM",
      "Ajout d'événements",
      "Modification de contenu",
      "Animations dynamiques"
    ],
    piegesCommuns: [
      "querySelector retourne null si pas trouvé",
      "querySelectorAll retourne une NodeList (pas un Array)",
      "Oublier le . pour les classes et # pour les ids"
    ],
    bonnesPratiques: [
      "querySelector pour un élément, querySelectorAll pour plusieurs",
      "Utiliser des sélecteurs CSS standards",
      "Vérifier que l'élément existe avant manipulation",
      "Préférer querySelector à getElementById (plus flexible)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector"
    }
  },
  {
    id: "js-addeventlistener",
    categorie: "js",
    niveau: "base",
    titre: "addEventListener()",
    signification: "Écouter un événement",
    description: "Attache un gestionnaire d'événement à un élément",
    utilite: "Réagir aux actions de l'utilisateur",
    variantes: [
      "addEventListener('click', fn)",
      "addEventListener('input', fn)",
      "addEventListener('submit', fn)",
      "addEventListener('mouseover', fn)"
    ],
    exemple: `// Click sur un bouton
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  console.log('Bouton cliqué!');
});

// Input sur un champ
const input = document.querySelector('#search');
input.addEventListener('input', (e) => {
  console.log(e.target.value);
});

// Submit d'un formulaire
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Formulaire envoyé');
});`,
    cas_usage: [
      "Interactivité utilisateur",
      "Validation de formulaire",
      "Menus déroulants",
      "Animations au scroll"
    ],
    piegesCommuns: [
      "Oublier e.preventDefault() sur les formulaires",
      "Ne pas utiliser les arrow functions (problème de this)",
      "Ajouter plusieurs fois le même listener"
    ],
    bonnesPratiques: [
      "Toujours nommer les fonctions pour pouvoir les retirer",
      "Utiliser e.preventDefault() quand nécessaire",
      "Délégation d'événements pour les listes dynamiques",
      "removeEventListener pour nettoyer"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener"
    }
  },
  {
    id: "js-getelementbyid",
    categorie: "js",
    niveau: "base",
    titre: "getElementById() / getElementsByClassName()",
    signification: "Sélection d'éléments par ID ou classe",
    description: "Méthodes classiques pour sélectionner des éléments",
    utilite: "Cibler des éléments spécifiques (ancienne méthode)",
    variantes: [
      "getElementById('id')",
      "getElementsByClassName('class')",
      "getElementsByTagName('tag')"
    ],
    exemple: `// Par ID
const header = document.getElementById('header');

// Par classe (retourne HTMLCollection)
const buttons = document.getElementsByClassName('btn');

// Par tag
const paragraphs = document.getElementsByTagName('p');

// Conversion en array
const buttonsArray = Array.from(buttons);
buttonsArray.forEach(btn => {
  btn.style.color = 'blue';
});`,
    cas_usage: [
      "Code legacy",
      "Sélections simples",
      "Performance (légèrement plus rapide)"
    ],
    piegesCommuns: [
      "getElementsByClassName retourne une HTMLCollection (live)",
      "Pas de . ou # dans les sélecteurs",
      "HTMLCollection n'a pas forEach"
    ],
    bonnesPratiques: [
      "Préférer querySelector/querySelectorAll (plus flexible)",
      "getElementById est le plus rapide pour un élément unique",
      "Convertir en Array pour utiliser forEach",
      "HTMLCollection est 'live' (se met à jour automatiquement)"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById"
    }
  },
  {
    id: "js-innerhtml-textcontent",
    categorie: "js",
    niveau: "base",
    titre: "innerHTML / textContent",
    signification: "Contenu d'un élément",
    description: "Propriétés pour lire ou modifier le contenu d'un élément",
    utilite: "Changer le contenu textuel ou HTML d'un élément",
    variantes: [
      "element.innerHTML",
      "element.textContent",
      "element.innerText"
    ],
    exemple: `const div = document.querySelector('.content');

// textContent (texte seulement)
div.textContent = 'Nouveau texte';

// innerHTML (peut contenir du HTML)
div.innerHTML = '<p>Paragraphe avec <strong>HTML</strong></p>';

// Lire le contenu
console.log(div.textContent); // "Paragraphe avec HTML"
console.log(div.innerHTML);   // "<p>Paragraphe avec <strong>HTML</strong></p>"

// Ajouter du contenu
div.innerHTML += '<p>Ajout</p>';`,
    cas_usage: [
      "Mise à jour dynamique de contenu",
      "Affichage de données",
      "Templates simples",
      "Messages d'erreur"
    ],
    piegesCommuns: [
      "innerHTML peut causer des failles XSS",
      "innerHTML remplace tout le contenu",
      "textContent retire tout le HTML"
    ],
    bonnesPratiques: [
      "textContent pour du texte simple (plus sûr)",
      "innerHTML pour du HTML (sanitizer si données utilisateur)",
      "Préférer createElement() pour de la performance",
      "Ne jamais injecter du HTML non sanitisé"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML"
    }
  },
  {
    id: "js-classlist",
    categorie: "js",
    niveau: "base",
    titre: "classList (add, remove, toggle)",
    signification: "Manipulation des classes CSS",
    description: "Interface pour manipuler les classes d'un élément",
    utilite: "Ajouter, retirer ou basculer des classes CSS",
    variantes: [
      "classList.add('class')",
      "classList.remove('class')",
      "classList.toggle('class')",
      "classList.contains('class')"
    ],
    exemple: `const element = document.querySelector('.box');

// Ajouter une classe
element.classList.add('active');

// Retirer une classe
element.classList.remove('hidden');

// Basculer (toggle)
element.classList.toggle('visible');

// Vérifier si classe existe
if (element.classList.contains('active')) {
  console.log('Element est actif');
}

// Ajouter plusieurs classes
element.classList.add('card', 'shadow', 'rounded');`,
    cas_usage: [
      "Animations CSS",
      "États actifs",
      "Thèmes (dark mode)",
      "Menus mobiles"
    ],
    piegesCommuns: [
      "Ne pas mettre le . devant le nom de classe",
      "Oublier que toggle retourne un boolean"
    ],
    bonnesPratiques: [
      "Préférer classList à className",
      "toggle pour les états on/off",
      "Nommer les classes selon leur fonction",
      "Peut ajouter/retirer plusieurs classes à la fois"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Element/classList"
    }
  },
  {
    id: "js-attributes",
    categorie: "js",
    niveau: "base",
    titre: "setAttribute() / getAttribute()",
    signification: "Manipulation des attributs",
    description: "Méthodes pour lire ou modifier les attributs HTML",
    utilite: "Changer dynamiquement les attributs d'un élément",
    variantes: [
      "setAttribute('attr', 'value')",
      "getAttribute('attr')",
      "removeAttribute('attr')",
      "hasAttribute('attr')"
    ],
    exemple: `const img = document.querySelector('img');

// Définir un attribut
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('alt', 'Nouvelle image');

// Lire un attribut
const source = img.getAttribute('src');

// Vérifier si attribut existe
if (img.hasAttribute('data-id')) {
  console.log('ID:', img.getAttribute('data-id'));
}

// Retirer un attribut
img.removeAttribute('title');

// Accès direct (pour certains attributs)
img.src = 'image.jpg';
img.alt = 'Description';`,
    cas_usage: [
      "Changement d'images",
      "Attributs data-*",
      "Liens dynamiques",
      "Désactivation d'éléments"
    ],
    piegesCommuns: [
      "Certains attributs ont des propriétés directes",
      "Les attributs booléens (disabled, checked)"
    ],
    bonnesPratiques: [
      "Utiliser les propriétés directes quand disponibles",
      "data-* pour stocker des données custom",
      "setAttribute pour tous les attributs HTML",
      "Préférer .disabled = true à setAttribute('disabled')"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute"
    }
  },
  {
    id: "js-console-log",
    categorie: "js",
    niveau: "base",
    titre: "console.log()",
    signification: "Afficher dans la console",
    description: "Méthode pour déboguer en affichant des informations",
    utilite: "Déboguer et tracer l'exécution du code",
    variantes: [
      "console.log()",
      "console.error()",
      "console.warn()",
      "console.table()",
      "console.dir()"
    ],
    exemple: `// Affichage simple
console.log('Hello World');

// Variables
const user = { name: 'Alice', age: 25 };
console.log('User:', user);

// Plusieurs valeurs
console.log('x:', x, 'y:', y);

// Erreurs et warnings
console.error('Erreur critique!');
console.warn('Attention!');

// Tableau formaté
console.table([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
]);

// Structure d'objet
console.dir(document.body);`,
    cas_usage: [
      "Débogage",
      "Vérification de valeurs",
      "Traçage d'exécution",
      "Tests rapides"
    ],
    piegesCommuns: [
      "Oublier de retirer les console.log en production",
      "Trop de logs ralentit l'application"
    ],
    bonnesPratiques: [
      "Utiliser des labels descriptifs",
      "console.table() pour les tableaux",
      "console.error() pour les erreurs",
      "Retirer en production ou utiliser un logger"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/API/Console/log"
    }
  },
  {
    id: "js-variables",
    categorie: "js",
    niveau: "base",
    titre: "Variables (let, const, var)",
    signification: "Déclaration de variables",
    description: "Mots-clés pour déclarer des variables",
    utilite: "Stocker des valeurs en mémoire",
    variantes: [
      "let variable",
      "const constante",
      "var ancienne"
    ],
    exemple: `// const: ne peut pas être réassignée
const PI = 3.14159;
const user = { name: 'Alice' };

// let: peut être réassignée
let count = 0;
count = 1; // OK

// var: ancienne syntaxe (éviter)
var oldStyle = 'éviter';

// Portée de bloc
if (true) {
  let blockScoped = 'existe seulement ici';
  const alsoBlock = 'pareil';
}

// Objets et tableaux avec const
const arr = [1, 2, 3];
arr.push(4); // OK (modification du contenu)
// arr = []; // ERREUR (réassignation)`,
    cas_usage: [
      "Stocker des données",
      "Compteurs",
      "Configuration",
      "État de l'application"
    ],
    piegesCommuns: [
      "Utiliser var (problèmes de scope)",
      "Oublier de déclarer (devient globale)",
      "Confondre const immuable avec objet immuable"
    ],
    bonnesPratiques: [
      "Toujours utiliser const par défaut",
      "let seulement si réassignation nécessaire",
      "Ne jamais utiliser var",
      "Noms de variables descriptifs"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let"
    }
  },
  {
    id: "js-functions",
    categorie: "js",
    niveau: "base",
    titre: "Fonctions (function, arrow functions)",
    signification: "Déclaration de fonctions",
    description: "Différentes syntaxes pour créer des fonctions",
    utilite: "Réutiliser du code et organiser la logique",
    variantes: [
      "function nom() {}",
      "const nom = () => {}",
      "const nom = function() {}"
    ],
    exemple: `// Fonction classique
function saluer(nom) {
  return 'Bonjour ' + nom;
}

// Arrow function
const additionner = (a, b) => {
  return a + b;
};

// Arrow function courte (return implicite)
const doubler = x => x * 2;

// Fonction anonyme
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  console.log('Cliqué');
});

// Arrow function dans callback
const nombres = [1, 2, 3];
const doubles = nombres.map(n => n * 2);`,
    cas_usage: [
      "Réutilisation de code",
      "Event handlers",
      "Callbacks",
      "Traitement de données"
    ],
    piegesCommuns: [
      "Arrow functions n'ont pas leur propre 'this'",
      "Oublier le return",
      "Mauvaise utilisation de this"
    ],
    bonnesPratiques: [
      "Arrow functions pour callbacks courts",
      "function pour méthodes d'objets",
      "Nommer les fonctions pour le débogage",
      "Une fonction = une responsabilité"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
    }
  },
  {
    id: "js-conditions",
    categorie: "js",
    niveau: "base",
    titre: "Conditions (if, else, switch)",
    signification: "Structures conditionnelles",
    description: "Exécuter du code selon des conditions",
    utilite: "Contrôler le flux d'exécution du programme",
    variantes: [
      "if (condition) {}",
      "if...else",
      "if...else if...else",
      "switch"
    ],
    exemple: `// If simple
const age = 18;
if (age >= 18) {
  console.log('Majeur');
}

// If...else
if (score >= 50) {
  console.log('Réussi');
} else {
  console.log('Échoué');
}

// If...else if...else
if (note >= 90) {
  grade = 'A';
} else if (note >= 80) {
  grade = 'B';
} else {
  grade = 'C';
}

// Switch
switch (jour) {
  case 'lundi':
    console.log('Début de semaine');
    break;
  case 'vendredi':
    console.log('Weekend proche');
    break;
  default:
    console.log('Jour normal');
}`,
    cas_usage: [
      "Validation",
      "Navigation conditionnelle",
      "Affichage dynamique",
      "Gestion d'erreurs"
    ],
    piegesCommuns: [
      "Oublier break dans switch",
      "Utiliser = au lieu de ===",
      "Conditions trop complexes"
    ],
    bonnesPratiques: [
      "Utiliser === au lieu de ==",
      "switch pour plusieurs cas identiques",
      "Éviter les conditions trop imbriquées",
      "Utiliser l'opérateur ternaire pour les cas simples"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else"
    }
  },
  {
    id: "js-loops",
    categorie: "js",
    niveau: "base",
    titre: "Boucles (for, while, forEach)",
    signification: "Structures de répétition",
    description: "Répéter du code plusieurs fois",
    utilite: "Parcourir des tableaux et itérer",
    variantes: [
      "for (init; condition; increment) {}",
      "while (condition) {}",
      "forEach()",
      "for...of"
    ],
    exemple: `// For classique
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// forEach
const fruits = ['pomme', 'banane', 'orange'];
fruits.forEach(fruit => {
  console.log(fruit);
});

// for...of (moderne)
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in (objets)
const user = { name: 'Alice', age: 25 };
for (const key in user) {
  console.log(key, user[key]);
}`,
    cas_usage: [
      "Parcourir des tableaux",
      "Répéter des actions",
      "Traiter des données",
      "Générer du contenu"
    ],
    piegesCommuns: [
      "Boucle infinie (oublier l'incrémentation)",
      "Modifier un tableau pendant forEach",
      "Confondre for...in et for...of"
    ],
    bonnesPratiques: [
      "forEach pour les tableaux simples",
      "for...of pour les itérables modernes",
      "for classique pour contrôle précis",
      "Éviter for...in sur les tableaux"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for"
    }
  },
  {
    id: "js-operators",
    categorie: "js",
    niveau: "base",
    titre: "Opérateurs (+, -, *, /, %, ===, !==)",
    signification: "Opérateurs arithmétiques et de comparaison",
    description: "Symboles pour effectuer des opérations",
    utilite: "Calculer et comparer des valeurs",
    variantes: [
      "Arithmétiques: +, -, *, /, %",
      "Comparaison: ===, !==, <, >, <=, >=",
      "Logiques: &&, ||, !"
    ],
    exemple: `// Arithmétiques
const sum = 5 + 3;        // 8
const diff = 10 - 4;      // 6
const prod = 6 * 7;       // 42
const quot = 20 / 4;      // 5
const reste = 10 % 3;     // 1 (modulo)

// Comparaison stricte
5 === 5;                  // true
5 === '5';                // false
5 !== 3;                  // true

// Comparaison (éviter == et !=)
5 == '5';                 // true (conversion)
5 === '5';                // false (strict)

// Logiques
const isAdult = age >= 18 && age < 65;
const isWeekend = day === 'samedi' || day === 'dimanche';
const isNotEmpty = !isEmpty;

// Incrément/Décrément
let count = 0;
count++;                  // 1
count--;                  // 0`,
    cas_usage: [
      "Calculs mathématiques",
      "Validations",
      "Conditions complexes",
      "Compteurs"
    ],
    piegesCommuns: [
      "Utiliser == au lieu de ===",
      "Division par zéro",
      "Ordre des opérations"
    ],
    bonnesPratiques: [
      "Toujours utiliser === et !==",
      "Utiliser parenthèses pour clarifier",
      "Modulo (%) pour nombres pairs/impairs",
      "NaN pour résultats invalides"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators"
    }
  }
];
