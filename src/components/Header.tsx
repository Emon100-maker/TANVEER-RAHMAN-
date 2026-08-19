import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileDown, 
  Sparkles, 
  GraduationCap, 
  User, 
  Code, 
  Briefcase, 
  FolderGit2, 
  Mail,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenCvModal: () => void;
  onOpenPromoModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCvModal,
  onOpenPromoModal,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Awards', href: '#awards', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0F172A]/95 text-white backdrop-blur-md shadow-xl border-b border-slate-800 py-2.5'
          : 'bg-[#0F172A] text-white border-b border-slate-800 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with avatar and title */}
        <a
          href="#home"
          id="header-brand-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 border border-slate-700 flex items-center justify-center text-white font-black text-xs shadow-md">
              <span>TRE</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0F172A] rounded-full"></div>
          </div>
          <div>
            <div className="font-heading font-black text-sm sm:text-base tracking-tight text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 hidden sm:block truncate max-w-[280px]">
              $ agri_engineer --educator
            </p>
          </div>
        </a>

        {/* High Density Desktop Navigation links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                id={`nav-link-${item.href.replace('#', '')}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-800 text-indigo-400 border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {/* GitHub Promo button */}
          <button
            type="button"
            id="btn-open-promo-caption-header"
            onClick={onOpenPromoModal}
            className="px-3 py-1.5 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            title="GitHub Promo Caption & README Generator"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">GitHub Promo</span>
            <span className="md:hidden">Promo</span>
          </button>

          {/* High Density Primary Action Button */}
          <button
            type="button"
            id="btn-open-cv-modal-header"
            onClick={onOpenCvModal}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-md hover:shadow-indigo-600/30 flex items-center gap-1.5 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV.pdf</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            id="btn-mobile-cv-quick"
            onClick={onOpenCvModal}
            className="px-2.5 py-1.5 text-white bg-indigo-600 rounded-lg text-xs font-bold sm:hidden flex items-center gap-1 shadow-sm"
            title="CV"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          <button
            type="button"
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  id={`mobile-nav-${item.href.replace('#', '')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              id="mobile-promo-caption-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPromoModal();
              }}
              className="w-full py-2 px-3 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>GitHub Promo Captions & README</span>
            </button>

            <button
              type="button"
              id="mobile-cv-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full py-2 px-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg flex items-center justify-center gap-2 shadow-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>View & Download CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
