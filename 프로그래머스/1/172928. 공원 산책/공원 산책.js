function solution(park, routes) {
    var answer = [];
    let start = [0, 0]
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[0].length; j++) {
            if (park[j][i] === 'S') {
                start = [i, j];
                break;
            }
        }
    }
    
    
    routes.forEach(r => {
        const [direction, distance] = r.split(" ");
        let [dx, dy] = [0, 0]
        if (direction === "N") [dx, dy] = [0, -(+distance)];
        else if (direction === "E") [dx, dy] = [+distance, 0];
        else if (direction === "W") [dx, dy] = [-(+distance), 0];
        else if (direction === "S") [dx, dy] = [0, +distance];
        
        const [nx, ny] = [start[0] + dx, start[1] + dy];
        
        if (nx < 0 || ny < 0 || nx >= park[0].length || ny >= park.length) return;
        if (checkPoo(start[0], start[1], nx, ny, park)) return;
        
        
        start = [nx, ny]
    
    });
    
    return [start[1], start[0]];
}

function checkPoo(x, y, nx, ny, park) {
    let startX = x;
    let endX = nx;
    let startY = y;
    let endY = ny;
    if (x !== nx) {
        if (x > nx) {
            startX = nx;
            endX = x;
        }
        for (let i = startX; i <= endX; i++) {
            
            if (park[y][i] === "X") return true;
        }
    } else {
        if (y > ny) {
            startY = ny;
            endY = y;
        }
         for (let i = startY; i <= endY; i++) {
            if (park[i][x] === "X") return true;
        }
    }
    
    return false;
}