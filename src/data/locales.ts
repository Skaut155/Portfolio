export type Language = 'es' | 'ca' | 'en' | 'fr';

export interface TranslationSchema {
  nav: {
    projects: string;
    skills: string;
    about: string;
    contact: string;
  };
  hero: {
    status: string;
    title: string;
    specialization: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    view_code: string;
    view_demo: string;
  };
  about: {
    title: string;
    subtitle: string;
    description_1: string;
    description_2: string;
    description_3: string;
    metadata_title: string;
    meta_name_label: string;
    meta_name_value: string;
    meta_base_label: string;
    meta_base_value: string;
    meta_education_label: string;
    meta_education_value: string;
    meta_specialty_label: string;
    meta_specialty_value: string;
    meta_languages_label: string;
    meta_languages_value: string;
    meta_status_label: string;
    meta_status_value: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
  };
}

export const locales: Record<Language, { name: string; nativeName: string }> = {
  es: { name: 'Spanish', nativeName: 'Español' },
  ca: { name: 'Catalan', nativeName: 'Català' },
  en: { name: 'English', nativeName: 'English' },
  fr: { name: 'French', nativeName: 'Français' },
};

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      projects: 'Proyectos',
      skills: 'Habilidades',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      status: 'SISTEMA ONLINE - SECURE ENVIRONMENT',
      title: 'Hola, soy Carlos Sanz Peña',
      specialization: 'Ingeniería Informática / Ciberseguridad',
      description: 'Estudiante apasionado por la seguridad ofensiva, el análisis de vulnerabilidades y los videojuegos. Comprometido con la creación de código seguro y la detección de fallos para hacer de internet un lugar más seguro.',
      cta_primary: 'Ver Proyectos',
      cta_secondary: 'Contactar',
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Arsenal de herramientas y tecnologías enfocadas en ciberseguridad y desarrollo seguro.',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Herramientas de seguridad, laboratorios y desarrollo de software de código abierto.',
      view_code: 'Código',
      view_demo: 'Demo',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Análisis de perfil de seguridad, trasfondo de ingeniería y disciplina personal.',
      description_1: 'Hola, soy Carlos, estudiante del Grado en Ingeniería Informática en la FIB (Facultat d\'Informàtica de Barcelona). Mi pasión por la informática se canaliza principalmente hacia la ciberseguridad, la auditoría ofensiva de sistemas y los videojuegos.',
      description_2: 'Abordo la seguridad informática con una visión analítica. Creo firmemente que un buen pentester debe entender el código y el hardware a bajo nivel, además de disponer de la disciplina y metodicidad necesaria para obtener los mejores resultados.',
      description_3: 'Fuera del entorno académico, estoy en proceso de convertirme en árbitro de fútbol. Asimismo, doy clases particulares a estudiantes de bachillerato para ayudarles a preparar sus exámenes y las PAU.',
      metadata_title: 'METADATOS',
      meta_name_label: 'NOMBRE',
      meta_name_value: 'Carlos Sanz',
      meta_base_label: 'COORDENADAS',
      meta_base_value: 'Barcelona, ES [FIB - UPC]',
      meta_education_label: 'ESTUDIOS',
      meta_education_value: 'Grado en Ingeniería Informática',
      meta_specialty_label: 'ESPECIALIZACIÓN',
      meta_specialty_value: 'Networking, Pentesting & Videojuegos',
      meta_languages_label: 'IDIOMAS',
      meta_languages_value: 'ESP, CAT, ENG, FRA',
      meta_status_label: 'ESTADO OPERATIVO',
      meta_status_value: 'SISTEMA SEGURO - ACTIVO',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Puedes contactar conmigo rellenando el siguiente formulario.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente. Conexión cerrada.',
    },
  },
  ca: {
    nav: {
      projects: 'Projectes',
      skills: 'Habilitats',
      about: 'Sobre mi',
      contact: 'Contacte',
    },
    hero: {
      status: 'SISTEMA ONLINE - SECURE ENVIRONMENT',
      title: 'Hola, sóc en Carlos Sanz Peña',
      specialization: 'Enginyeria Informàtica / Ciberseguretat',
      description: 'Estudiant apassionat per la seguretat ofensiva, l\'anàlisi de vulnerabilitats i els videojocs. Compromès amb la creació de codi segur i la detecció de fallades per fer d\'internet un lloc més segur.',
      cta_primary: 'Veure Projectes',
      cta_secondary: 'Contactar',
    },
    skills: {
      title: 'Habilitats Tècniques',
      subtitle: 'Arsenal d\'eines i tecnologies enfocades en ciberseguretat i desenvolupament segur.',
    },
    projects: {
      title: 'Projectes',
      subtitle: 'Eines de seguretat, laboratoris i desenvolupament de programari de codi obert.',
      view_code: 'Codi',
      view_demo: 'Demo',
    },
    about: {
      title: 'Sobre mi',
      subtitle: 'Anàlisi de perfil de seguretat, rerefons d\'enginyeria i disciplina personal.',
      description_1: 'Hola, sóc en Carlos, estudiant del Grau en Enginyeria Informàtica a la FIB (Facultat d\'Informàtica de Barcelona). La meva passió per la informàtica es canalitza principalment cap a la ciberseguretat, l\'auditoria ofensiva de sistemes i els videojocs.',
      description_2: 'Abordo la seguretat informàtica amb una visió analítica. Crec fermament que un bon pentester ha d\'entendre el codi i el maquinari a baix nivell, a més de disposar de la disciplina i metodicitat necessària per obtenir els millors resultats.',
      description_3: 'Fora de l\'entorn acadèmic, estic en procés de convertir-me en àrbitre de futbol. Així mateix, dono classes particulars a estudiants de batxillerat per ajudar-los a preparar els seus exàmens i les PAU.',
      metadata_title: 'METADADES',
      meta_name_label: 'NOM',
      meta_name_value: 'Carlos Sanz',
      meta_base_label: 'COORDENADES',
      meta_base_value: 'Barcelona, ES [FIB - UPC]',
      meta_education_label: 'ESTUDIS',
      meta_education_value: 'Grau en Enginyeria Informàtica',
      meta_specialty_label: 'ESPECIALITZACIÓ',
      meta_specialty_value: 'Networking, Pentesting i Videojocs',
      meta_languages_label: 'IDIOMES',
      meta_languages_value: 'ESP, CAT, ENG, FRA',
      meta_status_label: 'ESTAT OPERATIU',
      meta_status_value: 'SISTEMA SEGUR - ACTIU',
    },
    contact: {
      title: 'Contacte',
      subtitle: 'Pots contactar amb mi omplint el següent formulari.',
      name: 'Nom',
      email: 'Correu',
      message: 'Missatge',
      send: 'Enviar Missatge',
      sending: 'Enviant...',
      success: 'Missatge enviat correctament. Connexió tancada.',
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      status: 'SYSTEM ONLINE - SECURE ENVIRONMENT',
      title: 'Hi, I am Carlos Sanz Peña',
      specialization: 'Computer Engineering / Cybersecurity',
      description: 'Student passionate about offensive security, vulnerability analysis, and video games. Committed to writing secure code and finding vulnerabilities to make the internet a safer place.',
      cta_primary: 'View Projects',
      cta_secondary: 'Contact Me',
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Arsenal of tools and technologies focused on cybersecurity and secure development.',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Security tools, laboratories, and open-source software development.',
      view_code: 'Code',
      view_demo: 'Demo',
    },
    about: {
      title: 'About me',
      subtitle: 'Security profile analysis, engineering credentials, and personal credentials.',
      description_1: 'Hello, I am Carlos, a Computer Engineering student currently enrolled at FIB (Facultat d\'Informàtica de Barcelona). My core passion for computing is mainly focused on cybersecurity, offensive infrastructure auditing, and video games.',
      description_2: 'I approach cybersecurity with an analytical methodology. I firmly believe a robust security specialist should have a deep understanding of low-level code and hardware networks, alongside the required discipline and methodic approach to achieve optimum results.',
      description_3: 'Outside the academic environment, I am in the process of becoming a football (soccer) referee. I also offer private tutoring to high school students to help them prepare for their exams and university entrance tests.',
      metadata_title: 'METADATA',
      meta_name_label: 'NAME',
      meta_name_value: 'Carlos Sanz',
      meta_base_label: 'COORDINATES',
      meta_base_value: 'Barcelona, ES [FIB - UPC]',
      meta_education_label: 'STUDIES',
      meta_education_value: 'Degree in Computer Engineering',
      meta_specialty_label: 'SPECIALIZATION',
      meta_specialty_value: 'Networking, Pentesting & Video Games',
      meta_languages_label: 'LANGUAGES & LICENSE',
      meta_languages_value: 'ESP, CAT, ENG, FRA',
      meta_status_label: 'OPERATIONAL STATUS',
      meta_status_value: 'SECURE SYSTEM - ACTIVE',
    },
    contact: {
      title: 'Contact',
      subtitle: 'You can contact me by filling out the form below.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully. Connection closed.',
    },
  },
  fr: {
    nav: {
      projects: 'Projets',
      skills: 'Compétences',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      status: 'SYSTEM ONLINE - SECURE ENVIRONMENT',
      title: 'Salut, je suis Carlos Sanz Peña',
      specialization: 'Génie Informatique / Cybersécurité',
      description: 'Étudiant passionné par la sécurité offensive, l\'analyse des vulnérabilités et les jeux vidéo. Engagé dans la création de code sécurisé et la détection de failles pour rendre internet plus sûr.',
      cta_primary: 'Voir Projets',
      cta_secondary: 'Contactez-moi',
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Arsenal d\'outils et de technologies axés sur la cybersécurité et le développement sécurisé.',
    },
    projects: {
      title: 'Projets',
      subtitle: 'Outils de sécurité, laboratoires et développement de logiciels open source.',
      view_code: 'Code',
      view_demo: 'Démo',
    },
    about: {
      title: 'À propos de moi',
      subtitle: 'Analyse du profil de sécurité, compétences d\'ingénierie et discipline opérationnelle.',
      description_1: 'Bonjour, je m\'appelle Carlos, étudiant en Génie Informatique à la FIB (Facultat d\'Informàtica de Barcelona). Ma passion pour l\'informatique s\'exprime principalement à travers la cybersécurité, l\'audit offensif de systèmes et les jeux vidéo.',
      description_2: 'J\'envisage la sécurité informatique d\'un point de vue analytique. Je soutiens activement qu\'un pentester accompli doit maîtriser le code et le matériel à bas niveau, tout en disposant de la discipline et de la méthode nécessaires pour obtenir les meilleurs résultats.',
      description_3: 'En dehors du cadre académique, je suis en cours de formation pour devenir arbitre de football. De plus, je donne des cours particuliers à des lycéens pour les aider à préparer leurs examens et les universités.',
      metadata_title: 'MÉTADONNÉES',
      meta_name_label: 'NOM',
      meta_name_value: 'Carlos Sanz',
      meta_base_label: 'COORDONNÉES',
      meta_base_value: 'Barcelone, ES [FIB - UPC]',
      meta_education_label: 'ÉTUDES',
      meta_education_value: 'Diplôme en Génie Informatique',
      meta_specialty_label: 'SPÉCIALISATION',
      meta_specialty_value: 'Réseaux, Pentesting & Jeux Vidéo',
      meta_languages_label: 'LANGUES & PERMIS',
      meta_languages_value: 'ESP, CAT, ENG, FRA',
      meta_status_label: 'STATUT OPÉRATIONNEL',
      meta_status_value: 'SYSTÈME SÉCURISÉ - ACTIF',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Vous pouvez me contacter en remplissant le formulaire ci-dessous.',
      name: 'Nom',
      email: 'E-mail',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès. Connexion fermée.',
    },
  },
};
