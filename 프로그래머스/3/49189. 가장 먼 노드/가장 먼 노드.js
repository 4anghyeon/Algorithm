function solution(n, edge) {
    var answer = 0;
    const graph = new Array(n).fill(false).map(() => []);
    const visited = new Array(n).fill(false)
    
    edge.forEach(v => {
        const a = v[0] - 1;
        const b = v[1] - 1;
        graph[a].push(b + 1);
        graph[b].push(a + 1);
    });
    
    const queue = [[1, 0]];
    
    let max = 0;
    let costList = [[]];
    while (queue.length > 0) {
        const [node, count] = queue.shift();
        if (visited[node -1]) continue;
        visited[node - 1] = true;
        
        
        if (costList[count]) costList[count].push(node) 
        else costList[count] = [node];
        
        const nodeList = graph[node - 1];
        nodeList.forEach(v => {
            if (!visited[v - 1]) {
                queue.push([v, count + 1]);
            }
        })
    }
    
    
    
    return costList[costList.length - 1].length;
}