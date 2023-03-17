const frm = document.querySelector("form")
const r1 = document.querySelector("h3")
const r2 = document.querySelector("h4")
const r3 = document.querySelector("h5")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const saque = Number(frm.inSaque.value)
    if (saque%10 !=0){
        alert("valor inválido para notas disponíveis: R$10/50/100")
        frm.inSaque.focus()
        return
    }
    const notascem = Math.floor(saque/100)
    let resto = saque%100
    const notascinq = Math.floor(saque/50)
    resto = saque%50
    const notasdez = Math.floor(saque/10)
        if(notascem>0){
            r1.innerText = `notas de 100: ${notascem}`
        }
        if(notascinq>0){
            r2.innerText = `notas de 50: ${notascinq}`
        }
        if(notasdez>0){
            r3.innerText = `notas de 10: ${notasdez}`
        }

})