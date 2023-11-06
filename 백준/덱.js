const input = ("15\n" +
  "push_back 1\n" +
  "push_front 2\n" +
  "front\n" +
  "back\n" +
  "size\n" +
  "empty\n" +
  "pop_front\n" +
  "pop_back\n" +
  "pop_front\n" +
  "size\n" +
  "empty\n" +
  "pop_back\n" +
  "push_front 3\n" +
  "empty\n" +
  "front").split("\n");

input.shift();

const deque = {
  "queue": [],
  "push_front": function (num) {
    this.queue.unshift(num);
    return "";
  },
  "push_back": function (num) {
    this.queue.push(num);
    return "";
  },
  "pop_front": function () {
    return this.queue.shift() ?? -1;
  },
  "pop_back": function () {
    return this.queue.pop() ?? -1;
  },
  "size": function () {
    return this.queue.length;
  },
  "empty": function () {
    return +(this.queue.length === 0);
  },
  "front": function () {
    return this.queue[0] ?? -1;
  },
  "back": function () {
    return this.queue[this.queue.length - 1] ?? -1;
  }
}

let answer = "";
for (const element of input) {
  const [command, param] = element.split(" ");
  let print = deque[command](param);
  if (print.toString().length > 0) answer += print + "\n";
}

console.log(answer.trim())