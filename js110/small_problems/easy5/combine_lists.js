/*

# Problem

input: two non-empty arrays of the same length
output: a single array with all elements of input arrays
        with each element taken in alternation

# Example

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

# Data Structure

- Array

# Algorithm

1. create empty array
2. loop over both arrays using an index counter
3. append the elements at the current index of each array
   to the end of the empty array
4. once looping is finished, return the now populated array

*/

function interleave(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i], arr2[i]);
  }

  return result;
}

/* 

# Problem

input: 2 arrays (same as above)
output: 1 array (see above)

explicit rules: 
- use the forEach method to create a single array from both arrays, 
  alternating values

implicit rules:
- can we use forEach as the funciton's only method?
- use forEach only once?

# Examples

- see above

# Data Structure

- Arrays

# Algorithm

- create an empty array
- run forEach on each array
    - set two counters --> counter1 = 0, counter2 = 1
    - on each element of first array, the empty array[counter] = element
    - counter += 2
  - on 2nd array
    - set a counter = 1
    - on each element of 2nd array, empty array[counter] = element
- return new array


*/

function interleaveForEach(arr1, arr2) {
  let result = [];
  result.length = arr1.length + arr2.length;
  let counter1 = 0;
  let counter2 = 1;

  arr1.forEach(element => {
    result[counter1] = element;
    counter1 += 2;
  });

  arr2.forEach(element => {
    result[counter2] = element;
    counter2 += 2;
  });

  return result;
}

console.log(interleaveForEach([1, 2, 3], ['a', 'b', 'c']));

/*

# Problem

input: 2 arrays (same as above)
output: 1 array (see above)

explicit rules: 
- use the .map() method to create a single array from both arrays, 
  alternating values

# Examples

- see above

# Data Structure

- Arrays

# Algorithm

1. 

*/

function interleaveMap(arr1, arr2) {
  let result = [];

  arr1.map((element, i) => {
    return result.push(element, arr2[i]);
  })
}

console.log(interleaveForEach([1, 2, 3], ['a', 'b', 'c']));

function interleaveReduce(arr1, arr2) {
  return arr1.reduce((result, currentValue, i) => {
    result.push(currentValue, arr2[i]);
    
    return result;
  }, []);
}

console.log(interleaveReduce([1, 2, 3], ['a', 'b', 'c']));