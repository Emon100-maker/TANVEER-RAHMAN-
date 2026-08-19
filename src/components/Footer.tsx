import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileDown, 
  Sparkles, 
  Heart,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
  onOpenPromoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCvModal,
  onOpenPromoModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800 pt-12 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main 4-column footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Identity & Persona */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-black text-xs shadow-md">
                TRE
              </div>
              <span className="font-heading font-black text-base text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Academic Professional, STEM Educator & Agricultural Engineering Graduate from Bangladesh Agricultural University.
            </p>
            <div className="text-xs text-indigo-400 font-bold font-mono">
              $ spec: Irrigation & Water Management
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About & Profile</a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">Educational Qualifications (SSC, HSC, BSC)</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Core Skills & Tech Stack</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">Professional Experience & Teaching</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Research & Projects</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Documents & GitHub Assets */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Document Attachments
            </h4>
            <div className="space-y-2 text-xs">
              <button
                type="button"
                id="btn-footer-open-cv"
                onClick={onOpenCvModal}
                className="w-full text-left p-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-bold flex items-center justify-between group transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-indigo-400" />
                  <span>Download CV.pdf</span>
                </div>
                <span className="text-[10px] bg-indigo-600 px-1.5 py-0.5 rounded text-white font-bold">2-Page</span>
              </button>

              <button
                type="button"
                id="btn-footer-open-promo"
                onClick={onOpenPromoModal}
                className="w-full text-left p-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>GitHub Promo Kit</span>
                </div>
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400">
              {PERSONAL_INFO.location}
            </p>
            <div className="text-xs text-slate-300">
              <a href={PERSONAL_INFO.links.emailLink} className="hover:text-indigo-400 block truncate">
                {PERSONAL_INFO.email}
              </a>
              <a href={PERSONAL_INFO.links.phoneLink} className="hover:text-indigo-400 block mt-1">
                {PERSONAL_INFO.formattedPhone}
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.links.emailLink}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <span>Tanveer Rahman Emon • Academic & Professional Portfolio • © 2026</span>
          </div>

          <button
            type="button"
            id="btn-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors text-xs font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
