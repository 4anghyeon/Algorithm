function solution(n) {
    var answer = 0;
    
    let a = BigInt(0);
    let b = BigInt(1);
    
    for (let i = 2; i <= n ; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    
    return b % BigInt(1234567);
}
