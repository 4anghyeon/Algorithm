function solution(n) {
    let answer = [];
    
    function hanoi(n, from, other, to) {
        if (n === 0) return;
        
        hanoi(n-1, from, to, other);
        answer.push([from, to])
        hanoi(n-1, other, from, to);
    }
    
    hanoi(n, 1, 2, 3)
    return answer;
}

