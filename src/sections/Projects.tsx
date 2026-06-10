import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Project, projectsData } from '../data/projects';
import { Folder, Github, ExternalLink, Terminal, Cpu, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const { t, language } = useTranslation();
  const [showDerbyEmbed, setShowDerbyEmbed] = useState(false);

  return (
    <section id="projects" className="w-full py-16 border-t border-gray-950 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header with terminal tracking attributes */}
        <div className="mb-12 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-red-500 animate-pulse rounded-full" />
            <h2 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-red-500">
              [ SEC_MODULE_01 // {t.nav.projects.toUpperCase()} ]
            </h2>
          </div>
          <h3 className="font-mono text-xl sm:text-2xl font-semibold text-gray-100 tracking-tight">
            {t.projects.title}
          </h3>
          <p className="font-sans text-xs text-gray-400 font-light max-w-xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((project: Project, idx: number) => {
            const localizedTitle = project.title[language] || project.title['en'];
            const localizedCategory = project.category[language] || project.category['en'];
            const localizedDesc = project.description[language] || project.description['en'];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative flex flex-col justify-between border border-gray-900 bg-[#111214] hover:bg-[#131417]/80 rounded p-5 transition-all duration-300 hover:border-red-500/25 shadow-sm"
              >
                {/* Decorative status corner dot */}
                <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="h-1 w-1 bg-red-500 rounded-full animate-ping" />
                  <span className="font-mono text-[9px] text-red-500 tracking-widest font-normal">
                    ACTIVE
                  </span>
                </div>

                {/* Upper Module Elements */}
                <div className="space-y-4">
                  {/* Category & Badge Row */}
                  <div className="flex items-center gap-2">
                    <div className="p-1 px-1.5 border border-gray-800/80 bg-gray-950/40 rounded text-[9px] font-mono text-gray-500 tracking-wider flex items-center gap-1 uppercase">
                      <Terminal className="w-2.5 h-2.5 text-red-500" />
                      ID: {project.id}
                    </div>
                    <span className="text-[10px] font-sans text-gray-500 font-light">•</span>
                    <span className="text-[10px] font-mono text-red-500/70">{localizedCategory}</span>
                  </div>

                  {/* Custom Styled Project Header */}
                  <div className="space-y-1">
                    <h4 className="font-mono text-sm font-semibold tracking-tight text-gray-200 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                      <Folder className="w-4 h-4 text-gray-500 group-hover:text-red-500/80 transition-colors duration-200 shrink-0" />
                      {localizedTitle}
                    </h4>
                    <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                      {localizedDesc}
                    </p>
                  </div>
                </div>

                {/* Micro tech tags & links footer */}
                <div className="mt-6 space-y-4 pt-4 border-t border-gray-900/40">
                  {/* Semantic tags styled as raw code variables */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] px-1.5 py-0.5 border border-gray-800 bg-[#161719] text-gray-400 rounded-sm hover:text-gray-200 hover:border-gray-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer referrer"
                        className="text-[11px] font-mono text-gray-500 hover:text-red-500/90 flex items-center gap-1 transition-colors duration-200 cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{t.projects.view_code}</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      project.id === 'derby-dungeon' ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setShowDerbyEmbed(prev => !prev);
                            setTimeout(() => {
                              const el = document.getElementById('derby-embed-container');
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }, 150);
                          }}
                          className={`text-[11px] font-mono flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                            showDerbyEmbed
                              ? 'text-red-500 hover:text-red-400 font-bold'
                              : 'text-gray-500 hover:text-red-500/90'
                          }`}
                        >
                          <ExternalLink className={`w-3.5 h-3.5 ${showDerbyEmbed ? 'animate-pulse' : ''}`} />
                          <span>{showDerbyEmbed ? 'CLOSE EMULATOR' : t.projects.view_demo}</span>
                        </button>
                      ) : (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer referrer"
                          className="text-[11px] font-mono text-gray-500 hover:text-red-500/90 flex items-center gap-1 transition-colors duration-200 cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{t.projects.view_demo}</span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Derby's Dungeon Immersive Arcade / Console Simulation */}
        <AnimatePresence>
          {showDerbyEmbed && (
            <motion.div
              id="derby-embed-container"
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              transition={{ duration: 0.4 }}
              className="mt-12 border border-red-500/25 bg-[#0a0b0d] rounded-lg p-4 sm:p-6 shadow-[0_20px_50px_rgba(225,29,72,0.08)] space-y-4"
            >
              {/* Terminal Control Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-900 pb-3 gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping shrink-0" />
                  <span className="font-mono text-xs text-red-500 font-semibold uppercase tracking-wider">
                    [ LINK_ESTABLISHED // DEV_URL // ITCH_IO_SIMULATION_CABINET ]
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://skaut155.itch.io/derbys-dungeon"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>OPEN_IN_NEW_TAB</span>
                  </a>
                  <button
                    onClick={() => setShowDerbyEmbed(false)}
                    className="px-3 py-1 border border-red-500/30 bg-red-950/20 hover:bg-red-500/30 text-red-400 hover:text-red-500 font-mono text-[10px] rounded transition-all duration-200 cursor-pointer"
                  >
                    TERMINATE_SIM
                  </button>
                </div>
              </div>

              {/* Embedded Iframe matching the user's styling */}
              <div className="w-full max-w-[1200px] h-[400px] sm:h-[720px] mx-auto rounded-md overflow-hidden bg-[#333333] border border-gray-901 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <iframe
                  src="https://itch.io/embed-upload/17877946?color=333333"
                  frameBorder="0"
                  allowFullScreen={true}
                  scrolling="no"
                  className="w-full h-full border-none"
                  title="Derby's Dungeon Game Simulator"
                >
                  <a href="https://skaut155.itch.io/derbys-dungeon">Play Derby's Dungeon on itch.io</a>
                </iframe>
              </div>

              {/* Console logs / micro telemetry */}
              <div className="pt-2 border-t border-gray-900 font-mono text-[9px] text-gray-500 flex justify-between">
                <span>SYSTEM: EMULATED_STANDALONE</span>
                <span>ENGINE: UNITY_WEBGL</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}