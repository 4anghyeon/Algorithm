function solution(s)
{
    if (s.length % 2 === 1) return 0;
    let arr = Array.from(s);
    let stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}
