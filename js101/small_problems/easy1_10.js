// START

// SET function addMultiplesOf3And5(number)
//    SET empty array multiplesArray

//    FOR loop - SET iterator = 1; i <= number; += 1
//        IF (iterator % 3 is 0) OR (% 5 is 0), multiplesArray.push(iterator)

//    multiplesArray.filter((value, index) => multiplesArray.indexOf(value) === index);

//    SET initialValue = multiplesArray[0]

//    RETURN multiplesArray.reduce(
//      (accumulator, currentValue) => accumulator + currentValue, initialValue)

function multiplesArray(number) {
  let multiplesArray = [];
  let counter = 1;

  while (counter < number) {
    if (counter % 3 === 0 || counter % 5 === 0) {
    multiplesArray.push(counter);
    }

    counter += 1;
  }

  return multiplesArray;
}  

function multisum(number) {
  let reducedArray = multiplesArray(number);

  return reducedArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue, number
    );
}



console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168