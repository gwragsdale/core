class CustomSet {
  constructor(set) {
    if (!set) return new CustomSet([]);
    this.set = set;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(testSet) {
    return this.every(element => testSet.includes(element));
  }

  forEach(callback) {
    return this.set.forEach(callback);
  }

  every(callback) {
    return this.set.every(callback);
  }

  includes(callback) {
    return this.set.includes(callback);
  }

  isDisjoint(testSet) {
    return this.every(element => !testSet.includes(element));
  }

  isSame(testSet) {
    return this.isSubset(testSet) &&
           testSet.isSubset(this.set);
  }

  add(element) {
    if (!this.contains(element)) {
      this.set.push(element);
    }

    return new CustomSet(this.set);
  }

  intersection(testSet) {
    let sharedElements = element => testSet.includes(element);

    return new CustomSet(this.filter(sharedElements));
  }

  filter(callback) {
    return this.set.filter(callback);
  }

  difference(testSet) {
    let unsharedElements = element => !testSet.includes(element);

    return new CustomSet(this.filter(unsharedElements));
  }

  union(testSet) {
    let combinedSets = [];
    testSet.forEach(element => {
      if (!this.contains(element)) {
        combinedSets.push(element);
      }
    });

    combinedSets = combinedSets.concat(this.set);

    return new CustomSet(combinedSets);
  }

  export.modules = CustomSet;
}
