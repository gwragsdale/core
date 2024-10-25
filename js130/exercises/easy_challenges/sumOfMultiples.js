/*

input: natural number, set of other numbers

output: number
- ie the sum of all the multiples of the numbers in the set
  that are less than the first number

rules:
- if no set of numbers is given, default to [3, 5], if no arg given

# examples

input: 1, [3, 5]
output: 0
explanation: there are 0 multiples of 3 or 5 that are less than 1

input: 20, [3, 5]
output: 78
explanation:
- the natural numbers < 20 that are multiples of either 3 & 5:
    - 3, 5, 6, 9, 10, 12, 15, 18
    - their sum is 78

# data structures

- array for multiples

# algorithm

- get multiples of otherNums that are < this.number
    - set multiples = []
    - for each number, loop while multiple < this.number
    - if multiple is not in multiples array, push to array
    - return a sum of the array


SumOfMultiples.to(naturalNumber) always using [3, 5] as the otherNums
*/

class SumOfMultiples {
  constructor(...args) {
    if (args.length === 0) args = [3, 5];
    this.otherNums = args;
  }

  static to(num) {
    return new SumOfMultiples(3, 5).to(num);
  }

  to(num) {
    return this.getMultiplesSum(num);
  }

  getMultiplesSum(naturalNumber) {
    let multiples = [];

    this.otherNums.forEach(num => {
      let multiplier = 1;
      let multiple = num * multiplier;

      while (multiple < naturalNumber) {
        if (!multiples.includes(multiple)) multiples.push(multiple);
        multiplier += 1;
        multiple = num * multiplier;
      }
    });

    return multiples.reduce((sum, num) => num + sum, 0);
  }
}

module.exports = SumOfMultiples;