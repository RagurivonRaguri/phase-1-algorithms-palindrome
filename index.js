function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();
return lowerCaseWord === lowerCaseWord.split('').reverse().join('')
}

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward
//  as forward. For example, "racecar" is a palindrome because it reads the same backward as forward.
/* 
  Add your pseudocode 
  Create funtion'isPalindrome(str)
  make the string in lowercase;
  compare the string when its reading forwards or backwords and return true if it is else false
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
