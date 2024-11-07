Math.seedrandom = require('seedrandom');

class Robot {

  static previouslyUsedNames = [];
  static ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static DIGITS = "1234567890";

  static reset() {
    let newName = "";
    let alphaRange = Robot.ALPHABET.length;
    let digitRange = Robot.DIGITS.length;

    for (let count = 1; count <= 5; count += 1) {
      if (count <= 2) {
        newName += Robot.ALPHABET[this.getRandomIndex(alphaRange)];
      } else {
        newName += Robot.DIGITS[this.getRandomIndex(digitRange)];
      }
    }

    if (!Robot.previouslyUsedNames.includes(newName)) {
      Robot.previouslyUsedNames.push(newName);
      return newName;
    } else {
      return this.reset();
    }
  }

  static getRandomIndex(rangeLimit) {
    let randomNum = new Math.seedrandom();

    return Math.floor(randomNum() * rangeLimit);
  }

  #name;

  constructor() {
    this.#name = Robot.reset();
  }

  reset() {
    let newName = Robot.reset();
    this.#name = newName;
  }

  name() {
    return this.#name;
  }
}

module.exports = Robot;