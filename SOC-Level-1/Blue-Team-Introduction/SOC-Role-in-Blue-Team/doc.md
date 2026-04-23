# SOC Role in Blue Team

## Objectives
+ Konsep dan tujuan Blue Team
+ Peran 

## Security Hierarchy
+ Setiap perusahaan memiliki prioritas keamanan yang berbeda, sehingga struktur tim cyber security juga disesuaikan dengan kebutuhan bisnis.

+ Struktur umum organisasi:
  1. Executives (CEO/CFO/Owner) → fokus pada tujuan bisnis, tidak menangani teknis
  2. Security Leadership (CTO/CIO/CISO) → memimpin strategi IT dan keamanan perusahaan
  3. Security Managers (SOC Manager, Red Team Lead) → mengelola tim atau departemen tertentu
  4. Technical Roles (SOC Analyst, Engineer, GRC, Pentester) → menjalankan tugas teknis sehari-hari

+ CISO berperan penting sebagai penghubung antara bisnis dan keamanan. Mereka merancang struktur dan strategi keamanan yang sesuai dengan kebutuhan perusahaan

+ Struktur keamanan dibuat berlapis agar tujuan bisnis dan perlindungan sistem bisa berjalan seimbang dan efektif

## Security Departments
+ Di perusahaan besar, keamanan siber dibagi ke beberapa tim khusus di bawah CISO, masing-masing dengan peran berbeda.

+ Struktur utamanya:
  1. Red Team → fokus pada offensive security (pentester / ethical hacker) untuk mencari celah keamanan
  2. GRC Team (Governance, Risk, Compliance) → mengelola kebijakan, risiko, dan kepatuhan (misalnya PCI DSS)
  3. Blue Team → fokus pada defensive security (SOC analyst, engineer, incident responder) untuk melindungi sistem

+ Perusahaan kecil → biasanya ditangani oleh tim IT
+ Perusahaan menengah → ada tim Information Security umum
+ Di perusahaan besar, keamanan dibagi ke tim spesialis agar perlindungan lebih efektif dan terstruktur

## Blue Team
+ Blue Team adalah tim defensive security yang bertugas memantau, mendeteksi, dan merespons serangan siber secara cepat.
  + Fokus pada monitoring dan response terhadap serangan
  + Ukuran tim bervariasi (±3–50 orang) tergantung perusahaan
  + Terdiri dari berbagai role dan subdepartemen dalam keamanan

+ Blue Team berperan sebagai pelindung utama sistem dengan mendeteksi dan menangani ancaman secara real-time

### Security Operations Center (SOC)
+ Security Operations Center (SOC) adalah pusat utama keamanan siber dan garis pertahanan pertama dalam organisasi.

+ Struktur tim SOC:
  + SOC Manager → mengelola seluruh tim
  + SOC Engineer → mengonfigurasi tools (SIEM, EDR)
  + SOC L2 Analyst → menangani investigasi lanjutan
  + SOC L1 Analyst → triage alert dan eskalasi kasus

+ Tugas utama SOC:
  + Beroperasi 24/7
  + Mengumpulkan & memonitor log
  + Membuat detection rules
  + Bekerja sama dengan tim IT
  + Menyelidiki security alerts
  + Menulis laporan

+ SOC adalah pusat operasional keamanan yang mendeteksi, menganalisis, dan menangani sebagian besar serangan siber

### Cyber Incident Response Team (CIRT)
+ Cyber Incident Response Team (CIRT / CSIRT / CERT) adalah tim khusus yang menangani insiden siber kritis dan mendukung SOC saat situasi darurat.

+ Fungsi utama:
  + Dipanggil on-demand saat insiden besar
  + Mendukung SOC dengan analisis lanjutan
  + Menangani insiden kritis
  + Melakukan threat hunting & identifikasi ancaman tersembunyi
  + Melakukan forensik mendalam
  + Membantu pemulihan sistem yang terdampak

+ Struktur tim:
  + CSIRT Manager
  + Forensics Lead
  + Threat Intelligence Expert
  + Threat Hunting Expert
  + Malware Analyst

+ CIRT disebut sebagai cyber firefighters
+ Digunakan saat kemampuan SOC tidak cukup atau insiden sudah besar
+ Membutuhkan keahlian tinggi dan tidak selalu bergantung pada tools seperti SIEM/EDR

