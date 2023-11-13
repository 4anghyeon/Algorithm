function solution(array) {
    let map = {};
    
    // 배열을 돌면서 해당 요소가 몇 번 나오는지 객체 담는다.
    array.forEach(elem => {
        if (map[elem]) {
            map[elem] = map[elem] + 1;
        } else {
            map[elem] = 1;
        }
    })
    
    // 가장 많이 나온 갯수를 구함
    let values = Object.values(map);
    let max = Math.max(...values);
    
    // 가장 많이 나온 숫자의 index를 구함
    let index = values.indexOf(max)
    
    // 가장 많이 나온 숫자의 index가 1개 이상이면 -1 리턴
    if (index !== values.lastIndexOf(max)) return -1;
    
    // 아니면 index의 key값 리턴
    return +Object.keys(map)[index];
}