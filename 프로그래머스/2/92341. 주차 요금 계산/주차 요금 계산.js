function solution(fees, records) {
    const [defaultTime, defaultFee, unitMinute, unitFee] = fees;
    const timeMap = {};
    const hourMap = {};
    const answer = [];
    
    records.forEach(record => {
        const [time, number, inout] = record.split(' ');
        
        if (!timeMap[number]) {
            timeMap[number] = time;
        } else {
            const [hour, minute] = time.split(':').map(Number);
            const [bHour, bMinute] = timeMap[number].split(':').map(Number);
            timeMap[number] = null;
            
            const calc = (minute - bMinute) + (hour - bHour) * 60;
            if (!hourMap[number]) {
                hourMap[number] = calc
            } else {
                hourMap[number] += calc;
            }
        }
    });
    

    
    for ([key, time] of Object.entries(timeMap)) {
        if (time) {
            const [hour, minute] = time.split(':').map(Number);
            hourMap[key] = (hourMap[key] ?? 0) + (23-hour) * 60 + 59 - minute
        }
    }
    
    const entries = [...Object.entries(hourMap)].sort((a, b) => {
        return a[0] - b[0]
    })
    
    
    for (const [number, hour] of entries) {
        
        if (hour <= defaultTime) {
            answer.push(defaultFee)
        } else {
            answer.push(defaultFee + (Math.ceil((hour - defaultTime) / unitMinute))*unitFee);
        }
    }
    
    
    
    return answer;
}