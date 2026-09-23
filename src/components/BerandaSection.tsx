import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  ShoppingBag, 
  Layers, 
  Gamepad2, 
  FileText, 
  Award, 
  ChevronRight,
  Lightbulb,
  HeartHandshake
} from 'lucide-react';
import { TabType } from '../types';
import { sounds } from '../utils/audio';

interface BerandaSectionProps {
  onNavigate: (tab: TabType) => void;
  onOpenInfo: () => void;
}

export const BerandaSection: React.FC<BerandaSectionProps> = ({ onNavigate, onOpenInfo }) => {
  // Interactive poll for stimulus questions
  const [pollAnswers, setPollAnswers] = useState<{ [key: string]: string | null }>({
    q1: null,
    q2: null,
    q3: null
  });

  const handlePoll = (q: string, val: string) => {
    sounds.playCoin();
    setPollAnswers(prev => ({ ...prev, [q]: val }));
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/50">
        {/* Background ambient elements */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/3 -bottom-20 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 text-xs font-semibold mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Kurikulum Merdeka • IPS SMP Kelas VII Fase D</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Aktivitas Memenuhi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">Kebutuhan Manusia</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
            Media pembelajaran interaktif inovatif berbasis <strong>Problem Based Learning (PBL)</strong> berbantuan kerangka <strong>TPACK</strong>. Siswa diajak memecahkan masalah ekonomi riil, menyusun skala prioritas melalui simulasi dan games, serta menyusun laporan kolaboratif.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onNavigate('pbl-alur');
              }}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Layers className="w-4 h-4" />
              <span>Mulai Alur PBL (5 Sintak)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onNavigate('games');
              }}
              className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm flex items-center gap-2 transition"
            >
              <Gamepad2 className="w-4 h-4 text-emerald-300" />
              <span>Mainkan Game Edukasi</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenInfo();
              }}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/15 backdrop-blur-sm flex items-center gap-1.5 transition"
            >
              <span>Identitas Modul Ajar</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="mt-8 pt-6 border-t border-emerald-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-emerald-300/80 font-bold">Model</p>
              <p className="text-sm sm:text-base font-bold text-white">PBL + TPACK</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-emerald-300/80 font-bold">Klasifikasi</p>
              <p className="text-sm sm:text-base font-bold text-white">4 Dimensi Kebutuhan</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-emerald-300/80 font-bold">Faktor Pengaruh</p>
              <p className="text-sm sm:text-base font-bold text-white">8 Faktor Sosial</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-emerald-300/80 font-bold">Asesmen</p>
              <p className="text-sm sm:text-base font-bold text-white">LKPD + 10 PG & Esai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apersepsi & Pertanyaan Pemantik Interaktif (Sesuai Modul Hal 3-4) */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Apersepsi & Pertanyaan Pemantik (Kegiatan Awal)</h2>
            <p className="text-xs text-slate-500">
              Guru memberikan pertanyaan stimulus untuk mengaitkan pengalaman nyata siswa dengan konsep kebutuhan
            </p>
          </div>
        </div>

        {/* 3 Questions from the PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Question 1 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Pertanyaan 1
              </span>
              <h3 className="font-semibold text-slate-800 text-sm mt-2">
                "Apakah kalian sering membeli barang kebutuhan?"
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Contoh: jajan saat istirahat, beli buku tulis baru, pulpen, atau paket data internet.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <div className="flex gap-2">
                <button
                  onClick={() => handlePoll('q1', 'sering')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                    pollAnswers.q1 === 'sering'
                      ? 'bg-emerald-600 text-white font-semibold'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  👍 Ya, Sering
                </button>
                <button
                  onClick={() => handlePoll('q1', 'jarang')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                    pollAnswers.q1 === 'jarang'
                      ? 'bg-emerald-600 text-white font-semibold'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  ⚖️ Hanya saat butuh
                </button>
              </div>
              {pollAnswers.q1 && (
                <p className="text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded-lg mt-2 border border-emerald-200">
                  💡 <strong>Analisis:</strong> Manusia setiap hari melakukan aktivitas pemenuhan kebutuhan untuk menunjang aktivitas hidup!
                </p>
              )}
            </div>
          </div>

          {/* Question 2 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                Pertanyaan 2
              </span>
              <h3 className="font-semibold text-slate-800 text-sm mt-2">
                "Apakah kalian pernah pergi ke pasar?"
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Pasar tradisional (seperti Pasar Gudang Lelang Lampung di buku ajar) atau supermarket modern.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <div className="flex gap-2">
                <button
                  onClick={() => handlePoll('q2', 'pernah')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                    pollAnswers.q2 === 'pernah'
                      ? 'bg-teal-600 text-white font-semibold'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-teal-50'
                  }`}
                >
                  🏬 Pernah
                </button>
                <button
                  onClick={() => handlePoll('q2', 'belum')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                    pollAnswers.q2 === 'belum'
                      ? 'bg-teal-600 text-white font-semibold'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-teal-50'
                  }`}
                >
                  🛍️ Belanja Online
                </button>
              </div>
              {pollAnswers.q2 && (
                <p className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded-lg mt-2 border border-teal-200">
                  💡 <strong>Analisis:</strong> Pasar adalah tempat bertemunya penjual dan pembeli alat pemuas kebutuhan barang & jasa!
                </p>
              )}
            </div>
          </div>

          {/* Question 3 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-full">
                Pertanyaan 3
              </span>
              <h3 className="font-semibold text-slate-800 text-sm mt-2">
                "Pernahkah kalian membantu orang tua belanja ke pasar?"
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Melihat ibu menawar sayur, membandingkan harga beras, dan memprioritaskan belanjaan keluarga.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <div className="flex gap-2">
                <button
                  onClick={() => handlePoll('q3', 'selalu')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                    pollAnswers.q3 === 'selalu'
                      ? 'bg-cyan-700 text-white font-semibold'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-cyan-50'
                  }`}
                >
                  🤝 Pernah Bantu
                </button>
                <button
                  onClick={() => handlePoll('q3', 'hanya_melihat')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition ${
                    pollAnswers.q3 === 'hanya_melihat'
                      ? 'bg-cyan-700 text-white font-semibold'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-cyan-50'
                  }`}
                >
                  👀 Tahu Daftarnya
                </button>
              </div>
              {pollAnswers.q3 && (
                <p className="text-[11px] text-cyan-800 bg-cyan-50 p-2 rounded-lg mt-2 border border-cyan-200">
                  💡 <strong>Analisis:</strong> Orang tua kita menerapkan skala prioritas dan pengorbanan ekonomi agar semua anggota tercukupi!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Orientasi Masalah Inti (PBL Core Question) */}
      <section className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-emerald-500/10 rounded-2xl p-6 border border-amber-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Masalah Utama Pembelajaran (PBL Core)
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
              "Mengapa ragam kebutuhan manusia tidak terbatas, sedangkan alat pemuas kebutuhan jumlahnya terbatas?"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kondisi inilah yang melahirkan fenomena <strong>Kelangkaan (Scarcity)</strong>. Untuk mengatasinya, manusia wajib melakukan pengorbanan ekonomi dan menyusun <strong>Skala Prioritas</strong> yang bijak.
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onNavigate('materi');
            }}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow flex items-center gap-1.5 transition"
          >
            <span>Pelajari Konsep Lengkap</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Navigasi Modul Terpadu 4 Pilar */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => { sounds.playClick(); onNavigate('pbl-alur'); }}
          className="group cursor-pointer p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm group-hover:text-emerald-700 transition">
              Alur 5 Sintak PBL
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Panduan tahap demi tahap Problem Based Learning dari orientasi masalah hingga evaluasi.
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-4">
            Buka Alur PBL <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div 
          onClick={() => { sounds.playClick(); onNavigate('materi'); }}
          className="group cursor-pointer p-5 bg-white rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-md transition flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm group-hover:text-teal-700 transition">
              Materi & 4 Klasifikasi
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Eksplorasi Primer-Sekunder-Tersier, Waktu, Sifat, Subjek, dan 8 Faktor Pengaruh.
            </p>
          </div>
          <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 mt-4">
            Buka Materi <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div 
          onClick={() => { sounds.playClick(); onNavigate('games'); }}
          className="group cursor-pointer p-5 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm group-hover:text-amber-700 transition">
              3 Game Interaktif
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Tantangan Pilah Kilat, Simulasi Belanja Cerdas & Dana Darurat, serta Detektif Kasus.
            </p>
          </div>
          <span className="text-xs font-semibold text-amber-600 flex items-center gap-1 mt-4">
            Mainkan Game <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div 
          onClick={() => { sounds.playClick(); onNavigate('lkpd'); }}
          className="group cursor-pointer p-5 bg-white rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-md transition flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm group-hover:text-purple-700 transition">
              LKPD Digital & Evaluasi
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Lembar kerja kelompok kolaboratif 3 hari terakhir, ekspor cetak, dan post-test 10 soal.
            </p>
          </div>
          <span className="text-xs font-semibold text-purple-600 flex items-center gap-1 mt-4">
            Buka LKPD <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </section>

      {/* Profil Pelajar Pancasila & Kerangka TPACK Cards */}
      <section className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-amber-600" />
          <h3 className="text-base font-bold text-slate-800">
            Penanaman Karakter Profil Pelajar Pancasila
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
            <span className="text-2xl">🙏</span>
            <h5 className="font-bold text-slate-800 mt-1">Beriman & Bertaqwa</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">Doa awal/akhir & bersyukur</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
            <span className="text-2xl">🌏</span>
            <h5 className="font-bold text-slate-800 mt-1">Berkebhinekaan</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">Menghargai ragam kebutuhan</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
            <span className="text-2xl">🤝</span>
            <h5 className="font-bold text-slate-800 mt-1">Gotong Royong</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">Kerja tim diskusi kelompok</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
            <span className="text-2xl">🧗</span>
            <h5 className="font-bold text-slate-800 mt-1">Mandiri</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">Mengerjakan post-test sendiri</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-center col-span-2 sm:col-span-1">
            <span className="text-2xl">💡</span>
            <h5 className="font-bold text-slate-800 mt-1">Bernalar Kritis</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">Analisis skala prioritas</p>
          </div>
        </div>
      </section>
    </div>
  );
};
