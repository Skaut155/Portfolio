import { useTranslation } from '../hooks/useTranslation';
import { skillsData, SkillCluster } from '../data/skills';
import { Shield, Cpu, Terminal, Activity, Check, CircleDot } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap = {
  Shield: Shield,
  Cpu: Cpu,
  Terminal: Terminal,
};

export default function Skills() {
  const { t, language } = useTranslation();

  return (
    <section id="skills" className="w-full py-16 border-t border-gray-950 bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-red-500 animate-pulse rounded-full" />
            <h2 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-red-500">
              [ SEC_MODULE_02 // {t.nav.skills.toUpperCase()} ]
            </h2>
          </div>
          <h3 className="font-mono text-xl sm:text-2xl font-semibold text-gray-100 tracking-tight">
            {t.skills.title}
          </h3>
          <p className="font-sans text-xs text-gray-400 font-light max-w-xl">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Matrix Systems Grid */}
        <div className="space-y-6">
          {skillsData.map((cluster: SkillCluster, clusterIdx: number) => {
            const ClusterIcon = iconMap[cluster.iconName as keyof typeof iconMap] || Terminal;
            const localizedTitle = cluster.title[language] || cluster.title['en'];

            return (
              <motion.div
                key={cluster.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: clusterIdx * 0.15 }}
                className="border border-gray-900 bg-[#111214] rounded overflow-hidden shadow-sm"
              >
                {/* Module Bar Status Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 border-b border-gray-900 bg-[#141518]">
                  <div className="flex items-center gap-2">
                    <ClusterIcon className="w-4 h-4 text-red-500" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-200">
                      {localizedTitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[9px] text-gray-500 flex items-center gap-1.5 home-telemetry">
                      <CircleDot className="w-2.5 h-2.5 text-red-500 animate-pulse" />
                      SECURE_DAEMON
                    </span>
                    <span className="font-mono text-[9px] text-gray-600 hidden sm:inline">
                      RING_0 / MODULE_{clusterIdx + 1}
                    </span>
                  </div>
                </div>

                {/* Subsystem Threads Grid */}
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#111214]">
                  {cluster.skills.map((skill, skillIdx) => {
                    const localizedDetail = skill.detail[language] || skill.detail['en'];
                    // Generates mock technical memory hex signatures for pure terminal styling
                    const mockHex = `0x0F${(clusterIdx + 1) * 3}${skillIdx * 7}A9`;

                    return (
                      <div
                        key={skill.name}
                        className="group p-3 border border-gray-905/60 bg-[#151619] rounded hover:border-red-500/20 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-1">
                          {/* Thread title and memory address */}
                          <div className="flex items-center justify-between gap-2 border-b border-gray-900/40 pb-1.5 mb-1.5">
                            <span className="font-mono text-xs font-medium text-gray-200 group-hover:text-red-500/90 transition-colors duration-200">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[9px] text-gray-600 font-light pr-1">
                              {mockHex}
                            </span>
                          </div>

                          {/* Technical summary detail */}
                          <p className="font-sans text-[11px] text-gray-400 font-light leading-relaxed">
                            {localizedDetail}
                          </p>
                        </div>

                        {/* Thread health variables */}
                        <div className="mt-3.5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                          <span className="flex items-center gap-1">
                            <Activity className="w-3 h-3 text-red-500/40" />
                            SYS_TH_OK
                          </span>
                          <span className="px-1.5 py-0.5 border border-red-500/10 bg-red-950/5 text-[8px] text-red-500 tracking-wider rounded uppercase">
                            EXEC_ACTIVE
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
