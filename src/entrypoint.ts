class EntryPoint {

  private thing: number;

  constructor() {
    thing = 1;
  }

  public getStack() {
    return {
      randomStack: [1, 2, 3, 4, 5]
    };
  }

  public handleInput(input: string) {
    return input;
  }

  public getHistory() {
    return 'Nothing yet';
  }
}

export { EntryPoint };
