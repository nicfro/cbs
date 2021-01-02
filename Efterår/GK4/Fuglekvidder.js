function eksamen(string) {

    let patterns = ["ABC", "BABC", "CCAABB"]
    let patternNames = ["Simon", "Anders", "Mads"]
    let answer = []
    let score = 0

    for (i=0; i<patterns.length; i++) {
        numberOfRepetitions = Math.ceil(string.length / patterns[i].length)
        let patternString = patterns[i].repeat(numberOfRepetitions)
        patterns[i] = patternString
    }

    for (i=0; i<patterns.length; i++) {
        let tempScore = 0
        for (j=0; j<string.length; j++) {
            if (patterns[i][j] == string[j]) {
                tempScore ++
            }
        }

        if (tempScore == score) {
            answer.push(patternNames[i])
        }


        else if (tempScore > score) {
            score = tempScore
            answer = [patternNames[i]]
        }
    }

    if (answer.length > 1) {
        answer.sort()
    }

    return answer
}



var test1 = "BAACC"
var test2 = "AAAABBBBB"
console.log(eksamen(test1))
console.log(eksamen(test2))
