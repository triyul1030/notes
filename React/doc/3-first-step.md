# First Step

## Cue

* Modifikasi React app pertama
* File App.jsx
* Folder src
* Default content App.jsx
* Mengganti isi file
* Menampilkan “Hello World!”
* Save & perubahan otomatis
* HMR (Hot Module Replacement)

## Notes

* File utama berada di:
  * `my-react-app/src/App.jsx`

* Default App.jsx berisi:
  * import React assets
  * useState
  * Vite logo
  * React logo
  * counter button
  * teks HMR

* Isi file dapat diganti seluruhnya

* Ganti App.jsx menjadi:
  
    ```jsx
    import './App.css'

    function App() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
    }

    export default App
    ```

* Setelah file disimpan:
  * Perubahan langsung terlihat di browser
  * Tidak perlu reload browser

* React menggunakan:
  * HMR (Hot Module Replacement)

* Hasil akhir:
  * Menampilkan:

    ```output
    Hello World!
    ```

## Summary

* Langkah pertama React dilakukan dengan mengubah file `App.jsx` di folder `src` untuk menampilkan “Hello World!”, dan perubahan akan langsung terlihat di browser melalui fitur HMR tanpa perlu reload halaman.
