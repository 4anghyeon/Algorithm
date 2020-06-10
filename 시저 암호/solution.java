class Solution {
  public String solution(String s, int n) {
      String answer = "";
      String[] temp = new String[s.length()];
      
      
      for(int i=0;i<s.length();i++){
          if((int)s.charAt(i)<91&&(int)s.charAt(i)>64){
              temp[i] = Character.toString((char)((int)s.charAt(i)+n));
              if((int)s.charAt(i)+n>90){
                  temp[i] = Character.toString((char)((int)s.charAt(i)+n-26));
              }
          }
          else if((int)s.charAt(i)>96){
              temp[i] = Character.toString((char)((int)s.charAt(i)+n));
              if((int)s.charAt(i)+n>122){
                  temp[i] = Character.toString((char)((int)s.charAt(i)+n-26));
              }
          }
          else if((int)s.charAt(i)==32){
             temp[i] = " ";
          }
          answer = answer + temp[i];
      }
      
      return answer;
  }
}