// 편의를 위해 graph의 0 번째 index는 비워둠
const graph = [[], [2, 5, 9], [1, 3], [2, 4], [3], [1, 6, 8], [5, 7], [6], [5], [1, 10], [9]];
const visited = [];

const dfs = (graph, vertex, visited) => {
  visited[vertex] = true; // 방문한 노드 표시
  console.log(`vertex ${vertex} 방문!`);
  // 인접 행렬 방문
  for (let adjacentVertex of graph[vertex]) {
    if (!visited[adjacentVertex]) {
      dfs(graph, adjacentVertex, visited); // 방문하지 않았다면 방문
    }
  }
}

dfs(graph, 1, visited)