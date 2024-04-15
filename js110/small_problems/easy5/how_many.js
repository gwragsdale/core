/*

# Problem

- write a function that takes an array as an argument
- count the number of occurrences of each element in the array
- then log the element alongside the number of occurrences
- words are case sensitive
- sequence of output doesn't matter as long as it is correct

- input: array
- output: log of elements and number of occurrences
    - element => 3

- implicit rules
    - elements will always be strings?
    - output will be a string

# Examples

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

# Data Structures

- Arrays
- Object

# Algorithm

1. create an empty object = {}
2. loop over input array
    - assign array elements as keys in object
    - values += 1
3. log the entries to the console

# Code
*/

function countOccurrences(array) {
  let occurrences = {};

  array.forEach(word => {
    if (!occurrences.hasOwnProperty(word)) {
      occurrences[word] = 1;
    } else {
      occurrences[word] += 1;
    }
  });

  for (let keys in occurrences) {
    console.log(`${keys} => ${occurrences[keys]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

function countOccurrencesCaseInsensitive(array) {
  let occurrences = {};

  array = array.map(word => word.toLowerCase());

  array.forEach(word => {
    if (!occurrences.hasOwnProperty(word)) {
      occurrences[word] = 1;
    } else {
      occurrences[word] += 1;
    }
  });

  for (let keys in occurrences) {
    console.log(`${keys} => ${occurrences[keys]}`);
  }
}

countOccurrencesCaseInsensitive(vehicles);