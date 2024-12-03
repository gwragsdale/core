class Element {
  constructor(datumVal, nextElement) {
    this.datumVal = datumVal;
    this.nextEl = nextElement;
  }

  datum() {
    return this.datumVal;
  }

  next() {
    return this.nextEl || null;
  }

  isTail() {
    return !this.next();
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    array = array || [];

    let list = new SimpleLinkedList();
    [...array].reverse().forEach(elem => list.push(elem));
    return list;
  }

  head() {
    return this.headEl || null;
  }

  size() {
    let size = 0;
    let currElement = this.head();

    while (currElement) {
      size += 1;
      currElement = currElement.next();
    }

    return size;
  }

  isEmpty() {
    return !this.head();
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headEl = element;
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : null;
  }

  pop() {
    let datum = this.peek();
    let newHead = this.head().next();

    this.headEl = newHead;
    return datum;
  }

  toArray() {
    let array = [];

    let currentElem = this.head();
    while (currentElem !== null) {
      array.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return array;
  }

  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while (currentElem !== null) {
      list.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return list;
  }
}

module.exports = { SimpleLinkedList, Element };
