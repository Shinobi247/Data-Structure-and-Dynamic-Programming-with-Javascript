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


module.exports = {
  solution,
};
