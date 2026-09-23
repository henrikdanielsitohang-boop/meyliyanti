export type TabType = 
  | 'beranda'
  | 'pbl-alur'
  | 'materi'
  | 'games'
  | 'lkpd'
  | 'evaluasi'
  | 'refleksi';

export type GameType = 'sort' | 'budget' | 'detective' | null;

export interface KebutuhanItem {
  id: string;
  nama: string;
  icon: string;
  deskripsi: string;
  intensitas: 'primer' | 'sekunder' | 'tersier';
  waktu: 'sekarang' | 'masa-depan' | 'mendesak' | 'sepanjang-waktu';
  sifat: 'jasmani' | 'rohani';
  subjek: 'individu' | 'kelompok';
  contohRealita: string;
  alasan: string;
}

export interface FactorItem {
  id: string;
  nama: string;
  icon: string;
  penjelasan: string;
  contohKasus: string;
}

export interface QuizQuestion {
  id: number;
  pertanyaan: string;
  pilihan: {
    key: 'a' | 'b' | 'c' | 'd';
    teks: string;
  }[];
  kunci: 'a' | 'b' | 'c' | 'd';
  pembahasan: string;
}

export interface EssayQuestion {
  id: number;
  pertanyaan: string;
  rubrik: string[];
  kataKunci: string[];
  kunciContoh: string;
}

export interface AnggotaKebutuhan {
  nama: string;
  kebutuhan: string;
  kategori: 'primer' | 'sekunder' | 'tersier';
  pengorbanan: string;
}

export interface LKPDData {
  namaKelompok: string;
  kelas: string;
  tanggal: string;
  ketua: string;
  anggota: string[];
  daftarKebutuhan: AnggotaKebutuhan[];
  analisisPerbedaan: string;
  faktorPenyebab: string[];
  gagasanSolusi: string;
  kesimpulanKelompok: string;
}

export interface RefleksiSiswaData {
  materiSulit: string;
  upayaPahami: string;
  apakahMembantu: string;
  nilaiHarapan: string;
  harapanSelanjutnya: string;
}

export interface RefleksiGuruData {
  sesuaiRencana: boolean;
  pblSesuai: boolean;
  siswaSenangAktif: boolean;
  siswaMengerti: boolean;
  tindakLanjut: string;
  catatanGuru: string;
}
