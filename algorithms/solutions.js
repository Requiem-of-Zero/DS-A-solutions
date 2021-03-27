// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])

function list(names){
  if(names.length === 1) return names[0].name;
  if(names.length === 2) return names[0].name + " & " + names[1].name
  
  let lastTwoNames = names.slice(names.length - 2, names.length);
  let mappedLastTwo = lastTwoNames.map(obj => obj.name);
  let restOfNames = names.slice(0, names.length - 2);
  let mappedRest = restOfNames.map(obj => obj.name);
  let restResult;
  if(mappedRest.length === 0 ){
    restResult = "";
  } else {
    restResult = mappedRest.join(", ") + ", "
  }
  let lastResult = mappedLastTwo.join(" & ")

  return restResult + lastResult;
}

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
  if(value < 10) return true;
  let digitCount = value.toString().length
  let separateNum = value.toString().split("").map(x => +x)
  let sum = 0;
  
  for(let i=0; i < separateNum.length; i++){
    sum += separateNum[i] ** digitCount
  }
  
  if(sum === value){
    return true;
  } else {
    return false;
  }
}

// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
  let split1 = num1.toString().split("").map(x => +x)
  let split2 = num2.toString().split("").map(x => +x)
  let triple = [];
  //track number on left for triple - array if see 3 9 push 9 to array
  for(let i=0; i < split1.length - 2; i++){
    if(split1[i] === split1[i + 1] && split1[i + 1] === split1[i + 2]){
      triple.push(split1[i]);
    }
  }
  //check doubles and check if the value is in values in array
  for(let i=0; i < split2.length - 1; i++){
    if(split2[i] === split2[i + 1] && triple.includes(split2[i])){
      return 1;
    } 
  }
  return 0;
}

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

  let splitStr = str.split(/-|_/g);
  
  
  for(let i=0; i < splitStr.length - 1; i++){
    splitStr[i + 1] = splitStr[i + 1].charAt(0).toUpperCase() + splitStr[i + 1].slice(1).toLowerCase()
  }
  return splitStr.join("");
}

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  let splitNum = numbers.split(" ")
  let integers = splitNum.map(x => +x)
  let evenCount = 0;
  let oddCount = 0;
  
  for(let i=0; i < integers.length; i++){
    if(integers[i]%2 === 0){
      evenCount += 1
    } else {
      oddCount += 1
    }
  }
  for(let i=0; i < integers.length; i++){
    if(evenCount > oddCount){
      if(integers[i]%2 !== 0){
        return i + 1
      }
    } else {
      if(integers[i]%2 === 0){
        return i + 1
      }
    }
  }
}

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = ""
  let lowerSentence = text.toLowerCase()

  for(let i=0; i < lowerSentence.length; i++){
    if(alphabet.indexOf(lowerSentence[i]) >= 0){
      result += alphabet.indexOf(lowerSentence[i]) + 1 + " "
    }
  }
  return result.slice(0, result.length - 1);
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
   let product = num.toString().split("").map(x => +x).reduce((total, num) => total *= num);
   let count = 1;

   if(num < 10) return 0;
   
   while(product >= 10){
     product = product.toString().split("").map(x => +x).reduce((total, num) => total *= num);
     count++
   }
  return count;
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let result = [];
  
  for(let i=0; i < a.length; i++){
    let word = a[i];
    let flag = true;
    for(let j=0; j < b.length; j++){
      if(a[i] === b[j]){
        flag = false;
      }
    }
    if(flag){
      result.push(word)
    }
  }
  return result;
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
  let evenCount = 0;
  let oddCount = 0;
  
  for(let i=0; i < integers.length; i++){
    if(integers[i]%2 === 0){
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }
  
  for(let i=0; i < integers.length; i++){
    if(evenCount > oddCount){
      if(integers[i]%2 !== 0){
        return integers[i]
      } 
    } else {
      if(integers[i]%2 === 0){
        return integers[i]
      }
    }
  }
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

// Courtesy of projecteuler.net

function solution(number){
  let sum = 0;
  
  for(let i=0; i < number; i++){
    if(i % 3 === 0 || i%5 ===0){
      sum += i
    }
  }
  return sum;
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function likes(names) {
  if(names.length === 0){
    return 'no one likes this'
  } else if (names.length === 1){
    return `${names} likes this`
  } else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  let sum = n.toString().split("").map(x => +x).reduce((total, num) => total += num, 0);
  
  while(sum >= 10){
    sum = sum.toString().split("").map(x => +x).reduce((total, num) => total += num, 0)
  }
  return sum;
}

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let count = {};
  
  for(let i=0; i < A.length; i++){
    let num = A[i]
    if(count[num] === undefined){
      count[num] = 1;
    } else{
      count[num] += 1
    }
  }
  let keys = Object.keys(count)
  
  for(let i=0; i < keys.length; i++){
    let key = keys[i];
    if(count[key]%2 != 0){
      return +key;
    }
  }
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

// There is a room with n bulbs, numbered from 1 to n, arranged in a row from left to right. Initially, all the bulbs are turned off.
// At moment k (for k from 0 to n - 1), we turn on the light[k] bulb. A bulb change color to blue only if it is on and all the previous bulbs (to the left) are turned on too.
// Return the number of moments in which all turned on bulbs are blue.

// Input: light 

// Output: 3
// Explanation: All bulbs turned on, are blue at the moment 1, 2 and 4.

// Example 2:
// Input: light = [3,2,4,1,5]
// Output: 2
// Explanation: All bulbs turned on, are blue at the moment 3, and 4 (index-0).

// Example 3:
// Input: light = [4,1,2,3]
// Output: 1
// Explanation: All bulbs turned on, are blue at the moment 3 (index-0).
// Bulb 4th changes to blue at the moment 3.

// Example 4:
// Input: light = [2,1,4,3,6,5]
// Output: 3

// Example 5:
// Input: light = [1,2,3,4,5,6]
// Output: 6

// Constraints:
// n == light.length
// 1 <= n <= 5 * 10^4
// light is a permutation of  [1, 2, ..., n]

//naive solution
var numTimesAllBlue = function(light) {
	let lightLength = light.length
	let lights = []; 
	let highestBulb = 0;
	let blueLightCount = 0;

	for(let i=0; i < lightLength; i++) {
		lights.push(false)
  }
// lights = new Array(light.length).fill(false);

  for(let i=0; i < light.length; i++) {
    lights[light[i] - 1] = true
    if(light[i] - 1 > highestBulb) {
      highestBulb = light[i] -1
  } // -> highestBulb = Math.max(highestBulb, light[i])
  let flag = true;
    for(let i=0; i <= highestBulb ; i++) {
      if(lights[i] === false) {
        flag = false;
        break
      } 
  }
  if(flag) blueLightCount += 1
}

return blueLightCount;
}

//optimal solution
var numTimesAllBlue = function(light) {
    let total = 0;
    let target = 0;
    let moments = 0;
    
    for(let i = 0; i < light.length; i++){
        total += light[i];      // add up all the bulbs number
        target += i + 1;        // add up the index of each array plus 1
        
        if(total === target) moments++;
    }    
    
    return moments;
};

// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts) {
  let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++){
        let wealth = 0; 
        let account = accounts[i];
        for (let j = 0; j < account.length; j++){
            wealth += account[j];
        }
        maxWealth = Math.max(wealth, maxWealth);
    }
    return maxWealth;
}; //93% faster than other submissions

