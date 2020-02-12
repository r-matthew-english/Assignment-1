let playerscore = 0;
let compscore = 0;
const playerscore_count= document.getElementById('playerscores');
const compscore_count= document.getElementById('compscores');
const score_count= document.getElementById('.score');
const result_change = document.querySelector(".result > p");
const compchoice_show = document.querySelector(".compchoice > p");
const rock_option = document.getElementById('Rock');
const paper_option = document.getElementById('Paper');
const scissors_option = document.getElementById('Scissors');


function getcompChoice() {
  const options = ['Rock','Paper','Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}
function winner(playerChoice,compChoice){
  playerscore++;
  playerscore_count.innerHTML = playerscore;
  compscore_count.innerHTML = compscore;
  result_change.innerHTML= playerChoice + " beats " + compChoice + ", You Win";
  compchoice_show.innerHTML= "Computer chose " + compChoice;
  console.log("win");
}
function loser(playerChoice,compChoice){
  compscore++;
  playerscore_count.innerHTML = playerscore;
  compscore_count.innerHTML = compscore;
result_change.innerHTML= compChoice + " beats " + playerChoice + ", You Lose";
compchoice_show.innerHTML= "Computer chose " + compChoice;
console.log("lose");
}
function tie(playerChoice,compChoice){
  playerscore_count.innerHTML = playerscore;
  compscore_count.innerHTML = compscore;
result_change.innerHTML= playerChoice +" draws with "+ compChoice + ", You Tie";
compchoice_show.innerHTML= "Computer chose " + compChoice;
console.log("tie");
}

function game(playerChoice) {
    const compChoice = getcompChoice();
    switch (playerChoice + compChoice){
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
    winner(playerChoice,compChoice);
    break;
    case "ScissorsRock":
    case "RockPaper":
    case "ScissorsPaper":
    loser(playerChoice,compChoice);
    break;
    case "RockRock":
    case "ScissorsScissors":
    case "PaperPaper":
    tie(playerChoice,compChoice);
    break;
}
}

function play() {
rock_option.addEventListener('click', function() {

  game("Rock");
})
paper_option.addEventListener('click', function() {
  game("Paper");
})
scissors_option.addEventListener('click', function() {
  game("Scissors");
})
}
play();
