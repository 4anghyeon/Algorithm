var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input.shift().split(" ").map(Number);

const box = [];

// 토마토 상자 만들기
input.forEach(v => {
  box.push(v.split(" ").map(Number));
});

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let time = 0;

const bfs = (startList) => {
  const queue = [startList];

  // 1인 부분을 전부 모아 batch에 담아 뭉텅이로 실행 시킨다.
  while (queue.length > 0) {
    let isChanged = false;
    const batch = queue.shift();
    let newBatch = [];

    // 1 근처의 인접한 0인 부분을 하나씩 돌면서 검사한다.
    // 또한 그 인접노드의 0인 부분이 1로 바뀌면, 새로운 batch에 넣고 반복한다.
    for (let i = 0; i < batch.length; i++) {
      const [x, y] = batch[i];

      for (let j = 0; j < dx.length; j++) {
        const [nx, ny] = [x + dx[j], y + dy[j]];
        if ((nx < N && nx >= 0) && (ny < M && ny >= 0)) {
          if (box[nx][ny] === 0) {
            newBatch.push([nx, ny])
            box[nx][ny] = 1;
            isChanged = true;
          }
        }
      }
    }
    if (newBatch.length > 0) queue.push(newBatch);

    // 값이 바뀐 경우가 있을 때만 시간 증가
    if (isChanged) time++
  }
}

// 토마토가 익은 모든 부분(1) 에서 부터 동시에 bfs가 진행되어야 하기 때문에
// 1인 부분을 모은 후 한번에 집어넣는다.
let startList = [];
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    const node = box[x][y];
    if (node === 1) {
      startList.push([x, y])
    }
  }
}

// bfs 시작!!
bfs(startList)

if (box.flat().includes(0)) console.log(-1)
else console.log(time)