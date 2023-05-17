import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 시험본 과목 개수

        double max = Integer.MIN_VALUE;
        double sum = 0;

        for (int i = 0; i < n; i++) {
            int score = Integer.parseInt(sc.next());
            if (score >= max) max = score;
            sum += score;
        }
        System.out.println((sum / max * 100) / n);

    }
}