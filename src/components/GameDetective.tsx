import React, { useState } from 'react';
import { Search, Award, CheckCircle2, ArrowLeft, RotateCcw, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DETECTIVE_CASES } from '../data/curriculumData';
import { sounds } from '../utils/audio';

interface GameDetectiveProps {
  onBack: () => void;
}

export const GameDetective: React.FC<GameDetectiveProps> = ({ onBack }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const activeCase = DETECTIVE_CASES[currentCaseIndex];

  const handleSelectOption = (opt: string) => {
    if (answered) return;
    setSelectedOption(opt);
    setAnswered(true);

    if (opt === activeCase.jawabanBenar) {
      sounds.playCorrect();
      setCorrectCount(c => c + 1);
    } else {
      sounds.playWrong();
    }
  };

  const handleNextCase = () => {
    sounds.playClick();
    if (currentCaseIndex + 1 >= DETECTIVE_CASES.length) {
      setFinished(true);
      sounds.playVictory();
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } else {
      setCurrentCaseIndex(i => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  };

  const restartDetective = () => {
    sounds.playClick();
    setCurrentCaseIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setCorrectCount(0);
    setFinished(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Hub Game
        </button>

        <span className="text-xs font-bold text-slate-500">
          Kasus {currentCaseIndex + 1} dari {DETECTIVE_CASES.length}
        </span>
      </div>

      {/* Main Detective Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
        {!finished ? (
          <div className="space-y-5">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-2">
                <Search className="w-3.5 h-3.5" /> Detektif Faktor Kebutuhan
              </div>
              <h3 className="text-xl font-black text-slate-800">
                {activeCase.judul}
              </h3>
            </div>

            {/* Case Narrative */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 block mb-1">📜 Berkas Kasus:</strong>
              "{activeCase.skenario}"
            </div>

            {/* Question */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-600" />
                {activeCase.pertanyaan}
              </h4>

              {/* Options */}
              <div className="space-y-2">
                {activeCase.pilihan.map((opt, idx) => {
                  let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';

                  if (answered) {
                    if (opt === activeCase.jawabanBenar) {
                      btnStyle = 'bg-emerald-600 text-white font-bold border-emerald-600';
                    } else if (opt === selectedOption) {
                      btnStyle = 'bg-rose-600 text-white font-bold border-rose-600';
                    } else {
                      btnStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={answered}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full text-left p-3 rounded-xl border-2 text-xs transition flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {answered && opt === activeCase.jawabanBenar && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Case Explanation */}
            {answered && (
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1 animate-in fade-in">
                <strong className="font-bold block">💡 Analisis Detektif Ekonomi:</strong>
                <p>{activeCase.penjelasan}</p>
              </div>
            )}

            {/* Next Button */}
            {answered && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextCase}
                  className="px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow flex items-center gap-1.5 transition"
                >
                  <span>{currentCaseIndex + 1 >= DETECTIVE_CASES.length ? 'Lihat Hasil Investigasi' : 'Kasus Selanjutnya'}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Finished Screen */
          <div className="space-y-4 text-center py-6 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mx-auto text-3xl">
              🕵️
            </div>
            <h3 className="text-2xl font-black text-slate-800">
              Investigasi Kasus Selesai!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Kamu telah berhasil meneliti {DETECTIVE_CASES.length} fenomena perbedaan kebutuhan di masyarakat.
            </p>

            <div className="p-4 bg-cyan-50 rounded-2xl border border-cyan-200 max-w-sm mx-auto space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-cyan-800">Skor Akurasi Detektif</span>
              <p className="text-3xl font-black text-cyan-700">{correctCount} / {DETECTIVE_CASES.length} Kasus Benar</p>
              <p className="text-[11px] text-cyan-900">
                {correctCount === DETECTIVE_CASES.length ? '🌟 Nilai Sempurna! Sangat Memahami 8 Faktor Kebutuhan.' : '👍 Bagus! Coba ulangi agar makin mahir.'}
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-4">
              <button
                onClick={restartDetective}
                className="px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs shadow flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Investigasi Ulang
              </button>
              <button
                onClick={onBack}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
              >
                Menu Game
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
