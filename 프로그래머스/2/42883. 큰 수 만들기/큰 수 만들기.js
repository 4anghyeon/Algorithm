function solution(number, k) {
    
    const stack = [];
    
    for (let i = 0 ; i < number.length; i++) {
        const n = number[i];
        
        
        while (k > 0 && stack[stack.length - 1] < n) {
            stack.pop();
            k--;
        }
        
        stack.push(n);
    }
    
    return stack.join('').slice(0, stack.length - k);
}
