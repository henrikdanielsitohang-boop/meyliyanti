import React, { useState } from 'react';
import { ShoppingCart, AlertTriangle, ShieldCheck, Heart, ArrowLeft, RefreshCw, CheckCircle2, Coins } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUDGET_SIMULATOR_ITEMS, EMERGENCY_EVENTS } from '../data/curriculumData';
import { sounds } from '../utils/audio';

interface GameBudgetSimulatorProps {
  onBack: () => void;
}

export const GameBudgetSimulator: React.FC<GameBudgetSimulatorProps> = ({ onBack }) => {
  const INITIAL_BUDGET = 1000000; // Rp 1.000.000
  const [cart, setCart] = useState<string[]>([]);
  const [showEmergency, setShowEmergency] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState(EMERGENCY_EVENTS[0]);
  const [evaluationResult, setEvaluationResult] = useState<any | null>(null);

  const totalSpent = cart.reduce((sum, id) => {
    const item = BUDGET_SIMULATOR_ITEMS.find(b => b.id === id);
    return sum + (item?.cost || 0);
  }, 0);

  const remainingBudget = INITIAL_BUDGET - totalSpent;

  const toggleItem = (id: string) => {
    sounds.playCoin();
    if (cart.includes(id)) {
      setCart(cart.filter(item => item !== id));
    } else {
      const item = BUDGET_SIMULATOR_ITEMS.find(b => b.id === id);
      if (item && totalSpent + item.cost > INITIAL_BUDGET) {
        sounds.playWrong();
        alert('Dana belanja tidak mencukupi! Anda mengalami keterbatasan anggaran (Kelangkaan Uang).');
        return;
      }
      setCart([...cart, id]);
    }
  };

  const handleFinalizeShopping = () => {
    sounds.playClick();
    // Pick random emergency
    const randomEvent = EMERGENCY_EVENTS[Math.floor(Math.random() * EMERGENCY_EVENTS.length)];
    setSelectedEmergency(randomEvent);
    setShowEmergency(true);
  };

  const evaluateSimulation = () => {
    sounds.playVictory();
    // Calculate health, happiness, primer check
    const primerItems = BUDGET_SIMULATOR_ITEMS.filter(i => i.category === 'primer');
    const selectedPrimers = cart.filter(id => {
      const item = BUDGET_SIMULATOR_ITEMS.find(i => i.id === id);
      return item?.category === 'primer';
    });

    const primerRatio = selectedPrimers.length / primerItems.length;
    const canPayEmergency = remainingBudget >= selectedEmergency.requiredFund;

    let score = 0;
    let grade = 'B';
    let feedback = '';

    if (primerRatio >= 0.75 && canPayEmergency) {
      score = 95;
      grade = 'A+ (Manajer Anggaran Cerdas)';
      feedback = 'Luar biasa! Kamu sangat bijak menempatkan kebutuhan primer sebagai prioritas utama dan menyisihkan dana darurat untuk kebutuhan mendesak.';
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } else if (primerRatio >= 0.75 && !canPayEmergency) {
      score = 75;
      grade = 'B (Cukup Baik, Perlu Dana Darurat)';
      feedback = 'Kebutuhan pokok keluarga terpenuhi dengan baik, namun kamu lupa menyisihkan tabungan untuk kebutuhan mendesak (insidental) sehingga kewalahan saat ada musibah.';
    } else if (primerRatio < 0.75 && canPayEmergency) {
      score = 65;
      grade = 'C (Kurang Memperhatikan Kebutuhan Pokok)';
      feedback = 'Ada sisa uang untuk kejadian darurat, namun kebutuhan makan pokok atau listrik keluarga masih belum lengkap.';
    } else {
      score = 40;
      grade = 'D (Terjebak Konsumerisme / Kelangkaan)';
      feedback = 'Gawat! Dana habis untuk barang pelengkap atau barang mewah tersier, kebutuhan pokok tidak tercukupi, dan tidak punya uang untuk musibah darurat!';
    }

    setEvaluationResult({
      score,
      grade,
      feedback,
      canPayEmergency,
      primerCount: selectedPrimers.length,
      totalPrimer: primerItems.length,
      remainingBudget
    });
  };

  const resetGame = () => {
    sounds.playClick();
    setCart([]);
    setShowEmergency(false);
    setEvaluationResult(null);
  };

  const formatRupiah = (num: number) => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Hub Game
        </button>

        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg">
          Simulasi Kebutuhan Keluarga 3 Hari
        </span>
      </div>

      {/* Main Budget Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <Coins className="w-3.5 h-3.5" /> Skala Prioritas & Belanja Cerdas
          </div>
          <h3 className="text-2xl font-black text-slate-800">
            Tantangan Anggaran Rp 1.000.000
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kamu diamanahi mengelola anggaran belanja keluarga selama 3 hari. Pilah barang dengan cerdas antara <strong>Primer, Sekunder, dan Tersier</strong>. Waspadalah terhadap kejadian tak terduga!
          </p>
        </div>

        {/* Live Budget Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-900 text-white rounded-2xl">
          <div>
            <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Total Anggaran</span>
            <p className="text-lg font-black text-white">{formatRupiah(INITIAL_BUDGET)}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Total Dibelanjakan</span>
            <p className="text-lg font-black text-amber-400">{formatRupiah(totalSpent)}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Sisa / Dana Darurat</span>
            <p className={`text-lg font-black ${remainingBudget < 150000 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {formatRupiah(remainingBudget)}
            </p>
          </div>
        </div>

        {/* Shopping Items Grid */}
        {!evaluationResult && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Etalase Pilihan Kebutuhan:</span>
              <span className="text-slate-500">{cart.length} barang dipilih</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {BUDGET_SIMULATOR_ITEMS.map((item) => {
                const isSelected = cart.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/60 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                          item.category === 'primer'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.category === 'sekunder'
                            ? 'bg-teal-100 text-teal-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-xs leading-snug">{item.name}</h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black text-slate-900">{formatRupiah(item.cost)}</span>
                      <span className={`text-[11px] font-bold ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`}>
                        {isSelected ? '✓ Terpilih' : '+ Tambah'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Action */}
            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={handleFinalizeShopping}
                disabled={cart.length === 0}
                className={`px-6 py-3 rounded-2xl font-bold text-xs shadow transition flex items-center gap-2 ${
                  cart.length === 0
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Kunci Belanjaan & Masuk ke Hari ke-3</span>
              </button>
            </div>
          </div>
        )}

        {/* Emergency Modal or Screen */}
        {showEmergency && !evaluationResult && (
          <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-300 space-y-4 animate-in fade-in">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 animate-bounce" />
              <span>PERISTIWA DARURAT TIDAK TERDUGA DI HARI KE-3!</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-2">
              <h4 className="font-bold text-base text-slate-800">{selectedEmergency.title}</h4>
              <p className="text-xs text-slate-600">{selectedEmergency.desc}</p>
              <div className="pt-2 text-xs font-bold text-rose-700">
                Biaya Mendesak: {formatRupiah(selectedEmergency.requiredFund)}
              </div>
            </div>

            <div className="p-3 bg-white/70 rounded-xl text-xs space-y-1">
              <div className="flex justify-between">
                <span>Sisa Tabungan/Dana Belanja Anda:</span>
                <strong className="font-bold">{formatRupiah(remainingBudget)}</strong>
              </div>
              <div className="flex justify-between">
                <span>Status Kemampuan Membayar:</span>
                <strong className={remainingBudget >= selectedEmergency.requiredFund ? 'text-emerald-700' : 'text-rose-600'}>
                  {remainingBudget >= selectedEmergency.requiredFund ? '✅ Cukup & Aman' : '❌ Kurang Dana!'}
                </strong>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={evaluateSimulation}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow flex items-center gap-1.5"
              >
                <span>Lihat Hasil Evaluasi Keputusan Belanja</span>
              </button>
            </div>
          </div>
        )}

        {/* Final Evaluation Card */}
        {evaluationResult && (
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-5 animate-in zoom-in-95">
            <div className="text-center space-y-1">
              <span className="text-4xl block mb-2">📊</span>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Hasil Analisis Skala Prioritas</span>
              <h4 className="text-2xl font-black text-slate-900">{evaluationResult.grade}</h4>
              <p className="text-xs font-mono font-bold text-emerald-700">Skor Manajemen: {evaluationResult.score}/100</p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <strong>Catatan Evaluasi Guru:</strong>
              <p className="mt-1">{evaluationResult.feedback}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-bold text-[10px] uppercase">Kebutuhan Primer Terbeli</span>
                <span className="font-bold text-slate-800 text-sm">
                  {evaluationResult.primerCount} dari {evaluationResult.totalPrimer} Pokok
                </span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-bold text-[10px] uppercase">Ketahanan Dana Darurat</span>
                <span className={`font-bold text-sm ${evaluationResult.canPayEmergency ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {evaluationResult.canPayEmergency ? 'Berhasil Dilindungi' : 'Kekurangan Uang!'}
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={resetGame}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Ulangi Simulasi Belanja
              </button>
              <button
                onClick={onBack}
                className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs"
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
