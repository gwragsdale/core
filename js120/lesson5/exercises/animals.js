// Animal: legCount, species
// Cat: name, age, status
// 

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status, legs = 4, species = 'cat') {
    super(name, age, legs, species, status);
  }

  introduce() {
    return Animal.prototype.introduce.call(this) + " Meow meow!";
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

class Dog extends Animal {
  constructor(name, age, status, master, legs = 4, species = 'dog') {
    super(name, age, legs, species, status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let daphne = new Dog('Daphne', 1, 'happy-go-lucky', "William");
console.log(daphne.introduce());
console.log(daphne.greetMaster());