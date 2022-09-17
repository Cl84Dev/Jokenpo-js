let tie = 0
let win = 0
let lose = 0

function jokenpoPlay() {
    document.getElementById('play').disabled = true
    document.getElementById('player').disabled = true
    document.getElementById('cpuChoice').innerHTML = ''
    document.getElementById('result').innerHTML = ''
    setTimeout(() => document.getElementById('cpuChoice').innerHTML ='JO', 500)
    setTimeout(() => document.getElementById('cpuChoice').innerHTML ='KEN', 1000)
    setTimeout(() => document.getElementById('cpuChoice').innerHTML ='PO!', 1500)
    setTimeout(jokenpo, 2000)
}

function jokenpo() {
    let cpu = parseInt(Math.random() * 3)
    let player = parseInt(document.getElementById('player').value)
    let cpuChoice = ['&#9994;', '&#9995;', '&#9996;']

    if (player === cpu) {
        document.getElementById('cpuChoice').innerHTML = cpuChoice[cpu]
        document.getElementById('result').innerHTML = 'Empatou! &#128556;'
        tie = tie + 1

    } else if (player === 0 && cpu === 2 || player === 1 && cpu === 0 || player === 2 && cpu === 1 ) {
        document.getElementById('cpuChoice').innerHTML = cpuChoice[cpu]
        document.getElementById('result').innerHTML = 'Você ganhou! &#128515;'
        win = win + 1

    } else {
        document.getElementById('cpuChoice').innerHTML = cpuChoice[cpu]
        document.getElementById('result').innerHTML = 'Você perdeu! &#128557;'
        lose = lose + 1
        
    }

    document.getElementById('score').innerHTML = `Vitórias: ${win}  Empates: ${tie}  Derrotas: ${lose}`

    setTimeout(() => {
        document.getElementById('play').disabled = false
        document.getElementById('player').disabled = false
        document.getElementById('cpuChoice').innerHTML = ''
        document.getElementById('result').innerHTML = ''
    }, 1500)
}

function reset() {
    win = 0
    tie = 0
    lose = 0
    document.getElementById('score').innerHTML = `Vitórias: ${win}  Empates: ${tie}  Derrotas: ${lose}`
}

