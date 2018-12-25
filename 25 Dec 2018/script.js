// Function constructor

// var john = {
//     name : "John",
//     yearOfBirth : 1990,
//     job : "Teacher"    
// };

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function(){
        console.log(this.name + "'s age is : " + (2018 - this.yearOfBirth));
    }
}

Person.prototype.anotherCalculateAge = function(){
    console.log("this is also can be used");
}
Person.prototype.lastName = "Smith";

var john = new Person("John",1990,"Teacher");

john.calculateAge();

var jane = new Person("Jane",1969,"Designer");
var mark = new Person("Mark",1948,"Retired");

jane.calculateAge();
mark.calculateAge();

mark.anotherCalculateAge();
console.log(john.lastName);