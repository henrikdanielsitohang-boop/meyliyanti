import React, { useState } from 'react';
import { 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  Users, 
  Sparkles, 
  Play, 
  Award, 
  FileText, 
  Share2, 
  Check, 
  MessageSquare,
  HelpCircle,
  Video,
  Timer
} from 'lucide-react';
import { SINTAKS_PBL } from '../data/curriculumData';
import { sounds } from '../utils/audio';
import { TabType } from '../types';

interface PBLJourneyProps {
  onNavigate: (tab: TabType) => void;
}

export const PBLJourney: React.FC<PBLJourneyProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 mins presentation timer
  const [timerRunning, setTimerRunning] = useState(false);

  // Group quick names demo
  const sampleGroups = [
    { nama: 'Kelompok 1 (Kebutuhan Primer)', ketua: 'Ahmad Faiz', anggota: 4, status: 'Aktif Meneliti' },
    { nama: 'Kelompok 2 (Skala Prioritas)', ketua: 'Nabila Putri', anggota: 4, status: 'Diskusi LKPD' },
    { nama: 'Kelompok 3 (Pemberdayaan Ekonomi)', ketua: 'Budi Santoso', anggota: 4, status: 'Siap Presentasi' },
    { nama: 'Kelompok 4 (Kebutuhan Masa Depan)', ketua: 'Siti Rahma', anggota: 4, status: 'Menganalisis Data' },
    { nama: 'Kelompok 5 (Kearifan Lokal)', ketua: 'Kevin Pratama', anggota: 4, status: 'Menyusun Laporan' }
  ];

  const currentSintak = SINTAKS_PBL.find(s => s.step === activeStep) || SINTAKS_PBL[0];

  const handleStepChange = (step: number) => {
    sounds.playClick();
    setActiveStep(step);
  };

  const toggleTimer = () => {
    sounds.playClick();
    setTimerRunning(!timerRunning);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            sounds.playVictory();
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Model Problem Based Learning (PBL)
            </div>
            <h2 className="text-2xl font-black text-slate-800">
              5 Sintak Pembelajaran Berbantuan TPACK
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Alokasi total 2 x 40 Menit (2 JP) • Pembelajaran Kolaboratif, Berpikir Kritis, & Integrasi Teknologi
            </p>
          </div>

          {/* Stepper progress indicator */}
          <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-200 overflow-x-auto">
            {SINTAKS_PBL.map((s) => {
              const isCurrent = s.step === activeStep;
              const isPast = s.step < activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => handleStepChange(s.step)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                    isCurrent
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : isPast
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-white text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <span>Sintak {s.step}</span>
                  {isPast && <Check className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Sintak Display Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 text-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full font-semibold border border-white/25 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300" /> Alokasi Waktu: {currentSintak.waktu}
            </span>
            <span className="bg-emerald-500/40 text-emerald-100 px-3 py-1 rounded-full font-medium border border-emerald-300/30">
              {currentSintak.integrasi}
            </span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 text-white flex items-center justify-center font-black text-xl shrink-0 border border-white/20">
              {currentSintak.step}
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Sintak {currentSintak.step}
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {currentSintak.nama}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-300" /> Fokus Karakter Pancasila: <strong>{currentSintak.fokusPancasila}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Sintak Detailed Interactive Content */}
        <div className="p-6 space-y-6">
          {/* Peran Guru vs Peran Siswa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <div className="w-6 h-6 rounded bg-emerald-200 text-emerald-800 flex items-center justify-center text-xs">
                  👨‍🏫
                </div>
                Aktivitas & Peran Pendidik
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentSintak.deskripsiGuru}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 space-y-2">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <div className="w-6 h-6 rounded bg-teal-200 text-teal-800 flex items-center justify-center text-xs">
                  🧑‍🎓
                </div>
                Aktivitas & Respon Peserta Didik
              </div>
              <p className="text-xs text-teal-950/80 leading-relaxed">
                {currentSintak.aktivitasSiswa}
              </p>
            </div>
          </div>

          {/* Interactive Feature per Sintak */}
          {activeStep === 1 && (
            <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <Video className="w-4 h-4 text-emerald-600" />
                  <span>Media Stimulus Video YouTube & PPT Interaktif (TK Integration)</span>
                </div>
                <span className="text-[11px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded font-medium">
                  Studi Kasus Nyata
                </span>
              </div>

              {/* Simulation Screen of Pasar Gudang Lelang */}
              <div className="bg-slate-900 rounded-xl p-4 text-white space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span>Tayangan Video: Aktivitas Pasar Tradisional & Pemenuhan Kebutuhan</span>
                  <span className="text-emerald-400 font-mono">Modul Ajar Gambar 1.20</span>
                </div>
                <div className="bg-slate-800/80 rounded-lg p-4 text-center space-y-2 border border-slate-700">
                  <span className="text-4xl">🏬 🛒 🐟 🌾</span>
                  <h4 className="font-bold text-base text-emerald-300">
                    "Pasar Gudang Lelang: Tempat Ribuan Kebutuhan Bertemu Keterbatasan"
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xl mx-auto">
                    Setiap pagi ratusan kepala keluarga datang dengan uang belanja terbatas. Mereka harus memutuskan: membeli beras atau baju baru? Beli obat atau rekreasi?
                  </p>
                </div>
              </div>

              {/* Pertanyaan Pemantik Kelas */}
              <div>
                <h5 className="font-bold text-slate-800 text-xs flex items-center gap-1.5 mb-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Pertanyaan Diskusi Terbuka (Tanya Jawab Interaktif):
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {currentSintak.pertanyaanKunci.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2 rounded-lg border border-slate-200">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="p-5 rounded-xl border border-teal-200 bg-teal-50/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span>Pembagian 5 Kelompok Heterogen (Collaborative Learning)</span>
                </div>
                <span className="text-[11px] bg-teal-200 text-teal-800 px-2 py-0.5 rounded font-medium">
                  Target: 20 Siswa
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sampleGroups.map((g, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-bold text-slate-800 text-xs">{g.nama}</h5>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-medium">
                        {g.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Ketua Kelompok: <strong>{g.ketua}</strong>
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Anggota: 4 siswa heterogen (Mandiri & Gotong Royong)
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => {
                    sounds.playClick();
                    onNavigate('lkpd');
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow flex items-center gap-1.5 transition"
                >
                  <FileText className="w-4 h-4" />
                  <span>Buka Lembar Kerja LKPD Digital Sekarang</span>
                </button>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Penyelidikan Kebutuhan 3 Hari Terakhir & Pengorbanan Ekonomi</span>
                </div>
                <span className="text-[11px] bg-blue-200 text-blue-800 px-2 py-0.5 rounded font-medium">
                  Sintak 3: Investigasi
                </span>
              </div>

              <p className="text-xs text-slate-600">
                Pada sintak ini siswa mengumpulkan data empiris kebutuhan keluarganya masing-masing selama 3 hari terakhir. Mereka mencatat apa saja yang dibeli, berapa pengorbanannya (uang/tenaga), dan membandingkannya dengan teman sekelompok.
              </p>

              <div className="bg-white p-4 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-bold text-slate-700">1. Pengumpulan Data</p>
                  <p className="text-slate-500 mt-1">Mencatat daftar kebutuhan anggota keluarga (pangan, kuota, obat, cicilan).</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-bold text-slate-700">2. Analisis Perbedaan</p>
                  <p className="text-slate-500 mt-1">Mengapa kebutuhan keluarga Nelayan berbeda dengan keluarga Pegawai?</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-bold text-slate-700">3. Menemukan Faktor</p>
                  <p className="text-slate-500 mt-1">Menemukan korelasi dengan 8 faktor (lingkungan, pendapatan, pendidikan, dll).</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-blue-800 font-medium">
                  🔍 Butuh bantuan konsep? Buka tab materi atau mainkan game simulasi!
                </span>
                <button
                  onClick={() => {
                    sounds.playClick();
                    onNavigate('lkpd');
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow flex items-center gap-1.5 transition"
                >
                  <span>Isi Data Penyelidikan di LKPD</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <Share2 className="w-4 h-4 text-amber-600" />
                  <span>Unjuk Karya & Presentasi Kelompok di Depan Kelas</span>
                </div>
                <span className="text-[11px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-medium">
                  Keterampilan Komunikasi
                </span>
              </div>

              {/* Timer presentasi interaktif */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <Timer className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm">Timer Giliran Presentasi</h5>
                    <p className="text-xs text-slate-500">Batas waktu presentasi dan tanya jawab tiap kelompok (5 Menit)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-mono text-2xl font-black text-slate-800 px-4 py-2 bg-slate-100 rounded-xl border border-slate-300">
                    {formatTimer(timerSeconds)}
                  </div>
                  <button
                    onClick={toggleTimer}
                    className={`px-4 py-2 rounded-xl font-bold text-xs shadow transition ${
                      timerRunning
                        ? 'bg-rose-600 hover:bg-rose-700 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    {timerRunning ? 'Jeda' : 'Mulai Timer'}
                  </button>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setTimerSeconds(300);
                      setTimerRunning(false);
                    }}
                    className="px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-medium"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Rubrik Penilaian Antarteman */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                <p className="font-bold text-slate-800">Kriteria Penilaian Kinerja Presentasi (Modul Hal 6):</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-slate-600">
                  <span className="p-2 bg-slate-50 rounded border border-slate-100">1. Kejelasan Informasi</span>
                  <span className="p-2 bg-slate-50 rounded border border-slate-100">2. Keaktifan Diskusi</span>
                  <span className="p-2 bg-slate-50 rounded border border-slate-100">3. Kerapian Laporan</span>
                  <span className="p-2 bg-slate-50 rounded border border-slate-100">4. Penguasaan Materi</span>
                </div>
              </div>
            </div>
          )}

          {activeStep === 5 && (
            <div className="p-5 rounded-xl border border-purple-200 bg-purple-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span>Evaluasi & Refleksi Akhir Proses Pembelajaran</span>
                </div>
                <span className="text-[11px] bg-purple-200 text-purple-900 px-2 py-0.5 rounded font-medium">
                  Sintak 5: Penutup
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                <h5 className="font-bold text-slate-800 text-sm">Rangkaian Tahap Penutup:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <strong className="text-purple-900 block mb-1">1. Penguatan Guru</strong>
                    <p className="text-slate-600">Guru memberi feedback dan menyimpulkan esensi materi kebutuhan secara komprehensif.</p>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <strong className="text-emerald-900 block mb-1">2. Post-Test Mandiri</strong>
                    <p className="text-slate-600">Peserta didik mengerjakan 10 soal Pilihan Ganda & 5 Esai untuk mengukur ketuntasan KKTP.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <strong className="text-blue-900 block mb-1">3. Refleksi Bersama</strong>
                    <p className="text-slate-600">Refleksi siswa & guru untuk mengevaluasi efektivitas metode Problem Based Learning.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    sounds.playClick();
                    onNavigate('evaluasi');
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold shadow flex items-center gap-1.5 transition"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Kerjakan Soal Evaluasi (Post-Test)</span>
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    onNavigate('refleksi');
                  }}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold shadow-xs flex items-center gap-1.5 transition"
                >
                  <HelpCircle className="w-4 h-4 text-purple-600" />
                  <span>Buka Lembar Refleksi</span>
                </button>
              </div>
            </div>
          )}

          {/* Stepper Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              onClick={() => handleStepChange(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                activeStep === 1
                  ? 'text-slate-400 bg-slate-100 cursor-not-allowed'
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sintak Sebelumnya</span>
            </button>

            <span className="text-xs font-bold text-slate-500">
              Langkah {activeStep} dari 5
            </span>

            <button
              onClick={() => handleStepChange(Math.min(5, activeStep + 1))}
              disabled={activeStep === 5}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                activeStep === 5
                  ? 'text-slate-400 bg-slate-100 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              <span>Sintak Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
