/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { ModuleInfoModal } from './components/ModuleInfoModal';
import { GlosariumModal } from './components/GlosariumModal';
import { BerandaSection } from './components/BerandaSection';
import { PBLJourney } from './components/PBLJourney';
import { MateriSection } from './components/MateriSection';
import { GameHub } from './components/GameHub';
import { LKPDDigital } from './components/LKPDDigital';
import { EvaluasiSection } from './components/EvaluasiSection';
import { RefleksiSection } from './components/RefleksiSection';
import { sounds } from './utils/audio';
import { MODUL_INFO } from './data/curriculumData';
import { Heart, Sparkles, School, GraduationCap } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('beranda');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const [isGlosariumOpen, setIsGlosariumOpen] = useState<boolean>(false);
  const [role, setRole] = useState<'siswa' | 'guru'>('siswa');

  const handleToggleSound = () => {
    const next = !soundEnabled;
    sounds.enabled = next;
    setSoundEnabled(next);
    if (next) sounds.playClick();
  };

  const handleToggleRole = () => {
    sounds.playClick();
    setRole(r => (r === 'siswa' ? 'guru' : 'siswa'));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-emerald-200 selection:text-emerald-900 font-sans antialiased">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenInfo={() => setIsInfoOpen(true)}
        onOpenGlosarium={() => setIsGlosariumOpen(true)}
        role={role}
        onToggleRole={handleToggleRole}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:px-6">
        {currentTab === 'beranda' && (
          <BerandaSection
            onNavigate={setCurrentTab}
            onOpenInfo={() => setIsInfoOpen(true)}
          />
        )}

        {currentTab === 'pbl-alur' && (
          <PBLJourney onNavigate={setCurrentTab} />
        )}

        {currentTab === 'materi' && (
          <MateriSection />
        )}

        {currentTab === 'games' && (
          <GameHub />
        )}

        {currentTab === 'lkpd' && (
          <LKPDDigital />
        )}

        {currentTab === 'evaluasi' && (
          <EvaluasiSection />
        )}

        {currentTab === 'refleksi' && (
          <RefleksiSection initialRole={role} />
        )}
      </main>

      {/* Modals */}
      <ModuleInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />

      <GlosariumModal
        isOpen={isGlosariumOpen}
        onClose={() => setIsGlosariumOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-6 print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              IPS
            </span>
            <div>
              <p className="font-bold text-slate-800">
                Media Pembelajaran Interaktif IPS SMP • Kurikulum Merdeka
              </p>
              <p className="text-[11px] text-slate-400">
                Pengampu: {MODUL_INFO.penyusun} • {MODUL_INFO.satuanPendidikan} ({MODUL_INFO.tahunAjaran})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <button
              onClick={() => setIsInfoOpen(true)}
              className="hover:text-emerald-700 transition"
            >
              Tentang Modul
            </button>
            <button
              onClick={() => setIsGlosariumOpen(true)}
              className="hover:text-emerald-700 transition"
            >
              Glosarium
            </button>
            <button
              onClick={() => setCurrentTab('pbl-alur')}
              className="hover:text-emerald-700 transition"
            >
              Sintak PBL
            </button>
            <span className="flex items-center gap-1 text-slate-400">
              TPACK Integrated <Sparkles className="w-3 h-3 text-amber-500" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
