
// Hoisting
// this means we don't have to make the function at first.

// Functions
calculateAge(1965);

function calculateAge(year){
    console.log(2016 - year);
}

// look this is not working. so, it's only works for function declaration.
//this is function expression
//retirement(1990);

var retirement = function(year){
    console.log(65 - (2016 - year));
}

// Variables
console.log(age);
var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);