var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input.shift();
const array = input[0].split(' ').map(Number);

let lis = [array[0]];

const findClose = (start, end, num) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    const midValue = lis[mid];

    if (midValue >= num) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};

for (let i = 1; i < array.length; i++) {
  let num = array[i];
  let peek = lis[lis.length - 1];

  if (num > peek) {
    lis.push(num);
  } else {
    let closeIndex = findClose(0, lis.length - 1, num);

    lis[closeIndex] = num;
  }
}

console.log(lis.length);
