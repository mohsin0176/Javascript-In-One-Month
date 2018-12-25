
// Functions

var years = [1990,1965,1937,2005,1998];
function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el){
    return 2016 - el;
}
//here, we are seeing, calculateAge function has no parenthesis
//this is why, we are not calling this function now
//this function will be called while executing arrayCalc()
//function. so, you know what the calculateAge function is called
//right? if you don't know, then remeber, this is called 
//callback function.
var ages = arrayCalc(years, calculateAge);
console.log(ages);
