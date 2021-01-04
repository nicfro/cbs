/* EKSEMPEL #1 | */

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


/* EKSEMPEL #2 | Klasseconstructor */
class Polygon {
    constructor() {
        this.name = 'Polygon';
    }
}

const poly1 = new Polygon();
console.log(poly1.name);

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

console.log(numberBetween5and10(4))
console.log(numberBetween5and10(20))
console.log(numberBetween5and10('hi'))
console.log(numberBetween5and10(''))


/* EKSEMPEL #6 | */
const message = 'Hello';
console.log(message); // 'Hello'