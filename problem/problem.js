// Problem: Write a function, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
// Example
// ([1,2,3], [4,1,9]) // true
// ([1,2,3], [1,9]) // false
// ([1,2,1], [4,4,1]) // false (must be same frequency)

const solution = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const element = array2.indexOf(array1[index] ** 2);
    if (element === -1) return false;
    array2.splice(element, 1);
  }
  return true;
};

const solutionRefactored = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let key of array1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }
  for (let key of array2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
};

module.exports = {
  solution,
  solutionRefactored,
};
