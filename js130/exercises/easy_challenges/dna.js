class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(testStrand) {
    let count = 0;
    let lastIndex = (this.strand.length < testStrand.length) ?
                     this.strand.length : testStrand.length;

    for (let index = 0; index < lastIndex; index += 1) {
      if (this.strand[index] !== testStrand[index]) count += 1;
    }

    return count;
  }
}

module.exports = DNA;