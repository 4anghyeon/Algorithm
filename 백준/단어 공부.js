let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1번째 풀이
let map = {};

[...input].forEach(item => {
  const char = item.toUpperCase();
  if (!map[char]) {
    map[char] = 1;
  } else {
    map[char] += 1;
  }
});

const values = Object.values(map);
const maxValue = Math.max(...values);

if (values.filter(v => v === maxValue).length > 1) console.log("?")
else console.log(Object.keys(map)[values.findIndex(v => v === maxValue)]);


// 2번째 풀이
let arr = [];

[...input].forEach(item => {
  const char = item.toUpperCase().charCodeAt();
  if (!arr[char]) {
    arr[char] = 1;
  } else {
    arr[char] += 1;
  }
});

const filtered = arr.filter(i => i);
const maxValue = Math.max(...filtered);

if (arr.filter(v => v === maxValue).length > 1) console.log("?")
else console.log(String.fromCharCode(arr.findIndex(v => v === maxValue)))