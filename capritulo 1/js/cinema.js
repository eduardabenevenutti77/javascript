const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const tempo = Number(frm.inTempo.value)

    const horas = Math.floor( tempo /60)
    const minutos = tempo % 60

    resp1.innerText = nome
    resp2.innerText = (horas + "hora "+ minutos + " minutos")
})