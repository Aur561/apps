/*
 * Contenu du portfolio (bilingue FR / EN).
 *
 * IMG_BASE : dossier (ou URL) des images. Les noms de fichiers sont ajoutés à la suite
 * et encodés automatiquement. Exemples :
 *   IMG_BASE = "../img/"                                      -> test local depuis src/
 *   IMG_BASE = "https://<utilisateur>.github.io/<depot>/img/" -> URL absolue (publication)
 *
 * Langues : "fr" / "en". La langue est choisie dans cet ordre :
 *   1. paramètre d'URL  ?lang=en   (utile pour un QR code ou un lien dédié)
 *   2. dernier choix du visiteur (mémorisé dans son navigateur)
 *   3. langue du navigateur (français -> fr, sinon en), puis DEFAULT_LANG
 *
 * Textes de l'interface : `ui`. Réalisations : `apps` (chaque texte existe en fr et en).
 * Pour chaque capture : { file, kind, alt:{fr,en} }
 *   kind = "wide" (écran large) | "phone" (mobile) | "tall" (portrait)
 *
 * Ajouter une langue : ajouter son code dans LANGS, puis une entrée par langue dans `ui`,
 * `categories` et chaque champ bilingue de `apps`.
 */
window.PORTFOLIO = {
  IMG_BASE: "img/",
  DEFAULT_LANG: "fr",
  LANGS: ["fr", "en"],

  ui: {
    fr: {
      pageTitle: "Aurélien Leclercq — Applications Produit",
      metaDescription: "Exemples d'applications conçues par Aurélien Leclercq avec l'appui de l'IA : patrimoine, budget, cave, véhicules, santé, sport.",
      brandAria: "Accueil",
      navAria: "Sections",
      navMethod: "Méthode",
      navExamples: "Exemples",
      langAria: "Langue",
      eyebrow: "Portfolio d'applications du quotidien",
      aiPill: "Conçues avec l'IA, pilotées par l'humain",
      heroTitle: "Des applications <em>utiles</em>,<br>conçues avec l'IA.",
      lead: "Quelques exemples de ce que je sais faire : partir d'un besoin concret et, avec l'appui de l'intelligence artificielle, en faire un outil clair, fiable et agréable à utiliser.",
      ctaExamples: "Voir les exemples",
      methodLabel: "Ma méthode",
      methodTitle: "L'IA accélère, je garde la main",
      methodText: "J'utilise l'intelligence artificielle comme un partenaire de développement : elle fait gagner un temps précieux, mais les choix, la qualité et la responsabilité restent les miens.",
      step1Title: "Cadrer",
      step1Text: "Etudier et challenger un besoin grâce à l'IA. Les règles métier et le résultat attendu sont fixés avant d'écrire la moindre ligne.",
      step2Title: "Construire avec l'IA",
      step2Text: "Je pilote l'assistant par itérations rapides : prototype, retour, ajustement.",
      step3Title: "Relire et vérifier",
      step3Text: "Chaque résultat est relu, testé et corrigé. L'IA propose, je décide.",
      step4Title: "Sécuriser et documenter",
      step4Text: "Gestion des données, bonnes pratiques et documentation pour que l'outil dure.",
      step5Title: "Améliorer",
      step5Text: "Avec l'IA, je fais le bilan : ce qui a marché, ce qui a coincé. J'en tire une norme et j'améliore l'assistant pour que la séquence suivante soit plus rapide et plus fiable.",
      examplesTitle: "Exemples de réalisations",
      filterAria: "Filtrer par thème",
      filterAll: "Toutes",
      problemLabel: "Problème à résoudre",
      skillsLabel: "Partis pris",
      closingTitle: "Du besoin au produit.",
      closingText: "Ces réalisations illustrent ma pratique du product management : comprendre un besoin, cadrer, arbitrer, livrer, puis améliorer, avec l'IA comme accélérateur.",
      linkedin: "Retrouvez-moi sur LinkedIn",
      footer: "© {year} Aurélien Leclercq — Captures d'écran réalisées avec des données de démonstration.",
      lightboxAria: "Aperçu de la capture",
      close: "Fermer",
      enlarge: "Agrandir"
    },
    en: {
      pageTitle: "Aurélien Leclercq — Product Applications",
      metaDescription: "Examples of applications designed by Aurélien Leclercq using AI: financial assets, budget, wine cellar, vehicles, health, sports.",
      brandAria: "Home",
      navAria: "Sections",
      navMethod: "Method",
      navExamples: "Examples",
      langAria: "Language",
      eyebrow: "Everyday Applications Portfolio",
      aiPill: "Built with AI, steered by a human",
      heroTitle: "<em>Useful</em> applications,<br>built with AI.",
      lead: "A few examples of what I do: start from a tangible need and, leveraging artificial intelligence, turn it into a clear, reliable, and user-friendly tool.",
      ctaExamples: "View Examples",
      methodLabel: "My Method",
      methodTitle: "AI speeds things up, I stay in control",
      methodText: "I use artificial intelligence as a co-development partner: it saves precious time, but the decisions, quality assurance, and accountability remain entirely mine.",
      step1Title: "Frame",
      step1Text: "Brainstorming with AI: defining needs, market trends, competitors, and technical feasibility. Business rules and expected outcomes are locked in before writing a single line of code.",
      step2Title: "Build with AI",
      step2Text: "Steering the assistant through rapid iterations: prototyping, gathering feedback, and continuous adjustments.",
      step3Title: "Review & Verify",
      step3Text: "Every output is thoroughly reviewed, tested, and refined. AI proposes, I decide.",
      step4Title: "Secure & Document",
      step4Text: "Implementing robust data handling, industry best practices, and documentation to ensure long-term reliability.",
      step5Title: "Optimize",
      step5Text: "Conducting a debrief with AI: assessing wins and roadblocks. I establish new standards and fine-tune the assistant to make the next cycle faster and more reliable.",
      examplesTitle: "Featured Work",
      filterAria: "Filter by theme",
      filterAll: "All",
      problemLabel: "Problem to Solve",
      skillsLabel: "Product choices",
      closingTitle: "From Need to Product.",
      closingText: "These projects showcase my product management approach: understanding user needs, framing, prioritization, delivery, and iterative improvement—with AI as a powerful accelerator.",
      linkedin: "Connect on LinkedIn",
      footer: "© {year} Aurélien Leclercq — Screenshots feature demo data. Interfaces are in French.",
      lightboxAria: "Screenshot preview",
      close: "Close",
      enlarge: "Enlarge"
    }
  },

  categories: {
    finances: { fr: "Finances", en: "Finance" },
    maison:   { fr: "Maison",   en: "Home" },
    sports:   { fr: "Sports",   en: "Sports" },
    loisirs:  { fr: "Loisirs",  en: "Leisure" }
  },

  apps: [
    {
      id: "patrimoine",
      category: "finances",
      accent: "#b8892f",
      name: { fr: "Mon Patrimoine", en: "My Net Worth" },
      description: {
        fr: "Synthèse immobilière et financière, projections et suivi du désendettement",
        en: "Real estate and financial overview, projections, and debt payoff tracking"
      },
      problem: {
        fr: "Entre l'immobilier, la bourse et les emprunts à rembourser, un particulier manque de visibilité pour optimiser sa stratégie patrimoniale globale.",
        en: "Balancing real estate assets, market investments, and outstanding loans makes it hard for individuals to see the big picture and optimize their financial strategy."
      },
      skills: {
        fr: [
          "Transformer des données financières et immobilières complexes en un tableau de bord global",
          "Modéliser et simuler : projections sur 15 à 20 ans, calculs fiscaux et courbes de désendettement",
          "Intégrer le calcul d'amortissement des prêts pour valoriser le patrimoine net en temps réel",
          "Concevoir une interface dense mais claire, optimisée pour ordinateur et mobile"
        ],
        en: [
          "Turned complex real estate and financial data into a unified, high-level dashboard",
          "Modeled and simulated long-term scenarios: 15—20-year projections, tax impacts, and debt payoff curves",
          "Integrated loan amortization schedules to calculate and visualize real-time net worth evolution",
          "Designed a data-dense yet clear interface, optimized for both desktop and mobile"
        ]
      },
      images: [
        { file: "10-patrimoine-synthese.webp", kind: "wide", alt: { fr: "Synthèse du patrimoine", en: "Net worth overview" } },
        { file: "11-patrimoine-actifs.webp", kind: "wide", alt: { fr: "Détail des actifs financiers", en: "Financial assets breakdown" } },
        { file: "12-patrimoine-mobile-actifs.webp", kind: "phone", alt: { fr: "Actifs financiers sur mobile", en: "Financial assets on mobile" } }
      ]
    },
    {
      id: "budget",
      category: "finances",
      accent: "#2f7a5a",
      name: { fr: "Mon budget", en: "My Budget" },
      description: { fr: "Suivi du budget familial", en: "Family budget tracking" },
      problem: {
        fr: "Réduire ses charges et ses abonnements : repérer facilement les économies réalisables, avec un comparateur d'offres indépendant des plateformes de comparaison.",
        en: "Identifying unnecessary expenses and redundant subscriptions to unlock quick savings, with an offer comparator independent of comparison platforms."
      },
      skills: {
        fr: [
          "Rendre des chiffres parlants pour suivre son budget : indicateurs clés, répartition, tendances, consommation",
          "Avoir un suivi de consommation d'énergie clair et simple",
          "Aider à la décision grâce à des pistes d'optimisation chiffrées et un comparateur d'offres",
          "Créer une interface chaleureuse et cohérente, du poste de travail au téléphone mobile"
        ],
        en: [
          "Turned raw numbers into meaningful insights to track a budget: key indicators, breakdowns, trends, consumption",
          "Provided clear, simple energy consumption tracking",
          "Supported decisions with quantified optimization leads and an offer comparator",
          "Created a warm, consistent interface from desktop to mobile"
        ]
      },
      images: [
        { file: "20-budget-synthese.webp", kind: "wide", alt: { fr: "Synthèse du budget", en: "Budget overview" } },
        { file: "21-budget-charges.webp", kind: "wide", alt: { fr: "Charges et pistes d'économies", en: "Expenses and savings opportunities" } },
        { file: "23-budget-comparateur.webp", kind: "wide", alt: { fr: "Comparateur d'offres d'énergie", en: "Energy offer comparator" } },
        { file: "22-budget-mobile-evolution-charges.webp", kind: "phone", alt: { fr: "Évolution des charges sur mobile", en: "Expense trends on mobile" } },
        { file: "24-budget-mobile-comparateur.webp", kind: "phone", alt: { fr: "Comparateur d'offres sur mobile", en: "Offer comparator on mobile" } }
      ]
    },
    {
      id: "cave",
      category: "maison",
      accent: "#8a6a2f",
      name: { fr: "Ma cave", en: "My Wine Cellar" },
      description: { fr: "Inventaire et suivi de la cave à vin", en: "Wine cellar inventory and tracking" },
      problem: {
        fr: "Choisir rapidement le meilleur vin disponible en cave en fonction du repas préparé.",
        en: "Finding the best available wine from the cellar to perfectly match a specific meal."
      },
      skills: {
        fr: [
          "Imaginer une expérience utilisateur fluide et soignée entre mobile et ordinateur",
          "Intégrer de l'intelligence métier dans l'outil : fenêtres de dégustation, recommandations d'accords",
          "Modéliser l'espace réel pour localiser instantanément l'emplacement des bouteilles"
        ],
        en: [
          "Crafted a seamless, polished user experience across desktop and mobile devices",
          "Built domain intelligence into the tool: peak drinking windows and pairing recommendations",
          "Modeled physical storage spaces to map and locate bottles instantly"
        ]
      },
      images: [
        { file: "30-cave-que-boire.webp", kind: "wide", alt: { fr: "Que boire ? et fiche d'une bouteille", en: "What to drink selection and bottle profile" } },
        { file: "31-cave-mobile-emplacement.webp", kind: "phone", alt: { fr: "Emplacement d'une bouteille sur mobile", en: "Bottle location on mobile" } }
      ]
    },
    {
      id: "pharmacie",
      category: "maison",
      accent: "#2d6a5a",
      name: { fr: "Ma pharmacie", en: "My Medicine Cabinet" },
      description: { fr: "Suivi de la pharmacie familiale", en: "Family medicine cabinet tracker" },
      problem: {
        fr: "Réduire le gaspillage de médicaments en évitant de racheter des produits déjà en stock.",
        en: "Reducing medical waste and unnecessary costs by avoiding duplicate purchases."
      },
      skills: {
        fr: [
          "Concevoir une application mobile ultra-simple, pensée pour un usage quotidien",
          "Créer des alertes visuelles claires pour afficher l'essentiel d'un simple coup d'œil (dates de péremption)",
          "Intégrer un accès direct aux notices d'utilisation officielles",
          "Optimiser la saisie rapide et concevoir des filtres de recherche efficaces"
        ],
        en: [
          "Designed an ultra-simple mobile application tailored for frictionless daily use",
          "Created clear visual alerts providing critical product status (e.g., expiration dates) at a glance",
          "Integrated direct access to official medical leaflets and guidelines",
          "Streamlined data entry and engineered efficient search filters"
        ]
      },
      images: [
        { file: "40-pharmacie-mobile-liste.webp", kind: "phone", alt: { fr: "Liste des médicaments sur mobile", en: "Medicine list on mobile" } },
        { file: "41-pharmacie-mobile-ajouter.webp", kind: "phone", alt: { fr: "Ajout d'un médicament sur mobile", en: "Adding a medicine on mobile" } }
      ]
    },
    {
      id: "vehicules",
      category: "maison",
      accent: "#2f4fe0",
      name: { fr: "Mes véhicules", en: "My Vehicles" },
      description: { fr: "Carnet d'entretien des véhicules", en: "Vehicle maintenance log" },
      problem: {
        fr: "Suivre et anticiper les échéances d'entretien pour agir au bon moment.",
        en: "Tracking and anticipating vehicle maintenance milestones to take action at the right time."
      },
      skills: {
        fr: [
          "Planifier : calcul automatique des échéances d'entretien et alertes de retard",
          "Visualiser : suivi du kilométrage, des coûts et statistiques globales par véhicule",
          "Déployer une même application pour deux expériences adaptées : ordinateur et mobile"
        ],
        en: [
          "Planned: automated service deadline calculations and overdue tracking alerts",
          "Visualized: engineered mileage tracking, cost history, and performance stats per vehicle",
          "Delivered a single app with two tailored interfaces optimized for desktop and mobile use"
        ]
      },
      images: [
        { file: "50-vehicules-plan-entretien.webp", kind: "wide", alt: { fr: "Plan d'entretien personnalisé", en: "Personalized maintenance plan" } },
        { file: "51-vehicules-mobile-carnet.webp", kind: "phone", alt: { fr: "Carnet d'entretien sur mobile", en: "Maintenance log on mobile" } }
      ]
    },
    {
      id: "vaccin",
      category: "maison",
      accent: "#3a47c9",
      name: { fr: "Mon carnet de vaccination", en: "My Vaccination Record" },
      description: { fr: "Suivi des vaccinations de la famille", en: "Family vaccination tracker" },
      problem: {
        fr: "Gérer et anticiper les rappels de vaccins propres à chaque membre de la famille.",
        en: "Managing and anticipating customized vaccine schedules and reminders for multiple family members."
      },
      skills: {
        fr: [
          "Gérer des règles métier complexes et évolutives derrière une interface utilisateur épurée",
          "Synthétiser le statut de plusieurs profils au sein d'un tableau de bord unique",
          "Anticiper les besoins : retards de calendrier, rappels automatiques et obligations liées aux voyages"
        ],
        en: [
          "Handled complex, evolving medical logic hidden behind a streamlined user interface",
          "Synthesized status metrics for multiple profiles into a unified, high-level dashboard",
          "Anticipated key updates: identified schedule delays, automated reminders, and mapped travel requirements"
        ]
      },
      images: [
        { file: "60-vaccin-accueil.webp", kind: "wide", alt: { fr: "Accueil : vue par membre", en: "Home: view by member" } },
        { file: "61-vaccin-membre.webp", kind: "wide", alt: { fr: "Fiche d'un membre", en: "Member profile detailed view" } },
        { file: "62-vaccin-voyage.webp", kind: "wide", alt: { fr: "Vaccinations pour un voyage", en: "Required vaccinations for travel" } }
      ]
    },
    {
      id: "cartes",
      category: "maison",
      accent: "#6a3fa0",
      name: { fr: "Mes cartes fidélité", en: "My Loyalty Cards" },
      description: { fr: "Toutes mes cartes de fidélité sur le téléphone, même sans réseau", en: "All my loyalty cards on my phone, even offline" },
      problem: {
        fr: "Retrouver en quelques secondes la bonne carte en caisse, sans fouiller dans un portefeuille ni jongler entre plusieurs applications d'enseignes.",
        en: "Find the right card at the checkout in seconds, without digging through a wallet or juggling several store apps."
      },
      skills: {
        fr: [
          "Tenir le pari de la simplicité : une application très simple, qui ne contient que mes cartes",
          "Concevoir pour le téléphone d'abord : une expérience simplifiée, code barre accessible en 1 clic",
          "Garantir l'usage hors connexion : sauvegarde en local et synchronisation",
          "Fiabiliser la saisie : gestion des différents codes barres et QR Codes"
        ],
        en: [
          "Kept simplicity as the core bet: a very simple app that holds only my cards",
          "Designed mobile-first: a streamlined experience, barcode one tap away",
          "Made offline use dependable: local storage and synchronization",
          "Made data entry reliable: support for the different barcode formats and QR codes"
        ]
      },
      images: [
        { file: "95-cartes-mobile-liste.webp", kind: "phone", alt: { fr: "Liste des cartes sur mobile", en: "Card list on mobile" } },
        { file: "96-cartes-mobile-carte.webp", kind: "phone", alt: { fr: "Carte avec son code-barres sur mobile", en: "Card with its barcode on mobile" } },
        { file: "97-cartes-mobile-synchro.webp", kind: "phone", alt: { fr: "Synchronisation hors connexion sur mobile", en: "Offline sync on mobile" } }
      ]
    },
    {
      id: "katas",
      category: "sports",
      accent: "#b0432a",
      name: { fr: "Karaté", en: "Karaté" },
      description: { fr: "Mon programme d'apprentissage des katas", en: "Shotokan karate learning assistant" },
      problem: {
        fr: "Structurer et faciliter la mémorisation et la pratique autonome du karaté.",
        en: "Structuring and simplifying the practice, tracking, and memorization of karate techniques."
      },
      skills: {
        fr: [
          "Traduire un univers traditionnel (le karaté) en une identité visuelle moderne et épurée",
          "Suivre une progression : parcours par grade et évaluation du niveau de maîtrise",
          "Enrichir l'expérience utilisateur : fiches techniques détaillées, intégration vidéo et recherche"
        ],
        en: [
          "Translated a traditional discipline into a bespoke, modern visual identity",
          "Tracked skill progression: structured training paths by grade and mastery levels",
          "Enriched content architecture: designed detailed breakdown sheets, video embedding, and instant search"
        ]
      },
      images: [
        { file: "70-karate-programme.webp", kind: "wide", alt: { fr: "Programme et fiche d'un kata", en: "Training program and kata breakdown" } },
        { file: "71-karate-mobile-recherche.webp", kind: "phone", alt: { fr: "Recherche sur mobile", en: "Search filters on mobile" } }
      ]
    },
    {
      id: "eclipses",
      category: "loisirs",
      accent: "#c99a3a",
      name: { fr: "Éclipses", en: "Eclipses" },
      description: { fr: "Visualiseur d'éclipses", en: "Astronomical eclipse viewer" },
      problem: {
        fr: "Anticiper l'achat de matériel de protection spécialisé avant les ruptures de stock liées aux événements.",
        en: "Tracking rare astronomical events in advance to plan equipment purchases and avoid last-minute shortages."
      },
      skills: {
        fr: [
          "Exploiter des données scientifiques complexes pour les rendre grand public",
          "Soigner l'immersion grâce à une expérience utilisateur mobile poussée",
          "Personnaliser l'information contextuelle : visibilité précise depuis la France"
        ],
        en: [
          "Leveraged complex scientific datasets and simplified them for general audiences",
          "Crafted an immersive, high-fidelity mobile user experience",
          "Tailored localized information: calculated real-time visibility specific to geographic zones (France)"
        ]
      },
      images: [
        { file: "80-eclipses-mobile-liste.webp", kind: "phone", alt: { fr: "Liste des éclipses", en: "Upcoming eclipse schedule" } },
        { file: "81-eclipses-mobile-detail.webp", kind: "phone", alt: { fr: "Détail d'une éclipse", en: "Detailed eclipse metrics" } }
      ]
    },
    {
      id: "voyages",
      category: "loisirs",
      accent: "#d9672a",
      name: { fr: "Voyages", en: "Travel" },
      description: { fr: "Où partir selon le mois, avec budget estimé et carnet de voyages", en: "Where to go by month, with estimated budget and travel log" },
      problem: {
        fr: "Choisir où partir selon le mois en un coup d'œil, en croisant météo, saison et budget plutôt que d'aller sur plusieurs sites.",
        en: "Choose where to go depending on the month, at a glance, weighing weather, season and budget instead of jumping between several websites."
      },
      skills: {
        fr: [
          "Recommander chaque zone du monde mois par mois et aider à choisir la destination",
          "Constituer un référentiel consolidé avec l'IA, à partir de plusieurs sources de données",
          "Garder la trace de chaque voyage : carte des pays visités, étapes et budget, photos issues d'une banque d'images à licence libre",
          "Proposer une même application sur bureau et sur mobile, avec une disposition propre à chaque usage"
        ],
        en: [
          "Recommended every region of the world month by month, to help pick the right destination",
          "Built a reference dataset with AI, consolidated from several data sources",
          "Kept a record of every trip: visited-countries map, stops and budget, with photos from an openly licensed image library",
          "Delivered one app for desktop and mobile, with a layout suited to each use"
        ]
      },
      images: [
        { file: "90-voyages-ou-partir.webp", kind: "wide", alt: { fr: "Où partir ? Carte du monde et classement des zones", en: "Where to go? World map and ranked zones" } },
        { file: "91-voyages-recap-voyage.webp", kind: "wide", alt: { fr: "Récap d'un voyage : circuit et étapes", en: "Trip summary: route and stops" } },
        { file: "92-voyages-mobile-mes-voyages.webp", kind: "phone", alt: { fr: "Mes voyages sur mobile", en: "My trips on mobile" } }
      ]
    }
  ]
};