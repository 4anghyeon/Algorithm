let input = "11 11".toString().trim().split(" ").map(Number);

const [a, b] = input;

const isFrime = num => {
  if (num % 2 === 0) {
    if (num === 2) return true;
    return false;
  }
  if (num === 1) return false;
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let answer = "";
for (let i = a; i <= b; i++) {
  if (isFrime(i)) {
    answer += `${i}\n`
  }
}

console.log(answer)


