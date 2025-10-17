# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which can contain data and code to manipulate that data. JavaScript supports OOP through objects, prototypes, and ES6 classNamees.

## Key Concepts

### 1. Objects

Objects are collections of key-value pairs. They can store properties and methods.

```js
let person = {
  name: "Ali",
  age: 25,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
person.greet(); // Hello, Ali
```

### 2. Constructor Functions

Used to create multiple similar objects.

```js
function Car(model, year) {
  this.model = model;
  this.year = year;
}
let car1 = new Car("Toyota", 2020);
```

### 3. Prototypes

Every function and object in JavaScript has a prototype. You can add methods to constructor functions using prototypes.

```js
Car.prototype.drive = function () {
  console.log(this.model + " is driving.");
};
car1.drive(); // Toyota is driving.
```

### 4. ES6 classNamees

classNamees provide a cleaner syntax for creating objects and inheritance.

```js
className Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
className Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
let dog = new Dog("Rex");
dog.speak(); // Rex barks.
```

## OOP Principles

- **Encapsulation:** Bundling data and methods together.
- **Inheritance:** Reusing code via parent-child relationships.
- **Polymorphism:** Methods behave differently based on the object.
- **Abstraction:** Hiding complex details and showing only essentials.

## Why Use OOP?

- Organizes code for better readability and maintenance.
- Promotes code reuse and scalability.

---

This file covers the basics of OOP in JavaScript, including objects, constructors, prototypes, classNamees, and core principles. For more advanced topics, explore design patterns and ES6+ features.
