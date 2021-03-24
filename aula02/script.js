var operando01 = ''
var operando02 = ''
var operador = ''
var tela = document.getElementById('tela')
function apagar(operandoTxt) {
    operandoTxt = operandoTxt.slice(0,-1)
    return operandoTxt
}
function calcular(op1, opnd, op2) {
    switch (opnd) {
        case '+':
            resposta = op1 + op2
            return resposta
        case '-':
            resposta = op1 - op2
            return resposta;
        case '*':
            resposta = op1 * op2
            return resposta;
        case '/':
            if (op1 == 0 || op2 == 0) {
                resposta = "Impossível dividir"
                return resposta;
            } else {
                resposta = op1 / op2
                return resposta;
            }
    }
}
function operadoresOperandos(digito) {
    // Verifica se é um operando
    if(!isNaN(Number(digito)) || digito == '.') {
        if (operador == '') {
            operando01 += digito
            tela.innerText = operando01
        // Verifica se o operando 01 já foi inserido
        } else {
            operando02 += digito
            tela.innerText = `${operando01} ${operador} ${operando02}`
        }        
    } else if (digito == 'apagar') {
        if (operador == '') {
            operando01 = apagar(operando01)      
            tela.innerText = operando01
        } else {
            operando02 = apagar(operando02)
            tela.innerText = `${operando01} ${operador} ${operando02}`
        }
    } else if (digito == '='){
        res = calcular(Number(operando01), operador, Number(operando02))
        tela.innerText = res
        operando01 = '';
        operando02 = '';
        operador = '';        
    } else {
        operador = digito
        tela.innerText = `${operando01} ${operador}`
    }
}