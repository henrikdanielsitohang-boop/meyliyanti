import React, { useState } from 'react';
import { FileText, Plus, Trash2, Printer, CheckCircle2, Download, Users, Lightbulb, Save } from 'lucide-react';
import { LKPDData } from '../types';
import { sounds } from '../utils/audio';

export const LKPDDigital: React.FC = () => {
  const [lkpd, setLkpd] = useState<LKPDData>({
    namaKelompok: 'Kelompok 1 (Kebutuhan Pokok)',
    kelas: 'VII-A',
    tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    ketua: 'Ahmad Faiz',
    anggota: ['Ahmad Faiz', 'Nabila Putri', 'Budi Santoso', 'Siti Rahma', 'Kevin Pratama'],
    daftarKebutuhan: [
      { nama: 'Ahmad Faiz', kebutuhan: 'Makan nasi sayur telur & pulpen tulis baru', kategori: 'primer', pengorbanan: 'Uang Rp 25.000 & tenaga memasak di rumah' },
      { nama: 'Nabila Putri', kebutuhan: 'Beli paket kuota belajar & kaos kaki putih', kategori: 'sekunder', pengorbanan: 'Menyisihkan uang saku Rp 30.000' },
      { nama: 'Budi Santoso', kebutuhan: 'Membeli obat flu di apotek & beras keluarga', kategori: 'primer', pengorbanan: 'Uang saku dan belanja Rp 75.000' },
      { nama: 'Siti Rahma', kebutuhan: 'Buku gambar krayon & jilbab seragam baru', kategori: 'sekunder', pengorbanan: 'Menabung selama 1 minggu Rp 45.000' }
    ],
    analisisPerbedaan: 'Terjadi perbedaan kebutuhan di antara anggota kelompok kami karena latar belakang keluarga, kondisi kesehatan (ada yang sedang sakit flu sehingga butuh obat segera), jenis kelamin (kebutuhan jilbab), serta selera dan peran masing-masing anggota berbeda.',
    faktorPenyebab: ['Jenis Kelamin', 'Kondisi Kesehatan', 'Tingkat Pendapatan Keluarga', 'Tingkat Pendidikan'],
    gagasanSolusi: 'Keluarga dan siswa harus selalu menyusun Skala Prioritas: mendahulukan makanan bergizi, obat saat darurat, dan seragam sekolah sebelum membeli barang pelengkap atau keinginan semata.',
    kesimpulanKelompok: 'Kebutuhan manusia beraneka ragam dan terus bertambah, sedangkan uang atau alat pemuasnya terbatas. Oleh sebab itu, pemenuhan kebutuhan menuntut pengorbanan ekonomi dan pengelolaan prioritas yang bijak.'
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddRow = () => {
    sounds.playClick();
    setLkpd(prev => ({
      ...prev,
      daftarKebutuhan: [
        ...prev.daftarKebutuhan,
        { nama: '', kebutuhan: '', kategori: 'primer', pengorbanan: '' }
      ]
    }));
  };

  const handleRemoveRow = (idx: number) => {
    sounds.playClick();
    setLkpd(prev => ({
      ...prev,
      daftarKebutuhan: prev.daftarKebutuhan.filter((_, i) => i !== idx)
    }));
  };

  const handleUpdateRow = (idx: number, field: string, val: string) => {
    setLkpd(prev => {
      const updated = [...prev.daftarKebutuhan];
      updated[idx] = { ...updated[idx], [field]: val };
      return { ...prev, daftarKebutuhan: updated };
    });
  };

  const handleSave = () => {
    sounds.playCorrect();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" /> Lampiran 2 Modul Ajar • Penyelidikan PBL (Sintak 2 - 4)
            </div>
            <h2 className="text-2xl font-black text-slate-800">
              Lembar Kegiatan Peserta Didik (LKPD Digital)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Topik: Aktivitas Memenuhi Kebutuhan • Alokasi Waktu: 30 Menit • Kolaboratif Kelompok
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow flex items-center gap-1.5 transition"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Jawaban</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-300 flex items-center gap-1.5 transition"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / PDF</span>
            </button>
          </div>
        </div>

        {savedSuccess && (
          <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Laporan LKPD Digital berhasil disimpan secara lokal! Siap untuk dipresentasikan di depan kelas.
          </div>
        )}
      </div>

      {/* Identitas LKPD Paper Card (Formatted Print-friendly) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-8 print:p-0 print:border-none print:shadow-none">
        {/* Paper Header */}
        <div className="text-center pb-6 border-b-2 border-slate-800 space-y-1">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            SMP SWASTA PERSIAPAN • TAHUN AJARAN 2026/2027
          </p>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            LEMBAR KEGIATAN PESERTA DIDIK (LKPD)
          </h3>
          <p className="text-xs font-semibold text-slate-700">
            Materi: Aktivitas Memenuhi Kebutuhan Manusia • Model Problem Based Learning (PBL)
          </p>
        </div>

        {/* Identity Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Nama Kelompok:</label>
            <input
              type="text"
              value={lkpd.namaKelompok}
              onChange={(e) => setLkpd({ ...lkpd, namaKelompok: e.target.value })}
              className="w-full p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-purple-500 font-medium text-xs"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Kelas / Fase:</label>
            <input
              type="text"
              value={lkpd.kelas}
              onChange={(e) => setLkpd({ ...lkpd, kelas: e.target.value })}
              className="w-full p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-purple-500 font-medium text-xs"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Hari / Tanggal:</label>
            <input
              type="text"
              value={lkpd.tanggal}
              onChange={(e) => setLkpd({ ...lkpd, tanggal: e.target.value })}
              className="w-full p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-purple-500 font-medium text-xs"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Ketua Kelompok:</label>
            <input
              type="text"
              value={lkpd.ketua}
              onChange={(e) => setLkpd({ ...lkpd, ketua: e.target.value })}
              className="w-full p-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-purple-500 font-medium text-xs"
            />
          </div>

          <div className="sm:col-span-2 md:col-span-4 pt-1">
            <label className="font-bold text-slate-700 block mb-1">Anggota Kelompok (4-5 Orang):</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {lkpd.anggota.map((ang, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Anggota ${i + 1}`}
                  value={ang}
                  onChange={(e) => {
                    const copy = [...lkpd.anggota];
                    copy[i] = e.target.value;
                    setLkpd({ ...lkpd, anggota: copy });
                  }}
                  className="p-2 bg-white rounded-lg border border-slate-300 font-medium text-xs"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Petunjuk Belajar */}
        <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-xs text-purple-950 space-y-1">
          <strong className="font-bold block text-purple-900">📌 Petunjuk Pengerjaan LKPD (Sintak 3):</strong>
          <ol className="list-decimal list-inside space-y-1 text-purple-900/90 pl-1">
            <li>Amatilah tayangan video YouTube, PPT Interaktif, dan modul ajar yang telah disajikan.</li>
            <li>Diskusikan bersama anggota kelompokmu mengenai kebutuhan anggota keluarga selama 3 hari terakhir.</li>
            <li>Tuliskan kebutuhan apa saja yang dipenuhi beserta pengorbanan ekonomi yang dilakukan.</li>
            <li>Bandingkan mengapa terjadi perbedaan kebutuhan di antara anggota kelompok kalian.</li>
            <li>Presentasikan hasil diskusi kelompok di depan kelas pada Sintak 4!</li>
          </ol>
        </div>

        {/* Kegiatan 2 Bagian 1: Tabel Kebutuhan 3 Hari Terakhir */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] uppercase font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                Pertanyaan 1 (Halaman 17 Modul Ajar)
              </span>
              <h4 className="font-extrabold text-slate-800 text-sm mt-1">
                Daftar Kebutuhan Anggota Selama 3 Hari Terakhir & Pengorbanan yang Diperlukan:
              </h4>
            </div>
            <button
              onClick={handleAddRow}
              className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" /> Tambah Baris
            </button>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-3 w-10 text-center">No</th>
                  <th className="p-3 w-40">Nama Anggota</th>
                  <th className="p-3">Kebutuhan yang Dipenuhi (3 Hari Terakhir)</th>
                  <th className="p-3 w-32">Kategori</th>
                  <th className="p-3">Pengorbanan Ekonomi yang Diperlukan</th>
                  <th className="p-3 w-12 text-center print:hidden">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {lkpd.daftarKebutuhan.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-3 text-center font-bold text-slate-500">{idx + 1}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={item.nama}
                        onChange={(e) => handleUpdateRow(idx, 'nama', e.target.value)}
                        placeholder="Nama siswa"
                        className="w-full p-1.5 rounded border border-slate-200 focus:ring-1 focus:ring-purple-500 font-medium text-xs"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={item.kebutuhan}
                        onChange={(e) => handleUpdateRow(idx, 'kebutuhan', e.target.value)}
                        placeholder="Contoh: Beras, obat dokter, kuota internet..."
                        className="w-full p-1.5 rounded border border-slate-200 focus:ring-1 focus:ring-purple-500 text-xs"
                      />
                    </td>
                    <td className="p-2">
                      <select
                        value={item.kategori}
                        onChange={(e) => handleUpdateRow(idx, 'kategori', e.target.value)}
                        className="w-full p-1.5 rounded border border-slate-200 focus:ring-1 focus:ring-purple-500 font-bold capitalize text-xs bg-white"
                      >
                        <option value="primer">Primer (Pokok)</option>
                        <option value="sekunder">Sekunder (Pelengkap)</option>
                        <option value="tersier">Tersier (Mewah)</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={item.pengorbanan}
                        onChange={(e) => handleUpdateRow(idx, 'pengorbanan', e.target.value)}
                        placeholder="Uang yang dikeluarkan, kerja keras, menabung..."
                        className="w-full p-1.5 rounded border border-slate-200 focus:ring-1 focus:ring-purple-500 text-xs"
                      />
                    </td>
                    <td className="p-2 text-center print:hidden">
                      <button
                        onClick={() => handleRemoveRow(idx)}
                        className="p-1.5 text-rose-500 hover:bg-rose-50 rounded"
                        title="Hapus Baris"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kegiatan 2 Bagian 2: Analisis Perbedaan Kebutuhan */}
        <div className="space-y-3">
          <span className="text-[11px] uppercase font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
            Pertanyaan 2 (Halaman 17 Modul Ajar)
          </span>
          <h4 className="font-extrabold text-slate-800 text-sm">
            Bandingkan kebutuhan masing-masing anggota. Mengapa terjadi perbedaan kebutuhan dalam kelompok? Apa faktor yang menyebabkannya?
          </h4>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">
              A. Analisis Mengapa Terjadi Perbedaan:
            </label>
            <textarea
              rows={3}
              value={lkpd.analisisPerbedaan}
              onChange={(e) => setLkpd({ ...lkpd, analisisPerbedaan: e.target.value })}
              placeholder="Jelaskan alasan terjadinya perbedaan kebutuhan antar anggota kelompok..."
              className="w-full p-3 rounded-xl border border-slate-300 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">
              B. Faktor-faktor yang Mempengaruhi (Tuliskan faktor penentunya):
            </label>
            <input
              type="text"
              value={lkpd.faktorPenyebab.join(', ')}
              onChange={(e) => setLkpd({ ...lkpd, faktorPenyebab: e.target.value.split(', ') })}
              placeholder="Contoh: Jenis Kelamin, Tingkat Pendapatan, Lingkungan, Status Kesehatan..."
              className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Kegiatan 2 Bagian 3: Kesimpulan & Gagasan Upaya Pemenuhan */}
        <div className="space-y-3">
          <span className="text-[11px] uppercase font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
            Pertanyaan 3 & Kesimpulan Kelompok (Halaman 17)
          </span>
          <h4 className="font-extrabold text-slate-800 text-sm">
            Gagasan Solusi Pemenuhan Kebutuhan & Kesimpulan Akhir (Siap Dipresentasikan di Depan Kelas):
          </h4>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">
              Gagasan Solusi / Skala Prioritas Kelompok:
            </label>
            <textarea
              rows={2}
              value={lkpd.gagasanSolusi}
              onChange={(e) => setLkpd({ ...lkpd, gagasanSolusi: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">
              Kesimpulan Akhir Diskusi Kelompok:
            </label>
            <textarea
              rows={3}
              value={lkpd.kesimpulanKelompok}
              onChange={(e) => setLkpd({ ...lkpd, kesimpulanKelompok: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Tanda Tangan & Rubrik Penilaian Guru */}
        <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs text-center">
          <div className="space-y-16">
            <p className="font-bold text-slate-700">Ketua Kelompok,</p>
            <div>
              <p className="font-bold underline text-slate-900">{lkpd.ketua || '..........................'}</p>
              <p className="text-slate-500 text-[10px]">NISN Siswa</p>
            </div>
          </div>

          <div className="space-y-16">
            <p className="font-bold text-slate-700">Guru Mata Pelajaran IPS,</p>
            <div>
              <p className="font-bold underline text-slate-900">Mey Liyanti Sisca, S.Pd.</p>
              <p className="text-slate-500 text-[10px]">SMP Swasta Persiapan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
