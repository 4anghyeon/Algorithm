function solution(maps) {    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    let newMaps = maps.map(m => m.split(""));
    
    let [columnLength, rowLength] = [newMaps[0].length, newMaps.length];

    const find = (node, end) => {
        let queue = [node];
        let visitedArray = [...newMaps].map(m => m = [...newMaps[0]].fill(false));
        
        while (queue.length > 0) {
            let [x, y, count] = queue.shift();
            if (newMaps[y][x] === end) return count;
            
            count++;
            
            for (let i = 0; i < dx.length; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx >= columnLength || nx < 0) continue;
                if (ny >= rowLength || ny < 0) continue;
                
                if (visitedArray[ny][nx]) continue;
                if (newMaps[ny][nx] === "X") continue;
                visitedArray[ny][nx] = true;
                
                queue.push([nx, ny, count]);
            }
        }
        

        return -1;
    }
    
    let startPosition;
    let leverPosition;

    for (let x = 0; x < columnLength; x++) {
        for (let y = 0; y < rowLength; y++) {
            let c = newMaps[y][x];
            
            if (c === "S") {
                startPosition = [x, y, 0];
            } else if (c === "L") {
                leverPosition = [x, y, 0];
            }
            
            if (startPosition && leverPosition) break;
        }
    }
    
    // start -> lever
    let c1 = find(startPosition, 'L');
    if (c1 === -1) return -1;
    
    // lever -> exit
    let c2 = find(leverPosition, 'E');
    if (c2 === -1) return -1;
    
    
    return Number.isNaN(c1 + c2) ? -1 : c1 + c2;
    
}