// link --> https://leetcode.com/problems/range-sum-of-bst/description/

var rangeSumBST = function (root, low, high) {
  if (root === null) {
    return 0
  }

  if (root.val >= low && root.val <= high) {
    return (
      root.val +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high)
    )
  } else if (root.val < low) {
    return rangeSumBST(root.right, low, high)
  } else {
    return rangeSumBST(root.left, low, high)
  }
}
