const person = {
    name: 'Paul',
    age: 36,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// console.log(person);
person.greet();

const hobbies = ['Reading', 'Puzzles'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);