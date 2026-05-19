# Spread Operator

## Cue

* Spread operator `...`
* Copy array
* Copy object
* Combine arrays
* Combine objects
* Spread operator + destructuring
* Rest operator
* Overwrite property object

## Notes

* Spread operator:

  ```js
  ...
  ```

* Digunakan untuk:

  * copy array
  * copy object
  * menggabungkan data

* Contoh combine array:

  ```js
  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [...numbersOne, ...numbersTwo];
  ```

* Spread operator sering digunakan bersama:

  ```js
  destructuring
  ```

* Contoh destructuring + spread:

  ```js
  const numbers = [1, 2, 3, 4, 5, 6];

  const [one, two, ...rest] = numbers;
  ```

* Pada contoh:

  * `one` = item pertama
  * `two` = item kedua
  * `rest` = sisa item dalam array

* Spread operator juga bisa digunakan pada object

* Contoh combine object:

  ```js
  const car = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }

  const car_more = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  const mycar = {...car, ...car_more}
  ```

* Pada object:

  * property yang berbeda akan ditambahkan
  * property yang sama akan:

    ```js
    ditimpa oleh object terakhir
    ```

* Pada contoh:

  ```js
  color: 'red'
  ```

* berubah menjadi:

  ```js
  color: 'yellow'
  ```

## Summary

* Spread operator `...` digunakan untuk menyalin dan menggabungkan array atau object, sering dipakai bersama destructuring, serta pada object property yang sama akan ditimpa oleh value dari object terakhir.
