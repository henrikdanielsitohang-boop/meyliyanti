import { KebutuhanItem, FactorItem, QuizQuestion, EssayQuestion } from '../types';

export const MODUL_INFO = {
  mataPelajaran: 'Ilmu Pengetahuan Sosial (IPS)',
  satuanPendidikan: 'SMP Swasta Persiapan',
  penyusun: 'Mey Liyanti Sisca, S.Pd.',
  kepalaSekolah: 'Jumpa Sagala, S.Pd.',
  tahunAjaran: '2026 / 2027',
  fase: 'D (Kelas VII / Ganjil)',
  topik: 'Aktivitas Memenuhi Kebutuhan',
  alokasiWaktu: '2 x 40 Menit (2 JP)',
  modelPembelajaran: 'Problem Based Learning (PBL) berbantuan TPACK',
  targetPesertaDidik: 'Peserta Didik Reguler (20 Siswa / 4-5 Kelompok)',
  kktp: 75,
  capaianPembelajaran:
    'Peserta didik mampu memahami pengertian kebutuhan, mengidentifikasi jenis-jenis kebutuhan, serta menyebutkan faktor-faktor yang mempengaruhi kebutuhan manusia dalam kehidupan sehari-hari.',
  tujuanPembelajaran: [
    'Melalui model Problem Based Learning berbantuan TPACK, peserta didik dapat memahami konsep dan pengertian kebutuhan manusia secara tepat.',
    'Peserta didik dapat menganalisis serta membedakan jenis-jenis kebutuhan berdasarkan tingkat kepentingan, waktu, sifat, dan subjeknya.',
    'Peserta didik dapat mengidentifikasi faktor-faktor yang mempengaruhi kebutuhan manusia serta membuat gagasan upaya pemenuhannya.'
  ],
  iptp: 'Membuat dan mengembangkan gagasan/laporan kolaboratif dalam upaya memenuhi kebutuhan manusia menggunakan media digital maupun konvensional.',
  profilPancasila: [
    { title: 'Beriman & Bertaqwa', desc: 'Memulai dan mengakhiri pembelajaran dengan doa, mensyukuri nikmat rezeki.' },
    { title: 'Berkebhinekaan Global', desc: 'Menghargai keragaman kebutuhan masyarakat di berbagai latar geografis & sosial.' },
    { title: 'Gotong Royong', desc: 'Bekerja sama dalam kelompok menyelesaikan LKPD digital dan simulasi kasus.' },
    { title: 'Mandiri', desc: 'Bertanggung jawab dalam tugas individu dan evaluasi mandiri (post-test).' },
    { title: 'Bernalar Kritis', desc: 'Menganalisis skala prioritas antara kebutuhan primer, sekunder, dan tersier.' }
  ],
  tpack: {
    ck: 'Content Knowledge: Konsep kebutuhan manusia (KBBI), 4 dimensi klasifikasi kebutuhan (intensitas, waktu, sifat, subjek), 8 faktor penentu kebutuhan, konsep kelangkaan dan skala prioritas.',
    pk: 'Pedagogical Knowledge: Model Problem Based Learning (PBL) 5 Sintak, metode diskusi kolaboratif, tanya jawab stimulus, simulasi peran dan pengorganisasian kelompok.',
    tk: 'Technological Knowledge: Media interaktif digital, simulator penganggaran uang pintar, game pilah kilat, LKPD digital realtime, video kasus, audio feedback dan visualisasi infografis.'
  }
};

export const SINTAKS_PBL = [
  {
    step: 1,
    nama: 'Orientasi Peserta Didik pada Masalah',
    waktu: '15 Menit',
    integrasi: 'Technological & Content Integration (TK + CK)',
    fokusPancasila: 'Bernalar Kritis',
    deskripsiGuru: 'Menampilkan video/studi kasus nyata tentang pasar tradisional, melonjaknya harga pangan, dan dilema keluarga mengalokasikan gaji bulanan.',
    aktivitasSiswa: 'Mengamati tayangan dengan fokus, merumuskan pertanyaan: mengapa kebutuhan manusia tak terbatas sedangkan alat pemuasnya terbatas?',
    pertanyaanKunci: [
      'Apakah kalian sering membeli barang kebutuhan?',
      'Apakah kalian pernah ke pasar atau membantu orang tua belanja?',
      'Apa yang terjadi jika uang belanja terbatas tetapi kebutuhan sangat banyak?'
    ]
  },
  {
    step: 2,
    nama: 'Membentuk & Membagi Kelompok Peserta Didik',
    waktu: '10 Menit',
    integrasi: 'Collaborative Learning & Pedagogical (PK)',
    fokusPancasila: 'Gotong Royong & Demokrasi',
    deskripsiGuru: 'Membagi 20 peserta didik ke dalam 4-5 kelompok secara heterogen, membagikan lembar LKPD digital, dan menjelaskan alur penyelidikan.',
    aktivitasSiswa: 'Menentukan nama kelompok dan ketua tim, membaca petunjuk lembar kerja, dan membagi tugas antaranggota.',
    pertanyaanKunci: [
      'Bagaimana cara tim kalian membagi peran agar analisis data 3 hari terakhir selesai tepat waktu?'
    ]
  },
  {
    step: 3,
    nama: 'Melakukan Penyelidikan / Penelusuran Masalah',
    waktu: '25 Menit',
    integrasi: 'Digital Investigation & TPACK Interaction (TK + PK)',
    fokusPancasila: 'Mandiri & Gotong Royong',
    deskripsiGuru: 'Berkeliling memantau jalannya diskusi kelompok, membimbing tim yang kesulitan, serta melakukan penilaian sikap secara formatif.',
    aktivitasSiswa: 'Mencatat & menganalisis kebutuhan anggota keluarga masing-masing selama 3 hari terakhir, menghitung pengorbanan ekonominya, dan menelaah faktor perbedaannya melalui fitur LKPD digital & buku IPS.',
    pertanyaanKunci: [
      'Mengapa pengeluaran keluarga si A berbeda dengan si B? Faktor apa yang mempengaruhinya?'
    ]
  },
  {
    step: 4,
    nama: 'Menyusun Hasil Karya & Mempresentasikannya',
    waktu: '15 Menit',
    integrasi: 'Communication & Creative Technology (TK + CK)',
    fokusPancasila: 'Keterampilan Komunikasi & Percaya Diri',
    deskripsiGuru: 'Memandu sesi presentasi kelompok di depan kelas, mengatur waktu presentasi dan memberi giliran kelompok lain untuk menanggapi.',
    aktivitasSiswa: 'Perwakilan kelompok mempresentasikan ringkasan hasil analisis LKPD digital di depan kelas, menjawab pertanyaan, dan menerima saran.',
    pertanyaanKunci: [
      'Bagaimana skala prioritas yang disarankan kelompokmu agar tidak terjadi kelangkaan keuangan keluarga?'
    ]
  },
  {
    step: 5,
    nama: 'Evaluasi & Refleksi Pemecahan Masalah',
    waktu: '15 Menit',
    integrasi: 'Assessment & Feedback Reinforcement (PK + CK + TK)',
    fokusPancasila: 'Bernalar Kritis & Integritas',
    deskripsiGuru: 'Memberikan penguatan konsep komprehensif, mengapresiasi kelompok, memandu perumusan kesimpulan, serta membagikan kuis evaluasi tertulis/digital.',
    aktivitasSiswa: 'Mengerjakan tes evaluasi post-test secara mandiri, melakukan refleksi pembelajaran, dan menyimpulkan esensi kebutuhan manusia.',
    pertanyaanKunci: [
      'Apa perbedaan mendasar antara kebutuhan (need) dan keinginan (want)?'
    ]
  }
];

