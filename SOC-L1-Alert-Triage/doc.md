# SOC L1 Alert Triage

## Introduction

### Objective
+ Konsep SOC alert
+ Alert field, statuses, dan classification
+ Alert triage sebagai L1 analyst
+ Real alert dan SOC workflows
+ SOC simulator dan SAL1 certification

### Prerequisites
+ Serangann umum pada networks, windows, dan linux
+ Role dan tanggung jawab SOC (terutama L1 analyst)

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

### L1 Role in Alert Triage
+ Alert triage, proses kolaboratif tim SOC
+ L1 sebagai garis depan.

| Role | Tanggung Jawab |
| :--- | :--- |
| L1 Analyst | yang pertama kali menangani alert; memilah mana yang aman dan mana yang menjadi ancaman; jika ada indikasi bahaya, alert diteruskan ke L2 Analyst |
| L2 Analyst | melakukan analisis lebih dalam dan penanganannya berdasarkan alert yang diteruskan L1 Analyst |
| SOC Engineer | memastikan sistem alert menyediakan informasi yang cukup agar mudah dianalisis |
| SOC Manager | mengawasi kecepatan dan kualitas proses supaya tidak ada serangan yang terlewat |

## Alert Properties
+ Membantu SOC Analyst memahami, memprioritaskan, dan menangani ancaman (triage) dengan cepat dan tepat

| Property | Description |
| :--- | :--- |
| Alert Time | kapan alert dibuat (setelah event terjadi) |
| Alert Name | ringkasan jenis kejadian/ancaman |
| Alert Severity | tingkat urgensi (low sampai critical) |
| Alert Status | status penanganan (baru, sedang diproses, selesai) |
| Alert Verdict | hasil analisis | (ancaman nyata atau false alarm) |
| Alert Assignee | siapa analis yang bertanggung jawab |
| Alert Description | penjelasan detail alert dan cara penanganannya |
| Alert Fields | data tambahan/teknis terkait kejadian | 

## Reference
+ [https://tryhackme.com/room/socl1alerttriage](https://tryhackme.com/room/socl1alerttriage)
