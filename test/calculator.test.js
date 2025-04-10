import { expect } from 'chai';
import { describe, it } from 'mocha';


import { add } from '../src/calculator.js';
describe('Text Calculator', () => {
  it ('Should return 0, for empty string as input', () => {
    const result = add('')
    expect(result).to.equal(0)
  })

  it('Should return the number itself when single value is passed', () => {
    const result = add('7');
    expect(result).to.equal(7);
  });
})