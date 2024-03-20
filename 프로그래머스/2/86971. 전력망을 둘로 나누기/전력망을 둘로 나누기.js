function solution(n, wires) {
    const graph = [];
    
    // wires를 이용하여 graph를 만든다.
    wires.forEach(w => {
        const [node1, node2] = w;
        if (graph[node1]) graph[node1].push(node2);
        else graph[node1] = [node2];
        
        if (graph[node2]) graph[node2].push(node1);
        else graph[node2] = [node1];
    });
    
    
    // bfs를 이용하여 정점으로 부터 연결된 노드의 개수를 센다.
    const bfs = (node) => {
        const queue = [node];
        const visited = new Array(graph.length).fill(false);
        visited[node] = true;
        let count = 0;
        
        while (queue.length > 0) {
            const adjacencyNodeList = graph[queue.shift()];
            
            
            adjacencyNodeList.forEach(n => {
                if (!visited[n]) {
                    queue.push(n);
                    visited[n] = true;
                    count++;
                }
            })

        }
        return count;
    }
    
    
    // 다시 wires를 돌며 연결을 끊었다 붙였다를 반복한다.
    let answer = Number.MAX_VALUE;
    
    wires.forEach(w => {
        const [node1, node2] = w;
        
        // 서로 연결 끊기 !
        graph[node1] = graph[node1].filter(n => n !== node2);
        graph[node2] = graph[node2].filter(n => n !== node1);
        
        
        // 각각 연결된 노드 개수 세기
        const diff = Math.abs(bfs(node1) - bfs(node2));
        if (diff < answer) answer = diff;
        
        // 다시 연결 하기
        graph[node1].push(node2);
        graph[node2].push(node1);
        
    });
    
    
    
    return answer;
}