# JS Reverse Polish Notation Calculator

A calculator built in JS for Reverse Polish Notation.

This incorporates the use of Typescript, and uses Hapi as a web server for this
to be used over the web with POST and GET requests.

##### Running the project

- install dependencies with `npm install`
- run the server with `gulp serve`
- Up and running. You can now send requests to the server

##### Using the calculator

- Send post requests with space-separated strings with numbers and operators to `localhost:3000/stack`.
 - ie: `15 7 1 1 + − ÷ 3 × 2 1 1 + + −`
 - returns `5`
- Send GET requests to `localhost:3000/stack` to receive the current state of the stack

##### Project limitations

- Doesn't support dynamic server location. Currently it's hardcoded
to be localhost on port 3000. This would be good to have setup as
command line arguments or some such

The following are the requirements, constraints and expected behaviours as defined by [AJConnell](https://github.com/ajconnell/reversePolishCalculator/blob/master/README.md) (modified for my use):

##### Base Requirements:

- The calculator has a stack that can contain real numbers
- The calculator can receive POST requests to `/stack` containing
 whitespace separated lists of numbers and operators
- The calculator can receive GET requests to `/stack` to get the current state
 of the stack
- Numbers are pushed on to the stack. Operators operate on numbers that are on
 the stack
- Available operators are +, -, *, /, sqrt, clear, clr
-  Operators pop their parameters off the stack, and push their results back onto
 the stack.
-  The ‘clear’ operator removes all items from the stack.
- sqrt performs a square root on the top item from the stack
- The ‘+’, ‘-’, ‘*’, ‘/’ operators perform addition, subtraction, multiplication and
 division respectively on the top two items from the stack
-  After processing an input string, the calculator returns the current contents of
 the stack as a json list
-  If an operator cannot find a sufficient number of parameters on the stack, a
 warning is displayed:
 _operator <operator> (position: <pos>): insufficient parameters_ (not implemented)
-  After displaying the warning, all further processing of the string terminates and
 the current state of the stack is displayed.

##### Assumptions on Suitable Behaviour

- Zero is a valid input
- A warning will be thrown should a user try to find the square root of a negative number.  Only real
numbers are permitted by the calculator. (not implemented)
