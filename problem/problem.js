// Problem: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Example
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

const solution = function (string1, string2) {
  if (string1.length !== string2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let index = 0; index < string1.length; index++) {
    frequencyCounter1[string1[index]] =
      (frequencyCounter1[string1[index]] || 0) + 1;
    frequencyCounter2[string2[index]] =
      (frequencyCounter2[string2[index]] || 0) + 1;
  }

  for (let val in frequencyCounter1) {
    if (!(val !== frequencyCounter2[val])) return false;
    if (frequencyCounter1[val] !== frequencyCounter2[val]) return false;
  }

  return true;
};

module.exports = {
  solution,
};
