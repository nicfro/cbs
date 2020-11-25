function dam(Board){
    var countRows = {}
    var countColumns = {}
    
    for (let index = 0; index < Board.length; index++) {
        countColumns[index] = {"H": 0, "S": 0}
        countRows[index] = {"H": 0, "S": 0}
    }
    
    for (let i = 0; i < Board.length; i++) {
        var rows = Board[i]
        for (let j = 0; j < Board[i].length; j++) {
            countRows[i][rows[j]] += 1
            countColumns[j][rows[j]] += 1
        }
    }
    
    for (let index = 0; index < Board.length; index++) {
        if (countColumns[index]["S"] != countColumns[index]["H"]){
            return("falsk")
        }
        if (countRows[index]["S"] != countRows[index]["H"]){
            return("falsk")
        }
    }
    
    return("ægte")
}

console.log(dam([["H","S", "S", "H"],
                 ["H", "S", "H", "S"],
                 ["S", "H", "H", "S"],
                 ["H", "H", "S", "S"]]))

console.log(dam([["H", "S"],
                 ["S", "H"]]))