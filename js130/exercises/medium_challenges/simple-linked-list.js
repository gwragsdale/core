"use strict";

class Element {
  constructor(...elements) {
    this.elements = [].concat(...elements);
  }

  datum() {
    let result = this.elements[0];

    if (result) return result;
    else return null;
  }

  isTail() {
    return true;
  }

  next() {
    let result = this.elements[1];
    if (result) return result;
    else return null;
  }
}

class SimpleLinkedList {
  constructor(...elements) {
    this.list = [];

    elements.forEach(element => {
      this.list.push(new Element(element));
    });
  }

  push(element) {
    this.list.push(new Element(element));
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    if (this.head()) return this.head().datum();
    else return null;
  }

  head() {
    return this.list[this.size() - 1];
  }

  pop() {
    return this.list.pop();
  }

  static fromArray() {}

  toArray() {}

  reverse() {}
}

module.exports = {
  SimpleLinkedList,
  Element,
};

let list = new SimpleLinkedList();
list.push(1);
list.push(2);
console.log(list.peek());