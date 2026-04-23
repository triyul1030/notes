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

## Reference
+ https://tryhackme.com/room/socroleinblueteam
