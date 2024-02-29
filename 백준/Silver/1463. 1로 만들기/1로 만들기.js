let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

if (N === 1) {
  console.log(0);
} else {
  const dp = new Array(N).fill(0);

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i-1] + 1;

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1)

    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1)
    }
  }

  console.log(dp[N])
}