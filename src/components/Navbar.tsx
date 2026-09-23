import React, { useState } from 'react';
import { 
  BookOpen, 
  Gamepad2, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  GraduationCap, 
  Layers, 
  Home, 
  Sparkles,
  Info,
  BookMarked
} from 'lucide-react';
import { TabType } from '../types';
import { sounds } from '../utils/audio';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenInfo: () => void;
  onOpenGlosarium: () => void;
  role: 'siswa' | 'guru';
  onToggleRole: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  soundEnabled,
  onToggleSound,
  onOpenInfo,
  onOpenGlosarium,
  role,
  onToggleRole
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'beranda' as TabType, label: 'Beranda', icon: Home },
    { id: 'pbl-alur' as TabType, label: 'Sintak PBL', icon: Layers, badge: '5 Sintak' },
    { id: 'materi' as TabType, label: 'Materi & Konsep', icon: BookOpen },
    { id: 'games' as TabType, label: 'Game Edukasi', icon: Gamepad2, badge: '3 Games' },
    { id: 'lkpd' as TabType, label: 'LKPD Digital', icon: FileText, badge: 'Kelompok' },
    { id: 'evaluasi' as TabType, label: 'Evaluasi', icon: CheckCircle2, badge: '10 PG + Esai' },
    { id: 'refleksi' as TabType, label: 'Refleksi', icon: HelpCircle }
  ];

  const handleTabClick = (tab: TabType) => {
    sounds.playClick();
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm transition-all">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/30 px-2 py-0.5 rounded font-semibold tracking-wide uppercase border border-emerald-400/40 text-[11px]">
              Fase D • Kelas VII Ganjil
            </span>
            <span className="hidden sm:inline text-emerald-100">
              SMP Swasta Persiapan • TP. 2026/2027
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-amber-400/20 text-amber-200 border border-amber-300/30 px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" /> PBL berbantuan TPACK
            </span>
            <button
              onClick={onToggleRole}
              className="text-xs bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded transition flex items-center gap-1 border border-white/20"
              title="Ganti Mode Pandangan"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Mode: <strong className="capitalize">{role}</strong></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabClick('beranda')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 ring-2 ring-emerald-100">
            <span className="text-xl">🛍️</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-bold text-slate-800 text-base leading-snug">
                Aktivitas Memenuhi Kebutuhan
              </h1>
              <span className="text-[10px] uppercase font-bold bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
                IPS VII
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Media Interaktif Problem Based Learning & TPACK
            </p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                  isActive
                    ? 'bg-white text-emerald-800 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-600' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] px-1 py-0.2 rounded font-normal ${
                    isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Action Tools */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenGlosarium();
            }}
            className="flex items-center gap-1 text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition border border-slate-200"
            title="Buka Glosarium Istilah"
          >
            <BookMarked className="w-3.5 h-3.5 text-teal-600" />
            <span className="hidden md:inline">Glosarium</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenInfo();
            }}
            className="flex items-center gap-1 text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition border border-slate-200"
            title="Informasi Modul Ajar"
          >
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden md:inline">Modul</span>
          </button>

          <button
            onClick={onToggleSound}
            className="p-1.5 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition border border-slate-200"
            title={soundEnabled ? 'Matikan Suara Audio' : 'Nyalakan Suara Audio'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            aria-label="Buka Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-left text-xs font-medium transition ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                  <div>
                    <div>{tab.label}</div>
                    {tab.badge && (
                      <span className={`text-[9px] ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                        {tab.badge}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
