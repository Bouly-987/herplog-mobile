import type { Translations } from "./en";

const fr: Translations = {
  // Common
  common: {
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    add: "Ajouter",
    back: "Retour",
    search: "Rechercher",
    loading: "Chargement...",
    viewAll: "Tout voir",
    or: "OU",
    confirm: "Confirmer",
  },

  // Auth
  auth: {
    login: "Se connecter",
    signup: "S'inscrire",
    logout: "Se déconnecter",
    forgotPassword: "Mot de passe oublié ?",
    resetPassword: "Réinitialiser votre mot de passe",
    sendResetLink: "Envoyer le lien",
    backToSignIn: "Retour à la connexion",
    email: "EMAIL",
    password: "MOT DE PASSE",
    confirmPassword: "CONFIRMER LE MOT DE PASSE",
    fullName: "NOM COMPLET",
    welcomeBack: "Bon retour",
    signInSubtitle: "Connectez-vous à votre compte HerpLog",
    createAccount: "Créez votre compte",
    createAccountSubtitle: "Rejoignez des milliers de passionnés de reptiles sur HerpLog",
    resetSubtitle: "Entrez votre email et nous vous enverrons un lien de réinitialisation",
    alreadyHaveAccount: "Déjà un compte ?",
    noAccount: "Pas encore de compte ?",
    createOne: "Créer un compte",
    agreeTerms: "J'accepte les Conditions d'utilisation",
    continueWithGoogle: "Continuer avec Google",
    emailPlaceholder: "jane@herplog.com",
    passwordPlaceholder: "••••••••",
    namePlaceholder: "Jane Doe",
  },

  // Navigation
  nav: {
    dashboard: "Tableau de bord",
    reptiles: "Reptiles",
    health: "Santé",
    activityLog: "Journal",
    reminders: "Rappels",
    maintenance: "Maintenance",
    gallery: "Galerie",
    growth: "Croissance",
    settings: "Paramètres",
    notifications: "Notifications",
  },

  // Dashboard
  dashboard: {
    yourVivarium: "Votre Vivarium",
    residents: "RÉSIDENTS",
    avgHumidity: "HUMIDITÉ MOY.",
    systemStatus: "ÉTAT SYSTÈME",
    optimal: "Optimal",
    remindersDue: "RAPPELS EN ATTENTE",
    activeResidents: "Résidents actifs",
    trackingHealthy: "Suivi de {count} résidents en bonne santé",
  },

  // Empty state
  empty: {
    welcome: "Bienvenue sur HerpLog !",
    description: "Votre vivarium est vide. Ajoutez votre premier reptile pour commencer à suivre les repas, les rapports de santé, les analyses de croissance et plus encore.",
    addFirst: "AJOUTER VOTRE PREMIER REPTILE",
    step1Title: "Ajouter un reptile",
    step1Desc: "Enregistrer l'espèce, la mutation et la photo",
    step2Title: "Configurer l'environnement",
    step2Desc: "Paramétrer l'enclos, la température et l'humidité",
    step3Title: "Commencer le suivi",
    step3Desc: "Logger les repas, mues et données de santé",
  },

  // Reptiles
  reptiles: {
    title: "Reptiles",
    addReptile: "AJOUTER UN REPTILE",
    addNew: "Ajouter un nouveau reptile",
    editProfile: "Modifier le profil du reptile",
    species: "ESPÈCE",
    commonName: "NOM",
    morph: "MUTATION / VARIANTE",
    sex: "SEXE",
    male: "Mâle",
    female: "Femelle",
    unknown: "Inconnu",
    dateHatched: "DATE D'ÉCLOSION",
    acquisitionDate: "DATE D'ACQUISITION",
    weight: "POIDS (GRAMMES)",
    length: "LONGUEUR (CM)",
    sourceBreeder: "SOURCE / ÉLEVEUR",
    notes: "NOTES / DESCRIPTION",
    saveReptile: "Enregistrer le reptile",
    saveChanges: "Sauvegarder",
    deleteReptile: "Supprimer le reptile",
    changePhoto: "Changer la photo",
    uploadPhoto: "Télécharger une photo",
    healthy: "EN BONNE SANTÉ",
    attention: "ATTENTION",
    age: "ÂGE",
    hatched: "ÉCLOSION",
    lastFed: "DERNIER REPAS",
    nextFeeding: "Prochain : Vendredi",
    lastShed: "DERNIÈRE MUE",
    filters: {
      all: "Tous",
      snakes: "Serpents",
      lizards: "Lézards",
      geckos: "Geckos",
    },
  },

  // Activity
  activity: {
    title: "Journal d'activités",
    newActivity: "Nouvelle activité",
    saveEntry: "Enregistrer",
    recentEntries: "Entrées récentes",
    feeding: "Nourrissage",
    shedding: "Mue",
    growth: "Croissance",
    cleaning: "Nettoyage",
    weightGrams: "POIDS (GRAMMES)",
    lengthCm: "LONGUEUR (CM)",
    logDate: "DATE",
    logTime: "HEURE",
    observations: "OBSERVATIONS & NOTES",
    observationsPlaceholder: "Mentionner le comportement, le type de proie, ou la qualité de la mue...",
    quickLog: "Log rapide",
    logActivity: "Logger l'activité",
    logAnother: "LOGGER UNE AUTRE",
    activityLogged: "Activité enregistrée !",
  },

  // Health
  health: {
    title: "Rapport de santé",
    activeClinical: "Rapport clinique actif",
    weightTrend: "TENDANCE POIDS",
    feedingConsistency: "RÉGULARITÉ REPAS",
    onSchedule: "Dans les temps",
    lastShedQuality: "QUALITÉ DERNIÈRE MUE",
    fullIntact: "Complète & intacte",
    excellent: "Excellente",
    environment: "ENVIRONNEMENT",
    humidity: "Humidité",
    temperature: "Température",
    uvbLight: "Lumière UV-B",
    vetNotes: "Notes vétérinaires",
    shareReport: "Partager le rapport",
    exportPdf: "Exporter en PDF",
  },

  // Growth
  growth: {
    title: "Analyses de croissance",
    activeGrowth: "CROISSANCE ACTIVE",
    weightProgression: "Progression du poids",
    vsLastPeriod: "vs période précédente",
    currentWeight: "POIDS ACTUEL",
    lengthTrend: "TENDANCE LONGUEUR",
    feedingScore: "SCORE ALIMENTAIRE",
    consistentGains: "Gains réguliers",
    growthVelocity: "Vitesse de croissance",
    feedingAnalysis: "Analyse alimentaire",
    projection: "Projection",
    timeRanges: {
      oneMonth: "1 Mois",
      sixMonths: "6 Mois",
      oneYear: "1 An",
    },
  },

  // Gallery
  gallery: {
    title: "Galerie des mues",
    addPhoto: "+ Ajouter une photo de mue",
    complete: "COMPLÈTE",
    incomplete: "INCOMPLÈTE",
    archiveOlder: "Archiver les anciens enregistrements",
  },

  // Reminders
  reminders: {
    title: "Rappels",
    subtitle: "Gardez vos reptiles dans les temps",
    feeding: "NOURRISSAGE",
    supplements: "COMPLÉMENTS",
    cleaningLabel: "NETTOYAGE",
    dueIn: "Dans {days} jours",
    dueToday: "Aujourd'hui",
    overdue: "En retard",
    every: "Tous les {frequency}",
    markDone: "Fait",
  },

  // Maintenance
  maintenance: {
    title: "Maintenance",
    subtitle: "Suivez l'état de l'équipement et les remplacements de tous les enclos.",
    addEquipment: "AJOUTER UN ÉQUIPEMENT",
    uvbLighting: "Éclairage UV-B",
    heatSource: "Source de chaleur",
    mistingSystem: "Système de brumisation",
    heatLamp: "Lampe chauffante",
    statusHealthy: "EN BON ÉTAT",
    statusReplace: "À REMPLACER",
    statusOverdue: "EN RETARD",
    remaining: "restant",
    replacedOn: "Remplacé le",
    expiresOn: "Expire le",
    photoperiodTip: "Conseil photopériode",
  },

  // Settings
  settings: {
    title: "Paramètres",
    profile: "Profil",
    profileSubtitle: "Gérez vos informations de compte et préférences.",
    personalInfo: "Informations personnelles",
    notifications: "Notifications",
    vivarium: "Vivarium",
    unitsDisplay: "Unités & affichage",
    dataExport: "Données & export",
    about: "À propos",
    feedingReminders: "Rappels de nourrissage",
    healthAlerts: "Alertes de santé",
    maintenanceReminders: "Rappels de maintenance",
    shedTracking: "Suivi des mues",
    dangerZone: "Zone dangereuse",
    deleteAccount: "Supprimer votre compte et toutes les données associées",
  },

  // Notifications
  notifications: {
    title: "Notifications",
    subtitle: "Restez informé des alertes de soins de vos reptiles",
    markAllRead: "Tout marquer comme lu",
    new: "NOUVEAU",
    today: "AUJOURD'HUI",
    yesterday: "HIER",
    filters: {
      all: "Tout",
      feeding: "Nourrissage",
      health: "Santé",
      maintenance: "Maintenance",
      schedule: "Planification",
    },
  },

  // Success states
  success: {
    reptileAdded: "Reptile ajouté !",
    reptileAddedDesc: "a été ajouté à votre vivarium. Vous pouvez maintenant suivre les repas, la santé et la croissance.",
    viewProfile: "VOIR LE PROFIL",
    backToList: "Retour à la liste",
    checkInbox: "Vérifiez votre boîte mail",
    checkInboxDesc: "Nous avons envoyé un lien de réinitialisation à {email}. Le lien expire dans 24 heures.",
    resendEmail: "RENVOYER L'EMAIL",
    activityLoggedDesc: "Entrée de nourrissage enregistrée pour {name}. Prochain rappel prévu le {date}.",
    goToHistory: "Voir l'historique",
  },

  // Delete confirmation
  deleteConfirm: {
    title: "Supprimer {name} ?",
    description: "Cette action est irréversible. Tous les enregistrements de repas, données de santé, analyses de croissance et photos de ce reptile seront définitivement supprimés.",
    typeToConfirm: "Tapez {name} pour confirmer",
    deleteForever: "Supprimer définitivement",
  },

  // Branding
  brand: {
    tagline: "Votre compagnon complet de soins pour reptiles",
    feature1: "Suivez la santé, les repas et les cycles de mue",
    feature2: "Surveillez l'environnement du vivarium en temps réel",
    feature3: "Analyses de croissance et rapports vétérinaires",
    feature4: "Rappels intelligents pour les soins programmés",
  },
};

export default fr;
