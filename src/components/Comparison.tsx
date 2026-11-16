import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Calculator, 
  ArrowRight, 
  Code, 
  Layers, 
  Target,
  TrendingUp
} from 'lucide-react';

interface ComparisonProps {
  onBookCall: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onBookCall }) => {
  // Calculator state
  const [hoursPerWeek, setHoursPerWeek] = useState(25);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [missedLeadsPerWeek, setMissedLeadsPerWeek] = useState(8);
  const [leadValue, setLeadValue] = useState(250);

  // Dynamic calculations (4.33 weeks per month average)
  const monthlyHoursReclaimed = Math.round(hoursPerWeek * 4.33);
  const monthlyLaborSavings = Math.round(monthlyHoursReclaimed * hourlyCost);
  const monthlyRecoveredRevenue = Math.round(missedLeadsPerWeek * 4.33 * leadValue * 0.3); // conservative 30% qualification/conversion
  const totalMonthlyImpact = monthlyLaborSavings + monthlyRecoveredRevenue;

  const comparisonRows = [
    {
      feature: 'Availability',
      manual: 'Business hours, minus sick days & holidays',
      ai: '24/7/365 continuous operation, zero downtime',
    },
    {
      feature: 'Response time',
      manual: 'Minutes to hours (leads go cold)',
      ai: 'Instant (< 1.2 seconds across all channels)',
    },
    {
      feature: 'Cost structure',
      manual: 'Salary + benefits + training, rising with volume',
      ai: 'Predictable fixed monthly investment',
    },
    {
      feature: 'Consistency',
      manual: 'Varies wildly by person, fatigue, and mood',
      ai: 'Deterministic precision on 100% of interactions',
    },
    {
      feature: 'Scalability',
      manual: 'Post job ads, interview, hire, train for 3 months',
      ai: 'Absorb 10× traffic spikes without hiring',
    },
    {
      feature: 'Error rate',
      manual: 'Human slips in repetitive copy-paste tasks',
      ai: 'Systematic, auditable, and continuously tuned',
    },
    {
      feature: 'Missed leads',
      manual: 'Common after hours, weekends, and peak rushes',
      ai: 'Captured, qualified, and booked automatically',
    },
    {
      feature: 'Team focus',
      manual: 'Trapped in admin triage and firefighting',
      ai: 'Freed to focus on high-value revenue and relationships',
    },
  ];

  return (
    <section id="roi" className="relative py-20 sm:py-32 overflow-hidden bg-[#A3A9A4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-slate-900 bg-white/70 border border-white/80 mb-4 shadow-sm"
          >
            <TrendingUp className="w-3.5 h-3.5 text-indigo-700" />
            Clear Business Economics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-6"
          >
            The Math Is Hard to Argue With.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-slate-800 leading-relaxed font-normal"
          >
            Compare what you're doing today with what's possible tomorrow.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 overflow-hidden shadow-lg mb-16 sm:mb-20"
        >
          <div className="sm:hidden px-4 py-2 bg-indigo-50 border-b border-indigo-100 text-[11px] font-mono text-indigo-900 font-bold flex items-center justify-between">
            <span>← Swipe table sideways to compare →</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-black/10 bg-[#F5F6F5] font-mono text-xs">
                  <th className="py-4 px-6 text-slate-600 font-bold w-1/4">Operational Dimension</th>
                  <th className="py-4 px-6 text-rose-700 font-bold w-3/8">
                    <span className="flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-600" />
                      Doing It Manually
                    </span>
                  </th>
                  <th className="py-4 px-6 text-indigo-950 font-bold w-3/8 bg-indigo-50/70 border-l border-black/10">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      With Techrachi AI Agents
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06] text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`hover:bg-black/[0.02] transition-colors ${
                      idx % 2 === 0 ? 'bg-transparent' : 'bg-black/[0.01]'
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-normal">
                      {row.manual}
                    </td>
                    <td className="py-4 px-6 text-indigo-950 font-semibold bg-indigo-50/40 border-l border-black/10">
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mini Interactive ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 p-6 sm:p-10 mb-16 sm:mb-20 relative overflow-hidden shadow-xl"
        >
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-indigo-700 text-xs font-mono font-bold mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive ROI Modeler</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Estimate Your Monthly Savings
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              Adjust the sliders to match your current team bottleneck and see the direct economic return of AI delegation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Repetitive hours */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-800">Hours of repetitive work per week:</span>
                  <span className="font-mono text-indigo-700 font-bold">{hoursPerWeek} hrs / week</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 font-medium">
                  <span>5 hrs</span>
                  <span>60 hrs</span>
                  <span>120 hrs</span>
                </div>
              </div>

              {/* Slider 2: Average hourly cost */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-800">Average hourly cost (salary + burden):</span>
                  <span className="font-mono text-indigo-700 font-bold">${hourlyCost} / hr</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 font-medium">
                  <span>$15/hr</span>
                  <span>$75/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>

              {/* Slider 3: Missed calls/leads */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-800">Missed calls / unhandled leads per week:</span>
                  <span className="font-mono text-indigo-700 font-bold">{missedLeadsPerWeek} leads / week</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={missedLeadsPerWeek}
                  onChange={(e) => setMissedLeadsPerWeek(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 font-medium">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>

              {/* Slider 4: Value per lead */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-slate-800">Average value of a closed customer:</span>
                  <span className="font-mono text-indigo-700 font-bold">${leadValue}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="50"
                  value={leadValue}
                  onChange={(e) => setLeadValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 font-medium">
                  <span>$50</span>
                  <span>$1,000</span>
                  <span>$2,500</span>
                </div>
              </div>
            </div>

            {/* Output Display Card */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-6 sm:p-7 text-center shadow-xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-2 font-bold">
                Projected Monthly Return
              </span>

              <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-300 mb-4 font-mono">
                ${totalMonthlyImpact.toLocaleString()}
                <span className="text-xs sm:text-sm font-normal text-slate-400 font-sans block sm:inline"> / month</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.08] border border-white/10 space-y-2 mb-6 text-left text-xs font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-300">Reclaimed Time:</span>
                  <span className="font-mono text-white font-bold">{monthlyHoursReclaimed} hours/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Payroll Savings:</span>
                  <span className="font-mono text-emerald-400 font-bold">${monthlyLaborSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Recovered Lead Value:</span>
                  <span className="font-mono text-cyan-300 font-bold">${monthlyRecoveredRevenue.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-normal mb-6">
                You could reclaim about <span className="text-white font-bold">{monthlyHoursReclaimed} hours</span> and recover about <span className="text-emerald-400 font-bold">${totalMonthlyImpact.toLocaleString()}/month</span> in payroll efficiency and captured revenue.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookCall}
                className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Lock In Your Automation Savings</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="text-[10px] text-slate-400 mt-4 leading-normal italic">
                *Estimates are illustrative and based on the numbers you enter. Actual results vary by business.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-6 sm:p-7 bg-white/85 border border-white/80 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-5 shadow-sm">
              <Code className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-950 mb-2">1. Built by engineers, not resellers.</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              We write the custom code, own the API integrations, configure the data isolation, and fix whatever breaks. You get direct access to builders, not middleman account managers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-6 sm:p-7 bg-white/85 border border-white/80 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-5 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-950 mb-2">2. Tailored, not templated.</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Your proprietary business logic, your exact company tone, and your custom workflows. Never a generic off-the-shelf bot that hallucinates or insults your customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-6 sm:p-7 bg-white/85 border border-white/80 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5 shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-950 mb-2">3. Results-first roadmap.</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              We start with the single automation that pays back fastest (typically 30–60 days), prove the unit economics, and expand systematically from there.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-indigo-900 group transition-colors"
          >
            <span>See what we'd automate first</span>
            <span className="underline decoration-black/40 underline-offset-4">Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
