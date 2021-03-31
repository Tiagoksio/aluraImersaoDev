// Controles html
var ranking = document.querySelector('#ranking')
var paginaDeCadastro = document.querySelector('#cadastrar')
var paginaJogo = document.querySelector('#jogo')
// dados de cadastro
function jogador(foto, nome) {
    this.foto = foto
    this.nome = nome
    this.vitorias = 0
    this.empates = 0
    this.derrotas = 0
    this.pontos = 0
}
var jogadores = []
//funções de exibição
function mostrarRanking() {
    ranking.style.display = 'block'
    paginaDeCadastro.style.display = 'none'
    paginaJogo.style.display = 'none'
}
function fecharRanking() {
    ranking.style.display = 'none'
    paginaJogo.style.display = 'grid'
}
function coletarDados() {
    let foto = document.querySelector('#iFoto').value
    let nome = document.querySelector('#iNome').value 
    let confirmarCadastro = document.querySelector('#confirmarCadastro')
    confirmarCadastro.addEventListener('click', novoJogador(foto, nome))   
}
function novoJogador(foto, nome) {
    jogadores.push(new jogador(foto, nome))
    console.log(jogadores)    
}
function cadastrarJogador() {
    paginaDeCadastro.style.display = 'block'
    ranking.style.display = 'none'
    paginaJogo.style.display = 'none'
    
}
function fecharCadastro() {
    paginaDeCadastro.style.display = 'none'
    paginaJogo.style.display = 'grid'
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
//Funções de calculo de pontos
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
//Bloco referênte às regras do jogo
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
function iniciarJogo() {
    paginaDeCadastro.style.display = 'none'
    ranking.style.display = 'none'
    paginaJogo.style.display = 'grid'
    
}
//chamadas
imprimirTabuleiro(document.querySelector('#jogo'))
exibirJogadoresNaTela(jogadores)

