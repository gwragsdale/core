function neutralize(sentence) {
  let words = sentence.split(" ");
  let result = [];

  words.forEach(word => {
    if (!isNegative(word)) {
      result.push(word);
    }
  });

  return result.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);