function solution(citations) {
    var answer = 0;
    citations.sort();
    const max = Math.max(...citations);
    let hIndex = 0;
    for (let i = 0; i <= max; i++) {
        const arr = citations.filter(a => a >= i);
        if (arr.length >= i && i >= hIndex) hIndex = i;
    }
    
    return hIndex;
}