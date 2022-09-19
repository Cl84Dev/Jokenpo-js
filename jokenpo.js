let tie = 0
let win = 0
let lose = 0
let play = document.getElementById('play')
let playerSelection = document.getElementById('playerSelection')
let cpuChoice = document.getElementById('cpuChoice')
let result = document.getElementById('result')
let score = document.getElementById('score')

function jokenpoPlay() {
    play.disabled = true
    playerSelection.disabled = true
    cpuChoice.innerHTML = ''
    result.innerHTML = ''
    setTimeout(() => cpuChoice.innerHTML ='JO', 500)
    setTimeout(() => cpuChoice.innerHTML ='KEN', 1000)
    setTimeout(() => cpuChoice.innerHTML ='PO!', 1500)
    setTimeout(jokenpo, 2000)
}

function jokenpo() {
    let cpu = parseInt(Math.random() * 3)
    let player = parseInt(playerSelection.value)
    let options = ['&#9994;', '&#9995;', '&#9996;']
    let mood = ['&#128556;', '&#128515;', '&#128557;']

    if (player === cpu) {
        result.innerHTML = `Empatou! ${mood[0]}`
        tie++

    } else if (player === 0 && cpu === 2 || player === 1 && cpu === 0 || player === 2 && cpu === 1 ) {
        result.innerHTML = `Você ganhou! ${mood[1]}`
        win++

    } else {
        result.innerHTML = `Você perdeu! ${mood[2]}`
        lose++
        
    }

    cpuChoice.innerHTML = options[cpu]
    score.innerHTML = `Vitórias: ${win}  Empates: ${tie}  Derrotas: ${lose}`

    setTimeout(() => {
        play.disabled = false
        playerSelection.disabled = false
        cpuChoice.innerHTML = ''
        result.innerHTML = ''
    }, 2000)
}

function reset() {
    win = 0
    tie = 0
    lose = 0
    score.innerHTML = `Vitórias: ${win}  Empates: ${tie}  Derrotas: ${lose}`
}

