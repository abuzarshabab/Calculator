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

  it ('Should support custom single-character delimiters which will be defined at the beginning', () => {
    const result = add('//;\n20;50');
    expect(result).to.equal(70);
  });

  it ('Should throw an error with all negative values', () => {
    expect(() => add('//;\n20;23;-21;40;-42')).to.throw('negative numbers not allowed: -21, -42');
  });
})