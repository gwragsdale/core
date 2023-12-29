/*
function roomArea(lengthInMeters, widthInMeters) {
  let readlineSync = require('readline-sync');

  lengthInMeters = readlineSync.prompt('Enter the length of the room in meters: ');
  widthInMeters = readlineSync.prompt('Enter the width of the room in meters: ');

  let areaInMeters = lengthInMeters * widthInMeters;
  let areaInFeet = areaInMeters * 10.7639;

  console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);
}

roomArea();
*/

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the unit of measure\n1) meters 2) feet.");
let inputType = readlineSync.prompt();
inputType = parseInt(inputType, 10);

console.log("Enter the length of the room:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let area = (length * width);
let areaInMeters;
let areaInFeet;

console.log(`${area}`);

if (inputType === 1) {
  console.log(
    `The area of the room is ${area.toFixed(2)} square meters (${(areaInFeet.toFixed(2)) * SQMETERS_TO_SQFEET} square feet).`
    );
} else if (inputType === 2) {
  console.log(
    `The area of the room is ${area.toFixed(2)} square feet (${areaInMeters.toFixed(2) / SQMETERS_TO_SQFEET} square meters).`
  );
}; 