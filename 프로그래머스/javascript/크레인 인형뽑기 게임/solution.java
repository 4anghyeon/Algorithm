import java.util.*;
class Solution {
    ArrayList<Integer> gets = new ArrayList<>();
            int answer = 0;
    public int solution(int[][] board, int[] moves) {
        gets.add(0);
        for(int i =0;i<moves.length;i++){
            for(int j=0;j<board.length;j++){
                if(board[j][moves[i]-1]!=0){
                    gets.add(board[j][moves[i]-1]);
                    board[j][moves[i]-1] = 0;
                    break;
                }
            }
        }
    for(int i =1;i<gets.size();i++){
        if(gets.get(i)==gets.get(i-1)){
            gets.remove(i);
            gets.remove(i-1);
            answer = answer+2;
            i=0;
        }
    }
        
        

        return answer;
    }
}