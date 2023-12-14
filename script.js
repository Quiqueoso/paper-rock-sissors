function getComputerChoice() {
    var random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "Paper";
    } else if (random === 1) {
        return "Rock";
    } else {
        return "Scissors";
    }
}
var resultado = getComputerChoice();
console.log("Elección de la computadora:", resultado);

function getPlayerChoice() {
    
}