function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach(
        (num, index) => (answer += Number((signs[index] ? "" : "-") + num))
    );
    return answer;
}
