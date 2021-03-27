var tituloForm = ''
var posterForm = ''
var trailerForm = ''
var sinopseForm = ''

var listaFilmes = []

function filme(titulo, poster, trailer, sinopse) {
    this.titulo = titulo
    this.poster = poster
    this.trailer = trailer
    this.sinopse = sinopse    
}

function addRodape() {
    document.querySelector('#rodape').innerHTML = '' // limpar rodape
    let alinharPesquisaText = document.createElement('div') //div criada para alinhar o input e button referentes a pesquisa
    let addFilme = document.createElement('button')
    addFilme.innerHTML = 'Adicionar Filme'
    addFilme.setAttribute('id', 'adicionarFilme')
    let botaoProcurar = document.createElement('button')
    botaoProcurar.innerHTML = 'Pesquisar'
    botaoProcurar.setAttribute('id', 'pesquisar')
    let procurarTxt = document.createElement('input')
    procurarTxt.setAttribute('type', 'text')
    procurarTxt.setAttribute('placeholder', 'Nome do Filme')
    procurarTxt.setAttribute('size', '10')
    let rodape = document.querySelector('#rodape')
    rodape.appendChild(alinharPesquisaText)
    alinharPesquisaText.appendChild(procurarTxt)
    alinharPesquisaText.appendChild(botaoProcurar)
    rodape.appendChild(addFilme)
}

function addFormulario() {
    document.querySelector('h1').innerText = 'Cadastro de Filmes'
    document.querySelector('#conteudo').innerHTML = `
    <form action="" oninput='coletarDados()'>
        <fieldset>
            <label for="iTitulo">Título: </label><input type="text" id="iTitulo" placeholder="Nome do filme" required>
        </fieldset>
        <fieldset>
            <label for="iPoster">URL da imagem do poster: </label><input type="url"  id="iPoster" placeholder="https://exemploDeUrlEmformatoJPG.jpg"required>
        </fieldset>
        <fieldset>
            <label for="iSinopse">Sinopse: </label><textarea id="iSinopse" cols="50" rows="10" placeholder="...essa turminha do barulho vai se meter em muita confusão..." required></textarea></fieldset>
        <fieldset>
            <label for="iTrailer">Iframe do trailer: </label><input type="text" id="iTrailer" placeholder="<iframe ... ...</iframe>"required>
        </fieldset>
        <button id='enviar' onclick='armazenar()'>Enviar</button>
    </form>`
    document.querySelector('#rodape').innerHTML = ``
}
function coletarDados() {
    tituloForm = document.querySelector('#iTitulo').value
    posterForm = document.querySelector('#iPoster').value
    trailerForm = document.querySelector('#iTrailer').value
    sinopseForm = document.querySelector('#iSinopse').value
}
function armazenar() {
    if (tituloForm == '' || posterForm == '' || trailerForm == '' || sinopseForm == '' || !posterForm.endsWith('jpg') || !trailerForm.endsWith('</iframe>')) {
        alert('Dados inválidos para efetuar cadastro')
    } else {
        listaFilmes.push(new filme (tituloForm, posterForm, trailerForm, sinopseForm))
        tituloForm = ''
        posterForm = ''
        trailerForm = ''
        sinopseForm = ''
    }
    listarFilmes()
}
// function pesquisar() {
    
// }
function listarFilmes() {
    document.querySelector('h1').innerText = 'Aluraflix'
    document.querySelector('#conteudo').innerHTML = ''
    for (let i = 0; i < listaFilmes.length; i++) {
        document.querySelector('#conteudo').innerHTML += `<img src="${listaFilmes[i].poster}">`
    }
    addRodape()
    var addFilme = document.querySelector('#adicionarFilme')
    addFilme.addEventListener('click', addFormulario)
    // var botaoProcurar = document.querySelector('#pesquisar')
    // botaoProcurar.addEventListener('click', pesquisar)
}
listarFilmes()


