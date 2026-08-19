import React, { useState } from 'react';
import { 
  FolderGit2, 
  Droplets, 
  MapPin, 
  Layers, 
  Sun, 
  Code2, 
  Tractor, 
  ExternalLink, 
  Github, 
  ArrowUpRight
} from 'lucide-react';
import { RESEARCH_INTERESTS, PROJECTS_DATA } from '../data/portfolioData';

export const ResearchProjectsSection: React.FC = () => {
  const [projectCategory, setProjectCategory] = useState<'All' | 'Academic & Engineering' | 'Technical & Programming'>('All');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (projectCategory === 'All') return true;
    return p.category === projectCategory;
  });

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-4 h-4 text-cyan-600" />;
      case 'MapPin': return <MapPin className="w-4 h-4 text-emerald-600" />;
      case 'Layers': return <Layers className="w-4 h-4 text-amber-600" />;
      case 'Sun': return <Sun className="w-4 h-4 text-orange-600" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-indigo-600" />;
      case 'Tractor': return <Tractor className="w-4 h-4 text-indigo-600" />;
      default: return <Droplets className="w-4 h-4 text-indigo-600" />;
    }
  };

  return (
    <section id="projects" className="py-14 bg-[#F1F5F9] border-b border-slate-200 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Part 1: Research Domains */}
        <div>
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
              <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
              Research & Academic Areas
            </h3>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Hydrology & Engineering Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESEARCH_INTERESTS.map((interest) => (
              <div
                key={interest.id}
                id={`research-item-${interest.id}`}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200">
                      {getInterestIcon(interest.icon)}
                    </div>
                    <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      Research Focus
                    </span>
                  </div>

                  <h3 className="font-black text-sm text-slate-900 leading-snug">
                    {interest.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                  {interest.applications.map((app) => (
                    <span
                      key={app}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Projects */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
                <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
                Portfolio Implementations
              </h3>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Engineering & Software Projects
              </h2>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 shadow-sm w-fit">
              {(['All', 'Academic & Engineering', 'Technical & Programming'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setProjectCategory(cat)}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    projectCategory === cat
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'All' : cat.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded uppercase">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title="GitHub Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 rounded bg-indigo-600 text-white hover:bg-indigo-500 shadow-xs"
                          title="Live Demo"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-black text-base text-slate-900 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Objective:</strong> {project.objective}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                    <span className="text-[10px] font-black uppercase text-slate-400 block">Methodology & Outcome</span>
                    <p className="text-slate-700 text-[11px]">{project.methodology}</p>
                    <p className="text-indigo-600 font-bold text-[11px] pt-0.5">
                      ✓ {project.keyOutcome}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
