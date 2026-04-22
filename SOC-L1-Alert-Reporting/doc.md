# SOC L1 Alert Reporting
+ L1 bisa mengalami keraguan dalam klasifikasi alert → butuh bantuan senior atau system owner
+ L1 juga bisa menangani real cyberattack yang butuh respon cepat
+ Karena itu, diperlukan:
  + Alert Reporting → dokumentasi hasil analisis
  + Escalation → meneruskan kasus ke level lebih tinggi (L2)
  + Communication → koordinasi dengan pihak terkait

## Learning Objectives:
+ Memahami pentingnya reporting dan escalation di SOC
+ Belajar menulis komentar alert atau laporan kasus dengan baik
+ Memahami metode escalation dan praktik komunikasi yang efektif
+ Menerapkan pengetahuan di simulasi ([SOC Simulator](https://tryhackme.com/soc-sim))
+ Meningkatkan kesiapan untuk [SAL1 certification](https://tryhackme.com/certification/security-analyst-level-1/details)

## Prerequisites:
+ Sudah menyelesaikan materi [Alert Triage](https://tryhackme.com/room/socl1alerttriage) sebelumnya
+ Paham dasar serangan umum
+ Mengerti tugas SOC L1 analyst

## Alert Funnel
+ Setelah alert triage, langkah berikutnya adalah memastikan hasil analisis digunakan untuk menangani ancaman melalui reporting, escalation, dan communication.
+ Alurnya:
  + L1 analyst menerima dan menganalisis alert
  + Banyak alert ditutup sebagai False Positive atau selesai di L1
  + Alert yang kompleks (True Positive) dikirim ke L2 untuk penanganan lebih lanjut
+ Tiga hal penting setelah triage:
  1. Alert Reporting → membuat laporan hasil investigasi secara detail (terutama untuk True Positive) agar ada bukti dan konteks yang jelas
  2. Alert Escalation → meneruskan alert ke L2 jika butuh analisis lebih dalam atau tindakan lanjutan
  3. Communication → berkoordinasi dengan tim lain (misalnya IT atau HR) untuk verifikasi atau informasi tambahan

+ Peran L1 berkembang dari sekadar analisis menjadi penghubung penting dalam penanganan insiden melalui laporan, eskalasi, dan komunikasi yang efektif

## Reporting Guide
+ Alert reporting oleh L1 analyst sangat penting, bukan sekadar menentukan True/False Positive, tapi juga untuk mendukung analisis lanjutan dan dokumentasi.
+ Tujuan utama Alert Report:
  + Provide context for escalation → membantu L2 analyst cepat memahami kasus tanpa mulai dari nol
  + Save findings for the records → menyimpan konteks penting lebih lama dibanding log SIEM
  + Improve investigation skills → melatih pemahaman dan kemampuan analisis L1

+ Format laporan yang disarankan (Five Ws):
  + Who → siapa yang terlibat (user, akun, dll)
  + What → aktivitas atau kejadian yang terjadi
  + When → waktu kejadian
  + Where → lokasi/endpoint (device, IP, website)
  + Why → alasan atau analisis kenapa dianggap ancaman atau tidak

+ Report yang baik membuat investigasi lebih cepat, terdokumentasi dengan baik, dan meningkatkan kualitas analisis SOC secara keseluruhan

## Escalation Guide
+ Escalation dilakukan oleh L1 ke L2 jika alert membutuhkan penanganan lebih lanjut, analisis lebih dalam, atau bantuan tambahan.
+ Kapan perlu escalation:
  + Indikasi serangan besar (butuh DFIR / investigasi lanjutan)
  + Perlu remediation (hapus malware, isolasi host, reset password)
  + Perlu komunikasi eksternal (customer, partner, manajemen, dll)
  + L1 tidak yakin atau belum paham hasil analisis

+ Alur escalation:
  + L1 melakukan analisis & menulis alert report
  + Set verdict (misalnya True Positive)
  + Assign alert ke L2
  + L2 melanjutkan investigasi, validasi, dan penanganan

+ Tambahan:
  + Tidak masalah bagi L1 untuk minta bantuan L2 jika ragu
  + Lebih baik bertanya daripada salah menutup alert

+ Escalation memastikan alert yang serius atau tidak jelas ditangani oleh level yang lebih ahli agar tidak terjadi kesalahan atau ancaman terlewat

## SOC Communication
+ Dalam kondisi nyata, L1 analyst harus siap menghadapi situasi tak terduga dan tetap berkomunikasi dengan cepat dan tepat, terutama saat kasus kritis.

+ Contoh kasus & penanganannya:
  + Alert critical tapi L2 tidak merespons** → hubungi L2, lalu L3, lalu manager (gunakan emergency contact)
  + Akun Slack/Teams diduga compromise → jangan hubungi via akun yang terkena, gunakan metode lain (telepon, dll)
  + Banjir alert dalam waktu singkat → tetap prioritaskan sesuai workflow dan informasikan ke L2
  + Salah klasifikasi alert (missed threat) → segera lapor ke L2, jangan ditunda
  + Masalah SIEM (log tidak terbaca/searchable) → tetap investigasi semampunya dan laporkan ke L2 atau SOC engineer

+ Intinya:
+ Komunikasi yang cepat, tepat, dan mengikuti prosedur sangat penting untuk mencegah kesalahan dan menangani insiden secara efektif, terutama dalam situasi kritis

## Reference
+ [https://tryhackme.com/room/socl1alertreporting](https://tryhackme.com/room/socl1alertreporting)