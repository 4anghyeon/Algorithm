const input = "7 3".split(" ").map(Number);

const [N, K] = input;

let circle = [];
let out = [];

for (let i = 0; i < N; i++) {
  circle.push(i+1)
}


let index = 0;
while (circle.length > 1) {
  index = (index + K - 1) % circle.length
  out.push(circle.splice(index, 1));
}
out.push(circle[0])
console.log(`<${out.flat().join(", ")}>`)