function solution(k, score) {
    let honor = [];
    var answer = [];
    
    score.forEach(s => {
        
        if (honor.length > k - 1) {
            if (honor[0] <= s) {
                honor.shift();
                honor.push(s)
                honor.sort((a, b) => +a - +b)
                
                answer.push(honor[0])
                
            } else {
                answer.push(honor[0])
            }
        } else {
            honor.push(+s);
            honor.sort((a, b) => +a - +b)
            
            answer.push(honor[0]);
        }
    })
    return answer;
}