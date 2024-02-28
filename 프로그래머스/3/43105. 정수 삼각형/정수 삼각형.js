function solution(triangle) {
    const temp = [];
    triangle.forEach((r,i) => {
        temp[i] = new Array(r.length).fill(0);
    })
    
    temp[0][0] = triangle[0][0];
    
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const sum1 = (temp[i-1][j-1] ?? 0) + triangle[i][j];
            const sum2 = (temp[i-1][j] ?? 0) + triangle[i][j];
            temp[i][j] = Math.max(temp[i][j], sum1, sum2);
        }
    }
    
    
    return Math.max(...temp[triangle.length - 1]);
}