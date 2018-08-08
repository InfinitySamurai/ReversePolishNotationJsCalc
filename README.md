# JS Reverse Polish Notation Calculator

A calculator built in JS for Reverse Polish Notation.

This incorporates the use of Typescript, and uses Hapi as a web server for this
to be used over the web with POST and GET requests.

The following are the requirements, constraints and expected behaviours as defined by [AJConnel](https://github.com/ajconnell/reversePolishCalculator/blob/master/README.md):

##### Base Requirements:

- The calculator has a stack that can contain real numbers.
- The calculator waits for user input and expects to receive strings containing
 whitespace separated lists of numbers and operators.
- Numbers are pushed on to the stack. Operators operate on numbers that are on
 the stack.
- Available operators are +, -, *, /, sqrt, undo, clear
-  Operators pop their parameters off the stack, and push their results back onto
 the stack.
-  The ‘clear’ operator removes all items from the stack.
-  The ‘undo’ operator undoes the previous operation. “undo undo” will undo the
 previous two operations.
- sqrt performs a square root on the top item from the stack
- The ‘+’, ‘-’, ‘*’, ‘/’ operators perform addition, subtraction, multiplication and
 division respectively on the top two items from the stack.
-  After processing an input string, the calculator displays the current contents of
 the stack as a space-separated list.
-  Numbers should be stored on the stack to at least 15 decimal places of
 precision, but displayed to 10 decimal places (or less if it causes no loss of
 precision).
-  All numbers should be formatted as plain decimal strings (ie. no engineering
 formatting).
-  If an operator cannot find a sufficient number of parameters on the stack, a
 warning is displayed:
 _operator <operator> (position: <pos>): insufficient parameters_
-  After displaying the warning, all further processing of the string terminates and
 the current state of the stack is displayed.


##### Clarification on Behaviour:

- The undo operator can be used for as many previous operations exist for the stack.
 This allows the user undo <_n_> number of operations rather than just one
 or two.
- A basic help script has been added to clarify commands at runtime.  This can be accessed
 via keying "help" into the command line.
- The calculator program can be quit by using the commands "quit" or "q".
- The decimal scale of numbers stored in the calculator can be set using "scale <_n_>" on the
command line, where <_n_> is an integer within the range of 15 to 50, inclusive.
- Leading zeroes (except the first 0) of a number are stripped.  This allows the user to key in
values that may otherwise be precluded by the methods used for string parsing.
- When numbers are displayed on the stack, they are limited to a maximum of ten decimal places. If
it is possible to show a number with fewer decimal places, then trailing zeroes are removed.

##### Assumptions on Suitable Behaviour

- Decimal points will be rounded, half up.
- Zero is a valid input for an empty stack.  However, should a user try to input zero when the stack
has other values, then the input will be regarded as invalid.  This prevents a user from inadvertently
entering divide by zero scenarios.
- A warning will be thrown should a user try to find the square root of a negative number.  Only real
numbers are permitted by the calculator.
