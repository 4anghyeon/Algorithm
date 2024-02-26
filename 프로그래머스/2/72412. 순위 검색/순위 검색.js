function solution(info, query) {
    var answer = [];
    
    const arr = [];
    const map = {};
    
    info.forEach(data => {
        const [_l, _p, _c, _f, score] = data.split(" ");
        const key = [_l,_p,_c,_f].join("");
        if (map[key]) {
            map[key].push(+score)
        } else {
            map[key] = [+score]
        }
    });
    
    Object.values(map).forEach(v => v.sort((a,b) => a - b))
    
    
    query.forEach(q => {
        const [lang, position, career, _] = q.split(" and ");
        const [food, score] = _.split(" ");
        
        let possibleLang = [lang];
        if (lang === "-") possibleLang = ['java', 'python', 'cpp'];
        
        let possiblePosition = [position];
        if (position === "-") possiblePosition = ['backend', 'frontend'];
        
        let possbileCareer = [career];
        if (career === "-") possbileCareer = ['junior', 'senior'];
        
        let possbileFood = [food];
        if (food === "-") possbileFood = ['pizza', 'chicken'];
        
        const possbileKeys = [];
        possibleLang.forEach(l => {
            possiblePosition.forEach(p => {
                possbileCareer.forEach(c => {
                    possbileFood.forEach(f => {
                        possbileKeys.push(l + p + c + f);
                    })
                })
            })
        })
        
        let count = 0;
        possbileKeys.forEach(key => {
            const values = map[key];
            if (values) {
                // count += values.filter(v => v >= score).length;
                count += find(values, score)
            }
        })
        
        answer.push(count)
    });
    
    return answer;
}

const find = (arr, target) => {
    let left = 0;
    let right = arr.length;
    let count = 0;
    
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            right = mid;
            count++;
        } else {
            left = mid + 1;
        }
    }
    
    return arr.length - left;
}