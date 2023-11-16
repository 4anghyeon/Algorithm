function solution(s) {
    var answer = 0;
    let table = [[0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'],
                [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'],
                [8, 'eight'], [9, 'nine']];
    
    table.forEach(t => {
        let split = s.split(t[1]);
        if (split.length === 1) return;
        s = split.join(t[0]);
    
    });
    return Number(s);
}