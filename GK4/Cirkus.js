function cirkus(array, num) {
    let numbers = {}
    for(i=0; i<array.length; i++) {
        let compliment = num - array[i]
        numbers[array[i]] = i
        if (compliment in numbers) {
            return [numbers[compliment], i]
        }
    }
}

console.log(cirkus([3,9,11,1,2], 10))
console.log(cirkus([1,2,3,4,5], 9))