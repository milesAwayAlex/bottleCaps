import {expect} from 'chai';
import cap from './index.js';

const cases = [
  [10, 15],
  [20, 35],
  [30, 55],
  [40, 75],
];
describe('cap', function() {
  cases.forEach(c =>
    it(`returns ${c[1]} for input ${c[0]}`, () => {
      expect(cap(c[0]).total).to.equal(c[1]);
    })
  );
});
