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

