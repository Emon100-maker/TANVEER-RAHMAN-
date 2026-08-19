import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Github, 
  Linkedin, 
  FileDown, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic / Engineering Inquiry',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject + ' - ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Academic / Engineering Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 bg-[#F1F5F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
            <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
            Direct Inquiries & Collaboration
          </h3>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Contact & Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Info & CV (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <div>
              <p className="text-[10px] font-black uppercase text-indigo-400 tracking-wider mb-1">
                Academic & Professional Communication
              </p>
              <h3 className="text-lg font-black text-white">
                Tanveer Rahman Emon
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Open to academic roles, STEM instruction, agricultural research collaborations, and engineering projects.
              </p>
            </div>

            {/* Email item */}
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 block font-bold">Email Address</span>
                  <span className="text-xs font-bold text-white truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 ml-2">
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 rounded-lg bg-slate-750 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copy"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <a
                  href={PERSONAL_INFO.links.emailLink}
                  className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  title="Send Email"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone item */}
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">Phone / WhatsApp</span>
                  <span className="text-xs font-bold text-white">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 rounded-lg bg-slate-750 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copy"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <a
                  href={PERSONAL_INFO.links.phoneLink}
                  className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="Call"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block font-bold">Location</span>
                <span className="text-xs font-bold text-white">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Download CV CTA */}
            <button
              type="button"
              onClick={onOpenCvModal}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg active:scale-98"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Full Curriculum Vitae (PDF)</span>
            </button>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm text-slate-900">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <h3 className="font-heading font-black text-base text-slate-900">
                Send Direct Message
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-xl text-center space-y-2 animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto font-bold text-sm">
                  ✓
                </div>
                <h4 className="font-bold text-sm text-slate-900">Email Dispatched!</h4>
                <p className="text-xs text-slate-600">
                  Your mail app opened with the inquiry addressed to <strong>{PERSONAL_INFO.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rahman / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#F1F5F9] border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@institution.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#F1F5F9] border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1F5F9] border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-600 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your inquiry, teaching opportunity, or project collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#F1F5F9] border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact-form"
                  className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
