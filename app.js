let user_score=0;
let comp_score=0;
let user_score_span=document.getElementById("user-score");
let comp_score_span=document.getElementById("comp-score");
let score_board_div=document.querySelector(".score-board")
let result_div=document.querySelector(".result");
let rock_div=document.getElementById("r");
let paper_div=document.getElementById("p");
let scissors_div=document.getElementById("s");
let action_div=document.getElementById("action");
const ele_mapping = {"r":"Rock","p":"Paper","s":'Scissor'};

function main(){
  rock_div.addEventListener("click",function(){game("r");})
  paper_div.addEventListener("click",function(){game("p");})
  scissors_div.addEventListener("click",function(){game("s");})
}

function getComputerChoice(){
  let choices=["r","p","s"];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function win(input,getCompChoice){
  result_div.innerHTML=ele_mapping[input]+" covers "+ele_mapping[getCompChoice]+". You win! 🔥🔥 ";
}

function lose(input,getCompChoice){
  result_div.innerHTML=ele_mapping[getCompChoice]+" covers "+ele_mapping[input]+". You lose! 💩💩 ";
}

function draw(input,getCompChoice){
  result_div.innerHTML=ele_mapping[input]+" equals "+ele_mapping[getCompChoice]+". It's a draw! ";
}

function game(input){
  const getCompChoice=getComputerChoice();
  console.log(input+" "+getCompChoice);
  switch(input + getCompChoice){
    case "pp":
    case "rr":
    case "ss":
    draw(input,getCompChoice);
    break;
    case "ps":
    case "rp":
    case "sr":
    comp_score++;
    comp_score_span.innerHTML=comp_score;
    lose(input,getCompChoice);
    break;
    case "sp":
    case "pr":
    case "rs":
    user_score++;
    user_score_span.innerHTML=user_score;
    win(input,getCompChoice);
    break;
  }
  switch (input) {
    case "p":
    action_div.innerHTML="You choose paper!"
    break;
    case "r":
    action_div.innerHTML="You choose rock!"
    break;
    case "s":
    action_div.innerHTML="You choose scissors!"
    break;
}}

main();
