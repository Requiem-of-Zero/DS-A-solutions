// 1844. Replace All Digits with Characters
// https://leetcode.com/problems/replace-all-digits-with-characters/

var replaceDigits = function(s) {
    let newStr = ''
    for(let i = 1; i < s.length; i = i+2){    
        newStr += s[i-1]
        newStr += shift(s[i-1], s[i])        
    }
    if (s.length % 2) newStr += s[s.length - 1];
    return newStr
};

function shift(char, num){
    let asciiVal = char.charCodeAt()
    asciiVal = asciiVal + Number(num)

    return String.fromCharCode(asciiVal)
}

// 1816. Truncate Sentence
// https://leetcode.com/problems/truncate-sentence/

var truncateSentence = function(s, k) {
  let result = [];
  let splitStr = s.split(' ')
  
  for(let i=0; i < k; i++){
    result.push(splitStr[i])
  }
  
  return result.join(' ')
};

// https://leetcode.com/problems/determine-if-string-halves-are-alike/
// 1704. Determine if String Halves Are Alike

var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let leftVowelCount = 0;
    let rightVowelCount = 0;
    
    for(let i=0; i < s.length/2; i++){
      if(set.has(s[i])){
        leftVowelCount++
      }
    }
    
    let set = new Set(vowels)
    for(let i=s.length/2; i < s.length; i++){
      if(set.has(s[i])){
        rightVowelCount++
      }
    }
  
  return leftVowelCount === rightVowelCount
};

// https://leetcode.com/problems/sorting-the-sentence/submissions/
// 1859. Sorting the Sentence

var sortSentence = function(s) {
  const wordArr = s.split(' ')
  
  let result = new Array(wordArr.length).fill(0)
  
  for(let i=0; i < wordArr.length; i++){
    let indivWord = wordArr[i]
    result[indivWord.slice(indivWord.length-1) - 1] = wordArr[i].slice(0,indivWord.length-1)
  }
  
  return result.join(' ')
};