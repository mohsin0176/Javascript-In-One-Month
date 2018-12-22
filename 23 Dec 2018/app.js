
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random() * 6) + 1;

// we can use these two methods to dom manipulate
//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>"+dice+"</em>";
// var x = document.querySelector("#score-1").textContent;
// console.log(x);

//addEventListener has several overloaded arguments. first one 
//is here is what type of event it will going to execute.
//and then, a function to execute something. here is the big
//deal. we can use an annonymous function in the method 
//it self, or we can create a function earlier and call it in 
//the addEventListener method. =D 

// function btn(){
//     console.log("button clicked");
// }
// document.querySelector(".btn-roll").addEventListener('click',btn);
// document.querySelector(".btn-roll").addEventListener('click',function(){
//     console.log("button clicked inside event listener");
// });

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener('click',function(){
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-"+dice+".png";
    // 3. Update the round score if the rolled number was not a 1
});