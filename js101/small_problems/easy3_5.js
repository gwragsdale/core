// function that takes positive integer (n) and returns a triangle
//    # of vertical stars on right = n
//    # of stars per row: starts with one (padding = n - 1), 
//   until reaching n on bottom row

//  5 - 1 = 4 + *
//  4 - 2 = 3 + *.repeat(2)

function triangle(n) {
  let padding = ' ';
  let star = '*';
  let counter = 1;
  let shape;
  
  while (counter <= n) {
    shape = padding.repeat(n - counter) + star.repeat(counter);
    console.log(shape);
    counter += 1;
  }
}

triangle(5);
triangle(4);
triangle(3);
triangle(2);
triangle(1);