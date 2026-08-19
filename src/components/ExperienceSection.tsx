import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  GraduationCap,
  Users,
  Presentation,
  BookOpenCheck
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
            <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
            Work Experience & Instruction
          </h3>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Professional Experience
          </h2>
        </div>

        {/* High Density Experience Cards & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main timeline box (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="flex space-x-4">
                {/* Timeline connector dot and bar */}
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 ring-4 ring-indigo-50 mt-1"></div>
                  <div className="w-[2px] h-full bg-slate-200 my-1"></div>
                </div>

                <div className="flex-1 space-y-3 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <p className="text-base font-black text-slate-900 leading-tight">
                        {exp.title}
                      </p>
                      <p className="text-xs text-indigo-600 font-bold mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[11px]">
                        {exp.period}
                      </span>
                      <span>• {exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-1.5 pt-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Platforms / Tools */}
                  {exp.technologies && (
                    <div className="pt-2 flex flex-wrap gap-1">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Metrics / Sidebar block (4 cols) */}
          <div className="lg:col-span-4 bg-[#F1F5F9] p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                Instructional Impact
              </p>
              
              <div className="space-y-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Students Mentored</span>
                  <span className="text-xl font-black text-indigo-600">100+ Students</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Secondary & Higher Secondary STEM</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Curriculum Design</span>
                  <span className="text-xl font-black text-slate-800">Complete Modules</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Physics, Higher Math & Tech Guides</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Platform Delivery</span>
                  <span className="text-xl font-black text-emerald-600">Hybrid Format</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Online Zoom/Meets & In-person</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 border-t border-slate-200">
              $ status: <span className="font-bold text-slate-800">Available for Academic Instruction</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
