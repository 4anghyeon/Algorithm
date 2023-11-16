function solution(numbers) {
    var answer = [];
    
    let cnt = 0;
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1;j<numbers.length;j++){
            answer[cnt] = numbers[i] + numbers[j];
            cnt++
        }
    }
    answer = Array.from(new Set(answer));
    answer.sort((a, b) => a - b)
    return answer;
}