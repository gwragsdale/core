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
let munstersDescription = "The Munsters are creepy and spooky.";
let newString = 
munstersDescription
  .split('')
  .map(function(character) {
    if (character === character.toUpperCase()) {
      return character.toLowerCase();
    } else {
      return character.toUpperCase();
    }
  })
  .join('');                   

console.log(newString);