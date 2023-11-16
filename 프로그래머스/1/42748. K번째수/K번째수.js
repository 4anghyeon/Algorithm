function solution(array, commands) {
    var answer = [];
    
    commands.forEach(command => {
        const [i, j, k] = command;
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
    })
    
    return answer;
}