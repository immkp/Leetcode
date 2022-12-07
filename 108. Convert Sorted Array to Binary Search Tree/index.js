// link -> https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/


var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null
  return convertArrayToBST(nums, 0, nums.length - 1)

  function convertArrayToBST(nums, left, right) {
    if (left > right) return null
    let mid = left + Math.floor((right - left) / 2)
    let node = new TreeNode(nums[mid])
    node.left = convertArrayToBST(nums, left, mid - 1)
    node.right = convertArrayToBST(nums, mid + 1, right)

    return node
  }
}
