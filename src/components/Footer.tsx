import React from 'react';
import { Cpu, ArrowUp, Globe, Mail } from 'lucide-react';

interface FooterProps {
  onBookCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookCall }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/10 bg-[#A3A9A4] pt-16 pb-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 p-[1px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-950">Techrachi</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 max-w-sm leading-relaxed font-normal">
              AI automation and custom software that saves time, cuts costs, and scales revenue for growing businesses worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://techrachi.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/70 hover:bg-white text-slate-800 flex items-center justify-center border border-white/80 shadow-sm transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@techrachi.com"
                className="w-8 h-8 rounded-lg bg-white/70 hover:bg-white text-slate-800 flex items-center justify-center border border-white/80 shadow-sm transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-950 font-bold">Services</div>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-700">
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">AI Assistants &amp; Chatbots</a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">Autonomous Workflow Agents</a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">AI Voice Agents</a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-950 transition-colors">Custom Web Platforms</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-950 font-bold">Company</div>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-700">
              <li>
                <a href="#how-it-works" className="hover:text-slate-950 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#demos" className="hover:text-slate-950 transition-colors">Live Interactive Demos</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-950 transition-colors">Engagement Models</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-950 transition-colors">FAQ</a>
              </li>
              <li>
                <button onClick={onBookCall} className="text-indigo-900 hover:text-black font-bold">
                  Book a Strategy Call
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Standards */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-950 font-bold">Legal &amp; Privacy</div>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-700">
              <li>
                <a href="#privacy" className="hover:text-slate-950 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-slate-950 transition-colors">Terms of Service</a>
              </li>
              <li>
                <span className="text-[11px] font-mono text-emerald-900 font-bold block pt-2">
                  ✓ Enterprise Zero-Data Retention
                </span>
              </li>
              <li>
                <span className="text-[11px] font-mono text-indigo-900 font-bold block">
                  ✓ TLS 1.3 &amp; SOC2 Aligned
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-700">
          <div>
            &copy; {new Date().getFullYear()} Techrachi Inc. All rights reserved. Built for growing businesses.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-800 hover:text-slate-950 transition-colors p-1.5 rounded-lg hover:bg-black/5"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
