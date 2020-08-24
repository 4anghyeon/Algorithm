function solution(progresses, speeds) {
    var answer = [];
    var distribute = false;
    var distributeCnt = 0;
    
    while(progresses[0]){
        
        for(let j=0; j<progresses.length; j++){
            progresses[j] = progresses[j] + speeds[j]
            
            if(progresses[j] >= 100){ // 진행률이 100% 이상이면
                speeds[j] = 0; //그 기능의 개발속도 0%
            }
            
            if(progresses[0] >= 100){ // 제일 앞 기능이 100% 이상이면 배포한다.
                for(let k = 0 ; k < progresses.length ; k++){ //제일 앞에 기능 부터 100%를 달성한 기능의 개수를 센다.
                    if(progresses[k]>=100){
                        progresses.splice(k,1);
                        speeds.splice(k,1)
                        k--;
                        j--;
                        distributeCnt += 1;
                    }
                    else{ //중간에 100%가 아닌게 끼어있으면 count 중지
                        break;
                    }
                }
                distribute = true;
            }
        }

        if(distribute == true){ // 배포
            answer.push(distributeCnt)
            distributeCnt = 0;
            distribute = false;
        }

    }
    
    return answer;
}