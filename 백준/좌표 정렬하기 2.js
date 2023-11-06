let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let arr = input.map(v =>
  v.split(" ").map(Number))
  .sort((a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;
    if (ay === by) return ax - bx;
    return ay - by;
  })

let answer = "";
for (let v of arr) {
  answer += v.join(" ") + "\n"
}

console.log(answer.trim())