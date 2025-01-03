// Parent Class
class Animal {
  speak() {
    return "The animal makes a sound.";
  }
}

// Child Class 1
class Dog extends Animal {
  speak() {
    return "The dog says Woof!";
  }
}

// Child Class 2
class Cat extends Animal {
  speak() {
    return "The cat says Meow!";
  }
}

// Test Polymorphism
const animals = [new Animal(), new Dog(), new Cat()];

//   class Child extends Parent {
//     greet() {
//       return super.greet() + " And hello from Child!";
//     }
//   }
