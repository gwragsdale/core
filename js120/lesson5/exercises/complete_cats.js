class Pet {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

class Cat extends Pet {
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info()); // My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotch.info()); // My cat Butterscotch is 10 years old and has tan and white fur.


// if we move the age property to the Pet class, we wouldn't need a constructor
// because all of the properties would be taken care of in the Pet super class
// and the Cat class will inherit those properties
// I think it is a good idea to move the color property to the Pet class
// because color is not a property exclusive to cats