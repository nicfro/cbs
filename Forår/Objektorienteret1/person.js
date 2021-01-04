class Person {
    constructor(firstName, lastName, occupation) {
      this.firstName = firstName;
      this.lastName = lastName
      this.fullName = function(){
          return this.firstName + " " + this.lastName
      }
      this.occupation = occupation
    }

    doWork(){
        return "work work"
    }
  }
  
const person = new Person("Nicolai", "Frost", "Ekstern Lektor");
console.log(person.firstName) //Nicolai
console.log(person.lastName) //Frost
console.log(person.fullName()) //Nicolai Frost
console.log(person.occupation) //Ekstern Lektor
console.log(person.doWork()) //work work