export const KEBUTUHAN_ITEMS: KebutuhanItem[] = [
  {
    id: 'n1',
    nama: 'Beras & Nasi Sehari-hari',
    icon: '🍚',
    deskripsi: 'Makanan pokok sumber karbohidrat utama tubuh manusia.',
    intensitas: 'primer',
    waktu: 'sekarang',
    sifat: 'jasmani',
    subjek: 'individu',
    contohRealita: 'Makan 3 kali sehari bagi setiap orang.',
    alasan: 'Jika tidak dipenuhi segera, kesehatan terganggu bahkan mengancam kelangsungan hidup.'
  },
  {
    id: 'n2',
    nama: 'Pakaian Bersih & Seragam Sekolah',
    icon: '👕',
    deskripsi: 'Pakaian pelindung tubuh dari panas/dingin dan norma sosial kesopanan.',
    intensitas: 'primer',
    waktu: 'sekarang',
    sifat: 'jasmani',
    subjek: 'individu',
    contohRealita: 'Siswa memakai seragam OSIS dan baju harian di rumah.',
    alasan: 'Kebutuhan sandang mutlak diperlukan untuk beraktivitas sosial dan menjaga tubuh.'
  },
  {
    id: 'n3',
    nama: 'Rumah / Tempat Tinggal',
    icon: '🏠',
    deskripsi: 'Tempat berlindung keluarga dari cuaca, bahaya, dan tempat beristirahat.',
    intensitas: 'primer',
    waktu: 'sekarang',
    sifat: 'jasmani',
    subjek: 'kelompok',
    contohRealita: 'Rumah tinggal keluarga atau perumahan rakyat yang dibangun pemerintah.',
    alasan: 'Papan adalah pilar primer bagi keluarga untuk hidup dengan aman dan layak.'
  },
  {
    id: 'n4',
    nama: 'Obat Resep Saat Sedang Sakit Parah',
    icon: '💊',
    deskripsi: 'Obat penyembuh dan pertolongan medis darurat ketika tubuh menderita sakit.',
    intensitas: 'primer',
    waktu: 'sekarang',
    sifat: 'jasmani',
    subjek: 'individu',
    contohRealita: 'Pasien demam berdarah butuh infus dan obat dokter di rumah sakit.',
    alasan: 'Kebutuhan saat ini yang tidak bisa ditunda agar tidak berisiko fatal pada nyawa.'
  },
  {
    id: 'n5',
    nama: 'Bantuan Pangan Korban Banjir Bandang',
    icon: '🚁',
    deskripsi: 'Bantuan makanan siap saji dan pakaian bersih bagi korban bencana alam.',
    intensitas: 'primer',
    waktu: 'mendesak',
    sifat: 'jasmani',
    subjek: 'kelompok',
    contohRealita: 'Drop logistik darurat pasca gempa atau banjir.',
    alasan: 'Kebutuhan mendesak yang terjadi secara tiba-tiba dan insidental akibat bencana.'
  },
  {
    id: 'n6',
    nama: 'Pendidikan & Sekolah Hingga Tuntas',
    icon: '🎓',
    deskripsi: 'Proses menuntut ilmu pengetahuan, karakter, dan keterampilan hidup.',
    intensitas: 'sekunder',
    waktu: 'sepanjang-waktu',
    sifat: 'rohani',
    subjek: 'individu',
    contohRealita: 'Belajar di SMP, membaca buku, hingga menuntut ilmu sampai akhir hayat.',
    alasan: 'Kebutuhan rohani sepanjang waktu yang tidak pernah berhenti selama manusia hidup.'
  },
  {
    id: 'n7',
    nama: 'Televisi & Radio Keluarga',
    icon: '📺',
    deskripsi: 'Media hiburan dan informasi di ruang keluarga rumah tangga.',
    intensitas: 'sekunder',
    waktu: 'sekarang',
    sifat: 'rohani',
    subjek: 'kelompok',
    contohRealita: 'Menonton siaran berita dan hiburan edukatif bersama keluarga.',
    alasan: 'Kebutuhan pelengkap setelah kebutuhan primer terpenuhi untuk melengkapi kenyamanan hidup.'
  },
  {
    id: 'n8',
    nama: 'Buku Pelajaran & Alat Tulis Siswa',
    icon: '📚',
    deskripsi: 'Peralatan belajar esensial bagi pelajar untuk menyerap materi.',
    intensitas: 'sekunder',
    waktu: 'sekarang',
    sifat: 'rohani',
    subjek: 'individu',
    contohRealita: 'Buku cetak IPS kelas VII, pulpen, dan buku catatan.',
    alasan: 'Pelengkap pendidikan penting bagi siswa, mendukung kebutuhan rohani/intelektual.'
  },
  {
    id: 'n9',
    nama: 'Tabungan Naik Haji / Rencana Masa Depan',
    icon: '🕋',
    deskripsi: 'Dana simpanan yang direncanakan untuk ibadah suci atau masa tua.',
    intensitas: 'sekunder',
    waktu: 'masa-depan',
    sifat: 'rohani',
    subjek: 'individu',
    contohRealita: 'Menyisihkan uang setiap bulan di tabungan haji untuk 10 tahun ke depan.',
    alasan: 'Pemenuhan waktunya direncanakan di masa mendatang.'
  },
  {
    id: 'n10',
    nama: 'Mobil Mewah Sport / Ferrari',
    icon: '🏎️',
    deskripsi: 'Kendaraan berharga miliaran rupiah dengan prestise sangat tinggi.',
    intensitas: 'tersier',
    waktu: 'masa-depan',
    sifat: 'jasmani',
    subjek: 'individu',
    contohRealita: 'Koleksi mobil supercar oleh konglomerat atau selebriti.',
    alasan: 'Kebutuhan tersier/barang mewah untuk meningkatkan prestise & status sosial di masyarakat.'
  },
  {
    id: 'n11',
    nama: 'Perhiasan Emas & Berlian Eksklusif',
    icon: '💎',
    deskripsi: 'Aksesoris mewah berharga fantastis penunjang penampilan tingkat atas.',
    intensitas: 'tersier',
    waktu: 'masa-depan',
    sifat: 'jasmani',
    subjek: 'individu',
    contohRealita: 'Kalung berlian koleksi sosialita pada pesta resmi.',
    alasan: 'Kebutuhan barang mewah tersier setelah primer dan sekunder terpenuhi.'
  },
  {
    id: 'n12',
    nama: 'Jembatan Penghubung Antar Desa',
    icon: '🌉',
    deskripsi: 'Infrastruktur fisik yang menghubungkan akses transportasi antar desa.',
    intensitas: 'primer',
    waktu: 'sekarang',
    sifat: 'jasmani',
    subjek: 'kelompok',
    contohRealita: 'Pembangunan jembatan sungai agar anak desa bisa berangkat sekolah.',
    alasan: 'Kebutuhan kelompok/kolektif yang dirasakan manfaatnya oleh seluruh warga masyarakat.'
  },
  {
    id: 'n13',
    nama: 'Tempat Ibadah Masjid / Gereja Warga',
    icon: '🕌',
    deskripsi: 'Fasilitas tempat beribadah bersama masyarakat setempat.',
    intensitas: 'sekunder',
    waktu: 'sepanjang-waktu',
    sifat: 'rohani',
    subjek: 'kelompok',
    contohRealita: 'Masjid agung atau gereja kampung yang dibangun secara gotong royong.',
    alasan: 'Kebutuhan rohani kolektif yang dipenuhi bersama untuk ketenteraman jiwa umat.'
  },
  {
    id: 'n14',
    nama: 'Rekreasi & Piknik Akhir Pekan',
    icon: '🏖️',
    deskripsi: 'Kegiatan berlibur untuk menyegarkan pikiran dan batin setelah lelah bekerja.',
    intensitas: 'sekunder',
    waktu: 'sekarang',
    sifat: 'rohani',
    subjek: 'kelompok',
    contohRealita: 'Keluarga berwisata ke pantai atau pegunungan saat libur semester.',
    alasan: 'Kebutuhan rohani untuk meredakan stres dan menjaga kesehatan mental.'
  },
  {
    id: 'n15',
    nama: 'Petugas Pemadam Kebakaran Saat Insiden',
    icon: '🚒',
    deskripsi: 'Layanan jasa darurat pemadaman kobaran api saat musibah kebakaran.',
    intensitas: 'primer',
    waktu: 'sekarang',
    sifat: 'jasmani',
    subjek: 'kelompok',
    contohRealita: 'Mobil pemadam bergegas memadamkan api yang melanda pemukiman warga.',
    alasan: 'Kebutuhan sekarang yang bersifat jasa darurat untuk menyelamatkan nyawa & harta.'
  },
  {
    id: 'n16',
    nama: 'Olahraga Jogging & Kebugaran Fisik',
    icon: '🏃',
    deskripsi: 'Aktivitas fisik teratur untuk melatih kekuatan otot dan daya tahan jantung.',
    intensitas: 'sekunder',
    waktu: 'sekarang',
    sifat: 'jasmani',
    subjek: 'individu',
    contohRealita: 'Lari pagi sebelum beraktivitas sekolah.',
    alasan: 'Kebutuhan jasmani yang memberi kesegaran dan kebugaran pada badan.'
  }
];

