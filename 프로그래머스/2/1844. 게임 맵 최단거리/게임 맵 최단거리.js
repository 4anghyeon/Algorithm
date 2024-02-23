function solution(maps) {
    
    const visitedArray = Array.from(maps).fill(false).map(() => Array.from(maps[0]).fill(false));

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    const bfs = (node) => {
        const queue = [node];

        while (queue.length > 0) {
            const [x, y, count] = queue.shift();
            if (!maps[y][x]) continue;
            if (visitedArray[y][x]) continue;
            if (x === maps[0].length - 1 && y === maps.length - 1) return count;
            visitedArray[y][x] = true;

            for (let i = 0; i < dx.length; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if (ny < 0 || nx < 0 || ny >= maps.length || nx >= maps[0].length) continue;

                queue.push([nx, ny, count + 1])
            }
        }
        return -1;
    }

    return bfs([0, 0, 1])
}