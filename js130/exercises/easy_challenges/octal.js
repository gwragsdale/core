class Octal {
  constructor(octal) {
    this.octal = this._validate(octal);
  }

  _validate(octal) {
    let result = String(Number(octal));
    if (isNaN(result) ||
        !(octal.split("").every(digit => Number(digit) < 8))) return "0";

    return result;
  }

  toDecimal() {
    let decimal = 0;
    let power = this.octal.length - 1;

    for (let index = 0; index < this.octal.length; index += 1) {
      let currentDigit = Number(this.octal[index]);
      decimal += currentDigit * Math.pow(8, power);
      power -= 1;
    }

    return decimal;
  }
}

module.exports = Octal;