+ Contoh:
  + [JPCERT](https://www.jpcert.or.jp/english)
  + [Mandiant](https://www.mandiant.com/)
  + [AWS CIRT](https://aws.amazon.com/security-incident-response)

+ CIRT adalah tim respons darurat yang menangani serangan besar secara mendalam dan membantu memulihkan sistem dari insiden siber

### Specialized Defensive Roles
#### Cue
+ Specialized Defensive Roles
+ Peran di perusahaan besar
+ Contoh role
+ Kebutuhan skill
+ Peran tambahan Blue Team
#### Notes
+ Specialized Defensive Roles adalah peran keamanan yang lebih spesifik di perusahaan besar, startup teknologi, dan instansi pemerintah.
+ Peran ini sempit (narrow) dan spesialis, tetapi tetap membutuhkan:
  + Pengetahuan mendalam (deep topic knowledge)
  + Pengalaman luas di bidang umum seperti SOC atau IT
+ Contoh peran yang termasuk:
  + DevSecOps
  + Penetration Tester
  + GRC Auditor
  + AppSec Engineer → menjaga secure software development lifecycle
  + Threat Analyst
  + AI Researcher → mempelajari ancaman AI dan cara bertahan
+ Peran tambahan dalam kategori ini:
  + Digital Forensics Analyst → menemukan ancaman tersembunyi di disk dan memory
  + Threat Intelligence Analyst → mengumpulkan data tentang kelompok ancaman yang berkembang
+ Peran-peran ini termasuk dalam supporting Blue Team roles
#### Summary
+ Perusahaan besar dan organisasi teknologi membutuhkan peran keamanan yang sangat spesifik dalam Blue Team. Meskipun fokusnya sempit, peran ini memerlukan kombinasi keahlian mendalam dan pengalaman luas di bidang keamanan umum. Contohnya meliputi DevSecOps, AppSec Engineer, hingga AI Researcher, serta peran tambahan seperti Digital Forensics Analyst dan Threat Intelligence Analyst yang berfokus pada analisis ancaman dan investigasi.

## Advancing SOC Career
### SOC Path
#### Cue
+ SOC L1 Analyst
+ red teaming
+ general it
+ ctf
+ cyber news
+ sal1 certification
+ wawancara
+ soc internal
+ mssp
+ job
+ junior
+ senior
#### Notes
+ SOC L1 Analyst merupakan langkah permulaan yang berguna untuk mendalami dunia cyber
+ Cara memulai menjadi SOC L1 Analyst:
  1. Pelajari dan praktikan skill inti SOC, bisa juga mempelajari skill red teaming atau general IT
  2. proaktif, coba ctf, tetap update dalam cyber news, pertimbangkan [SAL1 certification](https://tryhackme.com/certification/security-analyst-level-1)
  3. persiapan wawancara, pelajari perbedaan soc internal dan mssp, dan apply pekerjaan
  4. setelah bekerja sebagai role junior, pertimbangkan untuk persiapan ke role senior
#### Summary
+ ketika akan memulai soc l1 analyst, pertama pelajari skill inti soc, proaktif, persiapan wawancara, dan pertimbangkan role senior ketika sudah mendapatkan pekerjaan

Berikut rangkuman dengan **metode Cornell** berdasarkan teks yang diberikan:

### Internal SOC vs MSSP

#### Cue
+ Internal SOC vs MSSP
+ Apa itu MSSP
+ Perbedaan utama
+ Lingkungan kerja
+ Pengalaman kerja

#### Notes
+ Tidak semua organisasi memiliki keahlian untuk menjalankan SOC sendiri.
+ Mereka menggunakan **Managed Security Services Provider (MSSP)**, yaitu perusahaan yang menyediakan layanan keamanan secara outsourcing, paling umum adalah SOC.
+ Bekerja di MSSP:
  + Tekanan kerja tinggi (high-pressure)
  + Cocok untuk memulai karier dengan cepat (quickstart career)

+ Disarankan melamar posisi SOC apa pun sebagai pekerjaan pertama, sambil memahami perbedaannya.

+ Perbandingan Internal SOC vs MSSP
  + Scenario Example
    + Internal SOC: bekerja di tim SOC sebuah bank dan melindungi sistem bank
    + MSSP: bekerja di MSSP global yang melindungi banyak klien (misalnya 60 pelanggan di Eropa)

  + Working Pace
    + Internal SOC: shift cenderung lebih tenang, tekanan waktu tidak terlalu tinggi
    + MSSP: shift dimulai dengan banyak alert mendesak yang harus dianalisis
  + Security Tools
    + Internal SOC: menggunakan sedikit tools, tetapi harus sangat menguasainya
    + MSSP: menggunakan banyak tools dan platform yang beragam
  + Incident Practice
    + Internal SOC: hanya menangani sedikit serangan besar (misalnya dua dalam setahun)
    + MSSP: setiap minggu menghadapi serangan dan breach, sehingga banyak pembelajaran

#### Summary
+ Internal SOC dan MSSP memiliki perbedaan utama pada beban kerja, variasi tools, dan pengalaman incident. Internal SOC cenderung lebih stabil dan fokus, sedangkan MSSP lebih cepat, penuh tekanan, dan memberikan lebih banyak pengalaman praktis. MSSP menjadi pilihan baik untuk memulai karier karena intensitas belajar yang tinggi.

### Next Step
#### Cue
+ Career path setelah L1
+ Pilihan role
+ Pengalaman awal karier
+ Tips bekerja di Blue Team
+ Cara belajar dari pekerjaan

#### Notes
+ Langkah paling umum setelah **L1** adalah menjadi **SOC L2 analyst**, tetapi bisa memilih jalur lain.
+ Saat bekerja:
  + Bisa tertarik ke engineering saat menangani SIEM alert
  + Bisa tertarik ke **CIRT actions** saat terjadi cyber attack
  + Bisa cocok menjadi manager dan berkembang menuju peran **CISO**

+ Fokus utama 1–2 tahun pertama:
  + Mendapatkan pengalaman kerja nyata (real work experience)
  + Menggunakan waktu tersebut secara efektif

+ Tips untuk Roles Supporting Blue Team
  + Learn From Every Alert
    + Memahami alasan rule terpicu untuk meningkatkan detection skills

  + Think Like An Attacker
    + Bertanya “kenapa attacker melakukan ini” sebelum menganalisis bagaimana caranya

  + Verify Everything
    + Tidak berasumsi, selalu validasi alert dan aktivitas mencurigakan di log

  + Get Involved in Incidents
    + Serangan nyata memberikan pelajaran yang tidak bisa didapat dari lab

#### Summary
+ Setelah L1, jalur karier terbuka luas, mulai dari SOC L2 hingga spesialis atau manajemen. Dua tahun pertama penting untuk mengumpulkan pengalaman nyata. Untuk berkembang di Blue Team, penting belajar dari setiap alert, berpikir seperti attacker, selalu memverifikasi, dan terlibat langsung dalam incident karena pengalaman nyata memberikan pembelajaran terbaik.

## Final Chalenge
### Cue
+ Challenge
+ Peran CISO
+ Tugas utama
+ Cara menyelesaikan challenge
+ Website instructions

### Notes
+ Dalam tugas ini, berperan sebagai **CISO** di perusahaan **TrySecureMe**, sebuah perusahaan multinasional besar.
+ Bertanggung jawab mengawasi banyak departemen dan menangani insiden setiap bulan.
+ Kondisi challenge:
  + Ada **tujuh insiden** terjadi secara bersamaan
  + Harus memilih **orang/role yang tepat** untuk menangani tiap insiden
  + Membutuhkan pemahaman tentang berbagai **security roles**

+ Website Instructions
  + Klik **[View Site](https://static-labs.tryhackme.cloud/apps/soc-role-blue-team/)** untuk membuka website
  + Disarankan membuka dalam full screen atau resize untuk tampilan lebih baik
  + Tugas:
    + Drag and drop role dari kiri ke insiden di kanan
    + Jika semua pilihan benar → bisa claim flag dan menyelesaikan task
    + Bisa mengulang dengan klik tombol **Reset** kapan saja
    
+ Hasil Pemilihan Role
  + SIEM created an alert about FW-NY-01 firewall brute-force. Who should triage the alert? → **Lucas | SOC L1 Analyst**

  + The HR manager Anna launched a phishing malware. Who should make a deep analysis? → **Susan | SOC L2 Analyst**

  + The office in France was somehow hit with ransomware. Immediate response is required! → **Robert | CERT Lead**

  + Our servers storing the credit cards require PCI DSS audit. Who can help us here? → **Nick | GRC Auditor**

  + Who can check the new version of tryhackme.thm for vulnerabilities? → **Ben | Penetration Tester**

  + The SIEM is unavailable due to a storage limit. Who can investigate the issue? → **Eugen | SOC Engineer**

  + FIN7 threat group actively targets our company. Who can analyze their tactics? → **Alice | Threat Researcher**

### Summary
+ Challenge ini mensimulasikan peran CISO yang harus menangani beberapa insiden sekaligus dengan memilih security role yang tepat. Penyelesaian dilakukan melalui website interaktif dengan sistem drag-and-drop, dan keberhasilan bergantung pada pemahaman terhadap berbagai peran keamanan.


## Reference
+ https://tryhackme.com/room/socroleinblueteam
