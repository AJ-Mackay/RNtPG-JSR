// var is outdated, const is unchangeable, let can be modified.

const name = 'Paul'; //string
let age = 36; //number
const hasHobbies = true //boolean;

age = 21;

// console.log(name);

function summerizeUser(userName, userAge, userHasHobby) {
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