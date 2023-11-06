const input = ("11 4 2\n" +
  "2 1\n" +
  "2 3\n" +
  "2 11\n" +
  "2 5").split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);

let tempArr = [];

input.forEach((v, index) => {
  let node = v.split(" ").map(Number);
  node.sort((a, b) => a - b)
  if (index + 1 === V) tempArr.unshift(node)
  else tempArr.push(node)
});

let nodeArray = [[]];

tempArr.forEach(v => {
  if (nodeArray[v[0]]) nodeArray[v[0]].push(v[1])
  else nodeArray[v[0]] = [v[1]]

  if (nodeArray[v[1]]) nodeArray[v[1]].push(v[0])
  else nodeArray[v[1]] = [v[0]]
});

for (let i = 0; i < nodeArray.length; i++) {
  if (!nodeArray[i]) nodeArray[i] = [i]
}


function dfsSolution() {
  let visitedNode = Array.from(nodeArray).fill(false);

  let dfsAnswer = [];

  const dfs = (node) => {
    visitedNode[node] = true;
    let adjacencyNodeList = nodeArray[node].sort((a, b) => a - b);
    dfsAnswer.push(node)

    for (const element of adjacencyNodeList) {
      let adjacencyNode = element;
      if (!visitedNode[adjacencyNode]) {
        dfs(adjacencyNode);
      }
    }
  }

  dfs(V);

  console.log(dfsAnswer.join(" "));
}

function bfsSolution() {
  let visitedNode = Array.from(nodeArray).fill(false);
  let bfsAnswer = [];

  const bfs = (node) => {
    const queue = [node];

    while (queue.length > 0) {
      let nextNode = queue.shift();
      if (visitedNode[nextNode]) continue;
      const adjacencyNodeList = nodeArray[nextNode].sort((a, b) => a - b);
      visitedNode[nextNode] = true;
      bfsAnswer.push(nextNode);

      for (let i = 0; i < adjacencyNodeList.length; i++) {
        let adjacencyNode = adjacencyNodeList[i];
        if (!visitedNode[adjacencyNode]) {
          queue.push(adjacencyNode)
        }
      }
    }
  }

  bfs(V);
  console.log(bfsAnswer.join(" "));
}


dfsSolution();
bfsSolution();


