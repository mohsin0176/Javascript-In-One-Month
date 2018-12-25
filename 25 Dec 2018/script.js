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

// Object.create method

var personProto = {
    calculateAge : function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john2 = Object.create(personProto);
john2.name = "John";
john2.yearOfBirth = 1990;
john2.job = "Teacher";

var jane2 = Object.create(personProto,{
    name : {value : "Jane"},
    yearOfBirth : {value : 1969},
    job : {value : "Designer"}
});

// Primitives vs objects
var a = 23;
var b = a;
a=46;
console.log(a);
console.log(b);

var obj1 = {
    name : "John",
    age : 26
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);