# Arrow Functions

## Cue

* Arrow Functions
* Syntax function lebih singkat
* Return default
* Parameters pada arrow function
* Parentheses pada parameter
* Perbedaan `this`
* Regular function vs arrow function
* `this` pada arrow function

## Notes

* Arrow functions membuat syntax function lebih singkat

* Sebelum (regular function):

    ```js id="7w2qmk"
    hello = function() {
        return "Hello World!";
    }
    ```

* Dengan arrow function:

    ```js id="9v4kde"
    hello = () => {
        return "Hello World!";
    }
    ```

* Jika hanya satu statement:
  * bisa menghapus:
    * brackets
    * `return`

* Contoh:

    ```js id="2j8rny"
    hello = () => "Hello World!";
    ```

* Berlaku hanya jika function memiliki satu statement

* Arrow function dengan parameter:

    ```js id="0m6fqa"
    hello = (val) => "Hello " + val;
    ```

* Jika hanya satu parameter:
  * parentheses dapat dihapus

* Contoh:

    ```js id="5x3tvu"
    hello = val => "Hello " + val;
    ```

* Perbedaan `this`:
  * Arrow function tidak memiliki binding `this`

* Pada regular function:
  * `this` merepresentasikan object yang memanggil function

* Pada arrow function:
  * `this` selalu merepresentasikan object yang mendefinisikan function

* Contoh regular function:

    ```js id="8k1wop"
    class Header {
        constructor() {
            this.color = "Red";
        }

        changeColor = function() {
            document.getElementById("demo").innerHTML += this;
        }
    }
    ```

* Pada regular function:
  * `this` bisa menjadi:
    * `window`
    * `button`
    * object lain yang memanggil function

* Contoh arrow function:

    ```js id="6q9hzn"
    class Header {
        constructor() {
            this.color = "Red";
        }

        changeColor = () => {
            document.getElementById("demo").innerHTML += this;
        }
    }
    ```

* Pada arrow function:

  * `this` tetap mengacu ke:

    ```js id="4r2xjl"
    Header object
    ```

## Summary

* Arrow Functions pada ES6 memberikan syntax function yang lebih singkat dan memiliki perilaku `this` yang berbeda dari regular function, di mana `this` pada arrow function selalu mengacu pada object yang mendefinisikan function tersebut.
