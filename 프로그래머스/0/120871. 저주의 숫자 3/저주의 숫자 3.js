function solution(n) {
    let number = 0;
    
    let count = 0;
    while (count < n) {
        number++;
        number = check(number);
        count++;
    }
    return number;
}
    
function check(number) {
    if (number % 3 === 0 || number.toString().includes('3')) {
        return check(number + 1);
    }
    return number;
}