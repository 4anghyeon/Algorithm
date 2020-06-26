import java.util.*;

public class Solution {
	public int[] solution(int []arr) {
        int[] answer = new int[arr.length];
        int tmp = arr[0];
        int i,j=0;
        answer[0] = tmp;
        
        for(i=1; i<arr.length;i++){
            if(tmp == arr[i]){
                
            }
            else if(tmp != arr[i]){
                j++;
                tmp = arr[i];
                answer[j] = tmp;
            }
        }
        int[] real = new int[j+1];
            
        for(i=0;i<=j;i++){
            real[i] = answer[i];
        }

        return real;
	}
}