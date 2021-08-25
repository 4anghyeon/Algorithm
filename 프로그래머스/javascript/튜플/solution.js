function solution(s) {
    var answer = [];

    let temp_s = [];
    let tempIndex = 0;
    let start = false;

    let sample = [];
    let resultSample = [];
    let resultCount = [];
    let sampleIndex = 0;
    let isInSample = false;

    for(let i=0; i<s.length;i++){
        if(start == true){
            if(temp_s[tempIndex] != null){
                temp_s[tempIndex] = temp_s[tempIndex] + s.charAt(i); 
            }else{
                temp_s[tempIndex] = s.charAt(i);  
            }
        }
        if(s.charAt(i) == "{" && s.charAt(i+1)!="{"){
            start = true;
        }
        if(s.charAt(i+1) == "}" || s.charAt(i+1) == null){
            tempIndex++;
            start = false;
        }
    }
    for(let i=0; i<temp_s.length;i++){
        sample[i] = temp_s[i].split(',');
    }


    for(let i=0; i<sample.length;i++){
        for(let j=0; j<sample[i].length;j++){
            let index = resultSample.indexOf(sample[i][j]);

            if(index == -1){
                resultSample[sampleIndex] = sample[i][j];
                resultCount[sampleIndex] = 0;
                sampleIndex++;
            }else{
                resultCount[index] = resultCount[index] + 1;
            }
        }
    }

    for(let i=0; i<resultCount.length;i++) {
        answer[resultCount.length -1 -resultCount[i]] = resultSample[i]*1;
    }


    return answer;
}