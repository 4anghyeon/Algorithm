## 테스트 케이스 6번에서 에러가 남

### 기존 코드

```js
function solution(w, h) {
    var answer = 0;

    for (let i = 1; i < w; i++) {
        answer += Math.floor(y(w, h, i));
    }
    return answer * 2;
}

function y(w, h, x) {
    return -(h / w) * (x - w);
}
```

### 수정 코드

```js
function solution(w, h) {
    var answer = 0;

    for (let i = 1; i < w; i++) {
        answer += Math.floor(y(w, h, i));
    }
    return answer * 2;
}

function y(w, h, x) {
    return (-h * (x - w)) / w;
}
```

단순히 y 메서드에서 `(h/w)` 부분을 나누어서 `w` 로 나누는 것을 마지막으로 옮겼더니 해결되었다.
