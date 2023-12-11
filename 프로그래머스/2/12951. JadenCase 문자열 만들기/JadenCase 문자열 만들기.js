function solution(s) {
    return s.split(" ").map(string => {
        return [...string].map((c, i) => {
            if (i === 0 && !Number.isInteger(+c)) {
                return c.toUpperCase();
            }
            return c.toLowerCase();
        }).join("")
    }).join(" ");
}