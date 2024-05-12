var fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

input.forEach(n => {
  // fib(0), fib(1)
  const count = [[1, 0], [0, 1]];

  for (let i = 2; i <= n; i++) {
    // fib(2) = fib(0) + fib(1)
    // fib(3) = fib(2) + fib(1)
    count[i] = [count[i - 2][0] + count[i - 1][0], count[i - 2][1] + count[i - 1][1]];
  }

  console.log(count[n].join(" "));
})