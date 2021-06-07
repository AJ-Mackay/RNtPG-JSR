// var is outdated, const is unchangeable, let can be modified.

const name = 'Paul'; //string
let age = 36; //number
const hasHobbies = true //boolean;
// console.log(name);

age = 21;

const summerizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}
console.log(summerizeUser(name, age, hasHobbies));

const add = (a, b) => {
    return a + b;
};

// can be shortened to:
// const add = (a, b) => a + b;

console.log(add(1,2));

const addOne = a => a + 1;
console.log(addOne(4)); 