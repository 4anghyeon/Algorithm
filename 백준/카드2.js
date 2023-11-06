let input = 6;

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // Queue의 뒤에 데이터 추기
  add(value) {
    this.size++;
    let node = new QueueNode(value);
    if (!this.front) {
      this.front = node;
    } else if (!this.back) {
      this.front.next = node;
      this.back = node;
    } else {
      let back = this.back;
      back.next = node;
      this.back = node;
    }
  }

  // 맨 앞 데이터 출력
  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      return null;
    }
  }

  // 맨 앞 데이터 출력 하고 삭제
  poll() {
    if (this.front) {
      this.size--;
      let front = this.front;
      this.front = front.next;
      return front.value;
    } else {
      return null;
    }
  }

  print() {
    let first = this.front;
    let next = first.next
    let arr = [];
    while (next) {
      arr.push(first.value)
      first = next;
      next = first.next
    }
    console.log(arr)
  }
}

const queue = new Queue();

for (let i = 1; i < input + 1; i++) {
  queue.add(i)
}

let index = 0;
while (queue.size !== 1) {
  if (index % 2 === 0) {
    queue.poll()
  } else {
    let temp = queue.poll();
    queue.add(temp);
  }
  index++;
}

console.log(queue.poll())