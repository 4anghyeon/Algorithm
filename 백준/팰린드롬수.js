const input = ("121\n" +
  "1231\n" +
  "12421\n" +
  "123\n" +
  "11211\n" +
  "121121\n" +
  "0").split("\n");

let answer = "";
for (let i = 0; i < input.length - 1; i++) {
  if (input[i] === [...input[i]].reverse().join("")) answer += "yes\n";
  else {
    answer += "no\n";
  }
}


console.log(answer)