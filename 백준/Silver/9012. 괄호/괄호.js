let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

input.forEach(s => {

  const stack = [];

  for(const c of s) {
    if (c === "(") stack.push(c);
    else if (c === ")") {
      if (stack.length === 0) {
        stack.push(c)
        break;
      } else {
        const last = stack[stack.length - 1];
        if (last === "(") {
          stack.pop();
        }
      }
    }
  }
  if (stack.length === 0) console.log("YES")
  else console.log("NO")
})

