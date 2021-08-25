function solution(numbers, hand) {
    var answer = '';
    var left = "10";
    var right = "11";
    var keypad = ["3 1","0 0","0 1","0 2","1 0","1 1","1 2","2 0","2 1","2 2","3 0","3 2"];
    
    for(let i=0; i<numbers.length ; i++){
                
        if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7){
            answer = answer + "L";
            left = numbers[i];
        }
        else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9){
            answer = answer + "R";
            right = numbers[i];
        }
        else{
            var rightString = keypad[right] + "";
            var leftString = keypad[left] + "";
            

            var rightdis = Math.abs(parseInt((rightString.split(" "))[0]) - parseInt(((keypad[numbers[i]]+"").split(" "))[0]))
                        + Math.abs(parseInt((rightString.split(" "))[1]) - parseInt(((keypad[numbers[i]]+"").split(" "))[1]))
            var leftdis = Math.abs(parseInt((leftString.split(" "))[0]) - parseInt(((keypad[numbers[i]]+"").split(" "))[0]))
                        + Math.abs(parseInt((leftString.split(" "))[1]) - parseInt(((keypad[numbers[i]]+"").split(" "))[1]))

            
            if(rightdis > leftdis){
                 answer = answer + "L";
                 left = numbers[i];
            }
            else if(rightdis < leftdis){
                answer = answer + "R";
                right = numbers[i];                
            }
            else if(rightdis == leftdis){
                if(hand == "left"){
                     answer = answer + "L";
                     left = numbers[i];
                }
                else{
                    answer = answer + "R";
                    right = numbers[i];    
                }
            }
        }
    }
    return answer;
}