function solution(arr) {
    arr.sort();
    
    let num = arr[0];
    
    while (true) {
        let isCommonMultiple = true;
        
        for (let i = 0; i < arr.length; i++) {
            if (num % arr[i] !== 0) isCommonMultiple = false;
        }
        
        if (isCommonMultiple) break;
        num++;
    }
    
    
    return num;
}