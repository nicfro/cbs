function skat(number){
    return Math.sign(number) * parseInt(number.toString().split('').reverse().join(''));
}

console.log(skat(234))
console.log(skat(120))
console.log(skat(-123))