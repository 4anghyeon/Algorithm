const input = ("2 2 0\n" +
  "256 256\n" +
  "0 0").split("\n");

const [N, M, B] = input.shift().split(" ").map(Number);

let flatArr = [];
for (const element of input) {
  element.split(" ").forEach(item => {
    flatArr.push(Number(item));
  })
}

flatArr.sort((a, b) => b - a);

let answerArray = [];
for (let height = 0; height <= 256; height++) {
  let time = 0;
  let inventory = B;

  // ~ 으로 채운다.

  for (let j = 0; j < flatArr.length; j++) {
    const item= flatArr[j];

    if (item > height) {
      time += (2 * (item - height));
      inventory += (item - height);
    } else if (item < height) {
      time += height - item;
      inventory -= height - item;
      if (inventory < 0) break;
    }

    if (j === flatArr.length - 1) {
      answerArray.push([time, height])
    }
  }
}

const answer = answerArray.reduce((acc, cur) => {
  if (cur[0] < acc[0]) {
    return cur;
  } else if (cur[0] === acc[0]) {
    if (cur[1] > acc[1]) return cur;
    return acc;
  }
  return acc;
}, [Number.MAX_VALUE, 0])

console.log(answer.join(" "))
