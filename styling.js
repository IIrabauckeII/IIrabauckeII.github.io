// set background computer selection
if (computerSelection == "Rock" && playerSelection != computerSelection) {
  setTimeout(function () {
    document.getElementById("Rock").style['background-color'] = "#f44336"
  }, 1300);
}
if (computerSelection == "Paper" && playerSelection != computerSelection) {
  setTimeout(function () {
    document.getElementById("Paper").style['background-color'] = "#f44336"
  }, 1300);
}
if (computerSelection == "Scissors" && playerSelection != computerSelection) {
  setTimeout(function () {
    document.getElementById("Scissors").style['background-color'] = "#f44336"
  }, 1300);
}