export const FAKTOR_KEBUTUHAN: FactorItem[] = [
  {
    id: 'f1',
    nama: 'Jenis Kelamin',
    icon: '🚻',
    penjelasan: 'Laki-laki dan perempuan memiliki kebutuhan biologis dan perlengkapan harian yang berbeda.',
    contohKasus: 'Siswa putri membutuhkan rok seragam sekolah, jilbab/pita rambut, dan produk perawatan tertentu; sementara siswa putra membutuhkan celana panjang dan peci.'
  },
  {
    id: 'f2',
    nama: 'Tingkat Pendidikan',
    icon: '🎓',
    penjelasan: 'Semakin tinggi jenjang pendidikan seseorang, semakin kompleks peralatan dan referensi belajar yang dibutuhkan.',
    contohKasus: 'Murid SD cukup butuh buku gambar dan krayon, sedangkan mahasiswa kedokteran membutuhkan laptop spesifikasi tinggi, stetoskop, dan buku referensi anatomi tebal.'
  },
  {
    id: 'f3',
    nama: 'Lingkungan Tempat Tinggal',
    icon: '🏔️',
    penjelasan: 'Kondisi geografis dan iklim tempat tinggal menuntut perlindungan tubuh yang berbeda.',
    contohKasus: 'Warga yang tinggal di dataran tinggi Dieng membutuhkan pakaian wol tebal, jaket polar, dan minuman penghangat. Sedangkan warga pesisir pantai membutuhkan pakaian tipis sejuk dan kipas angin.'
  },
  {
    id: 'f4',
    nama: 'Kemajuan IPTEK',
    icon: '💻',
    penjelasan: 'Perkembangan sains dan teknologi memunculkan kebutuhan baru terhadap perangkat digital dan aplikasi modern.',
    contohKasus: 'Dahulu masyarakat cukup mengirim surat pos, kini pelajar dan pekerja membutuhkan smartphone, kuota internet, dan aplikasi video konferensi untuk belajar daring.'
  },
  {
    id: 'f5',
    nama: 'Tingkat Pendapatan',
    icon: '💰',
    penjelasan: 'Besaran penghasilan keluarga mempengaruhi ragam kualitas dan kuantitas barang yang mampu dibeli.',
    contohKasus: 'Keluarga berpenghasilan pas-pasan fokus pada beras dan lauk sederhana; sedangkan keluarga berpendapatan tinggi mampu membeli makanan organik dan makan di restoran berbintang.'
  },
  {
    id: 'f6',
    nama: 'Status Sosial',
    icon: '👔',
    penjelasan: 'Kedudukan atau jabatan seseorang dalam masyarakat mempengaruhi tuntutan busana, kendaraan, dan tata pergaulan.',
    contohKasus: 'Seorang pejabat negara atau pimpinan perusahaan membutuhkan setelan jas resmi dan mobil dinas representatif untuk menghadiri forum kenegaraan.'
  },
  {
    id: 'f7',
    nama: 'Selera (Preferensi Pribadi)',
    icon: '🎨',
    penjelasan: 'Setiap individu memiliki kesukaan, hobi, dan cita rasa pribadi yang beraneka ragam.',
    contohKasus: 'Dua orang sahabat memiliki uang saku yang sama; satu orang memilih membeli sepatu sepak bola karena gemar olahraga, sedangkan temannya memilih membeli kuas lukis karena mencintai seni.'
  },
  {
    id: 'f8',
    nama: 'Adat Istiadat & Kebudayaan',
    icon: '🏮',
    penjelasan: 'Tradisi dan norma kebudayaan daerah mewajibkan perlengkapan ritual atau upacara adat tertentu.',
    contohKasus: 'Masyarakat Bali membutuhkan janur, bunga, dan canang sari untuk upacara keagamaan harian, sedangkan masyarakat Batak membutuhkan kain ulos untuk pesta adat keluarga.'
  }
];

