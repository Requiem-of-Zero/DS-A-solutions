//https://www.algoexpert.io/questions/Two%20Number%20Sum
//Two Number Sum

function twoNumberSum(array, targetSum) {

	const nums = {};
	for( const num of array){
		const match = targetSum - num;
		if(match in nums){
			return [match, num];
		} else {
			nums[num] = true
		}
	}
	return [];
}

// https://www.algoexpert.io/questions/Validate%20Subsequence
// Validate Subsequence

function isValidSubsequence(array, sequence) {

	let arrIdx = 0;
	let seqIdx = 0;
	
	while(arrIdx < array.length && seqIdx < sequence.length ){
		if(sequence[seqIdx] === array[arrIdx]) seqIdx ++
		arrIdx++
	}
	return seqIdx === sequence.length
}

// https://www.algoexpert.io/questions/Sorted%20Squared%20Array
// Sorted Squared Array

function sortedSquaredArray(array) {

	const squares = new Array(array.length).fill(0);
	let smallerIdx = 0;
	let largerIdx = array.length - 1;
	
	for(let idx = array.length - 1; idx >= 0; idx--){
		const smallerVal = array[smallerIdx];
		const largerVal = array[largerIdx];
		
		if(Math.abs(smallerVal) > Math.abs(largerVal)){
			squares[idx] = smallerVal * smallerVal;
			smallerIdx++;
		} else {
			squares[idx] = largerVal * largerVal;
			largerIdx--;
		}
	}
	return squares;
}

