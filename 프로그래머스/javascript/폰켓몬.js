function solution(nums) {
    var answer = 0;
    let set = new Set(nums);
    return Math.min(set.size, nums.length / 2);
}
