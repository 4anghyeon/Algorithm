function solution(today, terms, privacies) {
    var answer = [];
    const todayNum = dateToNum(today);
    
    privacies.forEach((p,i) => {
        const [date, term] = p.split(" ");
        const t = terms.find(t => t.includes(term)).split(" ");

        if (todayNum - dateToNum(date) >= +t[1] * 28) {
            answer.push(i + 1)
        }
    })
    
    return answer;
}

const dateToNum = date => {
    const dateArr = date.split(".");
    return +dateArr[0] * 336 + (+dateArr[1] - 1) * 28 + (+dateArr[2] - 1);
}