export const QUIZ_SOAL: QuizQuestion[] = [
  {
    id: 1,
    pertanyaan: 'Berdasarkan skala prioritas, pemenuhan kebutuhan seseorang harus didasarkan pada....',
    pilihan: [
      { key: 'a', teks: 'Jenis barang yang ditawarkan' },
      { key: 'b', teks: 'Kwalitas barang bermerek' },
      { key: 'c', teks: 'Harga barang di pasaran' },
      { key: 'd', teks: 'Tingkat kepentingan' }
    ],
    kunci: 'd',
    pembahasan: 'Penyusunan skala prioritas harus didasarkan pada tingkat kepentingan (urgensi), yaitu mendahulukan kebutuhan pokok/primer yang mendesak sebelum kebutuhan sekunder dan tersier.'
  },
  {
    id: 2,
    pertanyaan: 'Menurut tingkat intensitasnya, radio, tempat tidur dan lemari termasuk ke dalam kebutuhan.....',
    pilihan: [
      { key: 'a', teks: 'Primer' },
      { key: 'b', teks: 'Jasmani' },
      { key: 'c', teks: 'Sekunder' },
      { key: 'd', teks: 'Rohani' }
    ],
    kunci: 'c',
    pembahasan: 'Radio, tempat tidur, dan lemari merupakan kebutuhan pelengkap (sekunder) yang dipenuhi setelah kebutuhan primer (makan, sandang pokok, tempat tinggal dasar) terpenuhi.'
  },
  {
    id: 3,
    pertanyaan: 'Membeli baju seragam bagi seorang siswa menurut waktu pemenuhannya termasuk kebutuhan…',
    pilihan: [
      { key: 'a', teks: 'Individu' },
      { key: 'b', teks: 'Kelompok' },
      { key: 'c', teks: 'Sekarang' },
      { key: 'd', teks: 'Masa depan' }
    ],
    kunci: 'c',
    pembahasan: 'Bagi siswa yang harus masuk sekolah besok, seragam adalah kebutuhan sekarang yang harus dipenuhi pada saat itu juga agar kegiatan belajar tidak terganggu.'
  },
  {
    id: 4,
    pertanyaan: 'Berdasarkan subyek yang membutuhkan, kebutuhan manusia dibedakan menjadi….',
    pilihan: [
      { key: 'a', teks: 'Kebutuhan jasmani dan rohani' },
      { key: 'b', teks: 'Kebutuhan individu dan kelompok' },
      { key: 'c', teks: 'Kebutuhan masyarakat dan pemerintah' },
      { key: 'd', teks: 'Kebutuhan primer, sekunder dan tersier' }
    ],
    kunci: 'b',
    pembahasan: 'Berdasarkan subjeknya (siapa yang memanfaatkan), kebutuhan dikelompokkan menjadi kebutuhan individu (perorangan) dan kebutuhan kelompok/kolektif (masyarakat luas).'
  },
  {
    id: 5,
    pertanyaan: 'Andi kelaparan karena sejak pagi belum makan, sehingga Andi harus segera makan. Berdasarkan sifatnya, makan termasuk kebutuhan….',
    pilihan: [
      { key: 'a', teks: 'Jasmani' },
      { key: 'b', teks: 'Primer' },
      { key: 'c', teks: 'Sekarang' },
      { key: 'd', teks: 'Individu' }
    ],
    kunci: 'a',
    pembahasan: 'Berdasarkan sifat pemenuhannya, makan memulihkan energi fisik dan memberikan kepuasan kepada badan/tubuh, sehingga digolongkan sebagai kebutuhan jasmani.'
  },
  {
    id: 6,
    pertanyaan: 'Dikatakan kebutuhan primer jika seseorang memiliki kebutuhan berikut, KECUALI…',
    pilihan: [
      { key: 'a', teks: 'Alat-alat tulis bagi seorang pelajar' },
      { key: 'b', teks: 'Buku-buku mengajar bagi guru' },
      { key: 'c', teks: 'Cangkul bagi petani' },
      { key: 'd', teks: 'Sepeda motor bagi seorang siswa' }
    ],
    kunci: 'd',
    pembahasan: 'Bagi siswa SMP, alat tulis adalah kebutuhan pokok belajar, sedangkan sepeda motor merupakan kebutuhan pelengkap/sekunder bahkan belum diizinkan secara hukum (belum ber-SIM).'
  },
  {
    id: 7,
    pertanyaan: 'Kebutuhan dasar yang paling penting dan harus dipenuhi agar kelangsungan hidup manusia tidak terancam disebut…',
    pilihan: [
      { key: 'a', teks: 'Kebutuhan primer' },
      { key: 'b', teks: 'Kebutuhan sekunder' },
      { key: 'c', teks: 'Kebutuhan individu' },
      { key: 'd', teks: 'Kebutuhan masa depan' }
    ],
    kunci: 'a',
    pembahasan: 'Kebutuhan primer (utama) adalah kebutuhan pokok (pangan, sandang, papan) yang mutlak harus dipenuhi demi kelangsungan hidup.'
  },
  {
    id: 8,
    pertanyaan: 'Faktor-faktor utama penyebab terjadinya kelangkaan barang dan jasa adalah…',
    pilihan: [
      { key: 'a', teks: 'Tidak terbatasnya sumber daya alam yang melimpah' },
      { key: 'b', teks: 'Keseimbangan sumber daya alam dan sumber daya manusia' },
      { key: 'c', teks: 'Pertumbuhan penduduk yang tidak seimbang dengan pertumbuhan produksi' },
      { key: 'd', teks: 'Kemampuan manusia yang tidak terbatas dalam mengolah sumber daya alam' }
    ],
    kunci: 'c',
    pembahasan: 'Kelangkaan terjadi karena kebutuhan manusia terus bertambah cepat seiring laju penduduk, sementara sumber daya dan kemampuan produksi alam terbatas.'
  },
  {
    id: 9,
    pertanyaan: 'Yang termasuk ke dalam kebutuhan jasmani adalah sebagai berikut, KECUALI…',
    pilihan: [
      { key: 'a', teks: 'Makan dan minum' },
      { key: 'b', teks: 'Pakaian olahraga' },
      { key: 'c', teks: 'Alat-alat olahraga' },
      { key: 'd', teks: 'Rekreasi dan ibadah' }
    ],
    kunci: 'd',
    pembahasan: 'Rekreasi dan ibadah memberikan kepuasan rohani/kejiwaan dan ketenteraman batin, sehingga termasuk kebutuhan rohani, bukan jasmani.'
  },
  {
    id: 10,
    pertanyaan: 'Pemerintah berusaha memenuhi kebutuhan perumahan bagi masyarakat dengan membangun program perumahan rakyat. Berdasarkan tingkat kepentingannya, perumahan merupakan kebutuhan…',
    pilihan: [
      { key: 'a', teks: 'Primer' },
      { key: 'b', teks: 'Individu' },
      { key: 'c', teks: 'Jasmani' },
      { key: 'd', teks: 'Sekarang' }
    ],
    kunci: 'a',
    pembahasan: 'Berdasarkan tingkat kepentingannya (intensitas), papan/tempat tinggal merupakan kebutuhan primer (pokok) manusia selain pangan dan sandang.'
  }
];

