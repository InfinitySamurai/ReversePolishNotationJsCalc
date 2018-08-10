class Stack {

  private stack: string[];

  private operatorToFunction = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y
  };

  constructor() {
    this.stack = [];
  }

  public pushListToStack(commands: string[]): string[] {
    commands.forEach((element) => {
      this.addItemToStack(element);
    });
    return this.stack;
  }

  public getStack(): string[] {
    return this.stack;
  }

  private addItemToStack(item: string): void {
    if (isNaN(Number(item))) {
      this.applyOperatorToStack(item);
      return;
    }

    this.stack.push(item);
  }

  private clearStack(): string[] {
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
      this.stack.push(String(Math.sqrt(topOfStack)));
      return;
    }

    const secondTopOfStack = Number(this.stack.pop());
    const operatorResult = this.operatorToFunction[operator](secondTopOfStack, topOfStack);

    this.stack.push(String(operatorResult));
  }

}

export { Stack };
