

function getname() {
  player1 = prompt("Change the name of player 1:");
  player2 = prompt("Change thw name of player 2:");
  document.querySelector(".pp1").innerHTML = player1;
  document.querySelector(".pp2").innerHTML = player2;


}

function rollDice() {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = (player1 + "Wins!");
      } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = (player2 + "Wins!");
      } else {
        document.querySelector("h1").innerHTML = ("DRAW!");
      }
      document.querySelector(".img1").setAttribute("src",
        "images/dice" + randomNumber1 + ".png");
      document.querySelector(".img2").setAttribute("src",
        "images/dice" + randomNumber2 + ".png");

  }