export const ESSAY_SOAL: EssayQuestion[] = [
  {
    id: 1,
    pertanyaan: 'Jelaskan perbedaan mendasar antara kebutuhan primer, sekunder, dan tersier, serta berikan masing-masing 2 contoh konkret dalam kehidupan siswa SMP!',
    rubrik: [
      'Menyebutkan pengertian primer (pokok/vital), sekunder (pelengkap), dan tersier (mewah/prestise).',
      'Memberikan contoh primer siswa: seragam sekolah & makan siang bergizi.',
      'Memberikan contoh sekunder siswa: tas sekolah & jam tangan sederhana.',
      'Memberikan contoh tersier: smartphone flagship edisi terbatas & sepatu desainer jutaan rupiah.'
    ],
    kataKunci: ['primer', 'sekunder', 'tersier', 'kelangsungan hidup', 'pelengkap', 'mewah'],
    kunciContoh: 'Kebutuhan primer adalah kebutuhan pokok yang wajib dipenuhi demi kelangsungan hidup (contoh: seragam dan makan siang). Kebutuhan sekunder adalah pelengkap yang dipenuhi setelah primer terpenuhi (contoh: tas sekolah dan buku penunjang). Kebutuhan tersier adalah barang mewah untuk meningkatkan prestise/status sosial (contoh: gawai flagship mewah).'
  },
  {
    id: 2,
    pertanyaan: 'Mengapa kebutuhan setiap individu berbeda-beda? Sebutkan dan jelaskan minimal 3 faktor yang mempengaruhinya!',
    rubrik: [
      'Menjelaskan bahwa manusia memiliki kondisi fisik, lingkungan, dan peran sosial yang beragam.',
      'Memilih 3 faktor dari 8 faktor: jenis kelamin, pendidikan, lingkungan, IPTEK, pendapatan, status sosial, selera, atau adat.',
      'Menyertakan penjelasan logis untuk setiap faktor yang dipilih.'
    ],
    kataKunci: ['faktor', 'lingkungan', 'pendidikan', 'pendapatan', 'jenis kelamin'],
    kunciContoh: 'Kebutuhan berbeda karena dipengaruhi oleh: 1. Lingkungan tempat tinggal (pegunungan butuh jaket tebal vs pantai butuh baju tipis); 2. Tingkat pendidikan (siswa SD butuh krayon vs mahasiswa butuh laptop); 3. Pendapatan (penghasilan menentukan kemampuan daya beli).'
  },
  {
    id: 3,
    pertanyaan: 'Apakah suatu barang dapat digolongkan sebagai kebutuhan primer bagi seseorang, tetapi menjadi kebutuhan tersier bagi orang lain? Berikan contoh kasus dan analisis alasannya!',
    rubrik: [
      'Menjawab YA dan memberikan penjelasan berbasis profesi/urgensi.',
      'Memberikan contoh kasus nyata (misal: mobil bagi supir taksi vs mobil mewah bagi siswa, atau cangkul bagi petani).',
      'Menganalisis alasan kaitan antara barang dengan mata pencaharian/kebutuhan mutlak.'
    ],
    kataKunci: ['relatif', 'profesi', 'alat kerja', 'supir', 'petani', 'urgensi'],
    kunciContoh: 'Ya, sifat kebutuhan itu relatif. Contoh: Mobil bagi seorang supir taksi online adalah alat kerja primer untuk mencari nafkah hidup keluarganya. Namun bagi siswa SMP, mobil pribadi adalah kebutuhan tersier/mewah karena fungsi utamanya ke sekolah cukup menggunakan angkutan umum atau sepeda.'
  },
  {
    id: 4,
    pertanyaan: 'Jelaskan apa yang dimaksud dengan kebutuhan mendesak dan kebutuhan sepanjang waktu beserta contohnya!',
    rubrik: [
      'Menjelaskan kebutuhan mendesak: terjadi tiba-tiba/insidental tanpa rencana (contoh: obat saat darurat, bantuan gempa).',
      'Menjelaskan kebutuhan sepanjang waktu: dipenuhi terus menerus sampai akhir hayat (contoh: menuntut ilmu/pendidikan).'
    ],
    kataKunci: ['mendesak', 'insidental', 'tiba-tiba', 'sepanjang waktu', 'pendidikan', 'akhir hayat'],
    kunciContoh: 'Kebutuhan mendesak adalah kebutuhan yang muncul mendadak dan bersifat darurat, contohnya bantuan perahu karet dan selimut saat banjir bandang. Kebutuhan sepanjang waktu adalah kebutuhan yang harus terus dipenuhi sepanjang hidup tanpa henti, contohnya pendidikan dan belajar.'
  },
  {
    id: 5,
    pertanyaan: 'Bagaimana cara seorang pelajar menerapkan skala prioritas ketika memiliki uang saku yang terbatas agar tidak mengalami masalah keuangan?',
    rubrik: [
      'Menyusun daftar kebutuhan dari yang paling penting (primer & mendesak).',
      'Menunda kebutuhan tersier dan menyeleksi kebutuhan sekunder.',
      'Menyisihkan uang saku untuk tabungan masa depan atau dana darurat.',
      'Mampu membedakan antara kebutuhan (needs) dengan sekadar keinginan (wants).'
    ],
    kataKunci: ['skala prioritas', 'keinginan', 'kebutuhan', 'menabung', 'catatan belanja'],
    kunciContoh: 'Pelajar harus membuat tabel skala prioritas: 1. Dahulukan ongkos transport & makan siang bergizi (primer); 2. Beli alat tulis bila habis (sekunder); 3. Tunda jajan berlebih atau mainan/top-up game (keinginan/tersier); 4. Sisihkan sebagian saku ke celengan sebagai dana darurat masa depan.'
  }
];

