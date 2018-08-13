class Stack {

  private stack: number[];

  private operatorToFunction = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y
  };

  constructor() {
    this.stack = [];
  }

  public pushListToStack(commands: string[]): number[] {
    commands.forEach((element) => {
      this.addItemToStack(element);
    });
    return this.stack;
  }

  public getStack(): number[] {
    return this.stack;
  }

  private addItemToStack(item: string): void {
    if (isNaN(Number(item))) {
      this.applyOperatorToStack(item);
      return;
    }

    this.stack.push(Number(item));
  }

  private clearStack(): number[] {
    this.stack = [];
    return this.stack;
  }

  private applyOperatorToStack(operator: string): void {
    let topOfStack: number;
    let secondTopOfStack: number;

    if (operator === 'clear' || operator === 'clr') {
      this.clearStack();
      return;
    }

    if (this.stack.length < 1) {
      throw new Error ('There are no items in the stack and no operators can be applied');
    }

    if (operator === 'sqrt') {
      topOfStack = Number(this.stack.pop());
      if (topOfStack <= 0) {
        this.stack.push(topOfStack);
        throw new Error('Cannot take the square root of a number less than or equal to 0: ' + topOfStack);
      }
      this.stack.push(Math.sqrt(topOfStack));
      return;
    }

    if (this.stack.length < 2) {
      throw new Error ('There are not enough items in the stack to perform operation: ' + operator);
    }

    topOfStack = Number(this.stack.pop());
    secondTopOfStack = Number(this.stack.pop());
    const operatorResult = this.operatorToFunction[operator](secondTopOfStack, topOfStack);

    this.stack.push(operatorResult);
  }

}

export { Stack };
