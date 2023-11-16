function solution(food) {
    var answer = '';
    let left = "";
    let right = "";
    
    food.shift();
    food.forEach((f, index) => {
        let avaliableFood = f - f % 2;
        left = left.concat(`${index + 1}`.repeat(avaliableFood / 2));
        right = `${index + 1}`.repeat(avaliableFood / 2).concat(right) ;
    })
    
    return [left, right].join(0);
}