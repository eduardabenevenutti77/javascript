const prompt = require("prompt-sync")

const num = Number(prompt("informe o valor: "))

if(num%2==0){
    console.log("${num} é par")
}else{
    console.log("${num} é impar")
}