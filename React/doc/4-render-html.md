# Render HTML

## Cue

* Tujuan React dalam render HTML
* Container pada React
* `<div id="root"></div>`
* File `index.html` dan `main.jsx`
* Fungsi `createRoot()`
* Method `render()`
* JSX dalam React
* Root node
* Root element tidak harus `div#root`

## Notes

* React digunakan untuk render HTML ke web page

* React menggunakan:
  * container
  * function `createRoot()`

* Container biasanya berupa:

    ```html
    <div id="root"></div>
    ```

* Default `index.html`:

    ```html
    <!doctype html>
    <html lang="en">
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </body>
    </html>
    ```

* File `main.jsx` berada di folder `src`
* `createRoot()` adalah built-in function React
* Digunakan untuk membuat root node React application

* Default `main.jsx`:

    ```jsx
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './App.jsx'

    createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
    )
    ```

* `createRoot()`:
  * menerima satu HTML element
  * menentukan tempat React component ditampilkan

* Contoh sederhana:

    ```jsx
    import { createRoot } from 'react-dom/client'

    createRoot(document.getElementById('root')).render(
    <h1>Hello React!</h1>
    )
    ```

* Method `render()`:
  * menentukan apa yang ditampilkan di container HTML

* Contoh render paragraph:

    ```jsx
    import { createRoot } from 'react-dom/client'

    createRoot(document.getElementById('root')).render(
    <p>Welcome!</p>
    )
    ```

* React menggunakan JSX
* JSX memungkinkan penulisan HTML di dalam JavaScript

* Contoh JSX:

    ```jsx
    const myelement = (
    <table>
        <tr>
        <th>Name</th>
        </tr>
        <tr>
        <td>John</td>
        </tr>
        <tr>
        <td>Elsa</td>
        </tr>
    </table>
    );
    ```

* Root node:
  * tempat hasil React ditampilkan
  * dikelola oleh React
  * tidak harus:

    * `<div>`
    * id `"root"`

* Contoh custom root node:

    ```html
    <header id="sandy"></header>
    ```

    ```jsx
    import { createRoot } from 'react-dom/client'

    createRoot(document.getElementById('sandy')).render(
    <p>Welcome!</p>
    )
    ```

## Summary

* React merender HTML ke web page menggunakan container dan function `createRoot()`, lalu menampilkan content melalui method `render()`, dengan JSX untuk menulis HTML di dalam JavaScript dan root node sebagai tempat utama hasil React ditampilkan.
