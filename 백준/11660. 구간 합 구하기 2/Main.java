import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] firstLine = br.readLine().split(" ");
        int n = Integer.parseInt(firstLine[0]);
        int queryLength = Integer.parseInt(firstLine[1]);

        int[][] numTable = new int[n+1][n+1];
        int[][] sumTable = new int[n+1][n+1];

        // 숫자 테이블 초기화
        for (int row = 1; row <= n; row++) {
            String[] line = br.readLine().split(" ");

            for (int column = 1; column <= n; column++) {
                numTable[row][column] = Integer.parseInt(line[column - 1]);
            }
        }

        // 구간합 테이블
        for (int row = 1; row <= n; row++) {
            for (int column = 1; column <= n; column++) {
                sumTable[row][column] = sumTable[row][column-1] + sumTable[row-1][column] - sumTable[row-1][column-1] + numTable[row][column];
            }
        }

        for (int i = 0; i < queryLength; i++) {
            String[] line = br.readLine().split(" ");
            int x1 = Integer.parseInt(line[0]);
            int y1 = Integer.parseInt(line[1]);
            int x2 = Integer.parseInt(line[2]);
            int y2 = Integer.parseInt(line[3]);

            System.out.println(sumTable[x2][y2] - sumTable[x1-1][y2] - sumTable[x2][y1 -1] + sumTable[x1-1][y1-1]);

        }
    }
}