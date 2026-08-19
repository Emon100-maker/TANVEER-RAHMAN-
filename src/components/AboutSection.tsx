import React from 'react';
import { 
  User, 
  Target, 
  Droplet, 
  Cpu, 
  BookOpen, 
  Globe2, 
  CheckCircle2, 
  FileText,
  Compass,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCvModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCvModal }) => {
  const pillars = [
    {
      icon: Droplet,
      title: 'Irrigation & Hydrology',
      desc: 'Fluid mechanics, agricultural hydrology, irrigation scheduling, and soil-water-plant relationships.',
      badge: 'B.Sc. Focus',
    },
    {
      icon: BookOpen,
      title: 'STEM Instruction',
      desc: 'Online & offline tutoring in Mathematics, Physics, and IT with custom problem sets and progress tracking.',
      badge: 'Educator',
    },
    {
      icon: Cpu,
      title: 'Programming & Analytics',
      desc: 'Computational modeling with Python, R, JavaScript, and data visualization in MS Office Suite.',
      badge: 'Tech Stack',
    },
    {
      icon: Globe2,
      title: 'GIS & Spatial Mapping',
      desc: 'Watershed boundary delineation, agricultural flood zoning, and remote sensing satellite NDVI metrics.',
      badge: 'Spatial GIS',
    },
  ];

  return (
    <section id="about" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
            <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
            Professional Profile & Mission
          </h3>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            About Tanveer Rahman Emon
          </h2>
        </div>

        {/* High Density Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Professional Narrative (7 cols) */}
          <div className="lg:col-span-7 bg-[#F1F5F9] p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-black uppercase rounded">
                  Summary
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">
                  $ cat profile.txt
                </span>
              </div>
              
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed">
                Academic and technical professional with an academic background in <strong>Agricultural Engineering & Technology</strong> (B.Sc. Undergraduate) from Bangladesh Agricultural University (BAU), specializing in <strong>Irrigation & Water Management</strong>.
              </p>
              
              <p className="text-slate-600 text-xs leading-relaxed">
                Interested in education, agricultural engineering, technical problem solving, research, data analysis, GIS, hydrology and computational applications.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">University</span>
                  <span className="font-black text-slate-800 text-xs">BAU Mymensingh</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Status</span>
                  <span className="font-black text-indigo-700 text-xs">B.Sc. Undergrad</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Board Merit</span>
                  <span className="font-black text-emerald-600 text-xs">2x GPA 5.00</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">
                Complete credentials & academic references documented in CV.pdf.
              </span>
              <button
                type="button"
                id="btn-about-view-cv"
                onClick={onOpenCvModal}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-500 underline decoration-indigo-300 flex items-center gap-1"
              >
                <span>Open Full CV.pdf</span>
                <Sparkles className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Career Objective Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-black uppercase rounded">
                  Career Objective
                </span>
              </div>
              
              <blockquote className="text-slate-200 text-xs sm:text-sm italic leading-relaxed border-l-2 border-indigo-500 pl-3.5">
                "{PERSONAL_INFO.careerObjective}"
              </blockquote>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>Agricultural engineering problem solving & optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Effective STEM pedagogy in classroom & online media</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>Application of Python & GIS to modern water sustainability</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Location: Bangladesh</span>
              <span className="text-indigo-400 font-bold">Open to Opportunities</span>
            </div>
          </div>

        </div>

        {/* 4 Pillars in High Density Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-[#F1F5F9] p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-2 hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {p.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
