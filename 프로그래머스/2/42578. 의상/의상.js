function solution(clothes) {
    var answer = 0;
    const closet = {};
    
    clothes.forEach(([item, category]) => {
        if (closet[category]) closet[category].push(item);
        else closet[category] = [item]
    })
    const values = Object.values(closet)
    
    return values.reduce((acc, cur) => {
        return acc * (cur.length + 1)
    }, 1) - 1;
}

