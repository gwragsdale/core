function foursAndNines(array) {
  let foursAndNinesArray = [];
  let everythingElseArray = array.filter((num, i, arr) => {
    return !(num < arr[i + 1]) && !(num > arr[i - 1]);
  });

  array.forEach(function(num, i, arr) {
    if (num < arr[i + 1]) {
      foursAndNinesArray.push(arr[i + 1] - num);
    }});
  
  return everythingElseArray.concat(foursAndNinesArray);
}

function romanToArabic(roman) {
  let romanArray = roman.split('');
  
  let arabicArray = romanArray.map(function(char) {
    switch(char) {
      case 'M': return 1000;
      case 'D': return 500;
      case 'C': return 100;
      case 'L': return 50;
      case 'X': return 10;
      case 'V': return 5;
      case 'I': return 1;
    }
  }); 

  return foursAndNines(arabicArray).reduce((a, c) => a + c, 0);
}

console.log(romanToArabic("I")); // 1
console.log(romanToArabic("IV")); // 4
console.log(romanToArabic("XCIV")); // 94
console.log(romanToArabic("CMXCIV")) // 994