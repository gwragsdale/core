let number = 5;

function test(number) {
  number = 3;
}

test(number);
console.log(number);
// => 5