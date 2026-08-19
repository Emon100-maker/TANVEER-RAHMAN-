import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  Github, 
  Linkedin, 
  Share2, 
  Terminal, 
  Code2, 
  Globe, 
  FileCode,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GITHUB_PROMO_TEMPLATES, PERSONAL_INFO } from '../data/portfolioData';

interface GitHubPromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPromoModal: React.FC<GitHubPromoModalProps> = ({ isOpen, onClose }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('github-readme');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentTemplate = GITHUB_PROMO_TEMPLATES.find((t) => t.id === selectedTemplateId) || GITHUB_PROMO_TEMPLATES[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4f46e5', '#38bdf8', '#818cf8', '#10b981'],
    });
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div 
      id="github-promo-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-print"
      onClick={onClose}
    >
      <div 
        className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F172A] px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-heading font-black text-base sm:text-lg text-white flex items-center gap-2">
                <span>GitHub Website & Promo Kit</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-900/80 text-indigo-300 border border-indigo-700">
                  Ready to Deploy
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                README.md templates and promotional captions for Tanveer Rahman Emon.
              </p>
            </div>
          </div>

          <button
            type="button"
            id="btn-close-promo-modal"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Template Selector Tabs */}
        <div className="bg-slate-900 px-6 py-2.5 border-b border-slate-800 flex flex-wrap gap-2">
          {GITHUB_PROMO_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              type="button"
              id={`promo-tab-${tmpl.id}`}
              onClick={() => setSelectedTemplateId(tmpl.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                selectedTemplateId === tmpl.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700'
              }`}
            >
              {tmpl.id === 'github-readme' && <Github className="w-3.5 h-3.5" />}
              {tmpl.id === 'linkedin-post' && <Linkedin className="w-3.5 h-3.5" />}
              {tmpl.id === 'repo-about' && <Terminal className="w-3.5 h-3.5" />}
              <span>{tmpl.title}</span>
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-950/60">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black text-indigo-400 uppercase tracking-wider">
                {currentTemplate.badge}
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentTemplate.description}
              </p>
            </div>

            <button
              type="button"
              id="btn-copy-selected-promo-caption"
              onClick={() => handleCopy(currentTemplate.content, currentTemplate.id)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors shadow-lg active:scale-95 shrink-0"
            >
              {copiedId === currentTemplate.id ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 font-bold" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Caption</span>
                </>
              )}
            </button>
          </div>

          {/* Code/Text Block */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200 font-mono text-xs p-4 leading-relaxed max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-200 selection:bg-indigo-600 selection:text-white">
              {currentTemplate.content}
            </pre>
          </div>

          {/* Quick instructions */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span>How to Host on GitHub Pages:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-400 pl-1">
              <li>Create a new repository on GitHub named <code className="text-indigo-300 bg-slate-800 px-1 py-0.5 rounded font-mono">tanveeremon2234.github.io</code></li>
              <li>Push your website code to the repository.</li>
              <li>Go to <strong className="text-white">Settings → Pages</strong> and select <strong className="text-white">GitHub Actions</strong> or <strong className="text-white">Deploy from branch (main)</strong>.</li>
              <li>Your portfolio will be live at <a href="https://tanveeremon2234.github.io" target="_blank" rel="noreferrer" className="text-indigo-400 underline">https://tanveeremon2234.github.io</a>!</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0F172A] px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Personalized for {PERSONAL_INFO.name}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-lg text-xs font-bold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
