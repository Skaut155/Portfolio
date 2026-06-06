import { useState, useEffect } from 'react';
import { useTranslation } from './hooks/useTranslation';
import { locales, Language } from './data/locales';
import { Globe, Shield, Terminal, Cpu, Bug, Github, Linkedin, Lock, Menu, X } from 'lucide-react';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';

export default function App() {
  const { t, language, setLanguage } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll state for elegant header blending
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to anchors
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#d1d5db] font-sans flex flex-col selection:bg-red-500/20 selection:text-red-500">
      
      {/* Dynamic Security Toolbar (Global Header) */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-gray-905 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          
          {/* Brand/Protocol header */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="h-5 w-5 rounded border border-red-500/30 flex items-center justify-center bg-red-950/10 group-hover:border-red-500/80 transition-all duration-300">
              <Lock className="w-3 h-3 text-red-500" />
            </div>
            <span className="font-mono text-xs font-semibold tracking-wider text-gray-100 group-hover:text-red-500 transition-colors duration-200">
              CARLOS_SANZ_PEÑA // v1.0
            </span>
          </button>

          {/* Nav links + Language */}
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-5">
              <button 
                onClick={() => scrollToAnchor('projects')} 
                className="font-mono text-xs text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
              >
                {t.nav.projects}
              </button>
              <button 
                onClick={() => scrollToAnchor('skills')} 
                className="font-mono text-xs text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
              >
                {t.nav.skills}
              </button>
              <button 
                onClick={() => scrollToAnchor('about')} 
                className="font-mono text-xs text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => scrollToAnchor('contact')} 
                className="font-mono text-xs text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
              >
                {t.nav.contact}
              </button>
            </nav>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border border-gray-800 rounded bg-[#121315] hover:bg-[#16171a] hover:border-red-500/30 transition-all duration-200 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-red-500" />
                <span className="text-gray-300">{locales[language].nativeName}</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#121315] border border-gray-800 rounded shadow-xl py-1 z-50">
                  {(Object.keys(locales) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-mono transition-colors duration-150 cursor-pointer ${
                        language === lang
                          ? 'text-red-500 bg-red-500/5'
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                      }`}
                    >
                      {locales[lang].nativeName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden flex items-center justify-center p-1.5 text-gray-400 hover:text-red-500 hover:border-red-500/30 transition-all duration-200 border border-gray-800 rounded bg-[#121315] hover:bg-[#16171a] cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-red-500" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-850 bg-[#0c0d0e]/95 backdrop-blur-md px-4 py-3.5 space-y-3 shadow-xl">
            <button
              onClick={() => scrollToAnchor('projects')}
              className="block w-full text-left font-mono text-xs text-gray-400 hover:text-red-500 py-1 border-b border-gray-901/20 transition-colors duration-200 cursor-pointer"
            >
              &gt; {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToAnchor('skills')}
              className="block w-full text-left font-mono text-xs text-gray-400 hover:text-red-500 py-1 border-b border-gray-901/20 transition-colors duration-200 cursor-pointer"
            >
              &gt; {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToAnchor('about')}
              className="block w-full text-left font-mono text-xs text-gray-400 hover:text-red-500 py-1 border-b border-gray-901/20 transition-colors duration-200 cursor-pointer"
            >
              &gt; {t.nav.about}
            </button>
            <button
              onClick={() => scrollToAnchor('contact')}
              className="block w-full text-left font-mono text-xs text-gray-400 hover:text-red-500 py-1 transition-colors duration-200 cursor-pointer"
            >
              &gt; {t.nav.contact}
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Absolute ambient lines indicating matrix logic */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="w-full max-w-2xl border border-gray-800/80 bg-[#111214] p-6 sm:p-8 rounded-lg shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-red-500/10">
          
          {/* Scanner Pulse */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent animate-pulse" />

          {/* Quick status report header */}
          <div className="flex items-center justify-between mb-8 border-b border-gray-902 pb-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">
                PORTAL_EST: DIRECT_ONLINE
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] font-mono text-gray-600">
              <Bug className="w-3 h-3 text-red-500/60" />
              <span>STCK: VITE_R19</span>
            </div>
          </div>

          {/* Localized hero block */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-mono text-[9px] tracking-[0.2em] text-red-500 flex items-center gap-1.5 uppercase font-medium">
                <Shield className="w-3.5 h-3.5 text-red-500" />
                {t.hero.status}
              </p>
              <h1 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-gray-100 uppercase">
                {t.hero.title}
              </h1>
              <p className="font-sans text-xs text-gray-400 font-light border-b border-gray-901 pb-3">
                {t.hero.specialization}
              </p>
            </div>

            <p className="font-sans text-xs text-gray-400 leading-relaxed border-l-2 border-red-500/30 pl-3">
              {t.hero.description}
            </p>

            {/* Structured CTAs */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={() => scrollToAnchor('projects')}
                className="px-4 py-2 border border-red-500/20 bg-red-950/10 hover:bg-red-500/15 text-red-500 font-mono text-xs rounded transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                {t.hero.cta_primary}
              </button>
              <button 
                onClick={() => scrollToAnchor('contact')}
                className="px-4 py-2 border border-gray-800 bg-transparent hover:border-gray-700 text-gray-400 font-mono text-xs rounded transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5" />
                {t.hero.cta_secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer bar */}
      <footer className="mt-auto py-8 border-t border-gray-956 bg-[#0a0a0c] text-center text-xs font-mono text-gray-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-wider">
            &copy; {new Date().getFullYear()} // PORTFOLIO_SECURED. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors duration-200">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
