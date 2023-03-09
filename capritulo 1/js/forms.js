const frm = document.querySelector("form").inNome.value
const resp = document.querySelector("h3")
// permite que criarmos uma ref entre o forms e o h3
// h3 será onde exibiremos a resposta ao usuário

frm.addEventListener("submit", (e) => { //cria um ouvinte que será acionado quando clicarmos no botão
    const nome = frm.inNome.value //pega o nome digitado na forms
    resp.innerText = 'olá ${nome}' // exibe a resposta ao usuário

    e.preventDefault()//previne o envio do forms
})