function foo(a, b) {
  // Check if both operands are numbers before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Invalid input: Both arguments must be numbers.');
    return NaN; // Or throw an error
  }
}
console.log(foo(1, "1")); // Output: Invalid input: Both arguments must be numbers. NaN
console.log(foo(1, 1)); // Output: 2