function sushi1(array){
    // Initialisere min største sum og mit index
    var largest_slice_size = 0;
    var largest_slice_minute  = 0;

    // Løber hele listen igennem
    for (let minute = 0; minute < array.length; minute++) {
        var total = 0
        // Får mit slice af retter på det givne tidspunkt
        slice = array.slice(2,array.length-2)
        // Beregner summen over slicen
        for (let slice_idx = 0; slice_idx < slice.length; slice_idx++) {
            total += slice[slice_idx];
        }  
        // Hvis summen er størrer end den foregående -> Opdater
        if (total > largest_slice_size) {
            largest_slice_size = total;
            largest_slice_minute = minute;
        }
        
        // Flyt det sidste element fra listen til den førstes plads
        // [1,2,3,4] -> [4,1,2,3]
        array.splice(0, 0, array.pop())
    }
    // Formatere strengen ved at 0 padde. At blot printe minutterne havde også været fint.
    return "18:"+String(largest_slice_minute).padStart(2,'0')
}

console.log(sushi1([1,3,2,1,5,9,5,10]))
console.log(sushi1([8,8,2,3,4,9]))


