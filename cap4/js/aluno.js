const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
    e.preventDefault() //evita que a form seja enviada
    const nome = frm.inNome.value
    const n1 = Number(frm.inN1.value)
    const n2 = Number(frm.inN2.value)

    const media = (n1+n2)/2

    alert("a média do/a " + nome + " é "+ media)


})