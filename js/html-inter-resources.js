window.ressourcesHTMLInter = [
  {
    id: "html-form",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;form&gt;",
    signification: "Formulaire",
    description: "Conteneur pour collecter des données utilisateur",
    utilite: "Créer des formulaires interactifs",
    variantes: [
      "&lt;form action='url' method='post'&gt;",
      "&lt;form onsubmit='handler'&gt;",
      "&lt;form novalidate&gt;"
    ],
    exemple: `<form action="/submit" method="POST">
  <label for="name">Nom:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Envoyer</button>
</form>

<!-- Form avec validation JS -->
<form onsubmit="handleSubmit(event)">
  <input type="text" name="username">
  <button type="submit">Valider</button>
</form>`,
    cas_usage: [
      "Contact",
      "Inscription/Connexion",
      "Recherche",
      "Commandes"
    ],
    piegesCommuns: [
      "Oublier name sur les inputs",
      "Mauvaise méthode (GET vs POST)",
      "Pas de validation"
    ],
    bonnesPratiques: [
      "Toujours lier label avec input (for/id)",
      "Utiliser method='POST' pour données sensibles",
      "preventDefault() en JS si traitement custom",
      "Validation côté client ET serveur"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/form"
    }
  },
  {
    id: "html-input",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;input&gt;",
    signification: "Champ de saisie",
    description: "Élément pour recevoir des données utilisateur",
    utilite: "Collecter différents types de données",
    variantes: [
      "type='text'",
      "type='email'",
      "type='password'",
      "type='number'",
      "type='checkbox'",
      "type='radio'",
      "type='file'"
    ],
    exemple: `<!-- Types courants -->
<input type="text" placeholder="Votre nom">
<input type="email" required>
<input type="password" minlength="8">
<input type="number" min="0" max="100">
<input type="date">
<input type="file" accept="image/*">

<!-- Checkbox et Radio -->
<input type="checkbox" id="agree" name="agree">
<label for="agree">J'accepte</label>

<input type="radio" name="gender" value="m" id="male">
<label for="male">Homme</label>
<input type="radio" name="gender" value="f" id="female">
<label for="female">Femme</label>`,
    cas_usage: [
      "Formulaires",
      "Recherche",
      "Upload de fichiers",
      "Sélections multiples"
    ],
    piegesCommuns: [
      "Oublier l'attribut name",
      "Mauvais type d'input",
      "Pas de label associé"
    ],
    bonnesPratiques: [
      "Utiliser le bon type pour validation native",
      "placeholder pour aide, pas pour label",
      "required, min, max pour validation",
      "autocomplete pour UX"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input"
    }
  },
  {
    id: "html-button",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;button&gt;",
    signification: "Bouton",
    description: "Élément cliquable pour actions",
    utilite: "Déclencher des actions",
    variantes: [
      "type='button'",
      "type='submit'",
      "type='reset'"
    ],
    exemple: `<!-- Bouton simple -->
<button type="button">Cliquez-moi</button>

<!-- Dans un formulaire -->
<form>
  <button type="submit">Envoyer</button>
  <button type="reset">Réinitialiser</button>
</form>

<!-- Avec icône -->
<button>
  <img src="icon.svg" alt="">
  <span>Télécharger</span>
</button>

<!-- Désactivé -->
<button disabled>Non disponible</button>`,
    cas_usage: [
      "Actions utilisateur",
      "Soumission de formulaires",
      "Navigation",
      "Contrôles"
    ],
    piegesCommuns: [
      "Type par défaut est 'submit' dans un form",
      "Utiliser <a> pour des boutons",
      "Oublier disabled state"
    ],
    bonnesPratiques: [
      "Spécifier type='button' hors formulaire",
      "Texte descriptif de l'action",
      "États visuels (hover, active, disabled)",
      "Accessible au clavier"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/button"
    }
  },
  {
    id: "html-textarea",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;textarea&gt;",
    signification: "Zone de texte multi-lignes",
    description: "Champ pour texte long",
    utilite: "Saisie de texte sur plusieurs lignes",
    variantes: [
      "&lt;textarea&gt;",
      "&lt;textarea rows='5'&gt;",
      "&lt;textarea maxlength='500'&gt;"
    ],
    exemple: `<!-- Zone de texte basique -->
<textarea name="message" rows="5" cols="40"></textarea>

<!-- Avec placeholder et limite -->
<textarea 
  placeholder="Votre message..." 
  maxlength="500"
  required
></textarea>

<!-- Non redimensionnable -->
<textarea style="resize: none;"></textarea>`,
    cas_usage: [
      "Commentaires",
      "Messages",
      "Descriptions",
      "Formulaires de contact"
    ],
    piegesCommuns: [
      "Oublier de fermer la balise",
      "Pas de value (utiliser le contenu)",
      "resize gênant pour le layout"
    ],
    bonnesPratiques: [
      "rows pour hauteur initiale",
      "maxlength pour limiter",
      "resize: vertical en CSS",
      "Compteur de caractères en JS"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea"
    }
  },
  {
    id: "html-select",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;select&gt; / &lt;option&gt;",
    signification: "Liste déroulante",
    description: "Menu de sélection avec options",
    utilite: "Choisir parmi plusieurs options",
    variantes: [
      "&lt;select&gt;",
      "&lt;select multiple&gt;",
      "&lt;optgroup&gt;"
    ],
    exemple: `<!-- Select simple -->
<select name="country">
  <option value="">Choisir un pays</option>
  <option value="fr">France</option>
  <option value="be">Belgique</option>
  <option value="ch">Suisse</option>
</select>

<!-- Avec groupes -->
<select name="fruit">
  <optgroup label="Agrumes">
    <option value="orange">Orange</option>
    <option value="citron">Citron</option>
  </optgroup>
  <optgroup label="Baies">
    <option value="fraise">Fraise</option>
  </optgroup>
</select>

<!-- Sélection multiple -->
<select multiple name="languages">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
</select>`,
    cas_usage: [
      "Sélection de pays",
      "Filtres",
      "Catégories",
      "Paramètres"
    ],
    bonnesPratiques: [
      "Option vide par défaut",
      "value différent du texte affiché",
      "optgroup pour regrouper",
      "selected pour valeur par défaut"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/select"
    }
  },
  {
    id: "html-label",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;label&gt;",
    signification: "Étiquette de formulaire",
    description: "Associe un texte à un champ de formulaire",
    utilite: "Améliorer l'accessibilité et l'UX",
    variantes: [
      "&lt;label for='id'&gt;",
      "&lt;label&gt;&lt;input&gt;&lt;/label&gt;"
    ],
    exemple: `<!-- Avec for/id -->
<label for="username">Nom d'utilisateur:</label>
<input type="text" id="username" name="username">

<!-- Label englobant -->
<label>
  Email:
  <input type="email" name="email">
</label>

<!-- Checkbox avec label -->
<label for="terms">
  <input type="checkbox" id="terms" name="terms">
  J'accepte les conditions
</label>`,
    cas_usage: [
      "Tous les champs de formulaire",
      "Checkboxes",
      "Radio buttons",
      "Accessibilité"
    ],
    bonnesPratiques: [
      "Toujours associer label et input",
      "Cliquer sur label = focus sur input",
      "for/id pour accessibilité",
      "Texte clair et descriptif"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/label"
    }
  },
  {
    id: "html-table",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;table&gt; / &lt;tr&gt; / &lt;td&gt;",
    signification: "Tableau",
    description: "Structure pour données tabulaires",
    utilite: "Afficher des données en lignes et colonnes",
    variantes: [
      "&lt;table&gt;",
      "&lt;thead&gt; / &lt;tbody&gt; / &lt;tfoot&gt;",
      "&lt;th&gt;",
      "colspan / rowspan"
    ],
    exemple: `<table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Âge</th>
      <th>Ville</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
      <td>Lyon</td>
    </tr>
  </tbody>
</table>

<!-- Fusion de cellules -->
<td colspan="2">Fusionné horizontalement</td>
<td rowspan="2">Fusionné verticalement</td>`,
    cas_usage: [
      "Données tabulaires",
      "Comparaisons",
      "Rapports",
      "Dashboards"
    ],
    piegesCommuns: [
      "Utiliser pour la mise en page",
      "Oublier thead/tbody",
      "Pas de caption pour accessibilité"
    ],
    bonnesPratiques: [
      "Uniquement pour données tabulaires",
      "thead/tbody/tfoot pour structure",
      "th pour en-têtes",
      "caption pour description"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/table"
    }
  },
  {
    id: "html-semantic",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;header&gt; / &lt;footer&gt; / &lt;nav&gt;",
    signification: "Éléments sémantiques",
    description: "Balises pour structure significative",
    utilite: "Structurer le document de manière sémantique",
    variantes: [
      "&lt;header&gt;",
      "&lt;footer&gt;",
      "&lt;nav&gt;",
      "&lt;main&gt;",
      "&lt;aside&gt;"
    ],
    exemple: `<header>
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/about">À propos</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Titre de l'article</h1>
    <p>Contenu principal...</p>
  </article>
  
  <aside>
    <h2>Articles liés</h2>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Mon Site</p>
</footer>`,
    cas_usage: [
      "Structure de page",
      "SEO",
      "Accessibilité",
      "Navigation"
    ],
    bonnesPratiques: [
      "Un seul <main> par page",
      "header/footer peuvent être multiples",
      "<nav> pour navigation principale",
      "Améliore le SEO et l'accessibilité"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/header"
    }
  },
  {
    id: "html-section-article",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;section&gt; / &lt;article&gt; / &lt;aside&gt;",
    signification: "Structure sémantique du contenu",
    description: "Balises pour organiser le contenu",
    utilite: "Diviser le contenu de manière significative",
    variantes: [
      "&lt;section&gt;",
      "&lt;article&gt;",
      "&lt;aside&gt;"
    ],
    exemple: `<article>
  <h2>Article de blog</h2>
  
  <section>
    <h3>Introduction</h3>
    <p>Texte d'introduction...</p>
  </section>
  
  <section>
    <h3>Développement</h3>
    <p>Contenu principal...</p>
  </section>
</article>

<aside>
  <h3>Sidebar</h3>
  <p>Contenu complémentaire</p>
</aside>`,
    cas_usage: [
      "Blog posts",
      "Articles de news",
      "Documentation",
      "Contenu éditorial"
    ],
    bonnesPratiques: [
      "<article> pour contenu autonome",
      "<section> pour regrouper par thème",
      "<aside> pour contenu tangentiel",
      "Chaque section devrait avoir un heading"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/section"
    }
  },
  {
    id: "html-iframe",
    categorie: "html",
    niveau: "intermediaire",
    titre: "&lt;iframe&gt;",
    signification: "Cadre intégré",
    description: "Intègre une autre page HTML",
    utilite: "Embarquer du contenu externe",
    variantes: [
      "&lt;iframe src='url'&gt;",
      "&lt;iframe sandbox&gt;",
      "loading='lazy'"
    ],
    exemple: `<!-- YouTube embed -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen
></iframe>

<!-- Google Maps -->
<iframe 
  src="https://maps.google.com/..."
  loading="lazy"
></iframe>

<!-- Sécurisé avec sandbox -->
<iframe 
  src="external.html"
  sandbox="allow-scripts"
></iframe>`,
    cas_usage: [
      "Vidéos YouTube",
      "Cartes Google Maps",
      "Widgets externes",
      "Contenu tiers"
    ],
    piegesCommuns: [
      "Problèmes de sécurité",
      "Performance (lazy loading)",
      "Responsive (aspect ratio)"
    ],
    bonnesPratiques: [
      "loading='lazy' pour performance",
      "sandbox pour sécurité",
      "aspect-ratio en CSS",
      "title pour accessibilité"
    ],
    liens: {
      mdn: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe"
    }
  }
];