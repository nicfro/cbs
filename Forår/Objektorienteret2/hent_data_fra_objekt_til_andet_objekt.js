function Name(first, last) {
    this.firstName = first;
    this.lastName = last;
}

function Person(age, eye) {
    this.name = ''
    this.age = age;
    this.eyeColor = eye;
}

const nicolai = new Person('30', 'Grå');
console.log(nicolai.age);

const navn = new Name('Nicolai', 'Frost');
nicolai.name = navn
console.log(nicolai.name);
console.log(nicolai.name.firstName); 