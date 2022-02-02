// 1534. Count Good Triplets
// https://leetcode.com/problems/count-good-triplets/

var countGoodTriplets = function(arr, a, b, c) {
    let result = 0;
    
    for(let i=0; i < arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            for(let k=j+1; k < arr.length; k++){
                if(Math.abs(arr[i] - arr[j]) <= a &&
                Math.abs(arr[j] - arr[k]) <= b && 
                Math.abs(arr[i] - arr[k]) <= c
                ){
                    result++
                }
            }
        }
    }
    
    return result;
    
};

// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function(gain) {
    let result = [0]
    let altitudes = [0]
    
    for(let i=0; i < gain.length; i++){
        altitudes.push(gain[i])
        let altitude = altitudes.reduce((a,b) => a + b, 0)
        result.push(altitude)
    }
    
    return Math.max(...result);
};

// O(n)
var largestAltitude = function(gain) {
    let max = 0
    let base = 0
    for(let g of gain){
    base+=g
    max = Math.max(max, base)
    }
    return max
};

// 1588. Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// O(n^2) O(1)
const sumOddLengthSubarrays = arr => {
  let arrLength = arr.length;
  let sum = 0;
  
  let odd = 1;
  while(arrLength >= odd) {
    for(let i = 0; i < arrLength - odd + 1; i++){
      const currentSubArray = arr.slice(i, i + odd);
      sum += currentSubArray.reduce((a,b) => a + b, 0);
    }
    odd += 2;
  }
  return sum;
};

// 1688. Count of Matches in Tournament
// https://leetcode.com/problems/count-of-matches-in-tournament/

var numberOfMatches = function(n) {
    let matches = 0,team = n;
    while(team > 1){
        if(team % 2 === 0){
            matches += team/2;
            team = team/2
        }else{
            matches += (team-1)/2;
            team = (team-1)/2 + 1 ;
        }
    }
    return matches;
};

// 1266. Minimum Time Visiting All Points
// https://leetcode.com/problems/minimum-time-visiting-all-points/

const minTimeToVisitAllPoints = points =>
  points
    .slice(0, points.length - 1)
    .reduce(
      (acc, [x, y], idx) =>
        acc +
        Math.max(
          Math.abs(x - points[idx + 1][0]),
          Math.abs(y - points[idx + 1][1]),
        ),
      0,
    );

// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/

const removeOuterParentheses = S => {
  let result = '';
  for (let [begin, end, depth] = [0, 1, 1]; end < S.length; end++) {
    if (S[end] === '(') depth++;
    else if (S[end] === ')') depth--;
    if (0 === depth) {
      result += S.slice(begin + 1, end);
      begin = end + 1;
    }
  }
  return result;
};

// 804. Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
    const Morse_Code_Map = {a:".-",b: "-...",c: "-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m: "--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."}
    
    if(!words) return;
    let morseArr = [];
    for(let word of words){
      let word_morse_code;
      for(let morse of word){
        word_morse_code += Morse_Code_Map[morse]
      }
      if(!morseArr.includes(word_morse_code)){
        morseArr.push(word_morse_code);
      }
    }
    return morseArr.length;
};

