# Introduction

## Cue

* Pengertian Node.js
* Node.js sebagai JavaScript runtime
* Fungsi Node.js
* V8 JavaScript engine
* Asynchronous programming
* Non-blocking & event-driven architecture
* Kegunaan Node.js
* Contoh penggunaan fs module
* Web server sederhana
* Node.js file
* Node.js LTS

## Notes

* Node.js:
  * Free dan open-source
  * JavaScript runtime
  
  * Berjalan di:
    * Windows
    * Mac
    * Linux
  
  * Menjalankan JavaScript di luar browser
  * Digunakan untuk server-side development
  * Dibangun di atas Chrome V8 JavaScript engine
  * Cocok untuk scalable network applications

* Contoh sederhana:
  * `console.log('Hello from Node.js!');`

* Kelebihan Node.js:
  * Menangani banyak koneksi sekaligus
  * Minimal overhead
  
  * Cocok untuk:
    * Real-time applications
    * APIs dan microservices
    * Data streaming
    * CLI tools
    * Server-side web applications

* Node.js menggunakan:
  * Asynchronous programming
  * Non-blocking architecture
  * Event-driven architecture

* Asynchronous Programming:
  * Tetap bekerja saat menunggu file/database
  * Bisa menangani banyak task sekaligus
  * Menggunakan callback function

* Contoh fs module:
  * `require('fs')`
  * `fs.readFile()`
  * Membaca file secara asynchronous

* Fungsi Node.js:
  * Membuat web servers
  * File operations
  * Database interaction
  * RESTful APIs & GraphQL APIs
  * WebSockets
  * CLI applications

* Contoh web server:
  * Menggunakan `http.createServer()`
  * Listen di port `8080`

* Node.js File:
  * Menggunakan extension `.js`
  
  * Dijalankan dengan command:
    * `node app.js`
  
  * Berjalan di server
  * Menggunakan JavaScript syntax

* Node.js Versions:
  * Major version baru setiap 6 bulan
  
  * Disarankan menggunakan:
    * LTS (Long Term Support)
    * Untuk production projects

## Summary

* Node.js adalah JavaScript runtime berbasis V8 engine yang memungkinkan JavaScript berjalan di server dengan arsitektur asynchronous, non-blocking, dan event-driven, sehingga efisien untuk membangun web server, APIs, real-time applications, dan scalable network applications.
