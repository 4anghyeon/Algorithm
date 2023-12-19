function solution(n, left, right) {   
    // 1
    // [ 1 ]
    // 2
    // [ 1, 2, 2, 2 ]
    // 3
    // 	[1, 2, 3, 2, 2, 3, 3, 3, 3]
    // 4
    // 	[ [ 1, 2, 3, 4 , 2, 2, 3, 4 , 3, 3, 3, 4 , 4, 4, 4, 4 ] ]
    // 5
    // [ 1, 2, 3, 4, 5, 2, 2, 3, 4, 5, 3, 3, 3, 4, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5]
    
    let arr = [];
    
    for (let i = left + 1; i <= right + 1; i++) {
        if (i % n === 0) arr.push(n);
        else {
            let a = Math.ceil(i / n);
            if (i % n > a) arr.push(i % n);
            else arr.push(a)
        }
    }
    
    return arr;
}