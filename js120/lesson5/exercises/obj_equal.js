/*

# problem

input: two objects
output: true or false
  - do the objects have the same keys and values?

# examples

input: {a: 'foo'}, {a: "foo"}
output: true

input: {a: 'foo', b: 'bar'}, {a: 'foo'}
output: false

# data structure

array

# algorithm

- Object.keys length must be equal
- every key => other object includes every key

- Object.values

- or just Object.entries
- compare each key and value with obj2 keys and values

*/

function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  let obj1Values = Object.values(obj1);
  let obj2Values = Object.values(obj2);

  return (obj1Keys.length === obj2Keys.length) &&
         (obj1Values.length === obj2Values.length) &&
         (obj1Keys.every(key => obj2Keys.includes(key))) &&
         (obj1Values.every(value => obj2Values.includes(value)));
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false