function solution(s) {
    var answer = 0;
    const origin = s;
    do {
        if (checkIsRightBracket(s)) answer++;
        s = moveLeft(s)
    } while (s !== origin);
    
    
    return answer;
}

function moveLeft(s) {
    const sArr = [...s];
    const first = sArr.shift();
    sArr.push(first);
    return sArr.join("")
}

const openBracket = ["[", "(", "{"];
const closeBracket = ["]", ")", "}"];

const bracketMap = {
    "]": "[",
    "}": "{",
    ")": "(",
}

function checkIsRightBracket(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i ++) {
        const c = s[i];
        if (openBracket.includes(c)) stack.push(c);
        else {
            const peek = stack[stack.length-1];
            if (!peek) return false;
            if (peek === bracketMap[c]) stack.pop();
        }
    }
    
    if (stack.length ===0) return true;
    return false;
}