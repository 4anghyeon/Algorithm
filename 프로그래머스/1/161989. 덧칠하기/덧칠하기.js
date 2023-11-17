function solution(n, m, section) {
    const painted = new Array(n).fill(true);
    section.forEach(s => painted[s-1] = false);
    var answer = 0;
    
    let diffArr = [];
    for (let i = 0; i < section.length - 1; i++) {
        diffArr.push(section[i + 1] - section[i] + 1)
    }
    
    console.log(diffArr)
    
    let max = section[section.length - 1];
    let min = section[0];
    let diff = max - min;
    if (diff < m) return 1;
    return (max - min) / m + 1;
}