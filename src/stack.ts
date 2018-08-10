class Stack {

  private stack: string[];

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
    const topOfStack = Number(this.stack.pop());
    const secondTopOfStack = Number(this.stack.pop());

    this.stack.push(String(secondTopOfStack + topOfStack));
  }

}

export { Stack };
