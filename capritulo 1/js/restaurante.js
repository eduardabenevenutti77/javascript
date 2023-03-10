const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const quilo = Number(frm.inBuffer.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo
    resp.innerHTML = 'o valor a ser pago é ${valor.toFixed(2)}'

    e.preventDefault()
})