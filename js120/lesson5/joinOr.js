/**
 * # Problem
 * 
 * input: array, delimiter, finalDelimiter
 * output: string
 * explanation: the string should be a delimited version of the array,
 *              given the optional dilimiter arguments
 * 
 * # Examples
 * 
 * input: [1, 2]
 * output: "1 or 2"
 * explanation: when there are just two elements in the input array,
 *              only one delimter is possible, and its default should be 'or'
 * 
 * input: [1, 2, 3]
 * output: "1, 2, or 3"
 * explanation: when there are more than 2 elements, the default delimiter
 *              should be "," and "or"
 * 
 * input: [1, 2, 3], "; "
 * output: "1; 2; or 3"
 * explanation: default finalDelimiter is "or"
 * 
 * input: [1, 2, 3], ", ", "and"
 * output: "1, 2, and 3"
 * 
 * # data structures
 * 
 * - array
 * - loop
 * 
 * # algorithm
 * 
 * - start with result = ""
 * - loop over elements in array (while counter is < arr.length - 2)
 * - result += currentElement + delimiter
 * - when counter reaches arr.length - 2, 
 *      - add the final delimiter + " " to result
 * - add the final element
 * - return result
 */

function joinOr(arr, delimiter = ", ", finalDelimiter = "or") {
  let result = "";
  if (arr.length === 2) {
    return arr[0] + " " + finalDelimiter + " " + arr[1];
  } else if (arr.length === 1) {
    return arr[0];
  }

  for (let idx = 0; idx < arr.length; idx += 1) {
    let currentElement = arr[idx];

    if (idx < arr.length - 2) {
      result += (currentElement + delimiter);
    } else if (idx === arr.length - 2) {
      result += (currentElement + delimiter + finalDelimiter + " ");
    } else {
      result += currentElement;
    }
  }

  return result;
}

console.log(joinOr([1, 3])); // '1, 2, or 3'
console.log(joinOr([1, 2, 3], "; "));
console.log(joinOr([1, 2, 3], ", ", "and"));