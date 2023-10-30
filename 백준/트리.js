let input = "5\n4 4 4 4 -1\n0".toString().trim().split('\n');

const tree = input[1].split(" ").map(v => +v).sort();
const deleteNodeIndex = +input[2];

const graph = [];
const rootNode = Math.min(...tree);
tree.forEach((v,i) => {
  if (v === rootNode) {
    graph.unshift([]);
  } else {
    if (!graph[i]) {
      graph[i] = [v];
    }
    let parent = graph[v] ? graph[v] : [];
    parent.push(i);
    graph[v] = parent;
  }
})

console.log(graph)

const deleteNode = node => {
  const children = [...graph[node]];
  graph[node] = [];
  children.forEach(child => {
    if (child < node) return;
    deleteNode(child);
  })
}

deleteNode(Math.max(deleteNodeIndex, 0))

console.log(graph.filter(node => node.length === 1).length);