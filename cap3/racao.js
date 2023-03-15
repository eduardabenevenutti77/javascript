const prompt = require("prompt-sync")()

const peso = Number(prompt("informe o peso da ração: "))
const consumo = Number(prompt("informe o consumo diário: "))

const calculo = peso * 1000
const duracao = Math.floor(calculo / consumo)
const sobra = calculo % consumo

console.log('duração da ração: '+ duracao + " dias")
console.log('a sobra é de ' + sobra + " gr")
