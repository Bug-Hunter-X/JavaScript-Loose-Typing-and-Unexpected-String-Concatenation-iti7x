# JavaScript Loose Typing and Unexpected String Concatenation
This example demonstrates a common error in JavaScript stemming from its loose typing system.  When the `+` operator encounters a string operand, it performs string concatenation instead of numerical addition, leading to unexpected results.

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution using type checking.