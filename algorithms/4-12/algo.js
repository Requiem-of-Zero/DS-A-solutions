// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
var maxDepth = function(s) {
    var c = 0;
    var length = s.length;
    var max = 0;
    
    for (var i = 0; i < length; i++) {
        if (s[i] == '(') {
            c++;
        } else if (s[i] == ')') {
            c--;
        }
        if (max < c) {
            max = c;
        }
    }
    
    return max;
};

// 1662. Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = word1.join("")
    let str2 = word2.join("")
    return str1 === str2
};

// 1684. Count the Number of Consistent Strings
// https://leetcode.com/problems/count-the-number-of-consistent-strings/
var countConsistentStrings = function(allowed, words) {
  let result = 0;
  allowed = new Set(allowed);
  
  for(let word of words)
    result += isAllowed(word);
  
  return result;
  
  function isAllowed(word){
    for(let char of word)
      if(!allowed.has(char))
        return false;
    return true
  }
};