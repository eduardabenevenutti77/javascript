const frm = document.querySelector("form")
const r = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const hora = Number(frm.inFuso.value)

    let franca = hora + 5 //variável para calcular o horário na frança
    if(franca>24){ //se passar de 24h faça tal coisa
        franca = franca - 24
    }
    r.innerText= `a hora na frança é ${franca.toFixed(2)}`
})