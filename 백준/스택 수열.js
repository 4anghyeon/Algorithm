const input = ("8\n" +
  "4\n" +
  "3\n" +
  "6\n" +
  "8\n" +
  "7\n" +
  "5\n" +
  "2\n" +
  "1").split("\n");

input.shift();

let stack = [];

// 만들어야 하는 수열 목록
let shouldSequence = input.map(Number);

// 스택에서 만들어내야 하는 숫자
let shouldBeNumber = shouldSequence.shift();

// 스택에 쌓이고 있는 마지막 값 (기본값 0으로 초기화)
let lastStackNumber = 0;

// "+" "-"를 담을 문자열
let answer = "";

do {

  // stack의 마지막 값(peek)이 원하는 값이 될 때까지 무한 반복
  while (true) {
    const peek = stack[stack.length -1] ?? -1;

    if (peek === shouldBeNumber) {
      // stack의 마지막 값이 만들어내야 할 값과 같아지면 pop후 while 종료
      stack.pop();
      answer += "-\n";
      break;
    }
    else if (peek < shouldBeNumber) {
      // 만들어내야 할 숫자가 스택의 마지막 값보다 작으면 값을 계속 증가하면서 push
      stack.push(++lastStackNumber);
      answer += "+\n";
    } else {
      // 만들어내야 할 숫자가 스택의 마지막 값보다 크면 pop
      let pop = stack.pop();

      // pop하면 바로 수열에 추가되야한다. 근데 그게 원하는 값이 아닐 경우 바로 실패!
      if (pop !== shouldBeNumber) {
        answer = "NO"

        // 모든 배열을 강제로 비워줘서 while을 종료 시키자
        shouldSequence = [];
        stack = [];
        break;
      }
      answer += "-\n";
    }
  }
  shouldBeNumber = shouldSequence.shift();
} while (shouldSequence.length !== 0 || stack.length !== 0)

console.log(answer)