// Controles html
var ranking = document.querySelector('#ranking')
var paginaDeCadastro = document.querySelector('#cadastrar')
var paginaJogo = document.querySelector('#display-principal')
var selectPlayer01 = document.querySelector("#select-p1")
var selectPlayer02 = document.querySelector("#select-p2")
// dados de cadastro
var jogadores = []
function addJogador(foto, nome, vitorias, empates, derrotas, pontos) {
    this.foto = foto
    this.nome = nome
    this.vitorias = vitorias
    this.empates = empates
    this.derrotas = derrotas
    this.pontos = pontos
}
//funções de exibição
function mostrarRanking() {
    ranking.style.display = 'block'
    paginaDeCadastro.style.display = 'none'
    paginaJogo.style.display = 'none'
    exibirJogadoresNaTela(jogadores)
}
function gerarSelecao() {
    let playerSelectP1 = document.querySelector('#select-p1')
    let playerSelectP2 = document.querySelector('#select-p2')
    playerSelectP1.innerHTML = ''
    for (let index in jogadores) {
        playerSelectP1.innerHTML += '<option value="'+jogadores[index].nome+'">'+jogadores[index].nome+'</option>'
    }
    playerSelectP2.innerHTML = ''
    for (index in jogadores) {
        playerSelectP2.innerHTML += '<option value="'+jogadores[index].nome+'">'+jogadores[index].nome+'</option>'
    }
}
function fecharRanking() {
    ranking.style.display = 'none'
    paginaJogo.style.display = 'grid'
}
function novoJogador(foto, nome) {
    jogadores.push(new addJogador(foto, nome, 0, 0, 0, 0))
    gerarSelecao()
    fecharCadastro()
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
        classificacao += "<tr><td>" + '<img src="' + jogadores[i].foto +'">' + "</td>" 
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
var player01 = {nome: '', simbolo: "O", index:""}
var player02 = {nome: '', simbolo: "X", index:""}
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
        if((tabuleiro[sequenciaVitoriosa[i][0]] == tabuleiro[sequenciaVitoriosa[i][1]] && tabuleiro[sequenciaVitoriosa[i][1]]) == tabuleiro[sequenciaVitoriosa[i][2]] && tabuleiro[sequenciaVitoriosa[i][2]]!= '' || tabuleiro.indexOf('') == -1) {
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
    jogadoresSelecionados = selecaoDeJogadores()
    if(jogadoresSelecionados == false) {
        alert("Selecione jogadores diferentes. Você pode cadastrar novos se precisar!")
    }else if(tabuleiro[index] != '') {
        alert("Opção já preenchida. Faça outra jogada")
    } else {
        let simbolo = mudarSimbolo(simbolos)
        tabuleiro[index] = simbolo
        imprimirTabuleiro(document.querySelector('#jogo'))
        jogoFinalizado = gameOver()
        if (jogoFinalizado == true) {
            alert(`O jogador ${simboloVencedor} venceu.`)
            if (player01.simbolo == simboloVencedor) {
                console.log(player01.index)
                console.log(player01.simbolo)
                console.log(simboloVencedor)
                adicionarVitoria(player01.index)
                adicionarDerrota(player02.index)               
            } else if(player02.simbolo == simboloVencedor) {
                adicionarVitoria(player02.index)
                adicionarDerrota(player02.index)
            } else {
                adicionarEmpate(player01.index)
                adicionarEmpate(player02.index)
            }
            selectPlayer01.disabled = false // Reabilita a troca de jogadores
            selectPlayer02.disabled = false
            tabuleiro.fill("") // limpar o tabuleiro
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
function localizarIndex(nome) {
    for (let index = 0; index < jogadores.length; index++) {
        if(jogadores[index].nome == nome) {
            return index
        }
    }
    return -1
}
function selecaoDeJogadores() {
    player01.nome = selectPlayer01.value
    player02.nome = selectPlayer02.value
    player01.index = localizarIndex(player01.nome)
    player02.index = localizarIndex(player02.nome)
    if(player01.nome == player02.nome) {
        return false;
    }else{
        selectPlayer01.disabled = true
        selectPlayer02.disabled = true
    }
    return true;
    
}
//chamadas
imprimirTabuleiro(document.querySelector('#jogo'))


