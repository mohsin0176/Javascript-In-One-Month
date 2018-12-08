// Objects and methods

var john = {
    name : "John",
    lastName : "Smith",
    yearOfBirth : 1990,
    job : "Teacher",
    isMarried : false,
    family : ["Jame","Mark","Bob"],
    calculateAge : function(){
        return 2016 - this.yearOfBirth;
    }
}

var age = john.calculateAge();
john.age = age;
console.log(john);

var john2 = {
    name : "John",
    lastName : "Smith",
    yearOfBirth : 1990,
    job : "Teacher",
    isMarried : false,
    family : ["Jame","Mark","Bob"],
    calculateAge : function(){
        this.age = 2016 - this.yearOfBirth;
    }
}

john2.calculateAge();
console.log(john2);

var mike = {
    yearOfBirth : 1992,
    calculateAge : function(){
        this.age = 2016 - this.yearOfBirth;
    }
}

mike.calculateAge();
console.log(mike);
