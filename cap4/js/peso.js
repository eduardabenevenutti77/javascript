const frm = document.querySelector("form")
const r = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value
    const masc = frm.inMasc.value
    const altura = Number(frm.inAltura.value)

    let peso //declaração da variável peso
    if(masc){
        peso = 22*Math.pow(altura,2)
    } else{
        peso = 21*Math.pow(altura,2)
    }

    r.innerText = `${nome}: seu peso ideal é ${peso.toFixed(3)} kg!`
})