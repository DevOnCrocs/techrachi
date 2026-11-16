import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onBookCall: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookCall }) => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-[#D8D8D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/95 border border-white/80 p-6 sm:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle inner grid lines */}
          <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-indigo-900 bg-indigo-50 border border-indigo-200 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Start Automating Today
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
              Ready to Put Your Busywork on{' '}
              <span className="text-indigo-600 underline decoration-indigo-300 underline-offset-8">
                Autopilot?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              In 30 minutes, we'll pinpoint the 2–3 automations that would save you the most time and money, and show you exactly how we'd build them. Whether you hire us or not, you walk away with a clear roadmap.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-xl shadow-slate-950/20 flex items-center justify-center gap-2 group transition-all duration-200"
              >
                <span>Book Your Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="mailto:hello@techrachi.com"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-800 hover:text-slate-950 bg-black/[0.04] hover:bg-black/[0.08] border border-black/10 flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Prefer email? hello@techrachi.com</span>
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs text-slate-500 font-mono mb-6 font-medium">
              No pressure. No jargon. Just a clear technical plan.
            </p>

            {/* Honest-urgency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>We take on 4 new projects per month so every client gets real attention. 2 spots left for this month.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
