import {Parser} from './parser';

class EntryPoint {

  private parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  public getStack() {
    return {
      randomStack: [1, 2, 3, 4, 5]
    };
  }

  public handleInput(input: string) {
    return this.parser.parseString(input);
  }

  public getHistory() {
    return 'Nothing yet';
  }
}

export { EntryPoint };
