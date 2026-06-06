import { useState, useEffect, FormEvent } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Send, Terminal, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const transmissionSequence = [
    '[+] INITIALIZING SECURE CHANNEL...',
    '[+] EXCHANGING RSA KEYS (4096-bit)...',
    '[+] ENCRYPTING PAYLOAD WITH AES-GCM...',
    '[+] TRANSMISSION SUCCESSFUL. CONNECTION CLOSED.'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsTransmitting(true);
    setLogs([]);
    setIsSuccess(false);

    // Fire background network packet to Formspree
    const formspreePromise = fetch('https://formspree.io/f/mpqeqbdy', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    try {
      // Step 1: Initialize
      setLogs(prev => [...prev, '[+] INITIALIZING SECURE CHANNEL...']);
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Step 2: Key exchange
      setLogs(prev => [...prev, '[+] EXCHANGING RSA KEYS (4096-bit)...']);
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Step 3: Encryption
      setLogs(prev => [...prev, '[+] ENCRYPTING PAYLOAD WITH AES-GCM...']);
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Wait for formspree network request resolution
      const response = await formspreePromise;

      if (response.ok) {
        setLogs(prev => [...prev, '[+] TRANSMISSION SUCCESSFUL. CONNECTION CLOSED.']);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSuccess(true);
        // Zero-out fields securely upon successful handover
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Handshake denied');
      }
    } catch (error) {
      setLogs(prev => [...prev, '[!] TRANSMISSION INTERCEPTED: HANDSHAKE FAILURE (COMPROMISED PAYLOAD)']);
      setIsSuccess(false);
    } finally {
      setIsTransmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 border-t border-gray-950 bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-red-500 animate-pulse rounded-full" />
            <h2 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-red-500">
              [ SEC_MODULE_04 // {t.nav.contact.toUpperCase()} ]
            </h2>
          </div>
          <h3 className="font-mono text-xl sm:text-2xl font-semibold text-gray-100 tracking-tight">
            {t.contact.title}
          </h3>
          <p className="font-sans text-xs text-gray-400 font-light max-w-xl">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Console and Form Wrapper Container */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          
          {/* Main transmission input terminal block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-3 border border-gray-900 bg-[#111214] rounded p-6 shadow-sm flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-900 pb-3 mb-2">
                <span className="font-mono text-xs text-red-500 font-semibold uppercase">[ SECURE_TRANSMIT_CONSOLE ]</span>
              </div>

              {/* Input: Operator Name */}
              <div className="space-y-1">
                <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                  {t.contact.name} //
                </label>
                <input
                  type="text"
                  required
                  disabled={isTransmitting}
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Carlos"
                  className="w-full bg-[#151619] border border-gray-901 px-3 py-2 rounded text-xs text-gray-200 placeholder-gray-600 font-mono focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 disabled:opacity-50 transition-all duration-300"
                />
              </div>

              {/* Input: Destination Handshake Email */}
              <div className="space-y-1">
                <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                  {t.contact.email} //
                </label>
                <input
                  type="email"
                  required
                  disabled={isTransmitting}
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="carlos@gmail.com"
                  className="w-full bg-[#151619] border border-gray-901 px-3 py-2 rounded text-xs text-gray-200 placeholder-gray-600 font-mono focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 disabled:opacity-50 transition-all duration-300"
                />
              </div>

              {/* Input: Cipher Envelope Payload */}
              <div className="space-y-1">
                <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                  {t.contact.message} //
                </label>
                <textarea
                  required
                  rows={4}
                  disabled={isTransmitting}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter your message..."
                  className="w-full bg-[#151619] border border-gray-901 px-3 py-2 rounded text-xs text-gray-200 placeholder-gray-600 font-mono focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 disabled:opacity-50 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit trigger button */}
              <button
                type="submit"
                disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
                className="w-full py-2.5 border border-red-500/20 bg-red-950/10 hover:bg-red-500/20 text-red-500 font-mono text-xs rounded transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isTransmitting ? t.contact.sending : t.contact.send}</span>
              </button>
            </form>
          </motion.div>

          {/* Livestream console/logs simulator block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 border border-gray-900 bg-[#0d0e10] rounded p-5 flex flex-col justify-between relative"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-900 pb-2">
                <span className="font-mono text-[9px] text-gray-500 tracking-wider flex items-center gap-1.5 uppercase">
                  <Terminal className="w-3 h-3 text-red-500" />
                  REALTIME_STREAMS
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              </div>

              {/* Log messages board */}
              <div className="space-y-2 min-h-36 font-mono text-[10px] text-gray-500 leading-normal">
                {logs.length === 0 && !isSuccess && (
                  <p className="text-gray-600 italic">
                    [!] Waiting for submission payload handshake...
                  </p>
                )}

                {logs.map((log, index) => {
                  const isLast = index === logs.length - 1;
                  return (
                    <p 
                      key={index} 
                      className={`${isLast && isTransmitting ? 'text-red-500 animate-pulse' : 'text-gray-400'}`}
                    >
                      {log}
                    </p>
                  );
                })}

                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-2 border border-green-500/20 bg-green-950/5 text-green-500 rounded text-[9px] mt-4 flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    <span>{t.contact.success}</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Quick terminal environment statistics footer */}
            <div className="pt-4 border-t border-gray-901 font-mono text-[8px] text-gray-600 flex justify-between">
              <span>CIPHER: AES-GCM-256</span>
              <span>TUNNEL: SECURE</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
