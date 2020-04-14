//Rock, Paper, Scissors - Game Mechanics
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let gamesPlayed = 0;
let computerWins = 0;
let playerWins = 0;

const alertBox = document.querySelector('#alert');
let locked = false;

function playRound(playerSelection) {
  locked = true;
  if (gamesPlayed == 0) {
    document.getElementById('subtitle').classList.add("subtitleDeleted");
  };
  gamesPlayed++;
  let computerSelection = rockPaperScissors[Math.floor(Math.random() * 3)];

  function alertBoxAnimation() {
    alertBox.classList.add("alertShown");
    alertBox.style['background-color'] = "rgba(33,150,243, 0.8)";
    alertBox.innerHTML = `Computer selects: <img id="shuffle" src="rock_seethrough.png" alt="Shuffle">`;
    let imgSource = ['rock_seethrough.png', 'paper_seethrough.png', 'scissors_seethrough.png'];

    let myVar = setInterval(function () {
      document.getElementById('shuffle').src = imgSource[0]
      setTimeout(function () {
        document.getElementById('shuffle').src = imgSource[1];
        setTimeout(function () {
          document.getElementById('shuffle').src = imgSource[2]
        }, 100);
      }, 100);
    }, 300);

    setTimeout(function () {
      clearInterval(myVar);
    }, 1199);

    setTimeout(function () {
      if (computerSelection == "Rock") {
        document.getElementById('shuffle').src = imgSource[0];
      } if (computerSelection == "Paper") {
        document.getElementById('shuffle').src = imgSource[1];
      } if (computerSelection == "Scissors") {
        document.getElementById('shuffle').src = imgSource[2];
      }
    }, 1200);
  }


  // tie
  if (playerSelection == computerSelection) {
    alertBoxAnimation();
    setTimeout(function () {
      alertBox.innerHTML += `   It's a Tie!`;
      locked = false;
    }, 2000);
  }

  // Computer wins
  if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
      alertBoxAnimation();
      setTimeout(function () {
        alertBox.style['background-color'] = "rgba(244,67,54, 0.8)";
        alertBox.innerHTML += `   You Lose!`;
        locked = false;
      }, 2000);
      computerWins++;
    }
  // Player wins
  if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    alertBoxAnimation();
    setTimeout(function () {
      alertBox.style['background-color'] = "rgba(76,175,80,0.8)";
      alertBox.innerHTML += `   You Win!`;
      locked = false;
    }, 2000);
    playerWins++;
    }

  document.getElementById('subtitle').innerHTML = `Games Played: ${gamesPlayed}  |  Games Won: ${playerWins}  |  Games Lost: ${computerWins}`;

}


// event listeners - button clicks
document.getElementById("Rock").addEventListener("click", function() {
  if (locked == false) {
    if (!this.classList.contains('active')) {
      this.classList.toggle('active');
      } if (document.getElementById("Paper").classList.contains('active')) {
        document.getElementById("Paper").classList.toggle('active')
        } if (document.getElementById("Scissors").classList.contains('active')) {
          document.getElementById("Scissors").classList.toggle('active')
          }
  playRound("Rock")
  } else return
});

document.getElementById("Paper").addEventListener("click", function() {
  if (locked == false) {
    if (!this.classList.contains('active')) {
      this.classList.toggle('active');
      } if (document.getElementById("Rock").classList.contains('active')) {
        document.getElementById("Rock").classList.toggle('active')
        } if (document.getElementById("Scissors").classList.contains('active')) {
          document.getElementById("Scissors").classList.toggle('active')
          }
  playRound("Paper")
  } else return
});

document.getElementById("Scissors").addEventListener("click", function() {
  if (locked == false) {
    if (!this.classList.contains('active')) {
      this.classList.toggle('active');
      } if (document.getElementById("Paper").classList.contains('active')) {
        document.getElementById("Paper").classList.toggle('active')
        } if (document.getElementById("Rock").classList.contains('active')) {
          document.getElementById("Rock").classList.toggle('active')
          }
  playRound("Scissors")
  } else return
});

document.getElementById('subtitle').addEventListener("transitionend", function() {
  let subtitle = document.getElementById('subtitle');
  subtitle.remove();
})

//JSCSS
//random Subtitle
const subtitles = ["Make your choice!", "What's your choice going to be?", "Pick one of the three options!", "Click on one of the symbols above!"];
const randomSubtitle = () => {
  let randomNumber = Math.floor(Math.random()*4);
  return subtitles[randomNumber];
};

document.getElementById('subtitle').innerHTML = randomSubtitle();

// ToDo:  mediaqueries
