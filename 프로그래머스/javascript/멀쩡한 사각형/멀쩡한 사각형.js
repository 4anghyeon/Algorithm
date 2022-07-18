
function solution(w, h) {
    var answer = 0;

    for (let i = 1; i < w ; i++) {
        answer += Math.floor(y(w, h, i) + Number.EPSILON)
    }
    console.log(answer);
    return answer * 2;
}

function y (w, h, x) {
    return -(h / w)*(x - w);
}


if (solution(8, 12) === 80) {
    console.log("correct");
} else {
    console.log("fail");
}