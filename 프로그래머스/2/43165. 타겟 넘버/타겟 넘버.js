function solution(numbers, target) {
    var answer = 0;
    

    const dfs = (idx, sum) => {
        if (idx > numbers.length - 2) {
            if (sum === target) answer++;
            return;
        } else {
            dfs(idx+1, sum + numbers[idx+1]);
            dfs(idx+1, sum - numbers[idx+1]);
        }
        
    }
    
    dfs(0, numbers[0]);
    dfs(0, -numbers[0]);
    
    return answer;
}