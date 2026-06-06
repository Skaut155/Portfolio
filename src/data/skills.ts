import { Language } from '../data/locales';

export interface SkillItem {
  name: string;
  status: 'active' | 'learning' | 'certified';
  // A localized short description or tag for the skill
  detail: Record<Language, string>;
}

export interface SkillCluster {
  id: string;
  iconName: 'Shield' | 'Cpu' | 'Database' | 'Terminal' | 'Code' | 'Activity';
  title: Record<Language, string>;
  skills: SkillItem[];
}

export const skillsData: SkillCluster[] = [
  {
    id: 'offensive-security',
    iconName: 'Shield',
    title: {
      es: 'Seguridad Ofensiva & Auditoría',
      ca: 'Seguretat Ofensiva i Auditòria',
      en: 'Offensive Security & Auditing',
      fr: 'Sécurité Offensive & Audit',
    },
    skills: [
      {
        name: 'Penetration Testing',
        status: 'active',
        detail: {
          es: 'Metodologías OWASP, explotación y spoofing de redes.',
          ca: 'Metodologies OWASP, explotació i spoofing de xarxes.',
          en: 'OWASP frameworks, network-layer exploitation & spoofing.',
          fr: 'Méthodologies OWASP, exploitation de couches réseau.',
        },
      },
      {
        name: 'CTF Operations (HTB / INE)',
        status: 'active',
        detail: {
          es: 'Resolución activa de máquinas y desafíos de seguridad.',
          ca: 'Resolució activa de màquines i desafeccions de seguretat.',
          en: 'Active host penetration & privilege escalation challenge resolution.',
          fr: 'Résolution de machines et d\'épreuves de sécurité actives.',
        },
      },
      {
        name: 'Nmap & Metasploit',
        status: 'active',
        detail: {
          es: 'Escaneo de puertos, análisis de servicios y exploits.',
          ca: 'Escaneig de ports, anàlisi de serveis i exploits.',
          en: 'Network discovery, active scanners, and exploit automation.',
          fr: 'Découverte réseau, scan de ports et exploitation.',
        },
      },
      {
        name: 'Vulnerability Analysis',
        status: 'active',
        detail: {
          es: 'Auditoría estática y dinámica de binarios y servicios.',
          ca: 'Auditòria estàtica i dinàmica de binaris i serveis.',
          en: 'Static & dynamic assessment of codebases, APIs, and binaries.',
          fr: 'Analyse statique et dynamique de binaires et services.',
        },
      },
    ],
  },
  {
    id: 'systems-low-level',
    iconName: 'Cpu',
    title: {
      es: 'Arquitectura de Sistemas & Bajo Nivel',
      ca: 'Arquitectura de Sistemes i Baix Nivell',
      en: 'Systems Architecture & Low-Level',
      fr: 'Architecture Systèmes & Bas Niveau',
    },
    skills: [
      {
        name: 'C / C++',
        status: 'active',
        detail: {
          es: 'Gestión manual de memoria, punteros dangled y desbordamientos.',
          ca: 'Gestió manual de memòria, punters dangled i desbordaments.',
          en: 'Manual memory management, pointers, and memory safety.',
          fr: 'Gestion manuelle de mémoire, pointeurs et débordements.',
        },
      },
      {
        name: 'x86 Assembly',
        status: 'active',
        detail: {
          es: 'Programación directa sobre registros, instrucciones y pila.',
          ca: 'Programació directa sobre registres, instruccions i pila.',
          en: 'Writing custom assembly programs and manipulating registers.',
          fr: 'Programmation sur registres, instructions directes et pile.',
        },
      },
      {
        name: 'QEMU & Virtualization',
        status: 'active',
        detail: {
          es: 'Simulación y depuración de núcleos personalizados.',
          ca: 'Simulació i depuració de nuclis personalitzats.',
          en: 'Simulating architectures and kernel debugger setups.',
          fr: 'Simulation et débogage de noyaux personnalisés.',
        },
      },
      {
        name: 'Linux OS Architecture',
        status: 'active',
        detail: {
          es: 'Llamadas al sistema, planificación y seguridad del kernel.',
          ca: 'Trucades al sistema, planificació i seguretat del nucli.',
          en: 'System calls, CPU rings, and modern privilege configurations.',
          fr: 'Appels système, ordonnancement et sécurité du noyau.',
        },
      },
    ],
  },
  {
    id: 'software-engineering',
    iconName: 'Terminal',
    title: {
      es: 'Ingeniería de Software & Herramientas',
      ca: 'Enginyeria de Programari i Eines',
      en: 'Software Engineering & Tools',
      fr: 'Ingénierie Logicielle & Outils',
    },
    skills: [
      {
        name: 'Java (OOP & MVC)',
        status: 'active',
        detail: {
          es: 'Patrones de diseño de software GoF, arquitectura mantenible.',
          ca: 'Patrons de disseny de programari GoF, arquitectura mantenible.',
          en: 'Robust Object-Oriented layouts and enterprise-level patterns.',
          fr: 'Modèles de conception GoF, architecture structurée.',
        },
      },
      {
        name: 'C# (Unity Engine)',
        status: 'active',
        detail: {
          es: 'Lógica matemática 3D, desarrollo y simulación procedural.',
          ca: 'Lògica matemàtica 3D, desenvolupament i simulació procedimental.',
          en: 'Structured vector algebra and active script optimization.',
          fr: 'Algèbre vectorielle et scripts de jeux optimisés.',
        },
      },
      {
        name: 'Python',
        status: 'active',
        detail: {
          es: 'Automatización de scripts utilitarios, parsers y web scraping.',
          ca: 'Automatització d\'scripts utilitaris, parsers i web scraping.',
          en: 'Utility scripting, custom payloads, and automation helpers.',
          fr: 'Automatisation de scripts, parsers et payloads.',
        },
      },
      {
        name: 'React 19 / Vite 6',
        status: 'active',
        detail: {
          es: 'Creación de interfaces web ágiles con Tailwind CSS v4.',
          ca: 'Creació d\'interfícies web àgils amb Tailwind CSS v4.',
          en: 'Designing reactive client states with low telemetry footprints.',
          fr: 'Création d\'interfaces web réactives avec Tailwind CSS v4.',
        },
      },
    ],
  },
];
