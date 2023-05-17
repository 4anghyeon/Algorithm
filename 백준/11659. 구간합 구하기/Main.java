import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] firstLine = br.readLine().split(" ");
        int numberOfData = Integer.parseInt(firstLine[0]);
        int numberOfQuery = Integer.parseInt(firstLine[1]);
        int[] sumArray = new int[numberOfData + 1];

        String[] numbers = br.readLine().split(" ");
        for (int i = 1; i < numberOfData + 1; i++) {
            sumArray[i] = sumArray[i - 1] + Integer.parseInt(numbers[i - 1]);
        }

        for (int i = 1; i < numberOfQuery + 1; i++) {
            String[] range = br.readLine().split(" ");
            int start = Integer.parseInt(range[0]);
            int end = Integer.parseInt(range[1]);
            System.out.println(sumArray[end] - sumArray[start - 1]);
        }

    }
}