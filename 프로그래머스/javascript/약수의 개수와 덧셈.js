function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (getDivisorCount(i) % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}

function getDivisorCount(number) {
    let count = 1;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) count++;
    }
    return count;
}
