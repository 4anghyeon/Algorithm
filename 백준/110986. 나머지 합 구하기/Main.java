import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int maxN = (2 * n + 1) / 2;
        int[] sumArray = new int[maxN+1];

        StringTokenizer numbers = new StringTokenizer(br.readLine());
        for (int i = 1; i <= n; i++) {
            sumArray[i] = sumArray[i - 1] + Integer.parseInt(numbers.nextToken());
        }

        int start = 1;
        int end = n;
        int count = 0;

//        System.out.println(Arrays.toString(sumArray));
        while (start < n) {
            if (end < start - 1) break;
            for (int i = start; i <= n ; i++) {
                if (end < i -1) break;
//                System.out.println(i + ", " + end + " " + sumArray[end] +" - " +sumArray[i - 1] + " = " + (sumArray[end] - sumArray[i - 1]));
                if ((sumArray[end] - sumArray[i - 1]) % m == 0) count++;

            }
//            System.out.println("start: " +start);
            start++;
            end--;
        }

        System.out.println(count);
    }
}
