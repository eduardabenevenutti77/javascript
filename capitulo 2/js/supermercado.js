const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
    const prod = frm.inNome.value
    const preco = Number(frm.inValor.value)

    const p1 = (preco * 3) - 3
    const p3 = preco - 3

    alert(prod + " - PROMOÇÃO LEVE 3 PRODUTOS POR: " + p1 + ", com o 3 produto saindo por apenas " + p3 + " reais!! Não perca." )
})