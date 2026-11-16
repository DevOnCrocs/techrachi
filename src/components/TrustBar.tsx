import React from 'react';
import { Quote } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const metrics = [
    { value: '150+', label: 'Automations deployed', sub: 'Production-ready agents' },
    { value: '78%', label: 'Average workload cut', sub: 'Manual tasks eliminated' },
    { value: '< 1.2s', label: 'Average AI latency', sub: 'Real-time response rate' },
    { value: '24/7', label: 'Always-on coverage', sub: 'Zero holidays or sick days' },
    { value: '1,200+', label: 'Hours saved / month', sub: 'Reclaimed for clients' },
  ];

  const techPartners = [
    { name: 'OpenAI', role: 'GPT-4o & Assistants API' },
    { name: 'Anthropic', role: 'Claude 3.5 Sonnet' },
    { name: 'Twilio', role: 'Voice & SMS Pipelines' },
    { name: 'n8n', role: 'Enterprise Orchestration' },
    { name: 'Stripe', role: 'Autonomous Billing' },
    { name: 'HubSpot', role: 'CRM Automation' },
  ];

  return (
    <section className="relative py-16 border-y border-black/[0.08] bg-[#A3A9A4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-mono text-slate-900 font-bold">
            Trusted by teams that refuse to scale headcount just to keep up
          </p>
        </div>

        {/* Tech Partner Integration Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12">
          {techPartners.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 hover:bg-white border border-white/80 shadow-sm transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="font-bold text-sm text-slate-900 tracking-tight">{partner.name}</span>
              <span className="text-[11px] font-mono text-slate-600 hidden sm:inline">({partner.role})</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 shadow-sm text-center relative overflow-hidden group hover:border-indigo-400 transition-all ${
                i === 4 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-1.5 font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-800 mb-0.5">{metric.label}</div>
              <div className="text-[11px] text-slate-600 font-mono font-medium">{metric.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Snippet */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white/90 border border-white/80 shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
            <Quote className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm sm:text-base text-slate-800 italic font-medium mb-1">
              "We stopped missing after-hours leads in week one. Techrachi automated our entire intake pipeline and calendar booking without touching our existing CRM."
            </p>
            <p className="text-xs text-slate-600">
              <span className="text-slate-950 font-bold">David K.</span> — Head of Revenue Operations, Apex Growth Logistics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
