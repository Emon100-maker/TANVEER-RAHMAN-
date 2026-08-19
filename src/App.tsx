import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResearchProjectsSection } from './components/ResearchProjectsSection';
import { CertificationsAwardsSection } from './components/CertificationsAwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { GitHubPromoModal } from './components/GitHubPromoModal';
import { ProfilePhotoViewer } from './components/ProfilePhotoViewer';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Header Navigation */}
      <Header
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenPromoModal={() => setIsPromoModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main High Density Content Area */}
      <main className="flex-1">
        <HeroSection
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenPromoModal={() => setIsPromoModalOpen(true)}
        />
        
        <AboutSection
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
        
        <EducationSection />
        
        <SkillsSection />
        
        <ExperienceSection />
        
        <ResearchProjectsSection />
        
        <CertificationsAwardsSection />
        
        <ContactSection
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenPromoModal={() => setIsPromoModalOpen(true)}
      />

      {/* Corner Profile Photo & Fast Action Widget */}
      <ProfilePhotoViewer
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Interactive CV Modal (2-Page PDF document exact replica & printable) */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* GitHub Website Promo Caption & Markdown Generator Modal */}
      <GitHubPromoModal
        isOpen={isPromoModalOpen}
        onClose={() => setIsPromoModalOpen(false)}
      />
    </div>
  );
}
