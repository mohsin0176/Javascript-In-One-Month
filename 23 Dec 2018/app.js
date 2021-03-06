

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
//

var scores, roundScore, activePlayer, gamePlaying;

initFunction();

document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gamePlaying){
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. Display the result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-"+dice+".png";
        // 3. Update the round score if the rolled number was not a 1
        if(dice !== 1){
            //add score        
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }    
        else{
            nextPlayer();
        }
    }    
});

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
        //add current score to global score
        scores[activePlayer] += roundScore;
        //update the UI 
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        
        //Check if the player won the game
        if(scores[activePlayer] >= 20){
            document.querySelector("#name-" + activePlayer).textContent = "Winner!!";
            document.querySelector(".dice").style.style = "none";
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            gamePlaying = false;
        } 
        else{
            nextPlayer();
        }
    }        
});

function nextPlayer(){
    //next player
    activePlayer = activePlayer == 0 ? 1 : 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    //my logic
    // activePlayer === 1 ? document.querySelector(".player-0-panel").classList.remove("active") : document.querySelector(".player-1-panel").classList.remove("active");  
    // activePlayer === 1 ? document.querySelector(".player-1-panel").classList.add("active") : document.querySelector(".player-0-panel").classList.add("active");           
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click",initFunction);

function initFunction(){
    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector(".dice").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
}