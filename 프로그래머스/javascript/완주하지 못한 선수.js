let examples = [
    {
        participant: ["leo", "kiki", "eden"],
        completion: ["eden", "kiki"],
        answer: "leo",
    },
];

for (let i = 0; i < examples.length; i++) {
    if (
        examples[i].answer ===
        solution(examples[i].participant, examples[i].completion)
    ) {
        console.log("정답");
    } else {
        console.log("실패");
    }
}

function solution(participant, completion) {
    var answer = "";
    let completionMap = {};
    completion.forEach(function (data, index) {
        completionMap[data] =
            typeof completionMap[data] === "undefined"
                ? 1
                : completionMap[data] + 1;
    });
    participant.forEach(function (data) {
        if (
            typeof completionMap[data] === "undefined" ||
            completionMap[data] === 0
        ) {
            answer = data;
            return false;
        } else {
            completionMap[data] -= 1;
        }
    });
    console.log(answer);
    return answer;
}
