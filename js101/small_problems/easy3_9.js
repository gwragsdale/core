const alphabet = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function cleanUp(string) {
  let stringArray = string.split('');

  for (let i = 0; i < stringArray.length; i += 1) {
    if (!(alphabet.includes(stringArray[i]))) {
      stringArray[i] = ' ';
    }
  }
  
  stringArray = stringArray.filter((char, idx, arr) => {
    return ((char === ' ') && (char !== arr[idx + 1])) || (char !== ' ');
  });

  return stringArray.join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "