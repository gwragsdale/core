/*

# Problem

- write a function that takes an integer (positive or negative)
    representing the number of minutes before or after midnight
- and returns the time of day as a string in 24 hour format (hh:mm)

- input: number
- output: string

- explicit rules:
    - don't use js's Date class methods
    - negative number is before midnight
    - positive number is after midnight

- implicit rules:
    - input number can be more than the equivalent of 24 hours
    - input number will always be an integer

# Examples

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

IF INPUT IS NEGATIVE:

- (-1437) --> HOUR --> 1437 / 60 --> 23.95 
          --> 24 - 23.95 = (rounded down) 0
**MINUTES --> 60 - (1437 % 60) --> 60 - 57 
          --> 60 - 57 = 3
    - return HOUR concat MINUTE --> 00:03

- (-3) --> HOUR --> 3 / 60 --> 0.05
       --> 24 - 0.05 = (rounded down) 23
**MINUTES --> 60 - (3 % 60) --> 60 - 3 = 57
    -  return HOUR concat MINUTES = 23:57

IF INPUT IS POSITIVE:

- 3000 --> HOUR --> (3000 / 60) --> 50
    - if result is > 24, then subtract 24 from result until < 24
    - 50 - 24 = 26; 26 - 24 = 2
- MINUTES --> (3000 % 60) --> 0
    - return HOUR concat MINUTES --> 02:00

- 800 --> HOUR --> (800 / 60) --> round down = 13
      - if result < 24, this is our number
- MINUTES --> (800 % 60) --> 20
    - return 13:20


# Data Structure

- Object
- Array

# Algorithm

1. create consts:
    - HOUR = num / 60 (rounded up)
    - MINUTES = 60 - (num % 60)
2. create an object of number keys and string values representing hh:mm

        
*/

function timeOfDay(num) {
  let hour;
  let minutes;
  let hhmm = Math.abs(num);

  if (num >= 0) {
    hour = Math.floor(hhmm / 60);
    minutes = hhmm % 60;

    while (hour >= 24) {
      hour = Math.floor(hour - 24);
    }

  } else if (num < 0 && hhmm < 1440) {
    hour = Math.floor(Math.abs(24 - (hhmm / 60)));
    minutes = 60 - (hhmm % 60);

    while (hour >= 24) {
      hour = Math.round(hour - 24);
    }

  } else if (hhmm > 1440) {
    hour = Math.round(Math.abs(24 - (hhmm / 60)));
    minutes = 60 - (hhmm % 60);

    while (hour >= 24) {
      hour = Math.round(hour - 24);
    }

    hour = Math.abs(hour - 24);
  }

  return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");    
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");   
console.log(timeOfDay(-4231) === "01:29"); 

function afterMidnight(hhmm) {
  if (hhmm === '00:00' || hhmm === '24:00') return 0;

  let minutesArray = hhmm.split(':').map(num => Number(num));
  

  return (minutesArray[0] * 60) + minutesArray[1];
}

function beforeMidnight(hhmm) {
  if (hhmm === '00:00' || hhmm === '24:00') return 0;

  let minutesArray = hhmm.split(':').map(num => Number(num));

  return 1440 - ((minutesArray[0] * 60 + minutesArray[1]));
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);