export const GLOSARIUM = [
  {
    istilah: 'Kebutuhan (Needs)',
    makna: 'Suatu keinginan atas barang dan jasa yang menuntut adanya pemenuhan, dan apabila tidak terwujud akan mempengaruhi kelangsungan hidup seseorang (KBBI: butuh).'
  },
  {
    istilah: 'Keinginan (Wants)',
    makna: 'Hasrat manusia terhadap barang atau jasa tertentu yang bila tidak terpenuhi tidak akan mengancam kelangsungan hidup.'
  },
  {
    istilah: 'Kebutuhan Primer',
    makna: 'Kebutuhan utama yang mutlak harus dipenuhi oleh manusia (pangan, sandang, papan), yang jika ditunda akan berakibat fatal pada kehidupannya.'
  },
  {
    istilah: 'Kebutuhan Sekunder',
    makna: 'Kebutuhan pelengkap yang dipenuhi setelah kebutuhan primer telah tercukupi dengan baik.'
  },
  {
    istilah: 'Kebutuhan Tersier',
    makna: 'Kebutuhan terhadap barang mewah yang bertujuan meningkatkan prestise atau status sosial di tengah masyarakat.'
  },
  {
    istilah: 'Kebutuhan Sekarang',
    makna: 'Kebutuhan yang harus dipenuhi pada saat itu juga dan tidak dapat ditunda (misalnya obat bagi orang sakit, damkar saat kebakaran).'
  },
  {
    istilah: 'Kebutuhan Masa Depan',
    makna: 'Kebutuhan yang waktu pemenuhannya direncanakan untuk masa yang akan datang (misal: tabungan pendidikan atau haji).'
  },
  {
    istilah: 'Kebutuhan Mendesak',
    makna: 'Kebutuhan yang terjadi secara tiba-tiba dan sifatnya insidental, seperti bantuan logistik korban bencana alam.'
  },
  {
    istilah: 'Kebutuhan Sepanjang Waktu',
    makna: 'Kebutuhan yang dipenuhi terus menerus sepanjang hayat seseorang, seperti menuntut ilmu dan pendidikan.'
  },
  {
    istilah: 'Kebutuhan Jasmani',
    makna: 'Kebutuhan fisik yang memberikan kepuasan langsung pada raga atau badan manusia (makan, minum, olahraga).'
  },
  {
    istilah: 'Kebutuhan Rohani',
    makna: 'Kebutuhan yang memberikan kepuasan kepada batin, jiwa, atau mental seseorang (rekreasi, ibadah, ketenangan).'
  },
  {
    istilah: 'Kebutuhan Individu',
    makna: 'Kebutuhan yang kepuasan dan manfaat pemenuhannya dirasakan langsung oleh satu orang saja.'
  },
  {
    istilah: 'Kebutuhan Kelompok',
    makna: 'Kebutuhan yang dirasakan bersama oleh kelompok masyarakat luas dan proses pemenuhannya dilakukan gotong royong (jembatan, tempat ibadah).'
  },
  {
    istilah: 'Kelangkaan (Scarcity)',
    makna: 'Kondisi di mana sumber daya dan alat pemuas kebutuhan jumlahnya terbatas, sedangkan kebutuhan manusia sifatnya tidak terbatas.'
  },
  {
    istilah: 'Skala Prioritas',
    makna: 'Urutan daftar kebutuhan manusia yang disusun berdasarkan tingkat kepentingan paling mendesak hingga yang dapat ditunda.'
  },
  {
    istilah: 'TPACK',
    makna: 'Kerangka kerja Technological Pedagogical Content Knowledge yang memadukan pengetahuan konten IPS, metode pedagogik PBL, dan kecanggihan teknologi interaktif.'
  }
];

