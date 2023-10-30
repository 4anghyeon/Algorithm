const input = ("13\n" +
  "but\n" +
  "i\n" +
  "wont\n" +
  "hesitate\n" +
  "no\n" +
  "more\n" +
  "no\n" +
  "more\n" +
  "it\n" +
  "cannot\n" +
  "wait\n" +
  "im\n" +
  "yours").split("\n");

const testCaseSize = +input.shift();

const sortSameAlphabet = (strA, strB, index) => {
  const temp = strA.charCodeAt(index) - strB.charCodeAt(index);
  return temp === 0 ? sortSameAlphabet(strA, strB, index + 1) : temp;
}



const res = [...new Set(input).values()].sort((a, b) => {
  const temp = a.length - b.length;
  return temp === 0 ? sortSameAlphabet(a, b, 0) : temp
});

res.forEach(r => {
  console.log(r)
})