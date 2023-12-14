function solution(k, tangerine) {
    var answer = 0;
    let map = {};
    
    tangerine.forEach(t => {
        map[t] = (map[t] || 0) + 1;
    })
    
    let entries = Object.entries(map);
    entries.sort((a, b) => {
        return b[1] - a[1]
    })
    
    
    let count = 0;
    let sum = 0;
    
    for (const entry of entries) {
        sum += entry[1];
        count++;
        if (sum >= k) break;
    }

    
    return count;
}