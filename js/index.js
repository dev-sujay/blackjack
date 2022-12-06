const cardsArr = []
const message = document.querySelector("#message-el")
const cardsEl = document.querySelector("#cards-el")
const sumEl = document.querySelector("#sum-el")
const startBtn = document.querySelector(".start")
const newCardBtn = document.querySelector(".newcard")
const restartBtn = document.querySelector(".restart")
let isUserAlive = false
let hasBlackjack = false
let sum = 0
const coinsEl = document.getElementById("coins")
let coins = 200

// console.log(message);
// console.log(cards);
// console.log(sum);
// console.log(start);
// console.log(newCard);



const showRandomNum = () => {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

const startGame = () => {
    firstCard = showRandomNum()
    secondCard = showRandomNum()
    cardsArr.splice(0, cardsArr.length, firstCard, secondCard)
    startBtn.classList.add("hide")
    newCardBtn.classList.replace("hide", "show")
    coins -= 5
    coinsEl.innerHTML =`Coins Left : ${coins}`
    renderGame()

}

const showNewCard = () => {
    cardsArr.push(showRandomNum())
    renderGame()
}

const renderGame = () => {
    cardsEl.innerHTML =`Cards : ${cardsArr.join(" ")}`
    sum = cardsArr.reduce((accumulator, currentValue) => {
        accumulator += currentValue
        return accumulator
    }, 0)
    sumEl.innerHTML = `Sum : ${sum}`
    if(sum<21){
        message.innerHTML = `Please pick a new card`
        isUserAlive = true
        hasBlackjack = false
    }else if(sum===21){
        message.innerHTML = `Congrats! You got a blackjack`
        isUserAlive = false
        hasBlackjack = true
        newCardBtn.classList.remove("show")
        newCardBtn.classList.add("hide")
        restartBtn.classList.replace("hide", "show")
        coins += 5
        coinsEl.innerHTML = `Coins Left : ${coins}`
    }else{
        message.innerHTML = `ohh! You lost the game`
        isUserAlive = false
        hasBlackjack = false
        newCardBtn.classList.remove("show")
        newCardBtn.classList.add("hide")
        restartBtn.classList.replace("hide", "show")
        
    }
    


}

const resetGame = () => {
    message.innerHTML = `Wanna play a round?`
    cardsEl.innerHTML =`Cards :`
    sumEl.innerHTML = `Sum :`
    startBtn.classList.remove("hide")
    newCardBtn.classList.remove("show")
    restartBtn.classList.replace("show", "hide")
}

startBtn.addEventListener("click", startGame)
newCardBtn.addEventListener("click", showNewCard)
restartBtn.addEventListener("click", resetGame)



