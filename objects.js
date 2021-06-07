const person = {
    name: 'Paul',
    age: 36,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// console.log(person);
person.greet();