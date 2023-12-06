function solution(players, callings) {
    const map = {};
    
    players.forEach((p, i) => {
        map[p] = i;
    })
    
    callings.forEach(call => {
        const index = map[call];
        
        const temp = players[index - 1];
        players[index - 1] = players[index];
        players[index] = temp;
        
        map[call] = map[call] - 1;
        map[players[index]] = map[players[index]] + 1;
    })
    
    
    
    return players;
}