// class CircularBuffer {
//   constructor(bufferSize) {
//     this.buffer = new Array(bufferSize).fill(null);
//     this.nextPosition = 0;
//     this.oldestPosition = 0;
//   }

//   put(object) {
//     if (this.buffer[this.nextPosition] !== null) {
//       this.oldestPosition = this.increment(this.nextPosition);
//     }

//     this.buffer[this.nextPosition] = object;
//     this.nextPosition = this.increment(this.nextPosition);
//   }

//   get() {
//     let value = this.buffer[this.oldestPosition];
//     this.buffer[this.oldestPosition] = null;
//     if (value !== null) {
//       this.oldestPosition = this.increment(this.oldestPosition);
//     }

//     return value;
//   }

//   increment(position) {
//     return (position + 1) % this.buffer.length;
//   }
// }

class CircularBuffer {
  constructor(size) {
    this.data = [];
    this.size = size;
  }

  put(element) {
    this.data.push(element);
    if (this.data.length > this.size) this.data.shift();
  }

  get() {
    return this.data.shift() || null;
  }
}

let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);

buffer.put(1);                              // [null, null, 1 ]
buffer.put(2);                              // [null, 1, 2]
console.log(buffer.get() === 1);            // []

buffer.put(3);
buffer.put(4);
console.log(buffer.get() === 2);

buffer.put(5);
buffer.put(6);
buffer.put(7);
console.log(buffer.get() === 5);
console.log(buffer.get() === 6);
console.log(buffer.get() === 7);
console.log(buffer.get() === null);

let anotherbuffer = new CircularBuffer(4);
console.log(anotherbuffer.get() === null);

anotherbuffer.put(1)
anotherbuffer.put(2)
console.log(anotherbuffer.get() === 1);

anotherbuffer.put(3)
anotherbuffer.put(4)
console.log(anotherbuffer.get() === 2);

anotherbuffer.put(5)
anotherbuffer.put(6)
anotherbuffer.put(7)
console.log(anotherbuffer.get() === 4);
console.log(anotherbuffer.get() === 5);
console.log(anotherbuffer.get() === 6);
console.log(anotherbuffer.get() === 7);
console.log(anotherbuffer.get() === null);