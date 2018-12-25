
// Immediately Invoked Function Expressions
//IIFE

// this is a typical function.
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// this is IIFE
(
    function(){
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();