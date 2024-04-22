/*

# Problem

- input: array
- output: same array, reversed

- explicit rules:
    - do not use Array.prototype.reverse()

- [1, 2, 3, 4]
--> [4, 3, 2, 1]
    - arr[0] = arr[arr.length - 1]
    - arr[1] = arr[arr.length - 2]
    - arr[2] = arr[arr.length - 3]
    - arr[3] = arr[arr.length - 4]

# Examples

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

# Data Structures

- array

# Algorithm

1. create shallow copy of input array
2. start loop that runs while (index = 0) for length of input array
3. in the loop, re-assign input array to the removed element 
      from the end of the copied array
4. return input array

*/

function reverse(arr) {
  let arrCopy = arr.slice();

  for (let index = 0; index < arr.length; index += 1) {
    arr[index] = arrCopy.pop();
  }

  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true