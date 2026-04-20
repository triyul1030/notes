# SOC L1 Alert Triage

## Objective
+ Concept of SOC alert
+ Alert field, statuses, and classification
+ Perform alert triage as an L1 analyst
+ Real alert and SOC workflows
+ SOC simulator and SAL1 certification

## Prerequisites
+ Common attack on networks, windows, and linux
+ SOC roles and duties (especially L1 analyst)

## Event and Alerts

### Event to Alerts
+ Alert, menyaring jutaan log menjadi kejadian mencurigakan yang perlu perhatian. 
  + Banyak event terjadi (login, process, download, dll) 
  + dicatat sebagai log
  + Log dikirim ke sistem keamanan (SIEM/EDR)
  + Sistem menganalisis log dan menghasilkan alert untuk kejadian mencurigakan
  + SOC analyst lebih efisien, hanya menganalisis alert
  + tanpa alert, analyst harus memeriksa semua log secara manual

+ Alert management platforms

  | Solution | Example | Description |
  | :--- | :--- | :--- |
  | SIEM | Splunk Enterprise Security, Elastic SIEM | paling lengkap dalam mengumpulkan, menganalisis, dan mengelola alert (pilihan utama) |
  | EDR/NDR | Microsoft Defender, CrowdStrike Falcon | menghasilkan alert, tidak dijadikan pusat manajemen (sumber data) |
  | SOAR | Splunk SOAR, Cortex XSOAR | menggabungkan dan mengotomatisasi penanganan alert dari banyak sistem (tim SOC yang lebih besar) 
  | ITSM | Jira, TheHive | mengelola tiket/insiden (bukan analisis alert secara langsung)

