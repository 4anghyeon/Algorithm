import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        int i;
        int num;
        ArrayList<String> list = new ArrayList<>();
        
        list.add(words[0]);
        
        
        for(i=1;i<words.length;i++){
            String temp = words[i];
            String last = list.get(list.size() - 1);

            if(list.indexOf(temp) == -1&& temp.substring(0,1).equals(last.substring(last.length()-1))){
                list.add(words[i]);
            }
            else{
                num = (i%n)+1;
                int x = (i+1-num)/n+1;
                answer[0] = num;
                answer[1] = x;
                return answer;
            }
        }
        return answer;
    }
}