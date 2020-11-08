function rollDice() {
  var randomDice_1 = Math.floor(Math.random() * 6) + 1;
  var randomDice_2 = Math.floor(Math.random() * 6) + 1;

  var diceAtribute_1 = `img/dice_${randomDice_1}.png`;
  var diceAtribute_2 = `img/dice_${randomDice_2}.png`;

  var displayDice_1 = document.querySelectorAll("img")[0];
  var displayDice_2 = document.querySelectorAll("img")[1];

  if (randomDice_1 > randomDice_2) {
    document.querySelector("span").innerHTML = 1;
  } else if (randomDice_1 === randomDice_2) {
    document.querySelector("h1").innerHTML = "Game is draw!";
  } else {
    document.querySelector("span").innerHTML = 2;
  }
  displayDice_1.setAttribute("src", diceAtribute_1);
  displayDice_2.setAttribute("src", diceAtribute_2);
}
