class Animal {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return 'walks';
  }

  walk() {
    return `${this.name} ${this.gait()} forward`
  }
}

class Person extends Animal {
  constructor(name) {
    super(name);
  }

  gait() {
    return "strolls";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  gait() {
    return "saunters";
  }
}

class Cheetah extends Cat {
  constructor(name) {
    super(name);;
  }

  gait() {
    return "runs";
  }
}

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

// or use a Mixin function 
// and use Object.assign to assign it
// to the classes' prototypes