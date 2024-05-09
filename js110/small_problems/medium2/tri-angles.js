/*

# Problem

- input: three integers
    - representing three angles of a triangle

- output: string
    - representing the type of triangle:
        - right - one angle is 90 degrees
        - acute - all angles are less than 90 degrees
        - obtuse - one angle is greater than 90 degrees
        - invalid 
            - sum doesn't add up to 180
            - any angle is <= 0
  
- explicit rules:
    - all angles have integer values
    - arguments are in degrees

# Examples

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

# Data Structures

- array

# Algorithm

1. first check for validity of angles
2. split input into array
3. if array includes 90, return right
4. if some element in array > 90, return obtuse
5. if every element < 90, return accute

# Code

*/

function triangle(angle1, angle2, angle3) {
  let angleArray = [angle1, angle2, angle3];
  let totalDegrees = angleArray.reduce((sum, num) => num + sum, 0);

  if (totalDegrees !== 180 || angleArray.includes(0)) {
    return 'invalid';
  } else if (angleArray.includes(90)) {
    return 'right';
  } else if (angleArray.some(num => num > 90)) {
    return 'obtuse';
  } else {
    return 'accute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
