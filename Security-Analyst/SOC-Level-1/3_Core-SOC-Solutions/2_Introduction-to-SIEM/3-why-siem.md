# Why SIEM

## Cue

* Pengertian SIEM
* Fungsi SIEM
* Centralized log collection
* Parsing & normalization
* Correlation of logs
* Real-time alerting
* Dashboards & reporting
* Contoh correlation activity
* Features SIEM tambahan

## Notes

* SIEM:

  ```text
  Security Information and Event Management
  ```

* SIEM digunakan untuk:

  * collect logs
  * standardize format logs
  * correlate logs
  * detect malicious activity menggunakan detection rules

* SIEM membantu mengatasi:

  * banyaknya log sources
  * analisis log yang sulit
  * format log berbeda-beda

* Core features SIEM:

* Centralized Log Collection:

  * mengumpulkan logs dari:

    * endpoints
    * servers
    * firewalls
  * logs dikumpulkan ke satu tempat
  * menggunakan:

    ```text
    lightweight agents
    APIs
    ```

  * tidak perlu cek machine satu per satu

* Normalization of Logs:

  * raw logs memiliki format berbeda
  * contoh:

    * Windows logs
    * Linux logs

* Parsing:

  * memecah log menjadi beberapa fields

* Normalization:

  * mengubah semua log menjadi format yang konsisten

* Correlation of Logs:

  * SIEM menghubungkan logs dari berbagai sources
  * mencari relationship antar aktivitas
  * membantu mendeteksi malicious patterns

  * Contoh correlation:

    * login VPN dari IP baru
    * akses shared drive
    * execute PowerShell script
    * outbound network connection

  * Jika dikorelasikan:

    * dapat menunjukkan:

      ```text
      potential data exfiltration
      ```

* Real-time Alerting:

  * SIEM menggunakan detection rules
  * rules dapat:

    * default bawaan SIEM
    * dibuat analyst
  * jika kondisi rule terpenuhi:

    * alert akan dibuat
    * analyst diberi notifikasi

* Dashboards and Reporting:

  * menampilkan hasil analisis data
  * menyediakan actionable insights
  * memiliki:

    * default dashboard
    * custom dashboard

  * Contoh isi dashboard:

    * alert highlights
    * system notifications
    * failed login attempts
    * events ingested count
    * rules triggered
    * top domains visited

* Features tambahan SIEM:

  * threat intelligence integration
  * extensive data retention
  * powerful searching capabilities

## Summary

* SIEM adalah solusi keamanan yang mengumpulkan, menormalisasi, mengkorelasikan, dan menganalisis logs dari berbagai log sources untuk mendeteksi malicious activity melalui detection rules, real-time alerting, dan dashboards yang terpusat.
