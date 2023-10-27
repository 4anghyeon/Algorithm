const input =("10\n" +
  "3 2 4\n" +
  "1 0\n" +
  "0 1\n" +
  "1 1\n" +
  "2 1\n" +
  "3 3 6\n" +
  "2 0\n" +
  "0 1\n" +
  "2 1\n" +
  "0 2\n" +
  "1 2\n" +
  "2 2\n" +
  "2 2 2\n" +
  "0 1\n" +
  "1 0\n" +
  "2 2 2\n" +
  "0 1\n" +
  "1 0\n" +
  "2 3 5\n" +
  "0 0\n" +
  "0 1\n" +
  "0 2\n" +
  "1 0\n" +
  "1 1\n" +
  "2 2 2\n" +
  "0 1\n" +
  "1 0\n" +
  "2 2 3\n" +
  "0 0\n" +
  "1 0\n" +
  "0 1\n" +
  "3 2 5\n" +
  "0 0\n" +
  "0 1\n" +
  "1 1\n" +
  "2 1\n" +
  "2 0\n" +
  "2 2 3\n" +
  "0 0\n" +
  "1 1\n" +
  "0 1\n" +
  "50 50 1\n" +
  "49 49\n" +
  "50 50 1\n" +
  "0 0").split("\n");

console.time("test");

const testCaseSize = +input[0];
let testStartIndex = 1;

for (let i = 0; i < testCaseSize; i++) {
  const [width, height, cabbageAmount] = input[testStartIndex].split(" ").map(Number);
  const cabbage = input.slice(testStartIndex + 1, testStartIndex + cabbageAmount + 1);
  const field = [];

  // 밭 만들기
  for (let i = 0; i < width; i++) {
    let array = new Array(height).fill(0);
    field.push(array)
  }

  // 배추 심기
  cabbage.forEach(str => {
    let [x, y] = str.split(" ");
    field[+x][+y] = 1;
  });

  const visitedNodes = new Set();
  const bfs = (field, node) => {
    const queue = [node];
    const movement = [1, -1];

    let count  = 0;

    while (queue.length > 0) {
      let [x, y] = queue.shift();
      visitedNodes.add(`${x}${y}`)

      // 좌우에 인접노드가 있나 검색
      for (let i = 0; i < movement.length; i++) {
        const nx = x + movement[i];
        if (nx < width && nx >= 0 && !visitedNodes.has(`${nx}${y}`) && field[nx][y] === 1) {
          queue.push([nx, y])
        }
      }

      // 상하에 인접노드가 있나 검색
      for (let i = 0; i < movement.length; i++) {
        const ny = y + movement[i];
        if (ny < height && ny >= 0 && !visitedNodes.has(`${x}${ny}`) && field[x][ny] === 1) {
          queue.push([x, ny])
        }
      }
      count++;
    }
  }

  let count = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (field[i][j] === 1 && !visitedNodes.has(`${i}${j}`)) {
        bfs(field, [i, j]);
        count++;
      }
    }
  }

  testStartIndex = testStartIndex + cabbageAmount + 1;
  console.log(count)
}

console.timeEnd("test")