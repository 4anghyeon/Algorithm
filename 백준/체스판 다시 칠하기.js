let input = ("8 8\n" +
  "WWBWBWBB\n" +
  "WBWBWBWB\n" +
  "BWBWBWBW\n" +
  "WBWBWBWB\n" +
  "BWBWBWBW\n" +
  "WBWBWBWB\n" +
  "BWBWBWBW\n" +
  "BBWBWBWW").toString().trim().split("\n");

const [width, height] = input.shift().split(" ").map(Number);
const colorList = ["W", "B"];

let countArray = [];
for (let start of colorList) {
  for (let h = 0; h <= height - 8; h++) {
    for (let w = 0; w <= width - 8; w++) {
      let count = 0;
      for (let i = 0; i < 8; i++) {
        count = paint(start, input[w + i].slice(h, h + 8), count, i)
      }
      countArray.push(count)
    }
  }
}

function paint(firstColor, row, count, rowIndex) {
  [...row].forEach((item, columnIndex) => {
    if (firstColor === "W") {
      if (rowIndex % 2 === 0) {
        if (columnIndex % 2 === 0 && item === "B") count++;
        if (columnIndex % 2 === 1 && item === "W") count++;
      } else {
        if (columnIndex % 2 === 0 && item === "W") count++;
        if (columnIndex % 2 === 1 && item === "B") count++;
      }
    } else if (firstColor === "B") {
      if (rowIndex % 2 === 0) {
        if (columnIndex % 2 === 0 && item === "W") count++;
        if (columnIndex % 2 === 1 && item === "B") count++;
      } else {
        if (columnIndex % 2 === 0 && item === "B") count++;
        if (columnIndex % 2 === 1 && item === "W") count++;
      }
    }
  })
  return count;
}

console.log(Math.min(...countArray))