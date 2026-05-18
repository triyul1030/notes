# Classes

## Cue

* ES6 Classes
* `class` keyword
* `constructor()`
* Object creation
* Naming convention
* Methods dalam class
* Class inheritance
* `extends`
* `super()`

## Notes

* ES6 memperkenalkan classes
* Class adalah tipe function
* Menggunakan keyword:

    ```js id="3n8x0k"
    class
    ```

* Properties dimasukkan ke dalam:

    ```js id="w2l9fa"
    constructor()
    ```

* Contoh class sederhana:

    ```js id="8r5c1m"
    class Car {
        constructor(name) {
            this.brand = name;
        }
    }
    ```

* Nama class menggunakan huruf besar di awal

* Contoh:

    ```js id="6d4qpt"
    Car
    ```

* Membuat object dari class:

    ```js id="2s0ygh"
    const mycar = new Car("Ford");
    ```

* `constructor()` dipanggil otomatis saat object dibuat
* Methods dapat ditambahkan ke class

* Contoh method:

    ```js id="9m7vkc"
    class Car {
        constructor(name) {
            this.brand = name;
        }

        present() {
            return 'I have a ' + this.brand;
        }
    }
    ```

* Memanggil method:

    ```js id="1f6zrp"
    mycar.present();
    ```

* Class inheritance menggunakan:

    ```js id="4x8bjl"
    extends
    ```

* Child class mewarisi methods dari parent class

* Contoh inheritance:

    ```js id="0q5wne"
    class Model extends Car {
        constructor(name, mod) {
            super(name);
            this.model = mod;
        }

        show() {
            return this.present() + ', it is a ' + this.model
        }
    }
    ```

* Membuat object inheritance:

    ```js id="7k2dmu"
    const mycar = new Model("Ford", "Mustang");
    ```

* `super()`:
  * Mengacu ke parent class
  * Memanggil constructor parent
  * Memberikan akses ke properties dan methods parent

## Summary

* ES6 Classes menggunakan keyword `class` dan `constructor()` untuk membuat object-oriented structure, mendukung methods dan inheritance melalui `extends` serta `super()` agar child class dapat mewarisi properties dan methods dari parent class.
