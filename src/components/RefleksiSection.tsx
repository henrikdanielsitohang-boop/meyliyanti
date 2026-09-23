import React, { useState } from 'react';
import { HelpCircle, User, GraduationCap, CheckCircle2, Save, Sparkles, MessageSquare } from 'lucide-react';
import { RefleksiSiswaData, RefleksiGuruData } from '../types';
import { sounds } from '../utils/audio';

interface RefleksiSectionProps {
  initialRole?: 'siswa' | 'guru';
}

export const RefleksiSection: React.FC<RefleksiSectionProps> = ({ initialRole = 'siswa' }) => {
  const [activeRefleksi, setActiveRefleksi] = useState<'siswa' | 'guru'>(initialRole);

  const [siswaData, setSiswaData] = useState<RefleksiSiswaData>({
    materiSulit: 'Awalnya sedikit bingung membedakan kebutuhan mendesak dan kebutuhan sekarang, namun setelah bermain simulasi belanja jadi sangat paham.',
    upayaPahami: 'Membaca glosarium istilah, berdiskusi dengan teman sekelompok saat mengerjakan LKPD digital, dan memainkan game detektif.',
    apakahMembantu: 'Sangat membantu dan menyenangkan karena ada game belanja interaktif dan simulator anggaran uang.',
    nilaiHarapan: '95',
    harapanSelanjutnya: 'Ingin ada lebih banyak game simulasi ekonomi dan studi kasus pasar nyata di pertemuan berikutnya!'
  });

  const [guruData, setGuruData] = useState<RefleksiGuruData>({
    sesuaiRencana: true,
    pblSesuai: true,
    siswaSenangAktif: true,
    siswaMengerti: true,
    tindakLanjut: 'Peserta didik yang belum tuntas diberikan bimbingan terfokus mengenai 4 dimensi klasifikasi kebutuhan, sedangkan peserta didik tuntas diberikan tugas pengayaan mandiri.',
    catatanGuru: 'Integrasi teknologi (TK) dan gamifikasi terbukti meningkatkan antusiasme dan nalar kritis siswa secara signifikan dalam menganalisis skala prioritas.'
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    sounds.playCorrect();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" /> Sintak 5 & Penutup • Halaman 6 Modul Ajar
            </div>
            <h2 className="text-2xl font-black text-slate-800">
              Lembar Refleksi Pembelajaran Bermakna
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Mengevaluasi proses belajar mengajar untuk peningkatan kualitas pembelajaran berkelanjutan
            </p>
          </div>

          {/* Toggle Role */}
          <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => {
                sounds.playClick();
                setActiveRefleksi('siswa');
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeRefleksi === 'siswa'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Refleksi Siswa</span>
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setActiveRefleksi('guru');
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeRefleksi === 'guru'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Refleksi Guru</span>
            </button>
          </div>
        </div>

        {saved && (
          <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Catatan refleksi berhasil disimpan!
          </div>
        )}
      </div>

      {/* REFLEKSI SISWA CARD */}
      {activeRefleksi === 'siswa' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl">
              🧑‍🎓
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                5 Pertanyaan Refleksi Peserta Didik
              </h3>
              <p className="text-xs text-slate-500">
                Sesuai instrumen refleksi modul ajar IPS halaman 6
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            {/* 1 */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px]">1</span>
                Materi mana yang paling sulit untuk dipahami?
              </label>
              <textarea
                rows={2}
                value={siswaData.materiSulit}
                onChange={(e) => setSiswaData({ ...siswaData, materiSulit: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* 2 */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px]">2</span>
                Apa yang kalian lakukan agar lebih memahami materi?
              </label>
              <textarea
                rows={2}
                value={siswaData.upayaPahami}
                onChange={(e) => setSiswaData({ ...siswaData, upayaPahami: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* 3 */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px]">3</span>
                Apakah pembelajaran hari ini membantu kalian dalam memahami materi kebutuhan manusia?
              </label>
              <textarea
                rows={2}
                value={siswaData.apakahMembantu}
                onChange={(e) => setSiswaData({ ...siswaData, apakahMembantu: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* 4 & 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px]">4</span>
                  Berapa nilai yang kalian harapkan?
                </label>
                <input
                  type="text"
                  value={siswaData.nilaiHarapan}
                  onChange={(e) => setSiswaData({ ...siswaData, nilaiHarapan: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 font-bold text-emerald-700"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px]">5</span>
                  Apa harapan kalian untuk pembelajaran selanjutnya?
                </label>
                <input
                  type="text"
                  value={siswaData.harapanSelanjutnya}
                  onChange={(e) => setSiswaData({ ...siswaData, harapanSelanjutnya: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow flex items-center gap-1.5 transition"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Refleksi Siswa</span>
            </button>
          </div>
        </div>
      )}

      {/* REFLEKSI GURU CARD */}
      {activeRefleksi === 'guru' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xl">
              👨‍🏫
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                5 Pertanyaan Refleksi Guru Pengampu
              </h3>
              <p className="text-xs text-slate-500">
                Mey Liyanti Sisca, S.Pd. • SMP Swasta Persiapan
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="font-medium text-slate-700">1. Sesuai rencana modul ajar?</span>
                <button
                  onClick={() => setGuruData({ ...guruData, sesuaiRencana: !guruData.sesuaiRencana })}
                  className={`px-3 py-1 rounded-lg font-bold text-xs ${
                    guruData.sesuaiRencana ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {guruData.sesuaiRencana ? '✓ Sudah Sesuai' : 'Belum'}
                </button>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="font-medium text-slate-700">2. Metode PBL sudah tepat?</span>
                <button
                  onClick={() => setGuruData({ ...guruData, pblSesuai: !guruData.pblSesuai })}
                  className={`px-3 py-1 rounded-lg font-bold text-xs ${
                    guruData.pblSesuai ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {guruData.pblSesuai ? '✓ Tepat & Efektif' : 'Perlu Revisi'}
                </button>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="font-medium text-slate-700">3. Peserta didik senang & aktif?</span>
                <button
                  onClick={() => setGuruData({ ...guruData, siswaSenangAktif: !guruData.siswaSenangAktif })}
                  className={`px-3 py-1 rounded-lg font-bold text-xs ${
                    guruData.siswaSenangAktif ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {guruData.siswaSenangAktif ? '✓ Sangat Antusias' : 'Kurang'}
                </button>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="font-medium text-slate-700">4. Peserta didik sudah paham materi?</span>
                <button
                  onClick={() => setGuruData({ ...guruData, siswaMengerti: !guruData.siswaMengerti })}
                  className={`px-3 py-1 rounded-lg font-bold text-xs ${
                    guruData.siswaMengerti ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {guruData.siswaMengerti ? '✓ Tuntas KKTP' : 'Perlu Remedial'}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 block">
                5. Tindak Lanjut & Modifikasi Metode/Bahan Ajar Selanjutnya:
              </label>
              <textarea
                rows={3}
                value={guruData.tindakLanjut}
                onChange={(e) => setGuruData({ ...guruData, tindakLanjut: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 block">
                Catatan Guru Terkait Integrasi TPACK:
              </label>
              <textarea
                rows={2}
                value={guruData.catatanGuru}
                onChange={(e) => setGuruData({ ...guruData, catatanGuru: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow flex items-center gap-1.5 transition"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Catatan Guru</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
