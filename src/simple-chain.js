const chainMaker = {

  chain: [],

  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push('('+ ' ' + String(value) + ' ' + ')');
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  },

};

module.exports = chainMaker;
