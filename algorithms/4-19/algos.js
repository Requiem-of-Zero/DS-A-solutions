// https://leetcode.com/problems/triangle/
var minimumTotal = function(triangle) {
	for(let i = triangle.length-2; i >= 0; i—) {
		for(let j = triangle[i].length-1; j >= 0; j—) {
			triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1]);
}
}
    return triangle[0][0]
};

// https://leetcode.com/problems/maximum-ice-cream-bars/
var maxIceCream = function(costs, coins) {
	costs.sort( (a, b) => a -b); //O(n log n)
	let bars = 0;

	for(let i = 0; i < costs.length; i++) {
		if(costs[i] > coins) return bars;
		if(costs[i] <= coins) {
	coins -= costs[i];
	bars++;
}
}

	return bars;
};

// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
var sumOddLengthSubarrays = function(arr) {
    let oddLength = 1
    let sum = 0
    
    while(arr.length >= oddLength) {
        for(let i=0; i<arr.length - oddLength + 1; i++) {
            for(let j=i; j<oddLength + i; j++) {
                sum += arr[j]
            }
        }
        
        oddLength += 2
    }
    
    return sum
};
