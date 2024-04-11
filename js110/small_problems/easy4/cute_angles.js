/*

# Problem

input: floating point number representing an angle
output: string representing that nagle in degrees, minutes, and seconds

explicit rules:
    * degree symbol: '˚'
    * minutes: '''
    * seconds: '"'
  
  * 60 minutes in a degree
  * 60 seconds in a minute
  
implicit rules:
  * input number will be no more than 360
  * input number will be no less than 0
  * round only to the second
  
# Examples

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

* converting .73 to degrees and minutes:
    - degrees: .73 * 60 = 43.8 --> 43'
    - minutes: .8 * 60 = 48 --> 48"

* converting .034773 to degrees and minutes:
    - .034773 * 60 = 2.08638 --> 02'
    - .08638 * 60 = 5.1828 --> 05"

# Data Structures

* Arrays

# Algorithm

1. set degrees = num rounded down to nearest integer
2. set minutes = Round((num - degrees) * 60)
3. set seconds = 

4. concatenate the above variables with the appropriate symbols

# Code

*/

function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = (angle - degrees) * 60;
  let seconds = Math.floor(((minutes - Math.floor(minutes)) * 60));
  minutes = Math.floor(minutes);
  let dms = [];

  dms.push(degrees, '°', minutes, "'", seconds, '"');
  
  return dms.map((char) => {
    if (typeof char === 'string') {
      return char = char;
    } else if (char < 10) {
      return char = '0' + String(char);
    } else {
      return char = String(char);
    }
  }).join('');
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"