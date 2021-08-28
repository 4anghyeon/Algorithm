function solution(priorities, location) {
    var answer = 0;
    let newPriorities = [];
    priorities.forEach(function(prioritie, index) {
        newPriorities.push(index+"_"+prioritie);
    });

    while (newPriorities.length !== 0) {
        let isLargerThanFirst = false;
        for (let i = 0 ; i < newPriorities.length; i++) {
            if (newPriorities[0].split("_")[1] < newPriorities[i].split("_")[1]) {
                newPriorities.push(newPriorities[0]);
                newPriorities.splice(0,1);
                isLargerThanFirst = true;
                break;
            }
        }
        if (!isLargerThanFirst) {
            answer++;
            if (parseInt(newPriorities[0].split("_")[0]) === location) return answer;
            newPriorities.splice(0,1);
        }
    }
    return answer;
}