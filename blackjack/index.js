let firstCard = 11;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
if (sum <= 20) {
  cardsEl.textContent = cardsEl.textContent + " " + firstCard + ", " + secondCard;
  sumEl.textContent = sumEl.textContent + " " + sum;
  messageEl.textContent = "Do you want new card?";
  } else if (sum === 21) {
    cardsEl.textContent = cardsEl.textContent + " " + firstCard + ", " + secondCard;
    sumEl.textContent = sumEl.textContent + " " + sum;
    messageEl.textContent = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    cardsEl.textContent = cardsEl.textContent + " " + firstCard + ", " + secondCard;
    sumEl.textContent = sumEl.textContent + " " + sum;
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
  }
}
