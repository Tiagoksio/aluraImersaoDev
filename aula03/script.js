var jogadorPts = 0
var computadorPts = 0
var maoJogador = document.getElementById('maoJogador')
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
    let sorteio = parseInt(Math.random().toFixed(1) * 10 / 2)
    switch (sorteio) {
        case 1:
            return 'pedra'
        case 2:
            return 'papel'
        case 3:
            return 'tesoura'
        case 4:
            return 'lagarto'
        case 5:
            return 'spock'
        default:
            maoPc()
            break;
    }
}
function joquempo(maoJog, maoPc) {
    if (maoJog == 'pedra' && (maoPc == 'tesoura' || maoPc == 'lagarto')) {
        jogadorPts++
    } else if (maoJog == 'papel' && (maoJog == 'pedra' || maoPc == 'spock')) {
        jogadorPts++
    } else if (maoJog == 'tesoura' && (maoPc == 'papel' || maoPc == 'lagarto')) {
        jogadorPts++
    } else if (maoJog == 'lagarto' && (maoPc == 'spock' || maoPc == 'papel')) {
        jogadorPts++
    } else if (maoJog == 'spock' && (maoPc == 'tesoura' || maoPc == 'pedra')) {
        jogadorPts++
    } else if (maoJog != maoPc){
        computadorPts++
    } else {
        return 'empate'
    }
}
function jogar() {
    var maoComputador = maoPc()
    mudarImagem(maoJogador.value, 'mao-jogador')
    mudarImagem(maoComputador, 'mao-pc')
    joquempo(maoJogador.value, maoComputador)
    if (jogadorPts == 2 || computadorPts == 2 ) {
        alert("GAME OVER")
        jogadorPts = 0
        computadorPts = 2
    }
    
}
function regras() {
    alert('regras')
}