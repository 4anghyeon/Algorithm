let fs = require('fs');
let input = "3\n40 40 40".toString().trim().split('\n');

let ys = 0;
let ms = 0;

for (const second of input[1].split(" ")) {
  ys += 10 + (Math.floor(second / 30)) * 10;
  ms += 15 + (Math.floor(second / 60)) * 15;
}

if (ys > ms) {
  console.log(`M ${ms}`)
} else if (ms > ys) {
  console.log(`Y ${ys}`)
} else {
  console.log(`Y M ${ys}`)
}