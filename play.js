var name = 'Paul'; //string
var age = 36; //number
var hasHobbies = true //boolean;

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