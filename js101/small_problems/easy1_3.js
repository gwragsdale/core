for (let number = 2; number < 99; number += 2) {
  console.log(number);
}

for (let n = 1; n < 100; n += 1) {
  if (n % 2 === 1) {
    continue;
  }
  
  console.log(n);
}