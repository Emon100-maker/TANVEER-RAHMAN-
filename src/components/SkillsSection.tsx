import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Terminal, 
  BookOpen, 
  Users, 
  Cpu
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Technical', 'Academic & Professional', 'Soft Skills'];

  const allSkills = SKILLS_DATA.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.category }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (skill.tags && skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-14 bg-[#F1F5F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xs font-bold uppercase text-slate-400 mb-1 flex items-center">
              <span className="w-8 h-[1px] bg-slate-300 mr-2"></span>
              Competencies & Tools
            </h3>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Tech Stack & Core Skills
            </h2>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  id={`skill-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-48 sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 text-slate-900 placeholder-slate-400 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* High Density Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isTech = skill.category === 'Technical';
            const isAcademic = skill.category === 'Academic & Professional';
            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between space-y-2.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-black uppercase text-slate-400">
                      {skill.category.split('&')[0]}
                    </span>
                    {skill.level && (
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded">
                        {skill.level}
                      </span>
                    )}
                  </div>

                  <h4 className="font-black text-sm text-slate-900">
                    {skill.name}
                  </h4>

                  {skill.description && (
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  )}
                </div>

                {skill.tags && (
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
