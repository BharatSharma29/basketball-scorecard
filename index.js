const homeScore = document.getElementById("home-score")

document.getElementById("home-one").addEventListener('click', () => {
    homeScore.innerText = Number(homeScore.innerText) + 1    
})

document.getElementById("home-two").addEventListener('click', () => {
    homeScore.innerText = Number(homeScore.innerText) + 2    
})

document.getElementById("home-three").addEventListener('click', () => {
    homeScore.innerText = Number(homeScore.innerText) + 3    
})

const guestScore = document.getElementById("guest-score")

document.getElementById("guest-one").addEventListener('click', () => {
    guestScore.innerText = Number(guestScore.innerText) + 1    
})

document.getElementById("guest-two").addEventListener('click', () => {
    guestScore.innerText = Number(guestScore.innerText) + 2    
})

document.getElementById("guest-three").addEventListener('click', () => {
    guestScore.innerText = Number(guestScore.innerText) + 3    
})

document.getElementById("btn").addEventListener("click", () => {
    homeScore.innerText = 0
    guestScore.innerText = 0
})