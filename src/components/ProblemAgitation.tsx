import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, BatteryWarning, TrendingDown, ArrowDown, AlertTriangle } from 'lucide-react';

export const ProblemAgitation: React.FC = () => {
  const painPoints = [
    {
      icon: PhoneMissed,
      title: 'Missed leads.',
      description: 'Customers message at 11 PM and call during lunch. If nobody answers within 5 minutes, 78% of them move directly to your competitor.',
      cost: 'Cost: $3,000–$15,000+ lost pipeline / month',
      color: 'bg-rose-50 text-rose-600 border-rose-200',
    },
    {
      icon: BatteryWarning,
      title: 'Burned-out teams.',
      description: 'Skilled people stuck on copy-pasting data, manual invoice entry, and scheduling friction are expensive, error-prone, and chronically frustrated.',
      cost: 'Cost: 20+ lost hours / employee / week',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      icon: TrendingDown,
      title: 'Costs that scale with volume.',
      description: 'More customers should mean higher profit margins, not a linear expansion of payroll, recruiting fees, and administrative management overhead.',
      cost: 'Cost: 40–60% margin erosion on growth',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-[#D8D8D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-rose-800 bg-rose-100 border border-rose-200 mb-4"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            The Silent Overhead
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-6"
          >
            Manual Work Is Quietly Taxing Your Growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
          >
            Every hour your team spends copying data, answering the same questions, chasing leads, or scheduling appointments is an hour not spent on revenue. Every call that goes to voicemail is a customer who called your competitor next.
          </motion.p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 sm:mb-16">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-2xl bg-white/85 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between border border-white/80 shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6 border shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-slate-500 font-bold">0{idx + 1}.</span>
                    <h3 className="text-xl font-bold text-slate-950 tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-black/[0.06] text-xs font-mono flex items-center justify-between">
                  <span className="text-rose-700 font-bold">{item.cost}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition Line */}
        <div className="text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white border border-black/10 text-xs sm:text-sm font-semibold text-slate-900 shadow-sm transition-all"
          >
            <span>There's a better way. Meet your new always-on team.</span>
            <ArrowDown className="w-4 h-4 text-indigo-600 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
