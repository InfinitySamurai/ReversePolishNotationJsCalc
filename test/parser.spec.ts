import { expect } from 'chai';
import { before, describe, it } from 'mocha';
import { Parser } from '../src/parser';

describe('Parser', () => {

  let parser;

  before(() => {
    parser = new Parser();
  });

  it('should return a list with 1 number when receiving a string with 1 number', () => {
    const input = '1';
    expect(parser.parseString(input)).to.deep.equal(['1']);
  });

  it('should return a list of numbers from a space separated string of numbers', () => {
    const input = '19 94 32 11 71';
    expect(parser.parseString(input)).to.deep.equal(['19', '94', '32', '11', '71']);
  });
})
