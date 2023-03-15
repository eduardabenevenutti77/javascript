const frm = document.querySelector("form")
//const resp = document.querySelector("h3")
//const r1 = document.querySelector("resp")

//const frm pega o forms e analisa
//const resp e r1 puxa o espaço a onde será alocado o resultado do js

frm.addEventListener("submit", (e)=>{

    const med = frm.inMed.value
    const va = Number(frm.inValor.value)
    const promo = (va * 2) - 0.55

    alert("promoção  " + med)
    alert("leve 2 por apenas " + promo + " reais")
})