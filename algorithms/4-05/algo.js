// 1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/
var balancedStringSplit = function(s) {
  let result = 0;
  let balanced = 0;
  
  for(let i=0; i < s.length; i++){
    const str = s[i]
    
    str === 'L' ? balanced++ : balanced--;
    if(balanced === 0) result++
  }
  
  return result
};

// 1486. XOR Operation in an Array
// https://leetcode.com/problems/xor-operation-in-an-array/
var xorOperation = function(n, start) {
    
    let bitwiseXor = 0;
    
    for (let i = 0; i < n ; i++) {
        
        bitwiseXor ^= start + 2 * i ;
        
    }
        return bitwiseXor;
    
};

// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst/submissions/
var rangeSumBST = function(root, L, R) {
  let totalSum = 0;
  
  function dfs(node){
    if(!node){
      return
    }
    if(node.val >= L && node.val  <= R){
      totalSum += node.val;
    }
    if(L < node.val){
      dfs(node.left);
    }
    if(R > node.val){
      dfs(node.right)
    }
  }
  dfs(root)
  return totalSum
};
// 1720. Decode XORed Array
// https://leetcode.com/problems/decode-xored-array/

var decode = function(encoded, first) {
    let arr = [first]; 

    for(let i = 0; i < encoded.length; i++){
        temp = encoded[i] ^ arr[i];
        arr.push(temp);
    }
    
    return arr;
};

