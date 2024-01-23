/*
// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replace("important", "urgent");
console.log(newAdvice);
// replaceAll(pattern, replacement) => replaces every occurence of the pattern
// replace() => only replaces the first occurence

// Question 2
let numbers = [1, 2, 3, 4, 5];

let reversedArray = numbers.slice().reverse();
console.log(reversedArray);

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray);

let forEachReversedArray = [];
numbers.forEach(num => forEachReversedArray.unshift(num));
console.log(forEachReversedArray); 

// Question 3
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

console.log(numbers.includes(8));
console.log(numbers.includes(95));


// Question 4
let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);

let famousStart = "Four score and ";
let fullQuote = famousWords.padStart((famousWords.length + famousStart.length), famousStart);

console.log(fullQuote);

// Question 5
let array = [1, 2, 3, 4, 5];
// array = array.filter(num => num !== 3);
array.splice(2, 1);
console.log(array);
*/

/*
// Question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// flintstones = flintstones.flat();
// flintstones = [].concat(...flintstones);
// flintstones = flintstones.reduce((accum, element) => {
//  return accum.concat(element);
//  }, []);
let newFlintstones = [];

flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

console.log(newFlintstones);
*/

/*
// Question 7
let flintstones = { 
  Fred: 0, 
  Wilma: 1, 
  Barney: 2, 
  Betty: 3, 
  Bambam: 4, 
  Pebbles: 5
};

// let barneyArray = Object.entries(flintstones)[2];
// console.log(barneyArray);
// Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
*/

/*
// Question 8
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));
*/

/*
// Question 9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

title = title.padStart(padding + title.length);
console.log(title);
*/
// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;