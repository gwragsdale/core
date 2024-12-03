```js
function foo({ qux, bar, baz }) {
  console.log(qux + bar + baz);
}

let partialArgs = {
  qux: "Hello",
  bar: " there!"
};

function greet(obj) {
  return baz => foo(obj);
}

let greeter = greet(partialArgs);
greeter(" My name is Dorothy.");
```

```js
function foo({ qux, bar, baz }) {
  console.log(qux + bar + baz);
}

let partialArgs = {
  qux: "Hello",
  bar: " there!"
};

function greet(obj) {
  return baz => foo({...obj, baz});
}

let greeter = greet(partialArgs);
greeter(" My name is Dorothy.");
```