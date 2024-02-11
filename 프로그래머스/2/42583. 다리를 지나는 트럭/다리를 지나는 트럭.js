function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = [];
    const complete = [];
    
    let seconds = 0;
    while (truck_weights.length !== 0 || bridge.length !== 0) {
        
        const find = bridge.find(b => b?.time === bridge_length - 1);
        if (find) {
            const truck = bridge.shift();
            complete.push(truck)
        }
        
        // 올라가 있는 트럭의 시간을 계산한다.
        if (bridge.length !== 0) {
            bridge = bridge.map(b => {
                return {...b, time: b?.time + 1};
            });
        }
        
        // 다리에 트럭이 올라갈 수 있으면, 트럭을 추가한다.
        if (getSum(bridge) + truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            bridge.push({weight: truck, time: 0});
        }
        
        seconds++;
    }
    
    return seconds;
}

function getSum(arr) {
    return arr.reduce((arr,cur) => {
        return arr + cur.weight
    }, 0)
}