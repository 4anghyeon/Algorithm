function solution(keymap, targets) {
    var answer = [];
    keymap.sort((a, b) => b.length - a.length);

    for (let i = 0; i < targets.length; i++) {
        answer.push(check(targets[i], keymap))
    }
    
    return answer;
}

function check(target, keymap) {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
        let char = target[i];
        let keyIndex = 0;
        
        let find = false;
        while (keyIndex !== keymap[0].length) {
            for (let j = 0; j < keymap.length; j++) {
                if (findKey(char, keyIndex, keymap[j])) {
                    find = true;
                    break;
                };
            }
            
            keyIndex++;
            if (find) break;
        }
        if (find) count += keyIndex;
        else return -1;
    }
    return count;
}

function findKey(char, keyIndex, keyArray) {
    if (keyIndex > keyArray.length) {
        keyIndex = keyIndex % (keyArray.length + 1);
    }
    
    if (keyArray[keyIndex] === char) return true;
    return false;
}