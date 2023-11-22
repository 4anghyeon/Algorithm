function solution(X, Y) {
    let xArray = new Array(10).fill(0);
    let yArray = new Array(10).fill(0);
    
    [...X].forEach(c => xArray[c]++);
    [...Y].forEach(c => yArray[c]++);
    
    let answer = '';
    for (let i = 9; i >= 0; i--) {
        let x = xArray[i];
        let y = yArray[i];
        if (x > 0 && y > 0) answer += (`${i}`.repeat(Math.min(x, y)))
        
    }
    if (answer === "") return "-1";
    if (answer[0] === '0') return "0";
    return answer;
}