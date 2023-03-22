const prompt = require("prompt-sync")()

const valor = Number(prompt("informe o valor do produto: "))
const aux = Math.floor(valor/20) //declaração de uma variável auxiliar que ira calcular o número de parcelas desse produto
const parcelas = aux == 0? 1 : aux > 6 ? 6 : aux
const valorParcelas = valor / parcelas

console.log(`o produto poderá ser pago em ${parcelas} parcelas de ${valorParcelas} reais!`)