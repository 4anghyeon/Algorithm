function solution(a, b, n) {
    let inventory = n;
    let newCoke = 0;
    
    while (inventory >= a) {
        inventory = inventory - a + b;
        newCoke += b;
    }
    
    return newCoke;
}