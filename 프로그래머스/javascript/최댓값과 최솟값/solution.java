import java.util.ArrayList;
import java.util.Collections;

class Solution {
  public String solution(String s) {
      String answer = "";
      ArrayList<Integer> temp = new ArrayList<>();
	  String temp2 = "";
		
		for(int i =0;i<s.length();i++) {
			if(s.charAt(i)=='-') {
				temp2 = temp2 + "-";
			}
			else if((int)s.charAt(i)>47&&(int)s.charAt(i)<58&&i!=s.length()-1) {
				temp2 = temp2 + ((int)s.charAt(i)-48)+"";
			}
            else if(i==s.length()-1) {
				temp2 = temp2 + ((int)s.charAt(i)-48)+"";
                temp.add(Integer.parseInt(temp2));
			}
			else if(s.charAt(i)==' '){
				temp.add(Integer.parseInt(temp2));
				temp2 = "";
			}
			
		}
		Collections.sort(temp);
      
        answer = temp.get(0) +" "+temp.get(temp.size()-1);
      return answer;
  }
}