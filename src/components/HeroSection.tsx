import React from 'react';
import { 
  FileDown, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Award,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
  onOpenPromoModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCvModal,
  onOpenPromoModal,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-24 pb-8 md:pt-28 md:pb-10 bg-[#F1F5F9] text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High Density Top Banner */}
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-300 pb-6 mb-8 gap-4">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-1 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-indigo-600"></span>
              <span>Academic & Professional Profile</span>
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-heading">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* High-density metrics header counters */}
          <div className="flex items-center gap-6 sm:gap-8 self-start md:self-auto bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Education</p>
              <p className="text-lg sm:text-xl font-black text-indigo-600">B.Sc. (BAU)</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">HSC / SSC</p>
              <p className="text-lg sm:text-xl font-black text-emerald-600">5.00 GPA</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Instruction</p>
              <p className="text-lg sm:text-xl font-black text-slate-800">STEM Lead</p>
            </div>
          </div>
        </header>

        {/* High Density Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Hero Card / Profile Container (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase rounded-md tracking-wider border border-indigo-100">
                  Irrigation & Water Management
                </span>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase rounded-md tracking-wider border border-emerald-100">
                  Open to Academic & Engineering Roles
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading leading-snug">
                Bridging Agricultural Hydrology, GIS Modeling & Computational Technologies
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              {/* Fast Contact metadata row */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <a
                  href={PERSONAL_INFO.links.emailLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a
                  href={PERSONAL_INFO.links.phoneLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{PERSONAL_INFO.formattedPhone}</span>
                </a>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* High Density Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                id="btn-hero-download-cv"
                onClick={onOpenCvModal}
                className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-md flex items-center gap-2 active:scale-95"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV.pdf</span>
              </button>

              <button
                type="button"
                id="btn-hero-education"
                onClick={() => scrollToSection('#education')}
                className="px-3.5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5 border border-slate-200"
              >
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Qualifications (SSC, HSC, BSC)</span>
              </button>

              <button
                type="button"
                id="btn-hero-skills"
                onClick={() => scrollToSection('#skills')}
                className="px-3.5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5 border border-slate-200"
              >
                <Code2 className="w-4 h-4 text-indigo-600" />
                <span>Skills</span>
              </button>

              <button
                type="button"
                id="btn-hero-promo-caption"
                onClick={onOpenPromoModal}
                className="px-3.5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-xs transition-colors flex items-center gap-1.5 border border-slate-700 ml-auto"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>GitHub Promo Kit</span>
              </button>
            </div>
          </div>

          {/* Right Card: High Density Profile / Current Role Block (4 cols) */}
          <div className="lg:col-span-4 bg-[#0F172A] text-white p-6 sm:p-7 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 border border-slate-800">
            <div>
              {/* Avatar + Status Indicator */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-slate-700 flex items-center justify-center text-white font-black text-xl shadow-lg">
                    <span>TRE</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0F172A] rounded-full"></div>
                </div>

                <div>
                  <h4 className="text-base font-black text-white">{PERSONAL_INFO.name}</h4>
                  <p className="text-slate-400 text-xs font-mono mt-0.5">$ engr --agri_tech</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded bg-slate-800 text-indigo-400 text-[10px] font-bold border border-slate-700">
                    BAU Engineering
                  </span>
                </div>
              </div>

              {/* Current Role / Snapshot */}
              <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 space-y-1.5 mb-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">
                  Current Role & Focus
                </p>
                <p className="text-xs font-bold text-white leading-tight">
                  Academic Instructor & Agricultural Engineer
                </p>
                <p className="text-[11px] text-slate-300">
                  Teaching STEM & researching irrigation water optimization.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="text-[10px] text-slate-400 block font-bold">HSC Science</span>
                  <span className="text-xs font-black text-indigo-400">GPA 5.00</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                  <span className="text-[10px] text-slate-400 block font-bold">SSC Science</span>
                  <span className="text-xs font-black text-emerald-400">GPA 5.00</span>
                </div>
              </div>
            </div>

            {/* Button inside card */}
            <button
              type="button"
              onClick={onOpenCvModal}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-bold transition-all shadow-lg text-xs active:scale-98"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV.pdf</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
