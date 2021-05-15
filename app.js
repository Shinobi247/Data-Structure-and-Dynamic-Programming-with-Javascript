const problem = require("./problem/problem");

// Problem: // Problem: Write a function, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
// Example
// ([1,2,3], [4,1,9]) // true
// ([1,2,3], [1,9]) // false
// ([1,2,1], [4,4,1]) // false (must be same frequency)

// Calling the solution
let result = problem.solution([1,2,3], [4,1,9]);
console.log(result);
let resultRefactored = problem.solutionRefactored([1,2,3], [4,1,9]);
console.log(resultRefactored);
