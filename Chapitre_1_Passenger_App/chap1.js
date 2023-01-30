// document.getElementById("count-rel").innerText = 5

// Exercices 1 --> Loguer dans la console
// let varAge = 21 // --> Création d'une variable et assignation

// console.log(varAge) // --> Log dans la console

// Exercices 2 --> Opértion avec variables

// let myAge = 21
// let humanDogRation = 7

// myDogAge = myAge * humanDogRation
// console.log(myDogAge)

// Exercices 3 --> Incrémentation et inversément

// let bonusPoint = 50 
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// Exercices 4 --> Création d'une fonction

// function logNumber() {
//     console.log(42)
// }

// logNumber()

// function totalTime() {
//     lap1 = 34
//     lap2 = 33
//     lap3 = 36
//     console.log(lap1 + lap2 + lap3)
// }

// totalTime()

// Exercices 5 --> Incrémentation avec une fonction

// let lapsCompleted = 0

// function lapCounter() {
//     lapsCompleted++
// }

// lapCounter()
// lapCounter()
// lapCounter()
// console.log(lapsCompleted)

// Execerices 6 --> Incrémentation via le onclick event et bouton save + amélioration de save + reset de count quand save

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    countEl.textContent = count + 1 // innerText --> ne rend pas tout visible 
    count++
}

function save() {
    let saveCounter = count + " - "
    saveEl.textContent += saveCounter
    
    countEl.textContent = 0
    count = 0
}

// Execercices 7 --> Création d'une variable pour les strings

// let username = "Eflay"

// let message = "You have tree new notifications"

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// let name = "Edouard"

// let greeting = "Hi, my name is "

// let myGreeting = greeting + name

// console.log(myGreeting)

// Excercices 8 --> Création d'un message de bienvenu + amélioration

let welcomeEl = document.getElementById("welcome-el")

let name = "Eflay"

let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += " :)"

// Exercices supplémentaire 

// let firstName = "Edouard"

// let lastName = " Bettignies"

// let fullName = firstName + lastName

// console.log(fullName)

// let pseudo = "Eflay !"

// let intro = "Hi there, "

// function ex1() {
//     let message = intro + pseudo
//     console.log(message)
// }

// ex1()

// let myPoints = 3

// function add() {
//     myPoints += 3
// }

// function remove() {
//     myPoints -= 1
// }

// remove()
// remove()
// add()
// add()
// add()

// console.log(myPoints)

// Récapitulation 
// ------------------
// * Script Tags
// * Variables
// * Numbers
// * Strings 
// * Console Log
// * Functions 
// * The DOM 
// * getElementById
// * innerText
// * textContent