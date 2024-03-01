function solution(cards) {
    const open = new Array(cards.length).fill(false);
    const group = [[]];
    
    let index = 0;
    let count = 0;
    while (!open.every(o => o)) {
        const card = cards[index];
        if (open[index]) {
            group.push([]);
            index = open.indexOf(false);
            continue;
        }
        open[index] = true;
        group[group.length - 1].push(card);
        index = card - 1;
    }
    
    if (group.length === 1) return 0;
    group.sort((a, b) => b.length - a.length);
    
    return group[0].length * group[1].length;
}