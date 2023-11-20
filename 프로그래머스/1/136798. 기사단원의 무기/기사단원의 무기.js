function solution(number, limit, power) {
    var sum = 0;
    let test =[];

    for (let i = 1; i <= number; i++) {
        let item = calc(i);
        test.push(item)
        if (item > limit) sum += power;
        else sum += item;
    } 
    
    console.log(test)
    
    return sum;
}

function calc(number) {
    let count = 0;
    for (let i = 1 ; i * i <= number; i++) {
        if (i * i === number) count += 1;
        else if (number % i === 0) count += 2;
    }
    return count;
}