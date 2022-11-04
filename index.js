
let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

console.log(homeEl)
console.log(guestEl)

let count = 0

function firstBtn() {
    count += 1
    homeEl.textContent = count
}

function secondBtn() {
    count+= 2
    homeEl.textContent = count
}

function thirdBtn() {
    count += 3
    homeEl.textContent = count
}

    let guestPoints = 0

function guest1() {
    guestPoints += 1
    guestEl.textContent = guestPoints
}

function guest2() {
    guestPoints += 2
    guestEl.textContent = guestPoints
}

function guest3() {
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function newGames() {
    homeEl.textContent = 0
    guestEl.textContent = 0
    count = 0
    guestPoints = 0
}