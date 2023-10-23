let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0n;
let startIndex = 0;

for (let i = 0; i < input.length; i++) {
  if (i === startIndex) {
    if (i!== 0) checkAnswer(sum);
    sum = 0n;
    startIndex = startIndex + +input[i] + 1;
  } else {
    sum += BigInt(input[i]);
    if (i === input.length - 1) checkAnswer(sum)
  }
}

function checkAnswer(sum) {
  if (sum > 0) console.log("+")
  else if (sum < 0) console.log("-")
  else console.log("0")
}

