class BeerSong {
  static verse(num, endNum) {
    let result = "";
    let start = this.assignNumbers(num, endNum)[0];
    let end = this.assignNumbers(num, endNum)[1];

    while (start >= end) {
      if (start > 0 && start !== end) {
        result += `\n\n` + this.getVerse(start);
      } else if (start > 0 && start === end) {
        result += this.getVerse(start);
      } else {
        result += this.getLastVerse();
      }
      start -= 1;
    }

    return result;
  }

  static verses(num, endNum) {
    return this.verse(num, endNum);
  }

  static lyrics() {
    return this.verse();
  }

  static assignNumbers(start, end) {
    if (start === undefined && end === undefined) return [99, 0];
    if (start !== undefined && end === undefined) return [start, start];
    if (start !== undefined && end !== undefined) return [start, end];
  }

  static getVerse(num) {
    let nextNum = num - 1;
    let bottles = num > 1 ? "bottles" : "bottle";
    let nextBottles;

    if (nextNum === 0) {
      nextBottles = "no more bottles";
    } else if (nextNum === 1) {
      nextBottles = "bottle";
    } else {
      nextBottles = "bottles";
    }

    return `${num} ${bottles} of beer on the wall, ${num} ${bottles} of beer.\n` +
           `Take ${num === 1 ? "it" : "one"} down and pass it around,${nextNum > 0 ? ` ${nextNum}` : ""} ${nextBottles} of beer on the wall.\n`;
  }

  static getLastVerse() {
    return "No more bottles of beer on the wall, no more " +
            "bottles of beer.\nGo to the store and buy some " +
            "more, 99 bottles of beer on the wall.\n";
  }
}

console.log(BeerSong.verses(99, 98));

module.exports = BeerSong;