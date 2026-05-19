# Template Strings

## Cue

* Template strings
* Backticks `` ` ``
* Multi-line string
* Expression interpolation
* `${}`
* Quotes tanpa escaping
* Tagged templates
* Function tag

## Notes

* Template strings digunakan untuk:

  * multi-line strings
  * embedded expressions

* Sebelum template strings:

  ```js
  const name = "John";
  const age = 30;
  const message = "Hello, " + name + "!\n" + 
  "You are " + age + " years old.";
  ```

* Dengan template strings:

  ```js
  const name = "John";
  const age = 30;
  const message = `Hello, ${name}!
  You are ${age} years old.`;
  ```

* Template strings menggunakan:

  ```js
  backticks (`)
  ```

* Template strings mendukung:

  * multi-line tanpa `\n`
  * expressions dalam `${}`
  * quotes tanpa escaping

* Contoh multi-line string:

  ```js
  const html = `
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  `;
  ```

* Indentation menjadi bagian dari string

* Contoh:

  ```js
  const x = `
    John:
      Hello, how are you?
    Jane:
      I'm fine, thanks!
  `;
  ```

* Expression interpolation:

  * memasukkan expression JavaScript ke `${}`

* Contoh variable interpolation:

  ```js
  let firstName = "John";
  let lastName = "Doe";

  let text = `Welcome ${firstName}, ${lastName}!`;
  ```

* Contoh expression interpolation:

  ```js
  let price = 10;
  let quantity = 5;

  let total = `Total: ${price * quantity}`;
  ```

* Contoh `.map()` dalam template strings:

  ```js
  const items = ["apple", "banana", "orange"];
  const list = `You have ${items.length} items:
    ${items.map(item => `- ${item}`).join('\n')}`;
  ```

* Contoh ternary operator:

  ```js
  const isAdmin = true;
  const message = `Status: ${isAdmin ? 'Admin' : 'User'}`;
  ```

* Tagged templates:

  * template strings dapat menggunakan function tag
  * function menerima:

    * text
    * expressions

* Contoh tagged template:

  ```js
  function highlight(strings, fname) {
    let x = fname.toUpperCase();
    return strings[0] + x + strings[1];
  }

  let name = "John";

  let text = highlight`Hello ${name}, how are you?`;
  ```

* `strings`:

  * array berisi text di antara expressions

* Tagged template dengan multiple expressions:

  ```js
  function highlight(strings, fname1, fname2) {
    let x = fname1.toUpperCase();
    let y = fname2.toUpperCase();
    return strings[0] + x + strings[1] + y + strings[2];
  }
  ```

* Tagged template dengan rest parameter:

  ```js
  function highlight(strings, ...fname) {
    let x = fname[0].toUpperCase();
    let y = fname[1].toUpperCase();
    return strings[0] + x + strings[1] + y + strings[2];
  }
  ```

## Summary

* Template strings menggunakan backticks untuk membuat multi-line strings dan expression interpolation dengan `${}`, serta mendukung tagged templates yang menggunakan function untuk memodifikasi hasil string.
