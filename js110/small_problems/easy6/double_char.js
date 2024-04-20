let repeater = (str) => str.split('').map(letter => letter += letter).join('');

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater(''));             // ""
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"

function doubleConsonants(str) {
  let consonants = 'bcdfghjklmnpqrstvwxyz';

  return str.split('').map(char => {
    if (consonants.includes(char.toLowerCase())) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""