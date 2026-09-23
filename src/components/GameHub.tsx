import React, { useState } from 'react';
import { Gamepad2, Zap, ShoppingCart, Search, Award, ChevronRight } from 'lucide-react';
import { GameType } from '../types';
import { GameSpeedSort } from './GameSpeedSort';
import { GameBudgetSimulator } from './GameBudgetSimulator';
import { GameDetective } from './GameDetective';
import { sounds } from '../utils/audio';

export const GameHub: React.FC = () => {
  const [activeGame, setActiveGame] = useState<GameType>(null);

  const handleLaunch = (game: GameType) => {
    sounds.playClick();
    setActiveGame(game);
  };

  if (activeGame === 'sort') {
    return <GameSpeedSort onBack={() => setActiveGame(null)} />;
  }

  if (activeGame === 'budget') {
    return <GameBudgetSimulator onBack={() => setActiveGame(null)} />;
  }

  if (activeGame === 'detective') {
    return <GameDetective onBack={() => setActiveGame(null)} />;
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
          <Gamepad2 className="w-3.5 h-3.5" /> Gamifikasi Pembelajaran Interaktif (TK Integration)
        </div>
        <h2 className="text-2xl font-black text-slate-800">
          Arena Game & Simulasi Edukasi IPS
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Belajar IPS menjadi menyenangkan dan bermakna melalui 3 mini-game berbasis Problem Based Learning
        </p>
      </div>

      {/* 3 Games Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Game 1: Speed Sort */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Kecepatan & Analisis
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-2">
                Kategori Kilat Kebutuhan
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Pilah barang ke dalam kategori Primer, Sekunder, Tersier, Jasmani, Rohani, atau Subjek sebelum waktu 45 detik habis!
              </p>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                <span>✓ 3 Mode Klasifikasi Berbeda</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                <span>✓ Combo Multiplier & Nyawa</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleLaunch('sort')}
            className="mt-6 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition"
          >
            <span>Mainkan Sekarang</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Game 2: Budget Simulator */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              💰
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                PBL Skala Prioritas
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-2">
                Simulasi Belanja Cerdas
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Kelola modal uang Rp 1.000.000 untuk 3 hari belanja keluarga. Antisipasi kejadian musibah darurat tak terduga!
              </p>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1 text-amber-700 font-semibold">
                <span>✓ Tantangan Sesuai Penugasan LKPD 3 Hari</span>
              </div>
              <div className="flex items-center gap-1 text-amber-700 font-semibold">
                <span>✓ Uji Ketahanan Dana Darurat</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleLaunch('budget')}
            className="mt-6 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition"
          >
            <span>Mulai Simulasi Anggaran</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Game 3: Detective */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              🕵️
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                Studi Kasus Kontekstual
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-2">
                Detektif Faktor Kebutuhan
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Pecahkan misteri mengapa kebutuhan orang di pantai berbeda dengan di gunung, siswa SD vs mahasiswa, dan adat budaya daerah.
              </p>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1 text-cyan-700 font-semibold">
                <span>✓ Berdasarkan 8 Faktor di Modul Ajar</span>
              </div>
              <div className="flex items-center gap-1 text-cyan-700 font-semibold">
                <span>✓ Penjelasan Ilmiah & Pembahasan Lengkap</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleLaunch('detective')}
            className="mt-6 w-full py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition"
          >
            <span>Mulai Kasus Detektif</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
