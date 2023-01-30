let num1 = 8
let num2 = 2

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

let sumEl = document.getElementById("sum-el")

num1El.textContent = num1
num2El.textContent = num2

function add() {
    let results = num1 + num2
    sumEl.textContent = "Sum :" + results
}

function sub() {
    let results = num1 - num2
    sumEl.textContent = "Sum :" + results
}

function mul() {
    let results = num1 * num2
    sumEl.textContent = "Sum :" + results
}

function div() {
    let results = num1 / num2
    sumEl.textContent = "Sum :" + results
}