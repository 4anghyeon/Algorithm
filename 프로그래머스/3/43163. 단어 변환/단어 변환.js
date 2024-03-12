function solution(begin, target, words) {
    var answer = 0;
    const visited = [...words].fill(false);
    
    
    const queue = [[begin, 0]];
    
    while (queue.length !== 0) {
        const [word, count] = queue.shift();
        if (word === target) {
            answer = count;
            break;
        }
        
        for (let i = 0 ; i < words.length; i++) {
            if (!visited[i]) {
                if (diffCount(word, words[i]) === 1) {
                    visited[i] = true;
                    queue.push([words[i], count + 1]);
                }
            }
        }
        
    }
    
    return answer;
}

const diffCount = (word, target) => {
    let count = 0;
    [...word].forEach((w, i) => {
        if (w !== target[i]) count++;
    })
    return count;
}