const prompt = require("prompt-sync")()

const pessoas = Number(prompt("informe o número de pessoas que iram pescar:"))
const peixe = Number(prompt("informe a quantidade de peixe pego:"))

let pagar
if(peixe <= pessoas){
    pagar = pessoas * 20
}else{
    pagar = (pessoas * 20) + ((peixe - pessoas) * 12)
}

console.log(`o total a ser pago: ${pagar.toFixed(2)}`)