var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

const [N, length] = input;


let array = [];
let answer = [];

const dfs = (start) => {
  if (array.length === length) {
    answer.push(array.join(" "))
    return;
  }

  for (let i = start; i <= N; i++) {
    if (!array.includes(i)) {
      array.push(i);
      dfs(i+1);

      // 재귀에서 빠져나오면 넣었던 것을 뺀다.
      array.pop();
    }
  }
}

dfs(1);
console.log(answer.join("\n"))