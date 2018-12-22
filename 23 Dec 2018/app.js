
var scores, roundScore, activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;

// we can use these two methods to dom manipulate
document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>"+dice+"</em>";
// var x = document.querySelector("#score-1").textContent;
// console.log(x);

document.querySelector(".dice").style.display = "none";

function btn(){
    //do something here
}
document.querySelector(".btn-roll").addEventListener('click',btn);
