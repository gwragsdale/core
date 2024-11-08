/**
 * # problem
 * 
 * - construct objects with a meetup date
 * - each object takes a month number (1 - 12)
 * - and a year (e.g., 2021)
 * - your object should be able:
 *    - to determine the exact date of the meeting
 *    - in the specified month and year
 * 
 * rules
 *  - descriptor argument is a string:
 *    - either one of the following:
 *      - 'first'
 *      - "second"
 *      - "third"
 *      - "fourth"
 *      - "fifth"
 *      - "last"
 *      - "teenth"
 *        - each day of the week has exactly one day
 *          that ends in "-teenth" every month
 * 
 *    - the descriptor is case insensitive
 *
 *  - dayOfTheWeek argument is one of the following strings:
 *    - "Monday"
 *    - "Tuesday"
 *    - "Wednesday"
 *    - "Thursday"
 *    - "Friday"
 *    - "Saturday"
 *    - "Sunday"
 *  
 *    - dayOfTheWeek is case insensitive
 * 
 * # examples
 * 
 * - meetup.day(Wednesday, second) second Wednesday of May 2021
 * - object should determine that the meetup for that month
 *   is 12th of May, 2021
 * 
 * input: "Monday", "first" (in March 2013)
 * output: new Date(this.year, this.month - 1, 4)
 * explanation:
 *  - in the month of March 2013, the 4th is 
 *    the first Monday of that month
 *   
 */

class Meetup {
  static daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ]

  static descriptors = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5, 
    last: 1,
    teenth: 1,
  }

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(day, descriptor) {
    let counter = 0;
    let goal = this.getGoal(descriptor);
    let dayNum = this.getDayNum(day);

    if (descriptor.toLowerCase() === "teenth") return this.teenth(dayNum);
    else if (descriptor.toLowerCase() === "last") return this.last(dayNum);

    for (let currentDay = 1; currentDay <= 31; currentDay += 1) {
      let currentDate = this.getCurrentDate(currentDay);

      if (currentDate.getDay() === dayNum) counter += 1;
      if (counter === goal) return currentDate;
    }

    return null;
  }

  getDayNum(day) {
    return Meetup.daysOfWeek.indexOf(day.toLowerCase());
  }

  getGoal(descriptor) {
    return Meetup.descriptors[descriptor.toLowerCase()];
  }

  teenth(dayNum) {
    for (let currentDay = 13; currentDay <= 19; currentDay += 1) {
      let currentDate = this.getCurrentDate(currentDay);
      if (currentDate.getDay() === dayNum) return currentDate;
    }

    return null;
  }

  last(dayNum) {
    for (let currentDay = 31; currentDay >= 1; currentDay -= 1) {
      let currentDate = this.getCurrentDate(currentDay);

      if (currentDate.getDay() === dayNum) return currentDate;
    }

    return null;
  }

  getCurrentDate(day) {
    let date = new Date(this.year, this.month - 1, day);
    // to account for months with less than 31 days:
    while ((this.month - 1) !== date.getMonth()) {
      day -= 1;
      date = new Date(this.year, this.month - 1, day);
    }

    return date;
  }

  toString() {
    return new Date(this.year, this.month - 1, this.day).toString();
  }
}

module.exports = Meetup;