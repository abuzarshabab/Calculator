import { expect } from 'chai';
import { describe, it } from 'mocha';


import { add } from '../src/calculator.js';
describe('Text Calculator', () => {
  it ('Should return 0, for not input', () => {
    const result = add('')
    expect(result).to.equal(0)
  })
})