export const BUDGET_SIMULATOR_ITEMS = [
  { id: 'b1', name: 'Beras 5 Kg & Telur (Makanan Pokok)', cost: 120000, category: 'primer', urgency: 'mutlak', health: 40, happiness: 10, icon: '🍚' },
  { id: 'b2', name: 'Lauk Sayur & Ikan Segar 3 Hari', cost: 150000, category: 'primer', urgency: 'mutlak', health: 35, happiness: 15, icon: '🥗' },
  { id: 'b3', name: 'Air Galon Minum Bersih', cost: 40000, category: 'primer', urgency: 'mutlak', health: 25, happiness: 5, icon: '💧' },
  { id: 'b4', name: 'Listrik & Token Air PDAM', cost: 100000, category: 'primer', urgency: 'penting', health: 15, happiness: 10, icon: '⚡' },
  { id: 'b5', name: 'Buku Catatan & Pulpen Belajar', cost: 35000, category: 'sekunder', urgency: 'penting', health: 0, happiness: 20, icon: '📓' },
  { id: 'b6', name: 'Paket Internet Edukasi 3 Hari', cost: 50000, category: 'sekunder', urgency: 'sedang', health: 0, happiness: 25, icon: '📶' },
  { id: 'b7', name: 'Kipas Angin Meja Sederhana', cost: 85000, category: 'sekunder', urgency: 'sedang', health: 5, happiness: 20, icon: '🌀' },
  { id: 'b8', name: 'Alat Olahraga Raket Bulutangkis', cost: 95000, category: 'sekunder', urgency: 'rendah', health: 15, happiness: 25, icon: '🏸' },
  { id: 'b9', name: 'Sepatu Sneaker Impor Edisi Terbatas', cost: 450000, category: 'tersier', urgency: 'mewah', health: 0, happiness: 40, icon: '👟' },
  { id: 'b10', name: 'Headset Gaming RGB Nirkabel', cost: 380000, category: 'tersier', urgency: 'mewah', health: 0, happiness: 35, icon: '🎧' },
  { id: 'b11', name: 'Top-Up Skin Game Online Populer', cost: 150000, category: 'tersier', urgency: 'mewah', health: -5, happiness: 30, icon: '🎮' },
  { id: 'b12', name: 'Jam Tangan Mewah Berlapis Emas', cost: 650000, category: 'tersier', urgency: 'mewah', health: 0, happiness: 50, icon: '⌚' }
];

