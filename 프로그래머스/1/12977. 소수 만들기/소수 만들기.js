function solution(nums) {
    var answer = 0;
    
    nums.forEach((first, i) => {
        
        for (let j = i + 1; j < nums.length; j++) {
            let second = nums[j];
            for (let k = j + 1 ; k < nums.length; k++) {
                let third = nums[k];
                if (isPrimary(first + second + third)) answer++;
            }
        }
        
    })
    return answer;
}

function isPrimary(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
