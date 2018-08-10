import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { Stack } from '../src/stack';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should add a single valid item to the stack and return the stack', () => {
    const input = ['1'];
    expect(stack.pushListToStack(input)).to.deep.equal(['1']);
  });

  it('should add a list of numbers to the stack and return the stack', () => {
    const input = ['1', '201', '31', '666'];
    expect(stack.pushListToStack(input)).to.deep.equal(['1', '201', '31', '666']);
  });

  it('should add 2 numbers together with valid input', () => {
    const input = ['5', '25', '+'];
    expect(stack.pushListToStack(input)).to.deep.equal(['30']);
  });

  it('should subtract numbers in the correct order', () => {
    const input = ['25', '5', '-'];
    expect(stack.pushListToStack(input)).to.deep.equal(['20']);
  });

  it('should divide numbers in the correct order', () => {
    const input = ['25', '5', '/'];
    expect(stack.pushListToStack(input)).to.deep.equal(['5']);
  });

  it('should multiply numbers', () => {
    const input = ['25', '5', '*'];
    expect(stack.pushListToStack(input)).to.deep.equal(['125']);
  });

  it('should sqaure root numbers', () => {
    const input = ['25', 'sqrt'];
    expect(stack.pushListToStack(input)).to.deep.equal(['5']);
  });

  it('should clear the stack on clear command', () => {
    const input1 = ['1', '2', '3'];
    stack.pushListToStack(input1);
    expect(stack.pushListToStack(['clear'])).to.deep.equal([]);
  });

  it('should apply operators in the right order for a longer statement', () => {
    const input = ['15', '7', '1', '1', '+', '-', '/', '3', '*', '2', '1', '1', '+', '+', '-'];
    expect(stack.pushListToStack(input)).to.deep.equal(['5']);
  });
});
