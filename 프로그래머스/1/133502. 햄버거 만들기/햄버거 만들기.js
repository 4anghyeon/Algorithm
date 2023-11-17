function solution(ingredient) {
    var answer = 0;
    let stack = [];
    
    let before = 0;
    
    ingredient.forEach(ing => {
        stack.push(ing);
        
        if (stack.length >= 4 && check(stack)) answer++; 
    })
    
    return answer;
}

function check(stack) {
    if (stack.slice(-4).join("") === "1231") {
        stack.splice(-4);
        return true;
    }
    return false;
}