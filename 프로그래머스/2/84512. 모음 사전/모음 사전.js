function solution(word) {
    var answer = 0;
    const dictionaryList = [];
    
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    
    
    const makeWord = (word, index) => {
        if (word.length === alphabet.length) return;
        for (let i = 0 ; i < alphabet.length; i++) {
            const newWord = word + alphabet[i]
            dictionaryList.push(newWord);
            makeWord(newWord, index + 1);
        }
    }
    
    makeWord("", 0);
    
    return dictionaryList.findIndex(d => d === word) + 1;
}
