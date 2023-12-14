function solution(n) {
    if (n <= 2) return n;
    
    // 1칸까지 뛸 수 있는 방법
    // 1
    let a = 1n;
    
    // 2칸까지 뛸 수 있는 방법
    // 1 1
    // 2
    let b = 2n;
    
    // 3번째 칸까지 뛸 수 있는 방법
    // 1 1 1
    // 2 1
    // 1 2
    
    for (let i = 2; i < n; i++) {
        // n칸까지 뛸 수 있는 방법 = n-2칸까지 뛸 수 있는 방법 + n-1칸까지 뛸 수 있는 방법
        answer = a + b;
        a = b;
        b = answer;
    }

    return answer % 1234567n;
}