class Scrabble {
  static POINTS = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };

  static score(word) {
    let checkWord = new Scrabble(word);
    return checkWord.score();
  }

  constructor(word) {
    this.word = word ? word.toUpperCase() : "";
  }

  score() {
    let count = 0;

    for (let i = 0; i < this.word.length; i += 1) {
      let letter = this.word[i];

      for (let letterList in Scrabble.POINTS) {
        if (letterList.includes(letter)) count += Scrabble.POINTS[letterList];
      }
    }

    return count;
  }
}

module.exports = Scrabble;