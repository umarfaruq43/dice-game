function rollDice() {
  var randomDice_1 = Math.floor(Math.random() * 6) + 1;
  var randomDice_2 = Math.floor(Math.random() * 6) + 1;

  var diceAtribute_1 = `img/dice_${randomDice_1}.png`;
  var diceAtribute_2 = `img/dice_${randomDice_2}.png`;

  var displayDice_1 = document.querySelectorAll("img")[0];
  var displayDice_2 = document.querySelectorAll("img")[1];

  if (randomDice_1 > randomDice_2) {
    document.querySelector(
      "h3"
    ).innerHTML = `<b class="huge"> Player ${1} is the boss`;
  } else if (randomDice_1 === randomDice_2) {
    document.querySelector("h3").innerHTML = `<b class="huge"> Game is draw`;
  } else {
    document.querySelector(
      "h3"
    ).innerHTML = `<b class="huge"> Player ${2} is the boss`;
  }
  displayDice_1.setAttribute("src", diceAtribute_1);
  displayDice_2.setAttribute("src", diceAtribute_2);
}
