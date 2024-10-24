class PerfectNumber {
  static classify(num) {
    return new PerfectNumber(num).classify();
  }

  constructor(number) {
    this.number = this.validateNumber(number);
  }

  validateNumber(num) {
    if (typeof num === "number" && num > 0) {
      return num;
    } else {
      throw new RangeError("Enter an integer greater than zero.");
    }
  }

  aliquotSum() {
    let target = this.number;
    let divisors = [];

    for (let count = 1; count < target; count += 1) {
      if (target % count === 0) divisors.push(count);
    }

    return divisors.reduce((a, b) => a + b);
  }

  classify() {
    let sum = this.aliquotSum();

    if (sum > this.number) {
      return "abundant";
    } else if (sum === this.number) {
      return "perfect";
    } else {
      return "deficient";
    }
  }
}

module.exports = PerfectNumber;