
//Objects

var john = {
    name : "John",
    lastName : "Smith",
    yearOfBirth : 1990,
    job : "Teacher",
    isMarried : false
}

console.log(john);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "Programmer";

console.log(john);

var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane.job = "retired";
jane.isMarried = true;

console.log(jane);