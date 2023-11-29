function solution(N, road, K) {
    const graph = (new Array(N).fill(0)).map(a => new Array(N).fill(Number.POSITIVE_INFINITY))
    let answer = 0;
    
    // graph 만들기
    road.forEach(r => {
        const node1 = r[0] - 1;
        const node2 = r[1] - 1;
        if (graph[node1][node2]) {
            if (graph[node1][node2] > r[2]) {
                graph[node1][node2] = r[2];
                graph[node2][node1] = r[2];
            }
        } else {
            graph[node1][node2] = r[2];
            graph[node2][node1] = r[2];
        }
        
        
    });
    
    const visitedNode = new Array(N).fill(false);
    const distance = new Array(N).fill(0);
    
    const getSmallIndex = () => {
        let min = Number.POSITIVE_INFINITY;
        let index = 0;

        for (let i=0 ; i < N; i++) {
            if (min > distance[i] && !visitedNode[i]) {
                min = distance[i];
                index = i;
            }
        }
        
        return index;
    }
    
    
    const dijkstra = (start) => {
        for (let i = 0; i < N; i++) {
            distance[i] = graph[start][i];
        }
        visitedNode[start] = true;
        
        for (let i = 0; i < N; i++) {
            let current = getSmallIndex();
            visitedNode[current] = true;
            
            for (let j = 0; j < N; j++) {
                if (!visitedNode[j]) {
                    if (distance[current] + graph[current][j] < distance[j]) {
                        distance[j] = distance[current] + graph[current][j];
                    }
                }
            }
        }
        
    }

    dijkstra(0);

    return distance.filter(d => d <= K || d === Number.POSITIVE_INFINITY).length;
}