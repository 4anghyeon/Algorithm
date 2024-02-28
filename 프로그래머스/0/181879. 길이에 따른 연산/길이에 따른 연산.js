function solution(num_list) {
    if (num_list.length > 10) return num_list.reduce((acc, cur) => acc + cur, 0);
    else return num_list.reduce((acc, cur) => acc * cur, 1);
}