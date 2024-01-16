// START

// SET function penultimate(string)
//    SET array = string.split(' ')
//    PRINT array[array.length - 2]

// END

function penultimate(string) {
  let arrayFromString = string.split(' ');
  
  return arrayFromString[arrayFromString.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true