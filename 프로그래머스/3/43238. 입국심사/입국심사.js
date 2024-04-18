function solution(n, times) {
    
    let minSecond = times[0];
    let maxSecond = n * times[times.length - 1]; // 최악의 수
    let answer = maxSecond;
    
    while (minSecond <= maxSecond) {
        let mid = Math.floor((minSecond + maxSecond) / 2);
        
        const count = times.reduce((acc, cur) => {
            return Math.floor(mid / cur) + acc
        }, 0)
        
        if (count >= n) {
            maxSecond = mid - 1;
        } else {
            minSecond = mid + 1;
        }
    }
    
    
    return minSecond;
}