import {Parser} from './parser';
import {Stack} from './stack';

class EntryPoint {

  private parser: Parser;
  private stack: Stack;

  constructor() {
    this.parser = new Parser();
    this.stack = new Stack();
  }

  public getStack() {
    return this.stack.getStack();
  }

  public handleInput(input: string) {
    const parsedString: string[] = this.parser.parseString(input);
    return this.stack.pushListToStack(parsedString);
  }

  public getHistory() {
    return 'Nothing yet';
  }
}

export { EntryPoint };
