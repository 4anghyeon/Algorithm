function solution(numbers) {
    numbers.sort((a, b) => {
        return Number("" + b + a) - Number("" + a + b)
    });
    if (+numbers.join("") === 0) return "0";
    return numbers.join("");
}