function solution(s, skip, index) {
    return [...s].reduce((acc, cur) => {
        return acc += changeAlphabet(cur, index, skip);
    }, '')
}

function changeAlphabet(c, index, skip) {
    let count = 0;
    let increment = 1;
    
    while (true) {
        const slied = slideAplphabet(c, increment);
        if (skip.indexOf(slied) === -1) count++;
        if (count === index) {
            return slied;
        }
        increment++;
    }
    

    return result;
}

function slideAplphabet(c, increment) {
    let charCode = c.charCodeAt();
    if (charCode + increment > 'z'.charCodeAt()) {
        charCode = 96 + (charCode + increment) % 122;
        if (charCode > 122) charCode = 96 + charCode % 122
    } else {
        charCode = charCode + increment;
    }
    return String.fromCharCode(charCode);
}