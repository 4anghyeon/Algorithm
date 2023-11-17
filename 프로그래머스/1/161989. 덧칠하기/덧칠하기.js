function solution(n, m, section) {
    let nowPoint = 0;
    let answer = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (nowPoint < section[i]) {
            answer++;
            nowPoint = section[i] + m - 1; 
        } 
    }
    return answer;
}
