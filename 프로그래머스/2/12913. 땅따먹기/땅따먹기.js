function solution(land) {
    var answer = 0;
    
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            land[i][j] = land[i][j] += max(land[i - 1], j)
        }
    }
    
    
    return Math.max(...land[land.length - 1]);
}

const max = (arr, ban) => {
    let max = 0;
    arr.forEach((a, i) => {
        if (i === ban) return;
        if (a > max) max = a;
    })
    return max;
}
