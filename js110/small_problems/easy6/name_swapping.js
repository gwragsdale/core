function swapName(name) {
  let nameArr = name.split(' ');
  let lastName = nameArr[nameArr.length - 1];
  let firstAndMiddles = nameArr.slice(0, (nameArr.length - 1)).join(' ');

  return `${lastName}, ${firstAndMiddles}`
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"