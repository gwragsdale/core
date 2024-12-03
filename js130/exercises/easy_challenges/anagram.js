class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(array) {
    let anagrams = [];
    let sorted = this.sortWord(this.word);

    array.forEach(word => {
      if (word.toLowerCase() === this.word) {
        return undefined;
      } else if (this.sortWord(word) === sorted) {
        anagrams.push(word);
      } else {
        return undefined;
      }
    });

    return anagrams;
  }

  sortWord(word) {
    return word.toLowerCase().split("").sort().join("");
  }
}

module.exports = Anagram;