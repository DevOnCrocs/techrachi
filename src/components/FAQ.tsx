import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How long does it take to get an AI agent live?',
      a: "Most single-agent projects launch in 2–4 weeks. Larger multi-agent systems or custom full-stack platforms take 4–8 weeks, and we'll give you a crystal-clear milestone roadmap after the initial strategy call.",
    },
    {
      q: 'Will it sound robotic or hurt my customer experience?',
      a: 'No. We train each assistant specifically on your business documentation, historical high-converting transcripts, brand voice, and strict policy guardrails. It sounds natural, empathetic, and knowledgeable. You also define explicit triggers for instant human handoffs.',
    },
    {
      q: "What happens if the AI doesn't know the answer?",
      a: "It escalates gracefully. Instead of hallucinating, it acknowledges the question, collects the customer's contact details, flags the high-priority conversation, and routes a context-rich ticket directly to your team via Slack or email.",
    },
    {
      q: 'Will it work with the tools we already use?',
      a: 'Very likely. We integrate with popular CRMs (HubSpot, Salesforce, Pipedrive), calendars (Google Calendar, Outlook), helpdesks (Zendesk, Intercom), payment tools (Stripe, QuickBooks), email, WhatsApp, and Slack through direct webhooks and APIs.',
    },
    {
      q: 'Is my customer data secure?',
      a: 'Security is engineered into the architecture from day one. We use TLS 1.3 encrypted connections, enforce zero-data-retention training policies with LLM providers, and restrict environment access with least-privilege tokens. Your proprietary data is never used to train public foundation models.',
    },
    {
      q: 'Do I need technical knowledge to manage it?',
      a: 'No. We handle infrastructure provisioning, API maintenance, uptime monitoring, and model tuning. You receive straightforward performance dashboards and a direct Slack line to our engineering team whenever you want adjustments.',
    },
    {
      q: 'How is this different from off-the-shelf chatbot tools?',
      a: 'Off-the-shelf templates give you a generic, isolated bot that cannot take real business actions. We build autonomous agents embedded into your backend database, CRM, and communication stack—agents that actively resolve tickets, update records, and close sales.',
    },
    {
      q: 'How much does it cost, and when do I see a return?',
      a: 'Investment depends on scope, starting at $2,500 setup for single-workflow agents. Most clients target automations with an aggressive 30 to 60 day payback period through direct labor hours saved and captured after-hours revenue.',
    },
    {
      q: 'Can voice agents handle accents and different languages?',
      a: 'Yes. Our neural voice pipeline utilizes low-latency neural speech engines capable of understanding and speaking over 30 languages, adapting naturally to regional dialects and colloquial speech without robotic pauses.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-32 overflow-hidden bg-[#A3A9A4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-slate-900 bg-white/70 border border-white/80 mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-700" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
            Questions? Straight Answers.
          </h2>
          <p className="text-base text-slate-800 font-normal">
            Everything you need to know about our technology, process, and integration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-black/10 shadow-md'
                    : 'bg-white/80 border-white/80 hover:bg-white shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? 'bg-slate-900 text-white border-slate-900 rotate-180'
                        : 'bg-black/5 text-slate-700 border-black/5'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-black/[0.06] font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
