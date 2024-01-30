// function that takes a number as an argument
//    multiplies it by 2
//    UNLESS that number is a double number
//    ie str.length % 2 is 0
//    && first half of digits are same as last half of digits
//    eg 44, 103103

// str.length = 4
// indexes are 0, 1, 2, 3 or str.length - 1

// if str.substring(0, str.length / 2) === str.substring((str.length / 2) - 1)

function twice(number) {
  checkNumber = String(number);

  if ((checkNumber.length % 2 === 0) && 
        checkNumber.substring(0, checkNumber.length / 2) === checkNumber.substring(checkNumber.length / 2)) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(103103));