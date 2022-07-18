const numbersArray = [[6, 10, 2], [3, 30, 34, 5, 9]];
const answerArray = ["6210", "9534330"];

function solution(numbers) {
    numbers.sort((a, b) => {
        return Number("" + b + a) - Number("" + a + b)
    });
    if (Number(numbers.join("")) === 0) return "0";
    return numbers.join("");
}

for (let index = 0; index < numbersArray.length; index++) {
    const element = numbersArray[index];
    if (solution(element) === answerArray[index]) console.log(`${index}: correct`)
    else console.log(`${index}: fail`)
    console.log("=======");
}