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

# Beyond the Antivirus

## Cue
+ Perbedaan Antivirus (AV) vs EDR
+ Analogi airport (immigration vs security officers)
+ Kelemahan signature-based detection
+ Fungsi monitoring dan behaviour analysis
+ Visibility antar endpoint
+ Perbandingan respon AV vs EDR pada serangan
+ Tahapan serangan (phishing → payload → remote access)

## Notes
+ AV dan EDR sama-sama melindungi endpoint, tetapi tingkat perlindungan berbeda
+ Analogi:
  + AV = immigration check (cek passport vs database criminal)
  + EDR = security officers (monitor CCTV & motion sensors)
+ AV hanya mendeteksi berdasarkan signature (known threats)
+ Threat baru atau yang belum terdaftar bisa lolos dari AV
+ EDR memonitor aktivitas dan behaviour secara terus-menerus
+ EDR dapat mendeteksi aktivitas mencurigakan walau lolos dari AV
+ EDR menyediakan organization-wide visibility (cek semua endpoint)

+ Scenario serangan:
  1. Phishing email dengan Word + malicious macro (VBA)
  2. User membuka file
  3. Macro menjalankan PowerShell
  4. PowerShell obfuscated download payload
  5. Payload injection ke svchost.exe
  6. Attacker mendapat remote access

+ Perbandingan respon:
  + Step 1:
    + AV: tidak deteksi jika tidak ada signature
    + EDR: log download & monitor
  + Step 2:
    + AV: tidak deteksi (winword.exe legitimate)
    + EDR: record execution & monitor
  + Step 3:
    + AV: tidak deteksi tanpa signature
    + EDR: flag parent-child relation (winword.exe → PowerShell.exe)
  + Step 4:
    + AV: tidak deteksi obfuscated script
    + EDR: flag script execution
  + Step 5:
    + AV: tidak monitor memory injection
    + EDR: deteksi process injection (svchost.exe)
  + Step 6:
    + AV: tidak punya network visibility
    + EDR: flag outbound connection abnormal
  + Final:
    + AV: bisa dianggap clean
    + EDR: generate alert + full attack chain + response action

## Summary
+ AV menggunakan signature-based detection sehingga terbatas pada known threats, sedangkan EDR memonitor behaviour, aktivitas, dan memberikan visibility menyeluruh, sehingga mampu mendeteksi dan merespon advanced threats yang lolos dari AV.

# How an EDR Works

## Cue
* Cara kerja EDR (Agents & Console)
* Fungsi EDR Agents (sensors)
* Fungsi EDR Console (analysis & correlation)
* Penggunaan machine learning & threat intelligence
* Proses setelah detection (alert & SOC analyst)
* Severity level (Critical → Informational)
* Investigasi alert (file, process, network, registry)
* True positive vs false positive
* Integrasi EDR dengan tools lain (SIEM, Firewall, DLP, dll)

## Notes
* EDR memberikan visibility melalui kombinasi agents dan console

* EDR Agents:
  * Di-deploy di endpoint (disebut juga sensors)
  * Berfungsi sebagai eyes and ears dari EDR
  * Memonitor semua aktivitas endpoint
  * Mengirim data aktivitas ke EDR Console secara real-time
  * Dapat melakukan basic signature-based dan behavior-based detection
  * Mengirim hasil deteksi ke console untuk trigger alert

* EDR Console:
  * Menerima data dari semua agents
  * Data dianalisis dan dikorelasikan
  * Menggunakan machine learning algorithms dan threat intelligence
  * Bertindak sebagai “brain” yang menghubungkan semua data
  * Menghasilkan detection (alert)
  * Menyediakan dashboard untuk melihat status semua endpoint

* Setelah detection:
  * SOC analyst acknowledge dan prioritasi alert
  * EDR memberi severity: Critical, High, Medium, Low, Informational
  * Alert dengan severity tertinggi diprioritaskan
  * Analyst dapat melihat detail:
    * file execution
    * process execution
    * network connections
    * registry modifications
  * Analyst menentukan:
    * false positive atau true positive
  * Jika true positive, analyst dapat mengambil action dari EDR console

* EDR dengan tools lain:
  * EDR bukan satu-satunya solusi keamanan
  * Bekerja bersama:
    * Firewalls
    * DLPs
    * Email Security Gateways
    * IAMs
    * dll
  * Semua solusi terintegrasi dengan SIEM
  * SIEM menjadi central point of investigation

## Summary
* EDR bekerja menggunakan agents yang mengumpulkan data aktivitas endpoint dan console yang menganalisis data menggunakan machine learning dan threat intelligence untuk menghasilkan alert, yang kemudian diinvestigasi dan ditindaklanjuti oleh SOC analyst serta terintegrasi dengan sistem keamanan lain melalui SIEM.

# EDR Telemetry

## Cue
* Pengertian Telemetry
* Peran telemetry dalam EDR
* Jenis data yang dikumpulkan
* Process, Network, Command, File, Registry activity
* Kesulitan membedakan aktivitas normal vs malicious
* Peran machine learning & analysis
* Fungsi telemetry dalam detection & investigation

