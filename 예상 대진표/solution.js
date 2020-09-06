function solution(n,a,b)
{
    var answer = 0;

    for(let i = 0 ; i < n ; i++){
        a = Math.round(a/2)
        b = Math.round(b/2);
        answer++;
        
        if(a==b) break;
        
    }

    return answer;
}