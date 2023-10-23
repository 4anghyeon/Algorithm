let fs = require('fs');
let input = "1 1 5 5".split(' ');

let [x, y, w, h] = input;

console.log(Math.min(Math.abs(x - w), +x, Math.abs(y - h), +y));