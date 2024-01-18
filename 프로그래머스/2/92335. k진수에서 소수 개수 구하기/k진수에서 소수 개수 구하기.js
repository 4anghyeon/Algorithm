function solution(n, k) {
    const converted = n.toString(k).split('0')

    let count = 0;
    converted.forEach(c => {
        if (isPrimary(+c)) count++;
    })
    return count;
}

const isPrimary= (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}