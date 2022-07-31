function solution(N, stages) {
    var answer = [];
    let ratioArr = [];
    for (let i = 1; i < N + 1; i++) {
        const challenged = stages.filter(s => s >= i);
        let ratio = 0;
        if (challenged) {
            let passedNumber = challenged.length;
            let notPassedNumber = challenged.filter(c => c === i).length;
            ratio  = notPassedNumber / passedNumber;
        }
        ratioArr.push([i, ratio]);
    }
    ratioArr = ratioArr.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return b[1] - a[1];
    });
    return ratioArr.map(r => r[0]);
}