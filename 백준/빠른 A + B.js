let fs = require('fs');
let input = "5\n1 1".toString().trim().split('\n');

let answer = "";

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ");
  if (a && b) answer += `${+a + +b}\n`;
}

// console을 for문 안에서 찍으면 시간 초과
console.log(answer);