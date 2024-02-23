function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n / 2 ; i++) {
        if (check(i, n)) answer++;
    }

    return answer + 1;
}

function check(start, end) {
    let sum = 0;
    while (start < end / 2 + 1) {
        sum += start;
        if (sum > end) return false;
        if (sum === end) return true;
        start++;
    }
    
    return false;
}