const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Diamond = {
  lines: (function() {
    let result = { A: "A" };
    let count = 1;

    alphabet.split("").forEach(letter => {
      if (letter === "A") return;

      result[letter] = `${letter}${" ".repeat(count)}${letter}`;
      count += 2;
    }, this);

    return result;
  })(),

  makeDiamond(letter) {
    let result = "";
    let count = alphabet.indexOf(letter);

    for (let index = 0; index <= alphabet.indexOf(letter); index += 1) {
      let currentLetter = alphabet[index];
      let currentLine = this.lines[currentLetter];
      result += `${" ".repeat(count)}${currentLine}${" ".repeat(count)}\n`;
      count -= 1;
    }

    count = 1;

    for (let index = alphabet.indexOf(letter) - 1; index >= 0; index -= 1) {
      let currentLetter = alphabet[index];
      let currentLine = this.lines[currentLetter];
      result += `${" ".repeat(count)}${currentLine}${" ".repeat(count)}\n`;
      count += 1;
    }

    return result;
  },
};

console.log(Diamond.makeDiamond("Z"));

module.exports = Diamond;
