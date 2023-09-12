// 코딩테스트 연습 > 완전탐색
// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  let bigLengthArr = [];
  let smallLengthArr = [];

  for (let size of sizes) {
    bigLengthArr.push(Math.max(...size));
    smallLengthArr.push(Math.min(...size));
  }

  return Math.max(...bigLengthArr) * Math.max(...smallLengthArr);
}
