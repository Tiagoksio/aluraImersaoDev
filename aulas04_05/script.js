var filme = {
    titulo:'',
    poster:'',
    trailer:'',
    sinopse:''
}
var filmes = []
function addRodape() {
    document.querySelector('#rodape').innerHTML = '' // limpar rodape
    let alinharPesquisaText = document.createElement('div') //div criada para alinhar o input e button referentes a pesquisa
    let addFilme = document.createElement('button')
    addFilme.innerHTML = 'Adicionar Filme'
    addFilme.setAttribute('id', 'adicionarFilme')
    let procurarBotao = document.createElement('button')
    procurarBotao.innerHTML = 'Pesquisar'
    let procurarTxt = document.createElement('input')
    procurarTxt.setAttribute('type', 'text')
    procurarTxt.setAttribute('placeholder', 'Nome do Filme')
    procurarTxt.setAttribute('size', '10')
    let rodape = document.querySelector('#rodape')
    rodape.appendChild(alinharPesquisaText)
    alinharPesquisaText.appendChild(procurarTxt)
    alinharPesquisaText.appendChild(procurarBotao)
    rodape.appendChild(addFilme)
}

function addFormulario() {
    document.querySelector('h1').innerText = 'Cadastro de Filmes'
    document.querySelector('#conteudo').innerHTML = `
    <form action="">
        <fieldset>
            <label for="iTitulo">Título: </label><input type="text" id="iTitulo">
        </fieldset>
        <fieldset>
            <label for="iPoster">URL da imagem do poster: </label><input type="url"  id="iPoster">
        </fieldset>
        <fieldset>
            <label for="iSinopse">Sinopse: </label><textarea id="iSinopse" cols="50" rows="10"></textarea></fieldset>
        <fieldset>
            <label for="iTrailer">Iframe do trailer: </label><input type="text" id="iTrailer">
        </fieldset>
    </form>`
    document.querySelector('#rodape').innerHTML = `
    <button id='enviar' onclick ='listarFilmes()'>Enviar</button>`
}
function listarFilmes() {
    document.querySelector('h1').innerText = 'Aluraflix'
    var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

    document.querySelector('#conteudo').innerHTML = ''
    for (var i = 0; i < listaFilmes.length; i++){
        document.querySelector('#conteudo').innerHTML += "<img src=" + listaFilmes[i] + ">"
    }
    addRodape()
    var addFilme = document.querySelector('#adicionarFilme')
    addFilme.addEventListener('click', addFormulario)
}
listarFilmes()


