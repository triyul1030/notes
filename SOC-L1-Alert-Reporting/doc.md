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

## Reference
+ [https://tryhackme.com/room/socl1alertreporting](https://tryhackme.com/room/socl1alertreporting)