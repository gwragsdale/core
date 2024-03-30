/*
# Problem

input: number 
  - representing the number of cubes available to build a valid structure 

output: number (
  - representing number of cubes leftover after building the tallest valid structure

explicit rules:
  - structure must be valid:
    - built in layers
    - top layer is a single cube
    - each cube on an upper layer must be supported by 4 cubes on the lower level
    - a cube on a lower level can provide support for multiple uppler layer cubes
    - there can be no gaps between cubes

implicit rules:
  - the input number must be a positive integer (representing the number of cubes)
  - negative numbers not allowed
  - valid shapes must be pyramids?


questions:
  - if the top layer will always have a single block, 
      will the second layer always have 4 blocks, and so on?
  - is it correct to assume that all blocks are of equal size?
  - will the input be a Number or a String or something else?


# Examples and test cases

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

first layer: 1 block (1 x 1) --> 1 total
second layer: 4 blocks (2 x 2) --> 5 total
third layer: 9 blocks (3 x 3) --> 14 total
fourth layer: 16 blocks (4 x 4) --> 30 total

- if there are 0 blocks, output 0 blocks left over
- if all blocks are used, output 0 blocks left over
- extra blocks on lower layers not allowed


# Data Structures

- loop over numOfBlocks (until <= 0)
    - currentLayer = 1
    - calculate numOfBlocks - (currentLayer * currentLayer)
    - currentLayer += 1
    - finally, return numOfBlocks 
        - either 0 or (Math.abs(negative numOfBlocks)) 


# Algorithm

- set numOfBlocks = input number
  - eg 14
- set currentLayer = 1

- while (numOfBlocks > 0)
    - if numOfBlocks >= currentLayer * currentLayer
        - numOfBlocks -= (currentLayer * currentLayer)
    - currentLayer += 1

- return numOfBlocks


# Implement a Solution in Code

*/

function calculateLeftoverBlocks(numOfBlocks) {
  let currentLayer = 1;

  while (numOfBlocks > 0) {
    if (numOfBlocks >= currentLayer * currentLayer) {
      numOfBlocks = numOfBlocks - (currentLayer * currentLayer);
    } else {
      break;
    }
    
    currentLayer += 1;
  }

  return numOfBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true