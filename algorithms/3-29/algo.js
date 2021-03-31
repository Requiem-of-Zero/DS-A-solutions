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

// Tournament Winner

const HOME_TEAM_WIN = 1;

function tournamentWinner(competitions, results) {

  let currBestTeam = '';
	let scores = {[currBestTeam]: 0}
	
	for(let i=0; i < competitions.length; i++){
		const result = results[i];
		const [homeTeam, awayTeam] = competitions[i];
		
		const winner = result === HOME_TEAM_WIN ? homeTeam : awayTeam;
		
		updateScore(winner, 3, scores);
		
		if(scores[winner] > scores[currBestTeam]) {
			currBestTeam = winner;
		}
	}
	return currBestTeam
}

function updateScore(team, pts, scores) {
	if(!(team in scores)) scores[team] = 0;
	
	scores[team] += pts
}

// Non-Constructible Change
// Time: O(nlog(n)) || Space: O(1)
function nonConstructibleChange(coins) {

	coins.sort((a,b) => a - b);
	
	let currChange = 0;
	
	for(const coin of coins){
		if(coin > currChange + 1) return currChange + 1;
		
		currChange += coin
	}
	
  return currChange + 1;
}

// Find Closest Value in BST
// Time: O(log(n)) || Space: O(log(n))
function findClosestValueInBst(tree, target) {

	return closestValueHelper(tree, target, tree.value)
}

function closestValueHelper(tree, target, closest){
	if(tree === null){
		return closest
	}
	
	if(Math.abs(target - closest) > Math.abs(target - tree.value)){
		closest = tree.value
	}
	
	if(target < tree.value){
		return closestValueHelper(tree.left, target, closest)
	}else if(target > tree.value){
		return closestValueHelper(tree.right, target, closest)
	}else{
		return closest
	}
}

// Branch Sums
// Time: O(n) || Space: O(n)
function branchSums(root) {

	let sums = []
	calculateBranchSum(root, 0, sums)
	return sums
}

function calculateBranchSum(root, currentSum, sums){
	if(!root) return;
	let newSum = currentSum + root.value
	if(!root.left && !root.right){
		return sums.push(newSum)
	}
	
	calculateBranchSum(root.left, newSum, sums)
	calculateBranchSum(root.right, newSum, sums)
}

// Node Depths
// Time: O(n) || Space: O(h)
function nodeDepths(root, depth = 0) {
	if(root === null) return 0;
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}