// function that tkes date
//    returns century
//   turn number into string
//   get string.length
//      if length is 1, add 1 to first digit to get century (eg 101 = 2nd cent)

function century(year) {
  let stringYear = String(year);
  let centuryDigits = Number(stringYear.substring(0, Math.floor(stringYear.length / 2))) + 1;
  let centuryEnding = ['st', 'nd', 'rd', 'th'];
  
  return centuryDigits;
}

console.log(century(15));
console.log(century(99));
console.log(century(2021));
console.log(century(3001));