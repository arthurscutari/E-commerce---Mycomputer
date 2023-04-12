
const carrinhoDeCompras = document.querySelector(".section__carrinhoLoja");
const botoesComprar = document.querySelectorAll(".div__produtoLojaItemBotao");
botoesComprar.forEach(botao => {
  botao.addEventListener("click", criarEspacocarrinho);
});


function criarEspacocarrinho() {
    /*criando divs.*/
    const divProdutoNoCarrinho = document.createElement("div");
    const divImagemCarrinho = document.createElement("div");
    const divDescricaoCarrinho = document.createElement("div");
    const divPrecoCarrinho = document.createElement("div");
    const imgProdutoCarrinho = document.createElement("img");
    const precoProdutoCarrinho = document.createElement ("p");
    const descProdutoCarrinho = document.createElement ("p");

    /*Selecionando os conteudos do card.*/
    const imgProdutoLoja = this.parentNode.querySelector(".img_PRODUTO");
    const descProdutoLoja = this.parentNode.querySelector(".p__descriçãoItem");
    const precoProdutoLoja = this.parentNode.querySelector(".h3__precoLojaItem");

    console.log(descProdutoLoja,precoProdutoLoja);

    /*Add classes nas divs.*/
    
    
    carrinhoDeCompras.appendChild(divProdutoNoCarrinho);
    divProdutoNoCarrinho.appendChild(divImagemCarrinho);
    divProdutoNoCarrinho.appendChild(divDescricaoCarrinho);
    divProdutoNoCarrinho.appendChild(divPrecoCarrinho); 
    divImagemCarrinho.appendChild(imgProdutoCarrinho);
    divPrecoCarrinho.appendChild(precoProdutoCarrinho);
    divDescricaoCarrinho.appendChild(descProdutoCarrinho);


    divProdutoNoCarrinho.classList.add("div__produtoNoCarrinho");
    divImagemCarrinho.classList.add("div__imagemProdutoCarrinho");
    divDescricaoCarrinho.classList.add("div__descricaçãoProdutoCarrinho");
    divPrecoCarrinho.classList.add("div__preçoProdutoCarrinho");
    imgProdutoCarrinho.classList.add("imagem__produtoCarrinho");

    /*Pegar atributos*/

    const imgSRC = imgProdutoLoja.getAttribute("src");
    const descValue = descProdutoLoja.innerHTML;
    const precoValue = precoProdutoLoja.innerHTML;

    /*Atribuindo propriedades*/

    imgProdutoCarrinho.setAttribute('src', imgSRC);
    
    precoProdutoCarrinho.innerHTML = precoValue;
    descProdutoCarrinho.innerHTML = descValue;
    
}