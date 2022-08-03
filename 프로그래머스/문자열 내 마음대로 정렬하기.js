function solution(strings, n) {
    var answer = [];
    var arr = [];
    strings.forEach((string) => {
        arr.push([string, string[n].charCodeAt()]);
    });
    arr.sort((a, b) => {
        if (a[1] === b[1]) return a > b ? 1 : -1;
        return a[1] - b[1];
    });

    return arr.map((a) => a[0]);
}
