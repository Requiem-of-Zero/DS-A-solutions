// Validate Subsequence
// https://www.algoexpert.io/questions/Validate%20Subsequence
// Time Complexity O(n) | Space Complexity O(1)

function isValidSubsequence(array, sequence) {
	let seqIdx = 0;
	let arrIdx = 0;
	while(arrIdx !== array.length){
		if(array[arrIdx] === sequence[seqIdx]){
			seqIdx++
		}
		arrIdx++
	}
	return sequence.length === seqIdx
}
