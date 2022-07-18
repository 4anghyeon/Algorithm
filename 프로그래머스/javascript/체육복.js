function solution(n, lost, reserve) {
    for (let i = 1; i <= n; i++) {
        let lostIndex = lost.findIndex((l) => l === i);
        let reserveIndex = reserve.findIndex((r) => r === i);
        if (lostIndex !== -1 && reserveIndex !== -1) {
            lost.splice(lostIndex, 1);
            reserve.splice(reserveIndex, 1);
        }
    }
    var answer = n - lost.length;

    lost.sort();
    reserve.sort();

    reserve.forEach((r) => {
        let findIndex = lost.findIndex((l) => l === r + 1 || l === r - 1);
        if (findIndex !== -1) {
            answer++;
            lost.splice(findIndex, 1);
        }
    });

    return answer;
}
