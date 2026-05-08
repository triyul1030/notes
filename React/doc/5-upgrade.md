# Upgrade

## Cue

* Upgrade ke React 19
* Syarat upgrade
* Install React 19
* Update `react` dan `react-dom`
* New root API
* `ReactDOM.render()` vs `createRoot()`
* Concurrent features
* Kompatibilitas dengan React 17

## Notes

* Upgrade ke React 19 hanya membutuhkan 2 langkah

* Jika sudah menggunakan versi terbaru React:
  * bagian ini bisa dilewati

* Step 1: Install React 19
  * Jalankan command berikut di project folder:

    ```bash id="7q3b8m"
    npm i react@latest react-dom@latest
    ```

* Step 2: Gunakan new root API
  * Dibutuhkan untuk menggunakan concurrent features React 19
  * Sebelum (old API):

    ```jsx id="w5h7f1"
    import ReactDOM from 'react-dom';

    ReactDOM.render(
    <h1>Hello React!</h1>,
    document.getElementById('root')
    );
    ```

  * Sesudah (new API):

    ```jsx id="2pvk1n"
    import { createRoot } from 'react-dom/client';

    createRoot(document.getElementById('root')).render(
    <h1>Hello React!</h1>
    );
    ```

* Aplikasi tetap bisa berjalan tanpa new root API
* Jika masih menggunakan:

    ```jsx id="9xq2cd"
    ReactDOM.render()
    ```

* Maka aplikasi akan berperilaku seperti React 17

## Summary

* Upgrade ke React 19 dilakukan dengan mengupdate `react` dan `react-dom`, lalu mengganti `ReactDOM.render()` menjadi `createRoot()` agar dapat menggunakan concurrent features pada React 19.
