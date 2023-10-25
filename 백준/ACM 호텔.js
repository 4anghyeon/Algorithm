let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testLength = input[0];
for (let i = 1; i <= testLength; i++) {
  const [height, width, n] = input[i].split(" ");
  const floor = n % height === 0 ? height : n % height;
  console.log(`${floor}${(Math.ceil(n / height) + "").padStart(2, "0")}`)
}
