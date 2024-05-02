let sum = num => String(num).split('')
                            .map(char => Number(char))
                            .reduce((sum, num) => num + sum, 0);

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45