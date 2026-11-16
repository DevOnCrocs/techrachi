import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Database, Award, Zap } from 'lucide-react';

interface PricingProps {
  onBookCall: (tier?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBookCall }) => {
  const tiers = [
    {
      name: 'Launch',
      badge: 'First Workflow',
      bestFor: 'Businesses automating their first bottleneck',
      price: '$2,500',
      period: 'one-time setup + $490/mo',
      desc: 'Ideal for taking one high-friction manual task completely off your plate.',
      features: [
        '1 Custom AI assistant OR 1 Autonomous workflow agent',
        'Setup & integration with up to 3 core business tools',
        'Multi-scenario stress testing & deployment',
        '30 days dedicated post-launch tuning & support',
        'Full ownership of workflows and prompts',
      ],
      cta: 'Book a Call',
      highlighted: false,
    },
    {
      name: 'Growth',
      badge: 'Most Popular',
      bestFor: 'Teams ready to automate across departments',
      price: '$1,490',
      period: '/ month',
      desc: 'Our flagship partnership for aggressive operational leverage and lead capture.',
      features: [
        'Up to 3 AI agents (Chatbot, Voice agent, & Workflow)',
        'Unlimited multi-tool integrations (CRM, Slack, Calendars)',
        'Ongoing monthly optimization & accuracy tuning',
        'Real-time observability dashboard & weekly reporting',
        'Priority SLA & direct Slack access to lead engineers',
      ],
      cta: 'Book a Call',
      highlighted: true,
    },
    {
      name: 'Partner',
      badge: 'Enterprise AI',
      bestFor: 'Companies building AI as their primary unfair advantage',
      price: 'Custom',
      period: 'tailored roadmap',
      desc: 'Dedicated engineering squad building custom platforms and end-to-end intelligence.',
      features: [
        'Unlimited AI agents & custom LLM/voice architectures',
        'Full-stack custom web platform & client portal development',
        'Dedicated senior AI engineer & weekly architecture syncs',
        'Enterprise SLA (99.9% uptime guarantee)',
        'SOC2 / HIPAA / GDPR compliance posture review',
      ],
      cta: 'Talk to Us',
      highlighted: false,
    },
  ];

  const alternativeModels = [
    {
      title: 'Project-Based',
      desc: 'Fixed scope, fixed milestone price for custom web development and greenfield platform builds.',
    },
    {
      title: 'Monthly Retainer',
      desc: 'Continuous agent management, proactive edge-case tuning, and rapid rollout of new automations.',
    },
    {
      title: 'Audit & Roadmap',
      desc: 'Comprehensive technical workflow audit. 100% credited toward your implementation if you proceed.',
    },
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-32 overflow-hidden bg-[#D8D8D8] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-slate-900 bg-white/70 border border-white/80 mb-4 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            Transparent Engagements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-6"
          >
            Choose How You Want to Work With Us.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
          >
            Transparent engagement models for every stage of growth. Every project starts with a free strategy call so you never pay for the wrong solution.
          </motion.p>
        </div>

        {/* 3 Main Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlighted
                  ? 'bg-slate-900 text-white border-2 border-indigo-400 shadow-2xl lg:-translate-y-2'
                  : 'bg-white/90 text-slate-900 border border-white/80 shadow-md'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold tracking-tight ${tier.highlighted ? 'text-white' : 'text-slate-950'}`}>
                    {tier.name}
                  </h3>
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                    tier.highlighted
                      ? 'bg-white/10 text-slate-200 border-white/20'
                      : 'bg-black/[0.04] text-slate-700 border-black/10'
                  }`}>
                    {tier.badge}
                  </span>
                </div>

                <p className={`text-xs mb-6 min-h-[36px] font-medium ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.bestFor}
                </p>

                <div className={`mb-6 pb-6 border-b ${tier.highlighted ? 'border-white/15' : 'border-black/10'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-mono ${
                      tier.highlighted ? 'text-white' : 'text-slate-950'
                    }`}>
                      {tier.price}
                    </span>
                    <span className={`text-xs font-mono font-medium ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      {tier.period}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 leading-relaxed ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tier.desc}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <div className={`text-xs font-mono uppercase tracking-wider font-bold ${
                    tier.highlighted ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    What's included:
                  </div>
                  {tier.features.map((feat) => (
                    <div key={feat} className={`flex items-start gap-2.5 text-xs ${
                      tier.highlighted ? 'text-slate-200' : 'text-slate-700'
                    }`}>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                        tier.highlighted
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                          : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onBookCall(tier.name)}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                  tier.highlighted
                    ? 'bg-white hover:bg-slate-100 text-slate-950'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Alternative Models Row */}
        <div className="rounded-2xl bg-white/85 border border-white/80 p-6 sm:p-8 mb-12 shadow-sm">
          <div className="text-xs font-mono text-slate-800 uppercase tracking-widest mb-4 font-bold">
            Custom &amp; Specialized Engagements
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alternativeModels.map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-[#F5F6F5] border border-black/5">
                <h4 className="text-sm font-bold text-slate-950 mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk-Reversal Strip */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white/80 border border-white/80 p-5 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs text-slate-800 font-semibold shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Free strategy call, no obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-600" />
            <span>You own 100% of workflows and data</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Engineering guarantee: We tune until it works</span>
          </div>
        </div>
      </div>
    </section>
  );
};
