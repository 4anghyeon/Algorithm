function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    let [from, to, answer] = costs.shift();
    let connectedSet = new Set();
    connectedSet.add(from).add(to);
    
    
    while (connectedSet.size < n) {
        const index = costs.findIndex(([from, to]) => {
            if (connectedSet.has(from) && !connectedSet.has(to) || connectedSet.has(to) && !connectedSet.has(from)) return true;
            return false;
        })
        const [[from, to, cost]] = costs.splice(index, 1);
        connectedSet.add(from).add(to);
        answer += cost;
    }
    
    
  return answer;
}