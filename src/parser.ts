class Parser {

  // split the input string and check that substrings are valid
  public parseString(input: string) {

    const splitInput =  input.split(' ');

    if (splitInput.every(this.validateString)) {
      return splitInput;
    }
  }

  // check that our string is either a number, or in the validOperators list
  private validateString(input: string) {
    const validOperators: string[] = ['+', '-', '*', '/', 'sqrt', 'clear', 'clr', 'undo'];
    if (!isNaN(Number(input))) {
      if (Number(input) === 0) {
        throw new Error('Input cannot contain a 0 (zero)');
      }
      return true;
    }
    if (validOperators.indexOf(input) > -1) { return true; }
    throw new Error('Input contained invalid string: ' + input);
  }
}

export { Parser };
