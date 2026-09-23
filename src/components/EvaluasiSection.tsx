import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  AlertCircle, 
  FileText, 
  ChevronRight, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_SOAL, ESSAY_SOAL, MODUL_INFO } from '../data/curriculumData';
import { sounds } from '../utils/audio';

export const EvaluasiSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: 'a' | 'b' | 'c' | 'd' }>({});
  const [essayAnswers, setEssayAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'pg' | 'esai'>('pg');

  const handleSelectPG = (questionId: number, key: 'a' | 'b' | 'c' | 'd') => {
    if (submitted) return;
    sounds.playClick();
    setSelectedAnswers(prev => ({ ...prev, [questionId]: key }));
  };

  const handleEssayChange = (id: number, text: string) => {
    setEssayAnswers(prev => ({ ...prev, [id]: text }));
  };

  const calculateScore = () => {
    let correct = 0;
    QUIZ_SOAL.forEach(q => {
      if (selectedAnswers[q.id] === q.kunci) {
        correct += 1;
      }
    });
    return {
      correctCount: correct,
      totalQuestions: QUIZ_SOAL.length,
      finalScore: (correct / QUIZ_SOAL.length) * 100
    };
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < QUIZ_SOAL.length) {
      if (!confirm(`Kamu baru menjawab ${answeredCount} dari ${QUIZ_SOAL.length} soal Pilihan Ganda. Yakin ingin mengumpulkan sekarang?`)) {
        return;
      }
    }

    sounds.playVictory();
    setSubmitted(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
  };

  const handleReset = () => {
    sounds.playClick();
    setSelectedAnswers({});
    setEssayAnswers({});
    setSubmitted(false);
  };

  const { correctCount, totalQuestions, finalScore } = calculateScore();
  const isPassed = finalScore >= MODUL_INFO.kktp;

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Asesmen Sumatif (Post-Test) • Lampiran Hal 18-20
            </div>
            <h2 className="text-2xl font-black text-slate-800">
              Evaluasi Hasil Belajar Kebutuhan Manusia
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Kriteria Ketercapaian Tujuan Pembelajaran (KKTP): <strong>{MODUL_INFO.kktp} Poin</strong> • Menguji Pemahaman Konseptual & Analitis
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('pg')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'pg'
                  ? 'bg-emerald-700 text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              10 Pilihan Ganda
            </button>
            <button
              onClick={() => setActiveTab('esai')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'esai'
                  ? 'bg-emerald-700 text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              5 Soal Esai & Rubrik
            </button>
          </div>
        </div>
      </div>

      {/* Result Score Banner when Submitted */}
      {submitted && (
        <div className={`p-6 rounded-3xl border-2 shadow-sm space-y-4 animate-in zoom-in-95 ${
          isPassed
            ? 'bg-emerald-50/80 border-emerald-300'
            : 'bg-amber-50/80 border-amber-300'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-3xl font-black text-slate-800">
                {isPassed ? '🎉' : '📚'}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Hasil Akhir Post-Test</span>
                <h3 className="text-2xl font-black text-slate-900">
                  {isPassed ? 'Selamat! Kamu Tuntas Capaian Pembelajaran' : 'Tetap Semangat! Ikuti Program Remedial'}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Menjawab benar <strong>{correctCount}</strong> dari {totalQuestions} soal pilihan ganda.
                </p>
              </div>
            </div>

            <div className="text-center bg-white px-6 py-3 rounded-2xl shadow-xs border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Nilai Akhir</span>
              <p className={`text-4xl font-black ${isPassed ? 'text-emerald-700' : 'text-amber-700'}`}>
                {finalScore}
              </p>
              <span className="text-[10px] text-slate-500">KKTP Minimal: {MODUL_INFO.kktp}</span>
            </div>
          </div>

          {/* Program Pengayaan vs Remedial Info (Sesuai Modul Ajar Halaman 7) */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-slate-800">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Tindak Lanjut Pembelajaran (Modul Ajar Halaman 7):</span>
            </div>
            {isPassed ? (
              <div className="text-emerald-950">
                <strong className="text-emerald-800">Program Pengayaan:</strong> Kamu berhak mengikuti pengayaan dengan menganalisis fenomena fluktuasi harga kebutuhan pokok di daerahmu dan merancang rencana tabungan masa depan mandiri!
              </div>
            ) : (
              <div className="text-amber-950">
                <strong className="text-amber-800">Program Remedial:</strong> Silakan pelajari kembali 4 dimensi klasifikasi kebutuhan di tab Materi, diskusikan bersama guru/teman, lalu ulangi pengerjaan soal dengan tes setara.
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-1">
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" /> Ulangi Evaluasi
            </button>
          </div>
        </div>
      )}

      {/* TAB 1: PILIHAN GANDA (10 SOAL RESMI MODUL) */}
      {activeTab === 'pg' && (
        <div className="space-y-5">
          {QUIZ_SOAL.map((q) => {
            const userAnswer = selectedAnswers[q.id];
            const isCorrect = userAnswer === q.kunci;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-slate-200">
                      {q.id}
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                      {q.pertanyaan}
                    </h4>
                  </div>
                  {submitted && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isCorrect ? '✓ Benar' : '✗ Salah'}
                    </span>
                  )}
                </div>

                {/* Choices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.pilihan.map((p) => {
                    const isSelected = userAnswer === p.key;
                    let style = 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';

                    if (isSelected) {
                      style = 'border-emerald-600 bg-emerald-50/70 text-emerald-900 font-bold ring-1 ring-emerald-400';
                    }

                    if (submitted) {
                      if (p.key === q.kunci) {
                        style = 'border-emerald-600 bg-emerald-100 text-emerald-950 font-bold';
                      } else if (isSelected && !isCorrect) {
                        style = 'border-rose-500 bg-rose-50 text-rose-900 font-medium';
                      }
                    }

                    return (
                      <button
                        key={p.key}
                        disabled={submitted}
                        onClick={() => handleSelectPG(q.id, p.key)}
                        className={`text-left p-3 rounded-xl border text-xs transition flex items-center gap-2.5 ${style}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-slate-300 uppercase flex items-center justify-center text-[10px] font-bold shrink-0">
                          {p.key}
                        </span>
                        <span className="leading-snug">{p.teks}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Pembahasan saat submitted */}
                {submitted && (
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1 animate-in fade-in">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                      Kunci Jawaban: <strong>{q.kunci.toUpperCase()}</strong> • Pembahasan Modul:
                    </span>
                    <p className="leading-relaxed pl-5 text-slate-600">{q.pembahasan}</p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Submit Action */}
          {!submitted && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Terjawab: <strong>{Object.keys(selectedAnswers).length}</strong> dari {QUIZ_SOAL.length} Soal
              </div>
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 transition"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Kumpulkan & Lihat Nilai Evaluasi</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SOAL ESAI & RUBRIK */}
      {activeTab === 'esai' && (
        <div className="space-y-6">
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-xs text-purple-900">
            <strong>Catatan Guru:</strong> Tuliskan jawaban analisismu pada kolom yang tersedia. Klik tombol "Lihat Rubrik & Kunci Jawaban" untuk mengecek kesesuaian jawabanmu dengan kunci pedoman penilaian modul ajar.
          </div>

          {ESSAY_SOAL.map((essay) => (
            <div
              key={essay.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  E{essay.id}
                </span>
                <h4 className="font-bold text-slate-800 text-sm leading-snug">
                  {essay.pertanyaan}
                </h4>
              </div>

              <textarea
                rows={4}
                value={essayAnswers[essay.id] || ''}
                onChange={(e) => handleEssayChange(essay.id, e.target.value)}
                placeholder="Tuliskan penjelasan dan contoh konkret analisismu di sini..."
                className="w-full p-3 rounded-xl border border-slate-300 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Collapsible Rubric & Answer Key */}
              <details className="bg-slate-50 rounded-xl border border-slate-200 p-3.5 text-xs text-slate-700 cursor-pointer">
                <summary className="font-bold text-purple-900 hover:text-purple-700 select-none">
                  🔍 Buka Rubrik Penilaian & Contoh Kunci Jawaban
                </summary>
                <div className="mt-3 space-y-3 pt-3 border-t border-slate-200">
                  <div>
                    <strong className="text-slate-900 block mb-1">Rubrik Penilaian:</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                      {essay.rubrik.map((r, ri) => (
                        <li key={ri}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-emerald-950">
                    <strong className="text-emerald-800 block text-[11px] uppercase mb-0.5">Kunci Jawaban Ideal:</strong>
                    <p className="leading-relaxed">{essay.kunciContoh}</p>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
