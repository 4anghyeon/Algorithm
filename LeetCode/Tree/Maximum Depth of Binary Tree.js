/**
 * @param {TreeNode} root
 * @return {number}
 */
let max = -Number.MIN_VALUE;
var maxDepth = function(root) {
    return hasChild(root, 1, 1);
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function hasChild(node, depth, resultDepth) {
    if (!node) {
        return 0;
    }

    resultDepth = Math.max(depth, resultDepth);
    depth = depth + 1;

    if (node.left) {
        resultDepth = hasChild(node.left, depth, resultDepth);
    }
    if (node.right) {
        resultDepth = hasChild(node.right, depth, resultDepth);
    }
    return resultDepth;
}