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

  it('should throw an error when invalid input is provided', () => {
    const input = 'invalid text here';
    expect(parser.parseString.bind(parser, input)).to.throw();
  });

  it('should throw an error even if there is some valid input', () => {
    const input = '57 12 inv 11';
    expect(parser.parseString.bind(parser, input)).to.throw();
  });

  it('should accept valid operators in input string', () => {
    const input = '57 12 / 11 + clear undo';
    expect(parser.parseString(input)).to.deep.equal(['57', '12', '/', '11', '+', 'clear', 'undo']);
  });

  it('should reject 0 as an input', () => {
    const input = '1 5 / 0 12 clear';
    expect(parser.parseString.bind(parser, input)).to.throw();
  });
});
