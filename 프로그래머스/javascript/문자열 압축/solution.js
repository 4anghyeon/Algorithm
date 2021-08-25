function solution(s) {
    var answer = 999999;
    var count  = 1;
    var temp = "";
    var string = [];
    
    for(let i = 0 ; i<s.length; i++){
        
        for(let k = 0 ; k<s.length/(i+1) ; k++){
            string[k] = s.substr((i+1)*k,i+1)
        }
        
        for(let j = 0 ; j<s.length ; j++){
            if(string[j] == string[j+1]){
                count++;
            }
            else{
                if(count != 1){
                    temp = temp + count + string[j];
                }
                else if(count == 1){
                    temp = temp + string[j];
                }

                count = 1;
            }
        }
        if(answer > temp.length){
            answer = temp.length;
        }
        
        string = [];
        temp = "";
        count = 1;
    }
    
    return answer;
}