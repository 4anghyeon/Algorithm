class Solution {
  public int solution(int[] d, int budget) {
      int answer = 0;
      int res=0;
      int tmp,i;
      
      for(i =0;i<d.length;i++){
          for(int j=0;j<d.length;j++){
              if(d[i]<d[j]){
                  tmp = d[i];
                  d[i] = d[j];
                  d[j] = tmp;
              }
          }
      }
     if(d[0]>budget) return 0;
      
      
      for(i =0;i<d.length;i++){
          
          if(res <= budget){
              res =res +d[i];
              answer++;
              if(res>budget) {
                  answer--;
                  break;
              }
          }
          else if(res>budget){
              res = res-d[i-1];
              answer--;
              break;
          }
      }
      
      return answer;
  }
}