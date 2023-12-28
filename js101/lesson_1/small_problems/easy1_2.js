/* for (let number = 1; number <= 99; number += 2) {
  console.log(number);
} */


//Further exploration:

function oddNumbers(limit = 100) {
  for (let number = 1; number <= limit && number < 100; number += 2) {
    console.log(number);
  }
}

oddNumbers();
oddNumbers(5);
oddNumbers(115);
oddNumbers(17);
oddNumbers(28);
