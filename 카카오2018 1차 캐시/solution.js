function solution(cacheSize, cities) {
    var answer = 0;
    let lruPointArray =[];
    let lruArray = [];

    for(let i=0; i<cacheSize;i++){ // lruArray 초기화
        lruPointArray[i] = 0;
        lruArray[i] = "";
    }

    function lruPointUp(index){
        for(let i=0; i<cacheSize;i++){
            if(i != index){
                lruPointArray[i] += 1;
            }
        }
    }

    for(let i=0; i<cities.length ;i++){
        let isInCache = false;

        for(let j=0; j<cacheSize ;j++){
            if(lruArray[j] == cities[i].toUpperCase()){   //cache에 존재
                lruPointUp(j);
                lruPointArray[j] = 0;
                isInCache = true;
                answer = answer + 1;
            }
        }

        if(isInCache == false){     //cache에 없음
            let maxIndexValue = 0;
            let maxIndex = 0;
            for(let j=0; j<cacheSize; j++) {
                if(lruPointArray[j] > maxIndexValue){
                    maxIndex = j;
                    maxIndexValue = lruPointArray[j];
                }
            }
            lruPointUp(maxIndex);
            lruPointArray[maxIndex] = 0;
            lruArray[maxIndex] = cities[i].toUpperCase();
            isInCache = true;
            answer = answer + 5;
        }
    }

    return answer;
}