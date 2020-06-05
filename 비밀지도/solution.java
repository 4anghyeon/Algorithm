class Solution {
  public String[] solution(int n, int[] arr1, int[] arr2) {
      String[] answer = new String[arr1.length];
      int[][] temp = new int[arr1.length][arr1.length];
      int[][] temp2 = new int[arr1.length][arr1.length];
      int[][] res = new int[arr1.length][arr1.length];
      String s = "";
      
      for(int i =0;i<arr1.length;i++){
          for(int j =0;j<arr1.length;j++){
            temp[i][arr1.length-1-j] = arr1[i]%2;
            arr1[i] = arr1[i]/2;
          }
      }
      
      for(int i =0;i<arr1.length;i++){
          for(int j =0;j<arr1.length;j++){
            temp2[i][arr1.length-1-j] = arr2[i]%2;
            arr2[i] = arr2[i]/2;
          }
      }
      
        for(int i =0;i<arr1.length;i++){
          for(int j =0;j<arr1.length;j++){
            res[i][j] = temp[i][j]|temp2[i][j];
          }
      }
      for(int i =0;i<arr1.length;i++){
          for(int j=0;j<arr1.length;j++){
              if(res[i][j] == 1){
                  s = s + "#";
              }
              else if(res[i][j] == 0){
                  s = s + " ";
              }
          }
          answer[i] = s;
          s="";
      }
      return answer;
  }
}