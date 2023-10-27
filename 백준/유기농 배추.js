const input =("2\n" +
  "10 8 17\n" +
  "0 0\n" +
  "1 0\n" +
  "1 1\n" +
  "4 2\n" +
  "4 3\n" +
  "4 5\n" +
  "2 4\n" +
  "3 4\n" +
  "7 4\n" +
  "8 4\n" +
  "9 4\n" +
  "7 5\n" +
  "8 5\n" +
  "9 5\n" +
  "7 6\n" +
  "8 6\n" +
  "9 6\n" +
  "10 10 1\n" +
  "5 5").split("\n");

const testCaseSize = +input[0];
let testStartIndex = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let answer = "";

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

  const bfs = (field, node) => {
    const queue = [node];

    // 인접 노드를 다 돌때까지 반복
    while (queue.length > 0) {
      let [x, y] = queue.shift();

      if (field[x][y] === 0) continue; // 배추가 없는 곳은 그냥 지나친다

      field[x][y] = 0; // 배추가 있다고 체크한 곳은 0으로 변환!

      // 상하좌우에 인접노드가 있나 검색
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < width && nx >= 0 && ny < height && ny >= 0) {
          if (field[nx][ny] === 1) {
            // 돌아볼 인접 노드 목록에 추가
            queue.push([nx, ny])
          }
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (field[i][j] === 1) {
        bfs(field, [i, j]);
        count++;
      }
    }
  }

  testStartIndex = testStartIndex + cabbageAmount + 1;
  answer += count + "\n";
}
console.log(answer)