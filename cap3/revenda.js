const prompt = require("prompt-sync")()

const veiculo = prompt("veiculo: ")
//pede o nome do veiculo para o usuário

const preco = Number(prompt("informe o valor do veiculo: "))

const entrada = preco * 0.50
const parcela = (preco * 0.50) /12

console.log('promoção ' + veiculo)
console.log('entrada de ' + entrada.toFixed(2))
console.log('12x de ' + parcela.toFixed(2))