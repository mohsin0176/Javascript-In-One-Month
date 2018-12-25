
// Functions returning functions
function interviewQuestion(job){
    if(job === "designer"){
        //you see, this below function has not any name. 
        //this types of functions are called annonymous function
        return function(name){
            console.log(name + ", can you please explain what UX design is ?");
        }
    }
    else if(job === "teacher"){
        return function(name){
            console.log(name + ", what subject do you teach?");
        }
    }
    else{
        return function(name){
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");

//interviewQuestion("teacher")("John");