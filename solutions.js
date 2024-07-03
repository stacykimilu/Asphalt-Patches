function solution(S) {
    let sLength = S.length;
    let patches = 0;
    
    for (let i = 0; i < sLength; i++) {
        if (S[i] === "X") {
            patches++;
            i += 2;  
        }
    }

    return patches;
}

