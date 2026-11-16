import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Workflow, 
  PhoneCall, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Volume2, 
  Sparkles, 
  FileText, 
  Database, 
  MessageSquare, 
  Check, 
  Gauge,
  Activity,
  Radio
} from 'lucide-react';

interface ServicesBentoProps {
  onBookCall: () => void;
  onExploreDemo: (tab: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onBookCall, onExploreDemo }) => {
  // Chatbot preview state
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const chatScenarios = [
    {
      q: "Can you qualify after-hours leads and book calls?",
      a: "Yes! I capture prospect intent, check your Google/Outlook calendar in real-time, and confirm bookings with zero human lag.",
      badge: "Lead Captured & Synced to HubSpot",
    },
    {
      q: "Does it integrate with our existing CRM and Slack?",
      a: "Seamlessly. We support native two-way sync with HubSpot, Salesforce, Slack, Notion, and PostgreSQL databases.",
      badge: "Integration Verified (200 OK)",
    },
    {
      q: "What happens if a question is too complicated?",
      a: "I immediately escalate to your human team with full transcript context, so the customer never has to repeat themselves.",
      badge: "Human Handoff Protocol Ready",
    },
  ];

  // Workflow visualizer state
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(3); // default completed view

  const runPipelineSim = () => {
    if (pipelineRunning) return;
    setPipelineRunning(true);
    setActiveStep(0);
    setTimeout(() => setActiveStep(1), 700);
    setTimeout(() => setActiveStep(2), 1400);
    setTimeout(() => {
      setActiveStep(3);
      setPipelineRunning(false);
    }, 2100);
  };

  // Voice Agent Visualizer state
  const [isCalling, setIsCalling] = useState(true);

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden bg-[#A3A9A4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-slate-900 bg-white/70 border border-white/80 mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            End-to-End Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-6"
          >
            Four Ways We Put AI to Work for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg text-slate-800 leading-relaxed font-normal"
          >
            Pick the bottleneck. We'll build the solution, deploy it, and make sure it pays for itself.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Card 1: Custom AI Assistants & Chatbots */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white/85 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-sm">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Custom AI Assistants &amp; Chatbots
                    </h3>
                    <p className="text-xs font-mono font-semibold text-indigo-700">Your best support rep, awake 24/7.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                Trained on <span className="text-slate-950 font-semibold italic">your</span> business, products, and tone, our AI assistants answer customer questions instantly, qualify leads, and book next steps on your website, WhatsApp, and social channels, without hiring a night shift.
              </p>

              {/* Outcomes List */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant answers, zero wait times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Capture and qualify leads while you sleep</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deflect repetitive tickets so humans handle what matters</span>
                </li>
              </ul>
            </div>

            {/* Interactive Preview 1: Mini Chatbot Widget */}
            <div className="mt-4 rounded-xl bg-[#F5F6F5] border border-black/10 p-4 font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-slate-900">Live Assistant Sandbox</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 font-semibold">Trained on Techrachi KB</span>
              </div>

              {/* Sample Prompts */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {chatScenarios.map((scenario, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChatIndex(idx)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg transition-colors border font-medium ${
                      activeChatIndex === idx
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-black/10 hover:bg-slate-100'
                    }`}
                  >
                    "{scenario.q.slice(0, 24)}..."
                  </button>
                ))}
              </div>

              {/* Conversation Display */}
              <div className="space-y-2.5 mb-3 text-xs">
                <div className="flex justify-end">
                  <div className="bg-slate-900 text-white px-3 py-1.5 rounded-xl rounded-tr-none max-w-[85%] text-left font-medium">
                    {chatScenarios[activeChatIndex].q}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 px-3 py-2 rounded-xl rounded-tl-none border border-black/10 max-w-[90%] text-left shadow-sm">
                    <p className="leading-relaxed mb-1.5 font-normal">{chatScenarios[activeChatIndex].a}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 font-semibold">
                      <Check className="w-3 h-3" /> {chatScenarios[activeChatIndex].badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between">
                <button
                  onClick={() => onExploreDemo('chat')}
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 transition-colors"
                >
                  <span>See it in action</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-slate-500">Try demo below ↓</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Autonomous AI Workflow Agents */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white/85 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-sm">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Autonomous AI Workflow Agents
                    </h3>
                    <p className="text-xs font-mono font-semibold text-cyan-800">Delegate the repetitive. Keep the results.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                Agents that don't just suggest, they <span className="text-slate-950 font-semibold italic">execute</span>. They process invoices, update your CRM, triage emails, generate reports, and move data between your tools, end to end, without someone babysitting them.
              </p>

              {/* Outcomes List */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Eliminate hours of weekly admin work</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fewer errors than manual data entry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Scales instantly when volume spikes</span>
                </li>
              </ul>
            </div>

            {/* Interactive Preview 2: Live Workflow Pipeline */}
            <div className="mt-4 rounded-xl bg-[#F5F6F5] border border-black/10 p-4 font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">Invoice &amp; Lead Auto-Pipeline</span>
                </div>
                <button
                  onClick={runPipelineSim}
                  disabled={pipelineRunning}
                  className="px-2.5 py-1 rounded bg-slate-900 text-white hover:bg-slate-800 text-[10px] font-mono font-bold flex items-center gap-1 shadow-sm transition-colors"
                >
                  <Play className="w-3 h-3 fill-white" />
                  {pipelineRunning ? 'Executing...' : 'Trigger Pipeline'}
                </button>
              </div>

              {/* 4 Pipeline Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {[
                  { step: 0, label: 'Form Inbound', icon: FileText },
                  { step: 1, label: 'AI OCR Extraction', icon: Sparkles },
                  { step: 2, label: 'CRM Sync', icon: Database },
                  { step: 3, label: 'Slack Alert & Email', icon: MessageSquare },
                ].map((node) => {
                  const NodeIcon = node.icon;
                  const isDone = activeStep >= node.step;
                  const isCurrent = activeStep === node.step && pipelineRunning;
                  return (
                    <div
                      key={node.step}
                      className={`p-2 rounded-lg border text-center transition-all ${
                        isCurrent
                          ? 'bg-indigo-50 border-indigo-400 shadow-sm animate-pulse'
                          : isDone
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                          : 'bg-white border-black/10 text-slate-500'
                      }`}
                    >
                      <NodeIcon className={`w-4 h-4 mx-auto mb-1 ${isDone ? 'text-emerald-700' : 'text-slate-500'}`} />
                      <div className="text-[10px] font-bold leading-tight truncate">{node.label}</div>
                      <div className="text-[9px] font-mono mt-0.5 opacity-90">
                        {isDone ? '✓ verified' : 'queued'}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between">
                <button
                  onClick={() => onExploreDemo('workflow')}
                  className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1 transition-colors"
                >
                  <span>See it in action</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold">Total duration: 1.1s</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: AI Voice Agents */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white/85 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      AI Voice Agents
                    </h3>
                    <p className="text-xs font-mono font-semibold text-emerald-800">Never miss another call.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                Natural-sounding voice agents that answer inbound calls, make outbound follow-ups, handle FAQs, and book appointments straight into your calendar, 24/7, in the language your customers speak.
              </p>

              {/* Outcomes List */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero missed calls, zero voicemail</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Appointments booked automatically</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Outbound follow-ups without a call center</span>
                </li>
              </ul>
            </div>

            {/* Interactive Preview 3: Subtle Animated Voice-Wave Visualizer */}
            <div className="mt-4 rounded-xl bg-[#F5F6F5] border border-black/10 p-4 font-sans relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isCalling ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                  <span className="font-bold text-slate-900">Inbound Call: +1 (415) 890-2311</span>
                </div>
                <span className="font-mono text-[10px] text-slate-600 flex items-center gap-1 font-semibold">
                  <Radio className="w-3 h-3 text-emerald-600" />
                  Latency: 320ms
                </span>
              </div>

              {/* Voice-Wave Visualizer */}
              <div className="relative py-4 bg-white rounded-xl mb-3 flex items-center justify-center border border-black/5 shadow-inner">
                {isCalling ? (
                  <div className="flex items-center justify-center gap-1.5 h-12 z-10">
                    {[12, 28, 44, 20, 36, 16, 40, 24, 32, 18, 30].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [8, h, 8],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.9 + (i % 5) * 0.15,
                          ease: 'easeInOut',
                          delay: i * 0.08,
                        }}
                        className={`w-1.5 rounded-full ${
                          i % 3 === 0
                            ? 'bg-emerald-600'
                            : i % 3 === 1
                            ? 'bg-cyan-600'
                            : 'bg-indigo-600'
                        }`}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 py-3 font-mono flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-slate-400" />
                    <span>Call audio idle / paused</span>
                  </div>
                )}
              </div>

              {/* Speech transcript */}
              <div className="p-2.5 rounded-lg bg-white border border-black/10 text-[11px] text-slate-800 mb-3 shadow-sm font-medium">
                <span className="text-indigo-700 font-mono font-bold">Techrachi Voice: </span>
                <span>"Good afternoon! I have an opening tomorrow with our technical lead at 2:30 PM EST. Shall I lock that in for you?"</span>
              </div>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between">
                <button
                  onClick={() => setIsCalling(!isCalling)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isCalling ? 'Pause Voice Stream' : 'Play Live Voice Stream'}</span>
                </button>
                <button
                  onClick={() => onExploreDemo('voice')}
                  className="text-[10px] font-mono text-slate-600 hover:text-slate-900 font-semibold"
                >
                  Full audio demo →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Custom Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white/85 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-900 shadow-sm">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Custom Web Development
                    </h3>
                    <p className="text-xs font-mono font-semibold text-slate-700">Fast, modern platforms built to convert.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                High-performance websites, web apps, and client portals engineered for speed, security, and seamless AI integration. Built once, built right, built to scale with you.
              </p>

              {/* Outcomes List */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lightning-fast load times and clean UX</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AI-ready architecture from day one</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full ownership of your code and data</span>
                </li>
              </ul>
            </div>

            {/* Interactive Preview 4: Lighthouse & Engineering Audit */}
            <div className="mt-4 rounded-xl bg-[#F5F6F5] border border-black/10 p-4 font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-slate-900">Lighthouse Performance Audit</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-700 font-bold">Grade: A+ (99.8)</span>
              </div>

              {/* 4 Performance badges */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {[
                  { label: 'Performance', score: '100' },
                  { label: 'Accessibility', score: '100' },
                  { label: 'Best Practices', score: '100' },
                  { label: 'SEO Rank', score: '100' },
                ].map((item) => (
                  <div key={item.label} className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                    <div className="text-sm sm:text-base font-mono font-extrabold text-emerald-700">{item.score}</div>
                    <div className="text-[9px] text-slate-700 font-medium truncate">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-black/10 flex items-center justify-between">
                <button
                  onClick={onBookCall}
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-950 flex items-center gap-1 transition-colors"
                >
                  <span>See our approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-slate-600 font-semibold">React · Next.js · Tailwind</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Below the grid, bridge CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/90 border border-white/80 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-md"
        >
          <p className="text-base sm:text-lg text-slate-800 mb-4 font-medium">
            Not sure which one you need? <span className="text-slate-950 font-bold">Book a free strategy call</span> and we'll map your highest-ROI automation in 30 minutes.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookCall}
            className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md inline-flex items-center gap-2 group transition-all"
          >
            <span>Book Your Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
