import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Sparkles, 
  Clock, 
  Heart, 
  Users, 
  ShieldAlert, 
  TrendingUp, 
  Search, 
  Filter, 
  Check, 
  HelpCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { KEBUTUHAN_ITEMS, FAKTOR_KEBUTUHAN } from '../data/curriculumData';
import { KebutuhanItem } from '../types';
import { sounds } from '../utils/audio';

export const MateriSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'konsep' | 'klasifikasi' | 'faktor' | 'skala'>('konsep');
  const [filterDimension, setFilterDimension] = useState<'all' | 'intensitas' | 'waktu' | 'sifat' | 'subjek'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<KebutuhanItem | null>(null);

  // Compare tool state
  const [compareA, setCompareA] = useState<KebutuhanItem>(KEBUTUHAN_ITEMS[0]);
  const [compareB, setCompareB] = useState<KebutuhanItem>(KEBUTUHAN_ITEMS[9]);

  const handleSubTab = (tab: 'konsep' | 'klasifikasi' | 'faktor' | 'skala') => {
    sounds.playClick();
    setActiveSubTab(tab);
  };

  const filteredItems = KEBUTUHAN_ITEMS.filter(item => {
    const matchQuery = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchQuery;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" /> Content Knowledge (CK) • Bahan Ajar Resmi
            </div>
            <h2 className="text-2xl font-black text-slate-800">
              Materi & Konsep Kebutuhan Manusia
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Berdasarkan Buku IPS SMP Kelas VII Kurikulum Merdeka & Bahan Ajar Lampiran 1
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex flex-wrap gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {[
              { id: 'konsep', label: '1. Pengertian' },
              { id: 'klasifikasi', label: '2. 4 Klasifikasi' },
              { id: 'faktor', label: '3. 8 Faktor' },
              { id: 'skala', label: '4. Skala Prioritas' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => handleSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeSubTab === tab.id
                    ? 'bg-white text-emerald-800 shadow-sm'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SUB-TAB 1: KONSEP & PENGERTIAN */}
      {activeSubTab === 'konsep' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Definisi KBBI & Esensi */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                <span className="text-xl">📖</span>
                <h3>Pengertian Kebutuhan Manusia</h3>
              </div>

              <div className="p-4 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-xl space-y-2">
                <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  Berdasarkan Kamus Besar Bahasa Indonesia (KBBI), kata kebutuhan berasal dari akar kata <strong>"butuh"</strong> yang bermakna <em>"yang diperlukan atau yang dibutuhkan"</em>.
                </p>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  Secara ilmu ekonomi, <strong>Kebutuhan</strong> adalah suatu keinginan atas barang dan jasa yang menuntut adanya pemenuhan, di mana apabila barang dan jasa tersebut tidak terwujud atau tertunda, maka <strong>akan berpengaruh nyata terhadap kelangsungan hidup manusia</strong>.
                </p>
              </div>

              {/* Contoh Realita Modul */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" /> Contoh Nyata dalam Kehidupan:
                </p>
                <p className="leading-relaxed">
                  Seorang siswa yang kelaparan karena belum sarapan sejak pagi butuh makan nasi. Jika kebutuhan makan ini tidak dipenuhi, badannya menjadi lemas, sulit berkonsentrasi belajar, dan kesehatannya terancam.
                </p>
              </div>

              {/* Perbandingan Kebutuhan vs Keinginan */}
              <div className="pt-2">
                <h4 className="font-bold text-slate-800 text-sm mb-3">
                  Perbedaan Esensial: Kebutuhan (Needs) vs Keinginan (Wants)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="font-bold text-emerald-800 flex items-center gap-1.5 mb-1">
                      <Check className="w-4 h-4 text-emerald-600" /> Kebutuhan (Needs)
                    </div>
                    <ul className="space-y-1 text-slate-700">
                      <li>• Wajib dipenuhi demi kelangsungan hidup.</li>
                      <li>• Sifatnya mendasar, objektif, dan fungsional.</li>
                      <li>• Jika tidak dipenuhi dapat berakibat fatal.</li>
                      <li>• Contoh: Air bersih, beras, tempat berteduh.</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200">
                    <div className="font-bold text-rose-800 flex items-center gap-1.5 mb-1">
                      <HelpCircle className="w-4 h-4 text-rose-600" /> Keinginan (Wants)
                    </div>
                    <ul className="space-y-1 text-slate-700">
                      <li>• Hasrat tambahan yang dipengaruhi selera.</li>
                      <li>• Sifatnya subjektif dan dapat ditunda.</li>
                      <li>• Jika tidak terpenuhi hidup tetap berjalan normal.</li>
                      <li>• Contoh: Beli skin game baru, sepatu bermerek mahal.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sifat Kebutuhan & Kelangkaan */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-teal-800 to-emerald-900 text-white p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" /> Paradoks Ekonomi
                </div>
                <h4 className="text-xl font-black">
                  Kebutuhan Tidak Terbatas vs Alat Pemuas Terbatas
                </h4>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Seiring bertambahnya usia, kemajuan teknologi, dan pergaulan sosial, ragam kebutuhan manusia terus berkembang tiada batas.
                </p>
                <div className="p-3 bg-white/10 rounded-xl border border-white/20 text-xs text-emerald-100">
                  <strong className="text-amber-300 block mb-1">Pengorbanan Ekonomi:</strong>
                  Faktanya, alat pemuas kebutuhan (barang dan jasa) jumlahnya terbatas dan memerlukan pengorbanan (waktu, tenaga, atau uang) untuk memperolehnya.
                </div>
              </div>

              {/* Mini Quiz Cepat Pemahaman */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
                <span className="font-bold text-slate-800 flex items-center gap-1.5 text-xs">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Uji Pemahaman Cepat
                </span>
                <p className="text-slate-600">
                  Manakah di bawah ini yang paling tepat digolongkan sebagai <strong>kebutuhan pokok</strong> seorang siswa SMP?
                </p>
                <div className="space-y-1.5">
                  <button
                    onClick={() => { sounds.playWrong(); alert('Kurang tepat. Smartphone keluaran terbaru adalah keinginan/tersier.'); }}
                    className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    A. Smartphone flagship edisi terbaru
                  </button>
                  <button
                    onClick={() => { sounds.playCorrect(); alert('Tepat sekali! Buku tulis dan seragam merupakan kebutuhan pokok siswa belajar.'); }}
                    className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-emerald-100 hover:border-emerald-300 border border-slate-200 text-slate-700 font-medium"
                  >
                    B. Buku tulis, alat belajar, dan seragam sekolah
                  </button>
                  <button
                    onClick={() => { sounds.playWrong(); alert('Kurang tepat. Top-up voucher game adalah keinginan.'); }}
                    className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    C. Top-up voucher game online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: 4 KLASIFIKASI KEBUTUHAN */}
      {activeSubTab === 'klasifikasi' && (
        <div className="space-y-6">
          {/* 4 Pilar Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 bg-white rounded-2xl border border-emerald-300 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-2">
                1
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Tingkat Kepentingan</h4>
              <p className="text-[11px] text-slate-500 mt-1">Primer, Sekunder, Tersier</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-teal-300 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold mb-2">
                2
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Waktu Pemenuhan</h4>
              <p className="text-[11px] text-slate-500 mt-1">Sekarang, Masa Depan, Mendesak, Sepanjang Waktu</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-cyan-300 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold mb-2">
                3
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Sifat Pemenuhan</h4>
              <p className="text-[11px] text-slate-500 mt-1">Jasmani (Fisik) & Rohani (Jiwa)</p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-blue-300 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-2">
                4
              </div>
              <h4 className="font-bold text-slate-800 text-sm">Subjek yang Butuh</h4>
              <p className="text-[11px] text-slate-500 mt-1">Individu (Pribadi) & Kelompok (Kolektif)</p>
            </div>
          </div>

          {/* Penjelasan Komprehensif 4 Dimensi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Intensitas */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2 text-emerald-800">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">1</span>
                Kebutuhan Berdasarkan Tingkat Kepentingan (Intensitas)
              </h4>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <strong className="text-emerald-900 block font-bold">a. Kebutuhan Primer (Utama):</strong>
                  Kebutuhan yang harus dipenuhi oleh manusia. Apabila tidak dipenuhi atau ditangguhkan akan mengancam kelangsungan hidupnya.
                  <span className="block text-emerald-800 mt-1 font-medium">Contoh: Pangan (nasi), Sandang (pakaian sopan), Papan (tempat tinggal).</span>
                </div>

                <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
                  <strong className="text-teal-900 block font-bold">b. Kebutuhan Sekunder (Pelengkap):</strong>
                  Kebutuhan pelengkap yang dipenuhi setelah kebutuhan primer terpenuhi. Bila belum terpenuhi tidak akan mengancam hidup.
                  <span className="block text-teal-800 mt-1 font-medium">Contoh: Televisi, lemari, radio, sepeda, buku bacaan.</span>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <strong className="text-amber-900 block font-bold">c. Kebutuhan Tersier (Mewah):</strong>
                  Kebutuhan terhadap barang mewah untuk menaikkan prestise atau status sosial di mata masyarakat.
                  <span className="block text-amber-800 mt-1 font-medium">Contoh: Mobil mewah sport, tas branded impor, perhiasan emas berlian.</span>
                </div>
              </div>
            </div>

            {/* 2. Waktu Pemenuhan */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2 text-teal-800">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-black">2</span>
                Kebutuhan Berdasarkan Waktu Pemenuhan
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 font-bold">a. Kebutuhan Sekarang:</strong>
                  Harus dipenuhi saat itu juga dan tidak bisa ditunda.
                  <span className="block text-slate-600 mt-0.5">Contoh: Obat saat sakit darurat, petugas pemadam kebakaran saat api berkobar.</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 font-bold">b. Kebutuhan Masa Mendatang:</strong>
                  Waktu pemenuhannya direncanakan untuk masa depan, dapat dipersiapkan dari sekarang.
                  <span className="block text-slate-600 mt-0.5">Contoh: Tabungan haji, dana pendidikan kuliah anak.</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 font-bold">c. Kebutuhan Mendesak:</strong>
                  Terjadi secara tiba-tiba dan insidental, memerlukan dana darurat segera.
                  <span className="block text-slate-600 mt-0.5">Contoh: Bantuan sembako dan perahu karet saat musibah banjir bandang.</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 font-bold">d. Kebutuhan Sepanjang Waktu:</strong>
                  Dipenuhi terus menerus sepanjang hayat sampai tidak dibutuhkan lagi.
                  <span className="block text-slate-600 mt-0.5">Contoh: Menuntut ilmu dan pendidikan karakter seumur hidup.</span>
                </div>
              </div>
            </div>

            {/* 3. Sifat */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2 text-cyan-800">
                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xs font-black">3</span>
                Kebutuhan Berdasarkan Sifat
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-200">
                  <strong className="text-cyan-900 block font-bold">a. Kebutuhan Jasmani (Fisik):</strong>
                  Memberikan kepuasan kepada badan dan fisik manusia.
                  <span className="block text-cyan-800 mt-1 font-medium">Contoh: Makan, minum, pakaian, olahraga lari pagi.</span>
                </div>

                <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200">
                  <strong className="text-indigo-900 block font-bold">b. Kebutuhan Rohani (Batin/Jiwa):</strong>
                  Memberikan kepuasan batin, menjaga kesehatan mental, dan ketenteraman jiwa.
                  <span className="block text-indigo-800 mt-1 font-medium">Contoh: Ibadah doa/kajian rohani, mendengarkan musik, rekreasi setelah bekerja.</span>
                </div>
              </div>
            </div>

            {/* 4. Subjek */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2 text-blue-800">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-black">4</span>
                Kebutuhan Berdasarkan Subjek
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <strong className="text-blue-900 block font-bold">a. Kebutuhan Individu (Perorangan):</strong>
                  Kepuasan dan tujuannya dirasakan oleh diri sendiri secara pribadi.
                  <span className="block text-blue-800 mt-1 font-medium">Contoh: Makanan bagi orang lapar, kacamata minus bagi penderita rabun jauh.</span>
                </div>

                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
                  <strong className="text-purple-900 block font-bold">b. Kebutuhan Kelompok (Kolektif / Sosial):</strong>
                  Dirasakan oleh masyarakat luas dan dipenuhi secara bersama-sama (gotong royong).
                  <span className="block text-purple-800 mt-1 font-medium">Contoh: Pembangunan jembatan antar desa, rumah ibadah, jalan raya, rumah sakit umum.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Item Explorer */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-bold text-slate-800 text-base flex items-center gap-2">
                  <Search className="w-4 h-4 text-emerald-600" />
                  Eksplorasi Barang & Klasifikasinya ({filteredItems.length} Item)
                </h4>
                <p className="text-xs text-slate-500">Klik salah satu barang untuk melihat rincian 4 dimensinya</p>
              </div>

              <input
                type="text"
                placeholder="Cari contoh barang..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedItem(item);
                  }}
                  className={`p-3 rounded-xl border cursor-pointer transition-all text-left flex flex-col justify-between ${
                    selectedItem?.id === item.id
                      ? 'border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-200'
                      : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-3xl mb-1.5">{item.icon}</div>
                    <h5 className="font-bold text-slate-800 text-xs leading-snug">{item.nama}</h5>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">{item.deskripsi}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                      item.intensitas === 'primer'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.intensitas === 'sekunder'
                        ? 'bg-teal-100 text-teal-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.intensitas}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium capitalize">
                      {item.subjek}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Detail Banner */}
            {selectedItem && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-emerald-950 text-white space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedItem.icon}</span>
                    <div>
                      <h5 className="font-bold text-base text-white">{selectedItem.nama}</h5>
                      <p className="text-xs text-emerald-200">{selectedItem.contohRealita}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-xs text-slate-400 hover:text-white px-2 py-1 bg-white/10 rounded"
                  >
                    Tutup
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <span className="text-[10px] uppercase text-emerald-300 block font-bold">1. Intensitas</span>
                    <span className="font-bold capitalize text-white">{selectedItem.intensitas}</span>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg">
                    <span className="text-[10px] uppercase text-emerald-300 block font-bold">2. Waktu</span>
                    <span className="font-bold capitalize text-white">{selectedItem.waktu.replace('-', ' ')}</span>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg">
                    <span className="text-[10px] uppercase text-emerald-300 block font-bold">3. Sifat</span>
                    <span className="font-bold capitalize text-white">{selectedItem.sifat}</span>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg">
                    <span className="text-[10px] uppercase text-emerald-300 block font-bold">4. Subjek</span>
                    <span className="font-bold capitalize text-white">{selectedItem.subjek}</span>
                  </div>
                </div>

                <p className="text-xs text-emerald-100 bg-white/5 p-2.5 rounded-lg border border-white/10">
                  <strong>Analisis Modul:</strong> {selectedItem.alasan}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: 8 FAKTOR YANG MEMPENGARUHI KEBUTUHAN */}
      {activeSubTab === 'faktor' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-800">
                8 Faktor yang Mempengaruhi Perbedaan Kebutuhan Manusia
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Mengapa kebutuhan setiap orang berbeda? Modul Ajar merumuskan 8 faktor determinan dalam kehidupan bermasyarakat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {FAKTOR_KEBUTUHAN.map((f, idx) => (
                <div
                  key={f.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-emerald-50/30 hover:border-emerald-300 transition space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-2xl flex items-center justify-center shadow-xs border border-slate-200">
                      {f.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                        Faktor #{idx + 1}
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm">{f.nama}</h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pl-1">
                    {f.penjelasan}
                  </p>

                  <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700">
                    <strong className="text-emerald-800 block text-[11px] mb-0.5">Kasus Riil:</strong>
                    {f.contohKasus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: SKALA PRIORITAS & RELATIVITAS */}
      {activeSubTab === 'skala' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Konsep Skala Prioritas */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h3>Strategi Menyusun Skala Prioritas</h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Karena sumber daya ekonomi terbatas, seseorang wajib membuat urutan pemenuhan kebutuhan dari yang <strong>paling mendesak dan pokok</strong> hingga yang <strong>dapat ditunda</strong>.
              </p>

              {/* Matriks Piramida Prioritas */}
              <div className="space-y-2 pt-2">
                <div className="p-4 bg-emerald-600 text-white rounded-xl shadow-xs">
                  <div className="flex items-center justify-between font-bold text-sm">
                    <span>1. Prioritas Utama (Mutlak & Mendesak)</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">Wajib Dipenuhi Sekarang</span>
                  </div>
                  <p className="text-xs text-emerald-100 mt-1">
                    Kebutuhan primer dan mendesak: Pangan sehat, obat darurat saat sakit, seragam sekolah, tempat tinggal layak.
                  </p>
                </div>

                <div className="p-4 bg-teal-600 text-white rounded-xl shadow-xs">
                  <div className="flex items-center justify-between font-bold text-sm">
                    <span>2. Prioritas Menengah (Penting tapi Dapat Dijadwalkan)</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">Kebutuhan Sekunder</span>
                  </div>
                  <p className="text-xs text-teal-100 mt-1">
                    Peralatan belajar pendukung, kipas angin, sarana olahraga, tabungan masa depan.
                  </p>
                </div>

                <div className="p-4 bg-amber-600 text-white rounded-xl shadow-xs">
                  <div className="flex items-center justify-between font-bold text-sm">
                    <span>3. Prioritas Terakhir (Bila Ada Dana Sisa Lebih)</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">Kebutuhan Tersier / Keinginan</span>
                  </div>
                  <p className="text-xs text-amber-100 mt-1">
                    Barang mewah, aksesori prestise, koleksi perhiasan, ponsel spek tertinggi edisi terbatas.
                  </p>
                </div>
              </div>
            </div>

            {/* Sifat Relatif Kebutuhan */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5 text-amber-900">
                <Lightbulb className="w-4 h-4 text-amber-600" /> Sifat Relatif Kebutuhan
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Suatu barang dapat menjadi <strong>primer</strong> bagi seseorang, tetapi berstatus <strong>tersier</strong> bagi orang lain tergantung profesi dan kepentingannya.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-800 block">🚗 Mobil:</strong>
                  <p className="text-slate-600 mt-0.5">
                    <strong>Primer</strong> bagi pengemudi taksi online untuk menafkahi keluarga, tetapi <strong>tersier/mewah</strong> bagi siswa SMP.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-800 block">🌾 Cangkul & Pupuk:</strong>
                  <p className="text-slate-600 mt-0.5">
                    <strong>Primer</strong> bagi petani di sawah, namun tidak dibutuhkan oleh guru atau dokter di perkotaan.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-800 block">💻 Laptop Spek Tinggi:</strong>
                  <p className="text-slate-600 mt-0.5">
                    <strong>Primer</strong> bagi programmer atau arsitek digital, namun sekunder bagi anak balita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
