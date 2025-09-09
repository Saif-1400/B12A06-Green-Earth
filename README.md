#### 1) What is the difference between var, let, and const?
var:Used in old JavaScript.ou can redeclare the same variable name multiple times.

let:Commonly used in modern JavaScript.Works only inside {} (block scoped).

const:Once declared, it cannot be reassigned with a new value.

#### 2) What is the difference between map(), forEach(), and filter()?

forEach:Just loops through the array and lets you perform some work with each element.
Does not return anything (always returns undefined).

map:Loops through each element and creates a new array based on the return value.
The original array does not change.

filter:Keeps only the elements that pass the given condition and returns a new array.

#### 3) What are arrow functions in ES6?
Shorter way to write functions.
Unlike normal functions, arrow functions do not create their own this; they use the this from the surrounding context.

#### 4) How does destructuring assignment work in ES6?
It allows you to extract values from objects or arrays into separate variables.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Written with backticks ( ` ` ).

You can easily insert variables or expressions inside using ${ }.
