# Array map()

## Cue

* `.map()` pada React
* Render list elements
* `key` prop
* `.map()` dengan object
* Parameters `.map()`
* `currentValue`, `index`, `array`
* `.map()` menghasilkan array baru

## Notes

* `.map()` sering digunakan di React untuk render list elements

* Contoh render list:

    ```jsx id="7p2vxm"
    const fruitlist = ['apple', 'banana', 'cherry'];

    function MyList() {
        return (
            <ul>
                {fruitlist.map(fruit => 
                    <li key={fruit}>{fruit}</li>
                )}
            </ul>
        );
    }
    ```

* Saat menggunakan `.map()` di React:

  * setiap item membutuhkan:

    ```jsx id="5j9qdr"
    key prop
    ```

* `.map()` juga dapat digunakan dengan array of objects

* Contoh:

    ```jsx id="2n6wcf"
    const users = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Bob', age: 35 }
    ];

    function UserList() {
        return (
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                        {user.name} is {user.age} years old
                    </li>
                )}
            </ul>
        );
    }
    ```

* Parameters `.map()`:
  * `currentValue`
    * element yang sedang diproses
  
  * `index`
    * index element saat ini
    * optional
  
  * `array`
    * array asal `.map()`
    * optional

* Contoh penggunaan parameter:

    ```jsx id="4x8mkl"
    const fruitlist = ['apple', 'banana', 'cherry'];

    function App() {
        return (
            <ul>
                {fruitlist.map((fruit, index, array) => {
                    return (
                        <li key={fruit}>
                            Name: {fruit}, Index: {index}, Array: {array}
                        </li>
                    );
                })}
            </ul>
        );
    }
    ```

* `.map()`:
  * selalu menghasilkan array baru
  * tidak mengubah original array

## Summary

* Method `.map()` pada React digunakan untuk merender list elements dari array, termasuk array object, dengan setiap item membutuhkan `key` prop, serta selalu menghasilkan array baru tanpa mengubah array asli.