var maximumWealth = function(accounts) {
  return accounts.reduce((acc, val) => {
    const richest = val.reduce((acc, val) => acc + val, 0);
    return Math.max(richest, acc);
  }, 0)
}; //81% faster


// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/submissions/
var shuffle = function(nums, n) {
  let shuffled = [];
  
  for(let i=0; i < n; i++){
    shuffled.push(nums[i]);
    shuffled.push(nums[i + n])
  }
  
  return shuffled;
}; //88% faster

// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    var map = new Map();
    var count = 0;
    for (var n of nums) {
        if(map.has(n)) {
            count += map.get(n);
            map.set(n,map.get(n)+1)
        }else {
            map.set(n, map.get(n) || 1)
        }
    }
    return count;
};

// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/
var kidsWithCandies = function(candies, extraCandies) {
  let mostCandiesArr = []; 
  let highestCandyAmt = Math.max(...candies);
  
  for(let i = 0; i < candies.length; i++){
    if(candies[i] + extraCandies >= highestCandyAmt ){
      mostCandiesArr.push(true)
    } else {
      mostCandiesArr.push(false)
    }
  }
  return mostCandiesArr
};

// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/
var defangIPaddr = function(address) {
    address = address.split('.').join('[.]')
    return address;
};

// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/submissions/
var reverseList = function(head) {
    let pre = null
    while(head){
        const next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
};

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead; 

    while(l1 !== null && l2 !== null){

        if(l1.val < l2.val){
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }

        currentNode = currentNode.next
    }

    if(l1 !== null) {
        currentNode.next = l1;
    } else if (l2 !== null) {
        currentNode.next = l2
    }

    return dummyHead.next
}



