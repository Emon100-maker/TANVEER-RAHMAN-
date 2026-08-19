import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, REFERENCES_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdownResume = `# TANVEER RAHMAN EMON
Academic Professional | Educator | Agricultural Engineering Under Graduate | Technical & Research Enthusiast
Bangladesh | Professional Portfolio | CV
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Links: GitHub | LinkedIn | Portfolio

## PROFESSIONAL PROFILE
Academic and technical professional with an academic background in Agricultural Engineering & Technology, with specialization in Irrigation & Water Management. Interested in education, agricultural engineering, technical problem solving, research, data analysis, GIS, hydrology and computational applications..

## EDUCATIONAL QUALIFICATION
- B.Sc. in Agricultural Engineering & Technology | Bangladesh Agricultural University | Irrigation & Water Management | CGPA: N/A, Year: N/A
- Higher Secondary Certificate (HSC) | Cantonment Public School & College, Momenshahi | Science | GPA: 5.00, 2019
- Secondary School Certificate (SSC) | Premier Ideal High School, Mymensingh | Science | GPA: 5.00, 2017

## PROFESSIONAL EXPERIENCE
Teaching in Online,Offline Platform

## CORE SKILLS
- Technical: HTML5, CSS3, JavaScript, Python, Git & GitHub, Data Analysis, GIS, MS Office, MS Excel, MS Powerpoint, MS Acess, R, AutoCAD, Adobe Photoshop, Adobe Illustrator
- Academic / Professional: Teaching, Academic Content Development, Research, Problem Solving, Technical Documentation, Presentation, Project Management
- Soft Skills: Communication, Leadership, Teamwork, Time Management, Critical Thinking, Adaptability

## RESEARCH INTERESTS & ACADEMIC AREAS
- Agricultural Engineering
- Agricultural Mechanization
- GIS & Remote Sensing
- Hydrology & Water Resources
- Soil & Water Conservation
- Renewable Energy
- Engineering Analysis
- Data Analysis
- Programming & Computational Applications

## PROJECTS
- Academic / Engineering Projects: Add project title, objective, methodology, tools/software used, role and key outcome.
- Technical / Programming Projects: Add project title, technologies used, GitHub repository and live demonstration link, if available.

## CERTIFICATIONS & TRAINING
- Agricultural Extension Training Program

## ACHIEVEMENTS, ACTIVITIES & PUBLICATIONS
- Academic Excellence Achievement
- Best Presentation Award

## CAREER OBJECTIVE
To build a meaningful professional career where academic knowledge, engineering skills, teaching ability, research interests and technical competencies can be applied to practical challenges while contributing to organizational and societal development.

## REFERENCES
1. Khalid Mahmud
   Professor, Department of Irrigation & Water Management
   Bangladesh Agricultural University

2. Deen Islam
   Professor, Department of Irrigation & Water Management
   Bangladesh Agricultural University
`;

    navigator.clipboard.writeText(markdownResume);
    setCopied(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="cv-document-modal" 
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto no-print"
      onClick={onClose}
    >
      <div 
        className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="bg-[#0F172A] text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg border border-indigo-500/40">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-black text-sm sm:text-base text-white">
                Tanveer Rahman Emon — Curriculum Vitae (CV.pdf)
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Academic & Engineering CV Document • 2 Pages
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2">
            {/* Page toggle */}
            <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 p-1 text-xs">
              <button
                type="button"
                id="btn-cv-page-1"
                onClick={() => setCurrentPage(1)}
                className={`px-2.5 py-1 rounded font-bold transition-colors ${
                  currentPage === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Page 1
              </button>
              <button
                type="button"
                id="btn-cv-page-2"
                onClick={() => setCurrentPage(2)}
                className={`px-2.5 py-1 rounded font-bold transition-colors ${
                  currentPage === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Page 2
              </button>
            </div>

            {/* Print button */}
            <button
              type="button"
              id="btn-modal-print-cv"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Copy markdown */}
            <button
              type="button"
              id="btn-modal-copy-cv"
              onClick={handleCopyMarkdown}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Copy Text Resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            {/* Close button */}
            <button
              type="button"
              id="btn-close-cv-modal"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Container (Exact replica of user's PDF) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/60 flex justify-center">
          <div 
            id="printable-cv-sheet"
            className="w-full max-w-[780px] bg-white text-slate-900 shadow-2xl p-8 sm:p-10 rounded-sm font-sans border border-slate-200 cv-sheet-print text-left flex flex-col justify-between"
            style={{ minHeight: '1080px' }}
          >
            <div>
              {/* Header branding on paper */}
              <div className="text-right text-[10px] text-slate-400 tracking-wider uppercase border-b border-slate-100 pb-1 mb-4">
                Tanveer Rahman Emon • Academic & Professional Portfolio • © 2026
              </div>

              {/* PAGE 1 CONTENT */}
              {currentPage === 1 ? (
                <div className="space-y-6 animate-in fade-in duration-150">
                  {/* Header section with photo placeholder & contacts */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 font-heading">
                        TANVEER RAHMAN EMON
                      </h1>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug max-w-lg">
                        Academic Professional | Educator | Agricultural Engineering Under Graduate | Technical & Research Enthusiast
                      </p>
                      <p className="text-[11px] text-slate-600 pt-0.5">
                        Bangladesh | Professional Portfolio | CV
                      </p>
                    </div>

                    {/* Corner Photo on CV */}
                    <div className="w-24 h-28 rounded-lg overflow-hidden border border-slate-300 bg-slate-100 shadow-sm shrink-0 flex flex-col items-center justify-center p-1 text-center relative group">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-900 to-slate-900 text-white font-black text-sm flex items-center justify-center mb-1 shadow-xs border border-indigo-700">
                        TRE
                      </div>
                      <span className="text-[9px] font-black text-slate-800 leading-tight">Tanveer R. Emon</span>
                      <span className="text-[8px] text-slate-500 leading-tight font-semibold">Agri. Eng. BAU</span>
                    </div>
                  </div>

                  {/* Info Bar Box (Light Cyan / Blue strip matching the PDF) */}
                  <div className="grid grid-cols-3 bg-[#EBF5FF] border border-[#BFDBFE] rounded-lg p-2.5 text-center text-xs">
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-wider text-[#1E40AF]">EMAIL</div>
                      <div className="text-[11px] text-slate-800 font-semibold truncate">tanveeremon2234@gmail.com</div>
                    </div>
                    <div className="border-x border-[#BFDBFE] px-1">
                      <div className="text-[9px] font-black uppercase tracking-wider text-[#1E40AF]">PHONE</div>
                      <div className="text-[11px] text-slate-800 font-semibold">+88001912170767</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-wider text-[#1E40AF]">LINKS</div>
                      <div className="text-[11px] text-[#1E40AF] font-bold truncate">GitHub | LinkedIn | Portfolio</div>
                    </div>
                  </div>

                  {/* Professional Profile Section */}
                  <div className="space-y-1">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      PROFESSIONAL PROFILE
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                      Academic and technical professional with an academic background in Agricultural Engineering & Technology, with specialization in Irrigation & Water Management. Interested in education, agricultural engineering, technical problem solving, research, data analysis, GIS, hydrology and computational applications..
                    </p>
                  </div>

                  {/* Educational Qualification Table */}
                  <div className="space-y-1">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      EDUCATIONAL QUALIFICATION
                    </div>
                    <div className="border border-slate-300 rounded overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#0F172A] text-white text-[10px] uppercase font-black">
                          <tr>
                            <th className="p-2 border-r border-slate-700">Qualification</th>
                            <th className="p-2 border-r border-slate-700">Institution</th>
                            <th className="p-2 border-r border-slate-700">Discipline / Group</th>
                            <th className="p-2">Result / Year</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-[11px]">
                          <tr>
                            <td className="p-2 font-bold text-slate-900 border-r border-slate-200">
                              B.Sc. in Agricultural Engineering & Technology
                              <span className="block text-[10px] text-indigo-700 font-semibold">(B.Sc. Undergraduate)</span>
                            </td>
                            <td className="p-2 text-slate-700 border-r border-slate-200">Bangladesh Agricultural University</td>
                            <td className="p-2 text-slate-700 border-r border-slate-200">Irrigation & Water Management</td>
                            <td className="p-2 font-semibold text-slate-900">CGPA: N/A<br />Year: N/A</td>
                          </tr>
                          <tr className="bg-slate-50/50">
                            <td className="p-2 font-bold text-slate-900 border-r border-slate-200">Higher Secondary Certificate (HSC)</td>
                            <td className="p-2 text-slate-700 border-r border-slate-200">Cantonment Public School & College, Momenshahi</td>
                            <td className="p-2 text-slate-700 border-r border-slate-200">Science</td>
                            <td className="p-2 font-bold text-indigo-700">GPA: 5.00<br />2019</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-bold text-slate-900 border-r border-slate-200">Secondary School Certificate (SSC)</td>
                            <td className="p-2 text-slate-700 border-r border-slate-200">Premier Ideal High School, Mymensingh</td>
                            <td className="p-2 text-slate-700 border-r border-slate-200">Science</td>
                            <td className="p-2 font-bold text-emerald-700">GPA: 5.00<br />2017</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Professional Experience Section */}
                  <div className="space-y-1">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      PROFESSIONAL EXPERIENCE
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">
                        Teaching in Online,Offline Platform
                      </div>
                    </div>
                  </div>

                  {/* Core Skills Section */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      CORE SKILLS
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-xs pt-1">
                      {/* Technical Column */}
                      <div>
                        <div className="font-bold text-[#1E3A8A] text-[11px] mb-1">
                          Technical
                        </div>
                        <ul className="space-y-0.5 text-[11px] text-slate-700 font-medium">
                          <li>• HTML5</li>
                          <li>• CSS3</li>
                          <li>• JavaScript</li>
                          <li>• Python</li>
                          <li>• Git & GitHub</li>
                          <li>• Data Analysis</li>
                          <li>• GIS</li>
                          <li>• MS Office</li>
                          <li>• MS Excel</li>
                          <li>• MS Powerpoint</li>
                          <li>• MS Acess</li>
                          <li>• R • AutoCAD</li>
                          <li>• Adobe Photoshop</li>
                          <li>• Adobe Illustrator</li>
                        </ul>
                      </div>

                      {/* Academic / Professional Column */}
                      <div>
                        <div className="font-bold text-[#1E3A8A] text-[11px] mb-1">
                          Academic / Professional
                        </div>
                        <ul className="space-y-0.5 text-[11px] text-slate-700 font-medium">
                          <li>• Teaching</li>
                          <li>• Academic Content Development</li>
                          <li>• Research</li>
                          <li>• Problem Solving</li>
                          <li>• Technical Documentation</li>
                          <li>• Presentation</li>
                          <li>• Project Management</li>
                        </ul>
                      </div>

                      {/* Soft Skills Column */}
                      <div>
                        <div className="font-bold text-[#1E3A8A] text-[11px] mb-1">
                          Soft Skills
                        </div>
                        <ul className="space-y-0.5 text-[11px] text-slate-700 font-medium">
                          <li>• Communication</li>
                          <li>• Leadership</li>
                          <li>• Teamwork</li>
                          <li>• Time Management</li>
                          <li>• Critical Thinking</li>
                          <li>• Adaptability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* PAGE 2 CONTENT */
                <div className="space-y-6 animate-in fade-in duration-150">
                  
                  {/* Research Interests Section */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      RESEARCH INTERESTS & ACADEMIC AREAS
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-700 font-medium">
                      <div>• Agricultural Engineering</div>
                      <div>• Renewable Energy</div>
                      <div>• Agricultural Mechanization</div>
                      <div>• Engineering Analysis</div>
                      <div>• GIS & Remote Sensing</div>
                      <div>• Data Analysis</div>
                      <div>• Hydrology & Water Resources</div>
                      <div>• Programming & Computational Applications</div>
                      <div>• Soil & Water Conservation</div>
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="space-y-2">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      PROJECTS
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-900">
                        Academic / Engineering Projects
                      </div>
                      <p className="text-[11px] text-slate-600 italic pl-1">
                        Add project title, objective, methodology, tools/software used, role and key outcome.
                      </p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className="text-xs font-bold text-slate-900">
                        Technical / Programming Projects
                      </div>
                      <p className="text-[11px] text-slate-600 italic pl-1">
                        Add project title, technologies used, GitHub repository and live demonstration link, if available.
                      </p>
                    </div>
                  </div>

                  {/* Certifications & Training */}
                  <div className="space-y-1">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      CERTIFICATIONS & TRAINING
                    </div>
                    <ul className="text-xs text-slate-800 font-semibold space-y-0.5">
                      <li>• Agricultural Extension Training Program</li>
                    </ul>
                  </div>

                  {/* Achievements, Activities & Publications */}
                  <div className="space-y-1">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      ACHIEVEMENTS, ACTIVITIES & PUBLICATIONS
                    </div>
                    <ul className="text-xs text-slate-800 space-y-0.5 font-medium">
                      <li>• Academic Excellence Achievement</li>
                      <li>• Best Presentation Award</li>
                    </ul>
                  </div>

                  {/* Career Objective */}
                  <div className="space-y-1">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      CAREER OBJECTIVE
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                      To build a meaningful professional career where academic knowledge, engineering skills, teaching ability, research interests and technical competencies can be applied to practical challenges while contributing to organizational and societal development.
                    </p>
                  </div>

                  {/* References (NEW) */}
                  <div className="space-y-2">
                    <div className="text-xs font-black text-[#1E3A8A] border-b border-[#1E3A8A] pb-0.5 tracking-wider uppercase">
                      REFERENCES
                    </div>
                    
                    <div className="space-y-3 pt-1 text-xs">
                      {REFERENCES_DATA.map((ref) => (
                        <div key={ref.id} className="space-y-0.5 text-slate-700">
                          <p className="font-bold text-slate-900 text-xs">{ref.name}</p>
                          <p className="text-[11px] text-slate-600">{ref.designation}</p>
                          <p className="text-[11px] text-slate-600">{ref.department}</p>
                          <p className="text-[11px] text-slate-600">{ref.institution}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Document Bottom Page indicator */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
              <span>{PERSONAL_INFO.name} • Curriculum Vitae</span>
              <span>Page {currentPage} of 2</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-[#0F172A] px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Formatted for standard A4 printing and PDF export</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="btn-cv-page-toggle"
              onClick={() => setCurrentPage(currentPage === 1 ? 2 : 1)}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-750 text-white font-bold rounded text-xs transition-colors flex items-center gap-1"
            >
              {currentPage === 1 ? (
                <>
                  <span>Next Page (Page 2)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous Page (Page 1)</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="btn-cv-download-final"
              onClick={handlePrint}
              className="px-4 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded text-xs transition-colors shadow"
            >
              Download PDF / Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
