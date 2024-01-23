function crunch(str) {
  let strArray = str.split('').filter((char, index, arr) => {
    return char !== arr[index + 1];
  });

  let crunchedString = strArray.join('');

  return crunchedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""