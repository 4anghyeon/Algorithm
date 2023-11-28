function solution(survey, choices) {
    var answer = '';
    const INDEX = [
        ['R', 'T'],
        ['C', 'F'],
        ['J', 'M'],
        ['A', 'N']
    ]
    let scoreMap = {};
    survey.forEach((s,i) => {
        let score = 0;
        if (choices[i] > 4) {
            score = (choices[i] % 4);  
            scoreMap[s[1]] = (scoreMap[s[1]] || 0) + score;
        } else if (choices[i] < 4) {
            score = (4 - choices[i] % 4);  
            scoreMap[s[0]] = (scoreMap[s[0]] || 0) + score;
        }
    })
    console.log(scoreMap)
    for (let i = 0 ; i < 4; i++) {
        let first = scoreMap[INDEX[i][0]] || 0;
        let second = scoreMap[INDEX[i][1]] || 0;
        if (first >= second) answer += INDEX[i][0];
        else answer += INDEX[i][1];
    }

    
    
    return answer;
}