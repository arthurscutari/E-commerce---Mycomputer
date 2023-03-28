const abrirModal = document.querySelector(".div__carrinhoLoja");
const modalCarrinho = document.querySelector(".section__carrinhoLoja");

abrirModal.addEventListener("click", abrirCarrinho);

function abrirCarrinho() {
    modalCarrinho.showModal();
}
