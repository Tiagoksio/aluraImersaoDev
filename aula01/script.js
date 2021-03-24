const DOLAR = 5.5
const IENE = 0.051
const LIBRA = 7.64
const EURO = 6.58
var calcularBotao = document.getElementById('iCalcular')
calcularBotao.addEventListener('click', calc)
var res = document.getElementById('res')
function cambio(dest) {
    if (dest == "Eua") {
        return (Number(document.getElementById('iReais').value) / DOLAR).toLocaleString('en-US',{style: 'currency', currency: 'USD'})
    } else if (dest == "Japão") {
        return (Number(document.getElementById('iReais').value) / IENE).toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
    } else if (dest == "Europa") {
        return (Number(document.getElementById('iReais').value) / EURO).toLocaleString('de-DE', {style:'currency', currency: 'EUR'})
    } else {
        return (Number(document.getElementById('iReais').value) / LIBRA).toLocaleString('en-GB',{style:'currency', currency: 'GBP'})
    }
}
function calc() {
    var destino = document.getElementById('iDestino').value
    var dinheiroDestino = cambio(destino)
    res.innerHTML = `Você terá ${dinheiroDestino}. Boa viagem!`
    document.getElementById('iReais').value = ''
    document.getElementById('iReais').focus()
}