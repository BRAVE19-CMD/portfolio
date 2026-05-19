import { useState, useEffect } from 'react'
import { Package, BarChart3, GraduationCap, Mail, Phone, MapPin, Linkedin, Github, Send, ChevronDown, Briefcase, TrendingUp, Database, Users, FileCheck, Clock, CheckCircle, Code, Cpu, FlaskConical, Calendar, Award, Globe, PieChart, Settings, Activity, Download, FileText, Eye, Table, Calculator, Warehouse, Truck, ClipboardCheck, BarChart, Terminal, Server, FileSpreadsheet, Camera, X, Upload } from 'lucide-react'

// Composant icône Python
const PythonIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#3776AB"/>
    <path d="M12 5.5c-1.93 0-3.5 1.57-3.5 3.5v2h7v1h-7.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5H14v-2.5c0-1.38 1.12-2.5 2.5-2.5H17v-1h-1c-1.38 0-2.5-1.12-2.5-2.5S14.62 5.5 16 5.5h1v-.5c0-1.93-1.57-3.5-3.5-3.5h-1.5z" fill="white"/>
    <path d="M12 18.5c1.93 0 3.5-1.57 3.5-3.5v-2h-7v-1h7.5c1.38 0 2.5-1.12 2.5-2.5S17.38 6.5 16 6.5H10v2.5c0 1.38-1.12 2.5-2.5 2.5H7v1h1c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H7v.5c0 1.93 1.57 3.5 3.5 3.5h1.5z" fill="white"/>
  </svg>
)

// Composant icône SQL
const SQLIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#336791"/>
    <text x="12" y="14" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="monospace">SQL</text>
  </svg>
)

