// Exercices Blackjack

let cards = [] // Tableau
let player = { // Objet
    name: "Eflay",
    chips: 150
}

let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let cardEl = document.querySelector("#card-el")
// Permet de contrôler tous les éléments y compris css, id, class, ...
let sumEl = document.querySelector("#sum-el") // Façon plus dynamique de capturer les éléments mais nous devons spécifier le # devant pour l'id et les class par .
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + " €" + player.chips // Utilisation d'un objet

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    cardEl.textContent = "Cards : " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum : " + sum 

    game()
}

function game() {
    if (sum <= 20) {
        message = "Do you want to draw an other card ?"
    } else if (sum === 21) {
        message = "Blackjack !"
        hasBlackJack = true
    } else {
        message = "You're out of the game !"
        isAlive = false

    }
    messageEl.textContent = message
}

function renderGame() {
    cardEl.textContent += " " + cards[cards.length - 1]
    sumEl.textContent = "Sum : " + sum

    game()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card

        cards.push(card)

        renderGame()
    
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()* 12) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    }
    return randomNumber
}