class Person {
  constructor(firstName, lastName, occupation) {
    this._firstName = firstName;
    this._lastName = lastName
    this._fullName = function(){
        return this.firstName + " " + this.lastName
    }
    this._occupation = occupation
  }

  get firstName() {
    return this._firstName.toUpperCase();
  }

  set firstName(newName) {
    this._firstName = "1" + newName; // Vi kunne undersøge om inputtet kun have bogstaver
  }

  get lastName() {
    return this._lastName.toUpperCase();
  }

  set lastName(newName) {
    this._lastName = newName; // Vi kunne undersøge om inputtet kun have bogstaver
  }

  get fullName() {
    return this._fullName()
  }

  doWork(){
      return "work work"
  }
}

const person = new Person("Nicolai", "Frost", "Ekstern Lektor");
console.log(person.firstName) //NICOLAI
console.log(person.lastName) //FROST
console.log(person.fullName) //NICOLAI FROST
console.log(person.occupation) //undefined
console.log(person.doWork()) //work work
person.firstName = "Regitze"
console.log(person.firstName)

