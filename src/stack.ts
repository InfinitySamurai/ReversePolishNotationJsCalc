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
    if (operator === 'clear' || operator === 'clr') {
      this.clearStack();
      return;
    }

    const topOfStack = Number(this.stack.pop());
    if (operator === 'sqrt') {
      this.stack.push(Math.sqrt(topOfStack));
      return;
    }

    const secondTopOfStack = Number(this.stack.pop());
    const operatorResult = this.operatorToFunction[operator](secondTopOfStack, topOfStack);

    this.stack.push(operatorResult);
  }

}

export { Stack };
