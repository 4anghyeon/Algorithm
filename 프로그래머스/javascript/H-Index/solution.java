import java.util.Arrays;

class Solution {
    public int solution(int[] citations) {
		Arrays.sort(citations);
		int max = citations[citations.length-1];
        int answer = 0;
        int chk =0;
        
        for (int i =0;i<max;){
            for(int j =0;j<citations.length;j++){
                if(citations[j]>=i) {
                	chk++;
                }
            }
            if(chk>=i) {
            	i++; chk = 0;
            }
            else{
            	answer = i-1;
            	break;
            }
        }
	
        return answer;
    }
}