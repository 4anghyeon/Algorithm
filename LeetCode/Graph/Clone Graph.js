function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return node;
    return checkNeighbor(node, {});
};

function checkNeighbor(node, checkNodeMap) {
    if (checkNodeMap[node.val]) return checkNodeMap[node.val];

    const newNode = new Node(node.val);
    checkNodeMap[node.val] = newNode;

    node.neighbors.forEach((n) => {
        newNode.neighbors.push(checkNeighbor(n, checkNodeMap));
    });
    return newNode;
}
