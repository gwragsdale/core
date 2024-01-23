// Question 1
let numbers = [1, 2, 3];
numbers[6] = 5; // no error raised

console.log(numbers[4]); // undefined

// Question 2
// String.prototype.endsWith()

// Question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty('Spot')); // false
console.log(Object.hasOwn(ages, 'Herman')); // preffered where supported

// Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
munstersDescription = munstersDescription[0].toUpperCase() + 
                      munstersDescription.slice(1).toLowerCase();
console.log(munstersDescription);
/*
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
*/

// Question 5
console.log(false == '0'); // => true
console.log(false === '0'); // => false

// Question 6
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges); // Object.assign(target, source1, source2, ...)
console.log(ages);

// Question 7
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino')); // => false
console.log(str2.includes('Dino')); // => true

/* 
Alternate solutions:
str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true

str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true
*/

// Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

/* 
Alternate solutions:
flintstones = flintstones.concat("Dino");

flintstones[flintstones.length] = "Dino";
*/

// Question 9
// push(element1, element2, element 3)

// Question 10
let advice = str1.slice(0, str1.indexOf("house"));
console.log(advice);