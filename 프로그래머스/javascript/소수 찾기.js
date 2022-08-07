let numberSet = new Set();
let answer = 0;

function solution(numbers) {
    let numberArray = numbers.split("");

    for (let i = 0; i < numberArray.length; i++) {
        let fixed = `${numberArray[i]}`;
        let tempArray = numberArray.slice();
        tempArray.splice(i, 1);
        if (!numberSet.has(parseInt(fixed))) {
            numberSet.add(parseInt(fixed));
            if (isPrimaryNumber(parseInt(fixed))) answer++;
        }
        getNextList(fixed, tempArray);
    }
    return answer;
}

function getNextList(fixed, numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let temp = fixed + numbers[i];
        if (!numberSet.has(parseInt(temp))) {
            numberSet.add(parseInt(temp));
            if (isPrimaryNumber(parseInt(temp))) answer++;
        }
        let tempArray = numbers.slice();
        tempArray.splice(i, 1);

        // 기준점을 이용해서 다음 숫자를 찾는다.
        getNextList(temp, tempArray);
    }
}

// 소수 찾기
function isPrimaryNumber(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
