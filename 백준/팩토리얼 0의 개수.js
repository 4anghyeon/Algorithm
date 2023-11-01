let input = 34;

if (input === 0) {
  console.log(0);
} else if (input === 1) {
  console.log(1)
} else {
  let factorial = BigInt(1);
  for (let i = 1; i <= input; i++) {
    factorial = BigInt(i) * factorial
  }
  let answer = 0;
  let reverse = [...factorial.toString().replace("n", "")].reverse();

  for (let i = 0; i < reverse.length; i++) {
    if (+reverse[i] === 0) answer++;
    else break;
  }
  console.log(answer)
}