# Installing Kali Linux on VirtualBox

## Cue

* Kali Linux di VirtualBox
* Hypervisor
* Keuntungan VirtualBox dibanding dual-boot
* Prerequisites instalasi
* Membuat Virtual Machine
* Load Kali ISO
* Basic system configuration
* Disk partitioning
* Bootloader setup
* Final setup dan booting

## Notes

* VirtualBox memungkinkan Kali Linux berjalan di dalam Windows sebagai aplikasi biasa

* Keuntungan menggunakan VirtualBox:

  * Tidak perlu reboot untuk pindah OS
  * Bisa switch antara Windows dan Kali secara langsung
  * Hanya menggunakan sebagian resource hardware
  * Tidak mengganggu main operating system

* Prerequisites:

  * Minimal 20 GB free disk space
  * Kali Linux ISO file
  * VirtualBox terinstall
  * Minimal 8 GB RAM direkomendasikan

* Step 1 — Create Virtual Machine:

  * Buka VirtualBox
  * Klik:

    ```txt
    New
    ```

  * Isi:

    * VM Name
    * Type:

      ```txt
      Linux
      ```

    * Version:

      ```txt
      Debian (64-bit)
      ```

  * Alokasikan RAM:

    ```txt
    2048 MB recommended
    ```

  * Pilih:

    ```txt
    Create a virtual hard disk now
    ```

  * Hard disk type:

    ```txt
    VDI
    ```

  * Storage type:

    ```txt
    Dynamically Allocated
    ```

  * Tentukan ukuran virtual disk dan lokasi penyimpanan

* Step 2 — Start VM and Load ISO:

  * Pilih VM Kali Linux
  * Klik:

    ```txt
    Start
    ```

  * Browse dan pilih:

    ```txt
    Kali Linux ISO
    ```

  * Boot menggunakan:

    ```txt
    Graphical Install
    ```

* Step 3 — Basic System Configuration:

  * Pilih:

    * Language
    * Country / Region
    * Keyboard layout

  * Set:

    * Hostname
    * Domain name (optional)
    * Strong password
    * Time zone

* Step 4 — Disk Partitioning:

  * Pilih:

    ```txt
    Manual
    ```

  * Gunakan:

    ```txt
    Free Space
    ```

  * Create new partition
  * Tentukan partition size
  * Partition type:

    ```txt
    Logical
    ```

  * Untuk beginner:

    * Tidak perlu memisahkan:

      * root
      * home
      * swap

  * Pilih:

    ```txt
    Done setting up the partition
    ```

  * Finish partitioning dan write changes to disk

  * Pilih:

    ```txt
    Yes
    ```

    untuk menyimpan perubahan

* Step 5 — Installation Process:

  * Installer akan menginstall Kali Linux ke virtual machine
  * Tunggu beberapa menit hingga selesai

* Step 6 — Bootloader Setup:

  * Install:

    ```txt
    GRUB boot loader
    ```

  * Pilih:

    ```txt
    Yes
    ```

  * Pilih hard disk target bootloader

* Step 7 — Final Setup and Boot:

  * Sistem akan menyelesaikan instalasi
  * VM otomatis reboot
  * Kali Linux akan boot secara normal

* Untuk menutup VM:

  * Shutdown Kali Linux
  * Virtual machine akan otomatis terminate

## Summary

* Kali Linux dapat dijalankan dengan aman dan praktis menggunakan VirtualBox tanpa perlu dual-boot. Proses instalasi meliputi pembuatan virtual machine, mounting ISO Kali Linux, konfigurasi sistem, disk partitioning, instalasi bootloader, hingga booting akhir ke sistem Kali Linux.
