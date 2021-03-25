var jogadorPts = 0
var computadorPts = 0
var botJogar = document.getElementById('botJogar')
var botRegras = document.getElementById('botRegras')

botJogar.addEventListener('click', jogar)
botRegras.addEventListener('click', regras)

function mudarImagem(opt, ident) {
    switch (opt) {
        case 'tesoura':
            document.getElementById(ident).setAttribute('src', `https://www.wikihow.com/images_en/thumb/1/14/Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet2.jpg/v4-460px-Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet2.jpg.webp`)
            break;
        case 'pedra':
            document.getElementById(ident).setAttribute('src', `https://www.wikihow.com/images/thumb/8/8d/Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet1.jpg/v4-728px-Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet1.jpg`)
            break;
        case 'papel':
            document.getElementById(ident).setAttribute('src', `https://www.wikihow.com/images_en/thumb/5/59/Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet3.jpg/v4-460px-Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet3.jpg.webp`)
            break;
        case 'lagarto':
            document.getElementById(ident).setAttribute('src', `https://www.wikihow.com/images_en/thumb/a/a9/Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet4.jpg/v4-460px-Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet4.jpg.webp`)
            break;
        case 'spock':
            document.getElementById(ident).setAttribute('src', `https://www.wikihow.com/images_en/thumb/1/15/Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet5.jpg/v4-460px-Play-Rock-Paper-Scissors-Lizard-Spock-Step-2Bullet5.jpg.webp`)
            break;
    }
}
function maoPc() {
    let sorteio = parseInt((Math.floor(Math.random() * 10) + 1)/2)
    switch (sorteio) {
        case 1:
            mudarImagem('pedra', 'mao-pc')
            return 'pedra'
        case 2:
            mudarImagem('papel', 'mao-pc')
            return 'papel'
        case 3:
            mudarImagem('tesoura', 'mao-pc')
            return 'tesoura'
        case 4:
            mudarImagem('lagarto', 'mao-pc')
            return 'lagarto'
        case 5:
            mudarImagem('spock', 'mao-pc')
            return 'spock'
    }
}
function joquempo(maoJog, maoPc) {
    if (maoJog == 'pedra' && (maoPc == 'tesoura' || maoPc == 'lagarto')) {
        document.getElementById('placar').innerHTML = `${++jogadorPts} VS ${computadorPts}<hr><p>Player PC</p>` 
    } else if (maoJog == 'papel' && (maoJog == 'pedra' || maoPc == 'spock')) {
        document.getElementById('placar').innerHTML = `${++jogadorPts} VS ${computadorPts}<hr><p>Player PC</p>`
    } else if (maoJog == 'tesoura' && (maoPc == 'papel' || maoPc == 'lagarto')) {
        document.getElementById('placar').innerHTML = `${++jogadorPts} VS ${computadorPts}<hr><p>Player PC</p>`
    } else if (maoJog == 'lagarto' && (maoPc == 'spock' || maoPc == 'papel')) {
        document.getElementById('placar').innerHTML = `${++jogadorPts} VS ${computadorPts}<hr><p>Player PC</p>`
    } else if (maoJog == 'spock' && (maoPc == 'tesoura' || maoPc == 'pedra')) {
        document.getElementById('placar').innerHTML = `${++jogadorPts} VS ${computadorPts}<hr><p>Player PC</p>`
    } else if (maoJog != maoPc){
        document.getElementById('placar').innerHTML = `${jogadorPts} VS ${++computadorPts}<hr><p>Player PC</p>`
    } else {
        document.getElementById('placar').innerHTML = `${jogadorPts} VS ${computadorPts}<hr><p>Player PC</p>`
    }
}
function jogar() {
    let maoJogador = document.getElementById('maoJogador')
    let maoComputador = maoPc()
    joquempo(maoJogador.value, maoComputador)
    mudarImagem(maoJogador.value, 'mao-jogador')
    
    if (jogadorPts == 2) {
        confirm('Parabéns')
        jogadorPts = 0
        computadorPts = 0
    } else if (computadorPts == 2) {
        confirm('Não foi dessa vez')
        jogadorPts = 0
        computadorPts = 0
    }
}
function regras() {
    alert(`Regras
    Tesoura corta Papel
    Papel cobre Pedra
    Pedra esmaga Lagarto
    Lagarto envenena Spock
    Spock quebra Tesoura
    Tesoura decapita Lagarto
    Lagarto come Papel
    Papel desmente Spock
    Spock destrói Pedra
    Pedra quebra Tesoura`)
}