function App() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTheme, setActiveTheme] = useState<'indigo' | 'emerald' | 'rose' | 'amber' | 'violet' | 'cyan' | 'french'>('french')
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null)
  const [isEditingPhoto, setIsEditingPhoto] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  // Theme configurations
  const themes = {
    indigo: {
      primary: 'indigo',
      secondary: 'violet',
      gradient: 'from-indigo-500 via-violet-500 to-purple-500',
      gradientDark: 'from-slate-950 via-indigo-950 to-slate-950',
      buttonGradient: 'from-indigo-600 via-violet-600 to-purple-600',
      accent: 'indigo'
    },
    emerald: {
      primary: 'emerald',
      secondary: 'teal',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      gradientDark: 'from-slate-950 via-emerald-950 to-slate-950',
      buttonGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      accent: 'emerald'
    },
    rose: {
      primary: 'rose',
      secondary: 'pink',
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
      gradientDark: 'from-slate-950 via-rose-950 to-slate-950',
      buttonGradient: 'from-rose-600 via-pink-600 to-fuchsia-600',
      accent: 'rose'
    },
    amber: {
      primary: 'amber',
      secondary: 'orange',
      gradient: 'from-amber-500 via-orange-500 to-yellow-500',
      gradientDark: 'from-slate-950 via-amber-950 to-slate-950',
      buttonGradient: 'from-amber-600 via-orange-600 to-yellow-600',
      accent: 'amber'
    },
    violet: {
      primary: 'violet',
      secondary: 'purple',
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      gradientDark: 'from-slate-950 via-violet-950 to-slate-950',
      buttonGradient: 'from-violet-600 via-purple-600 to-indigo-600',
      accent: 'violet'
    },
    cyan: {
      primary: 'cyan',
      secondary: 'sky',
      gradient: 'from-cyan-400 via-sky-400 to-blue-500',
      gradientDark: 'from-slate-950 via-cyan-950 to-slate-950',
      buttonGradient: 'from-cyan-500 via-sky-500 to-blue-600',
      accent: 'cyan'
    },
    french: {
      primary: 'blue',
      secondary: 'indigo',
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      gradientDark: 'from-blue-50 via-white to-blue-50',
      buttonGradient: 'from-blue-600 via-blue-500 to-blue-400',
      accent: 'blue',
      textDark: true,
      bgLight: true,
      titleDark: true,
      cardDark: true
    }
  }

  const currentTheme = themes[activeTheme]
  const isLightTheme = activeTheme === 'french'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['accueil', 'experiences', 'competences', 'projets', 'formation', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Photo management
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string)
        setIsEditingPhoto(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setProfilePhoto(null)
    setIsEditingPhoto(false)
  }

  // Color picker component
  const ColorPicker = () => (
    <div className="flex items-center gap-2 ml-4">
      {Object.keys(themes).map((theme) => (
        <button
          key={theme}
          onClick={() => setActiveTheme(theme as typeof activeTheme)}
          className={`w-6 h-6 rounded-full transition-all ${
            activeTheme === theme ? 'ring-2 ring-offset-2 ring-offset-slate-950 scale-110 ring-' + theme : 'hover:scale-110'
          }`}
          style={{
            background: theme === 'indigo' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' :
                        theme === 'emerald' ? 'linear-gradient(135deg, #10b981, #14b8a6)' :
                        theme === 'rose' ? 'linear-gradient(135deg, #f43f5e, #ec4899)' :
                        theme === 'amber' ? 'linear-gradient(135deg, #f59e0b, #f97316)' :
                        theme === 'violet' ? 'linear-gradient(135deg, #7c3aed, #6366f1)' :
                        theme === 'cyan' ? 'linear-gradient(135deg, #06b6d4, #0ea5e9)' :
                        'linear-gradient(135deg, #2563eb, #1d4ed8)'
          }}
          title={theme.charAt(0).toUpperCase() + theme.slice(1)}
        />
      ))}
    </div>
  )

  const experiences = [
    {
      titre: 'Coordinateur Flux Logistique',
      entreprise: 'Sinova (Samsung)',
      localisation: 'Sétif, Algérie',
      periode: 'Avr. 2025 – Présent',
      taches: [
        'Vérification des stocks et déclaration des états mensuels',
        'Analyse et correction des écarts d\'inventaire',
        'Suivi des transferts logistiques et coordination des flux'
      ]
    },
    {
      titre: 'Responsable Entrepôt MP/Semi-finis',
      entreprise: 'Sinova (Samsung)',
      localisation: 'Sétif, Algérie',
      periode: 'Fév. 2024 – Avr. 2025',
      taches: [
        'Gestion et suivi des stocks MP et semi-finis (réduction des écarts de 15%)',
        'Optimisation des transferts système et automatisation des rapports journaliers',
        'Supervision d\'équipe et coordination logistique'
      ]
    },
    {
      titre: 'Gestionnaire de Stocks',
      entreprise: 'Prainsa Cevico Algérie',
      localisation: 'Algérie',
      periode: 'Fév. 2021 – Déc. 2023',
      taches: [
        'Mise en place d\'un suivi rigoureux des consommations (gas-oil, agrégats, projets)',
        'Codification et digitalisation des articles pour fiabiliser la traçabilité',
        'Production de rapports mensuels valorisés facilitant la prise de décision'
      ]
    },
    {
      titre: 'Gestionnaire de Stock',
      entreprise: 'SARL Setif Citernes',
      localisation: 'Algérie',
      periode: 'Juin 2019 – Janv. 2020',
      taches: [
        'Organisation et rapprochement quotidien des stocks',
        'Contrôle qualité des chargements et optimisation du processus de facturation',
        'Contribution à la réduction des anomalies de stock de 10%'
      ]
    },
    {
      titre: 'Magasinier / Chef Magasinier',
      entreprise: 'eurl Saterex, Acheref Plastic, GSAM Électronique',
      localisation: 'Algérie',
      periode: '2013 – 2019',
      taches: [
        'Gestion complète des entrées/sorties de MP et PF',
        'Réalisation des inventaires annuels et mise en place d\'un meilleur agencement d\'entrepôt',
        'Amélioration de la fiabilité des rapprochements comptables'
      ]
    }
  ]

  const competences = [
    { icon: FileSpreadsheet, titre: 'Excel Expert (9/10)', description: 'Power Query, Power Pivot, DAX, VBA, Inquire - Automatisation et analyse avancée' },
    { icon: BarChart, titre: 'Power BI', description: 'Création de tableaux de bord logistiques décisionnels' },
    { icon: SQLIcon, titre: 'SQL', description: 'Requêtes SELECT, JOIN, GROUP BY pour analyse de données' },
    { icon: PythonIcon, titre: 'Python', description: 'Pandas, NumPy, Matplotlib, Seaborn pour traitement et visualisation' },
    { icon: Server, titre: 'ERP / Progiciels', description: 'Sage, Pulsar, Intelix, Windev, Odoo' },
    { icon: Warehouse, titre: 'Gestion des Stocks', description: 'Optimisation des flux, réduction des écarts, inventaires' },
    { icon: Truck, titre: 'Supply Chain', description: 'Planification, approvisionnement, coordination des flux' },
    { icon: Table, titre: 'Analyse de Données', description: 'KPIs, reporting, tableaux de bord décisionnels' },
    { icon: Calculator, titre: 'Comptabilité Analytique', description: 'Suivi des coûts, valorisation des stocks' },
    { icon: ClipboardCheck, titre: 'Management', description: 'Coordination d\'équipes, formation, supervision' }
  ]

  const formations = [
    {
      titre: 'Supply Chain Management',
      organisme: 'UniAthena Academy',
      annee: '2025',
      type: 'Certification Professionnelle'
    },
    {
      titre: 'Optimisation des Flux Logistiques',
      organisme: 'Sinova',
      annee: '2024',
      type: 'Formation Interne'
    },
    {
      titre: 'Prise d\'Inventaire',
      organisme: 'Prainsa Cevico Algérie',
      annee: '2023',
      type: 'Formation'
    },
    {
      titre: 'Programmation Python',
      organisme: 'École Égyptienne en ligne',
      annee: '2024',
      type: 'En cours'
    },
    {
      titre: 'SQL Serveur',
      organisme: 'École Égyptienne en ligne',
      annee: '2024',
      type: 'En cours'
    },
    {
      titre: 'Microsoft Access',
      organisme: 'Tkawen',
      annee: '2024',
      type: 'Formation'
    },
    {
      titre: 'BTS Informatique',
      organisme: 'GEI',
      annee: '2018',
      type: 'Diplôme'
    },
    {
      titre: 'Baccalauréat Langues (Allemand)',
      organisme: 'Lycée',
      annee: '2016',
      type: 'Diplôme'
    }
  ]

  const projets = [
    {
      titre: 'Diagramme de Gantt - Suivi d\'Avancement',
      description: 'Projet de suivi de réalisation et taux d\'inventaire pour plusieurs sites (MSILA, LAGHOUAT, OUED SOUF). Automatisation du suivi des tâches avec visualisation de l\'état d\'avancement.',
      details: [
        'TACHE1 - MSILA (ain azel): Avancement 72%',
        'TACHE2 - LAGHOUAT: 100% terminé',
        'TACHE3 - OUED SOUF: 100% terminé'
      ],
      technologies: ['Excel', 'VBA', 'Power Query'],
      impact: 'Suivi en temps réel des opérations multi-sites',
      fileUrl: '/DIAGRAMME DE GANT.xlsx',
      fileName: 'Diagramme_Gantt.xlsx'
    },
    {
      titre: 'Analyse des Ventes sur 3 Ans',
      description: 'Analyse complète des données de ventes sur 100 000 transactions (2022-2024). Création de tableaux de bord pour le suivi des performances par produit, catégorie, vendeur et région.',
      details: [
        '100 000+ transactions analysées',
        'Multiple catégories: Électronique, Informatique, Électroménager',
        '13 vendeurs, 14 régions couvertes',
        'Analyse des remises et de leur impact'
      ],
      technologies: ['Excel', 'Power BI', 'Power Pivot', 'DAX'],
      impact: 'Identification des opportunités de croissance et optimisation des remise',
      fileUrl: '/ventes_3ans_100000.xlsx',
      fileName: 'Analyse_Ventes_3ans.xlsx'
    }
  ]

  const outils = [
    { nom: 'Excel', icon: FileSpreadsheet },
    { nom: 'Power Query', icon: Table },
    { nom: 'Power Pivot', icon: BarChart },
    { nom: 'DAX', icon: Calculator },
    { nom: 'VBA', icon: Code },
    { nom: 'Power BI', icon: BarChart },
    { nom: 'SQL', icon: SQLIcon },
    { nom: 'Python', icon: PythonIcon },
    { nom: 'Access', icon: Database },
    { nom: 'Sage', icon: Server },
    { nom: 'Pulsar', icon: Server },
    { nom: 'Intelix', icon: Server },
    { nom: 'Windev', icon: Code },
    { nom: 'Odoo', icon: Server }
  ]

  const langues = [
    { langue: 'Français', niveau: 'Courant' },
    { langue: 'Arabe', niveau: 'Natif' },
    { langue: 'Anglais', niveau: 'Intermédiaire' }
  ]

  return (
    <div className={`min-h-screen ${isLightTheme ? 'bg-gradient-to-br from-blue-50 via-white to-blue-100' : `bg-gradient-to-br ${currentTheme.gradientDark}`}`}>
      {/* Warehouse Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="warehouse-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            <rect x="1" y="1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="0.2"/>
            <line x1="1" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="0.1"/>
            <line x1="10" y1="1" x2="10" y2="19" stroke="currentColor" strokeWidth="0.1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#warehouse-grid)" className="text-blue-900"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isLightTheme ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' : 'bg-slate-950/95 backdrop-blur-md shadow-lg') : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className={`text-xl font-bold ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
                <span className={`text-${currentTheme.primary}-600`}>K</span>ezai Elhoues
              </div>
              <ColorPicker />
            </div>
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'experiences', label: 'Expériences' },
                { id: 'competences', label: 'Compétences' },
                { id: 'projets', label: 'Projets' },
                { id: 'formation', label: 'Formation' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? `text-${currentTheme.primary}-600 font-semibold` : (isLightTheme ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white')
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Warehouse Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/warehouse-bg.jpg"
            alt="Warehouse Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-slate-900/90"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Profile Photo Section */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative">
              <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-${currentTheme.primary}-500/50 shadow-2xl shadow-${currentTheme.primary}-500/20 flex items-center justify-center`}
                   style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)' }}>
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Kezai Elhoues" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center text-slate-500">
                    <Camera size={48} />
                    <span className="text-sm mt-2">Photo</span>
                  </div>
                )}
              </div>

              {/* Edit Photo Button */}
              <button
                onClick={() => setIsEditingPhoto(!isEditingPhoto)}
                className={`absolute bottom-2 right-2 p-3 rounded-full bg-gradient-to-r ${currentTheme.buttonGradient} text-white shadow-lg hover:scale-110 transition-transform`}
              >
                {isEditingPhoto ? <X size={20} /> : <Camera size={20} />}
              </button>
            </div>

            {/* Photo Edit Panel */}
            {isEditingPhoto && (
              <div className={`mt-4 p-4 rounded-xl shadow-xl max-w-sm ${isLightTheme ? 'bg-white border border-blue-200 shadow-blue-200' : 'bg-slate-800/90 border border-' + currentTheme.primary + '-500/30 backdrop-blur-md'}`}>
                {profilePhoto ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => document.getElementById('photoInput')?.click()}
                      className={`w-full px-4 py-2 rounded-lg bg-gradient-to-r ${currentTheme.buttonGradient} text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                    >
                      <Upload size={18} />
                      Changer la photo
                    </button>
                    <button
                      onClick={handleRemovePhoto}
                      className={`w-full px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${isLightTheme ? 'bg-red-50 border border-red-200 text-red-600 hover:bg-red-100' : 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30'}`}
                    >
                      <X size={18} />
                      Supprimer
                    </button>
                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <p className={isLightTheme ? 'text-slate-600 text-sm' : 'text-slate-300 text-sm'}>Ajouter votre photo de profil</p>
                    <button
                      onClick={() => document.getElementById('photoInput')?.click()}
                      className={`w-full px-4 py-2 rounded-lg bg-gradient-to-r ${currentTheme.buttonGradient} text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                    >
                      <Upload size={18} />
                      Télécharger une photo
                    </button>
                  </div>
                )}
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>
            )}
          </div>

          <div className={`mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${currentTheme.primary}-500/10 border border-${currentTheme.primary}-500/30 ${isLightTheme ? 'shadow-sm' : ''}`}>
            <span className={`w-2 h-2 bg-${currentTheme.primary}-500 rounded-full animate-pulse`}></span>
            <span className={`text-${currentTheme.primary}-600 text-sm font-medium`}>14+ années d'expérience</span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
            Kezai <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradient}`}>Elhoues</span>
          </h1>

          <p className={`text-xl md:text-2xl mb-4 ${isLightTheme ? 'text-slate-700' : 'text-slate-300'}`}>
            Coordinateur Flux Logistique & Analyste de Données
          </p>

          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>
            Expert en optimisation des flux logistiques, gestion des stocks et analyse de données.
            Spécialiste Excel (Power Query, Power Pivot, DAX, VBA) et Power BI pour transformer les données en décisions stratégiques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/CV_Kezai_Elhoues_Design_Final_2025c.pdf"
              download="CV_Kezai_Elhoues.pdf"
              className={`px-8 py-4 bg-gradient-to-r ${currentTheme.buttonGradient} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg ${isLightTheme ? 'shadow-blue-200' : ''}`}
            >
              <Download size={20} />
              Télécharger CV
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${isLightTheme ? 'bg-blue-50 border-2 border-blue-200 text-slate-800 hover:bg-blue-100' : 'bg-slate-800/50 border border-slate-700 text-white hover:bg-slate-800 hover:border-blue-500/50'}`}
            >
              <Mail size={20} />
              Me Contacter
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isLightTheme ? 'bg-white border-blue-200' : 'bg-slate-800/50 border-slate-700'}`}>
              <Award className={`text-${currentTheme.primary}-500`} size={16} />
              <span className={`text-sm ${isLightTheme ? 'text-slate-700' : 'text-slate-300'}`}>Expert Excel 9/10</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isLightTheme ? 'bg-white border-blue-200' : 'bg-slate-800/50 border-slate-700'}`}>
              <Activity className={`text-${currentTheme.secondary}-500`} size={16} />
              <span className={`text-sm ${isLightTheme ? 'text-slate-700' : 'text-slate-300'}`}>Power BI</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isLightTheme ? 'bg-white border-blue-200' : 'bg-slate-800/50 border-slate-700'}`}>
              <Code className={`text-${currentTheme.primary}-500`} size={16} />
              <span className={`text-sm ${isLightTheme ? 'text-slate-700' : 'text-slate-300'}`}>Python & SQL</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/kezai-elhoues" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl border transition-all ${isLightTheme ? 'bg-white border-blue-200 hover:border-blue-400 hover:bg-blue-50' : 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800'}`}>
              <Linkedin size={24} className={isLightTheme ? 'text-blue-600 hover:text-blue-700' : 'text-slate-400 hover:text-blue-400'} />
            </a>
            <a href="mailto:hamoudikzei@gmail.com" className={`p-2 rounded-lg transition-all ${isLightTheme ? 'bg-white border border-blue-200 hover:border-blue-400 hover:bg-blue-50' : 'bg-slate-800/50 border border-slate-700 hover:border-' + currentTheme.primary + '-500/50'}`}>
                <Mail size={24} className={isLightTheme ? 'text-blue-600 hover:text-blue-700' : 'text-slate-400 hover:text-blue-400'} />
              </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={isLightTheme ? 'text-blue-400' : 'text-slate-500'} />
        </div>
      </section>

      {/* CV Section - Download */}
      <section id="cv" className={`py-20 ${isLightTheme ? 'bg-blue-50' : 'bg-gradient-to-r ' + currentTheme.primary + '-900/30 via-' + currentTheme.secondary + '-900/30 to-purple-900/30'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className={`rounded-3xl p-8 md:p-12 border shadow-2xl ${isLightTheme ? 'bg-white border-blue-200' : 'bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-800/80 border-slate-700'}`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center flex-shrink-0`}>
                <FileText className="text-white" size={48} />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className={`text-2xl font-bold mb-2 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>Curriculum Vitae</h3>
                <p className={`mb-4 ${isLightTheme ? 'text-slate-600' : 'text-slate-300'}`}>Kezai Elhoues - Coordinateur Flux Logistique & Analyste de Données</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className={`px-3 py-1 rounded-full ${isLightTheme ? 'bg-blue-100 text-blue-700' : currentTheme.primary + '-500/20 text-' + currentTheme.primary + '-300'} text-sm`}>PDF Format</span>
                  <span className={`px-3 py-1 rounded-full ${isLightTheme ? 'bg-indigo-100 text-indigo-700' : currentTheme.secondary + '-500/20 text-' + currentTheme.secondary + '-300'} text-sm`}>Actualisé 2025</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="/CV_Kezai_Elhoues_Design_Final_2025c.pdf"
                  download="CV_Kezai_Elhoues.pdf"
                  className={`px-6 py-3 bg-gradient-to-r ${currentTheme.buttonGradient} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg ${isLightTheme ? 'shadow-blue-200' : ''}`}
                >
                  <Download size={20} />
                  Télécharger
                </a>
                <a
                  href="/CV_Kezai_Elhoues_Design_Final_2025c.pdf"
                  target="_blank"
                  className={`px-6 py-3 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${isLightTheme ? 'bg-blue-50 border-2 border-blue-200 text-slate-800 hover:bg-blue-100' : 'bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700'}`}
                >
                  <Eye size={20} />
                  Aperçu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className={`py-24 relative ${isLightTheme ? 'bg-white' : ''}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isLightTheme ? 'bg-blue-100 border border-blue-200' : 'bg-' + currentTheme.primary + '-500/10 border border-' + currentTheme.primary + '-500/30'}`}>
              <Briefcase size={16} className={`text-${currentTheme.primary}-600`} />
              <span className={`text-${currentTheme.primary}-600 text-sm font-medium`}>Parcours Professionnel</span>
            </div>

            <h2 className={`text-4xl font-bold mb-4 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              Expériences <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500`}>Professionnelles</span>
            </h2>

            <p className={`max-w-2xl mx-auto ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>
              Plus de 14 ans d'expérience dans la coordination logistique, la gestion des stocks et l'optimisation des flux
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                className={`relative rounded-2xl p-6 cursor-pointer transition-all hover:border-${currentTheme.primary}-400 ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm' : 'bg-slate-800/50 border border-slate-700'} ${expandedExperience === index ? 'ring-2 ring-' + currentTheme.primary + '-500' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xl font-bold mb-1 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>{exp.titre}</h3>
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${expandedExperience === index ? 'rotate-180' : ''} ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}
                      />
                    </div>
                    <p className={`font-medium ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}>{exp.entreprise}</p>
                    <div className={`flex items-center gap-2 text-sm mt-2 ${isLightTheme ? 'text-slate-500' : 'text-slate-400'}`}>
                      <MapPin size={14} />
                      <span>{exp.localisation}</span>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 ${isLightTheme ? 'bg-blue-100 text-blue-700' : 'bg-' + currentTheme.primary + '-500/20 text-' + currentTheme.primary + '-400'}`}>
                    {exp.periode}
                  </span>
                </div>

                {/* Expanded Details */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedExperience === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`pt-4 mt-4 border-t ${isLightTheme ? 'border-blue-200' : 'border-slate-700'}`}>
                    <h4 className={`text-sm font-semibold mb-3 ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}>Missions et réalisations:</h4>
                    <ul className="space-y-3">
                      {exp.taches.map((tache, i) => (
                        <li key={i} className={`flex items-start gap-3 ${isLightTheme ? 'text-slate-600' : 'text-slate-300'}`}>
                          <CheckCircle className={`text-${currentTheme.primary}-500 mt-1 flex-shrink-0`} size={16} />
                          <span>{tache}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Collapsed Preview */}
                {expandedExperience !== index && (
                  <p className={`text-sm mt-2 ${isLightTheme ? 'text-slate-500' : 'text-slate-400'}`}>
                    Cliquez pour voir les détails...
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className={`py-24 ${isLightTheme ? 'bg-blue-50' : 'bg-slate-900/50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isLightTheme ? 'bg-blue-100 border border-blue-200' : 'bg-' + currentTheme.primary + '-500/10 border border-' + currentTheme.primary + '-500/30'}`}>
              <BarChart3 size={16} className={`text-${currentTheme.primary}-600`} />
              <span className={`text-${currentTheme.primary}-600 text-sm font-medium`}>Expertise Technique</span>
            </div>

            <h2 className={`text-4xl font-bold mb-4 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              Compétences <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500`}>Techniques</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {competences.map((comp, index) => {
              const IconComponent = comp.icon;
              return (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl hover:border-${currentTheme.primary}-400 transition-all hover:transform hover:scale-105 ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm' : 'bg-slate-800/50 border border-slate-700'}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${currentTheme.primary}-100 to-${currentTheme.secondary}-100 flex items-center justify-center mb-4 transition-all ${isLightTheme ? '' : 'group-hover:from-' + currentTheme.primary + '-500/30 group-hover:to-' + currentTheme.secondary + '-500/30'}`}>
                    {typeof IconComponent === 'function' && IconComponent.name === 'PythonIcon' || IconComponent.name === 'SQLIcon' ? (
                      <IconComponent size={24} />
                    ) : (
                      <IconComponent className={`text-${currentTheme.primary}-600`} size={24} />
                    )}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>{comp.titre}</h3>
                  <p className={`text-sm ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>{comp.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <h3 className={`text-2xl font-bold mb-8 text-center ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              Outils & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {outils.map((outil, index) => {
                const IconComponent = outil.icon;
                const isCustomIcon = IconComponent.name === 'PythonIcon' || IconComponent.name === 'SQLIcon';
                return (
                  <span
                    key={index}
                    className={`px-6 py-3 rounded-xl text-sm transition-all flex items-center gap-2 ${isLightTheme ? 'bg-white border border-blue-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm' : 'bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-' + currentTheme.primary + '-500/50'}`}
                  >
                    {isCustomIcon ? (
                      <IconComponent size={18} />
                    ) : (
                      <IconComponent className={`text-${currentTheme.primary}-500`} size={18} />
                    )}
                    {outil.nom}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-16">
            <h3 className={`text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              <Globe className={`text-${currentTheme.primary}-500`} size={24} />
              Langues
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {langues.map((lang, index) => (
                <div key={index} className={`px-8 py-4 rounded-2xl text-center ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm' : 'bg-slate-800/50 border border-slate-700'}`}>
                  <p className={`font-semibold text-lg ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>{lang.langue}</p>
                  <p className={`text-sm mt-1 ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}>{lang.niveau}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className={`py-24 relative ${isLightTheme ? 'bg-white' : ''}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isLightTheme ? 'bg-blue-100 border border-blue-200' : 'bg-' + currentTheme.primary + '-500/10 border border-' + currentTheme.primary + '-500/30'}`}>
              <FlaskConical size={16} className={`text-${currentTheme.primary}-600`} />
              <span className={`text-${currentTheme.primary}-600 text-sm font-medium`}>Travaux Pratiques</span>
            </div>

            <h2 className={`text-4xl font-bold mb-4 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              Projets <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500`}>Phares</span>
            </h2>

            <p className={`max-w-2xl mx-auto ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>
              Exemples concrets de mon expertise en analyse de données et gestion de projets logistiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projets.map((projet, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 hover:border-${currentTheme.primary}-400 transition-all flex flex-col ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm hover:shadow-md' : 'bg-slate-800/50 border border-slate-700'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className={`text-${currentTheme.primary}-500`} size={24} />
                  <h3 className={`text-xl font-bold ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>{projet.titre}</h3>
                </div>

                <p className={`mb-6 ${isLightTheme ? 'text-slate-600' : 'text-slate-300'}`}>{projet.description}</p>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}>Détails du projet:</h4>
                  <ul className="space-y-2">
                    {projet.details.map((detail, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>
                        <CheckCircle className={`text-${currentTheme.primary}-500 mt-0.5 flex-shrink-0`} size={14} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}>Technologies utilisées:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm ${isLightTheme ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-slate-700/50 text-slate-300'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 ${isLightTheme ? 'border-t border-blue-200' : 'border-t border-slate-700'}`}>
                  <p className={`text-sm ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>
                    <span className={`font-medium ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}>Impact: </span>
                    {projet.impact}
                  </p>
                </div>

                {/* Download Button */}
                <div className={`mt-6 pt-4 ${isLightTheme ? 'border-t border-blue-200' : 'border-t border-slate-700'}`}>
                  <a
                    href={projet.fileUrl}
                    download={projet.fileName}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${currentTheme.buttonGradient} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg ${isLightTheme ? 'shadow-blue-200' : ''}`}
                  >
                    <Download size={20} />
                    Télécharger le projet
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formation" className={`py-24 ${isLightTheme ? 'bg-blue-50' : 'bg-slate-900/50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isLightTheme ? 'bg-blue-100 border border-blue-200' : 'bg-' + currentTheme.primary + '-500/10 border border-' + currentTheme.primary + '-500/30'}`}>
              <GraduationCap size={16} className={`text-${currentTheme.primary}-600`} />
              <span className={`text-${currentTheme.primary}-600 text-sm font-medium`}>Parcours Académique</span>
            </div>

            <h2 className={`text-4xl font-bold mb-4 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              Formation <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500`}>& Certifications</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500`}></div>

              {formations.map((formation, index) => (
                <div key={index} className="relative pl-16 pb-8">
                  <div className={`absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500 flex items-center justify-center`}>
                    <GraduationCap className="text-white" size={16} />
                  </div>

                  <div className={`rounded-2xl p-6 hover:border-${currentTheme.primary}-400 transition-all ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm hover:shadow-md' : 'bg-slate-800/50 border border-slate-700'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className={`text-lg font-bold ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>{formation.titre}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit ${isLightTheme ? 'bg-blue-100 text-blue-700' : 'bg-' + currentTheme.primary + '-500/20 text-' + currentTheme.primary + '-400'}`}>
                        {formation.annee}
                      </span>
                    </div>
                    <p className={`font-medium mb-1 ${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`}>{formation.organisme}</p>
                    <span className={`text-sm ${isLightTheme ? 'text-slate-500' : 'text-slate-400'}`}>{formation.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 ${isLightTheme ? 'bg-white' : ''}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isLightTheme ? 'bg-blue-100 border border-blue-200' : 'bg-' + currentTheme.primary + '-500/10 border border-' + currentTheme.primary + '-500/30'}`}>
              <Mail size={16} className={`text-${currentTheme.primary}-600`} />
              <span className={`text-${currentTheme.primary}-600 text-sm font-medium`}>Contact</span>
            </div>

            <h2 className={`text-4xl font-bold mb-4 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              Travaillons <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500`}>Ensemble</span>
            </h2>

            <p className={`max-w-2xl mx-auto ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>
              Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter,
              je vous répondrai dans les plus brefs délais.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className={`p-6 rounded-2xl text-center transition-all hover:border-${currentTheme.primary}-400 ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm hover:shadow-md' : 'bg-slate-800/50 border border-slate-700'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${isLightTheme ? 'bg-blue-100' : 'bg-' + currentTheme.primary + '-500/20'}`}>
                  <Mail className={`${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`} size={24} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>Email</h3>
                <p className={isLightTheme ? 'text-slate-600' : 'text-slate-400'}>hamoudikzei@gmail.com</p>
              </div>

              <div className={`p-6 rounded-2xl text-center transition-all hover:border-${currentTheme.primary}-400 ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm hover:shadow-md' : 'bg-slate-800/50 border border-slate-700'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${isLightTheme ? 'bg-blue-100' : 'bg-' + currentTheme.primary + '-500/20'}`}>
                  <Phone className={`${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`} size={24} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>Téléphone</h3>
                <p className={isLightTheme ? 'text-slate-600' : 'text-slate-400'}>0770487477</p>
              </div>

              <div className={`p-6 rounded-2xl text-center transition-all hover:border-${currentTheme.primary}-400 ${isLightTheme ? 'bg-white border border-blue-200 shadow-sm hover:shadow-md' : 'bg-slate-800/50 border border-slate-700'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${isLightTheme ? 'bg-blue-100' : 'bg-' + currentTheme.primary + '-500/20'}`}>
                  <MapPin className={`${isLightTheme ? 'text-blue-600' : 'text-' + currentTheme.primary + '-400'}`} size={24} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>Localisation</h3>
                <p className={isLightTheme ? 'text-slate-600' : 'text-slate-400'}>Kherrata, Bejaia, Algérie</p>
              </div>
            </div>

            <form className={`rounded-2xl p-8 ${isLightTheme ? 'bg-blue-50 border border-blue-200' : 'bg-slate-800/50 border border-slate-700'}`}>
              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isLightTheme ? 'text-slate-700' : 'text-slate-300'}`}>Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className={`w-full px-4 py-3 rounded-xl transition-colors ${isLightTheme ? 'bg-white border border-blue-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none' : 'bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-' + currentTheme.primary + '-500'}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isLightTheme ? 'text-slate-700' : 'text-slate-300'}`}>Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className={`w-full px-4 py-3 rounded-xl transition-colors ${isLightTheme ? 'bg-white border border-blue-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none' : 'bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-' + currentTheme.primary + '-500'}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isLightTheme ? 'text-slate-700' : 'text-slate-300'}`}>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className={`w-full px-4 py-3 rounded-xl transition-colors resize-none ${isLightTheme ? 'bg-white border border-blue-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none' : 'bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-' + currentTheme.primary + '-500'}`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full px-8 py-4 bg-gradient-to-r ${currentTheme.buttonGradient} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg ${isLightTheme ? 'shadow-blue-200' : ''}`}
                >
                  <Send size={20} />
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isLightTheme ? 'border-t border-blue-200 bg-blue-50' : 'border-t border-slate-800 bg-slate-950'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className={`text-xl font-bold ${isLightTheme ? 'text-slate-900' : 'text-white'}`}>
              <span className={`text-${currentTheme.primary}-600`}>K</span>ezai Elhoues
            </div>

            <p className={`text-sm ${isLightTheme ? 'text-slate-600' : 'text-slate-400'}`}>
              © 2024 Kezai Elhoues. Tous droits réservés.
            </p>

            <div className="flex gap-4">
              <a href="https://linkedin.com/in/kezai-elhoues" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all ${isLightTheme ? 'bg-white border border-blue-200 hover:border-blue-400 hover:bg-blue-50' : 'bg-slate-800/50 border border-slate-700 hover:border-' + currentTheme.primary + '-500/50'}`}>
                <Linkedin size={20} className={isLightTheme ? 'text-blue-600' : 'text-slate-400'} />
              </a>
              <a href="mailto:hamoudikzei@gmail.com" className={`p-2 rounded-lg transition-all ${isLightTheme ? 'bg-white border border-blue-200 hover:border-blue-400 hover:bg-blue-50' : 'bg-slate-800/50 border border-slate-700 hover:border-' + currentTheme.primary + '-500/50'}`}>
                <Mail size={20} className={isLightTheme ? 'text-blue-600' : 'text-slate-400'} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App