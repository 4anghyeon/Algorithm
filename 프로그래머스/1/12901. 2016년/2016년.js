function solution(a, b) {
    let dayArray = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let monthDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let dayOfYear = monthDate.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0) + b - 1;
    
    return dayArray[(dayOfYear) % 7];
}