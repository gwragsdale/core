const BeerSong = {
  lastVerse: "No more bottles of beer on the wall, no more " +
             "bottles of beer.\nGo to the store and buy some " +
             "more, 99 bottles of beer on the wall.\n",

  verse(num) {
    let line1 = `${num} bottles of beer on the wall, ${num} bottles of beer.\n`;
    let line2 = `Take one down and pass it around, ${num - 1} bottles of beer `;
    let line3 = `on the wall.\n`;

    if (num > 2) {
      return line1.concat(line2, line3);
    } else if (num === 2) {
      return line1.concat("Take one down and pass it around, 1 bottle of beer on the wall.\n");
    } else if (num === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
             "Take it down and pass it around, no more bottles " +
             "of beer on the wall.\n";
    } else if (num === 0) {
      return this.lastVerse;
    }
  },

  verses(start, end) {
    let songVerses = "";
    let count = 0;

    while (start >= end) {
      if (count === 0) {
        songVerses += this.verse(start);
      } else {
        songVerses += `\n`;
        songVerses += this.verse(start);
      }

      start -= 1;
    }

    return songVerses;
  },

  lyrics() {
    return this.verses(99, 0);
  },
};

console.log(BeerSong.verses(99, 98));

module.exports = BeerSong;