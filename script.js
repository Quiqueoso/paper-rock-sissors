
function updatePlayerScore(){
    var playerScore = document.getElementById("PlayerScore");
    var currentPlayerScore = parseInt(playerScore.textContent);
    currentPlayerScore += 1;
    playerScore.textContent = currentPlayerScore
}
function updateMachineScore(){
    var MachineScore = document.getElementById("MachineScore");
    var currentMachineScore = parseInt(MachineScore.textContent);
    currentMachineScore += 1;
    MachineScore.textContent = currentMachineScore
}
function getComputerChoice() {
    MachineChoice = Math.floor(Math.random() * 3);
}

var MachineChoice 

var Paper = document.getElementById("Paper");
var Rock = document.getElementById("Rock");
var Sissors = document.getElementById("Sissors");


var PlayerChoice

  function Player(value) {
    PlayerChoice = value;
    getResult(PlayerChoice, MachineChoice);
}

function getResult(PlayerChoice, MachineChoice) {
    if ((PlayerChoice + MachineChoice) ===0) {
        alert("tie");
    }
    else if ((PlayerChoice + MachineChoice) === 1) {
        alert("You Win!");
        updatePlayerScore()
    }
    else if ((PlayerChoice + MachineChoice) === 2) {
        alert("You Lose!");
        updateMachineScore()
    }
    else if ((PlayerChoice + MachineChoice) === 3) {
        alert("You Lose!");
        updateMachineScore()
    }
    else if ((PlayerChoice + MachineChoice) === 4) {
        alert("tie");
    }
    else if ((PlayerChoice + MachineChoice) === 5) {
        alert("You Win!");
        updatePlayerScore()
    }
    else if ((PlayerChoice + MachineChoice) === 6) {
        alert("You Win!");
        updatePlayerScore()
    }
    else if ((PlayerChoice + MachineChoice) === 7) {
        alert("You Lose!");
        updateMachineScore()
    }
    else if ((PlayerChoice + MachineChoice) === 8) {
        alert("tie");
    }

}