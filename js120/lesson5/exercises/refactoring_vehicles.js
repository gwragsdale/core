class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels; // it makes sense to add a wheels property
  }                       // and modify the getWheels method to return its value

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }

  getWheels() {
    return 2;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}