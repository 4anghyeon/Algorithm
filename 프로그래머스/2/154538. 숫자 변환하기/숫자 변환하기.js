function solution(x, y, n) {
    let answer = -1;
    
    let stack = [[y, 0]];
    
    
    while (stack.length > 0) {
        const [num, count] = stack.shift();

        if (num === x) {
            answer = count;
            break;
        }
        
        if (num % 2 === 0) stack.push([num / 2, count + 1]);
        if (num % 3 === 0) stack.push([num / 3, count + 1]);
        if (num - n >= x) stack.push([num - n, count + 1]);
        
    }
    
    
    return answer;
}