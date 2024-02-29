let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input.shift();
const array = [...input[0].split(' ').map(Number)];

const dp = new Array(array.length).fill(0);

array.forEach(((number, index) => {
  let max = 0;
  for (let i = 0; i <= index; i++) {
    if (array[i] < number) {
      if (dp[i] > max) max = dp[i];
    }
  }
  dp[index] = max + 1;
}))

console.log(Math.max(...dp))