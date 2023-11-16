function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    
    let index = 0;
    while (index < score.length) {
        let slice = score.slice(index, index + m);
        if (slice.length < m) break;
        answer += Math.min(...slice) * m;
        index += m;
    }
    
    return answer;
}