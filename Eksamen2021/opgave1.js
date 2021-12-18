function divide_numbers_in_list(arr) {
    // Looper igennem vores array til længden -1: Så vi ikke går out of bounds
    for (let index = 0; index < arr.length-1; index++) {
        var numerator = arr[index]
        var denominator = arr[index+1]
        var element
    
        /*
        1:  Undersøger om tæller eller nævner er en streng
            Hvis de er en streng - så kaster vi en fejl
 
        2:  Undersøger om nævner er 0
            Hvis nævner er 0 - så kaster vi en fejl
 
        3:  Hvis vores to krav er overalt, må alt være ok
            Beregner vores brøk
        */
        try {
            if (typeof(numerator) == 'string' || typeof(denominator) == 'string') {
                throw denominator, "or", numerator, "is not a number";
            } else if (denominator == 0) {
                throw "You are trying to divide with zero";
            } else {
                element = numerator/denominator
            }
 
        // Håndtere vores fejl
        } catch (error) {
            console.log(error)
            element = NaN
    
        // Opdatere vores originale array med vores nye beregnede element
        } finally{
            arr[index] = element
        }
    }
    // Fjerner sidste element i listen, da dette ikke indgår i vores resultat
    arr.pop()
    return arr
}
 
console.log(divide_numbers_in_list([4,3,3,0,1,2]))
console.log(divide_numbers_in_list([2,2,"hi",0,20,40]))