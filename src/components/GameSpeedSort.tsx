import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Zap, Award, RotateCcw, Check, X, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KEBUTUHAN_ITEMS } from '../data/curriculumData';
import { KebutuhanItem } from '../types';
import { sounds } from '../utils/audio';

interface GameSpeedSortProps {
  onBack: () => void;
}

export const GameSpeedSort: React.FC<GameSpeedSortProps> = ({ onBack }) => {
  const [gameMode, setGameMode] = useState<'intensitas' | 'sifat' | 'subjek'>('intensitas');
  const [deck, setDeck] = useState<KebutuhanItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    sounds.playClick();
    const shuffled = [...KEBUTUHAN_ITEMS].sort(() => 0.5 - Math.random());
    setDeck(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setCombo(0);
    setLives(3);
    setTimeLeft(45);
    setFeedback(null);
    setGameOver(false);
    setIsPlaying(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && !gameOver && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            handleGameOver();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, gameOver, timeLeft]);

  const handleGameOver = () => {
    setGameOver(true);
    setIsPlaying(false);
    sounds.playVictory();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const currentItem = deck[currentIndex];

  const handleAnswer = (choice: string) => {
    if (!currentItem || gameOver) return;

    let correct = false;
    let explanation = '';

    if (gameMode === 'intensitas') {
      correct = currentItem.intensitas === choice;
      explanation = `${currentItem.nama} adalah kebutuhan ${currentItem.intensitas.toUpperCase()}! ${currentItem.alasan}`;
    } else if (gameMode === 'sifat') {
      correct = currentItem.sifat === choice;
      explanation = `${currentItem.nama} termasuk kebutuhan ${currentItem.sifat.toUpperCase()} karena memuaskan aspek ${currentItem.sifat === 'jasmani' ? 'fisik/raga' : 'kejiwaan/mental'}.`;
    } else if (gameMode === 'subjek') {
      correct = currentItem.subjek === choice;
      explanation = `${currentItem.nama} merupakan kebutuhan ${currentItem.subjek.toUpperCase()} (pemanfaatannya dirasakan oleh ${currentItem.subjek === 'individu' ? 'satu orang saja' : 'masyarakat bersama'}).`;
    }

    if (correct) {
      sounds.playCorrect();
      const points = 100 + combo * 25;
      setScore(s => s + points);
      setCombo(c => c + 1);
      setFeedback({ isCorrect: true, text: `Benar! (+${points} Poin) • ${explanation}` });
    } else {
      sounds.playWrong();
      setCombo(0);
      setLives(l => {
        const newLives = l - 1;
        if (newLives <= 0) {
          handleGameOver();
        }
        return newLives;
      });
      setFeedback({ isCorrect: false, text: `Kurang Tepat! • ${explanation}` });
    }

    if (currentIndex + 1 >= deck.length) {
      handleGameOver();
    } else {
      setCurrentIndex(i => i + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Hub Game
        </button>

        {/* Mode Selector */}
        {!isPlaying && (
          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => setGameMode('intensitas')}
              className={`px-2.5 py-1 rounded-lg font-bold ${
                gameMode === 'intensitas' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'
              }`}
            >
              Intensitas
            </button>
            <button
              onClick={() => setGameMode('sifat')}
              className={`px-2.5 py-1 rounded-lg font-bold ${
                gameMode === 'sifat' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'
              }`}
            >
              Sifat
            </button>
            <button
              onClick={() => setGameMode('subjek')}
              className={`px-2.5 py-1 rounded-lg font-bold ${
                gameMode === 'subjek' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'
              }`}
            >
              Subjek
            </button>
          </div>
        )}
      </div>

      {/* Game Card Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 text-center space-y-6">
        {!isPlaying && !gameOver && (
          <div className="space-y-4 py-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto text-3xl shadow-lg shadow-emerald-500/20">
              ⚡
            </div>
            <h3 className="text-2xl font-black text-slate-800">
              Kategori Kilat Kebutuhan
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Uji kecepatan analisismu! Tebak kelompok kebutuhan dari setiap barang sebelum waktu habis. Dapatkan combo poin beruntun!
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto">
              Mode Aktif: <strong className="capitalize text-emerald-700 font-bold">{gameMode}</strong>
              <br />
              Waktu: <strong>45 Detik</strong> • Kesempatan: <strong>3 Nyawa ❤️</strong>
            </div>

            <button
              onClick={startGame}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-transform active:scale-95"
            >
              Mulai Bermain Sekarang
            </button>
          </div>
        )}

        {isPlaying && !gameOver && currentItem && (
          <div className="space-y-6">
            {/* Status Bar */}
            <div className="flex items-center justify-between text-xs font-bold border-b border-slate-100 pb-3">
              <div className="flex items-center gap-1 text-rose-500">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-4 h-4 ${i < lives ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-mono">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Combo: x{combo}</span>
              </div>

              <div className="font-mono text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                ⏱️ {timeLeft}s
              </div>

              <div className="text-emerald-700 font-extrabold text-sm">
                Skor: {score}
              </div>
            </div>

            {/* Target Item Display */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner space-y-2">
              <span className="text-6xl block">{currentItem.icon}</span>
              <h4 className="text-xl font-extrabold text-slate-800 mt-2">
                {currentItem.nama}
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {currentItem.deskripsi}
              </p>
              <div className="text-[11px] text-teal-700 font-medium">
                Contoh: "{currentItem.contohRealita}"
              </div>
            </div>

            {/* Choice Buttons based on Mode */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pilih Kategori Yang Tepat:
              </p>

              {gameMode === 'intensitas' && (
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleAnswer('primer')}
                    className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white border-2 border-emerald-300 font-bold text-xs text-emerald-900 transition-colors shadow-xs"
                  >
                    🥩 Primer
                  </button>
                  <button
                    onClick={() => handleAnswer('sekunder')}
                    className="p-3.5 rounded-xl bg-teal-50 hover:bg-teal-600 hover:text-white border-2 border-teal-300 font-bold text-xs text-teal-900 transition-colors shadow-xs"
                  >
                    📺 Sekunder
                  </button>
                  <button
                    onClick={() => handleAnswer('tersier')}
                    className="p-3.5 rounded-xl bg-amber-50 hover:bg-amber-600 hover:text-white border-2 border-amber-300 font-bold text-xs text-amber-900 transition-colors shadow-xs"
                  >
                    💎 Tersier
                  </button>
                </div>
              )}

              {gameMode === 'sifat' && (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleAnswer('jasmani')}
                    className="p-3.5 rounded-xl bg-cyan-50 hover:bg-cyan-600 hover:text-white border-2 border-cyan-300 font-bold text-xs text-cyan-900 transition-colors shadow-xs"
                  >
                    🏃 Jasmani (Fisik)
                  </button>
                  <button
                    onClick={() => handleAnswer('rohani')}
                    className="p-3.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 hover:text-white border-2 border-indigo-300 font-bold text-xs text-indigo-900 transition-colors shadow-xs"
                  >
                    🧘 Rohani (Jiwa/Batin)
                  </button>
                </div>
              )}

              {gameMode === 'subjek' && (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleAnswer('individu')}
                    className="p-3.5 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white border-2 border-blue-300 font-bold text-xs text-blue-900 transition-colors shadow-xs"
                  >
                    👤 Individu (Pribadi)
                  </button>
                  <button
                    onClick={() => handleAnswer('kelompok')}
                    className="p-3.5 rounded-xl bg-purple-50 hover:bg-purple-600 hover:text-white border-2 border-purple-300 font-bold text-xs text-purple-900 transition-colors shadow-xs"
                  >
                    👥 Kelompok (Kolektif)
                  </button>
                </div>
              )}
            </div>

            {/* Instant Feedback Notice */}
            {feedback && (
              <div className={`p-3 rounded-xl text-xs font-medium border animate-in fade-in ${
                feedback.isCorrect
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-rose-50 text-rose-900 border-rose-200'
              }`}>
                {feedback.text}
              </div>
            )}
          </div>
        )}

        {/* Game Over Screen */}
        {gameOver && (
          <div className="space-y-4 py-6 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-3xl">
              🏆
            </div>
            <h3 className="text-2xl font-black text-slate-800">
              Permainan Selesai!
            </h3>
            <p className="text-sm text-slate-500">
              Kerja hebat! Kamu telah menyelesaikan tantangan pemilahan kebutuhan.
            </p>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-sm mx-auto space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-800">Total Skor Akhir</span>
              <p className="text-3xl font-black text-emerald-700">{score} Poin</p>
              <p className="text-[11px] text-emerald-900">
                {score > 800 ? '⭐⭐⭐ Master Analis Ekonomi!' : score > 400 ? '⭐⭐ Pemikir Kritis Kebutuhan!' : '⭐ Terus Berlatih!'}
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-4">
              <button
                onClick={startGame}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Main Lagi
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