export const EMERGENCY_EVENTS = [
  {
    title: 'Adik Jatuh Sakit Demam Tinggi!',
    desc: 'Adik mendadak demam 39°C dan harus segera dibawa ke klinik dokter serta membeli obat resep.',
    requiredFund: 180000,
    impactIfUnpaid: 'Kesehatan keluarga merosot tajam (-50 Poin Kesehatan) karena tidak segera diobati!'
  },
  {
    title: 'Genteng Kamar Bocor Diterjang Hujan Badai!',
    desc: 'Hujan deras malam hari membuat atap kamar bocor dan buku-buku terancam basah.',
    requiredFund: 120000,
    impactIfUnpaid: 'Ruangan tempat tinggal basah dan kenyamanan hidup terganggu (-30 Kesehatan, -20 Kebahagiaan)!'
  },
  {
    title: 'Sepeda Transportasi Sekolah Rantai Putus!',
    desc: 'Sepeda satu-satunya untuk berangkat sekolah dan pasar rusak mendadak.',
    requiredFund: 90000,
    impactIfUnpaid: 'Terlambat sekolah dan harus berjalan kaki jauh (-25 Energi & Kebahagiaan)!'
  }
];

export const DETECTIVE_CASES = [
  {
    id: 'c1',
    judul: 'Misteri Jaket Tebal vs Kaus Tipis',
    skenario: 'Pak Wayan tinggal di tepi Pantai Kuta dengan suhu 33°C memakai kaus katun tipis dan topi pantai. Sedangkan Pak Wayan saat mengunjungi saudaranya di Desa Kintamani pegunungan yang bersuhu 16°C langsung membeli jaket wol tebal dan selimut wol.',
    pertanyaan: 'Faktor apakah yang paling mendasari perubahan kebutuhan Pak Wayan tersebut?',
    pilihan: ['Tingkat Pendidikan', 'Lingkungan Tempat Tinggal', 'Kemajuan IPTEK', 'Jenis Kelamin'],
    jawabanBenar: 'Lingkungan Tempat Tinggal',
    penjelasan: 'Perbedaan kondisi geografis dan iklim (suhu udara pegunungan vs pesisir pantai) mempengaruhi jenis pakaian yang dibutuhkan agar tubuh tetap sehat dan nyaman.'
  },
  {
    id: 'c2',
    judul: 'Krayon Gambar vs Laptop Pemrograman',
    skenario: 'Dinda (murid kelas 2 SD) merengek meminta dibelikan krayon 24 warna dan buku gambar. Sementara kakaknya, Kak Rizky (mahasiswa semester 5 Ilmu Komputer), membutuhkan laptop berprosesor cepat dan software simulasi.',
    pertanyaan: 'Faktor pembeda utama kebutuhan antara Dinda dan Kak Rizky adalah....',
    pilihan: ['Tingkat Pendidikan', 'Adat Istiadat', 'Status Sosial', 'Selera Belaka'],
    jawabanBenar: 'Tingkat Pendidikan',
    penjelasan: 'Semakin tinggi jenjang pendidikan seseorang, semakin tinggi dan kompleks alat bantu belajar yang dibutuhkan untuk menyelesaikan tugas studinya.'
  },
  {
    id: 'c3',
    judul: 'Menu Warung Tegal vs Restoran Bintang Lima',
    skenario: 'Pak Anto adalah buruh bangunan harian yang bersyukur bisa makan nasi rames tempe telur seharga Rp 15.000 di warteg. Pak Darmawan adalah direktur korporasi multinasional yang sering menjamu klien makan malam seharga Rp 2.500.000 di restoran mewah.',
    pertanyaan: 'Perbedaan kebutuhan konsumsi makan di atas terutama dipengaruhi oleh faktor...',
    pilihan: ['Tingkat Pendapatan & Status Sosial', 'Jenis Kelamin', 'Kemajuan IPTEK', 'Lingkungan Geografis'],
    jawabanBenar: 'Tingkat Pendapatan & Status Sosial',
    penjelasan: 'Pendapatan menentukan daya beli, dan status sosial mempengaruhi standar pergaulan serta tempat pemenuhan kebutuhan.'
  },
  {
    id: 'c4',
    judul: 'Upacara Canang Sari dan Kain Ulos',
    skenario: 'Keluarga Made di Bali setiap pagi membutuhkan bunga kenanga, daun janur, dan dupa untuk sembahyang. Sedangkan keluarga Nainggolan di Toba membutuhkan kain ulos ragidup untuk upacara syukuran keluarga besar.',
    pertanyaan: 'Kebutuhan benda-benda ritual tersebut muncul akibat faktor...',
    pilihan: ['Kemajuan IPTEK', 'Adat Istiadat & Tradisi Budaya', 'Tingkat Pendidikan', 'Waktu Pemenuhan'],
    jawabanBenar: 'Adat Istiadat & Tradisi Budaya',
    penjelasan: 'Setiap suku dan kebudayaan daerah memiliki tata cara adat istiadat yang mewajibkan penggunaan perlengkapan khas dalam upacara keagamaan atau adat.'
  }
];
