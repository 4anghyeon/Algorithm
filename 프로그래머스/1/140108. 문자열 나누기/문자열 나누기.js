function solution(s) {
    let splited = [];
    let temp = "";
    let countArray = [0, 0];
    let first = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (countArray.every(c => c !== 0)) {
            if (countArray[0] === countArray[1]) {
                splited.push(temp);
                temp = "";
                first = "";
                countArray.fill(0)
            }
        }
        
        if (first === "") {
            first = char;
            countArray[0] = 1;
        } else if (char === first) {
            countArray[0]++;
        } else {
            countArray[1]++;
        }
        temp += char;
        
        if (i === s.length - 1) {
            splited.push(temp);
        }
    }
    
    return splited.length;
}