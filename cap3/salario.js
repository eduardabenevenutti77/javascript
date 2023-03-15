const prompt = require("prompt-sync")()

const salario = Number(prompt("informe o seu salário: "))
const tempo = Number(prompt("tempo de trabalho: "))

const quadri = Math.floor(tempo/4) 
//arredonda o valor para baixo
const acrescimo = salario * conta / 100

console.log(quadri + "anos trabalhados, receberá um ajuste no salário! o valor atual deverá ser de " + acrescimo.toFixed(2) + ' reais')
