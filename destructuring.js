const person = {
    name: 'Paul',
    age: 36,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// Object Destructuring - Arguments must match property names of the object
const printName = ({ name }) => {
    console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// Array Destructuring - Can use any property name
const hobbies = ['Reading', 'Puzzles'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);