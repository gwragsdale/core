const { getSystemErrorName } = require("util");

class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  info() {
    return `a ${this.species} named ${this.name}`
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  petInfo() {
    this.pets.forEach(pet => {
      console.log(pet.info());
    });
  }

  numberOfPets() {
    return this.pets.length;
  }

  getName() {
    return this.name;
  }
}

class Shelter {
  constructor(name) {
    this.name = name;
    this.owners = {};
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.owners[owner.getName()]) {
      this.owners[owner.getName()] = owner;
    }
  }

  printAdoptions() {
    for (let owner in this.owners) {
      console.log(`${this.owners[owner].getName()} has adopted the following pets:`);
      this.owners[owner].petInfo();
      console.log("");
    }
  }
}

let butterscotch = new Pet("cat", "Butterscotch");
let pudding = new Pet("cat", "Pudding");
let darwin = new Pet("bearded dragon", "Darwin");
let kennedy = new Pet("dog", "Kennedy");
let sweetie = new Pet("parakeet", "Sweetie Pie");
let molly = new Pet("dog", "Molly");
let chester = new Pet("fish", "Chester");
let thorin = new Pet('bunny', 'Thorin Oakenshield');
let daphne = new Pet('dog', 'Daphne');
let gooster = new Pet('rooster', "Gooster");
let shadow = new Pet('cat', 'Shadow');

let phanson = new Owner("P Hanson");
let bholmes = new Owner("B Holmes");
let gragsdale = new Owner("G Ragsdale");
let animalShelter = new Owner("The Animal Shelter");

let shelter = new Shelter("The Animal Shelter");
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.adopt(gragsdale, thorin);
shelter.adopt(gragsdale, daphne);
shelter.adopt(gragsdale, gooster);
shelter.adopt(animalShelter, shadow);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);