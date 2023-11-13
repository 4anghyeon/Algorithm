function solution(sizes) {
    let bigLengthArr = [];
    let smallLengthArr = [];
    
    for (let size of sizes) {
        bigLengthArr.push(Math.max(...size));
        smallLengthArr.push(Math.min(...size));
    }
    
    return Math.max(...bigLengthArr) * Math.max(...smallLengthArr);
}