function palindromeChecker(s, startIndex, endIndex, subs) {
    //     s = cdecd
    // startIndex =[0, 0, 0, 0]
    // endIndex = [0, 1, 2, 3]
    // subs = [0, 1, 1, 0]


    // let startEnd = []
    let i = 0;
    let resultStr = ''
    while(i < startIndex.length){
        startEnd.push([startIndex[i],endIndex[i]])
        i++
    }
    // debugger

    let j = 0;
    while (j < startIndex.length) {
        let currStart = startEnd[j][0]
        let currEnd = startEnd[j][1] + 1
        let currString = s.slice(currStart, currEnd)
        let currChangeCount = subs[j]
        let palindromeCheck = isPalindrome(currString)

        if (currString.length < 4 && currChangeCount > 0) {
            resultStr += '1'
        } else {
            while (currChangeCount > 0) {
                if (palindromeCheck === true) {
                    resultStr += '1'
                    break
                } else {
                    palindromeCheck = palindromeCheck - 2 < 2 ? true : palindromeCheck - 2
                    currChangeCount--
                }
            }
            if (palindromeCheck === true && resultStr.length - 1 !== j) resultStr += '1'
            if (resultStr.length - 1 !== j) resultStr += '0'
        }
        j++
    }

    return resultStr


}


function isPalindrome(str) {
    str = str.split('')
    let set = new Set()
    for (let char of str) {
        if (set.has(char)) {  
            set.delete(char)
        } else {
            set.add(char)
        }
    }
    if (set.size < 2) return true
    return set.size
}

// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  
  for(let i=0; i < stones.length; i++){
    if(jewels.includes(stones[i])){
      count++
    }
  }
  
  return count
};

// 1603. Design Parking System
// https://leetcode.com/problems/design-parking-system/
var ParkingSystem = function(big, medium, small) {
    this.parking = [null, big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.parking[carType] > 0) {
		this.parking[carType]--;
		return true;
	}
	return false;

};

// 1342. Number of Steps to Reduce a Number to Zero
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
var numberOfSteps  = function(num) {
  let steps = 0;
  
  while(num !== 0){
    if(num%2 === 0){
      num = num/2
      steps++
  } else {
      num = num - 1
      steps++
    }
  }
  
  return steps
};

// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/
var subtractProductAndSum = function(n) {
    let numStr = String(n).split("")
    let product = 1;
    let sum = 0;
    
    for(let i=0; i < numStr.length; i++){
      let number = +numStr[i];
      product *= number;
      sum += number;
    }
  return product - sum;
};