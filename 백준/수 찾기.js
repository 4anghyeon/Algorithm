const input = ("5\n" +
  "-2 -3 -4\n" +
  "5\n" +
  "-2 1 3 7 -3 9 5 -1").split("\n");

let nArray = input[1].split(" ").map(Number);
let mArray = input[3].split(" ").map(Number);
nArray.sort((a, b) => (a - b));
let answerArray = [];

mArray.forEach((m, idx) => {
  let find = false;
  let start = 0;
  let end = nArray.length - 1;
  while (start <= end) {
    let middleIndex = Math.round((start + end) / 2);
    let middleValue = nArray[middleIndex];

    if (middleValue > m) {
      end = middleIndex - 1;
    } else if (middleValue < m) {
      start = middleIndex + 1;
    } else {
      find = true;
      break;
    }
  }
  if (!find) answerArray.push(0)
  else answerArray.push(1);
})

console.log(answerArray.join("\n"))