// START

// SET function xor(value1, value2)
//    PRINT 'true' only if one value is true && the other is false
//    true, false => true
//    false, true => true
//    true, true => false
//    false, false => false
//    0 == false, 1 == true
//    > 1 == true

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true