let tie = 0
let win = 0
let lose = 0

function jokenpo(){

let cpu = parseInt(Math.random() * 3)
let player = parseInt(document.getElementById('player').value)
let cpuChoice

    if (cpu === 0) {
        cpuChoice = '&#9994;'
    } if (cpu === 1) {
        cpuChoice = '&#9995;'
    } if (cpu === 2) {
        cpuChoice = '&#9996;'
    }

    if (player === cpu) {
        document.getElementById('cpuChoice').innerHTML = cpuChoice
        document.getElementById('result').innerHTML = 'Empatou! &#128556;'
        tie = tie + 1
        document.getElementById('score').innerHTML = `Vitórias: ${win}; Empates: ${tie}; Derrotas: ${lose}`
        
    } else if (player === 0 && cpu === 2 || player === 1 && cpu === 0 || player === 2 && cpu === 1 ) {
        document.getElementById('cpuChoice').innerHTML = cpuChoice
        document.getElementById('result').innerHTML = 'Você ganhou! &#128515;'
        win = win + 1
        document.getElementById('score').innerHTML = `Vitórias: ${win}; Empates: ${tie}; Derrotas: ${lose}`

    } else {
        document.getElementById('cpuChoice').innerHTML = cpuChoice
        document.getElementById('result').innerHTML = 'Você perdeu! &#128557;'
        lose = lose + 1
        document.getElementById('score').innerHTML = `Vitórias: ${win}; Empates: ${tie}; Derrotas: ${lose}`

    }
    
}