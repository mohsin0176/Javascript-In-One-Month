
// Closures
function retirement(retirementAge){
    var a = " years left until retirement";
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
retirement(65)(1992);