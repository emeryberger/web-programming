'use strict';
/**
  @arg {string} str - The string to search within.
  @arg {string} char - The character to search for.
  @returns {number} - The number of times `char` is in `str`.
  @desc Case sensitive.

  Disclaimer: No parameter checking or edge-case consideration.
*/
function letterFrequency(str, char) {
  return 0;
}

function letterFrequency1(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) { count++; }
  }
  return count;
}

function letterFrequency2(str, char) {
  let count = 0;
  for (const c of str) {
    if (c === char) { count++; }
  }
  return count;
}

function letterFrequency3(str, char) {
  return str.split(char).length - 1;
}

console.assert(letterFrequency1('test', 't') == 2);
console.assert(letterFrequency2('test', 't') == 2);
console.assert(letterFrequency3('test', 't') == 2);

console.assert(letterFrequency1('test', 'e') == 1);
console.assert(letterFrequency2('test', 'e') == 1);
console.assert(letterFrequency3('test', 'e') == 1);

console.assert(letterFrequency1('test', 'a') == 0);
console.assert(letterFrequency2('test', 'a') == 0);
console.assert(letterFrequency3('test', 'a') == 0);

/**
  @arg {string} str - The string to check.
  @returns {boolean} - True iff palindrome.
  @desc Case sensitive.

  Disclaimer: No parameter checking or edge-case consideration.
*/
function isPalindrome(str) {
  return false;
}

function isPalindrome1(str) {
  const len1 = str.length - 1,
        len2 = Math.floor(str.length / 2);
  for (let i = 0; i < len2; i++) {
    // could use `charAt`
    if (str[i] !== str[len1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome2(str) {
  return str.split('').reverse().join('') === str;
}

console.assert(!isPalindrome1('test'));
console.assert(!isPalindrome2('test'));

console.assert(isPalindrome1('noon'));
console.assert(isPalindrome2('noon'));

console.assert(isPalindrome1('racecar'));
console.assert(isPalindrome2('racecar'));


/**
  @arg {string} str - The string to search within.
  @returns {Object<string, number>} - An object with an entry for each character and the and the number of times it is in `str`.
  @desc Case sensitive (e.g. 'A' & 'a' are different).

  Disclaimer: No parameter checking or edge-case consideration.
*/
function letterHist(str) {
  return null;
}

function letterHist1(str) {
  const counter = {};
  // could use for-of w/ indexing
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (c in counter) {
      counter[c]++;
    } else {
      counter[c] = 1;
    }
  }
  return counter;
}

function letterHist2(str) {
  const counter = {};
  str.split('').map(c => {
    if (c in counter) {
      counter[c]++;
    } else {
      counter[c] = 1;
    }
  });
  return counter;
}

const h1 = letterHist1('strings and strings');
console.assert(h1.s === 4);
console.assert(h1.t === 2);
console.assert(h1.r === 2);
console.assert(h1.i === 2);
console.assert(h1.n === 3);
console.assert(h1.g === 2);
console.assert(h1.a === 1);
console.assert(h1.d === 1);
console.assert(h1[' '] === 2);

const h2 = letterHist2('strings and strings');
console.assert(h2.s === 4);
console.assert(h2.t === 2);
console.assert(h2.r === 2);
console.assert(h2.i === 2);
console.assert(h2.n === 3);
console.assert(h2.g === 2);
console.assert(h2.a === 1);
console.assert(h2.d === 1);
console.assert(h2[' '] === 2);
