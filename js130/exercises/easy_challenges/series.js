/*

# problem

input: string of digits, num
- num: represents the specified length of slices

output: nested array 
  - representing the slices of the specified length

rules: 
- throw error if num argument to slices() > the number property in the Series instance


# examples

# data structures

array to hold current slice

# algorithm

- guard clause: if num > this.number.length, throw RangeError
- let slices = []

- start index at 0
- increment while index + sliceSize <= this.number.length

- get current slice this.number.slice(index, index + sliceSize)
- split("") and transform each element into a number
- push the result to the slices array

- return the slices array
*/

class Series {
  constructor(str) {
    this.number = str;
  }

  slices(sliceSize) {
    if (sliceSize > this.number.length) throw new RangeError();
    let slices = [];

    for (let index = 0; index + sliceSize <= this.number.length; index += 1) {
      let endIndex = index + sliceSize;
      let currentSlice = this.number.slice(index, endIndex);
      slices.push(this.formatSlice(currentSlice));
    }

    return slices;
  }

  formatSlice(str) {
    return str.split("").map(digit => Number(digit));
  }
}

module.exports = Series;