const prompt = require("prompt-sync")() 
//adiciona o pacote 
const n1 = Number(prompt("informe o primeiro número:"))
const n2 = Number(prompt("informe o segundo número:"))
//pede os valores para os usuários atraves do comando prompt
const soma = n1 + n2
console.log('a soma é ' + soma)
//exibe o resultado no console