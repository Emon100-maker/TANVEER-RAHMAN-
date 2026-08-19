import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Trophy, 
  GraduationCap
} from 'lucide-react';
import { CERTIFICATIONS_DATA, AWARDS_DATA } from '../data/portfolioData';

export const CertificationsAwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certifications & Field Training (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
                <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
                Official Credentials
              </h3>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                Certifications & Field Training
              </h2>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#F1F5F9] p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded uppercase">
                        Certified Training
                      </span>
                      <span className="text-xs font-bold font-mono text-slate-400">
                        {cert.period}
                      </span>
                    </div>

                    <h4 className="font-black text-sm text-slate-900 leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-indigo-600 font-semibold mt-0.5">
                      {cert.issuer}
                    </p>

                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-1">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-white text-slate-700 text-[10px] font-bold rounded border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Honors, Awards & Academic Distinctions (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
                <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
                Recognitions & Merits
              </h3>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                Honors & Achievements
              </h2>
            </div>

            <div className="space-y-3">
              {AWARDS_DATA.map((award) => (
                <div
                  key={award.id}
                  className="bg-[#F1F5F9] p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-black rounded uppercase border border-amber-200">
                        Honor / Award
                      </span>
                      <span className="text-xs font-bold font-mono text-slate-400">
                        {award.year}
                      </span>
                    </div>

                    <h4 className="font-black text-sm text-slate-900 leading-snug flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{award.title}</span>
                    </h4>

                    <p className="text-xs text-slate-700 font-semibold mt-0.5">
                      {award.organization}
                    </p>

                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Verified in Academic Curriculum Vitae</span>
                    <span className="font-bold text-indigo-600">Distinction</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
