function solution(s) {
    
    let deleteCount = 0;
    let count = 0;
    while (s !== "1") {
        let beforeLength = s.length;
        s = s.replace(/0/g, '');
        let afterLength = s.length;
        deleteCount += beforeLength - afterLength;
        s = (s.length).toString(2);
        count++;
    }

    return [count, deleteCount];
}