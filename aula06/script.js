
var jogador = {
    foto:'',
    nome: '',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}
var jogadores = []
function mostrarRanking() {
    let ranking = document.querySelector('#ranking')
    ranking.style.display = 'block'
}
function fecharRanking() {
    let ranking = document.querySelector('#ranking')
    ranking.style.display = 'none'
}
function cadastrarJogador() {
    let paginaDeCadastro = document.querySelector('#cadastrar')
    paginaDeCadastro.style.display = 'block'
    
}
function fecharCadastro() {
    let paginaDeCadastro = document.querySelector('#cadastrar')
    paginaDeCadastro.style.display = 'none'
}

function exibirJogadoresNaTela(jogadores) {
    var classificacao = ""
    for (var i = 0; i < jogadores.length; i++) {
        classificacao += "<tr><td>" + jogadores[i].foto + "</td>"
        classificacao += "<td>" + jogadores[i].nome + "</td>"
        classificacao += "<td>" + jogadores[i].vitorias + "</td>"
        classificacao += "<td>" + jogadores[i].empates + "</td>"
        classificacao += "<td>" + jogadores[i].derrotas + "</td>"
        classificacao += "<td>" + jogadores[i].pontos + "</td>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = classificacao
}
function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}
function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}
var tabuleiro = ['','','','','','','','','']
var simbolos = ["X", "O"]
var jogoFinalizado = false
var simboloVencedor
const sequenciaVitoriosa = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function gameOver() {
    for (let i = 0; i < sequenciaVitoriosa.length; i++) {
        if((tabuleiro[sequenciaVitoriosa[i][0]] == tabuleiro[sequenciaVitoriosa[i][1]] && tabuleiro[sequenciaVitoriosa[i][1]]) == tabuleiro[sequenciaVitoriosa[i][2]] && tabuleiro[sequenciaVitoriosa[i][2]]!= '') {
            simboloVencedor = tabuleiro[sequenciaVitoriosa[i][0]]
            return true
        }        
    }
}
function mudarSimbolo(simbolos) {
    (simbolos[0] == "X")? simbolos[0] = "O": simbolos[0] = "X"
    return simbolos[0]         
}
function jogada(index) {
    if(tabuleiro[index] != '') {
        alert("Opção já preenchida. Faça outra jogada")
    } else {
        let simbolo = mudarSimbolo(simbolos)
        tabuleiro[index] = simbolo
        imprimirTabuleiro(document.querySelector('#jogo'))
        jogoFinalizado = gameOver()
        if (jogoFinalizado == true) {
            alert(`O jogador ${simboloVencedor} venceu.`)
        }
    }
}
function imprimirTabuleiro(jogoDaVelha) {
    jogoDaVelha.innerHTML = ''
    for (let i in tabuleiro) {
        jogoDaVelha.innerHTML += '<div onclick = "jogada('+i+')">' + tabuleiro[i] + '</div>'
    }
}
imprimirTabuleiro(document.querySelector('#jogo'))

exibirJogadoresNaTela(jogadores)

