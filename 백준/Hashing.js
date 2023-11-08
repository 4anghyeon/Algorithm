var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.shift();

const arr = input.shift().split("")

let sum = BigInt(0);
for (let i = 0; i < arr.length; i++) {
  let num = BigInt(arr[i].charCodeAt(0) - 96);
  sum += num * BigInt(BigInt(31)**BigInt(i));
}

console.log((sum % BigInt(1234567891)).toString().replace("n", ""))