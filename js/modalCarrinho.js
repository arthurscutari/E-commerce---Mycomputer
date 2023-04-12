const abrir = document.querySelector(".div__carrinhoLoja");
const Carrinho = document.querySelector(".section__carrinhoLoja");
const CarrinhoComprar = document.querySelector(".div__comprarCarrinho");
const fechar = document.querySelector(".fecharCarrinho");

abrir.addEventListener('click', abrirCarrinho);

function abrirCarrinho() {
    
    Carrinho.style.display = 'flex';
    Carrinho.style.top = '0';
    Carrinho.style.right = '0';
    Carrinho.style.zindex = '999';
    Carrinho.style.position = 'fixed'; 

    CarrinhoComprar.style.display = 'flex';
    CarrinhoComprar.style.bottom = '0';
    CarrinhoComprar.style.right = '0';
    CarrinhoComprar.style.zindex = '999';
    CarrinhoComprar.style.position = 'fixed'; 
    
    
}

fechar.addEventListener("click", fecharCarrinho);

function fecharCarrinho(){

    Carrinho.style.display = 'none';
    CarrinhoComprar.style.display = 'none';
}