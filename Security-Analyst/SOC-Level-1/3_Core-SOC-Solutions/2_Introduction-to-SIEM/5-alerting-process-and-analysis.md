# Alerting Process and Analysis

## Cue

* Cara SIEM mendeteksi ancaman
* Detection rules
* Contoh detection rules
* Field-value pairs
* Use case Event ID 104
* Use case Event ID 4688
* Deteksi command `whoami`
* Pentingnya normalized logs
* Alert investigation
* True positive vs false positive
* Response setelah alert

## Notes

* SIEM mendeteksi ancaman menggunakan detection rules

* Detection rules adalah logical expressions yang akan trigger alert jika kondisi tertentu terpenuhi

* Detection rules membantu deteksi ancaman secara cepat agar analyst dapat segera merespon

* Contoh detection rules:

  * Jika user gagal login 5 kali dalam 10 detik:

    ```txt
    Raise alert: Multiple Failed Login Attempts
    ```

  * Jika login berhasil setelah beberapa failed login:

    ```txt
    Raise alert: Successful Login After Multiple Login Attempts
    ```

  * Jika user mencolok USB:

    ```txt
    Raise alert: USB Device Connected
    ```

  * Jika outbound traffic > 25 MB:

    ```txt
    Raise alert: Potential Data Exfiltration Attempt
    ```

* Detection rules bekerja dengan memonitor field-value pairs dari logs

* Karena itu SIEM membutuhkan normalized logs agar fields konsisten

* Use Case 1 — Event Log Cleared:

  * Attacker sering menghapus logs untuk menghilangkan jejak
  * Windows mencatat aktivitas ini dengan:

    ```txt
    Event ID 104
    ```

  * Rule example:

    ```txt
    IF LogSource = WinEventLog
    AND EventID = 104
    THEN Trigger Alert: Event Log Cleared
    ```

* Use Case 2 — WHOAMI Command Execution:

  * Attacker sering menjalankan command:

    ```bash
    whoami
    ```

  * Process execution di Windows dicatat dengan:

    ```txt
    Event ID 4688
    ```

  * Fields penting:

    * Log Source
    * Event ID / EventCode
    * NewProcessName

  * Rule example:

    ```txt
    IF LogSource = WinEventLog
    AND EventCode = 4688
    AND NewProcessName contains "whoami"
    THEN Trigger Alert: WHOAMI Command Execution Detected
    ```

* Alert Investigation:

  * Analyst biasanya memonitor dashboard SIEM
  * Ketika alert muncul:

    * Analyst memeriksa event terkait
    * Memeriksa rule yang trigger
    * Menentukan apakah alert legitimate atau tidak

  * Kemungkinan hasil investigasi:

    1. False Positive

       * Alert bukan aktivitas malicious
       * Rule perlu dituning agar tidak terlalu sensitif

    2. True Positive

       * Aktivitas malicious terkonfirmasi
       * Dilanjutkan investigasi lebih lanjut

  * Tindakan setelah alert:

    * Hubungi asset owner
    * Investigasi aktivitas mencurigakan
    * Isolate infected host
    * Block suspicious IP

## Summary

* SIEM menggunakan detection rules berbasis field-value pairs untuk mendeteksi ancaman dan memicu alert. Analyst kemudian melakukan investigasi terhadap alert tersebut untuk menentukan apakah termasuk false positive atau true positive, lalu mengambil tindakan seperti isolasi host atau blocking IP jika aktivitas malicious terkonfirmasi.
