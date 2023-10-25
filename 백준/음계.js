let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let origin = [...input];
let asc = [...input.sort()];
let desc = [...input.reverse()];

if (origin.toString() === asc.toString()) console.log("ascending");
else if (origin.toString() === desc.toString()) console.log("descending");
else console.log("mixed");