import { useTranslation } from '../hooks/useTranslation';
import { User, MapPin, GraduationCap, Crosshair, Shield, Languages, Fingerprint, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full py-16 border-t border-gray-950 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-red-500 animate-pulse rounded-full" />
            <h2 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-red-500">
              [ SEC_MODULE_03 // {t.nav.about.toUpperCase()} ]
            </h2>
          </div>
          <h3 className="font-mono text-xl sm:text-2xl font-semibold text-gray-100 tracking-tight">
            {t.about.title}
          </h3>
          <p className="font-sans text-xs text-gray-400 font-light max-w-xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* Dossier Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Narrative - 2 columns */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 space-y-6 border border-gray-900 bg-[#111214] rounded p-6 shadow-sm relative overflow-hidden"
          >
            {/* Holographic matrix background accent */}
            <div className="absolute top-2 right-2 opacity-[0.03] select-none pointer-events-none">
              <Fingerprint className="w-40 h-40 text-red-500" />
            </div>

            <div className="flex items-center gap-2 border-b border-gray-900 pb-3">
              <span className="font-mono text-xs text-red-500 font-semibold">[ PERS_ANALYSIS_INTEL ]</span>
            </div>

            <div className="space-y-4 font-sans text-xs text-gray-300 leading-relaxed font-light">
              <p>
                {t.about.description_1}
              </p>
              <p>
                {t.about.description_2}
              </p>
              <p className="border-l-2 border-red-500/30 pl-3">
                {t.about.description_3}
              </p>
            </div>

            {/* Quick footer log lines */}
            <div className="pt-4 border-t border-gray-900/40 font-mono text-[9px] text-gray-600 flex justify-between">
              <span>DOSSIER_ID: CS.SEC_03</span>
              <span>VERIFICATION_STAMP: VALID</span>
            </div>
          </motion.div>

          {/* Operator Console Sidebar - 1 column */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-between border border-gray-900 bg-[#121316] rounded p-5 shadow-sm relative"
          >
            {/* Decorative security header indicator */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-900 pb-3">
                <Shield className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="font-mono text-[10px] tracking-wider font-semibold text-gray-200">
                  {t.about.metadata_title}
                </span>
              </div>

              {/* Data Blocks */}
              <div className="space-y-4 font-mono text-[10px]">
                {/* Name */}
                <div className="space-y-0.5">
                  <span className="text-gray-600 uppercase text-[9px] tracking-wider">{t.about.meta_name_label}</span>
                  <div className="flex items-center gap-1.5 text-gray-200 font-medium">
                    <User className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                    {t.about.meta_name_value}
                  </div>
                </div>

                {/* Coordinates */}
                <div className="space-y-0.5">
                  <span className="text-gray-600 uppercase text-[9px] tracking-wider">{t.about.meta_base_label}</span>
                  <div className="flex items-center gap-1.5 text-gray-200 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                    {t.about.meta_base_value}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-0.5">
                  <span className="text-gray-600 uppercase text-[9px] tracking-wider">{t.about.meta_education_label}</span>
                  <div className="flex items-center gap-1.5 text-gray-200 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                    {t.about.meta_education_value}
                  </div>
                </div>

                {/* Focus */}
                <div className="space-y-0.5">
                  <span className="text-gray-600 uppercase text-[9px] tracking-wider">{t.about.meta_specialty_label}</span>
                  <div className="flex items-center gap-1.5 text-gray-200 font-medium">
                    <Crosshair className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                    {t.about.meta_specialty_value}
                  </div>
                </div>

                {/* Languages and driving permit */}
                <div className="space-y-0.5">
                  <span className="text-gray-600 uppercase text-[9px] tracking-wider">{t.about.meta_languages_label}</span>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Languages className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                    {t.about.meta_languages_value}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro execution status banner */}
            <div className="mt-8 pt-3 border-t border-gray-901 flex flex-col gap-1">
              <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest leading-none">
                {t.about.meta_status_label}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping shrink-0" />
                <span className="font-mono text-[9px] text-red-500 font-semibold uppercase tracking-wider">
                  {t.about.meta_status_value}
                </span>
              </div>
            </div>
          </motion.div>

          {/* New row: Security Clearances */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-3 border border-gray-900 bg-[#111214] rounded p-6 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-2 border-b border-gray-900 pb-3">
              <Award className="w-4 h-4 text-red-500 shrink-0" />
              <span className="font-mono text-xs text-red-500 font-semibold uppercase tracking-wider">
                [ SECURITY_CLEARANCES_CREDENTIALS ]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* eJPT Clearance Card */}
              <div className="p-4 border border-gray-900/60 bg-[#141518]/70 rounded hover:border-red-500/25 transition-all duration-300 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-500 shrink-0" />
                    <h4 className="font-mono text-xs font-bold text-gray-200 tracking-tight">eJPT</h4>
                  </div>
                  <p className="font-sans text-[11px] text-gray-400 font-light">
                    eLearnSecurity Junior Penetration Tester
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 font-mono text-[9px]">
                  <span className="px-2 py-0.5 rounded border border-red-500/25 bg-red-950/20 text-red-500 font-semibold tracking-wider">
                    VERIFIED // ACTIVE
                  </span>
                  <span className="text-gray-600 text-[8px]">ID: 8023-eJPT</span>
                </div>
              </div>

              {/* eCPPT Clearance Card */}
              <div className="p-4 border border-gray-900/60 bg-[#141518]/40 rounded hover:border-gray-800 transition-all duration-300 flex items-center justify-between opacity-75">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                    <h4 className="font-mono text-xs font-bold text-gray-400 tracking-tight">eCPPT</h4>
                  </div>
                  <p className="font-sans text-[11px] text-gray-500 font-light">
                    eLearnSecurity Certified Professional Penetration Tester
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 font-mono text-[9px]">
                  <span className="px-2 py-0.5 rounded border border-gray-800 bg-gray-900/40 text-gray-500 tracking-wider">
                    IN PROGRESS // TRAINING
                  </span>
                  <span className="text-gray-600 text-[8px]">EXP_EST. 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
