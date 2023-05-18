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

        int[][] sumTable = new int[n][n];

        for (int row = 0; row < n; row++) {
            String[] line = br.readLine().split(" ");

            for (int column = 0; column < n; column++) {
                if (row == 0 && column == 0) sumTable[row][column] = Integer.parseInt(line[column]);
                else if (column == 0) sumTable[row][column] = sumTable[row-1][n-1] + Integer.parseInt(line[column]);
                else sumTable[row][column] = sumTable[row][column-1] + Integer.parseInt(line[column]);
            }
        }

        for (int i = 0; i < queryLength; i++) {
            String[] line = br.readLine().split(" ");
            int x1 = Integer.parseInt(line[0]);
            int y1 = Integer.parseInt(line[1]);
            int x2 = Integer.parseInt(line[2]);
            int y2 = Integer.parseInt(line[3]);

            if (y1 == 1) System.out.println(sumTable[x2 - 1][y2 - 1]);
            else System.out.println(sumTable[x2 - 1][y2 - 1] - sumTable[x1 - 1][y1 - 2 + (x2 - x1)]);

        }
    }
}