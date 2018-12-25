
// Functions

var years = [1990,1965,1937,2005,2000];
function arrayCalc(arr, fn, isFullAge, maxHeartRate){
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]) + " and this person is adult ? " + isFullAge(fn(arr[i])) + ". And heart rate is " + maxHeartRate(fn(arr[i])));
    }
    return arrRes;
}
function calculateAge(el){
    return 2016 - el;
}
function isFullAge(el){
    return el >= 18 ? true : false;
}
function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }    
    else{
        return -1;
    }    
}
//here, we are seeing, calculateAge function has no parenthesis
//this is why, we are not calling this function now
//this function will be called while executing arrayCalc()
//function. so, you know what the calculateAge function is called
//right? if you don't know, then remeber, this is called 
//callback function.
var ages = arrayCalc(years, calculateAge, isFullAge, maxHeartRate);
console.log(ages);
