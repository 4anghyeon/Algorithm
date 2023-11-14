var fs = require('fs');
var N = +fs.readFileSync('/dev/stdin').toString();

let answer = 0;

// 체스판 만들기
// 어차피 한 row에 하나 밖에 두지 못하기 때문에 2차원 배열이 아닌 1차원 배열로 해도 충분하다.
let field = [];
for (let i = 0; i < N; i++) {
  field.push(0);
}

const isPossibleInRow = row => {
  for (let i = 0; i < row; i++) {
    // 같은 열에 있는지 검사
    // field[n]의 값은 column의 값이므로 field[i] = 2 , field[row] = 2 라면 세로로 같은 줄에 있어서 안됨
    if (field[i] === field[row]) return false;

    // 대각선에 있는지 검사, x의 차와 y의 차가 같으면 대각선이다.
    if (row - i === Math.abs(field[row] - field[i])) return false;
  }
  return true;
};

const find = row => {
  if (row === N) {
    // 문제 없이 row가 N까지 왔으면 성공
    answer++;
    return;
  }

  for (let column = 0; column < N; column++) {
    field[row] = column; // 체스판의 row에 몇 번째 column이 들어갔는지 체크

    // 그리고 그렇게 들어간 체스판이 맞는지 체크
    if (isPossibleInRow(row)) {
      // 맞다면 다음 row로 이동해서 검사
      find(row + 1);
    }
  }
};

find(0);
console.log(answer);
