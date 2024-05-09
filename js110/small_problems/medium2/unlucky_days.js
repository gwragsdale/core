/*

# Problem

- input: number
    - representing a year
- output: number
    - representing the number of Friday the 13ths
      in that year

- explicit rules:
    - the year will be greater than 1752 (Gregorian calendar)
    - assume this calendar will be used in perpetuity

- there can be no more than twelve "13ths" in a year
- the number of Friday the 13ths will be fewer than 12
- how will we determine what day a given "13th" falls on?
- will we need to take leap years into account?

# Examples

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

# Data Structures

- object ?
- array ?
- JS's Date object?

# Algorithm


1. Iterate over all the months of the given year.
    - using the Date() constructor
    - and an array with strings for the 13th of each month:
        - Jan 13
        - Feb 13
        - etc.
    - while iterating over the months array, append the year argument
    - if this, when passed into Date() constructor, results in a string
      that includes "Fri"
    - count += 1
2. For each month, get the day that falls on the 13th.
3. Count the 13ths that fall on a Friday.
4. Return the count.


# Code

*/

const FRIDAY = 5;
const MONTHS_13th_DAY = [
  'Jan 13', 'Feb 13', 'Mar 13', 'Apr 13', 'May 13', 'Jun 13', 
  'Jul 13', 'Aug 13', 'Sep 13', 'Oct 13', 'Nov 13', 'Dec 13'
];

function fridayThe13ths(year) {
  let count = 0;

  MONTHS_13th_DAY.forEach(date => {
    let currentDate = new Date(`${date} ${year}`);
    
    if (currentDate.getDay() === FRIDAY) {
      count += 1;
    }
  });

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2025));
