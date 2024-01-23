// function negative(num) {
//   if (Math.sign(num) === 1) {
//     return num * -1;
//   } else if (Math.sign(num) === 0) {
//     return num * -0;
//   } else {
//     return num;
//   }
// }

function negative(number) {
  return Math.abs(number) * -1;
}



console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));