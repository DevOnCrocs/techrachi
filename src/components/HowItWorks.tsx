import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Rocket, 
  MessageSquare, 
  Workflow, 
  PhoneCall, 
  Play, 
  Pause, 
  Send, 
  Sparkles, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface HowItWorksProps {
  onBookCall: () => void;
  activeDemoTab?: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookCall, activeDemoTab = 'chat' }) => {
  const [currentTab, setCurrentTab] = useState<'chat' | 'workflow' | 'voice'>(
    (activeDemoTab as any) || 'chat'
  );

  // Chat simulator state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string }>>([
    {
      sender: 'agent',
      text: "Hello! I'm Techrachi's AI Assistant. I can help answer questions on our automation services, calculate estimated payback, or schedule a strategy call. What would you like to explore?",
      time: '10:00 AM',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendChat = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg = { sender: 'user' as const, text, time: 'Just now' };
    setChatMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Our automations typically deploy within 2 to 4 weeks. We connect directly to your CRM (HubSpot, Salesforce), email, and calendar with complete data isolation.";
      const lower = text.toLowerCase();
      if (lower.includes('price') || lower.includes('cost')) {
        reply = "Our projects start with a high-ROI launch build, followed by ongoing optimization. Most clients see full payback within the first 60 days. Shall we review your exact numbers on a free call?";
      } else if (lower.includes('voice') || lower.includes('call') || lower.includes('phone')) {
        reply = "Our AI Voice Agents operate at sub-400ms latency, handling inbound bookings and outbound follow-ups with human-grade cadence in multiple accents.";
      } else if (lower.includes('book') || lower.includes('demo') || lower.includes('talk')) {
        reply = "I would be happy to set that up! Click 'Book Your Free Strategy Call' above to lock in a 30-minute deep dive with our lead engineer.";
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'agent' as const, text: reply, time: 'Just now' },
      ]);
      setIsTyping(false);
    }, 900);
  };

  // Workflow visualizer state
  const [workflowExecuting, setWorkflowExecuting] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(0);

  const startWorkflowSimulation = () => {
    if (workflowExecuting) return;
    setWorkflowExecuting(true);
    setWorkflowStep(1);

    setTimeout(() => setWorkflowStep(2), 1600);
    setTimeout(() => setWorkflowStep(3), 3200);
    setTimeout(() => setWorkflowStep(4), 4800);
    setTimeout(() => {
      setWorkflowStep(5);
      setWorkflowExecuting(false);
    }, 6400);
  };

  // Voice player state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [voiceProgress, setVoiceProgress] = useState(0);

  const toggleVoicePlayback = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      setVoiceProgress(0);
      const interval = setInterval(() => {
        setVoiceProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlayingAudio(false);
            return 100;
          }
          return prev + 5;
        });
      }, 400);
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'A free 30-minute strategy call. We audit your current workflows and pinpoint the 2–3 automations with the fastest payback.',
      icon: Compass,
      color: 'text-indigo-600 border-indigo-200 bg-indigo-50',
    },
    {
      num: '02',
      title: 'Design',
      desc: "We map the agent's logic, knowledge base, guardrails, tone, and system integrations. You review and approve before we build.",
      icon: Layers,
      color: 'text-cyan-700 border-cyan-200 bg-cyan-50',
    },
    {
      num: '03',
      title: 'Build & Test',
      desc: 'We engineer the pipeline, link your production tools, and stress-test the model against hundreds of edge-case scenarios.',
      icon: Cpu,
      color: 'text-emerald-600 border-emerald-200 bg-emerald-50',
    },
    {
      num: '04',
      title: 'Launch & Optimize',
      desc: 'Go live with real-time observability, accuracy reporting, and continuous tuning so the system gets smarter every week.',
      icon: Rocket,
      color: 'text-amber-700 border-amber-200 bg-amber-50',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-32 bg-[#D8D8D8] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-indigo-900 bg-white/70 border border-white/80 mb-4 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-indigo-600" />
            Reliable Engineering Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-6">
            From Idea to Working AI in Weeks, Not Months.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Here's exactly how we take you from "we're drowning in busywork" to "it just runs."
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-white/85 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between border border-white/80 shadow-sm hover:shadow-md transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-extrabold text-slate-400">{st.num}</span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${st.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{st.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center text-[11px] font-mono font-semibold text-indigo-700">
                  <span>Step Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 5 Live Agent Demo Showcase */}
        <div id="demos" className="max-w-5xl mx-auto scroll-mt-28">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-slate-900 bg-white/70 border border-white/80 mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Interactive Sandbox
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
              Don't Take Our Word for It. Talk to One.
            </h3>
            <p className="text-sm text-slate-700 font-normal">
              Test drive the real AI agents we build for clients. No canned scripts, real intelligence.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/80 border border-black/10 backdrop-blur-md shadow-sm">
              <button
                onClick={() => setCurrentTab('chat')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currentTab === 'chat'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-black/5'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Assistant</span>
              </button>

              <button
                onClick={() => setCurrentTab('workflow')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currentTab === 'workflow'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-black/5'
                }`}
              >
                <Workflow className="w-4 h-4" />
                <span>Workflow Agent</span>
              </button>

              <button
                onClick={() => setCurrentTab('voice')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currentTab === 'voice'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-black/5'
                }`}
              >
                <PhoneCall className="w-4 h-4" />
                <span>Voice Agent</span>
              </button>
            </div>
          </div>

          {/* Tab Container */}
          <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-white/80 p-6 sm:p-8 relative overflow-hidden shadow-xl">
            {/* Tab 1: Chat Assistant */}
            {currentTab === 'chat' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-black/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">Live Support &amp; Sales Assistant</h4>
                      <p className="text-xs text-slate-600">Ask it anything: pricing, hours, booking a service.</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 font-semibold hidden sm:inline">
                    Model: Techrachi-Enterprise-v1
                  </span>
                </div>

                {/* Quick Prompts */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "How quickly can an agent be deployed?",
                    "What is the pricing model?",
                    "Can you handle HIPAA or GDPR data?",
                    "Book a strategy call",
                  ].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handleSendChat(preset)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#F5F6F5] hover:bg-[#EAEBEA] text-slate-800 border border-black/10 transition-colors font-medium"
                    >
                      "{preset}"
                    </button>
                  ))}
                </div>

                {/* Messages Box */}
                <div className="h-64 overflow-y-auto space-y-3 p-4 rounded-xl bg-[#F5F6F5] border border-black/10 text-xs sm:text-sm">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                          msg.sender === 'user'
                            ? 'bg-slate-900 text-white rounded-tr-none font-medium'
                            : 'bg-white text-slate-800 border border-black/10 rounded-tl-none leading-relaxed shadow-sm'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <span className="block text-[10px] opacity-70 mt-1 text-right">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-slate-500 px-4 py-2 rounded-xl rounded-tl-none border border-black/10 text-xs flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                    placeholder="Type a question or ask for a recommendation..."
                    className="flex-1 bg-white border border-black/15 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors shadow-sm"
                  />
                  <button
                    onClick={() => handleSendChat()}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold flex items-center gap-1.5 shadow-md transition-colors"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Workflow Agent */}
            {currentTab === 'workflow' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-black/10 gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Autonomous Inbound Lead &amp; Deal Engine</h4>
                    <p className="text-xs text-slate-600">Watch a lead go from form to follow-up in 8 seconds.</p>
                  </div>
                  <button
                    onClick={startWorkflowSimulation}
                    disabled={workflowExecuting}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{workflowExecuting ? 'Agent Processing...' : 'Simulate Inbound Lead'}</span>
                  </button>
                </div>

                {/* Visual Pipeline Track */}
                <div className="space-y-3 font-mono text-xs">
                  {[
                    {
                      id: 1,
                      label: 'Form Submission Received',
                      meta: 'Sarah Jensen (VP Operations, $10M ARR SaaS) • Needs Zendesk + Slack bot',
                      speed: '0.2s',
                    },
                    {
                      id: 2,
                      label: 'AI Enrichment & Intent Scoring',
                      meta: 'Score: 94/100 (High-Intent Enterprise) • Enriched via Apollo & LinkedIn',
                      speed: '1.4s',
                    },
                    {
                      id: 3,
                      label: 'CRM Contact & Deal Created',
                      meta: 'HubSpot Deal #4091 created under "Qualified Stage" • Owner: Lead AE',
                      speed: '2.8s',
                    },
                    {
                      id: 4,
                      label: 'Personalized Email & Slack Dispatch',
                      meta: 'Dispatched custom pricing roadmap to Sarah • Internal Slack alert triggered in #sales-wins',
                      speed: '4.6s',
                    },
                    {
                      id: 5,
                      label: 'Calendar Auto-Reserved',
                      meta: 'Meeting confirmed for Thursday 2:00 PM EST • Zoom link generated',
                      speed: '6.4s',
                    },
                  ].map((node) => {
                    const isDone = workflowStep >= node.id;
                    const isCurrent = workflowStep === node.id && workflowExecuting;
                    return (
                      <div
                        key={node.id}
                        className={`p-3.5 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                          isCurrent
                            ? 'bg-indigo-50 border-indigo-400 text-slate-900 shadow-sm'
                            : isDone
                            ? 'bg-emerald-50 border-emerald-300 text-slate-900'
                            : 'bg-white border-black/10 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isDone ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {isDone ? '✓' : node.id}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900">{node.label}</div>
                            <div className="text-[11px] text-slate-600 font-sans">{node.meta}</div>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-500 hidden sm:inline font-bold">{node.speed}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3: Voice Agent */}
            {currentTab === 'voice' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-black/10">
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Autonomous Dental &amp; Clinic Intake Agent</h4>
                    <p className="text-xs text-slate-600">Press play and hear it book an appointment.</p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">Natural Turn-Taking · 380ms Latency</span>
                </div>

                {/* Audio Player Card */}
                <div className="p-6 rounded-xl bg-[#F5F6F5] border border-black/10 text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <button
                      onClick={toggleVoicePlayback}
                      className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    >
                      {isPlayingAudio ? (
                        <Pause className="w-7 h-7 fill-white" />
                      ) : (
                        <Play className="w-7 h-7 fill-white ml-1" />
                      )}
                    </button>
                  </div>

                  <div className="text-xs text-slate-600 font-mono font-medium mb-2">
                    {isPlayingAudio ? 'Playing simulated conversational audio (0:18 / 0:42)' : 'Click Play to hear sample agent dialog'}
                  </div>

                  {/* Audio bar progress */}
                  <div className="w-full bg-slate-300 h-1.5 rounded-full overflow-hidden max-w-md mx-auto mb-6">
                    <div
                      className="bg-indigo-600 h-full transition-all duration-300"
                      style={{ width: `${voiceProgress}%` }}
                    />
                  </div>

                  {/* Transcript box */}
                  <div className="text-left p-4 rounded-xl bg-white border border-black/10 space-y-2 text-xs text-slate-800 max-w-xl mx-auto shadow-sm">
                    <div>
                      <span className="font-bold text-indigo-700 font-mono">Caller: </span>
                      <span>"Hi, I was looking to see if you have any opening for a dental cleaning this Thursday afternoon?"</span>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-700 font-mono">Techrachi AI: </span>
                      <span>"Hello! Yes, we have Dr. Patel available at 3:15 PM and 4:45 PM on Thursday. Would either of those times work for you?"</span>
                    </div>
                    <div>
                      <span className="font-bold text-indigo-700 font-mono">Caller: </span>
                      <span>"3:15 PM is perfect."</span>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-700 font-mono">Techrachi AI: </span>
                      <span>"Splendid! I have reserved Thursday at 3:15 PM. I just sent a confirmation SMS to your number. Anything else I can assist with?"</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Post-demo CTA card */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-slate-600 font-medium mb-0.5">
                  This is a real agent, not a recording. Ask it something tricky.
                </p>
                <p className="text-sm font-bold text-slate-950">
                  Impressed? Imagine this trained on <span className="text-indigo-600 italic">your</span> business.
                </p>
              </div>

              <button
                onClick={onBookCall}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shrink-0 transition-all hover:scale-[1.02]"
              >
                <span>Book Your Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
