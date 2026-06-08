import { Language } from '../data/locales';

export interface Project {
  id: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: Record<Language, string>;
}

export const projectsData: Project[] = [
  {
    id: 'toy-kernel',
    tags: ['C', 'Assembly', 'x86', 'QEMU', 'Make'],
    githubUrl: 'https://github.com/Skaut155/ZeOS-Toy-Kernel/',
    title: {
      es: 'Toy Kernel x86',
      ca: 'Toy Kernel x86',
      en: 'Toy Kernel x86',
      fr: 'Toy Kernel x86',
    },
    category: {
      es: 'Sistemas Operativos / Low-Level',
      ca: 'Sistemes Operatius / Low-Level',
      en: 'Operating Systems / Low-Level',
      fr: 'Systèmes d\'Exploitation / Bas Niveau',
    },
    description: {
      es: 'Sistema operativo básico, desarrollado a partir del esqueleto ZeOS, para arquitectura x86. Implementa descriptor tables (GDT, IDT), gestor de interrupciones, controlador de teclado por polling e interrupción, paginación básica, gestión de procesos, restauración de contextos de CPU y un gestor de memoria física.',
      ca: 'Sistema operatiu bàsic, desenvolupat a partir de l\'esquelet ZeOS, per a arquitectura x86. Implementa descriptor tables (GDT, IDT), gestor d\'interrupcions, controlador de teclat per polling i interrupció, paginació bàsica, gestió de processos, restauració de contextos de CPU i un gestor de memòria física.',
      en: 'Basic operating system, developed from the ZeOS skeleton, for x86 architecture. It implements descriptor tables (GDT, IDT), interrupt manager, keyboard controller by polling and interrupt, basic paging, process management, CPU context restoration, and a physical memory manager.',
      fr: 'Système d\'exploitation de base, développé à partir du squelette ZeOS, pour l\'architecture x86. Il implémente des tables de descripteurs (GDT, IDT), un gestionnaire d\'interruptions, un contrôleur de clavier par interrogation et interruption, une pagination de base, la gestion des processus, la restauration du contexte du processeur et un gestionnaire de mémoire physique.',
    },
  },
  {
    id: 'derby-dungeon',
    tags: ['Unity', 'C#', '3D Graphics', 'Shaders'],
    githubUrl: 'https://github.com/Skaut155/Derby-Dungeon',
    demoUrl: 'https://itch.io/embed-upload/17844542?color=333333',
    title: {
      es: 'Derby\'s Dungeon',
      ca: 'Derby\'s Dungeon',
      en: 'Derby\'s Dungeon',
      fr: 'Derby\'s Dungeon',
    },
    category: {
      es: 'Desarrollo de Videojuegos 3D',
      ca: 'Desenvolupament de Videojocs 3D',
      en: '3D Video Game Development',
      fr: 'Développement de Jeux Vidéo 3D',
    },
    description: {
      es: 'Videojuego de mazmorras tridimensional con mecánicas de combate activo, creación de niveles y comportamientos de enemigos optimizados mediante algoritmos de navegación. Diseñado con máquinas de estados finitos robustas.',
      ca: 'Videojoc de mazmorres tridimensional amb mecàniques de combat actiu, creació de nivells i comportaments d\'IA enemiga optimitzats mitjançant algoritmes de navegació. Dissenyat amb arquitectures d\'estats finits robustes.',
      en: 'A fast-paced 3D dungeon action game featuring active combat mechanics, level creation and optimized enemy AI pathfinding using navigation algorithms. Built using a robust Finite State Machine modular architecture.',
      fr: 'Jeu vidéo de donjon en 3D proposant des combats actifs, création de niveaux et des comportements IA optimisés via des maillages de navigation. Conçu avec des machines d\'état robustes.',
    },
  },
  {
    id: 'cybersecurity-portfolio',
    tags: ['React 19', 'Vite 6', 'Tailwind v4', 'TypeScript'],
    githubUrl: 'https://github.com/Skaut155/Portfolio',
    title: {
      es: 'Portfolio v1.0',
      ca: 'Cyber Portfolio v1.0',
      en: 'Cyber Portfolio v1.0',
      fr: 'Cyber Portfolio v1.0',
    },
    category: {
      es: 'Desarrollo Frontend',
      ca: 'Desenvolupament Frontend Segur',
      en: 'Secure Frontend Development',
      fr: 'Développement Frontend Sécurisé',
    },
    description: {
      es: 'Este portfolio web, enfocado en bajo consumo y accesibilidad. Incorpora componentes reutilizables, un sistema de tipado sólido, una arquitectura flexible para múltiples idiomas y un diseño neo-minimalista cuidado al detalle.',
      ca: 'Aquest portfolio web impecable i ràpid, enfocat en baix consum i accessibilitat extrema. Implementa components atòmics, tipat segur rigorós, arquitectura d\'internacionalització modular i disseny neo-minimalista optimitzat.',
      en: 'The exact cybersecurity-oriented portfolio you are viewing right now. Engineered for lightning performance and security audits. Implements native type-safe multi-language context, modular static templates, and styling with Tailwind v4.',
      fr: 'Ce portfolio web ultra-rapide axé sur la sécurité. Conçu pour de hautes performances et une consommation d\'énergie minimale. Il implémente une internationalisation native, un typage strict et une esthétique néo-minimaliste.',
    },
  },
  {
    id: 'java-poll-analyzer',
    tags: ['Java', 'JUnit', 'MVC Pattern', 'Vector Data', 'Data Analytics'],
    githubUrl: 'https://github.com/Skaut155/Enquestamax-3000/',
    title: {
      es: 'Aplicación de gestión de encuestas',
      ca: 'Poll Analytics Engine',
      en: 'Poll Analytics Engine',
      fr: 'Poll Analytics Engine',
    },
    category: {
      es: 'Software de Gestión y Análisis',
      ca: 'Software de Gestió i Anàlisi',
      en: 'Management & Analytical Software',
      fr: 'Logiciel de Gestion et d\'Analyse',
    },
    description: {
      es: 'Aplicación orientada a objetos para el almacenamiento, procesamiento avanzado y análisis estadístico en tiempo real de formularios. Cuenta con cobertura de pruebas unitarias exhaustiva e implementaciones de patrones de diseño GoF.',
      ca: 'Aplicació orientada a objectes per a l\'emmagatzematge, processament avançat i anàlisi estadística en temps real de formularis d\'enquestes. Compta amb cobertura de proves unitàries exhaustiva e implementacions de patrons de disseny GoF.',
      en: 'An Object-Oriented Java software suite designed for securely capturing, parsing, and applying statistical and descriptive analysis to user questionnaires. Built with rigorous unit testing scopes and clean architectures.',
      fr: 'Application structurée en programmation orientée objet permettant de saisir, valider et traiter statistiquement des réponses à des formulaires d\'enquêtes en temps réel. Intègre une suite de tests unitaires complète.',
    },
  },
];