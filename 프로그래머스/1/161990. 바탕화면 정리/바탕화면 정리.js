function solution(wallpaper) {
    var answer = [];
    const rowSize = wallpaper.length;
    const columnSize = wallpaper[0].length;
    
    let startX = 0;
    let endX = 0;
    let x = false;
    
    
    for (let column = 0; column < columnSize; column++) {
        for (let row = 0; row < rowSize; row++) {
            if (wallpaper[row][column] === "#") {
                if (!x) {
                    startX = column;
                    x = true;
                } else {
                    endX = column;
                }

            }
        }
    }
    
    let startY = 0;
    let endY = 0;
    let y = false;
    
    for (let row = 0; row < rowSize; row++) {
        for (let column = 0; column < columnSize; column++) {
            if (wallpaper[row][column] === "#") {
                if (!y) {
                    startY = row;
                    y = true;
                } else {
                    endY = row;
                }

            }
        }
    }
    
    return [startY, startX, (endY || startY) + 1, (endX || startX) + 1];
}