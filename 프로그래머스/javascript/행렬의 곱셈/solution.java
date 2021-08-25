class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
		int tmp=0;
		int[][] answer = new int[arr1.length][arr2[0].length];
		int i,j,k;
		
		for(k=0;k<arr1.length;k++) {
			for(j=0;j<arr2[0].length;j++) {
				for( i =0; i<arr1[0].length;i++) {
					tmp = tmp+ arr1[k][i]*arr2[i][j];
				}
				answer[k][j] = tmp;
                tmp = 0;
			}
		}
		
        return answer;
    }
}