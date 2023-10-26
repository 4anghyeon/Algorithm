let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [width, height] = input[0].split(" ");
input.splice(0, 1);
let field = input.map(str => str.split(""));

// 방문 노드 저장
const visitArray = [...field].map(arr => [...arr].fill(false));

const dfs = (x, y, prevTile) => {
  visitArray[x][y] = true;

  // 어떤 타일이냐에 따라 증가할 방향을 정한다. 
  const [dx, dy] = prevTile === "-" ? [0, 1] : [1, 0];
  const [nx, ny] = [x + dx, y + dy];

  // 증가된 좌표가 width와 height을 넘지 않으며, 방문한 적이 없고, 같은 타일이면 방문한다.
  if (nx < width && ny < height && !visitArray[nx][ny] && field[nx][ny] === prevTile) {
    dfs(nx, ny, prevTile)
  }

};

let count = 0;
for (let i = 0; i < width; i++) {
  for (let j = 0; j < height; j++) {
    // 방문된 적이 없는 타일이면 방문한다.
    if (!visitArray[i][j]) {
      // 방문한 타일부터 인접 타일을 재검색한다.
      dfs(i, j, field[i][j]);

      // 재귀에서 빠져 나오면 count 증가
      count++;
    }
  }
}

console.log(count);