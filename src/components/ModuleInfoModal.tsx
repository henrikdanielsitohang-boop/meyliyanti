import React from 'react';
import { X, Award, Sparkles, CheckCircle, School, User, Calendar, BookOpen, Layers } from 'lucide-react';
import { MODUL_INFO } from '../data/curriculumData';

interface ModuleInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModuleInfoModal: React.FC<ModuleInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 text-white p-5 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-400/30">
              <School className="w-3.5 h-3.5" /> Modul Ajar Kurikulum Merdeka
            </div>
            <h2 className="text-xl font-bold">{MODUL_INFO.topik}</h2>
            <p className="text-sm text-emerald-200 mt-0.5">
              {MODUL_INFO.mataPelajaran} • {MODUL_INFO.fase} • {MODUL_INFO.satuanPendidikan}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Identitas Guru & Sekolah */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Guru Pengampu</p>
                <p className="font-semibold text-slate-800">{MODUL_INFO.penyusun}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <School className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Kepala Sekolah</p>
                <p className="font-semibold text-slate-800">{MODUL_INFO.kepalaSekolah}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Tahun & Alokasi</p>
                <p className="font-semibold text-slate-800">
                  {MODUL_INFO.tahunAjaran} • {MODUL_INFO.alokasiWaktu}
                </p>
              </div>
            </div>
          </div>

          {/* Capaian Pembelajaran */}
          <div>
            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-emerald-600" /> Capaian Pembelajaran (CP)
            </h3>
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl text-emerald-950 font-medium leading-relaxed">
              "{MODUL_INFO.capaianPembelajaran}"
            </div>
          </div>

          {/* Tujuan Pembelajaran */}
          <div>
            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-teal-600" /> Tujuan Pembelajaran & IPTP
            </h3>
            <ul className="space-y-2">
              {MODUL_INFO.tujuanPembelajaran.map((tp, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-snug">{tp}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2.5 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
              <strong className="font-bold">Indikator Pencapaian (IPTP): </strong>
              {MODUL_INFO.iptp}
            </div>
          </div>

          {/* Kerangka TPACK */}
          <div>
            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" /> Integrasi Kerangka TPACK
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-purple-50/80 border border-purple-200 p-3.5 rounded-xl">
                <div className="font-bold text-purple-900 text-xs mb-1 flex items-center gap-1.5">
                  <span className="bg-purple-200 text-purple-900 px-1.5 py-0.5 rounded font-mono">CK</span>
                  Content Knowledge
                </div>
                <p className="text-xs text-purple-950/80 leading-relaxed">
                  {MODUL_INFO.tpack.ck}
                </p>
              </div>

              <div className="bg-blue-50/80 border border-blue-200 p-3.5 rounded-xl">
                <div className="font-bold text-blue-900 text-xs mb-1 flex items-center gap-1.5">
                  <span className="bg-blue-200 text-blue-900 px-1.5 py-0.5 rounded font-mono">PK</span>
                  Pedagogical Knowledge
                </div>
                <p className="text-xs text-blue-950/80 leading-relaxed">
                  {MODUL_INFO.tpack.pk}
                </p>
              </div>

              <div className="bg-cyan-50/80 border border-cyan-200 p-3.5 rounded-xl">
                <div className="font-bold text-cyan-900 text-xs mb-1 flex items-center gap-1.5">
                  <span className="bg-cyan-200 text-cyan-900 px-1.5 py-0.5 rounded font-mono">TK</span>
                  Technological Knowledge
                </div>
                <p className="text-xs text-cyan-950/80 leading-relaxed">
                  {MODUL_INFO.tpack.tk}
                </p>
              </div>
            </div>
          </div>

          {/* Profil Pelajar Pancasila */}
          <div>
            <h3 className="font-bold text-slate-800 text-base flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-amber-600" /> Dimensi Profil Pelajar Pancasila
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {MODUL_INFO.profilPancasila.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 transition">
                  <div className="font-semibold text-slate-800 text-xs flex items-center gap-1.5 mb-1 text-emerald-800">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> {item.title}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diferensiasi & Sarpras */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
            <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-600" /> Diferensiasi Pembelajaran
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <strong className="text-slate-700">Diferensiasi Konten:</strong>
                <p className="text-slate-600 mt-0.5">PPT Interaktif, Video Pembelajaran YouTube, Glosarium kosa kata mudah, Buku IPS VII.</p>
              </div>
              <div>
                <strong className="text-slate-700">Diferensiasi Proses:</strong>
                <p className="text-slate-600 mt-0.5">Kerja kolaboratif 4-5 kelompok, investigasi data 3 hari, simulasi peran & belanja.</p>
              </div>
              <div>
                <strong className="text-slate-700">Diferensiasi Produk:</strong>
                <p className="text-slate-600 mt-0.5">LKPD digital tersimpan, paparan kelompok di depan kelas, presentasi grafis.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs shadow transition"
          >
            Tutup Informasi
          </button>
        </div>
      </div>
    </div>
  );
};
