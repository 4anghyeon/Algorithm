var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = +input.shift();

input = input.map(r => r.split(" ").map(Number));

let whiteCount = 0;
let blueCount = 0;

const checkAllSame = (x, y, n) => {
  let sum = 0;

  for (let i = x; i < n + x; i++) {
    for (let j = y; j < n + y; j++) {
      let value = +input[i][j];
      sum += value
    }
  }

  // 합이 0 => 흰색 종이
  // 합이 종이 넓이 => 파란색 종이
  let isWhite = sum === 0;
  let isBlue = sum === n * n;

  if (isWhite) whiteCount++;
  if (isBlue) blueCount++;

  // 하얀색도 아니고 파란색도 아니면 해당 종이에서 4등분해서 재귀
  if (!isWhite && !isBlue) {
    n /= 2;
    if (n < 1) return;
    checkAllSame(x, y, n);
    checkAllSame(x, y + n, n);
    checkAllSame(x + n, y, n);
    checkAllSame(x + n, y + n, n);
  }

}

checkAllSame(0, 0, N)

console.log(whiteCount)
console.log(blueCount)