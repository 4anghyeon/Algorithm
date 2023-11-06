const input = ("0\n").split("\n").map(Number);
let length = input.shift();

input.sort((a, b) => a - b);
let deleteCount = Math.round(((input.length) * 0.3) / 2);
length -= 2 * deleteCount;

input.splice(0, deleteCount);
input.splice(-deleteCount, deleteCount);

const sum = input.reduce((acc, cur) => {
  return acc + cur
}, 0);

const answer = Math.round(sum / (length || 1))
console.log(answer)