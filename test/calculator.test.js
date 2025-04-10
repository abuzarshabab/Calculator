import { expect } from 'chai';
import { describe, it } from 'mocha';


import { add } from '../src/calculator.js';
describe('Text Calculator', () => {
  it ('Should return 0, for not input', () => {
    expect(add('').to.equal(0));
  })
})