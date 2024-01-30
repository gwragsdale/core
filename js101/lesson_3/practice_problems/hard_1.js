// Q1
// { prop1: 'hi there', }
// undefined

// Q2
// {first : [1, 2]}

// Q3
// A
// function messWithVars(one, two, three) { // shadows the global variables
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(one); // still ["one"]
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// B
// function messWithVars(arr1, arr2, arr3) { // shadows global variables
//   arr1 = ["two"];
//   arr2 = ["three"];
//   arr3 = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(one); // still ["one"] even after changing the variable names - not sure why
// console.log(two);
// console.log(three);

// C
// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two"); // splice is destructive and so changes the arrays
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(one); // ["two"]
// console.log(two); // [" thre"]
// console.log(three); // ["one"]