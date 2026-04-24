# Introduction
## Cue
+ Apa itu EDR
+ Fungsi EDR
+ Peran SOC analyst
+ Learning objectives
+ Perbedaan dengan antivirus
+ Prasyarat (prerequisites)

## Notes
+ Endpoint Detection and Response (EDR) adalah solusi keamanan untuk:
  + Monitoring
  + Detection
  + Response terhadap advanced threats di level endpoint

+ EDR banyak digunakan di organisasi untuk melindungi endpoint, sehingga penting dipahami oleh **SOC analyst**

+ Dalam pembahasan:
  + Perbedaan EDR dengan traditional antivirus
  + Data yang dikumpulkan dari endpoint
  + Kemampuan detection dan response

### Learning Objectives
+ Memahami dasar EDR dan cara kerjanya
+ Membedakan EDR dengan antivirus tradisional
+ Memahami arsitektur EDR
+ Menganalisis telemetry dari endpoint
+ Memahami detection dan response capabilities
+ Menginvestigasi alert realistis dalam EDR

### Prerequisites
+ Pengetahuan dasar tentang endpoint (Windows, Linux, Mac)
+ Pemahaman tentang serangan umum pada endpoint
+ Awareness terhadap peran tim SOC

## Summary
+ EDR adalah solusi keamanan yang memantau, mendeteksi, dan merespons ancaman di endpoint, serta menjadi alat penting bagi SOC analyst. Materi mencakup cara kerja EDR, perbedaannya dengan antivirus, arsitektur, telemetry, serta kemampuan deteksi dan respons, dengan prasyarat pemahaman dasar tentang endpoint dan peran SOC.

# What is EDR
## Cue
+ Peningkatan penggunaan digital devices
+ Risiko remote work
+ Apa itu EDR
+ Contoh EDR solutions
+ Pilar utama EDR
+ Visibility, Detection, Response
+ Keterbatasan EDR

---

## Notes
+ Penggunaan **digital devices** meningkat dan menjadi bagian utama fungsi bisnis.
+ **Cyber threats** juga meningkat dari waktu ke waktu.
+ Banyak organisasi fokus pada perlindungan network, tetapi:
  + **Remote Work** membuat endpoint berada di luar perimeter jaringan

+ Dibutuhkan solusi untuk melindungi endpoint di mana saja → **Endpoint Detection and Response (EDR)**
  + Memberikan perlindungan mendalam (deep-level protection)
  + Memastikan endpoint selalu dimonitor dan threat terdeteksi

+ Contoh EDR solutions:
  + CrowdStrike Falcon
  + SentinelOne ActiveEDR
  + Microsoft Defender for Endpoint
  + OpenEDR
  + Symantec EDR
  + Arsitektur mirip, fitur bisa berbeda

+ Tiga Pilar (Core Features) EDR**
  1. **Visibility**
     + Mengumpulkan data detail dari endpoint:
       + Process modifications
       + Registry modifications
       + File & folder changes
       + User actions
     + Menyajikan data secara terstruktur
     + Menampilkan **process tree** dan timeline aktivitas
     + Menyediakan historical data untuk threat hunting
     + Setiap detection memiliki konteks lengkap

  2. **Detection**
     + Lebih unggul dari traditional detection
     + Menggunakan:
       + Signature-based detection
       + Behavior-based detection
     + Memanfaatkan machine learning untuk mendeteksi deviasi dari baseline
     + Mendeteksi fileless malware di memory
     + Mendukung custom IOCs
     + Menampilkan detail seperti severity, waktu, file, hostname, user, dan mapping MITRE

  3. **Response**
     + Memungkinkan analyst mengambil tindakan langsung dari console
     + Contoh aksi:
       + Isolate endpoint
       + Terminate process
       + Quarantine file
       + Remote access ke host
     + Semua dilakukan dari central EDR console

+ Dengan **visibility, detection, dan response**, EDR menjadi alat yang kuat
+ Namun, EDR hanya fokus pada **host-level security** dan tidak mendeteksi ancaman di level network

---

## Summary
+ EDR adalah solusi keamanan endpoint yang dirancang untuk melindungi perangkat di mana saja, terutama karena meningkatnya remote work. EDR memiliki tiga pilar utama: visibility, detection, dan response, yang memungkinkan monitoring detail, deteksi ancaman lanjutan, dan tindakan langsung. Meskipun kuat, EDR hanya bekerja pada level host dan tidak mencakup ancaman jaringan.


# Reference
+ https://tryhackme.com/room/introductiontoedrs
