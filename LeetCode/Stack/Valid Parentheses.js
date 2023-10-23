/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracketStack = [];
  const openBracketList = ['(', '{', '['];
  const closeBracketList = [')', '}', ']'];
  let answer = false;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // 여는 괄호면
    if (openBracketList.includes(c)) {
      bracketStack.push(c);

      // 괄호가 열리면 다시 닫혀야 하기 때문에 false
      answer = false;
    } else { // 닫는 괄호면

      // 괄호의 짝을 찾음
      const bracketIndex = closeBracketList.findIndex(b => b === c);
      const pair = openBracketList[bracketIndex];

      // 스택의 마지막 값 확인
      const last = bracketStack[bracketStack.length - 1];

      // last가 없음 -> stack의 length가 1임 (괄호 성립 안됨)
      // pair !== last -> 짝이 안맞음 바로 break;
      if (!last || pair !== last) {
        answer = false;
        break;
      } else {
        // 짝이 맞으면 스택에서 빼냄
        bracketStack.pop();
        answer = true;

        // 빼냈는데 stack에 아직 뭔가 남아 있으면 다시 돌아야 하므로 false
        if (bracketStack.length > 0) answer = false;
      }
    }
  }
  return answer;
};