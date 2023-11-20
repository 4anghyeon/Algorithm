function solution(lottos, win_nums) {
    var answer = [];
    let match = 0;
    const clearNubmers = lottos.filter(n => n !== 0);
    const removedNumberLength = 6 - clearNubmers.length;
    
    clearNubmers.forEach(n => {
        if (win_nums.includes(n)) match++
    });
    
    answer = [Math.min(7 - (match + removedNumberLength), 6), Math.min(7 - match, 6)];
    
    return answer;
}