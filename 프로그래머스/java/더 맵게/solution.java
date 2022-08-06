import java.util.List;
import java.util.PriorityQueue;
import java.util.Vector;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue queue = new PriorityQueue();
        for (int i = 0; i < scoville.length; i++) {
            queue.add(scoville[i]);
        }

        while ((int) queue.peek() < K) {
            if (queue.size() == 1)
                return -1;
            int newScoville = (int) queue.poll() + (int) queue.poll() * 2;
            queue.add(newScoville);
            answer++;
        }
        return answer;
    }

}