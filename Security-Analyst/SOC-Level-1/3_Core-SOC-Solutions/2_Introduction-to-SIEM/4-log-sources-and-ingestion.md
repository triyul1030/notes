# Log Sources and Ingestion

## Cue

* Pengertian log sources
* Contoh aktivitas yang menghasilkan logs
* Windows Event Viewer
* Linux log locations
* Apache/Web Server logs
* Monitoring web traffic
* Pengertian log ingestion
* Metode ingestion SIEM
* Agent / Forwarder
* Syslog
* Manual upload
* Port forwarding

## Notes

* Setiap device dalam network menghasilkan logs ketika ada aktivitas

* Contoh aktivitas:

  * User mengunjungi website
  * SSH connection
  * Login workstation
  * File access
  * Web requests

* Logs digunakan untuk:

  * Monitoring aktivitas
  * Troubleshooting
  * Investigasi incident
  * Deteksi aktivitas malicious

* Windows Machine:

  * Windows menyimpan event melalui Event Viewer
  * Setiap event memiliki unique Event ID
  * Memudahkan analyst melakukan tracking dan investigasi
  * Logs dari endpoint Windows dikirim ke SIEM untuk centralized monitoring

* Linux Machine:

  * Linux menyimpan event, warning, dan error logs
  * Common log locations:

    ```bash
    /var/log/httpd
    /var/log/cron
    /var/log/auth.log
    /var/log/secure
    /var/log/kern
    ```

* Fungsi masing-masing log:

  * `/var/log/httpd`

    * HTTP request/response
    * Error logs

  * `/var/log/cron`

    * Aktivitas cron jobs

  * `/var/log/auth.log` dan `/var/log/secure`

    * Authentication-related logs

  * `/var/log/kern`

    * Kernel-related events

* Contoh cron log:

  ```txt
  May 28 13:04:20 ebr crond[2843]: /usr/sbin/crond 4.4 dillon's cron daemon
  May 28 13:04:20 ebr crond[2843]: no timestamp found (user root job sys-daily)
  Jun 13 07:46:22 ebr crond[3592]: unable to exec /usr/sbin/sendmail
  ```

* Web Server:

  * Web server logs penting untuk monitoring web attacks
  * Mencatat semua incoming dan outgoing web requests
  * Common Apache log locations:

    ```bash
    /var/log/apache
    /var/log/httpd
    ```

* Contoh Apache log:

  ```txt
  192.168.21.200 - - [21/March/2022:10:17:10 -0300] "GET /cgi-bin/try/ HTTP/1.0" 200 3395
  127.0.0.1 - - [21/March/2022:10:22:04 -0300] "GET / HTTP/1.0" 200 2216
  ```

* Log Ingestion:

  * Proses memasukkan logs ke SIEM
  * Setelah ingest:

    * Logs dinormalisasi
    * Logs dianalisis
    * Logs dimonitor secara terpusat

* Metode log ingestion:

  1. Agent / Forwarder

     * Lightweight software di endpoint
     * Mengirim logs otomatis ke SIEM
     * Contoh:

        ```txt
        Splunk Forwarder
        ```

  2. Syslog

     * Protocol standar pengiriman logs
     * Digunakan oleh:

       * Web servers
       * Databases
       * Network devices

  3. Manual Upload

     * Upload offline log files ke SIEM
     * Digunakan untuk quick analysis

  4. Port Forwarding

     * SIEM membuka listening port
     * Endpoint forward logs ke port tersebut

## Summary

* SIEM mengumpulkan logs dari berbagai log sources seperti Windows, Linux, dan web server. Logs tersebut di-ingest menggunakan metode seperti agent, syslog, manual upload, dan port forwarding agar dapat dinormalisasi, dimonitor, dan dianalisis secara terpusat untuk kebutuhan security monitoring dan incident investigation.
