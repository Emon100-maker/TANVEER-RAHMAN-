import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Building2, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  LayoutGrid,
  Table as TableIcon
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <section id="education" className="py-14 bg-[#F1F5F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with High Density Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
              <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
              Academic Credentials
            </h3>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Educational Qualifications
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-semibold">
              B.Sc. Undergraduate, Higher Secondary Certificate (HSC) & Secondary School Certificate (SSC)
            </p>
          </div>

          {/* Toggle View */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 shadow-sm w-fit">
            <button
              type="button"
              id="btn-education-view-cards"
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                viewMode === 'cards'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Cards
            </button>
            <button
              type="button"
              id="btn-education-view-table"
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                viewMode === 'table'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Table
            </button>
          </div>
        </div>

        {/* Cards Mode */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EDUCATION_DATA.map((edu) => {
              const isBsc = edu.id.includes('bsc');
              const isHsc = edu.id.includes('hsc');
              const isSsc = edu.id.includes('ssc');

              const badgeClass = isBsc
                ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                : isHsc
                ? 'bg-blue-50 text-blue-700 border-blue-100'
                : 'bg-emerald-50 text-emerald-700 border-emerald-100';

              const numberColor = isBsc
                ? 'text-indigo-600'
                : isHsc
                ? 'text-blue-600'
                : 'text-emerald-600';

              return (
                <div
                  key={edu.id}
                  id={`edu-card-${edu.id}`}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all space-y-4"
                >
                  <div>
                    {/* Top Tag & Year */}
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2.5 py-1 text-[10px] font-black rounded uppercase tracking-wider border ${badgeClass}`}>
                        {isBsc ? 'B.Sc. Undergraduate' : edu.degreeShort}
                      </span>
                      <span className="text-xs font-bold text-slate-400 font-mono">
                        {edu.year}
                      </span>
                    </div>

                    {/* Institution & Discipline */}
                    <p className="font-black text-slate-900 leading-snug text-base">
                      {edu.institution}
                    </p>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {edu.qualification} • <span className="text-slate-700 font-bold">{edu.discipline}</span>
                    </p>

                    {/* Big GPA / Status Metric Block */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline space-x-1.5">
                      <span className={`text-2xl sm:text-3xl font-black ${numberColor}`}>
                        {isBsc ? 'Undergraduate' : '5.00'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        {isBsc ? 'B.Sc. in Agri. Eng. (BAU)' : 'GPA / Perfect 5.00'}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    {edu.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Table Mode */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0F172A] text-white uppercase text-[10px] font-black tracking-wider">
                  <tr>
                    <th className="px-6 py-3.5">Degree / Qualification</th>
                    <th className="px-6 py-3.5">Institution</th>
                    <th className="px-6 py-3.5">Discipline / Group</th>
                    <th className="px-6 py-3.5">Result</th>
                    <th className="px-6 py-3.5">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {EDUCATION_DATA.map((edu) => {
                    const isBsc = edu.id.includes('bsc');
                    return (
                      <tr key={edu.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3.5 font-bold text-slate-900">
                          <div className="flex items-center gap-2">
                            <span>{edu.qualification}</span>
                            {isBsc && (
                              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase">
                                B.Sc. Undergraduate
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-3.5 text-slate-800">
                          {edu.institution}
                        </td>
                        <td className="px-6 py-3.5">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
                            {edu.discipline}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 font-bold text-indigo-600">
                          {edu.result}
                        </td>
                        <td className="px-6 py-3.5 font-mono text-slate-500">
                          {edu.year}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
