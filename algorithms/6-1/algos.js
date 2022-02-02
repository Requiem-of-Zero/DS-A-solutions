// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/

var mergeTrees = function(root1, root2) {
  if(!root1){return root2}
  if(!root2){return root1}
  
  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
};

// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/
var invertTree = function(root) {
  if (!root) return null
  return new TreeNode(root.val, invertTree(root.right), invertTree(root.left))
};

// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
var findDisappearedNumbers = function(nums) {
  let result = [];
  let set = new Set(nums);
  
  for(let i=1; i <= nums.length; i++){
    if(!set.has(i)){
      result.push(i)
    }
  }
  return result
};

// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
// 104. Maximum Depth of Binary Tree
var maxDepth = function(root) {
  if(!root) return 0;
  
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)
  
  return 1 + Math.max(leftDepth, rightDepth)
};