## Notes
* Telemetry adalah data yang dikumpulkan oleh EDR agents dari endpoint
* Disebut sebagai “black box” endpoint untuk detection dan investigation
* EDR mengumpulkan banyak data karena sulit membedakan aktivitas normal dan malicious
* Semakin banyak data → semakin baik analisis

* Jenis telemetry:
  * Process Executions and Terminations:
    * Melacak semua proses (running & idle)
    * Identifikasi parent-child relationship mencurigakan
    * Deteksi suspicious executables dan malware payload

  * Network Connections:
    * Monitor semua koneksi jaringan
    * Identifikasi koneksi ke C2 server
    * Deteksi unusual port usage, data exfiltration, lateral movement

  * Command Line Activity:
    * Mencatat command di CMD, PowerShell, dll
    * Identifikasi malicious command & obfuscated PowerShell scripts

  * Files and Folders Modifications:
    * Melacak perubahan file/folder
    * Digunakan dalam data staging, ransomware, malicious file dropping

  * Registry Modifications:
    * Monitor perubahan registry Windows
    * Registry berisi konfigurasi penting sistem
    * Banyak perubahan terjadi saat aktivitas malicious

* EDR menggunakan complex logic dan machine learning algorithms untuk analisis
* Advanced threats sering menggunakan legitimate utilities (stealthy)
* Aktivitas terlihat normal jika dilihat satu per satu

* Dengan telemetry detail:
  * Aktivitas dapat dianalisis secara keseluruhan
  * Membantu detection advanced threats
  * Membantu analyst dalam investigation
  * Menentukan root cause
  * Mereconstruct attack timeline

## Summary
* Telemetry adalah data aktivitas endpoint yang dikumpulkan oleh EDR agents, yang mencakup process, network, command, file, dan registry activity, dan digunakan dengan machine learning untuk mendeteksi advanced threats serta membantu analyst memahami dan merekonstruksi serangan secara menyeluruh.

# Detection and Response Capabilities

## Cue
* Teknik detection pada EDR
* Behavioral, Anomaly, IOC detection
* MITRE ATT&CK mapping
* Machine Learning dalam detection
* Response EDR (automated & manual)
* Isolate host, terminate process, quarantine
* Remote access (RTR)
* Artefacts collection

## Notes
* EDR menggunakan telemetry untuk melakukan advanced detection

* Teknik detection:
  * Behavioral Detection:
    * Menganalisis behavior file, bukan hanya signature
    * Deteksi penggunaan legitimate processes untuk serangan
    * Contoh: winword.exe spawn PowerShell.exe (unusual parent-child)

  * Anomaly Detection:
    * EDR memahami baseline behavior endpoint
    * Aktivitas yang menyimpang akan di-flag
    * Bisa menghasilkan false positives
    * Contoh: proses modify auto-start registry key (tidak umum)

  * IOC Matching:
    * Menggunakan threat intelligence feeds
    * Mencocokkan aktivitas dengan known IOC
    * Tidak berlaku untuk zero-day attacks
    * Contoh: hash executable cocok dengan database → langsung di-flag

  * MITRE ATT&CK Mapping:
    * Aktivitas dipetakan ke Tactic dan Technique
    * Membantu analyst memahami tahap serangan

    * Contoh:
      * Tactic: Persistence
      * Technique: Scheduled Task/Job

  * Machine Learning Algorithms:
    * Model dilatih dari data normal & malicious
    * Mendeteksi pola kompleks
    * Cocok untuk fileless attacks & multi-staged intrusions
    * Aktivitas individual terlihat normal, tapi chain terdeteksi malicious

* Response:
  * EDR menyediakan automated dan manual response

  * Isolate Host:
    * Memutus endpoint dari network
    * Mencegah lateral movement
    * Efektif untuk containment

  * Terminate Process:
    * Menghentikan proses malicious
    * Digunakan jika isolasi tidak memungkinkan
    * Harus hati-hati (bisa ganggu proses legitimate)

  * Quarantine:
    * Memindahkan file ke lokasi terisolasi
    * File tidak bisa dieksekusi
    * Bisa direview atau dihapus permanen

  * Remote Access:
    * Akses shell endpoint dari jarak jauh
    * Digunakan jika response bawaan tidak cukup
    * Bisa menjalankan command, script, ambil data

  * Artefacts Collection:
    * Mengambil data untuk forensic & legal
    * Tanpa akses fisik ke endpoint

    * Contoh:
      * Memory Dump
      * Event Logs
      * Folder Contents
      * Registry Hives

* EDR memiliki detection dan response lebih advanced dibanding endpoint protection tradisional

## Summary
* EDR menggunakan berbagai teknik seperti behavioral, anomaly, IOC matching, MITRE ATT&CK mapping, dan machine learning untuk mendeteksi ancaman, serta menyediakan berbagai response seperti isolasi host, terminate process, quarantine, remote access, dan artefacts collection untuk menangani serangan secara efektif.

# Reference
+ https://tryhackme.com/room/introductiontoedrs
