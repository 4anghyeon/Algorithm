function solution(s) {
    let array = [...s];
    let temp = [];
    let answer = [];
    array.forEach((c,i) => {
        if(!temp.includes(c)) {
            temp.push(c);
            answer.push(-1);
        } else {
            const lastIndex = array.slice(0, i).lastIndexOf(c);
            console.log(lastIndex, i)
            answer.push(i - lastIndex)
        }
    })

    return answer;
}