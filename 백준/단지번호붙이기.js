let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N= +input.shift();

// 지도 만들기
let map = [];

input.forEach(row => {
  map.push(row.split("").map(Number))
})

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

const bfs = (node) => {
  let queue = [node];
  let count = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (map[x][y] === 0) continue;
    map[x][y] = 0;
    count++;

    for (let i = 0; i < dx.length; i++) {
      const  [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (map[nx][ny] === 1) queue.push([nx, ny])
      }

    }
  }


  return count;
}

let answerArray = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      let count = bfs([i, j]);
      if (count > 0) answerArray.push(count);
    }
  }
}


console.log(answerArray.length)
console.log(answerArray.sort((a,b) => a - b).join("\n").trim())