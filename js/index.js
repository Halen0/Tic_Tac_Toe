const cards = document.querySelectorAll(".card");
const score1 = document.querySelector(".score-1");
const score2 = document.querySelector(".score-2");
const btnReset = document.querySelector(".btnReset");
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");

name1.textContent = prompt("Name firts player");
name2.textContent = prompt("Name second player");
let score_player1 = 0;
let score_player2 = 0;

let player;


if(name1.textContent == ""){
    name1.textContent = "Player 1";
}

if(name2.textContent == ""){
    name2.textContent = "Player 2";
}
btnReset.addEventListener("click", reset);

cards.forEach(element => {
    element.addEventListener("click",(e)=>{
        if(element.textContent == ""){
            if(player){
                player = false;
                element.innerHTML = "O";
            }else{
                player = true;
                element.innerHTML = "X";
            }
        }
        win();
        lose();
    });
});

function win(){
    if(
        (cards[0].textContent == "X" && cards[1].textContent == "X" && cards[2].textContent == "X")||
        (cards[3].textContent == "X" && cards[4].textContent == "X" && cards[5].textContent == "X")||
        (cards[6].textContent == "X" && cards[7].textContent == "X" && cards[8].textContent == "X")||

        (cards[0].textContent == "X" && cards[3].textContent == "X" && cards[6].textContent == "X")||
        (cards[1].textContent == "X" && cards[4].textContent == "X" && cards[7].textContent == "X")||
        (cards[2].textContent == "X" && cards[5].textContent == "X" && cards[8].textContent == "X")||
        
        (cards[0].textContent == "X" && cards[4].textContent == "X" && cards[8].textContent == "X")||
        (cards[2].textContent == "X" && cards[4].textContent == "X" && cards[6].textContent == "X")
    ){
        alert("Win " + name1.textContent);
        reset();
        score_player1 += 1;
        score1.textContent = score_player1;
    }
}

function lose(){
    if(
        (cards[0].textContent == "O" && cards[1].textContent == "O" && cards[2].textContent == "O")||
        (cards[3].textContent == "O" && cards[4].textContent == "O" && cards[5].textContent == "O")||
        (cards[6].textContent == "O" && cards[7].textContent == "O" && cards[8].textContent == "O")||

        (cards[0].textContent == "O" && cards[3].textContent == "O" && cards[6].textContent == "O")||
        (cards[1].textContent == "O" && cards[4].textContent == "O" && cards[7].textContent == "O")||
        (cards[2].textContent == "O" && cards[5].textContent == "O" && cards[8].textContent == "O")||
        
        (cards[0].textContent == "O" && cards[4].textContent == "O" && cards[8].textContent == "O")||
        (cards[2].textContent == "O" && cards[4].textContent == "O" && cards[6].textContent == "O")
    ){
        alert("Win " + name2.textContent);
        reset();
        score_player2 += 1;
        score2.textContent = score_player2;
    }
}

function reset(){
    cards.forEach(element => {
        element.innerHTML = "";
    });
    player = false;
}