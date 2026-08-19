import React, { useState } from 'react';
import { Camera, CheckCircle2, Eye, ShieldCheck, Sparkles, User, ZoomIn, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfilePhotoViewerProps {
  onOpenCvModal: () => void;
}

export const ProfilePhotoViewer: React.FC<ProfilePhotoViewerProps> = ({ onOpenCvModal }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <>
      {/* Corner floating profile badge in High Density styling */}
      <div 
        id="corner-profile-widget" 
        className="fixed bottom-5 right-5 z-30 hidden md:flex items-center gap-3 p-2 bg-[#0F172A]/95 text-white border border-slate-700/90 rounded-2xl shadow-2xl backdrop-blur-md hover:border-indigo-500 transition-all duration-200 group"
      >
        <button
          type="button"
          onClick={() => setShowLightbox(true)}
          className="relative focus:outline-none"
          title="Click to view full profile photo"
        >
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-indigo-500/80 shadow-md bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
            {customPhotoUrl ? (
              <img 
                src={customPhotoUrl} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                <span className="font-black text-xs tracking-wider">TRE</span>
              </div>
            )}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0F172A] rounded-full"></span>
        </button>

        <div className="text-left pr-2">
          <div className="text-xs font-black text-white flex items-center gap-1.5">
            <span>{PERSONAL_INFO.shortName}</span>
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <p className="text-[10px] text-slate-400 font-mono leading-tight">$ bsc_undergraduate</p>
          <button
            type="button"
            onClick={onOpenCvModal}
            className="mt-0.5 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 underline decoration-indigo-400/40 flex items-center gap-0.5"
          >
            <span>CV.pdf Document</span>
          </button>
        </div>
      </div>

      {/* Lightbox / Modal for Photo */}
      {showLightbox && (
        <div 
          id="profile-photo-lightbox"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <div 
            className="bg-[#0F172A] border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-black text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-indigo-400 font-mono">B.Sc. Undergraduate • BAU</p>
              </div>
              <button 
                type="button"
                onClick={() => setShowLightbox(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-square flex items-center justify-center">
              {customPhotoUrl ? (
                <img 
                  src={customPhotoUrl} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900 flex flex-col items-center justify-center p-6 text-center text-slate-200">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-indigo-400 flex items-center justify-center text-white font-black text-3xl mb-3 shadow-xl">
                    TRE
                  </div>
                  <h4 className="font-black text-lg text-white">{PERSONAL_INFO.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Academic Professional & Agricultural Engineering Under Graduate (BAU)
                  </p>
                  <span className="mt-3 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-[11px] rounded-lg font-bold border border-indigo-500/30">
                    Irrigation & Water Management Specialization
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <label 
                htmlFor="photo-upload-input" 
                className="cursor-pointer text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 px-3 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Camera className="w-3.5 h-3.5 text-indigo-400" />
                <span>Upload / Change Photo</span>
                <input 
                  type="file" 
                  id="photo-upload-input" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload} 
                />
              </label>

              <button
                type="button"
                onClick={() => {
                  setShowLightbox(false);
                  onOpenCvModal();
                }}
                className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-lg transition-colors shadow-sm flex items-center gap-1.5"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Open CV Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
