function solution(k, dungeons) {
    var answer = 0;
    
    // 방문한 던전을 나타낸다.
    const visited = new Array(dungeons.length).fill(false);
    
    // dfs를 통한 완전 탐색
    const dfs = (remain, level) => {
        answer = Math.max(answer, level)
        
        for (let i = 0; i < dungeons.length; i++) {
            if (visited[i]) continue;
            if (remain < dungeons[i][0]) continue;
            
            // i번째 던전 방문 시작            
            visited[i] = true;

            dfs(remain - dungeons[i][1], level + 1);
            
            // i번째 던전 방문 종료
            visited[i] = false;
        }
    }
    
    dfs(k, 0)
    
    return answer;
}