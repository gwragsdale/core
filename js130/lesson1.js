let arr = [1, 2, 3, 4,];

function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

function filter(array, callback, thisArg) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback.call(thisArg, array[index], index, array)) {
      result.push(array[index]);
    }
  }

  return result;
}

function map(array, callback, thisArg) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    let value = array[index];

    result.push(callback.call(thisArg, value, index, array));
  }

  return result;
}

function reduce(array, callback, initialValue = array.shift()) {
  let result = initialValue;

  for (let i = 0; i < array.length; i += 1) {
    let currentElement = array[i];

    result = callback(result, currentElement);
    initialValue = result;
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]