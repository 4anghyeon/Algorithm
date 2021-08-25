class Solution {
    public int[] solution(int[] answers) {

        
        int[] giveup1 = {1,2,3,4,5};
        int[] giveup2 = {2,1,2,3,2,4,2,5};
        int[] giveup3 = {3,3,1,1,2,2,4,4,5,5};
        
        int[] point = new int[3];
        int[][] rank = new int[3][2];
        
        int p=0;
        int tmp=0;
        int cnt=1;
        
        for(int i = 0; i<answers.length;i++){
            if(p==5) p =0;
            if(giveup1[p]==answers[i]){
                point[0] = point[0] + 1;
                }
            p++;
        }
        p=0;
        
        for(int i = 0; i<answers.length;i++){
            if(p==8) p =0;
            if(giveup2[p]==answers[i]){
                point[1] = point[1] + 1;
                }
            p++;
        }
        p=0;
        
        for(int i = 0; i<answers.length;i++){
            if(p==10) p =0;
            if(giveup3[p]==answers[i]){
                point[2] = point[2] + 1;
                }
            p++;
        }

        for(int i =0; i<3;i++){
            rank[i][0] = i+1;
            rank[i][1] = point[i];
        }
        for(int i =0; i<3;i++){
            for(int j=0;j<3;j++){
                if(rank[i][1]>rank[j][1]){
                    tmp = rank[i][1];
                    rank[i][1] = rank[j][1];
                    rank[j][1] = tmp;
                    tmp = rank[i][0];
                    rank[i][0] = rank[j][0];
                    rank[j][0] = tmp;
                }
                else if(rank[i][1]==rank[j][1]){
                    if(rank[i][0]<rank[j][0]){
                        tmp = rank[i][0];
                        rank[i][0] = rank[j][0];
                        rank[j][0] = tmp;
                    }
                    
                }
            }
        }
        for(int i=1;i<3;i++){
                if(rank[0][1]==rank[i][1]){
                    cnt++;
                }
                
        }
        int[] answer = new int[cnt];
        
        for(int i =0;i<cnt;i++){
            answer[i] = rank[i][0];
        }
        
        return answer;
    }
}