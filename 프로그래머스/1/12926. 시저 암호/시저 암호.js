function solution(s, n) {
    return [...s].map(c => {
        if (c === " ") return c;
        let code = c.charCodeAt();
        let newCode = code + n;
        
        if (newCode > 122) {
            newCode -= 26
        } else if (code < 97 && newCode > 90) {
            newCode -= 26
        }
        
        return String.fromCharCode(newCode);
    }).join("");
}