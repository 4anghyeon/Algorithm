function solution(genres, plays) {
    const map = {};
    var answer = [];
    
    genres.forEach((genre, index) => {
        if (map[genre]) {
            map[genre].played += plays[index];
            map[genre].ids.push(index);
        } else {
            map[genre] = {
                played: plays[index],
                ids: [index]
            }
        }
    });
    
    const entries = Object.entries(map);
    entries.sort((a, b) => b[1].played - a[1].played)
    
    for (const [k, v] of entries) {
        const ids = [...v.ids].sort((a, b) => {
            if (plays[a] !== plays[b]) {
                return plays[b] - plays[a];
            }
            return a - b;
        });
        answer.push(...ids.slice(0, 2))
    }
    
    return answer;
}