const listaSelecaoBancos = document.querySelectorAll(".banco");
console.log(listaSelecaoBancos)

listaSelecaoBancos.forEach(banco =>{
    banco.addEventListener("click", () => {

        const cartaoBancoAberto = document.querySelector(".aberto");
        cartaoBancoAberto.classList.remove("aberto");

        const idBancoSelecionado = banco.attributes.id.value;

        const idDoBancoParaAbrir = "cartao-" + idBancoSelecionado;

        const cartaoBancoParaAbrir = document.getElementById(idDoBancoParaAbrir);
        cartaoBancoParaAbrir.classList.add("aberto");

        const bancoAtivoNaListagem = document.querySelector(".ativo");
        bancoAtivoNaListagem.classList.remove("ativo");

        const CartaoSelecionadoNaListagem = document.getElementById(idBancoSelecionado);
        CartaoSelecionadoNaListagem.classList.add("ativo");
    })
})