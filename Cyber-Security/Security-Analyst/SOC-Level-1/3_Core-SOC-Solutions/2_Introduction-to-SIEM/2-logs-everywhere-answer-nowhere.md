# Logs Everywhere, Answer Nowhere

## Cue

* Log sources dalam network
* Host-centric log sources
* Network-centric log sources
* Contoh host logs
* Contoh network logs
* Challenges analisis logs
* No centralization
* Limited context
* Limited analysis
* Format issues

## Notes

* Banyak device dalam network saling berkomunikasi:

  * endpoint Linux/Windows
  * data server
  * website
  * router

* Device terus menghasilkan logs aktivitas

* Device penghasil log disebut:

  ```text
  log sources
  ```

* Logs membantu:

  * identifikasi malicious activity
  * troubleshooting

* Log sources dibagi menjadi 2 kategori:

  * Host-Centric
  * Network-Centric

* Host-Centric Log Sources:

  * menangkap event di dalam host
  * contoh device:

    * Windows
    * Linux
    * servers

* Contoh host-centric logs:

  * user accessing file
  * authentication attempts
  * process execution
  * registry modification
  * PowerShell execution

* Network-Centric Log Sources:

  * menangkap aktivitas komunikasi network
  * contoh device:

    * firewalls
    * IDS/IPS
    * routers

* Contoh network-centric logs:

  * SSH connection
  * FTP file access
  * web traffic
  * VPN access
  * network file sharing

* Challenges analisis logs:

  * Numerous Log Sources:

    * network memiliki banyak log sources
    * menghasilkan ratusan event per detik
    * logs tersebar di banyak device
    * analisis satu per satu sangat sulit

  * No Centralization:

    * logs tersimpan di masing-masing machine
    * perlu akses:

      ```text
      SSH
      RDP
      ```

    * analisis menjadi tidak efisien

  * Limited Context:

    * individual log tidak memberi gambaran lengkap
    * correlation antar logs dapat menunjukkan malicious activity
    * contoh:

      * file access terlihat normal
      * tetapi ternyata hasil lateral movement

  * Limited Analysis:

    * jumlah logs sangat banyak
    * analisis manual hampir tidak mungkin
    * analyst dapat melewatkan logs penting

  * Format Issues:

    * tiap log source memiliki format berbeda
    * analyst harus memahami banyak format log

## Summary

* Network menghasilkan banyak host-centric dan network-centric logs yang penting untuk investigasi dan troubleshooting, tetapi analisis manual menghadapi masalah seperti banyaknya log sources, tidak adanya centralization, limited context, jumlah log yang besar, dan perbedaan format log.
