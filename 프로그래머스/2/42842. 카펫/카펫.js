function solution(brown, yellow) {
    const x = ((4 + brown) + Math.sqrt((brown+4)**2 - 16*(brown+yellow))) / 4;
    const y = ( brown + yellow ) / x;
    
    return [x, y];
}