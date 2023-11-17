function solution(answers) {
    var score = [0, 0, 0];
    const pattern = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    answers.forEach((c,i) => {
        for (let j = 0 ; j < 3; j++) {
            if (pattern[j][i % pattern[j].length] === c) {
                score[j] += 1;
            }
        }
    });
    
    const max = Math.max(...score);
    
    let answer = [];
    score.forEach((c, i) => {
        if (c === max) answer.push(i + 1);
    })
    
    
    return answer.sort((a, b) => a - b);
}