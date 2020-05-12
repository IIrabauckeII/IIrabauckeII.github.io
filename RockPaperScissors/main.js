//Gloabal variable declaration
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let gamesPlayed = 0;
let computerWins = 0;
let playerWins = 0;
let locked = false;

const alertBox = document.querySelector('#alert');
const subtitle = document.getElementById('subtitle');

const rockImg = document.getElementById("Rock");
const paperImg = document.getElementById("Paper");
const scissorsImg = document.getElementById("Scissors");

// Play Round Function
function playRound(playerSelection) {
  locked = true;
  if (gamesPlayed == 0) {
    subtitle.classList.add("subtitleDeleted");
  };
  gamesPlayed++;
  let computerSelection = rockPaperScissors[Math.floor(Math.random() * 3)];

// Alert Box Animation
  function alertBoxAnimation() {
    alertBox.classList.add("alertShown");
    alertBox.style['background-color'] = "rgba(33,150,243, 0.8)";
    alertBox.innerHTML = `Computer selects: <img id="shuffle" src="rock_seethrough.png" alt="Shuffle">`;

    let imgSource = ['rock_seethrough.png', 'paper_seethrough.png', 'scissors_seethrough.png'];
    const computerChoiceImg = document.getElementById('shuffle');

    let myInterv = setInterval(function () {
      computerChoiceImg.src = imgSource[0]
      setTimeout(function () {
        computerChoiceImg.src = imgSource[1];
        setTimeout(function () {
          computerChoiceImg.src = imgSource[2]
        }, 100);
      }, 100);
    }, 300);

    setTimeout(function () {
      clearInterval(myInterv);
    }, 1199);

    setTimeout(function () {
      if (computerSelection == "Rock") {
        computerChoiceImg.src = imgSource[0];
      } if (computerSelection == "Paper") {
        computerChoiceImg.src = imgSource[1];
      } if (computerSelection == "Scissors") {
        computerChoiceImg.src = imgSource[2];
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

// subtitle stats
  subtitle.innerHTML = `Games Played: ${gamesPlayed}  |  Games Won: ${playerWins}  |  Games Lost: ${computerWins}`;

}


// event listeners - button clicks
rockImg.addEventListener("click", function() {
  if (locked == false) {
    if (!this.classList.contains('active')) {
      this.classList.toggle('active');
      } if (paperImg.classList.contains('active')) {
        paperImg.classList.toggle('active')
        } if (scissorsImg.classList.contains('active')) {
          scissorsImg.classList.toggle('active')
          }
  playRound("Rock")
  } else return
});

paperImg.addEventListener("click", function() {
  if (locked == false) {
    if (!this.classList.contains('active')) {
      this.classList.toggle('active');
      } if (rockImg.classList.contains('active')) {
        rockImg.classList.toggle('active')
        } if (scissorsImg.classList.contains('active')) {
          scissorsImg.classList.toggle('active')
          }
  playRound("Paper")
  } else return
});

scissorsImg.addEventListener("click", function() {
  if (locked == false) {
    if (!this.classList.contains('active')) {
      this.classList.toggle('active');
      } if (paperImg.classList.contains('active')) {
        paperImg.classList.toggle('active')
        } if (rockImg.classList.contains('active')) {
          rockImg.classList.toggle('active')
          }
  playRound("Scissors")
  } else return
});

subtitle.addEventListener("transitionend", function() {
  subtitle.remove();
})

//JSCSS
//random Subtitle
const subtitles = ["Make your choice!", "What's your choice going to be?", "Pick one of the three options!", "Click on one of the symbols above!"];
const randomSubtitle = () => {
  let randomNumber = Math.floor(Math.random()*4);
  return subtitles[randomNumber];
};

subtitle.innerHTML = randomSubtitle();

// ToDo:  mediaqueries
