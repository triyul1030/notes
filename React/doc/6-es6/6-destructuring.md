# Destructuring

## Cue

* Pengertian destructuring
* Destructuring arrays
* Destructuring objects
* Default values
* Nested object destructuring
* Destructuring pada props
* Destructuring pada `useState`
* Keuntungan destructuring di React

## Notes

* Destructuring adalah fitur JavaScript untuk mengambil value dari:
  * object
  * array

* Value disimpan ke variable terpisah

* Di React, destructuring sering digunakan untuk:
  * props
  * hooks
  * state management
  * API responses

* Destructuring membuat code:
  * lebih bersih
  * lebih mudah dibaca

* Cara lama mengambil array:

    ```js
    const vehicles = ['mustang', 'f-150', 'expedition'];

    const car = vehicles[0];
    const truck = vehicles[1];
    const suv = vehicles[2];
    ```

* Dengan destructuring:

    ```js
    const vehicles = ['mustang', 'f-150', 'expedition'];

    const [car, truck, suv] = vehicles;
    ```

* Pada array destructuring:
  * urutan variable penting

* Skip item array:

    ```js
    const [car,, suv] = vehicles;
    ```

* Function dapat mengembalikan array:

    ```js
    function dateInfo(dat) {
        const d = dat.getDate();
        const m = dat.getMonth() + 1;
        const y = dat.getFullYear();

        return [d, m, y];
    }

    const [date, month, year] = dateInfo(new Date());
    ```

* Destructuring object:

    ```js
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };

    let {firstName, lastName, age} = person;
    ```

* Pada object:
  * urutan property tidak penting

* Mengambil property tertentu:

    ```js
    let {firstName} = person;
    ```

* Default value:

    ```js
    let {firstName, lastName, age, country = "Norway"} = person;
    ```

* Nested object destructuring:

    ```js
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        car: {
            brand: 'Ford',
            model: 'Mustang',
        }
    };

    let {firstName, car: { brand, model }} = person;
    ```

* Props destructuring di React:

    ```jsx
    function Greeting({ name, age }) {
        return <h1>Hello, {name}! You are {age} years old.</h1>;
    }
    ```

* Tanpa destructuring:

    ```jsx
    function Greeting(props) {
        return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
    }
    ```

* Contoh penggunaan props:

    ```jsx
    <Greeting name="John" age={25} />
    ```

* `useState` menggunakan destructuring:

    ```jsx
    const [count, setCount] = useState(0);
    ```

* Contoh:

    ```jsx
    function Counter() {
        const [count, setCount] = useState(0);

        return (
            <button onClick={() => setCount(count + 1)}>
            Count: {count}
            </button>
        );
    }
    ```

## Summary

* Destructuring adalah fitur JavaScript untuk mengambil value dari array dan object ke variable terpisah, dan di React sering digunakan pada props serta `useState` agar code lebih ringkas, bersih, dan mudah dibaca.
