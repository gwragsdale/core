function average(arr) {
  return Math.floor(arr.reduce((sum, num) => sum + num) / arr.length);
}

console.log(averageForEach([1, 5, 87, 45, 8, 8]));       // 25
console.log(averageForEach([9, 47, 23, 95, 16, 52]));    // 40

function averageForEach(arr) {
  let sum = 0;

  arr.forEach(num => sum += num);

  return Math.floor(sum / arr.length);
}