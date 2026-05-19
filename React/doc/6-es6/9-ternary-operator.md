# Ternary Operator

## Cue

* Ternary operator
* Pengganti `if / else`
* Conditional operator
* Syntax ternary
* Contoh `if / else`
* Contoh ternary operator

## Notes

* Ternary operator adalah:

  * versi sederhana dari:

    ```js
    if / else
    ```

* Syntax ternary:

  ```js
  condition ? expression_if_true : expression_if_false
  ```

* Contoh `if / else`:

  ```js
  if (authenticated) {
    renderApp();
  } else {
    renderLogin();
  }
  ```

* Contoh ternary operator:

  ```js
  authenticated ? renderApp() : renderLogin();
  ```

* Cara kerja:

  * jika condition `true`

    * jalankan expression pertama
  * jika condition `false`

    * jalankan expression kedua

* Ternary operator digunakan untuk:

  * membuat conditional code lebih singkat

## Summary

* Ternary operator adalah bentuk singkat dari `if / else` yang menggunakan syntax `condition ? true_expression : false_expression` untuk menjalankan conditional expression secara lebih ringkas.
