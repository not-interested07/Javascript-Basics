* * *

# 📘 JavaScript OOP & `this` Reference Notes

## 1. Object-Oriented Programming (OOP) in JS

* **Idea**: Organize code into reusable, structured objects.
    
* Objects contain **properties** (data) and **methods** (functions).
    
* Example:
    
    ```js
    const user = {
      name: "Alice",
      greet() {
        console.log(`Hello, ${this.name}!`);
      }
    };
    user.greet(); // Hello, Alice!
    ```
    

* * *

## 2. Creating Objects with Functions

Before classes, JS used **constructor functions**:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Bob", 25);
console.log(p1.name); // Bob
```

You must call with `new` → otherwise `this` won’t point to the new object.

* * *

## 3. Classes (Modern Syntax)

`class` is syntactic sugar over constructor functions.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
```

* * *

## 4. Private Properties and Methods

Modern JS supports **private fields** with `#`.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
// acc.#balance ❌ Error (private)
```

* * *

## 5. Inheritance

Classes can extend other classes.

```js
class Vehicle {
  drive() {
    console.log("Driving...");
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Beep beep!");
  }
}

const c = new Car();
c.drive(); // Driving...
c.honk();  // Beep beep!
```

* * *

## 6. Method Overriding & Polymorphism

Child classes can override parent methods.

```js
class Bird {
  speak() {
    console.log("Generic chirp");
  }
}
class Parrot extends Bird {
  speak() {
    console.log("Hello!");
  }
}

new Bird().speak();   // Generic chirp
new Parrot().speak(); // Hello!
```

* * *

## 7. The `this` Keyword in JavaScript

### a) Inside a Method

`this` points to the object that owns the method.

```js
const obj = {
  value: 42,
  show() {
    console.log(this.value);
  }
};
obj.show(); // 42
```

### b) Inside a Function (not a method)

By default in **strict mode**, `this` is `undefined`.

```js
function logThis() {
  console.log(this);
}
logThis(); // undefined (in strict mode)
```

You can change it with `.call`, `.apply`, or `.bind`:

```js
logThis.call("hello"); // logs: [String: 'hello']
```

### c) In the Global Scope

```js
console.log(this);
// In browsers: `window`
// In Node.js: `{}` (module context)
```

### d) Arrow Functions

Arrow functions do **not** bind their own `this`.  
They use the value of `this` from the surrounding lexical scope.

```js
const object3 = {
  method: () => {
    console.log(this);
  }
};
object3.method(); 
// logs whatever `this` was outside object3, NOT object3 itself
```

### e) Common Pitfall

```js
const object2 = {
  a: 2,
  b: this.a // ❌ `this` is not bound here, so b = undefined
};
```

* * *

## 8. Quick Summary of `this`

1. Inside a method → `this` = the object.
    
2. Inside a normal function → `this` = `undefined` (strict mode).
    
3. Arrow functions → do not change `this`, they inherit it.
    
4. With `.call/.apply/.bind` → you can manually set `this`.
    

* * *

✨ With these, you have a structured guide:

* OOP basics → Functions → Classes → Private fields → Inheritance → Polymorphism.
    
* Deep dive into `this` (methods, functions, arrows, global).
    

* * *

