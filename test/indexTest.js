require('./helpers.js'); // sets up DOM environment for tests
const { expect } = require('chai');
const { moveDodgerLeft, moveDodgerRight } = require('../index.js');

describe('moveDodgerLeft()', () => {
  let dodger;

  beforeEach(() => {
    dodger = document.getElementById('dodger');
    dodger.style.left = '180px';  // reset position before each test
  });

  it('moves the DODGER to the left', () => {
    const left = parseInt(dodger.style.left, 10);
    moveDodgerLeft();
    const newLeft = parseInt(dodger.style.left, 10);

    if (left > 0) {
      expect(newLeft).to.be.below(left);
    } else {
      expect(newLeft).to.equal(left);
    }
  });
});

describe('moveDodgerRight()', () => {
  let dodger;

  beforeEach(() => {
    dodger = document.getElementById('dodger');
    dodger.style.left = '180px';  // reset position before each test
  });

  it('moves the DODGER to the right', () => {
    const left = parseInt(dodger.style.left, 10);
    moveDodgerRight();
    const newLeft = parseInt(dodger.style.left, 10);

    if (left < 360) {
      expect(newLeft).to.be.above(left);
    } else {
      expect(newLeft).to.equal(left);
    }
  });
});
