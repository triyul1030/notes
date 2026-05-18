# Variables

## Cue

* `var`, `let`, `const`
* Variables sebelum ES6
* Global scope
* Function scope
* Block scope
* Perbedaan `var`, `let`, `const`
* `const` reference
* Array & object pada `const`
* Method `.map()`

## Notes

* Sebelum ES6:
  * variable hanya menggunakan:

    ```js id="4f7xja"
    var
    ```

* Jika variable tidak didefinisikan:
  * akan masuk ke global object
  * pada strict mode akan menghasilkan error

* ES6 memiliki 3 cara deklarasi variable:

    ```js id="1n8zpk"
    var
    let
    const
    ```

* Contoh `var`:

    ```js id="6q2vhr"
    var x = 5.6;
    ```

* `var`:

  * di luar function:
    * global scope
  
  * di dalam function:
    * function scope

  * di dalam block:
    * tetap bisa diakses di luar block
  
  * memiliki:

    ```js id="8k4twd"
    function scope
    ```

* Contoh `let`:

    ```js id="5p9mcf"
    let x = 5.6;
    ```

* `let`:
  * block scoped version dari `var`
  * hanya berlaku di block tempat didefinisikan
  
  * jika di dalam loop:
    * hanya tersedia di loop tersebut
  
  * memiliki:

    ```js id="0r7yln"
    block scope
    ```

* Contoh `const`:

    ```js id="2x6jvb"
    const x = 5.6;
    ```

* `const`:
  * nilai reference tidak bisa diubah
  * memiliki:

    ```js id="3d1qkg"
    block scope
    ```

* `const` tidak mendefinisikan constant value

* `const` mendefinisikan:

    ```js id="7m5whp"
    constant reference
    ```

* Tidak bisa:
  * reassign constant value
  * reassign constant array
  * reassign constant object

* Bisa:
  * mengubah element array
  * mengubah properties object

* Method `.map()`:
  * membuat array baru
  * menjalankan function pada setiap element array

* Contoh `.map()`:

    ```js id="9c4ftr"
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(x => x * 2);
    ```

## Summary

* ES6 memperkenalkan `let` dan `const` selain `var`, dengan perbedaan utama pada scope dan perubahan nilai, serta menyediakan method seperti `.map()` untuk membuat array baru berdasarkan hasil function pada setiap element array.
