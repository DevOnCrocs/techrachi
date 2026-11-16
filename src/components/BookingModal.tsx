import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedTier }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: selectedTier || 'AI Workflow Automation',
    bottleneck: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white border border-black/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-slate-900 overflow-hidden">
        {/* Glow decorative background */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-lg hover:bg-black/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Zero Obligation · 30-Minute Roadmap
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 mb-2">
              Book Your Free Strategy Call
            </h3>
            <p className="text-sm text-slate-600 mb-6 font-normal">
              In 30 minutes, we’ll map out your highest-ROI automation pipeline. You’ll walk away with a custom technical architecture whether you hire us or not.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name <span className="text-indigo-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-black/15 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Work Email <span className="text-indigo-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-black/15 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Company / Website
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc. / acme.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-black/15 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-black/15 text-sm text-slate-900 font-medium focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all"
                  >
                    <option value="AI Workflow Automation">Autonomous Workflow Agents</option>
                    <option value="AI Chatbot & Support">Custom AI Assistants & Chatbots</option>
                    <option value="AI Voice Agents">AI Voice Agents (Inbound/Outbound)</option>
                    <option value="Custom Web Development">Custom Web Development & Platforms</option>
                    <option value="Full Automation Audit">Full End-to-End Automation Audit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  What is your biggest manual bottleneck right now?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., Missing inbound leads after 6 PM, manual invoice entry from Gmail to CRM, spending 15 hours a week scheduling calls..."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-black/15 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-slate-950 hover:bg-slate-800 shadow-lg shadow-slate-950/20 flex items-center justify-center gap-2 group transition-all duration-200"
              >
                <span>Confirm &amp; Pick Call Time</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-2 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" /> 30-min Zoom call
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Direct engineer review
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-600" /> Immediate confirmation
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950">Call Request Received!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. An invite and calendar link has been sent to <span className="text-indigo-700 font-mono text-xs font-bold">{formData.email}</span>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-black/10 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1.5">
              <div className="font-bold text-slate-900">What happens next:</div>
              <div>1. Our senior engineer reviews your current bottleneck: <span className="text-slate-800 italic font-medium">"{formData.bottleneck || 'Workflow audit'}"</span></div>
              <div>2. We assemble benchmark architectures and ROI calculations prior to the call.</div>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
