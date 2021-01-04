/* EKSEMPEL #1 | Funktionsconstructor */

// Lav en person construkter med variablerne first, last, age and eye
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Instantierer to person objekter
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Vis deres alder
console.log("My father is " + myFather.age + ". My mother is " + myMother.age + ".");
// My father is 50. My mother is 48.


/* EKSEMPEL #2 | Klasseconstructor */
class Polygon {
    constructor() {
        this.name = 'Polygon';
    }
}

const poly1 = new Polygon();
console.log(poly1.name); // Polygon 

/* EKSEMPEL #3 | */
function greet(greeting = 'Hey', name = 'Brendan') {
    return `${greeting}, ${name}`;
}

let greet1 = greet(undefined, 'Lars')

function greet({ greeting = 'Hey', name = 'Brendan' } = {}) {
    return `${greeting}, ${name}`;
}

let greet2 = greet({ name: 'Lars' })


/* Ekesempel 4 | Objektdestrukturering */
class Student {
    constructor({ name = 'Sarah', age = 22, interestLevel = 5 } = {}) {
        this.name = name;
        this.age = age;
        this.interestLevel = interestLevel;
        this.grades = new Map()
    }
}

let sarah = new Student()
console.log(sarah.name)
console.log(sarah.age)

let lars = new Student({ name: 'Lars' })
console.log(lars.name)
console.log(lars.age)


/* EKSEMPEL #5 | Fejlhåndtering */
// Please input a number between 5 and 10>
function numberBetween5and10(number) {
    var message, x
    this.number = number;
    try {
        if (this.number == "") {
            throw "empty"
        };
        if (isNaN(this.number)) {
            throw "not a number"
        };
        this.number = Number(this.number);
        if (this.number < 5) {
            throw "too low"
        };
        if (this.number > 10) {
            throw "too high"
            ;
        }
    }
    catch (err) {
        message = "Input is " + err;
        return message
    }
}

console.log(numberBetween5and10(4)) // Input is too low
console.log(numberBetween5and10(20)) // Input is too high
console.log(numberBetween5and10('hi')) // Input is not a number
console.log(numberBetween5and10('')) // Input is empty


/* EKSEMPEL #6 | Scope*/
const message = 'Hello';
console.log(message); // 'Hello'

if (true) {
    const message1 = 'Hello';
}
//console.log(message1); // ReferenceError: message is not defined

/* EKSEMPEL #7| Var er ikke block-scoped*/

if (true) {
    // "if" block scope
    var count = 0;
    console.log(count); // 0
}
console.log(count); // 0

/* EKSEMPEL #8| Funktion og klassed scoped*/
function run() {
    // "run" function scope
    var m = 'Run, Forrest, Run!';
    console.log(m); // 'Run, Forrest, Run!'
    const two = 2;
    let c = 0;
    function run2() { }

    console.log(two);   // 2
    console.log(c); // 0
    console.log(run2);  // function
}

run();
//console.log(m); // throws ReferenceError
//console.log(two);   // throws ReferenceError
//console.log(c); // throws ReferenceError
//console.log(run2);  // throws ReferenceError


function run() {
    // "run" function scope
    const message = 'Run, Forrest, Run!';

    if (true) {
        // "if" code block scope
        const friend = 'Bubba';
        console.log(message); // 'Run, Forrest, Run!'
    }

    console.log(friend); // throws ReferenceError
}

run();