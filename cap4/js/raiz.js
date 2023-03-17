const frm = document.querySelector("form")
const r = document.querySelector("h3")

frm = addEventListener("submit", (e)=>{
    e.preventDefault()

    const num = Number(frm.inRaiz.value)
    const raiz = Math.sqrt(num) //calcula a raiz quadrada
    if (Number.isInteger(raiz)){
        r.innerText = `raiz: ${raiz}`
    } else{
        r.innerText = `não existe raiz exata desse número: ${num} !`
    }
})