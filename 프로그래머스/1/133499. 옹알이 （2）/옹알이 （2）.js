const twoWord = ["ye","ma"];
const threeWord = ["aya", "woo"];

function solution(babbling) {
    let answer = 0;
    babbling.forEach(word => {
        let count = searchWord(word, 0);
        if (count > 0) answer++;
    });
    
    return answer;
}

const searchWord = (word, count) => {
    if (word === "") return count;
    let substringTwo = word.substring(0, 2);
    let substringThree = word.substring(0, 3);
    
    if (threeWord.includes(substringThree)) {
        word = word.substring(3);
        if (word.indexOf(substringThree) === 0) return 0;
        return searchWord(word, ++count)
    }
    
    if (twoWord.includes(substringTwo)) {
        word = word.substring(2);
        if (word.indexOf(substringTwo) === 0) return 0;
        return searchWord(word, ++count)
    }

    return 0;
}