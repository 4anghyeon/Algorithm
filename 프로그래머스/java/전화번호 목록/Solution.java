import java.util.*;
import java.util.stream.*;

public class Solution {

    public static void main(String[] args) {
        solution(new String[]{"test"});
    }

    public static void solution(String[] phone_book) {
        HashSet<String> hashSet = (HashSet<String>) Arrays.stream(phone_book).collect(Collectors.toSet());

        for (String key : hashSet)
            for (int j = 1; j <= key.length() - 1; j++) {
                if (hashSet.contains(key.substring(0, j))) return;
            }
    }
}
