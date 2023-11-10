let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalComputerAmount = +input.shift();
const n = +input.shift();

const graph = [[]];

// graph 만들기
input.forEach(v => {
  const row = v.split(" ").map(Number);
  const node1 = graph[row[0]]
  const node2 = graph[row[1]]
  if (!node1) graph[row[0]] = [];
  if (!node2) graph[row[1]] = [];
  if (!graph[row[0]].includes(graph[row[1]])) graph[row[0]].push(row[1])
  if (!graph[row[1]].includes(graph[row[0]])) graph[row[1]].push(row[0])
})

const visitedNode = [...graph].fill(false);
const dfs = (node, count) => {
  visitedNode[node] = true;
  if (node !== 1) count++;
  let adjacencyNodeList = graph[node];
  if (!adjacencyNodeList) return 0;
  adjacencyNodeList.forEach(n => {
    if (!visitedNode[n]) count = dfs(n, count);
  });
  return count;
}

console.log(dfs(1, 0))

