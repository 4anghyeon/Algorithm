import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine()); // 재료 개수
        int m = Integer.parseInt(br.readLine()); // 갑옷 완성에 필요한 합의 수
        String[] line = br.readLine().split(" ");
        int[] ingredients = new int[line.length]; // 재료

        for (int i = 0; i < n; i++) {
            ingredients[i] = Integer.parseInt(line[i]);
        }
        Arrays.sort(ingredients);

        int startIndex = 0;
        int endIndex = n - 1;
        int count = 0;

        while (endIndex > startIndex) {
            int sum = ingredients[startIndex] + ingredients[endIndex];
            if (sum == m) {
                count++;
                startIndex++;
            } else if (sum < m) {
                startIndex++;
            } else {
                endIndex--;
            }
        }

        System.out.println(count);

    }
}