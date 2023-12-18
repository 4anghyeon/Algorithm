function solution(elements) {
    var answer = 0;
    // 원형 수열이기에 같은 수열을 연달아 놓는다면 일반 수열로 생각하고 계산할 수 있다.
    const sequence = [...elements, ...elements];
    const sumSet = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            sumSet.add(sequence.slice(j, j + i + 1).reduce((acc, cur) => acc + cur, 0))
        }
    }

    
    return sumSet.size;
}