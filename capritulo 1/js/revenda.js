const frm = document.querySelector("form")
const r1 = document.querySelector("#out1")
const r2 = document.querySelector("#out2")
const r3 = document.querySelector("#out3")

frm.addEventListener("submit", (e) =>{
    const carro = frm.inVec.value
    const valor = Number(frm.inValor.value)

    const entrada = valor * 0.50
    const parcela = entrada / 12

    alert("promoção:" + carro)
    alert("entrada de: " + entrada)
    alert("+ 12x de " + parcela.toFixed(2))
})