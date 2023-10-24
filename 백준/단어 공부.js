let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

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