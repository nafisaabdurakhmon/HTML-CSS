let addNumbers;
function numbers(num1, num2) {
  console.log(num1 + num2);
}
numbers(2, 2);

let Numbers;
function numbers(num1, num2) {
  console.log(num1 ** num2);
}
numbers(3, 3);

let player1Score = 0;
let player2Score = 0;
function player1(p1, p2) {
  if (p1 == `rock` && p2 == `rock`) {
    console.log(`tie`);
  } else if (p1 == `paper` && p2 == `paper`) {
    console.log(`tie`);
  } else if (p1 == `scissors` && p2 == `scissors`) {
    console.log(`tie`);
  } else if (p1 == `rock` && p2 == `paper`) {
    console.log(`player 2 wins`);
    player2Score++;
  } else if (p1 == `paper` && p2 == `scissors`) {
    console.log(`player 2 wins`);
    player2Score++;
  } else if (p1 == `scissors` && p2 == `rock`) {
    console.log(`player 2 wins`);
    player2Score++;
  } else if (p1 == `rock` && p2 == `scissors`) {
    console.log(`player 1 wins`);
    player1Score++;
  } else if (p1 == `paper` && p2 == `rock`) {
    console.log(`player 1 wins`);
    player1Score++;
  } else if (p1 == `scissors` && p2 == `paper`) {
    console.log(`player 1 wins`);
    player1Score++;
  } else {
    console.log(`player 1 win`);
  }
}

player1("paper", "rock");
player1("rock", "rock");
player1("paper", "rock");
player1("paper", "scissors");

function checkTotalScore() {
  console.log(player1Score + ` vs ` + player2Score);
}
checkTotalScore();



function clock(hour){
    console.log(hour * 60)
}

clock(9)


function money(curensiy, amount){ 
if(curensiy === `EUR`){
    console.log(amount * 13900)
}
else if(curensiy === `USD`){
    console.log(amount * 12800)
}
else if(curensiy === `Yuvan`){
    console.log(amount * 17993)
}
else if(curensiy === `OAE`){
    console.log(amount * 348659)
}
else if( curensiy === `lira`){
    console.log(amount * 37381)
}
}
money("lira", 100)