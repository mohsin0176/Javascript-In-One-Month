
// Functions

function calculateAge(yearOfBirth){
    var age = 2016-yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
// console.log(ageJohn);
// console.log(ageMary);
// console.log(ageMike);

function yearsUntilRetirement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    console.log(name + " retires in " + retirement +" year");
}

yearsUntilRetirement('John',1990);

