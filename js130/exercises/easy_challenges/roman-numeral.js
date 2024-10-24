class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let toConvert = this.number;
    let result = "";

    for (let roman in RomanNumeral.ROMAN_NUMERALS) {
      let current = RomanNumeral.ROMAN_NUMERALS[roman];
      let multiplier = Math.floor(toConvert / current);
      let remainder = toConvert % current;

      result += roman.repeat(multiplier);
      toConvert = remainder;
    }

    return result;
  }
}

module.exports = RomanNumeral;