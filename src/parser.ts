class Parser {

  // split the input string and check that substrings are valid
  public parseString(input: string) {

    const splitInput =  input.split(' ');

    if (splitInput.every(this.validateString)) {
      return splitInput;
    }
    throw new Error('Input contained invalid command');
  }

  // check that our string is either a number, or in the validOperators list
  private validateString(input: string) {
    const validOperators: string[] = ['+', '-', '*', '/', 'sqrt', 'clear', 'clr', 'undo'];
    if (!isNaN(Number(input)) || validOperators.indexOf(input) > -1 ) { return true; }
    return false;
  }
}

export { Parser };
