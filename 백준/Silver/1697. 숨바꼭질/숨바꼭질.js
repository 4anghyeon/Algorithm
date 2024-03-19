let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [K, N] = input[0].split(' ').map(Number);

const visited = new Array(100001).fill(false);

const bfs = () => {
  const queue = [[K, 0]];

  while (queue.length > 0) {
    const [x, sec] = queue.shift();
    visited[x] = true;
    if (x === N) {
      return sec;
    }
    if (x - 1 >= 0 && !visited[x - 1]) {
      queue.push([x - 1, sec + 1]);
      visited[x - 1] = true;
    }
    if (x + 1 <= 100000 && !visited[x + 1]) {
      queue.push([x + 1, sec + 1]);
      visited[x + 1] = true;
    }
    if (x * 2 <= 100000 && !visited[x * 2]) {
      queue.push([x * 2, sec + 1]);
      visited[x * 2] = true;
    }
  }

  return max;
};

const answer = bfs();

console.log(answer);
