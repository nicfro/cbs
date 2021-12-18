// Tilføjer alle knapperne ved deres id
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const buttonPlus = document.getElementById('+');
const buttonMinus = document.getElementById('-');
const buttonMul = document.getElementById('*');
const buttonEq = document.getElementById('=');
const buttonC = document.getElementById('C');

const screen = document.getElementById('screen');
const output = document.getElementById('output');

// Tilføjer alle event listeners - Alle knapperne tilføjer deres symobl
button1.addEventListener('click', function(){
    screen.innerHTML += "1"
})

button2.addEventListener('click', function(){
    screen.innerHTML += "2"
})

button3.addEventListener('click', function(){
    screen.innerHTML += "3"
})

button4.addEventListener('click', function(){
    screen.innerHTML += "4"
})

button5.addEventListener('click', function(){
    screen.innerHTML += "5"
})

button6.addEventListener('click', function(){
    screen.innerHTML += "6"
})

button7.addEventListener('click', function(){
    screen.innerHTML += "7"
})

button8.addEventListener('click', function(){
    screen.innerHTML += "8"
})

button9.addEventListener('click', function(){
    screen.innerHTML += "9"
})

buttonPlus.addEventListener('click', function(){
    screen.innerHTML += "+"
})

buttonMinus.addEventListener('click', function(){
    screen.innerHTML += "-"
})

buttonMul.addEventListener('click', function(){
    screen.innerHTML += "*"
})

// C clearer min screen, ved at sætte den til tom streng
buttonC.addEventListener('click', function(){
    screen.innerHTML = ""
})

// Equal beregner resultatet og skriver det til mit output felt
buttonEq.addEventListener('click', function(){
    output.innerHTML = eval(screen.innerHTML)
})

