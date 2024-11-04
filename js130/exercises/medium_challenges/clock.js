class Clock {
  static at(hour, minutes) {
    minutes = minutes ? minutes : 0;
    return new Clock(hour, minutes);
  }

  static MAX_HOURS = 24;
  static MAX_MINUTES = 60;

  constructor(hour, minutes) {
    this.hour = hour;
    this.minutes = minutes;
  }

  add(minutes) {
    let addHours = Math.floor(minutes / Clock.MAX_MINUTES);
    let addMinutes = minutes % Clock.MAX_MINUTES;

    while (addHours > Clock.MAX_HOURS) {
      addHours -= Clock.MAX_HOURS;
    }

    let newHour = this.hour + addHours;
    if (newHour === Clock.MAX_HOURS) newHour = 0;
    let newMinutes = this.minutes + addMinutes;

    return Clock.at(newHour, newMinutes);
  }

  subtract(minutes) {
    let subtractHours = Math.floor(minutes / Clock.MAX_MINUTES);
    let subtractMinutes = minutes % Clock.MAX_MINUTES;
    let newHour = this.hour === 0 ? 24 : this.hour;
    let newMinutes = this.minutes;


    if (subtractMinutes > newMinutes) {
      newMinutes += 60;
      newHour -= 1;
    }

    newHour -= subtractHours;
    newMinutes -= subtractMinutes;

    while (newHour < 0) {
      newHour += Clock.MAX_HOURS;
    }

    return Clock.at(newHour, newMinutes);
  }

  isEqual(clock) {
    return this.hour === clock.hour && this.minutes === clock.minutes;
  }

  toString() {
    let hour = `${this.hour}`.padStart(2, "0");
    let minutes = `${this.minutes}`.padStart(2, "0");
    return `${hour}:${minutes}`;
  }
}

let clock = Clock.at(10).subtract(3061);
console.log(clock);

module.exports = Clock;


/*

# problem

- given a time
    - with hours ranging from 0 - 24
    - with minutes ranging from 0 - 60

- and an input number representing the number of minutes
  to add to the given time

- return a new object with the "hour" and "minutes" properties
  updated accordingly

rules:
- must wrap-around if the hours exceed 24
- must update hour if the minutes exceed 60

# examples

given: { hour: 8, minutes: 0 }
input: 3
output: { hour: 8, minutes: 3 }

given: { hour: 8, minutes: 0 }
input: 61
output: { hour: 9, minutes: 1 }
explanation: because the minutes exceeded 60, the hour incremented by 1

given: { hour: 24, minutes: 55 }
input: 7
output: { hour: 0, minutes: 2 }
explanation: because the minutes exceeded 60 after adding 7
             the hour incremented by 1 (to 25),
             but because the hour exceeded 24,
             it wrapped around to 0

given: {  hour: 10, minutes: 0 }
input: 3061
output: { hour: 13, minutes: 01 }
explanation: 3061 / MINUTES_PER_HOUR ==> 51 hours
             remainder (3061 % 60) ==> 1 minutes
             51 / HOURS_PER_DAY ==> 2
             remainder (51 % HOURS_PER_DAY) ==> 3 hours
             10 + 3 ==> hour: 13
             0 + 1 ==> minutes: 1

# data structures

- array to store [hour, minutes]?

# algorithm

- set hour = this.hour
- set minutes = this.minutes

- break input minutes into hours
    - for hours --> Math.floor(input / MINUTES_PER_HOUR)
        - while hours > 24, hours -= 24

    - for minutes --> input % MINUTES_PER_HOUR

- return new Clock.at(this.hour + addHours, this.minutes + addMinutes)

# problem

- see above, but subtract

# examples

given: { hour: 0, minutes: 0 }
input: 50
output: { hour: 23, minutes: 10 }
explanation: if subtractMinutes (ie, 50) > this.minutes (ie, 0)
             then add 60 to this.minutes (0 + 60) and subtractMinutes
             ==> 60 - 50 ==> 10
             if you have to add 60 to minutes, subtract 1 from hour
             ==> 0 (if 0, add 24); 24 - 1 ==> 23
             23:10



*/