function solution(want, number, discount) {
    var answer = 0;
    let start = 0;
    
    function check(start) {
        const arr = discount.slice(start, start + 10);
        for (let i = 0 ; i < want.length; i++) {
            const item = want[i];
            if (arr.filter(a => a === item).length < number[i]) return false;
        }
        
        return true;
    }
    
    while (start + 10 <= discount.length) {
        if (check(start)) answer++;
        
        start++;
    }

    
    return answer;
}
