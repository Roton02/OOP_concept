// Abstract Parent Class (Using a Base Class)
class Vehicle {
    constructor(name) {
      if (this.constructor === Vehicle) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.name = name;
    }
  
    start() {
      throw new Error("Method 'start()' must be implemented.");
    }
  }
  
  // Concrete Child Class
  class Car extends Vehicle {
    start() {
      return `${this.name} is starting with a key!`;
    }
  }
  
  // Concrete Child Class
  class Bike extends Vehicle {
    start() {
      return `${this.name} is starting with a button!`;
    }
  }
  
  // Example Usage
  try {
    const myVehicle = new Vehicle("General Vehicle"); // Error: Abstract classes can't be instantiated.
  } catch (error) {
    console.error(error.message);
  }
  
  const myCar = new Car("Toyota");
  console.log(myCar.start()); // Output: Toyota is starting with a key!
  
  const myBike = new Bike("Yamaha");
  console.log(myBike.start()); // Output: Yamaha is starting with a button!
  