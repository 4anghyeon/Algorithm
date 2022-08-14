function solution(p) {
    if (p === "") return "";
    p = reorder(p);
    return p;
}

function reorder(str) {
    let test = 0;
    while (!isPerfectString(str)) {
        let [u, v] = getBalacnedString(str);
        if (isPerfectString(u)) str = u + reorder(v);
        else {
            let temp = "(" + reorder(v) + ")";
            u = u.slice(1).slice(0, -1);
            u = u.replace(/\(/gi, "*");
            u = u.replace(/\)/gi, "(").replace(/\*/gi, ")");
            str = `${temp}${u}`;
        }
    }
    return str;
}

function isPerfectString(str) {
    let leftParentheses = [];
    let rightParentheses = [];

    str.split("").forEach((s) => {
        if (s === "(") leftParentheses.push(1);
        else {
            leftParentheses.pop();
            rightParentheses.push(0);
        }
    });

    if (leftParentheses.length === 0) return true;
    return false;
}

function getBalacnedString(str) {
    let leftCount = 0;
    let rightCount = 0;
    let index = 0;
    for (let i in str.split("")) {
        if (str[i] === "(") leftCount++;
        else rightCount++;
        index++;
        if (leftCount === rightCount) break;
    }
    return [str.substr(0, index), str.substr(index)];
}
