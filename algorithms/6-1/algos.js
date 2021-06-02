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