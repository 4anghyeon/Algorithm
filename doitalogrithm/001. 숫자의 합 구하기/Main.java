import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 숫자의 개수
        String number = sc.next(); // 숫자
        String[] numberArray = number.split("");
        int result = 0;

        for (int i = 0; i < n; i++) {
            result += Integer.parseInt(numberArray[i]);
        }

        System.out.println(result);

    }
}