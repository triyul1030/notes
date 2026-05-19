# Modules

## Cue

* JavaScript modules
* Pisah code ke file terpisah
* `import` dan `export`
* Named export
* Default export
* Import named export
* Import default export

## Notes

* JavaScript modules digunakan untuk:

  * memisahkan code ke file terpisah
  * mempermudah maintenance code-base

* ES Modules menggunakan:

  ```js
  import
  export
  ```

* Function atau variable dapat di-export dari file

* Terdapat 2 jenis export:

  * Named Export
  * Default Export

* Named Export:

  * export satu per satu

  ```js
  export const name = "Tobias"
  export const age = 18
  ```

* Named Export juga bisa di-export sekaligus:

  ```js
  const name = "Tobias"
  const age = 18

  export { name, age }
  ```

* Default Export:

  * hanya boleh satu dalam satu file

* Contoh:

  ```js
  const message = () => {
    const name = "Tobias";
    const age = 18;
    return name + ' is ' + age + 'years old.';
  };

  export default message;
  ```

* Import module:

  * tergantung jenis export

* Import named export:

  * menggunakan curly braces

  ```js
  import { name, age } from "./person.js";
  ```

* Import default export:

  * tidak menggunakan curly braces

  ```js
  import message from "./message.js";
  ```

## Summary

* JavaScript modules memungkinkan code dipisah ke beberapa file menggunakan `export` dan `import`, dengan dua jenis export yaitu named export dan default export yang memiliki cara import berbeda.
