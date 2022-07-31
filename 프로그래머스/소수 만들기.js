function solution(nums) {
    var answer = 0;
    let indexSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                const index = [i, j, k];
                if (!indexSet.has(charCodeSum(i, j, k)) && isPrimary(sum)) {
                    answer++;
                }
            }
        }
    }
    return answer;
}

function isPrimary(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function charCodeSum(i, j, k) {
    return `${i}`.charCodeAt(0) + `${j}`.charCodeAt(0) + `${k}`.charCodeAt(0);
}
