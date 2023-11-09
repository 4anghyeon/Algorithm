function solution(n) {
  let answer = [];

  function hanoi(n, from, temp, to) {
    if (n === 0) return;

    // n-1번째를 옮기기 위해선 n번째의 from에서 temp로 옮겨야 한다.
    hanoi(n-1, from, to, temp);
    answer.push([from, to]); // 이동경로 추가
    // temp에서 다시 원래 목적지로 옮긴다.
    hanoi(n-1, temp, from, to);
  }

  // n개의 돌을 1번에서 3번으로 옮겨라. 처음 temp기둥은 2번
  hanoi(n, 1, 2, 3)
  return answer;
}