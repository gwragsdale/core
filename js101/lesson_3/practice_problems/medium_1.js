// Q1

// let counter = 0;
// let indentation = '';

// while (counter < 10) {
//   console.log(`${indentation}The Flintstones Rock!`);
//   indentation += ' ';
//   counter += 1;
// }

// for (let padding = 0; padding < 10; padding += 1) {
//   console.log(" ".repeat(padding) + "The Flintstones Rock!");
// }

// Q2
// let munstersDescription = "The Munsters are creepy and spooky.";
// let newString = 
// munstersDescription
//   .split('')
//   .map(function(character) {
//     if (character === character.toUpperCase()) {
//       return character.toLowerCase();
//     } else {
//       return character.toUpperCase();
//     }
//   })
//   .join('');                   

// console.log(newString);

// Q3
// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(0));

// Q4
// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// } // .push is destructive 

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// } // .concat returns a new array

// Q7
// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer); // 42 + 8 => 50

// console.log(answer - 8); // 42 - 8 => 34

// Q8
// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// console.log(munsters);

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);

// console.log(munsters);

// Q9
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps("rock", "rock"));