import { expect } from 'chai';
import { describe, it } from 'mocha';


import { add } from '../src/calculator.js';
describe('Text Calculator', () => {
  it ('Should return 0, for empty string as input', () => {
    const result = add('')
    expect(result).to.equal(0)
  })

  it ('Should return the number itself when single value is passed', () => {
    const result = add('7');
    expect(result).to.equal(7);
  });

  it ('Should return the sum of the comma separated values', () => {
    const result = add('10,7');
    expect(result).to.equal(17);
  });

  
  it ('Should return the total sum of multiple comma separated values', () => {
    const result = add('10,7,10,20');
    expect(result).to.equal(47);
  });


  it ('Should return the total sum of multiple comma and \n separated values', () => {
    const result = add('10,7,10\n20');
    expect(result).to.equal(47);
  });


})