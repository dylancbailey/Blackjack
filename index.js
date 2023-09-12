let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// Functions
let startGame = () => {
    sumEl.textContent += sum
    cardsEl.textContent = "Cards: " + firstCard + " / " + secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }

    messageEl.textContent = message
}