class EntryPoint {

  private thing1: string;
  private thing2: string;
  private thing3: string;

  constructor() {
    this.thing1 = 'asdf';
  }

  public getStack() {
    return {
      randomStack: [1, 2, 3, 4, 5]
    };
  }
}

export { EntryPoint };
