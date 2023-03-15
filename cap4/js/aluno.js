const frm = document.querySelector("form")
const r1 = document.querySelector("h3")
const r2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    e.preventDefault() //evita que a form seja enviada
    const nome = frm.inNome.value
    const n1 = Number(frm.inN1.value)
    const n2 = Number(frm.inN2.value)

    const media = (n1+n2)/2

    r1.innerText = `a média das notas é ${media.toFixed(2)}`

    if(media>=7){
        r2.innerText =`parabéns ${nome}! voce foi aprovado/a`
        r2.style.color= "blue"
    }else if(media >=4){
        r2.innerText= `vc está em exame, ${nome}!`
        r2.style.color= "green"
    }else{
        r2.innerText= `vc foi reprovado/a, ${nome}!`
        r2.style.color= "red"
    }


})